fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })
    .catch(err => {
        alert(`error ${err}`)
    })

//We still need to get the path to the images and the description/recipe.
//Then we have to use the `ticks` to make it a dynamic search through the input bar and button.
//Lastly it'd be better if we use the arrays given to us from the JSON to make a list we could click on.

document.querySelector("button").addEventListener("click", getDrink)


function getDrink(){
    const drinkInput = document.querySelector("input").value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`)
    .then(rec => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("img").src = data.drinks[0].strImageSource
/* THE STUFF BELOW IS TRYING TO GET ALL THE INGREDIENTS FROM THE API ARRAY TO PUT THEM IN ORDER */   
        data.drinks[0].forEach((x,i) => {
            if(includes('strIngredient')){
                true
            }
        })
        // document.querySelector(".ingredients")
    })
    .catch(err => {
        alert(`error ${err}`)
    })


}