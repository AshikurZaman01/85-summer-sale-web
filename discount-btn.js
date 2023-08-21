const discountPercentage = 0.20;
const totalPriceElement = document.getElementById('total-price');
const discountPriceShow = document.getElementById('discount-price');
const afterDiscountTotalPriceElement = document.getElementById('after-discount-total-price');


// Discount Button
const applyBtn = document.getElementById('btn-apply');
applyBtn.addEventListener('click', function() {
    const inputFieldElement = document.getElementById('input-field');
    const inputFieldString = inputFieldElement.value;

    // Check for empty input
    if (inputFieldString.length === 0) {
        messageElement.innerText = 'Please enter a promo code.';
        return;
    }

    if (inputFieldString.toLowerCase() === "sell200") {
        
        // 20% discount
        const totalPriceString = totalPriceElement.innerText;
        const totalPrice = parseFloat(totalPriceString);

        const discountedTotalPrice = totalPrice * (1 - discountPercentage); 

        // Display the discounted price
        
        discountPriceShow.innerText = (totalPrice - discountedTotalPrice).toFixed(2);

        // Update the after-discount-total-price element
        afterDiscountTotalPriceElement.innerText = discountedTotalPrice.toFixed(2);

        // Display a message
        messageElement.innerText = 'You get 20% discount !!';

      

        // Disable the discount button after applying the discount
        applyBtn.setAttribute('disabled', 'true');
    } else {
        // Display a message indicating incorrect input
        messageElement.innerText = 'Invalid promo code.';
    }

    // Clear the input field
    inputFieldElement.value = '';
});
