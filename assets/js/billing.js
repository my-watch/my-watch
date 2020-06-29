String.prototype.toRupiah = function () {
    return Number(this).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
    });
};

async function showTotal() {
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
        let total = 0;
        for (i = 0; i < results.length; i++) {
            total += results[i].price;
        }
        const totalDisplay = document.getElementById("total-bayar");
        totalDisplay.innerHTML = `${total.toString().toRupiah()}`;
    } catch (error) {
        console.log(error);
    }
}

showTotal();

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
redirect();

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
