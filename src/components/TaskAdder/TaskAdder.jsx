import { useState } from "react";
import { FormWrapper, InputWrapper } from "./TaskAdder.styles.js";

export const TaskAdder = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      onAddTask(task);
    }
    setTask("");
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper
        type="text"
        placeholder="Add new task"
        value={task}
        onChange={handleInputChange}
      />
    </FormWrapper>
  );
};
