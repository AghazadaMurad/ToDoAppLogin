"use strict";

const username = document.getElementById("username");
const password = document.getElementById("password");
const signinBtn = document.querySelector(".signin-button");

let users = getLocalStorage();
let currentAccount = undefined;

// Load users from localStorage
function getLocalStorage() {
  if (JSON.parse(localStorage.getItem("users")))
    return JSON.parse(localStorage.getItem("users"));
  else {
    return [];
  }
}
// If users are exist, store it in users varibale

signinBtn.addEventListener("click", (e) => {
  currentAccount = users.find((user) => user.username === username.value);

  if (currentAccount && currentAccount.password == password.value) {
    currentAccount = currentAccount.username;
    document.cookie = `username = ${currentAccount}; path=/`;
  } else {
    e.preventDefault();
  }
  // Find current account in users
  // Check if current account's password is equal to password value
  // if not, prevent navigation
  // Create username cookie
  // Empty input values
});
