import { useState } from "react";
import { FormWrapper, InputWrapper } from "./TaskAdder.styles.js";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/todoActions.js";
import { nanoid } from "nanoid";

export const TaskAdder = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const handledTitle = title.trim();
    if (handledTitle) {
      dispatch(
        addTask({
          id: nanoid(),
          title: handledTitle,
          completed: false,
          isEdit: false,
        }),
      );
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
