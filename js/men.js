const menClothes = function () {
  //Write your code here
  //1-Get the data from API using FETCH
  //2-Display it

  if (!JSON.parse(sessionStorage.getItem("Mcount"))) {
    fetch("../json/men.json")
      .then((res) => res.json())
      .then((json) => {
        // 2-Display it
        localStorage.setItem("men's clothing", JSON.stringify(json));
        const html = json
          .map((product) => {
            return `
            <div class="mainItems__item product__id-${product.id}">
              <div class="main__item-overlay">View Product</div>
              <div class="mainItems__img">
                <img src="${product.image}" alt="${product.description}" />
              </div>
              <div class="mainItems__txt">
                <h4>${product.title}</h4>
                <p>${product.price}$</p>
              </div>
            </div>`;
          })
          .join("");

        document
          .querySelector(".mainItems")
          .insertAdjacentHTML("afterbegin", html);
      });
    sessionStorage.setItem("Mcount", JSON.stringify({ count: "1" }));
    setTimeout(function () {
      window.location.reload(true);
    }, 100);
  } else {
    let products = JSON.parse(localStorage.getItem("products"));
    let men = JSON.parse(localStorage.getItem("men's clothing"));
    products.forEach(function (item) {
      men.forEach(function (product) {
        if (item.title == product.title) {
          let html = `<div class="mainItems__item product__id-${item.id}">
          <div class="main__item-overlay">
          <P> View Product</p>
          </div>
          <div class="mainItems__img">
            <img src=${item.image} alt="item" />
          </div>
          <div class="mainItems__txt">
            <h4>${item.title}</h4>
            <p>${item.price}$</p>
          </div>
        </div>
        `;
          document
            .querySelector(".mainItems")
            .insertAdjacentHTML("beforeend", html);
        }
      });
    });
  }
};

menClothes();
