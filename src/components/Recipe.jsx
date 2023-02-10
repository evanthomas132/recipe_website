import React from "react";
import style from "../recipe.module.css";

const Recipe = ({ title, image, calories, ingredients, key_id}) => {
  return (
    <div className={style.recipe} key={key_id}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        {Math.round(calories)}
        <span className={style.Kcal}>kcal</span>
      </p>
      <img className={style.image} src={image} alt={title} />
    </div>
  );
};

export default Recipe;
