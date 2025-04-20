let formAction = document.querySelector("form");
let absoluteTemplate = [];
let submitNumbers = formAction.querySelectorAll(".form-container");;
let alertMessage = document.querySelector("#alertmessage");
let diagPrimary = 0;
let diagSecondary = 0;

formAction.addEventListener("submit", (e) => {
    e.preventDefault();
    submitNumbers.forEach((indice, i) =>{
        absoluteTemplate.push([]);
        indice.querySelectorAll("input").forEach(numVal => {
            absoluteTemplate[i].push(numVal.value);
        });
    });
    for(let i = 0; i < absoluteTemplate.length; i++){
        diagPrimary += parseInt(absoluteTemplate[i][i]);
        diagSecondary += parseInt(absoluteTemplate[i][(absoluteTemplate[i].length) - (1 + i)]);
    }
    alertMessage.innerHTML = "La diferencia absoluta es: " + (diagPrimary + diagSecondary);
    formAction.lastElementChild.setAttribute("disabled", "");
});