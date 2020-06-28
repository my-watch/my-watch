// add rupiah Function
String.prototype.toRupiah = function () {
    return Number(this).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
    });
};

let endpoint = `https://5ef168c41faf160016b4d5af.mockapi.io/api/Product`;
let options = {
    method: "GET",
    // headers: {
    //     "Content-type": "applications/json",
    // },
};

async function showCart() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();
        let total = 0;
        for (i = 0; i < results.length; i++) {
            total += results[i].price;
        }
        let totalDisplay = document.getElementById("total-cart");
        totalDisplay.innerHTML = `Total Belanja Anda  ${total
            .toString()
            .toRupiah()}`;
        results.forEach((getData, data) => {
            let display = document.getElementById("body-cart");
            let cards = document.createElement("tr");

            cards.innerHTML = `
     <td data-th="Product">
        <div class="row">
            <div class="col-sm-2 hidden-xs">
                <img
                    src="${getData.img}"
                    alt="..."
                    style="width :80px; height:80px;"
                />
            </div>
            <div class="col-sm-10">
                
                <p>
                    ${getData.productName}
                </p>
            </div>
        </div>
    </td>
    <td data-th="Price"> ${getData.price.toString().toRupiah()}</td>
    <td data-th="Quantity" class="quantity">
        <input
            type="text"
            class="form-control text-center"
            value="1"
        />
    </td>
    <td data-th="Subtotal" class="text-center sub-total">
        ${getData.price.toString().toRupiah()}
    </td>
    <td data-th="" class="text-center">
    <button id="btnDel" type="button" class="btn btn-danger">Hapus<i class="fa fa-trash" aria-hidden="true"></i>
    </button>
    </td>
`;
            display.appendChild(cards);
        });
    } catch (error) {
        console.log(error);
    }
}

showCart();

// add delete cart
function deleteCart(id) {
    let url = `https://5ef168c41faf160016b4d5af.mockapi.io/api/Product/${id}`;

    let options = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
    };

    fetch(url, options)
        .then((response) => {
            console.log(response);
            response.json();
        })
        .then((result) => {})
        .catch((error) => console.error(error));
}

let btnDel = document.getElementById("btnDel");
btnDel.addEventListener("click", deleteCart);
