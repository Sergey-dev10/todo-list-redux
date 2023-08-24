import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { PiKeyReturnFill } from "react-icons/pi";
import {
  TaskEditorWrapper,
  Button,
  Input,
  ButtonsWrapper,
} from "./TaskEditor.styles.js";
import { useDispatch } from "react-redux";
import { editTask } from "../../actions/todoActions.js";
export const TaskEditor = ({ id, title, onHandleEditTask, onReturnBack }) => {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleSaveNewTitle = () => {
    let title = newTitle.trim();
    if (title) {
      dispatch(editTask(id, title));
      onHandleEditTask();
    }
  };

  const handleReturnBack = () => {
    onReturnBack();
  };
  return (
    <TaskEditorWrapper>
      <Input type="text" value={newTitle} onChange={handleTitleChange} />
      <ButtonsWrapper>
        <Button onClick={handleSaveNewTitle}>
          <FaSave />
        </Button>
        <Button onClick={handleReturnBack}>
          <PiKeyReturnFill />
        </Button>
      </ButtonsWrapper>
    </TaskEditorWrapper>
  );
};
