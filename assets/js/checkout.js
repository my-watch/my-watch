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
        totalDisplay.innerHTML = `Total Belanja Anda Rp. ${total}`;
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
                    class="img-thumbnail"
                />
            </div>
            <div class="col-sm-10">
                
                <p>
                    ${getData.productName}
                </p>
            </div>
        </div>
    </td>
    <td data-th="Price">Rp. ${getData.price}</td>
    <td data-th="Quantity" class="quantity">
        <input
            type="text"
            class="form-control text-center"
            value="1"
        />
    </td>
    <td data-th="Subtotal" class="text-center sub-total">
        Rp. ${getData.price}
    </td>
`;
            display.appendChild(cards);
        });
    } catch (error) {
        console.log(error);
    }
}

showCart();
