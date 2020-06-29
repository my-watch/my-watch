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

    //Check email registred
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
    }, 2000);
  } catch (error) {
    console.error(error);
  }
}
