let logUser = JSON.parse(localStorage.getItem("user"));
// console.log(logUser);

// console.log(logUser[0].fullname);

let position = document.getElementById("profile");

let card = document.createElement("p");
card.innerHTML = `${logUser[0].fullname}`;
position.appendChild(card);
