// 1. Web Form Validation API & Form Handling
const contactForm = document.getElementById("contactForm");
const ageInput = document.getElementById("age");
const ageError = document.getElementById("ageError");
const formResult = document.getElementById("formResult");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!ageInput.checkValidity()) {
            ageError.textContent = ageInput.validationMessage;
            return;
        }
        ageError.textContent = "";
        formResult.textContent = "Message sent successfully!";

        localStorage.setItem("contactName", document.getElementById("name").value);
        sessionStorage.setItem("draftMessage", document.getElementById("message").value);

        contactForm.reset();
    });
}

// 2. localStorage
const visitorName = document.getElementById("visitorName");
const saveLocalBtn = document.getElementById("saveLocalBtn");
const localResult = document.getElementById("localResult");

if (saveLocalBtn) {
    localResult.textContent = localStorage.getItem("visitorName") || "No data";
    saveLocalBtn.addEventListener("click", function () {
        localStorage.setItem("visitorName", visitorName.value);
        localResult.textContent = localStorage.getItem("visitorName");
        visitorName.value = "";
    });
}

// 3. sessionStorage
const draftMessageText = document.getElementById("draftMessageText");
const saveSessionBtn = document.getElementById("saveSessionBtn");
const sessionResult = document.getElementById("sessionResult");

if (saveSessionBtn) {
    sessionResult.textContent = sessionStorage.getItem("draftMessageText") || "No draft";
    saveSessionBtn.addEventListener("click", function () {
        sessionStorage.setItem("draftMessageText", draftMessageText.value);
        sessionResult.textContent = sessionStorage.getItem("draftMessageText");
        draftMessageText.value = "";
    });
}

// 4. Geolocation API
const locationBtn = document.getElementById("locationBtn");
const locationResult = document.getElementById("locationResult");

if (locationBtn) {
    locationBtn.addEventListener("click", function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            locationResult.textContent = "Geolocation is not supported by this browser.";
        }
    });
}

function showPosition(position) {
    locationResult.innerHTML = `
        <p><strong>Latitude:</strong> ${position.coords.latitude}</p>
        <p><strong>Longitude:</strong> ${position.coords.longitude}</p>
    `;
}

function showError() {
    locationResult.textContent = "Unable to get location. Please allow location permission.";
}

// 5. Fetch API
const fetchBtn = document.getElementById("fetchBtn");
const axiosBtn = document.getElementById("axiosBtn");
const apiResult = document.getElementById("apiResult");

if (fetchBtn) {
    fetchBtn.addEventListener("click", function () {
        apiResult.innerHTML = "<p class='col-span-3 text-center text-gray-800'>Loading with Fetch API...</p>";

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                if (!response.ok) throw new Error("HTTP Error");
                return response.json();
            })
            .then(function (data) {
                displayUsers(data.slice(0, 6));
            })
            .catch(function (error) {
                apiResult.innerHTML = `<p class="text-red-600">${error}</p>`;
            });
    });
}

// 6. Axios
if (axiosBtn) {
    axiosBtn.addEventListener("click", function () {
        apiResult.innerHTML = "<p class='col-span-3 text-center text-gray-800'>Loading with Axios...</p>";

        axios.get("https://jsonplaceholder.typicode.com/users/1")
            .then(function (response) {
                displayUsers([response.data]);
            })
            .catch(function (error) {
                apiResult.innerHTML = `<p class="text-red-600">${error}</p>`;
            });
    });
}

// Display API Data Function
function displayUsers(users) {
    apiResult.innerHTML = "";
    users.forEach(function (user) {
        const card = document.createElement("div");
        card.className = "border rounded-lg p-6 shadow bg-gray-50 text-gray-800";
        card.innerHTML = `
            <h3 class="text-xl font-bold text-gray-900 mb-2">${user.name}</h3>
            <p class="text-gray-600">${user.email}</p>
            <p class="text-sm text-blue-600 mt-3">${user.company.name}</p>
        `;
        apiResult.appendChild(card);
    });
}

// 7. JSON.parse()
const parseBtn = document.getElementById("parseBtn");
if (parseBtn) {
    parseBtn.addEventListener("click", function () {
        const jsonText = `{
            "name": "John",
            "age": 25,
            "skills": ["HTML", "CSS", "JavaScript"]
        }`;
        const objectData = JSON.parse(jsonText);
        document.getElementById("parseResult").textContent =
            "Name: " + objectData.name + "\n" +
            "Age: " + objectData.age + "\n" +
            "Skills: " + objectData.skills.join(", ");
    });
}

// 8. JSON.stringify()
const stringifyBtn = document.getElementById("stringifyBtn");
if (stringifyBtn) {
    stringifyBtn.addEventListener("click", function () {
        const student = {
            name: "Anna",
            age: 22,
            isStudent: true,
            skills: ["HTML", "Tailwind CSS", "JavaScript"]
        };
        const json = JSON.stringify(student, null, 2);
        document.getElementById("stringifyResult").textContent = json;
    });
}