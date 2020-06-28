// import { watch } from "./product.js";

let sell = document.getElementById("btn");

sell.addEventListener("click", submit);

async function submit() {
    try {
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let img = document.getElementById("img").value;

        let dataSell = {
            name,
            price,
            img,
        };

        let urls = `https://5ef168c41faf160016b4d5af.mockapi.io/api/data`;
        let option = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(dataSell),
        };

        let responses = await fetch(urls, option);
        let results = await responses.json();

        console.log(results);
        location.replace("product.html");
    } catch (error) {
        console.log(error);
    }
}
