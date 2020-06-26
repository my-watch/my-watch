let registrationBtn = document.getElementById("btn-register");
registrationBtn.addEventListener("click", register);

async function register() {
  try {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("confirm_password").value;

    let userData = {
      fullname,
      email,
      password,
    };

    // console.log(userData);

    // Check email registred
    let url = `https://5ef168da1faf160016b4d5c4.mockapi.io/api/users`;

    let response = await fetch(url);
    let allUsers = await response.json();

    let registeredUser = allUsers.filter((user) => user.email === email);

    // If registred
    if (registeredUser.length > 0) {
      swal("You are already registered!", "", "warning");
    } else {
      // If not registred
      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      };
      let response = await fetch(url, options);
      let result = await response.json();

      swal("Thank you for registration!", "", "success");
      window.location.href = "/login.html";
    }
  } catch (error) {
    console.error(error);
  }
}
