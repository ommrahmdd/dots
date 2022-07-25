// localStorage.getItem("user")
var currentUser = document.getElementsByClassName("userName")[0]
var login = document.getElementsByClassName("loginBtn")[0]
var signup = document.getElementsByClassName("signupBtn")[0]
let nav = document.getElementsByTagName("ul")[0]
var logout = document.createElement("li");
let loading = document.querySelector(".loading");
let searchForm = document.querySelector(".searchForm");
let searchBtn = document.querySelector("#searchInput");
let searchIcon = document.querySelector(".searchIcon");
if (localStorage.getItem("currentUser")) {
    login.style.display = "none";
    signup.style.display = "none";
    currentUser.innerHTML = "Welcome " + JSON.parse(localStorage.getItem("currentUser")).name.firstname.toUpperCase();
    var cart = document.createElement("li");
    cart.innerHTML = '<a href="myCart.html">My Cart</a>'
    logout.innerHTML = '<a href="home.html">Logout</a>'
    nav.appendChild(cart);
    nav.appendChild(logout);
}
else if (JSON.parse(localStorage.getItem("Admin"))) {
    login.style.display = "none";
    signup.style.display = "none";
    currentUser.innerHTML = "Welcome Admin"
    var dashboard = document.createElement("li");
    dashboard.innerHTML = '<a href="adminDashboard.html">Dashboard</a>'
    logout.innerHTML = '<a href="home.html">Logout</a>'
    nav.appendChild(dashboard);
    nav.appendChild(logout);
}


logout.addEventListener("click", function () {
    localStorage.removeItem("Admin");
    localStorage.removeItem("currentUser")
})


//////////////////////////////////////////////////////////////
let mainItems = document.getElementsByClassName('mainItems')[0];
if (mainItems) {
    mainItems.addEventListener("click", function (e) {
        let productId;
        console.log("cliced");
        if ((e.target.classList[0] = "main__item-overlay")) {
            console.log(e.target.parentNode)
            productId = e.target.parentNode.classList[1].split("-")[1];
            localStorage.setItem("clicked__product-ID", productId);
            window.open("../html/product.html", "_self");
            console.log(productId);
        }
    });
}
//Search Form & Search Input
if (searchIcon) {
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(searchForm.dataset.toggle);
  
      if (searchForm.dataset.toggle === "show") {
        searchForm.dataset.toggle = "hidden";
        searchForm.style.bottom = "20rem";
      } else if (searchForm.dataset.toggle === "hidden") {
        searchForm.dataset.toggle = "show";
        searchForm.style.bottom = "-5rem";
      }
    });
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
    });
    searchBtn.addEventListener("keypress", function (e) {
      if (e.key == "Enter") {
        localStorage.setItem("searchItem", searchBtn.value);
        window.open("../html/search.html", "_self");
      }
    });
  }

if(!JSON.parse(localStorage.getItem("carts"))){
  fetch("../json/carts.json")
  .then((res) => res.json())
  .then((json) => {
    json.pop()
    localStorage.setItem("carts", JSON.stringify(json));})

}
 
//Animation
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 1) {
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
  

