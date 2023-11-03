fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        // console.log(data.drinks)
        console.log(data.drinks[0])
    })
    .catch(err => {
        alert(`error ${err}`)
    })

//The code below is supposed to try to split the information given in the chosen array, find the ingredients and list them. But so far idk how to split the information within the API's array.

// document.querySelector("h2").addEventListener("click",test)

// function test(){
//     // console.log(data.drinks[0].includes('strIngredient'))
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//     .then(res => res.json())    
//     .then(data => {
//     // data.drinks[0].toArray().forEach((x) => {
//     //     if(x.includes('strIngredient') && !x.includes('null')){
//     //         console.log(x)
//     //     }else{
//     //         console.log('This aint working')
//     //     }
//     // })
//     })
//     .catch(err => {
//         alert(`error ${err}`)
//     })
// }


    // data.drinks[0].forEach((x,i) => {
    //     if(includes('strIngredient')){
    //         document.querySelector(".ingredients").innerText = data.drinks[i].strIngredient
    //     }
    // })


//We still need to get the path to the images and the description/recipe.
//Then we have to use the `ticks` to make it a dynamic search through the input bar and button.
//Lastly it'd be better if we use the arrays given to us from the JSON to make a list we could click on.

document.querySelector("button").addEventListener("click", getDrink)


function getDrink(){
    const drinkInput = document.querySelector("input").value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

/*****************THE STUFF BELOW CREATES A NEW li FOR EVERY ELEMENT IN THE JSON AND ADDS THE NAME OF THE DRINK**************** */
        data.drinks.forEach((x,i) =>{
            let ul = document.querySelector('ul')
            let li = document.createElement('li')
            ul.appendChild(li).innerText = x.strDrink
        })
        document.querySelector("img").src = data.drinks[0].strDrinkThumb
        document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
/****************** THE STUFF BELOW IS TRYING TO GET ALL THE INGREDIENTS FROM THE API ARRAY TO PUT THEM IN ORDER********************** */   
        // data.drinks[0].forEach((x,i) => {
        //     if(includes('strIngredient')){
        //         document.querySelector(".ingredients").innerText = data.drinks[i].strIngredient
        //     }
        // })
        // document.querySelector(".ingredients")

/*************************************************************************************************************************************** */
    })
    .catch(err => {
        alert(`error ${err}`)
    })


}