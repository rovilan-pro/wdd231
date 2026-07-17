const spotlightContainer = document.querySelector("#spotlight-container");

async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load member data.");
        }

        const members = await response.json();

        // Keep only Silver (2) and Gold (3) members
        const qualified = members.filter(
            member => member.membership === 2 || member.membership === 3
        );

        // Shuffle the array
        qualified.sort(() => Math.random() - 0.5);

        // Display 2 or 3 randomly
        const numberToShow = Math.random() < 0.5 ? 2 : 3;
        const selected = qualified.slice(0, numberToShow);

        selected.forEach(displaySpotlight);

    } catch (error) {
        console.error(error);
    }
}

function displaySpotlight(member) {

    const card = document.createElement("section");
    card.classList.add("spotlight-card");

    card.innerHTML = `
        <h3>${member.name}</h3>

        <img src="images/${member.image}"
             alt="${member.name} Logo"
             loading="lazy">

        <p><strong>Phone:</strong> ${member.phone || "Not Available"}</p>

        <p><strong>Address:</strong> ${member.address}</p>

        <p><strong>Industry:</strong> ${member.industry}</p>

        <p><strong>Membership:</strong> ${
            member.membership === 3 ? "Gold Member" : "Silver Member"
        }</p>

        <a href="${member.website}" target="_blank">
            Visit Website
        </a>
    `;

    spotlightContainer.appendChild(card);
}

loadSpotlights();