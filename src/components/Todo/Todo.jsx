import { useEffect, useState } from "react";
import { Title } from "../Title";
import { TaskAdder } from "../TaskAdder";
import { TaskList } from "../TaskList";
import { ActionPanel } from "../ActionPanel";
import { Search } from "../Search";
import { TodoWrapper } from "./Todo.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { updateTasks } from "../../actions/todoActions.js";

export const Todo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const filter = useSelector((state) => state.filter.filterType);
  const searchedText = useSelector((state) => state.search.text);
  const [action, setAction] = useState("add");

  let handledTasks = [];
  if (filter === "All") {
    handledTasks = tasks;
  } else if (filter === "Active") {
    handledTasks = tasks.filter((task) => task.completed === false);
  } else if (filter === "Completed") {
    handledTasks = tasks.filter((task) => task.completed === true);
  }

  if (searchedText) {
    handledTasks = handledTasks.filter(
      (task) => task.title.indexOf(searchedText) !== -1,
    );
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      dispatch(updateTasks(JSON.parse(storedTasks)));
    }
  }, []);

  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <TodoWrapper>
      <Title />
      {action === "add" ? <TaskAdder /> : <Search />}

      <TaskList tasks={handledTasks} />
      <ActionPanel />
    </TodoWrapper>
  );
};
