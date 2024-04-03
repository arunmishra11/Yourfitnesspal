const settings = {
    async: true,
    crossDomain: true,
    url: 'https://keto-diet.p.rapidapi.com/?difficulty=Medium',
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cbc417435cmsh0f16e76ec775c8ep102541jsn519ae0862a59',
      'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
    }
  };
  
  $.ajax(settings)
    .done(function (response) {
      console.log(response); // Inspect the response structure
  
      // Get the "api-data" element
      const apiDataDiv = document.getElementById("api-data");
  
      // Clear any existing content
      apiDataDiv.innerHTML = "";
  
      // Loop through the API response (assuming it's an array of meals)
      response.forEach(meal => {
        // Create a new element (e.g., paragraph) for each meal
        const mealParagraph = document.createElement("p");
  
        // Extract relevant data from the meal object (check console.log for properties)
        const mealName = meal.recipe; // Assuming "recipe" holds the meal name
        const mealInstructions = meal.directions_step_1; // Assuming "directions_step_1" is the first instruction
  
        // Craft the content for the paragraph (modify for additional instructions)
        mealParagraph.textContent = `Meal Name: ${mealName} \n First Instruction: ${mealInstructions}`;
  
        // Append the paragraph to the "api-data" element
        apiDataDiv.appendChild(mealParagraph);
      });
    })
    .fail(function (error) {
      console.error("API request failed:", error);
    });
  