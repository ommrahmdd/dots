let userEmail = document.querySelector("#userName");
let userPassword = document.querySelector("#password");
let userName = document.querySelector("#name");
let userAddress = document.querySelector("#address");
let signupBtn = document.querySelector(".signupForm");

fetch("../json/users.json")
  .then((res) => res.json())
  .then((users) => {
    sessionStorage.setItem("users", JSON.stringify(users));
  });

signupBtn.addEventListener("submit", function (e) {
  const users = JSON.parse(sessionStorage.getItem("users"));
  e.preventDefault();
  let newUser = {
    name: {
      firstname: userName.value.split(" ")[0],
      lastname: userName.value.split(" ")[1],
    },
    address: {
      geoLocation: userLocation,
      city: userAddress.value.split(" ")[0],
    },
    email: userEmail.value,
    password: userPassword.value,
    username: `${userName.value.split(" ")[0]}${userName.value
      .split(" ")[1]
      ?.toUpperCase()}`,
    id: users[users.length - 1].id + 1,
  };
  //------------ Check if user exist
  let is_userExist = users.some((user) => {
    return user.email === userEmail.value;
  });
  console.log(is_userExist);
  if (!is_userExist && (userEmail.value!="admin@admin.com")) {
    users.push(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("myProductDetails", JSON.stringify(new Array()));
    //------------ Push new user to session storage
    sessionStorage.setItem("users", JSON.stringify(users));
    window.open("../html/home.html", "_self");
  } else {
    document.querySelector("#unvalid p").textContent = "Email is alreay exist!";
    document.querySelector("#unvalid").style.display = "block";
  }

  // fetch("../json/users.json")
  //   .then((res) => res.json())
  //   .then((users) => {
  //     let is_userExist = users.some((user) => {
  //       return user.email === userEmail.value;
  //     });
  //     console.log(is_userExist);
  //     // if (!is_userExist) {
  //     //   users.push(newUser);
  //     //   localStorage.setItem("currentUser", JSON.stringify(newUser));
  //     //   localStorage.setItem("myProductDetails", JSON.stringify(new Array()));
  //     //   //------------ Push new user to session storage
  //     //   sessionStorage.setItem("users", JSON.stringify(users));
  //     //   // window.open("../html/home.html", "_self");
  //     // } else {
  //     //   document.getElementById("unvalid").textContent =
  //     //     "Email is alreay exist!";
  //     //   document.getElementById("unvalid").style.display = "block";
  //     // }
  //   });
});

//-------------------- Get Location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      let {
        coords: { latitude, longitude },
      } = pos;
      this.userLocation = { latitude, longitude };
    });
  }
}
getUserLocation();
var userLocation = {};
