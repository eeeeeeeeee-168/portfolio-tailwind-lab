// Welcome Message
alert("Welcome to my portfolio website!");


// Profile Class
class Profile {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    introduce() {
        return `${this.name} - ${this.role}`;
    }
}
const profile = new Profile(
    "Siev E",
    "Frontend Developer Student"
);
console.log(profile.introduce());


// Getter and Setter
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
const user = new User("Nova");
console.log(user.name);
user.name = "John";
console.log(user.name);


// Inheritance
class Skill {
    constructor(name) {
        this.name = name;
    }
}
class ProgrammingSkill extends Skill {
    constructor(name) {
        super(name);
    }
}
const skill = new ProgrammingSkill("JavaScript");
console.log(skill.name);


// Show / Hide About Section
document
    .getElementById("toggleAbout")
    .addEventListener("click", () => {
        const about =
            document.getElementById("about");
        about.classList.toggle("hidden");
    });


// Dynamic Skill List
document
    .getElementById("addSkillBtn")
    .addEventListener("click", () => {
        const input =
            document.getElementById("skillInput");
        if (input.value.trim() === "") {
            return;
        }
        const skill =
            document.createElement("li");
        skill.textContent =
            input.value;
        skill.className =
            "bg-white p-2 rounded shadow mt-2";
        document
            .getElementById("skillList")
            .appendChild(skill);
        input.value = "";
    });


// Promise
function loadPortfolio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Siev E",
                role: "Frontend Developer Student"
            });
        }, 2000);
    });
}


// Async / Await
async function getPortfolio() {
    const data =
        await loadPortfolio();
    console.log(data);
    document
        .getElementById("portfolioData")
        .textContent =
        `${data.name} - ${data.role}`;
}
getPortfolio();


// Contact Form Event
document
    .querySelector("form")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Message Sent Successfully");

    });


    // Browser Information
console.log(screen.width);
console.log(screen.height);
console.log(navigator.userAgent);
documentាាា
    .getElementById("browserInfo")
    .innerHTML = `
        <p><strong>Screen Width:</strong> ${screen.width}px</p>
        <p><strong>Screen Height:</strong> ${screen.height}px</p>
        <p><strong>Browser:</strong> ${navigator.userAgent}</p>
    `;


    // Cookies
document.cookie =
    "visitor=Student";
console.log(document.cookie);


// Dark Mode Toggle
document
    .getElementById("themeBtn")
    .addEventListener("click", () => {
        document.body.classList.toggle("bg-gray-900");
        document.body.classList.toggle("text-white");
    });