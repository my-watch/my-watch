let watch = [
    {
        name: "Christyan Arden CA8075",
        price: "Rp 365.000",
        img: "./assets/img/ardan/arden1.jpg",
    },
    {
        name: "Christyan Arden CA2685",
        price: "Rp 365.000",
        img: "./assets/img/ardan/arden2.jpg",
    },
    {
        name: "Christyan Arden FALANA",
        price: "Rp 299.000",
        img: "./assets/img/ardan/arden3.jpg",
    },
];

let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
button1.addEventListener("click", add);
button2.addEventListener("click", add2);
button3.addEventListener("click", add3);

async function add() {
    try {
        let name = watch[0].name;
        let price = watch[0].price;
        let img = watch[0].img;

        let data = {
            name,
            price,
            img,
        };
        let url = `https://5ef168c41faf160016b4d5af.mockapi.io/api/Product`;
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        };
        let response = await fetch(url, options);
        let result = await response.json();
    } catch (error) {
        console.log(error);
    }
}
async function add2() {
    try {
        let name = watch[1].name;
        let price = watch[1].price;
        let img = watch[1].img;

        let data = {
            name,
            price,
            img,
        };
        let url = `https://5ef168c41faf160016b4d5af.mockapi.io/api/Product`;
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        };
        let response = await fetch(url, options);
        let result = await response.json();
    } catch (error) {
        console.log(error);
    }
}
async function add3() {
    try {
        let name = watch[2].name;
        let price = watch[2].price;
        let img = watch[2].img;

        let data = {
            name,
            price,
            img,
        };
        let url = `https://5ef168c41faf160016b4d5af.mockapi.io/api/Product`;
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        };
        let response = await fetch(url, options);
        let result = await response.json();
    } catch (error) {
        console.log(error);
    }
}
