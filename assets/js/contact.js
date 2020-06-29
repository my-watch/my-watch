let registrationBtn = document.getElementById("btn-msg");
registrationBtn.addEventListener("click", contact);

async function contact() {
  try {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let contacuUs = {
      name,
      email,
      subject,
      message,
    };

    // console.log(contacuUs);
    if (name === "" && email === "" && subject === "" && message == "") {
      swal("Form must be filled!", "", "warning");
    } else if (name === "") {
      swal("Field name be filled!", "", "warning");
    } else if (email === "") {
      swal("Field email be filled!", "", "warning");
    } else if (subject === "") {
      swal("Field subject be filled!", "", "warning");
    } else if (message === "") {
      swal("Field message be filled!", "", "warning");
    } else {
      let url = `https://5ef168da1faf160016b4d5c4.mockapi.io/api/contact`;

      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(contacuUs),
      };
      let res_contact = await fetch(url, options);
      let result = await res_contact.json();

      swal("Thank you for contact us!", "", "success");
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  } catch (error) {
    console.error(error);
  }
}
