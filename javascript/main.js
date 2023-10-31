fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        alert(`error ${err}`)
    })



document.querySelector("button").addEventListener("click", getDrink)


function getDrink(){
    const drinkInput = document.querySelector("input").value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`)
    .then(rec => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        alert(`error ${err}`)
    })


}