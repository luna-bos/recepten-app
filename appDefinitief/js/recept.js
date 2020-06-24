 

const receptIngredients = document.querySelector('.receptIngredients');
const receptPreparation = document.querySelector('.receptPreparation');

let ingredients = [];
let preparation = [];

var myDiv= document.getElementById("cboxes");
var myDiv2 = document.getElementById("cboxes2");



//create element and render data
function renderRecipe(doc) {
    for(i = 0; i < doc.data().ingredients.length; i++){
        ingredients.push(doc.data().ingredients[i]);
        var checkBox = document.createElement("input");
        var label = document.createElement("label");
        var br = document.createElement("br");
        checkBox.type = "checkbox";
        checkBox.value = 'ingredients'+ [i];
        myDiv.appendChild(checkBox);
        myDiv.appendChild(label);
        myDiv.appendChild(br);
        label.appendChild(document.createTextNode(ingredients[i]));
    }
    for(i = 0; i < doc.data().preparation.length; i++){
        preparation.push(doc.data().preparation[i]);
        
        var checkBox = document.createElement("input");
        var label = document.createElement("label");
        var br = document.createElement("br");
        checkBox.type = "checkbox";
        checkBox.value = 'preparation'+ [i];
        myDiv2.appendChild(checkBox);
        myDiv2.appendChild(label);
        myDiv2.appendChild(br);
        label.appendChild(document.createTextNode(preparation[i]));
    }
}



for (var i = 0; i < ingredients.length; i++) {
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = ingredients[i];
    myDiv.appendChild(checkBox);
    myDiv.appendChild(label);
    label.appendChild(document.createTextNode(animals[i]));
}

db.collection("recipes").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderRecipe(doc);
    });
})
