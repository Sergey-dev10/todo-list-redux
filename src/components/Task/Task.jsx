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
import {
  removeTask,
  completeTask,
  editTask,
} from "../../actions/todoActions.js";

export const Task = ({ id, title, completed, isEdit }) => {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(completed);
  const handleDeleteTask = () => {
    dispatch(removeTask(id));
  };
  const handleEditBtn = () => {
    dispatch(editTask(id, title, true));
  };

  const handleTaskCompletionToggle = (e) => {
    setIsCompleted(e.target.checked);
    dispatch(completeTask(id));
  };

  return (
    <TaskWrapper>
      {isEdit ? (
        <TaskEditor id={id} title={title} />
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
