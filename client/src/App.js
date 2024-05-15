import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { Meal } from "./components/Meal";
import { Recipe } from "./components/Recipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/:recipeId" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
