// Get card items
const cards = document.getElementsByClassName('card');
const messageElement = document.getElementById('message');



for (const card of cards) {
    card.addEventListener('click', function() {
        const productName = card.querySelector('.product-name').textContent;
        const productPrice = parseFloat(card.querySelector('.product-price').textContent);

        // Add product name to the list
        const listId = document.getElementById('list-id');
        const liName = document.createElement('li');
        liName.textContent = productName;
        listId.appendChild(liName);

        // Update total price
        const totalPriceElement = document.getElementById('total-price');
        const totalPriceString = totalPriceElement.innerText;
        const totalPrice = parseFloat(totalPriceString);
        const newTotalPrice = totalPrice + productPrice;
        totalPriceElement.innerText = newTotalPrice.toFixed(2); 
        afterDiscountTotalPriceElement.innerText = newTotalPrice.toFixed(2);

        // Check and enable discount button
        const applyBtn = document.getElementById('btn-apply');
        if (newTotalPrice >= 200) {
            applyBtn.removeAttribute('disabled');
        } else {
            applyBtn.setAttribute('disabled', 'true');
        }

         // purchase button start
    const makePurchaseButton  = document.getElementById('make-purchase');
    const purchaseModal = document.getElementById("purchase-modal");
    const closeModalButton = document.getElementById("close-modal");
    
    
    if(parseFloat(afterDiscountTotalPriceElement.innerText) > 0)
    {
       makePurchaseButton .removeAttribute('disabled');
       makePurchaseButton .addEventListener('click' , function()
       {
           purchaseModal.classList.remove("hidden");
       })

         // Modal close button start
       closeModalButton.addEventListener('click' , function()
       {
           // reset list section
           while (listId.firstChild) {
               listId.removeChild(listId.firstChild);
           }
           discountPriceShow.innerText = '00.00';
          
           // reset Total Price 
          afterDiscountTotalPriceElement.innerText = '00.00';
           
          // reset after total price
           totalPriceElement.innerText = '00.00';
           
           // reset Message section
           messageElement.innerText = '';
           
           // Hide the modal
           purchaseModal.classList.add("hidden");
           
         // Modal close button end
       })
    }
         // purchase button start
    });
}


