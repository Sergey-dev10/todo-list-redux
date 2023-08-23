import { useState } from "react";
import { TaskEditor } from "../TaskEditor";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  TaskWrapper,
  TaskItem,
  Button,
  ButtonsWrapper,
  Title,
} from "./Task.styles.js";
import { useDispatch } from "react-redux";
import { removeTask } from "../../actions";
export const Task = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);
  const handleDeleteTask = () => {
    dispatch(removeTask(id));
  };
  const handleEditTask = () => {
    setIsEdit(false);
  };

  const handleReturnBack = () => {
    setIsEdit(false);
  };
  const handleEditBtn = () => {
    setIsEdit(true);
  };

  const handleTaskCompletionToggle = (e) => {
    setIsCompleted(e.target.checked);
    onTaskCompletionToggle(id, e.target.checked);
  };

  return (
    <TaskWrapper>
      {isEdit ? (
        <TaskEditor
          id={id}
          title={title}
          onHandleEditTask={handleEditTask}
          onReturnBack={handleReturnBack}
        />
      ) : (
        <TaskItem>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleTaskCompletionToggle}
          />
          <Title $isCompleted={isCompleted}>{title}</Title>
          <ButtonsWrapper>
            <Button onClick={handleEditBtn}>
              <FaEdit />
            </Button>
            <Button onClick={handleDeleteTask}>
              <AiFillDelete />
            </Button>
          </ButtonsWrapper>
        </TaskItem>
      )}
    </TaskWrapper>
  );
};
