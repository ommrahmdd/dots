let login = function () {
  // Write Your code here
  const email = document.getElementById("userName");
  const password = document.getElementById("password");
  if (!JSON.parse(sessionStorage.getItem("Lcount"))) {
    document.forms[0].addEventListener("submit", function (e) {
      e.preventDefault();
      let is_logged = false;
      fetch("../json/users.json")
        .then((res) => res.json())
        .then((users) => {
          sessionStorage.setItem("users", JSON.stringify(users));
          let len = users.length;
          let i = 0;
          users.forEach(function (user) {
            if (email.value == user.email) {
              if (password.value == user.password) {
                console.log(user);
                localStorage.setItem("currentUser", JSON.stringify(user));
                window.open("home.html", "_self");
              }
            } else if (email.value == "admin@admin.com") {
              if (password.value == 12345) {
                localStorage.setItem(
                  "Admin",
                  JSON.stringify({
                    email: "admin@admin.com",
                    password: "12345",
                  })
                );
                window.open("home.html", "_self");
              }
            } else {
              is_logged = true;
            }
            i++;
          });
          sessionStorage.setItem("Lcount", JSON.stringify({ count: "1" }));
          setTimeout(function () {
            if (i == len) {
              document.getElementById("unvalid").style.display = "block";
            }
          }, 1000);
          // if (is_logged)
          //   document.getElementById("unvalid").style.display = "block";
          // else window.open("home.html", "_self");
        });
    });
  } else {
    document.forms[0].addEventListener("submit", function (e) {
      e.preventDefault();
      let Lusers = JSON.parse(sessionStorage.getItem("users"));
      let len = Lusers.length;
      let i = 0;
      Lusers.forEach(function (user) {
        if (email.value == user.email) {
          if (password.value == user.password) {
            console.log(user);
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.open("home.html", "_self");
          }
        } else if (email.value == "admin@admin.com") {
          if (password.value == 12345) {
            localStorage.setItem(
              "Admin",
              JSON.stringify({ email: "admin@admin.com", password: "12345" })
            );
            window.open("home.html", "_self");
          }
        }
        i++;
      });
      sessionStorage.setItem("Lcount", JSON.stringify({ count: "1" }));
      setTimeout(function () {
        if (i == len) {
          document.getElementById("unvalid").style.display = "block";
        }
      }, 500);
    });
  }
};
login();

// john@gmail.com:m38rmF$
// morrison@gmail.com:83r5^_
// kevin@gmail.com:kev02937@
// don@gmail.com:ewedon
// derek@gmail.com:jklg*_56
// david_r@gmail.com:3478*#54
// miriam@gmail.com:f238&@*$
// william@gmail.com:William56$hj
// kate@gmail.com:kfejk@*_
// jimmie@gmail.com:klein*#%*
