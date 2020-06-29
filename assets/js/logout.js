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
      redirect();
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

async function redirect() {
  let endpoint = `https://5ef168c41faf160016b4d5af.mockapi.io/api/Product`;
  let options = {
    method: "GET",
    headers: {
      "Content-type": "applications/json",
    },
  };
  try {
    let response = await fetch(endpoint, options);
    let results = await response.json();
    results.forEach((getData, data) => {
      console.log(getData.id);

      deleteCart(getData.id);
    });

    // batas
  } catch (error) {
    console.log(error);
  }
}

function deleteCart(id) {
  let putMethod = {
    method: "DELETE",
  };
  let urlD = `https://5ef168c41faf160016b4d5af.mockapi.io/api/Product/${id}`;
  fetch(urlD, putMethod)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
