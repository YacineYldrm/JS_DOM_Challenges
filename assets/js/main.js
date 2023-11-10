// ========================================
//              DOM Level 1_2
// ========================================

const allElements = document.getElementsByClassName('example');

let switchBtn = false; 

function myFunction() 
{   
    switchBtn = switchBtn ? false : true;
    // console.log(switchBtn)
    for (const elt of allElements)
    {
        if(switchBtn)
        {
            elt.style.backgroundColor = "red";
        }
        else
        {
            elt.style.backgroundColor = "inherit";
        }
    }
};

// ========================================
//              DOM Level 1_3
// ========================================

const allButton = document.body.querySelectorAll('.unten > button');
const textOutput = document.body.querySelector('output');

const showContent = () =>
{
    allButton[0].addEventListener('click', ()=> 
    {
        textOutput.textContent = document.getElementById('myList').firstElementChild.textContent;
    });
    allButton[1].addEventListener('click', ()=> 
    {
        textOutput.textContent = document.getElementById('myList').lastElementChild.textContent;
    });
    allButton[2].addEventListener('click', ()=> 
    {
        textOutput.textContent = document.getElementById('myList').firstElementChild.nextElementSibling.textContent;
    });
    allButton[3].addEventListener('click', ()=> 
    {
        textOutput.textContent = document.getElementById('myList').lastElementChild.previousElementSibling.textContent;
    });
};
showContent();

// ========================================
//              DOM Level 1_4
// ========================================

const addElement = () => {
    const listInput = document.body.querySelector('#inputText');
    const addToListButton = document.body.querySelector('#add-to-list');
    const shoppingList = document.getElementById('myShoppingList');
    const errorMessage = document.createElement('p');
    
    addToListButton.addEventListener('click', () => 
    {
        if(listInput.value.length > 1)
        {
            errorMessage.textContent = ""
            const zutaten = document.createElement('li');    
            zutaten.textContent = listInput.value;
            shoppingList.prepend(zutaten);
            listInput.value = "";
        }
        else
        {
            errorMessage.textContent = "Bitte Produkt eingeben"
            errorMessage.style.color = "red";
            shoppingList.appendChild(errorMessage);
        }
    });
};
addElement();

// ========================================
//              DOM Level 1_9
// ========================================

const farbAuswahlen = document.body.querySelector('#farbAuswahlen');
const removeButton = document.body.querySelector('#removeButton')

removeButton.addEventListener('click', () => 
{
    event.preventDefault();
    // console.log(farbAuswahlen.selectedIndex);
    farbAuswahlen.remove(farbAuswahlen.selectedIndex)
})

// ========================================
//              DOM Level 2_1
// ========================================

const navChange = document.body.querySelector('#navChange');
const navHome = document.body.querySelector('#navHome');
let changeSwitch = false;

navChange.addEventListener('click', () =>
{
    let navHomeText = navHome.textContent.split("");
    let reverseNavHomeText = navHomeText.reverse();
    navHome.textContent = reverseNavHomeText.join("");
    changeSwitch = changeSwitch ? false : true;

    if(changeSwitch)
    {
        navHome.style.backgroundColor = "pink";
        navHome.style.color = "black";
    }
    else
    {
        navHome.style.backgroundColor = "inherit";
        navHome.style.color = "white";
    }
})