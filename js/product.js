let productContainer = document.querySelector(".product");
let cartBtn;
let getProduct = function () {
  if (localStorage.getItem("clicked__product-ID")) {
    let productID = localStorage.getItem("clicked__product-ID");
    // --------------- GET product from API
    // fetch(`https://fakestoreapi.com/products/${productID}`)
    //   .then((res) => res.json())
    //   .then((product) => {

      let product = JSON.parse(localStorage.getItem("products"))[productID-1]
        console.log(product);
    //  if(!JSON.parse(localStorage.getItem("currentUser"))) {
    //   let html = `<div class="product__container">
    //   <div class="product__container-img">
    //     <img src="${product.image}" alt="" />
    //   </div>
    //   <div class="product__container-txt">
    //     <h2 class="product__name">${product.title}</h2>
    //     <p>
    //       ${product.description}
    //     </p>
    //     <p>Rate: ${product.rating.rate}</p>
    //     <p>Orders: ${product.rating.count}</p>
        
    //   </div>
    //   <div class="product__container-iconAndPrice" >
    //     <p style="margin:0 auto" class="product__price">${product.price}$</p>
        
    //   </div>
      
    // </div>`;

    //   productContainer.insertAdjacentHTML("afterbegin", html);
    //  }  
    // else{
      let html = `<div class="product__container">
      <div class="product__container-img">
        <img src="${product.image}" alt="" />
      </div>
      <div class="product__container-txt">
        <h2 class="product__name">${product.title}</h2>
        <p>
          ${product.description}
        </p>
        <p>Rate: ${product.rating.rate}</p>
        <p>Orders: ${product.rating.count}</p>
        
      </div>
      <div class="product__container-iconAndPrice">
        <p class="product__price">${product.price}$</p>
        <input type="number" class="cart__count" value="1" min="1" placeholder="Count"/>
        <a href="/" class="addToCart" >
       <i class="fa-solid fa-cart-shopping" ></i>
        </a>
        <div><p id="added" style="display:none"> added </p></div><br>
        <p id="sign" style="display:none"><a   href="signUp.html" class="signupBtn" > Signup </a></p>
      </div>
      
    </div>
    `;

      productContainer.insertAdjacentHTML("afterbegin", html);
      // document.querySelector(".loading").style.display = "none";
      //----------------------- Handle Add to cart btn
      cartBtn = document.querySelector(".addToCart");
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      let carts = JSON.parse(localStorage.getItem("carts"));
      cartBtn.addEventListener("click", function (e) {
        e.preventDefault();
  
        if(!JSON.parse(localStorage.getItem("currentUser"))) {
            document.getElementById("sign").style.display="block"
        }
        else{
          document.getElementById("added").style.display="block"
          setTimeout(function(){
            document.getElementById("added").style.display="none"
          },2000)
        }
  
        let cartId = carts.length+1 ;
        if (localStorage.getItem("currentUser")) {

          let currentDate = `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`;

          // ---------------------- Check if user cart exist with the same date
          let userCart = carts.find((cart) => {
            return cart.userId == currentUser.id && cart.date == currentDate;
          });
          console.log(userCart);
          if (userCart) {
            userCart.products.push({
              productId: product.id,
              quantity: document.querySelector(".cart__count").value,
            });
          } else {
            carts.push({
              id: cartId,
              userId: currentUser.id,
              date: currentDate,
              products: [
                {
                  productId:  product.id,
                  quantity: document.querySelector(".cart__count").value,
                },
              ],
            });
          }
          localStorage.setItem("carts", JSON.stringify(carts));
       
        } else {
          // window.open("../html/login.html", "_self");
        }
      });
    // }

  
      // });
  }
};
getProduct();
