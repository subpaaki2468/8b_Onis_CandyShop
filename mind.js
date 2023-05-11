const UserData = [
  {
    fn: "Onis",
    ln: "S",
    email: "paaki2468@gmail.com",
    password: "123456",
  },
];

function signup() {
  const pas1 = document.getElementById("passOne").value;
  const pas2 = document.getElementById("passTwo").value;
  if (pas1.length >= 4 && pas1 === pas2) {
    adduser(pas1);
  } else {
    alert("credential information is incorrect");
  }

  function adduser(password) {
    let fn = document.getElementById("firstname").value;
    let ln = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let newuser = { fn: fn, ln: ln, email: email, password: password };
    UserData.push(newuser);
    window.location.replace("./shop.html");
  }
}

function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  for (let i = 0; i < UserData.length; i++) {
    if (UserData[i].email == email && UserData[i].password == pass) {
      window.location.replace("./shop.html");
    }
  }
}
