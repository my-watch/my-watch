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
    headers: {
        "Content-type": "applications/json",
    },
};

async function showCart() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();
        showTotal();
        results.map((getData, data) => {
            let display = document.getElementById("body-cart");
            let cards = document.createElement("tr");

            cards.classList.add(`data-cart${getData.id}`);
            cards.innerHTML = `
     <td data-th="Product" >
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
    <button id="btnDel${
        getData.id
    }" type="submit" class="btn btn-danger">Hapus<i class="fa fa-trash" aria-hidden="true"></i>
    </button>
    </td>
`;
            display.appendChild(cards);
            //delete cart
            function clear() {
                let cartList = document.querySelector(
                    `.data-cart${getData.id}`
                );
                cartList.innerHTML = null;
                const totalDisplay = document.getElementById("total-cart");
                showTotal();
                totalDisplay.innerHTML = null;
                showTotal();
            }
            let btnDel = document.getElementById(`btnDel${getData.id}`);
            btnDel.addEventListener("click", function () {
                if (confirm("Apakah anda yakin?")) {
                    setTimeout(deleteCart(getData.id), 100);
                    setTimeout(clear(), 3000);
                }
            });
        });

        // batas
    } catch (error) {
        console.log(error);
    }
}

showCart();

async function showTotal() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();
        let total = 0;
        for (i = 0; i < results.length; i++) {
            total += results[i].price;
        }
        const totalDisplay = document.getElementById("total-cart");
        totalDisplay.innerHTML = `${total.toString().toRupiah()}`;
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
