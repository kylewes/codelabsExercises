    document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let nameInput = document.getElementById("name");
    let ageInput = document.getElementById("age");
    let errorMessage = document.getElementById("error-message");

    let name = nameInput.value.trim();
    let age = parseInt(ageInput.value, 10);

    if (name == " " || isNaN(age) || age <= 0) {
        errorMessage.textContent = "Please enter a valid name and age.";
        return;
    } else {
        errorMessage.textContent = " ";
        document.getElementById("form").reset();
    };


});