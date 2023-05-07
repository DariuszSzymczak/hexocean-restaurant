import React, { useState, FormEvent } from "react";
import "./DishForm.css";
import axios from "axios";
import { DishFormType } from "../types/DishForm";
const DishForm: React.FC = () => {
  const [type, setType] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries()) as unknown as DishFormType;
    values.id = 1;

    try {
      const response = await axios.post("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/", values);
      console.log("response.data");
      console.log(response.data);
    } catch (error) {
      window.alert('Error during sending data')
      console.error('Error during sending data')
      console.error(error);
    }
  };

  const pizzaSubForm = (
    <>
      <label className="form-label" htmlFor="no-of-slices">
        Number of Slices
      </label>
      <input name="no_of_slices" id="no-of-slices" min="0" type="number" className="form-input" required />

      <label className="form-label" htmlFor="diameter">
        Diameter
      </label>
      <input name="diameter" id="diameter" type="number" step="0.01" className="form-input" required />
    </>
  );

  const soupSubForm = (
    <>
      <label className="form-label" htmlFor="spiciness-scale">
        Spiciness Scale (1-10)
      </label>
      <input name="spiciness_scale" id="spiciness-scale" type="number" min="1" max="10" className="form-input" required />
    </>
  );

  const sandwichSubForm = (
    <>
      <label className="form-label" htmlFor="slices-of-bread">
        Slices of Bread
      </label>
      <input name="slices_of_bread" min="0" id="slices-of-bread" type="number" className="form-input" required />
    </>
  );

  const handleTypeChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setType(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input id="name" type="text" name="name" className="form-input" required />

      <label className="form-label" htmlFor="preparation-time">
        Preparation Time
      </label>
      <input id="preparation-time" name="preparation_time" type="time" step="2"  className="form-input" required />

      <label className="form-label" htmlFor="type">
        Type
      </label>
      <select id="type" name="type" className="form-input" value={type} onChange={handleTypeChange} required>
        <option value="">Select a dish type</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>

      {type === "pizza" && pizzaSubForm}

      {type === "soup" && soupSubForm}

      {type === "sandwich" && sandwichSubForm}

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
};

export default DishForm;
