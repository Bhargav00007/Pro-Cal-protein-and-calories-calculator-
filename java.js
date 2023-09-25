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
    yogurt: ["Calories: Approximately 61-69 calories, Protein: Approximately 3.5-4.5 grams of protein"],
    biryani: ["Protein: 5-10g, Calories:150-200"],
    puri: ["Protein: 6gm, Calories: 300-500"],
    munchurian: ["Protein: 3-4g, Calories: 100-150"],
    idli: ["Protein: 7-9g, Calories: 30-40"],
    dosa: ["Protein: 5-6g,Calories: 100-150" ],
    banana: ["Protein = 1.0g, Calories = 96"],
    apple: ["Protein = 0.3g, Calories = 52"],
    orange: ["Protein = 1.0g, Calories = 43"],
    mango: ["Protein = 0.5g, Calories = 60"],
    watermelon: ["Protein = 0.6g, Calories = 30"],
    grapes: ["Protein = 0.6g, Calories = 69"],
    pineapple: ["Protein = 0.5g, Calories = 50"],
    strawberry: ["Protein = 0.7g, Calories = 32"],
    papaya: ["Protein = 0.5g, Calories = 43"],
    soybean: ["Protein: 9g, Calories: 173"],
    egg: ["Protein: 13g, Calories: 143"],
    pomegranate: ["Protein = 1.7g, Calories = 83"],
    potato: ["protein = 4.3g, calories = 161"],
    omelette: ["protein = 14g, calories = 154"]
    






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
