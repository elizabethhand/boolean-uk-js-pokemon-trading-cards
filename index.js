// write your code here!
// This variable has the data you're working with

function createCard (title, image, text){
var section= document.querySelector('section')

//create card
var article= document.createElement('article')

//create h2
var title= document.createElement('h2')
title.setAttribute ("class", "card--title")
title.innerText= "hello"

//create img
var image=document.createElement("img")
image.setAttribute ("class", "card--img")
image.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png")
image.setAttribute("width", "256")

//create text
var text=document.createElement('div')
text.setAttribute("class", "card--text")

//add p elements to text div

for(i = 0; i < 6; i++){
    var para = document.createElement("p");
    para.innerText = `${data[j]["stats"][i]["stat"]["name"].toUpperCase()}:${data[j]["stats"][i]["base_stat"]}`
    text.append(para)
    console.log(para)
}


section.append(article)
article.append(title)
article.append(image)
article.append(textDiv)

console.log(title)
}



