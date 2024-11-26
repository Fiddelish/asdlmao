const weeklyMenu = {
    sunday: ["Persiljebiff med gräddsås & stekt potatis", "Panerad sejfilé med mos & räkmajonäs", "Kycklingsallad med currydressing"],
    monday: ["Persiljebiff med gräddsås & stekt potatis", "Panerad sejfilé med mos & räkmajonäs", "Kycklingsallad med currydressing"],
    tuesday: ["Grilled Chicken", "Veggie Wrap", "Minestrone Soup"],
    wednesday: ["Beef Stroganoff", "Greek Salad", "Lentil Soup"],
    thursday: ["Fish Tacos", "Quinoa Salad", "Sweet Potato Soup"],
    friday: ["Pizza Margherita", "Caprese Salad", "Mushroom Soup"]
};

// Function to get today's menu
function getTodaysMenu(menu) {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
    const today = new Date().getDay();
    return menu[days[today]] || [];
}

// Display today's menu
const menuItemsElement = document.getElementById("menu-items");
const todaysMenu = getTodaysMenu(weeklyMenu);

if (todaysMenu.length > 0) {
    todaysMenu.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        menuItemsElement.appendChild(li);

        // Dynamically create input fields for each food option
        const foodOptionsContainer = document.getElementById("food-options-container");
        const foodOption = document.createElement("div");
        foodOption.classList.add("food-option");

        const label = document.createElement("label");
        label.textContent = `Option ${index + 1}: ${item}`;
        const input = document.createElement("input");
        input.type = "number";
        input.id = `food${index + 1}`;
        input.min = 0;
        input.placeholder = "Quantity";
        foodOption.appendChild(label);
        foodOption.appendChild(input);

        foodOptionsContainer.appendChild(foodOption);
    });
} else {
    menuItemsElement.innerHTML = "<li>No menu available for today.</li>";
}

// Update the date and day in the header
function updateDateAndDay() {
    const days = [
        "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag",
    ];

    const today = new Date();
    const dayName = days[today.getDay()];
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const formattedDate = `${dayName} ${date}/${month}`;
    const dateHeader = document.getElementById("date-header");
    if (dateHeader) {
        dateHeader.textContent = formattedDate;
    }
}

updateDateAndDay();