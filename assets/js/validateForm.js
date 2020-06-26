let btnForm = document.getElementById("btn-register");
btnForm.addEventListener("click", fullForm);

function fullForm() {
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (fullname === "" && email === "" && password === "") {
    document.getElementById(
      "alert-head"
    ).innerHTML = `<div class="alert alert-danger" role="alert">
    Form must be filled
  </div>`;
  } else if (fullname === "") {
    document.getElementById(
      "alert-name"
    ).innerHTML = `The name must be filled in`;
  } else if (email === "") {
    document.getElementById(
      "alert-email"
    ).innerHTML = `The email must be filled in`;
  } else if (password === "") {
    document.getElementById(
      "alert-pass"
    ).innerHTML = `The Password must be filled in`;
  } else {
    document.getElementById("alert-head").innerHTML = ``;
  }
}

function btnDisabled() {
  let btn_dis = document.getElementById("btn-register");
  btn_dis.disabled = true;
}
