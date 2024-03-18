import { useState } from "react";
import { StyledDiv, StyledUl, StyledInput } from "./Styles";

const MyComponent = () => {
  const [foods, setFoods] = useState([
    "Strawberries",
    "Pineapple",
    "Pomegranate",
  ]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((prevFoods) => [...prevFoods, newFood]);
  }

  function handleRemoveFood(index: number) {
    //element is the current element being processed in the array, i is the index of that element
    setFoods(foods.filter((element, i) => i !== index));
    //it’s creating a new array with all the elements except the one at the provided index
  }

  return (
    <StyledDiv>
      <h1>List Of Food</h1>
      <StyledUl>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {" "}
            {food}{" "}
          </li>
        ))}
      </StyledUl>
      <StyledInput type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </StyledDiv>
  );
};

export default MyComponent;
