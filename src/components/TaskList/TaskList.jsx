import { Task } from "../Task";
import { NoTasksMessage } from "../NoTasksMessage";
import { useSelector } from "react-redux";

export const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })
      ) : (
        <NoTasksMessage />
      )}
    </div>
  );
};
