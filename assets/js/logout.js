let logOutUser = JSON.parse(localStorage.getItem("user"));
// console.log(logOutUser);
// console.log(logUser[0].fullname);

let logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", logout);

function logout() {
  swal({
    title: "Are you sure?",
    // text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Logout Succes!", {
        icon: "success",
      });
      localStorage.removeItem("user");
      setTimeout(function () {
        window.location.href = "index.html";
      }, 3000);
    }
    // else {
    //   swal("Your imaginary file is safe!");
    // }
  });
}
