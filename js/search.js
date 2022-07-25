//handle Fetch
fetch("../json/products.json")
  .then((res) => res.json())
  .then((products) => {
    let searchItem = localStorage.getItem("searchItem");
    console.log(searchItem);
    products.forEach((product) => {
      if (
        product.title.toLowerCase().includes(searchItem) ||
        product.description.toLowerCase().includes(searchItem) ||
        product.category.toLowerCase().includes(searchItem)
      ) {
        let html = `<div class="mainItems__item product__id-${product.id}">
        <div class="main__item-overlay">View Product</div>
        <div class="mainItems__img">
          <img src=${product.image} alt="item" />
        </div>
        <div class="mainItems__txt">
          <h4>${product.title.split(" ").splice(0, 3).join(" ")}</h4>
          <p>${product.price}$</p>
        </div>
      </div>`;
        mainItems.insertAdjacentHTML("afterbegin", html);
        document.querySelector(".loading").style.display = "none";
      } else {
        document.querySelector(".loading").style.display = "none";
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
