fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        // console.log(data.drinks)
        console.log(data)
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

document.querySelector(".getCocktail").addEventListener("click", getDrink)

function getDrink(){
    let div = document.querySelector('.drinkList')

    if(document.querySelector('.createdUl')){
        document.querySelector('.createdUl').remove()
    }

    let ul = document.createElement('ul')

    // const element = document.querySelector('.createdLi')
    // element.remove()
    const drinkInput = document.querySelector("input").value
    /*ADD AN OPTION THAT REMOVES ANY PREVIOUS LI's*/
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // let array = []
        /*****************THE STUFF BELOW CREATES A NEW li FOR EVERY ELEMENT IN THE JSON AND ADDS THE NAME OF THE DRINK**************** */
        data.drinks.forEach((x,i) =>{
            let img = document.createElement('img')
            let li = document.createElement('li')
            let p = document.createElement('p')
            p.innerText = x.strInstructions
            img.setAttribute('src', x.strDrinkThumb )
            img.setAttribute('class',`hideAndSeek img${i}`)
            // p.setAttribute('class')
            img.style.height = 'auto'
            li.innerText = x.strDrink
            li.setAttribute('class',`createdLi createdLi${i} ${i}`)
            p.setAttribute('class',`hideAndSeek p${i}` )
            ul.setAttribute('class','createdUl')
            li.appendChild(img)
            li.appendChild(p)
            ul.appendChild(li)
            div.appendChild(ul)
            document.querySelector(`.createdLi${i}`).addEventListener('click',showLi)
        })

    

        /******************************************************************************************************************************** */
        // document.querySelector(".drinkImg").src = data.drinks[0].strDrinkThumb
        // document.querySelector('.instructions').innerText = data.drinks[0].strInstructions



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
    document.querySelector('input').value = ''

}


// let selector = document.querySelectorAll(".createdLi")

// selector.forEach((x,i) => {
//     x.addEventListener("click", showLi)

// })

function showLi(e){
    let number = e.target.classList[e.target.classList.length - 1]
    console.log(e.target.classList)
    console.log(e.target.classList[e.target.classList.length - 1])
    console.log(document.querySelector(`.p${number}`))
    // console.log('Test')
    /*use a conditional to go through the different li's*/
    let p = document.querySelector(`.p${number}`)
    let img = document.querySelector(`.img${number}`)
    const li = document.querySelector(`.createdLi${number}`)
    if(p.style.display === 'none') {
        p.style.display = 'block'
        img.style.display = 'block'
    }else {
        p.style.display = 'none'
        img.style.display = 'none'
    }
}
/*What we have to do is make it so whenever we click on one of the created li's it displays all the information we need it to (Instructions etc)
Whenever we click on the li again, it'll have to hide all that information.
What we can do is have all the information already ready whenever the search is made, but hide all the information by default. As soon as that specific li is clicked, we unhide it.
document.getElementbyID("element").style.display = "none" will hide our element
document.getelementbyID("element").style.display = "block" will stop the display: none from working, thus displaying it.
We have to add another element underneath the created list items


/**************************************************************************************************************************************** */ 
/*****************************************************LIGHT/DARK MODE************************************************************************* */
/**************************************************************************************************************************************** */


/******************************************************************************************************************************************* */