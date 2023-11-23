// let array = []

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        // console.log(data.drinks)
        console.log(data)
        console.log(Object.entries(data.drinks[0]).map(([k,v]) => ({[k]:v}))) /*Makes all properties and methods in an object into an array. Information taken from: https://www.bing.com/search?q=How+to+put+all+the+properties+of+an+object+into+an+array&cvid=112e23c0b13044ca9ef2ef464609182b&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQ6wcYQNIBCDkyOTFqMGo0qAIAsAIA&FORM=ANAB01&PC=ASTS*/
        const array = Object.entries(data.drinks[0]).map(([k,v]) => ({[k]:v}))
        // array.push(Object.entries(data.drinks[0]).map(([k,v]) => ({[k]:v})) + 'hello') -DONT DO SHIT
        console.log(array[20]) //should return with strIngredient4: 'Salt'

        }
    )
    
    .catch(err => {
        alert(`error ${err}`)
    })


    // function filterItems(arr, query) {
    //     return arr.filter((el) =>
    //     el.toLowerCase().includes(query.toLowerCase()))
    // }

    // console.log(array[20])
    // console.log(filterItems(array, "strIng"))


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
            img.setAttribute('class',`hideAndSeek img${i} ghost`)
            img.style.height = 'auto'
            li.innerText = x.strDrink
            li.setAttribute('class',`createdLi createdLi${i} ${i}`)
            p.setAttribute('class',`hideAndSeek p${i} ghost`)
            p.style.display = 'none'
            ul.setAttribute('class','createdUl')
            li.appendChild(img)
            li.appendChild(p)
            ul.appendChild(li)
            div.appendChild(ul)
            document.querySelector(`.createdLi${i}`).addEventListener('click',showLi)
            document.querySelector(`.p${i}`).addEventListener('click',showLi)
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

function showLi(e){ /*What I can understand, the e parameter readys whatever element was clicked and puts it here*/
    let number = e.target.classList[e.target.classList.length - 1]
    // console.log(e.target.classList)
    // console.log(e.target.classList[e.target.classList.length - 1])
    // console.log(document.querySelector(`.p${number}`).toString())

    // console.log('Test')
    /*use a conditional to go through the different li's*/
    let p = document.querySelector(`.p${number}`)
    let img = document.querySelector(`.img${number}`)
    const li = document.querySelector(`.createdLi${number}`)
    if(p.style.display === 'none') {
        p.style.display = 'block'
        img.style.display = 'block'
        li.style.background = 'linear-gradient("gray","black")'
    }else {
        p.style.display = 'none'
        img.style.display = 'none'
        li.style.background = ''
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
function lightDarkModes() {
    // alert('The Event Listener Works')
    if(document.querySelector('.lightDark').innerText === "Light Mode"){
        // if(1+1 === 2){  //Primarily checking to see if my conditional worked, it does now
        // lightMode Doesn't seem to be able to grab the function from outside this scope
        document.querySelector('body').style.backgroundColor = 'whitesmoke'
        document.querySelector('html').style.color = 'black'
        document.querySelector('h1').style.color = 'black'
        document.querySelector('img').style.border = '1px solid black'
        document.querySelector('.left').style.backgroundColor = 'black'
        document.querySelector('.right').style.backgroundColor = 'black'
        document.querySelector('.left').style.border = '1px solid black'
        document.querySelector('.right').style.border = '1px solid black'
        document.querySelector('section img').style.border = '1px solid black'
        document.querySelector('.extraRecipes').style.backgroundColor = 'gray'
        
        document.querySelector('.lightDark').innerHTML = 'Dark Mode' //This replaces any text within the Element with whatever I choose. It's the same down in the Dark Mode function
        document.querySelector('.fa-rotate-180').className = 'fa-solid fa-circle-half-stroke flipped' //This is broken but it's pickinng it up properly, it just doesn't flip back to the original. I think we need completely unique classes.

    }

    else if(document.querySelector('.lightDark').innerText === "Dark Mode") {
        // else if(1+1 === 3) {

        // darkMode //Doesn't seem to grab it outside this scope
        document.querySelector('body').style.backgroundColor = 'Gray'
        document.querySelector('html').style.color = 'whiteSmoke'
        document.querySelector('h1').style.color = 'whiteSmoke'
        document.querySelector('img').style.border = '1px solid whiteSmoke'
        document.querySelector('.left').style.backgroundColor = 'whiteSmoke'
        document.querySelector('.right').style.backgroundColor = 'whiteSmoke'
        document.querySelector('.left').style.border = '1px solid whiteSmoke'
        document.querySelector('.right').style.border = '1px solid whiteSmoke'
        document.querySelector('section img').style.border = '1px solid whiteSmoke'
        document.querySelector('.extraRecipes').style.backgroundColor = 'whiteSmoke'
        document.querySelector('.lightDark').innerHTML = 'Light Mode'
        document.querySelector('.flipped').className = 'fa-solid fa-circle-half-stroke fa-rotate-180' //I believe the problem is with the "lightMode" conditional, still this is broken but it's picking it up properly, it just doesn't flip back to the original.
    }

    else {
        alert('ERROR 010: BROKEN LIGHT/DARK PROGRAM') //Get it? 010, off on off. heheh
    }
}


/******************************************************************************************************************************************* */