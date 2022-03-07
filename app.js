document.querySelector(".close-modal").addEventListener("click", function () {
  login_popup.classList.add("hide");
});
// cart-section
function open_cart() {
  document.querySelector(".cart-section").style.display = "block";
}
document.getElementById("cart-close").addEventListener("click", function () {
  document.querySelector(".cart-section").style.display = "none";
});

function removeall() {
  document.querySelector("#item1").style.display = "none";
  document.querySelector("#item2").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
  document.querySelector(".new-item").style.display = "none";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".cart3").innerHTML = "Add to cart";
  document.querySelector(".cart4").innerHTML = "Add to cart";
}

function add_to_cart_1() {
  document.querySelector(".new-item").style.display = "block";
  document.querySelector(".empty-cart").style.display = "none";
  document.querySelector(".Action").style.display = "block";
  document.querySelector("#item1").style.display = "flex";
  document.querySelector("#item2").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "block";
  document.querySelector(".cart1").innerHTML = "Go to cart";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".cart3").innerHTML = "Add to cart";
  document.querySelector(".cart4").innerHTML = "Add to cart";
  document.querySelector(".cart-section").style.display = "block";
}

function add_to_cart_2() {
  document.querySelector(".new-item").style.display = "block";
  document.querySelector(".empty-cart").style.display = "none";
  document.querySelector(".Action").style.display = "block";
  document.querySelector("#item2").style.display = "flex";
  document.querySelector("#item1").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "block";
  document.querySelector(".cart2").innerHTML = "Go to cart";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".cart3").innerHTML = "Add to cart";
  document.querySelector(".cart4").innerHTML = "Add to cart";
  document.querySelector(".cart-section").style.display = "block";
}

function add_to_cart_3() {
  document.querySelector(".new-item").style.display = "block";
  document.querySelector(".empty-cart").style.display = "none";
  document.querySelector(".Action").style.display = "block";
  document.querySelector("#item3").style.display = "flex";
  document.querySelector("#item1").style.display = "none";
  document.querySelector("#item2").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "block";
  document.querySelector(".cart3").innerHTML = "Go to cart";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".cart4").innerHTML = "Add to cart";
  document.querySelector(".cart-section").style.display = "block";
}

function add_to_cart_4() {
  document.querySelector(".new-item").style.display = "block";
  document.querySelector(".empty-cart").style.display = "none";
  document.querySelector(".Action").style.display = "block";
  document.querySelector("#item4").style.display = "flex";
  document.querySelector("#item1").style.display = "none";
  document.querySelector("#item2").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "block";
  document.querySelector(".cart4").innerHTML = "Go to cart";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".cart3").innerHTML = "Add to cart";
  document.querySelector(".cart-section").style.display = "block";
}

function remove_1() {
  document.querySelector(".new-item").style.display = "none";
  document.querySelector("#item1").style.display = "none";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
}

function remove_2() {
  document.querySelector(".new-item").style.display = "none";
  document.querySelector("#item2").style.display = "none";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
}

function remove_3() {
  document.querySelector(".new-item").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
}

function remove_4() {
  document.querySelector(".new-item").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
}

function logout() {
  window.location.reload();
}

//CONTACT US API
var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      document.querySelector(".toast").classList.remove("hidden");
      setTimeout(() => {
        document.querySelector(".toast").classList.add("hidden");
      }, 2000);

      setTimeout(() => {
        window.location.reload();
      }, 2010);
    });
});
