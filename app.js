let inputValue = document.querySelector("#txt-input");
let button = document.querySelector("#btn-translate");
let output = document.querySelector("#txt-translated");
let url = "https://api.funtranslations.com/translate/minion.json?text="

function errorHandler(error){
    console.log("error occured:",error);
    alert("something went wrong!! please retry after some time!!");
}

button.addEventListener("click",()=>{
    let inputData = inputValue.value;

    let urlCall = url + inputData;
    fetch(urlCall).then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(errorHandler);
});

