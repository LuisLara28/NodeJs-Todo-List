import { useState } from "react";

// Components
import Button from "../UI/button/button.component";

import classes from "./form.styles.module.css";

const Form = ({ onAddTodo }) => {
  // State
  const [todo, setTodo] = useState("");
  const [showError, setShowError] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Show error if input is empty
    if (!todo) {
      setShowError(true);
      return;
    }

    // TODO: Send data to API

    // Send data to App.js
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      content: todo,
      userId: 1,
    };

    onAddTodo(newTodo);
    setTodo("");
  };

  const onChangeHandler = (event) => {
    const newValue = event.target.value;

    if (newValue.length > 0) setShowError(false);
    else setShowError(true);

    setTodo(newValue);
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Button type="submit" label={"⬇"} />
      <div className={classes.form__container}>
        <input
          className={`${classes.form__input} ${showError ? classes.error : ""}`}
          placeholder="Create a new todo"
          type="text"
          value={todo}
          onChange={onChangeHandler}
          name="todo"
          id="todo"
        />
      </div>
    </form>
  );
};

export default Form;
