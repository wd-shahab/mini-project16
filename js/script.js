let $ = document;

let inputElem = $.getElementById("email");
let submitForm = $.querySelector(".form");
let endBtn = $.getElementById("end");
let mainElem = $.querySelector("main");
let sectionElem = $.querySelector("section");
let spanElem = $.getElementById("userEmail");

const regexEmail = /^[a-z]+[\w\.\-]*@[\w]{3,}\.[a-z]{3,}/gi;


submitForm.addEventListener("submit", function (event) {
  event.preventDefault()
  
  let inputVal = inputElem.value
  if(regexEmail.test(inputVal)){
    mainElem.style.display = "none";
    spanElem.innerHTML = inputElem.value;
    sectionElem.style.display = "block"; 
  }
  else{
    let errColor = "#ff1403";

    inputElem.style.borderColor = errColor
    inputElem.style.color = errColor
    inputElem.style.background = "#ffb3ae";
    submitForm.classList.add("err");

    setTimeout(() => {
      inputElem.style.borderColor = "";
      inputElem.style.color = "";
      inputElem.style.background = "";
      submitForm.classList.remove("err");
    }, 3e3);
  }
});

endBtn.addEventListener('click', () => {
  window.location.reload()
})
