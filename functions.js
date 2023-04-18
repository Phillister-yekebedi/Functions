//You manage a grocery store and need to keep track of the inventory of various items. 
//You will use arrays to store the data and various functions to manipulate and analyze the data. 

//Create an array containing the names of all items in the inventory maximum of 10.
let myList = ["bread","dairy","legumes","sugar","flour","rice","nuts","cake","pasta","vegetables"]

//Create a separate array with the corresponding stock quantities of each item maximum of 10.
const amount=[100,500,30,400,290,689,450,200,100,340]

//Write a function to add a new item to the inventory, updating both arrays.
let newList= "Apple"
let newAmount = 995

function myGrocery(newList,newAmount){
    if(myList.length <= 10){
       
        console.log("list full")

    }
    else{
        console.log(`${newList} and ${newAmount}`)
    }
}



//Write a function to update the stock quantity of an existing item.
function updateSList(name, quantity) {
    let index = myList.indexOf(name);
    if (index !== -1) { // make sure item exists in inventory
      stock[index] = quantity;
      console.log(` ${name} to ${quantity}`);
    }
}

//Write a function to calculate the total number of items in the inventory.
function items(){
    let sum = 0;
    for (let item in myList) {
      sum += myList[item].stock;
    }
    console.log(`all groceries : ${sum}.`);
  }


//Write a function to find the item with the lowest stock quantity.
function loweQuantity(){
    let list= 
    console.log(math.min(...loweQuantity))

}
loweQuantity()