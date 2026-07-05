const courses = [
{
    subject: "CSE",
    number: 110,
    credits: 2,
    completed: true
},
{
    subject: "CSE",
    number: 111,
    credits: 2,
    completed: true
},
{
    subject: "CSE",
    number: 210,
    credits: 2,
    completed: true
},
{
    subject: "CSE",
    number: 212,
    credits: 2,
    completed: true
},
{
    subject: "CSE",
    number: 270,
    credits: 2,
    completed: true
},
{
    subject: "CSE",
    number: 310,
    credits: 2,
    completed: true
},
{
    subject: "CSE",
    number: 370,
    credits: 2,
    completed: false
},
{
    subject: "WDD",
    number: 130,
    credits: 2,
    completed: true
},
{
    subject: "WDD",
    number: 131,
    credits: 2,
    completed: true
},
{
    subject: "WDD",
    number: 231,
    credits: 2,
    completed: false
}
];

const courseContainer = document.querySelector("#courses");
const credits = document.querySelector("#credits");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            ${course.subject} ${course.number}
        `;

        courseContainer.appendChild(card);

    });

    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);

    credits.textContent = `Total Credits: ${totalCredits}`;
}

// Display all courses on page load
displayCourses(courses);

// Filter Buttons

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {

    const wddCourses = courses.filter(course => course.subject === "WDD");

    displayCourses(wddCourses);

});

document.querySelector("#cse").addEventListener("click", () => {

    const cseCourses = courses.filter(course => course.subject === "CSE");

    displayCourses(cseCourses);

});