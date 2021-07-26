function getFirst() {
  return parseInt(document.getElementById("txtbox1").value);
}

function getSecond() {
  return parseInt(document.getElementById("txtbox2").value);
}

function add() {
  let n1 = getFirst();
  let n2 = getSecond();
  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("answer").value = "Incorrect input";
  } else {
    document.getElementById("answer").value = n1 + n2;
  }
}

subtract = (a, b) => {
  return 10;
};
