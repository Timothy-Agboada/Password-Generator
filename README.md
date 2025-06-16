## 🚀 30-Day Coding Challenge: Day 9

This project is the ninth entry in my 30-day coding challenge. Today's goal was to build a practical security utility from scratch, focusing on pure JavaScript logic to generate strong, randomized passwords based on user-defined criteria.

### 📖 Project Overview

This is a sleek and secure password generator application with a modern, dark-mode interface. It allows users to create strong passwords by specifying the desired length and including or excluding character sets like uppercase letters, lowercase letters, numbers, and symbols. The application also provides a visual strength indicator and a one-click copy-to-clipboard feature for a seamless user experience.

### ✨ Live Demo & Screenshot

Below is a screenshot of the application's interface.
![Jun-16-2025 17-52-19](https://github.com/user-attachments/assets/a77c4a04-0848-4698-b9c9-c930aa36b4bf)


### 🌟 Key Features

* **Customizable Password Generation:** Full control over password length (from 8 to 32 characters) and the inclusion of four different character types.
* **Secure Algorithm:** The generation logic guarantees that at least one character from each selected set is included, then shuffles the result to ensure true randomness.
* **Password Strength Indicator:** A visual meter provides real-time feedback on the strength of the potential password based on length and character set complexity.
* **One-Click Copy:** Uses the modern Clipboard API (`navigator.clipboard`) to securely and easily copy the generated password.
* **Modern Dark-Mode UI:** A "techy" and trustworthy interface built with a professional dark theme, inspired by developer tools.
* **Fully Responsive:** The layout is optimized for a great experience on any device.

### 💻 Technologies Used

This project was built entirely with vanilla front-end technologies to demonstrate strong fundamental skills.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **Google Fonts:** For the 'JetBrains Mono' monospace font.
* **Font Awesome:** For icons.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these simple steps:

1.  **Clone the repository (or download the code):**
    ```bash
    git clone https://github.com/timothy-agboada/password-generator.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd password-generator
    ```
3.  **Open the `index.html` file in your web browser:**
    * You can simply double-click the `index.html` file, or right-click and choose "Open with" your preferred browser.

No special installations or dependencies are required.

### 🎯 Learning Objectives

This project was a deep dive into several key areas of front-end development, with a focus on logic and user interaction:

* **JavaScript Algorithm Design:** Writing a function from scratch to generate random data that adheres to a specific set of user-defined rules.
* **String and Array Manipulation:** Building a character pool and using array methods and shuffling algorithms to create the final password.
* **Modern Web APIs:** Implementing the `navigator.clipboard.writeText()` method for secure and modern clipboard interaction.
* **Complex UI Interaction:** Managing multiple types of user inputs (range sliders, checkboxes) and having the UI react to them in real-time.
* **UI/UX for Security Tools:** Designing an interface that feels professional, trustworthy, and easy to use.
