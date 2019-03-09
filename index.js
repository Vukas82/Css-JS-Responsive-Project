let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);


// Add item
function addItem(e){
    e.preventDefault();
    
// Get input value
    var newItem = document.getElementById('item').value;
    
// create new l ielement
    var li = document.createElement('li');
    
// add class
    li.className = 'list-group-item';
    
// Add text node with input value
    li.appendChild(document.createTextNode(newItem));

// Create del button element
    
    let deleteBtn = document.createElement('button');
    
// add class to del btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
// Append tex node
    deleteBtn.appendChild(document.createTextNode('X'));
    
// Append button to li    
    li.appendChild(deleteBtn);

// Append li to list    
    itemList.appendChild(li);
    
};

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
};

// filter Item
function filterItems(e){
    // Convert text to lowerCase
    let text = e.target.value.toLocaleLowerCase();
    
    // get list items
    let items = itemList.getElementsByTagName('li');
    
    // Convert to an array
    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    })
};