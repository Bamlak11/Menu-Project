// created a class for grocery inventory
class GroceryInventory {
    constructor(name, category, price, quantity){
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }

    displayInfo(){
        return `Name: ${this.name}, Category: ${this.category}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }
};



//created an array to store inventory
let inventory = [];

const totalSold = [
    {name: 'Milk', category: 'Dairy', price: 5, quantity: 2 },
    {name: 'KitKat', category: 'Snack', price: 2, quantity: 5 },
    {name: 'Mango', category: 'Fruit', price: 3, quantity: 1 }
];

// variable to store new item.
const addInventoryItem = (name, category, price, quantity) => {
    const newItem = new GroceryInventory(name, category, price, quantity);
    inventory.push(newItem);
};




// function to take in inventory array and display it as a list
function inventorySold(inventory) {
    const inventoryElement = document.getElementById('inventory-list');
    inventoryElement.innerHTML = '<h2>Inventory List:</h2>';
    const list = document.createElement('ul');

    inventory.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${item.name}, Price: $${item.price} Category: ${item.category}, Quantity: $${item.quantity}`;
        list.appendChild(listItem);
    });

    inventoryElement.appendChild(list);
}



// will grab the value from each element by ID
const addInventory = () => {

    const itemName = document.getElementById('item-name').value;
    const itemPrice = parseFloat(document.getElementById('item-price').value);
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);
    const itemCategory = document.getElementById('category').value;


    const newItem = new GroceryInventory(itemName, itemCategory, itemPrice, itemQuantity);
    inventory.push(newItem);
    inventorySold(inventory);

};


// when btn is clicked it will retireve the value and store it in the id 'inventory-list'
document.getElementById('add-inventory-btn').onclick = addInventory;
