

let selectedChocolates = [];
const maxChocolates = 8;
const chocolatePrices = {
    "Chocolate A": 100.00,
    "Chocolate B": 280.50,
    "Chocolate C": 123.00,
    "Chocolate D": 43.50,
    "Chocolate E": 167.00,
    "Chocolate F": 254.00,
    "Chocolate G": 200.00,
    "Chocolate H": 321.00,
    "Chocolate I": 122.00,
    // Add more chocolates and their prices as needed
};

function toggleChocolate(chocolate) {
    const chocolateName = chocolate.innerText;
    const index = selectedChocolates.indexOf(chocolateName);

    if (index === -1) {
        if (selectedChocolates.length < maxChocolates) {
            selectedChocolates.push(chocolateName);
        } else {
            alert(`You can only select a maximum of ${maxChocolates} chocolates.`);
        }
    } else {
        selectedChocolates.splice(index, 1);
    }

    updateUI();
}

function updateUI() {
    const totalPrice = calculateTotal();
    document.getElementById('totalPrice').innerText = `Total Price: $${totalPrice.toFixed(2)}`;
}

function calculateTotal() {
    return selectedChocolates.reduce((sum, chocolate) => sum + chocolatePrices[chocolate], 0);
}

function checkout() {
    // Implement your checkout logic here
    // You can send the selectedChocolates array to the server for further processing
    alert(`Checkout: ${selectedChocolates.join(', ')}\nTotal Price: $${calculateTotal().toFixed(2)}`);
}
