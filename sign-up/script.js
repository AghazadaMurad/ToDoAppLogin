"use strict";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const signupBtn = document.querySelector(".signup-button");
let storedUsers = getLocalStorage();
let users = getLocalStorage();
let currentUser;

console.log(storedUsers);

function checkIfValid() {
  if (
    firstName.value &&
    lastName.value &&
    username.value &&
    password.value &&
    password.value == confirmPassword.value
  ) {
    return false;
  } else {
    return true;
  }
}

function loadToLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getLocalStorage() {
  if (JSON.parse(localStorage.getItem("users")))
    return JSON.parse(localStorage.getItem("users"));
  else {
    return [];
  }
}

signupBtn.addEventListener("click", (e) => {
  // Checking if the given values are valid, if not, stop processing
  // Checking if the password and confirm password are same, if not, stop processing
  if (checkIfValid() || users.find((user) => user.username == username.value)) {
    e.preventDefault();
  } else {
    users.push({
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      password: password.value,
    });
    console.log(users);

    firstName.value = "";
    lastName.value = "";
    username.value = "";
    password.value = "";
    confirmPassword.value = "";

    loadToLocalStorage(users);
  }
  // Create a new user object with the given values

  // Empty the values of the inputs
  // Get users from local storage
  // Check if there is a users array
  // if there is a users array, add newUser to the array
  // if there is not a users array, create a new one with the newUser object in it
  // Add username cookie
  // Add new users array to the localStorage
});
