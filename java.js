const myDictionary = {
    rice: ["68 Calories, 1.42g Proteins"],
    chicken: ["Protein: 31g, Calories: 165"],
    eggs: ["Protein: 13g, Calories: 143"],
    soybeans: ["Protein: 9g, Calories: 173"],
    paneer: ["Protein: 18g, Calories: 265"],
    mutton: ["Protein: 20g, Calories: 294"],
    fish: ["Protein: 25g, Calories: 206"],
    icecream: ["3-4 grams of protein, 200 to 300 calories"],
    roti: ["Protein: 9g, Calories: 297"],
    daal: ["Protein: 7.3g, Calories: 105"],
    richprotein: ["ChickenBreast, Turkey, Salmon, Tuna, Eggs, Yogurt, Chees, Lentils, Chickpeas, BlackBeans, Quinoa, Tofu, Edamame, Almonds, Greek-style-Yogurt"],
    yogurt: [""]
};

function val()  {
    const inputElement = document.getElementById("food")
    const key = inputElement.value.toLowerCase();
    const outputElement = document.getElementById("output");

    if (key in myDictionary) {
        const value = myDictionary[key];
        outputElement.textContent = `${key}: ${value}`;
      } else {
        outputElement.textContent = `Food item "${key}" is not found in database.\n Feel free to add your food item in github.`;
        
      }
    }