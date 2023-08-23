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
import { editTask } from "../../actions/index.js";
export const TaskEditor = ({ title, onEditTask, onReturnBack }) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleSaveNewTitle = () => {
    let title = newTitle.trim();
    if (title) {
      setNewTitle(title);
      onEditTask(title);
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
