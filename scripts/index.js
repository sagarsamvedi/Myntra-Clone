let bagItems;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayBagIcon();
    displayItemsOnHomePage();
}

function addToBag(item){
    bagItems.push(item)
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
    // console.log(bagItems);
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage(){

    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement){
        return;
    }
    let innerHtml = '';

    items.forEach(item =>{
    innerHtml +=   `<div class="item-container">
    <img class= 'item-image' src="${item.image}">
    <div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">₹ ${item.current_price}</span>
        <span class="original-price">₹ ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage} %  OFF)</span>
    </div>
    <button class="btn-add-bag" onclick = 'addToBag(${item.id})'>Add to Bag</button>
    </div>`
})
itemsContainerElement.innerHTML = innerHtml
}

function searchResult() {
    let searchQuery = document.querySelector('.search_input').value.toLowerCase(); // Convert to lowercase
    let searchArray = items.filter(item => item.item_name.toLowerCase().includes(searchQuery));
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement) {
        return;
    }
    let innerHtml = '';

    searchArray.forEach(item => {
        innerHtml += `<div class="item-container">
        <img class= 'item-image' src="${item.image}">
        <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">₹ ${item.current_price}</span>
            <span class="original-price">₹ ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage} %  OFF)</span>
        </div>
        <button class="btn-add-bag" onclick='addToBag(${item.id})'>Add to Bag</button>
        </div>`;
    });
    itemsContainerElement.innerHTML = innerHtml;
}
