const submit = document.querySelector(".submit");
const rating = document.querySelector(".rating");
const thankyou = document.querySelector(".thankyou");
const btn = document.querySelectorAll(".btn");
const rate = document.getElementById("rate");

submit.addEventListener('click', () => {
    thankyou.classList.remove("hidden");
    rating.classList.add("hidden");
})

btn.forEach(element => {
    element.addEventListener('click', () => {
        rate.innerHTML  = element.innerHTML
    })
})