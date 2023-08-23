import { useState } from "react";
import { FormWrapper, InputWrapper } from "./TaskAdder.styles.js";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions";
import { nanoid } from "nanoid";

export const TaskAdder = ({ onAddTask }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addTask({ id: nanoid(), title: title, completed: false }));
    }
    setTitle("");
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper
        type="text"
        placeholder="Add new task"
        value={title}
        onChange={handleInputChange}
      />
    </FormWrapper>
  );
};
