let watch = [
    {
        name: "Christyan Arden CA8075",
        price: 365000,
        img: "./assets/img/ardan/arden1.jpg",
    },
    {
        name: "Christyan Arden CA2685",
        price: 365000,
        img: "./assets/img/ardan/arden2.jpg",
    },
    {
        name: "Christyan Arden FALANA",
        price: 299000,
        img: "./assets/img/ardan/arden3.jpg",
    },
    {
        name: "Christyan Arden OBELIUS",
        price: 299000,
        img: "./assets/img/ardan/arden4.jpg",
    },
    {
        name: "Christyan Arden OWEN",
        price: 299000,
        img: "./assets/img/ardan/arden5.jpg",
    },
    {
        name: "Christyan Arden LENORE",
        price: 189000,
        img: "./assets/img/ardan/arden6.jpg",
    },
    {
        name: "Christyan Arden CA009",
        price: 270000,
        img: "./assets/img/ardan/arden7.jpg",
    },
    {
        name: "Jean Alexis Stein",
        price: 640000,
        img: "./assets/img/jean/jean1.jpg",
    },
    {
        name: "Jean Alexis Frein",
        price: 560000,
        img: "./assets/img/jean/jean2.jpg",
    },
    {
        name: "Jean Alexis Ranguald",
        price: 600000,
        img: "./assets/img/jean/jean3.jpg",
    },
    {
        name: "Jean Alexis Garth",
        price: 590000,
        img: "./assets/img/jean/jean4.jpg",
    },
    {
        name: "Jean Alexis Theodore",
        price: 419000,
        img: "./assets/img/jean/jean5.jpg",
    },
    {
        name: "Jean Alexis Holger",
        price: 349000,
        img: "./assets/img/jean/jean6.jpg",
    },
    {
        name: "Jean Alexis Alva",
        price: 409000,
        img: "./assets/img/jean/jean7.jpg",
    },

    {
        name: "Alexandra Christi 8586",
        price: 990000,
        img: "./assets/img/alex/alexandra-christi ac.jpg",
    },
    {
        name: "Alexandra Christi 6437",
        price: 929000,
        img: "./assets/img/alex/alex2.jpg",
    },
    {
        name: "Alexandra Christi 8519",
        price: 1200000,
        img: "./assets/img/alex/alexx3.jpg",
    },
    {
        name: "Alexandra Christi 6515",
        price: 1072000,
        img: "./assets/img/alex/alex4.jpg",
    },

    {
        name: "Alexandra Christi 6546",
        price: 815000,
        img: "./assets/img/alex/alex5.jpg",
    },
    {
        name: "Alexandra Christi 2509",
        price: 899000,
        img: "./assets/img/alex/alex6.jpg",
    },
    {
        name: "Alexandra Christi 8092",
        price: 840000,
        img: "./assets/img/alex/alex7.jpg",
    },
    {
        name: "Jims Honey 8045",
        price: 220000,
        img: "./assets/img/jims/jims1.jpg",
    },
    {
        name: "Jims Honey 8156",
        price: 172000,
        img: "./assets/img/jims/jims2.jpg",
    },
    {
        name: "Jims Honey H8001",
        price: 139900,
        img: "./assets/img/jims/jims3.jpg",
    },
    {
        name: "Jims Honey 8440",
        price: 175000,
        img: "./assets/img/jims/jims4.jpg",
    },

    {
        name: "Jims Honey 8607",
        price: 147000,
        img: "./assets/img/jims/jims5.jpg",
    },
    {
        name: "Jims Honey 8188",
        price: 244000,
        img: "./assets/img/jims/jims6.jpg",
    },
    {
        name: "Jims Honey 8417",
        price: 157000,
        img: "./assets/img/jims/jims7.jpg",
    },
    {
        name: "Michael Kors 6560",
        price: 1900000,
        img: "./assets/img/michael/michael1.jpg",
    },
    {
        name: "Michael Kors 6367",
        price: 2050000,
        img: "./assets/img/michael/michael2.jpg",
    },
    {
        name: "Michael Kors 5896",
        price: 896000,
        img: "./assets/img/michael/michael3.jpg",
    },
    {
        name: "Michael Kors 5550",
        price: 2000000,
        img: "./assets/img/michael/michael4.jpg",
    },
    {
        name: "Michael Kors 5354",
        price: 1800000,
        img: "./assets/img/michael/michael5.jpg",
    },
    {
        name: "Michael Kors 8295",
        price: 2388000,
        img: "./assets/img/michael/michael6.jpg",
    },
    {
        name: "Michael Kors 8184",
        price: 2675000,
        img: "./assets/img/michael/michael7.jpg",
    },
];

async function shows() {
    try {
        let urlShows = `https://5ef168c41faf160016b4d5af.mockapi.io/api/data`;
        let optionShows = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        let responseShows = await fetch(urlShows, optionShows);
        let resultShows = await responseShows.json();
        console.log(resultShows);
        if (resultShows.length > 35) {
            for (let j = 36; j < resultShows.length + 1; j++) {
                let container = document.getElementById("container");
                let div = document.createElement("div");
                div.setAttribute("class", "card");

                let img = document.createElement("img");
                img.setAttribute(
                    "src",
                    `${resultShows[resultShows.length - 1].img}`
                );

                let divText = document.createElement("div");
                divText.setAttribute("class", "card-text");

                let resultPrice = resultShows[resultShows.length - 1].price;
                var format = new Intl.NumberFormat("Id-ID", {
                    style: "currency",
                    currency: "IDR",
                });
                let productPrice = format.format(resultPrice);

                divText.innerHTML = ` <p>${
                    resultShows[resultShows.length - 1].name
                }</p>
                     <h5>${productPrice}</h5>
                     <button type="button" id="${j}" class="btn btn-light">
                         AddChart
                     </button>`;

                container.appendChild(div);
                div.appendChild(img);
                div.appendChild(divText);
                console.log(container);
            }
        }

        let button = document.getElementsByClassName("btn btn-light");
        console.log(button.length);
        for (let i = 1; i <= button.length; i++) {
            let btn = document.getElementById(`${i}`);
            btn.addEventListener("click", add);
            async function add() {
                 swal("Success", "Your item has been added to Cart!", "success");
                try {
                    let productName = resultShows[i - 1].name;
                    let price = resultShows[i - 1].price;
                    let img = resultShows[i - 1].img;

                    let data = {
                        productName,
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
                    console.log(result);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}
shows();
