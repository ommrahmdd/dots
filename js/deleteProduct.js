//MainItems already declatied in public js

const updateItems = function () {
    if (!JSON.parse(sessionStorage.getItem("Hcount"))) {
      fetch("../json/products.json")
        .then((respone) => respone.json())
        .then((data) => {
          localStorage.setItem("products", JSON.stringify(data));
          data.forEach((item) => {
            let html = `<div class="mainItems__item product__id-${item.id}">
          <div class="main__item-overlay">View Product
          <button onclick= deleteProduct(${item.id}) style="padding:5px;background-color:black;color:white"> Delete Product</button>
          </div>
          <div class="mainItems__img">
            <img src=${item.image} alt="item" />
          </div>
          <div class="mainItems__txt">
            <h4>${item.title}</h4>
            <p>${item.price}$</p>
          </div>
        </div>`;
            document.querySelector(".mainItems").insertAdjacentHTML("afterbegin", html);
  
          });
  
          console.log(data);
        });
      sessionStorage.setItem("Hcount", JSON.stringify({ count: "1" }));
    }
    else {
      let products = JSON.parse(localStorage.getItem("products"))
      products.forEach(function (item) {
        let html = `<div class="mainItems__item product__id-${item.id}">
          <div class="main__item-overlay">
          <P> View Product</p>
          <button onclick= deleteProduct(${item.id}) style="padding:5px;background-color:black;color:white"> Delete Product</button>
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
        document.querySelector(".mainItems").insertAdjacentHTML("beforeend", html);
      })
  
  
    }
  };
  function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"))
    console.log(products)
    products.splice((id - 1), 1)
    products.forEach(function (product) {
      if (product.id > id) {
        product.id = product.id - 1;
      }
    })
    document.getElementsByClassName(`mainItems__item product__id-${id}`)[0].remove()
    localStorage.setItem("products", JSON.stringify(products))
    window.location.reload(true);
  }
  
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      this.document.querySelector(".header").style.padding = "0";
      this.document.querySelector(
        ".header__container-logo h1 a:link"
      ).style.fontSize = "5rem";
      this.document.querySelector(
        ".header__container-logo h1 a span"
      ).style.fontSize = "6rem";
    } else {
      this.document.querySelector(".header").style.padding = "2rem 0";
      this.document.querySelector(
        ".header__container-logo h1 a:link"
      ).style.fontSize = "9rem";
      this.document.querySelector(
        ".header__container-logo h1 a:link"
      ).style.transform = "translateY(0)";
      this.document.querySelector(
        ".header__container-logo h1 a span"
      ).style.fontSize = "10rem";
    }
  });
  updateItems();
  