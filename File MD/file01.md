# Week 01 | Day 02 | Lab
Practice all HTML elements, input types, attributes, layout elements, and graphics learned in class.

---

# STEP 1 — Create the Basic HTML File

## What to do:
1. Open VS Code (or your editor).
2. Create a new file.
3. Save it as: `Week01_Day2_lab_.html`
4. Type the basic HTML structure below.

## Code (Type This First):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Complete Practice Lab</title>
    <meta name="description"
        content="HTML Practice Lab for students to learn and practice all HTML elements, input types, attributes, and HTML5 graphics.">

    <!-- Author -->
    <meta name="author" content="Liev Nova">

    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="HTML Complete Practice Lab">
    <meta property="og:description" content="Learn and practice HTML elements, forms, and HTML5 graphics step by step.">
    <meta property="og:image" content="lab-thumbnail.png">
    <meta property="og:type" content="website">
</head>
<body>

</body>
</html>
```

Everything else must be written inside the `<body>` tag.

---

# STEP 2 — Add Layout Structure

## What to do:
Inside the `<body>` tag, create the following layout elements in this exact order:

1. `<header>`
2. `<nav>`
3. `<section>`
4. `<article>`
5. `<aside>`
6. `<footer>`

## Where to put it:
Between `<body>` and `</body>`.

## Code:

```html
<header>
    <h1>Student Registration System</h1>
</header>

<nav>
    <a href="#">Home</a> |
    <a href="#">Courses</a> |
    <a href="#">Contact</a>
</nav>

<section>
    <h2>Main Section</h2>
    <p>This page demonstrates HTML elements learned in class.</p>
</section>

<article>
    <h3>About This Lab</h3>
    <p>This is a self-contained article section.</p>
</article>

<aside>
    <h4>Note</h4>
    <p>Please complete all required fields.</p>
</aside>

<footer>
    <p>© 2026 HTML Practice Lab</p>
</footer>
```

---

# STEP 3 — Create the Form

## What to do:
Now create a form INSIDE the `<section>` element (below the paragraph).

## Important:
The form must use:
- POST method
- multipart/form-data
- autocomplete off
- target="_blank"

## Code (Place inside `<section>`):

```html
<form action="/submit.php"
      method="POST"
      enctype="multipart/form-data"
      accept-charset="UTF-8"
      autocomplete="off"
      name="studentForm"
      target="_blank"
      rel="noopener">
```

Do NOT close the form yet.

---

# STEP 4 — Add Fieldset and Legend

## What to do:
Immediately inside the `<form>`, create:

```html
<fieldset>
    <legend>Personal Information</legend>
```

Do NOT close fieldset yet.

---

# STEP 5 — Add Text and Password Inputs

Add the following inside `<fieldset>`:

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" maxlength="10" placeholder="Enter username" title="Enter your username" required>
<br><br>

<label for="password">Password:</label>
<input type="password" id="password" name="password" placeholder="Enter password" title="Enter your password" required>
<br><br>
```

---

# STEP 6 — Add Email, Tel, URL, Search

Add below password:

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="Enter your email" title="Enter your email address" required>
<br><br>

<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" placeholder="Enter your phone number" title="Enter your telephone number">
<br><br>

<label for="website">Website:</label>
<input type="url" id="website" name="website" placeholder="https://example.com" title="Enter your website URL">
<br><br>

<label for="searchbox">Search:</label>
<input type="search" id="searchbox" name="searchbox" placeholder="Search..." title="Enter search query">
<br><br>
```

---

# STEP 7 — Add Number with Validation

Add:

```html
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="18" max="60" title="Enter your age" required>
<br><br>
```

---

# STEP 8 — Add Date Inputs

Add:

```html
<label for="birthday">Birthday:</label>
<input type="date" id="birthday" name="birthday" title="Select your birth date">
<br><br>

<label for="meeting">Meeting Time:</label>
<input type="datetime-local" id="meeting" name="meeting" title="Select meeting date and time">
<br><br>

<label for="expiry">Expiry Month:</label>
<input type="month" id="expiry" name="expiry" title="Select expiry month and year">
<br><br>

<label for="weeknum">Week Number:</label>
<input type="week" id="weeknum" name="weeknum" title="Select week and year">
<br><br>
```

---

# STEP 9 — Add Color Picker and Radio Buttons

Add:

```html
<label for="favcolor">Favorite Color:</label>
<input type="color" id="favcolor" name="favcolor" title="Select your favorite color">
<br><br>

