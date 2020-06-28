async function showCartCount() {
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
        let cartCount = document.getElementById("cart-count");
        cartCount.innerHTML = `(${results.length})`;
    } catch (error) {
        console.log(error);
    }
}

showCartCount();
