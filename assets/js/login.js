let loginBtn = document.getElementById("btn-login");
loginBtn.addEventListener("click", login);

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // ambil semua data users

    let url = `https://5ef168da1faf160016b4d5c4.mockapi.io/api/users`;

    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            let user = results.filter((result) => result.email === email);

            if (user.length > 0) {
                if (user[0].password === password) {
                    // redirect to homepage
                    window.location.replace("profile.html");
                    localStorage.setItem("user", JSON.stringify(user));
                } else {
                    swal(
                        "Your email and password are incorrect",
                        "",
                        "warning"
                    );
                }
            } else {
                swal("You have not registered", "", "warning");
            }
        })
        .catch((error) => console.error(error));
}