<label>Gender:</label>
<input type="radio" id="male" name="gender" value="male" title="Select male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female" title="Select female">
<label for="female">Female</label>
<br><br>
```

---

# STEP 10 — Add Checkboxes

Add:

```html
<label>Hobbies:</label>
<input type="checkbox" id="reading" name="hobby" value="reading" title="Select reading hobby">
<label for="reading">Reading</label>
<input type="checkbox" id="music" name="hobby" value="music" title="Select music hobby">
<label for="music">Music</label>
<input type="checkbox" id="sports" name="hobby" value="sports" title="Select sports hobby">
<label for="sports">Sports</label>
<br><br>
```

---

# STEP 11 — Add Select and Optgroup

Add:

```html
<label for="course">Choose Course:</label>
<select id="course" name="course" title="Select your course">
    <optgroup label="Programming">
        <option value="html">HTML</option>
        <option value="js">JavaScript</option>
    </optgroup>
    <optgroup label="Design">
        <option value="figma">Figma</option>
        <option value="ps">Photoshop</option>
    </optgroup>
</select>
<br><br>

<label for="city">Choose City:</label>
<input list="cities" id="city" name="city" title="Select city from list">
<datalist id="cities">
    <option value="Phnom Penh">
    <option value="Siem Reap">
    <option value="Battambang">
</datalist>
<br><br>
```

---

# STEP 12 — Add Textarea

Add:

```html
<label for="message">Message:</label><br>
<textarea id="message" name="message" rows="4" cols="30" placeholder="Type your message" title="Enter your message"></textarea>
<br><br>
```

---

# STEP 13 — Add File Upload

Add:

```html
<label for="resume">Upload Resume:</label>
<input type="file" id="resume" name="resume" title="Upload your resume">
<br><br>
```

---

# STEP 14 — Add Readonly Disabled and Output

Add:

```html
<label for="student_id">Student ID:</label>
<input type="text" id="student_id" name="student_id" value="STU001" readonly
    title="Student ID (readonly)">
<br><br>

<label for="promo">Promo Code:</label>
<input type="text" id="promo" name="promo" disabled title="Promo code disabled">
<br><br>

<label for="result">Calculation Result:</label>
<output id="result" name="result">0</output>
<br><br>
```

---

# STEP 15 — Add Buttons

Add:

```html
<input type="submit" value="Submit">
<input type="reset" value="Reset">
<input type="button" value="Click Me">
<button type="submit">Send Form</button>
```

---

# STEP 16 — Close Fieldset and Form

Now close everything:

```html
</fieldset>
</form>
```

---

# STEP 17 — Add Details Element

Place this BELOW the form (but still inside `<section>`):

```html
<details>
    <summary>Click to View Instructions</summary>
    <p>Please double-check all required fields before submission.</p>
</details>
```

---

# STEP 18 — Add Canvas

Place this BELOW the `<section>` but ABOVE `<footer>`:

```html
<canvas width="200" height="100" style="border:1px solid black;">
Your browser does not support canvas.
</canvas>
```

---

# STEP 19 — Add SVG

Place this BELOW the canvas:

```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40"
    stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

---
# Full Code
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Complete Practice Lab</title>
    <meta name="description"
        content="HTML Practice Lab for students to learn and practice all HTML elements, input types, attributes, and HTML5 graphics.">

    <!-- Author -->
    <meta name="author" content="Your Name or School Name">

    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="HTML Complete Practice Lab">
    <meta property="og:description" content="Learn and practice HTML elements, forms, and HTML5 graphics step by step.">
    <meta property="og:image" content="lab-thumbnail.png">
    <meta property="og:type" content="website">

</head>

