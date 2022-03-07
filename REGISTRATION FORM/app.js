//for captcha purpose
function cap() {
  var alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "+",
  ];
  var a = alpha[Math.floor(Math.random() * 71)];
  var b = alpha[Math.floor(Math.random() * 71)];
  var c = alpha[Math.floor(Math.random() * 71)];
  var d = alpha[Math.floor(Math.random() * 71)];
  var e = alpha[Math.floor(Math.random() * 71)];
  var f = alpha[Math.floor(Math.random() * 71)];

  var final = a + b + c + d + e + f;
  document.getElementById("capt").value = final;
  document.getElementById("signup_capt").value = final;
}
function validcap() {
  document.querySelector("form").action =
    "https://sheetdb.io/api/v1/a3sncy8law13g";
  var stg1 = document.getElementById("capt").value;
  var stg2 = document.getElementById("textinput").value;
  if (stg1 == stg2) {
    document.querySelector(".success").classList.remove("hide");
    setTimeout(function () {
      document.querySelector(".success").classList.add("hide");
    }, 2000);
    document.querySelector(".error").classList.add("hide");
    var form = document.getElementById("sheetdb-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
      })
        .then((response) => response.json())
        .then((html) => {
          // you can put any JS code here
          window.location.href =
            "https://www.payumoney.com/paybypayumoney/#/AD743282918502F755C27A37FCB4766B";
        });
    });
    return true;
  } else {
    document.querySelector(".success").classList.add("hide");
    document.querySelector(".error").classList.remove("hide");
    document.querySelector("form").removeAttribute("action");
    setTimeout(() => {
      document.querySelector(".error").classList.add("hide");
    }, 2000);
    return false;
  }
}

cap();
