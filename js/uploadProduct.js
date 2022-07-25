let myForm = document.querySelector(".loginForm");
let productTitle = document.querySelector("#productTitle");
let productDescription = document.querySelector("#productDescription");
let productPrice = document.querySelector("#productPrice");
let productCategory = document.querySelector("#productCategory");
let productImg = document.querySelector("#productImage");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let imgExtention = ["jpg", "png", "jpeg"];
  // if (imgExtention.indexOf(productImg.value.split(".")[1]) === -1) {
  //   document.querySelector("#unvalid p").textContent = "Please choose an image";
  // } else {
    document.getElementById("added").style.display="block"
          setTimeout(function(){
            document.getElementById("added").style.display="none"
            document.forms[0].reset();
          },2000)
  // document.querySelector("#unvalid p").textContent = "";
  let products = JSON.parse(localStorage.getItem("products"));
  let newProduct = {
    id: products.length + 1,
    title: productTitle.value,
    description: productDescription.value,
    price: productPrice.value,
    image: productImg.value,
    rating: {
      count: 0,
      rate: 0,
    },
  };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));


    if(productCategory.value=="men's clothing"){
      let mens = JSON.parse(localStorage.getItem("men's clothing"));
      mens.push(newProduct);
      localStorage.setItem("men's clothing", JSON.stringify(mens));}
    else if(productCategory.value== "women's clothing"){
      let women = JSON.parse(localStorage.getItem("women's clothing"));
      women.push(newProduct);
      localStorage.setItem("women's clothing", JSON.stringify(women));}
   else if(productCategory.value== "jewelery"){
      let jewelery = JSON.parse(localStorage.getItem("jewelery"));
      jewelery.push(newProduct);
      localStorage.setItem("jewelery", JSON.stringify(jewelery));}
    else if(productCategory.value== "electronics"){
      let electronics = JSON.parse(localStorage.getItem("electronics"));
      electronics.push(newProduct);
      localStorage.setItem("electronics", JSON.stringify(electronics));}
 
  // window.open("../html/home.html", "_self");
  // }
});
