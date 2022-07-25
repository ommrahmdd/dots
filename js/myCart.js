const myCart = function () {
  //Write your code here
  //1-Get the data from API using FETCH
  // fetch("../json/carts.json")
  //   .then((res) => res.json())
  //   .then((json) => {
  let totalProductsPrice = 0;
  // localStorage.setItem("carts", JSON.stringify(json));
  //   json.forEach((item) => {
  JSON.parse(localStorage.getItem("carts")).forEach((cart) => {
    if (JSON.parse(localStorage.getItem("currentUser")).id == cart.userId) {
      console.log(cart);

      for (key in cart.products) {
        let product = JSON.parse(localStorage.getItem("products"))[
         cart.products[key].productId - 1
        ];
        let title = product.title;
        let price = product.price;
        let quantity =cart.products[key].quantity;
        let totalPrice = price * quantity;
        totalProductsPrice = totalProductsPrice + totalPrice;
        let html = `<div class="mainItems__item product__id-${cart.products[key].productId }">
                     <div class="main__item-overlay">
                       <p>View Product</p>
                       <button onclick= deleteProduct(${cart.products[key].productId},${cart.id}) style="padding:5px;background-color:black;color:white"> Delete Product</button>
                       </div>  
                     <div class="mainItems__img">
                      <img src=${JSON.parse(localStorage.getItem("products"))[cart.products[key].productId - 1].image} alt="item" />
                      </div>
                    <div class="mainItems__txt">
                      <h4>${title}</h4>
                      <p>Price ${price}$</p>
                      <p>Quantity ${quantity}</p>
                      <p>Total Price = ${totalPrice}$</p>
                    </div>
                 </div>`;
        document
          .querySelector(".mainItems")
          .insertAdjacentHTML("afterbegin", html);
      }
    }
  });
  let totalText = document.createElement("section");
  totalText.innerHTML = `<p style="font-size:5rem; padding :30px; border-top:2px solid rgb(145, 0, 0);margin-top:50px">
            Total = ${totalProductsPrice.toFixed(2)}$
             <a href="#"><button type="submit"
              style="float:right;cursor: pointer;;padding:10px;font-size:5rem;background-color:orange; border-radius:5px;">
              Payment</button></a> </p>         
            `;
  document.querySelector(".small__container").appendChild(totalText);
  console.log(totalProductsPrice);

};
myCart();
function deleteProduct(id,cartId) {
  console.log(id)
  console.log(cartId)
  let carts = JSON.parse(localStorage.getItem("carts"))
  
  console.log(carts[cartId-1]) 
  carts[cartId-1].products.splice(0, 1)
  // products.forEach(function (product) {
  //   if (product.id > id) {
  //     product.id = product.id - 1;
  //   }
  // })
  document.getElementsByClassName(`mainItems__item product__id-${id}`)[0].remove()
  localStorage.setItem("carts", JSON.stringify(carts))
  window.location.reload(true);
}