<body>

    <!-- Header -->
    <header>
        <h1>Student Registration System</h1>
    </header>

    <!-- Navigation -->
    <nav>
        <a href="#">Home</a> |
        <a href="#">Courses</a> |
        <a href="#">Contact</a>
    </nav>

    <!-- Main Section -->
    <section>
        <h2>Main Section</h2>
        <p>This page demonstrates HTML elements learned in class.</p>

        <!-- Form Start -->
        <form action="/submit.php" method="POST" enctype="multipart/form-data" accept-charset="UTF-8" autocomplete="off"
            name="studentForm" target="_blank" rel="noopener">

            <fieldset>
                <legend>Personal Information</legend>

                <!-- Text -->
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" maxlength="10" placeholder="Enter username"
                    title="Enter your username" required>
                <br><br>

                <!-- Password -->
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter password"
                    title="Enter your password" required>
                <br><br>

                <!-- Email -->
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"
                    title="Enter your email address" required>
                <br><br>

                <!-- Telephone -->
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"
                    title="Enter your telephone number">
                <br><br>

                <!-- URL -->
                <label for="website">Website:</label>
                <input type="url" id="website" name="website" placeholder="https://example.com"
                    title="Enter your website URL">
                <br><br>

                <!-- Search -->
                <label for="searchbox">Search:</label>
                <input type="search" id="searchbox" name="searchbox" placeholder="Search..." title="Enter search query">
                <br><br>

                <!-- Number -->
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" min="18" max="60" title="Enter your age" required>
                <br><br>

                <!-- Date -->
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday" title="Select your birth date">
                <br><br>

                <!-- DateTime Local -->
                <label for="meeting">Meeting Time:</label>
                <input type="datetime-local" id="meeting" name="meeting" title="Select meeting date and time">
                <br><br>

                <!-- Month -->
                <label for="expiry">Expiry Month:</label>
                <input type="month" id="expiry" name="expiry" title="Select expiry month and year">
                <br><br>

                <!-- Week -->
                <label for="weeknum">Week Number:</label>
                <input type="week" id="weeknum" name="weeknum" title="Select week and year">
                <br><br>

                <!-- Color -->
                <label for="favcolor">Favorite Color:</label>
                <input type="color" id="favcolor" name="favcolor" title="Select your favorite color">
                <br><br>

                <!-- Radio -->
                <label>Gender:</label>
                <input type="radio" id="male" name="gender" value="male" title="Select male">
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" title="Select female">
                <label for="female">Female</label>
                <br><br>

                <!-- Checkbox -->
                <label>Hobbies:</label>
                <input type="checkbox" id="reading" name="hobby" value="reading" title="Select reading hobby">
                <label for="reading">Reading</label>
                <input type="checkbox" id="music" name="hobby" value="music" title="Select music hobby">
                <label for="music">Music</label>
                <input type="checkbox" id="sports" name="hobby" value="sports" title="Select sports hobby">
                <label for="sports">Sports</label>
                <br><br>

                <!-- Select & Optgroup -->
                <label for="course">Choose Course:</label>
                <select id="course" name="course" title="Select your course">
                    <optgroup label="Programming">
                        <option value="html">HTML</option>
                        <option value="js">JavaScript</option>
                    </optgroup>
                    <optgroup label="Design">
                        <option value="figma">Figma</option>
                        <option value="ps">Photoshop</option>
                    </optgroup>
                </select>
                <br><br>

                <!-- Datalist -->
                <label for="city">Choose City:</label>
                <input list="cities" id="city" name="city" title="Select city from list">
                <datalist id="cities">
                    <option value="Phnom Penh">
                    <option value="Siem Reap">
                    <option value="Battambang">
                </datalist>
                <br><br>

                <!-- Textarea -->
                <label for="message">Message:</label><br>
                <textarea id="message" name="message" rows="4" cols="30" placeholder="Type your message"
                    title="Enter your message"></textarea>
                <br><br>

                <!-- File Upload -->
                <label for="resume">Upload Resume:</label>
                <input type="file" id="resume" name="resume" title="Upload your resume">
                <br><br>

                <!-- Readonly -->
                <label for="student_id">Student ID:</label>
                <input type="text" id="student_id" name="student_id" value="STU001" readonly
                    title="Student ID (readonly)">
                <br><br>

                <!-- Disabled -->
                <label for="promo">Promo Code:</label>
                <input type="text" id="promo" name="promo" disabled title="Promo code disabled">
                <br><br>

                <!-- Output -->
                <label for="result">Calculation Result:</label>
                <output id="result" name="result">0</output>
                <br><br>

                <!-- Buttons -->
                <input type="submit" value="Submit">
                <input type="reset" value="Reset">
                <input type="button" value="Click Me">
                <button type="submit">Send Form</button>

            </fieldset>
        </form>
        <!-- Form End -->

        <!-- Details -->
        <details>
            <summary>Click to View Instructions</summary>
            <p>Please double-check all required fields before submission.</p>
        </details>

    </section>

    <!-- Canvas -->
    <canvas id="myCanvas" width="200" height="100">
        Your browser does not support canvas.
    </canvas>

    <br><br>

    <!-- SVG -->
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    </svg>

    <!-- Footer -->
    <footer>
        <p>© 2026 HTML Practice Lab</p>
    </footer>

</body>

</html>
```