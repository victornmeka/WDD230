/* Fresh Page Scripts*/
// Load the fruits data from the JSON source
const urlFreshData = "https://brotherblazzard.github.io/canvas-content/fruit.json";
// Load data of json
fetch(urlFreshData)
    .then(response => response.json())
    .then(data => {
        // Add the fruits to the select elements
        fruitsData(data);
        // Add the submit event listener to the form
        let orderForm = document.querySelector("#order-form");
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from submitting to a new page
            // Get the selected options' nutrition data and calculate the total nutrition
            infoCard(data);
            orderForm.reset();
        })
    })
    .catch(error => console.error(error));
// Function to Fruits Data
let fruitsData = (data) => {
    const fruitSelectors = document.querySelectorAll('select[name^="fruit"]');
    fruitSelectors.forEach(selector => {
        // Add the default option
        const defaultOption = document.querySelector('option');
        // Add the fruit options
        data.forEach(fruit => {
            const option = document.createElement('option');
            option.value = fruit.name;
            option.text = fruit.name;
            selector.add(option);
        });
        // Add event listener to check for duplicate selections
        selector.addEventListener('change', function () {
            // Find all other fruit selectors
            const otherSelectors = document.querySelectorAll(`select[name^="fruit"]:not(#${selector.id})`);
            // Check if the selected option has already been selected in another selector
            for (const otherSelector of otherSelectors) {
                if (otherSelector.value === selector.value && selector.value !== '') {
                    document.getElementById(selector.id + '-error').textContent = `You have already selected ${selector.value} in another field!!`;
                    document.getElementById(selector.id + '-error').style.display = 'inline-block';
                    selector.value = '';
                    break;
                } else {
                    document.getElementById(selector.id + '-error').textContent = '';
                    document.getElementById(selector.id + '-error').style.display = 'none';
                }
            }
            // Add the selected class to the selected option
            const selectedOption = selector.options[selector.selectedIndex];
            selectedOption.classList.add('selected');
        });
    });
    // Add event listener to remove selected class when changing selection
    const selectOptions = document.querySelectorAll('select[name^="fruit"] option');
    selectOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedOptions = document.querySelectorAll('select[name^="fruit"] option.selected');
            selectedOptions.forEach(selectedOption => {
                if (selectedOption.value !== option.value) {
                    selectedOption.classList.remove('selected');
                }
            });
        });
    });
}
//  Function to show the order summary
let infoCard = (data) => {
    // Get the input values from the form and calculate the nutrition information
    const firstName = document.getElementById('first-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruitOne').value;
    const fruit2 = document.getElementById('fruitTwo').value;
    const fruit3 = document.getElementById('fruitThree').value;
    const instructions = document.getElementById('additional-instructions').value;
    // Get the selected options' nutrition data and calculate the total nutrition
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCalories = 0;

    const selectedFruits = [fruit1, fruit2, fruit3];
    for (const fruit of data) {
        if (selectedFruits.includes(fruit.name)) {
            totalCarbs += parseFloat(fruit.nutritions.carbohydrates);
            totalProtein += parseFloat(fruit.nutritions.protein);
            totalFat += parseFloat(fruit.nutritions.fat);
            totalSugar += parseFloat(fruit.nutritions.sugar);
            totalCalories += parseFloat(fruit.nutritions.calories);
        }
    }
    username.innerHTML = `Name: ${firstName}`;
    useremail.innerHTML = `Email:  ${email}`;
    userphone.innerHTML = `Cell Phone:  ${phone}`;
    useroption1.innerHTML = `Fruit1: ${fruit1}`;
    useroption2.innerHTML = `Fruit2: ${fruit2}`;
    useroption3.innerHTML = `Fruit3: ${fruit3}`;
    userinstructions.innerHTML = `Additional Instructions: ${instructions}`;
    carbs.innerHTML = `Total carbs: ${totalCarbs.toFixed(2)}g`;
    proteins.innerHTML = `Total proteins: ${totalProtein.toFixed(2)}g`;
    fats.innerHTML = `Total fats: ${totalFat.toFixed(2)}g`;
    sugar.innerHTML = `Total sugar: ${totalSugar.toFixed(2)}g`;
    calories.innerHTML = `Total calories : ${totalCalories.toFixed(2)}g`




}

