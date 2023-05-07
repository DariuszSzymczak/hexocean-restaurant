import React from "react";
import "./App.css";
import DishForm from "./components/DishForm";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="header">HexOcean Restaurant</h1>
      <DishForm />
    </div>
  );
}

export default App;