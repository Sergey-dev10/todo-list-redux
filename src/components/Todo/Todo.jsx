import { useEffect, useState } from "react";
import { Title } from "../Title";
import { TaskAdder } from "../TaskAdder";
import { TaskList } from "../TaskList";
import { ActionPanel } from "../ActionPanel";
import { Search } from "../Search";
import { nanoid } from "nanoid";
import { TodoWrapper } from "./Todo.styles.js";

export const Todo = () => {
  const [tasks, setTasks] = useState([
    // {id: 1, title: "1 task", completed: false},
    // {id: 2, title: "2 task", completed: false},
    // {id: 3, title: "3 task", completed: false},
  ]);
  const [filter, setFilter] = useState("All");
  const [action, setAction] = useState("add");
  const [searchText, setSearchText] = useState("");

  const handleAddTask = (title) => {
    const id = nanoid();
    setTasks((prevState) => [...prevState, { id, title, completed: false }]);
  };
  const handleDeleteTask = (id) => {
    setTasks((prevState) => [
      ...prevState.filter((task) => {
        return task.id !== id;
      }),
    ]);
  };
  const handleEditTask = (id, title) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, title } : task;
      }),
    );
  };

  const handleTaskCompletionToggle = (id, completed) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, completed } : task;
      }),
    );
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handleToggleAction = (action) => {
    if (action === "add") {
      setSearchText("");
    }
    setAction(action);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  let handledTasks = [];
  if (filter === "All") {
    handledTasks = tasks;
  } else if (filter === "Active") {
    handledTasks = tasks.filter((task) => task.completed === false);
  } else if (filter === "Completed") {
    handledTasks = tasks.filter((task) => task.completed === true);
  }

  if (searchText) {
    handledTasks = handledTasks.filter(
      (task) => task.title.indexOf(searchText) !== -1,
    );
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
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
      {action === "add" ? (
        <TaskAdder onAddTask={handleAddTask} />
      ) : (
        <Search onHandleSearch={handleSearch} />
      )}

      <TaskList
        tasks={handledTasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        onTaskCompletionToggle={handleTaskCompletionToggle}
      />
      <ActionPanel
        tasks={tasks}
        onHandleFilter={handleFilter}
        onHandleToggleAction={handleToggleAction}
      />
    </TodoWrapper>
  );
};
