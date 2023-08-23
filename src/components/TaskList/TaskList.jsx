import { Task } from "../Task";
import { NoTasksMessage } from "../NoTasksMessage";

export const TaskList = ({
  tasks,
  onDeleteTask,
  onEditTask,
  onTaskCompletionToggle,
}) => {
  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => {
          const { id, title, completed } = task;
          return (
            <Task
              key={id}
              id={id}
              title={title}
              completed={completed}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
              onTaskCompletionToggle={onTaskCompletionToggle}
            />
          );
        })
      ) : (
        <NoTasksMessage />
      )}
    </div>
  );
};