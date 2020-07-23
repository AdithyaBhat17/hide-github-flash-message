const flash = document.querySelector(".flash-error");

if (flash.textContent.includes("problem billing your account")) {
  console.log(flash.textContent);
  flash.remove();
}

// Boom
