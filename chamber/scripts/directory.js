// Select Elements
const container = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

// Fetch Member Data
async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Could not load member data.");
        }

        const members = await response.json();
        displayMembers(members);

    } catch (error) {
        console.error(error);
    }
}

// Display Members
function displayMembers(members) {

    container.innerHTML = "";

    members.forEach(member => {

        let membershipLevel = "";

        switch (member.membership) {
            case 1:
                membershipLevel = "Member";
                break;
            case 2:
                membershipLevel = "Silver";
                break;
            case 3:
                membershipLevel = "Gold";
                break;
            default:
                membershipLevel = "Member";
        }

        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Industry:</strong> ${member.industry}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Phone:</strong> ${member.phone || "N/A"}</p>

            <p><strong>Membership:</strong> ${membershipLevel}</p>

            <p>
                <a href="${member.website}" target="_blank" rel="noopener">
                    Visit Website
                </a>
            </p>
        `;

        container.appendChild(card);
    });
}

// Grid View
gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

// List View
listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});

// Load Members
getMembers();

