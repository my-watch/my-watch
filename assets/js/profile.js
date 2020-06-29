let logUser = JSON.parse(localStorage.getItem("user"));
// console.log(logUser);

// console.log(logUser[0].fullname);

let position = document.getElementById("profile");

position.innerHTML = `${logUser[0].fullname}`;

let signUp = document.getElementById("btn-logout");

if (logUser != null) {
  signUp.removeAttribute("href");
  signUp.setAttribute("id", "logout");
  signUp.innerHTML = `Logout`;
}
