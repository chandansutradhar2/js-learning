function changeColor(color) {
  document.getElementById("text-1").style.color = color;
}

function displayMessage() {
  //TODO : to display
  let name = document.getElementById("fname").value;
  // window.alert(name);
  // alert(name);
  console.log("name is", name);

  document.getElementById("welcome").innerHTML =
    "Welcome to Learning Management System (LMS), " + name;

  m1();
  m2();
  m3();
}

function m1() {
  console.log("inside m1", Date());
}

function m2() {
  setTimeout(() => {
    console.log("inside m2", Date());
  }, 2000);
}
function m3() {
  console.log("inside m3", Date());
}
