import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { PiKeyReturnFill } from "react-icons/pi";
import {
  TaskEditorWrapper,
  Button,
  Input,
  ButtonsWrapper,
} from "./TaskEditor.styles.js";

export const TaskEditor = ({ title, onEditTask, onReturnBack }) => {
  const [newTitle, steNewTitle] = useState(title);

  const handleTitleChange = (e) => {
    steNewTitle(e.target.value);
  };
  const handleSaveNewTitle = () => {
    let title = newTitle.trim();
    if (title) {
      steNewTitle(title);
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