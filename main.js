
function myFunction(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        document.getElementById("idNum").innerHTML = data.slip.id
        document.getElementById("textAdvice").innerHTML = data.slip.advice

    })
    .catch(error => console.error(error));
}
