const users = function () {
  //Write your code here
  //1-Get the data from API using FETCH
  if (!JSON.parse(sessionStorage.getItem("Lcount"))) {
    fetch("../json/users.json")
      .then((res) => res.json())
      .then((users) => {
        sessionStorage.setItem("users", JSON.stringify(users));
        const html = users
          .map((user) => {
            const index = user.id - 1;
            console.log(index);
            return `
                     <div class="user__container user_id-${user.id}"> 
                        <h4 class="user__container-email">${user.email}</h4>
                        <p class="user__container-password"><span>User ID</span>: ${user.id}</p>
                        <p class="user__container-password"><span>Password</span>: ${user.password}</p>
                        <p class="user__container-name"><span>Name</span>: ${user.name.firstname} , ${user.name.lastname}</p>
                        <p class="user__container-phone"><span>Phone</span>: ${user.phone}</p>
                        <p class="user__container-address"><span>Address</span>: ${user.address.street} , ${user.address.city}</p>
                        <button onclick=deleteUser(${user.id}) style="padding:5px;background-color:black;color:white">Delete</button>
                    </div>`;
          })
          .join("");
        document
          .querySelector(".main__container")
          .insertAdjacentHTML("afterbegin", html);
      });
    sessionStorage.setItem("Lcount", JSON.stringify({ count: "1" }));
  } else {
    let users = JSON.parse(sessionStorage.getItem("users"));
    users.forEach(function (user) {
      let html = `
                     <div class="user__container user_id-${user.id}">
                        <h4 class="user__container-email">${user.email}</h4>
                        <p class="user__container-password"><span>User ID</span>: ${user.id}</p>
                        <p class="user__container-password"><span>Password</span>: ${user.password}</p>
                        <p class="user__container-name"><span>Name</span>: ${user.name.firstname} , ${user.name.lastname}</p>
                        <p class="user__container-phone"><span>Phone</span>: ${user.phone}</p>
                        <p class="user__container-address"><span>Address</span>: ${user.address.street} , ${user.address.city}</p>
                        <button onclick=deleteUser(${user.id}) style="padding:5px;background-color:black;color:white">Delete</button>
                    </div>`;
      document
        .querySelector(".main__container")
        .insertAdjacentHTML("beforeend", html);
    });
  }
};
users();

function deleteUser(id) {
  let users = JSON.parse(sessionStorage.getItem("users"));
  console.log(users);
  users.splice(id - 1, 1);
  users.forEach(function (user) {
    if (user.id > id) {
      user.id = user.id - 1;
    }
  });
  document.getElementsByClassName(`user__container user_id-${id}`)[0].remove();
  sessionStorage.setItem("users", JSON.stringify(users));
  window.location.reload(true);
}
