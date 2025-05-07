import { useState } from "react";
import Button from "./components/Button";
import Task from "./components/Task";
import tasks from "./mock/tasks";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(tasks);
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState("");
  const [taskStatus, setTaskStatus] = useState("all");

  const completedNumber = data.filter(
    (task) => task.status === "completed"
  ).length;

  const createTask = () => {
    if (inputValue === "") {
      return window.alert("Task oruulna uu");
    }

    const newTask = {
      id: Math.random(),
      text: inputValue,
      status: "active",
    };

    setData([...data, newTask]);
    setFilteredData([...data, newTask]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    const filteredData = data.filter((task) => task.id !== id);
    setData(filteredData);
    setFilteredData(filteredData);
  };

  const toggleStatus = (id) => {
    const changedData = data.map((task) => {
      if (task.id === id) {
        const isDone = task.status === "active" ? false : true;
        task.status = isDone ? "active" : "completed";
        return task;
      }
      return task;
    });
    setData(changedData);
    setFilteredData(filteredData);
  };

  const clearCompleted = () => {
    const filteredData = data.filter((task) => task.status === "all");
    setData(filteredData);
    setFilteredData(filteredData);
    setTaskStatus("all");
  };

  const filterCompleted = () => {
    const filteredData = data.filter((task) => task.status === "completed");
    setFilteredData(filteredData);
    setFilter("completed");
    setTaskStatus("completed");
  };

  const filterActive = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setFilteredData(filteredData);
    setFilter("active");
    setTaskStatus("active");
  };

  const clearFilter = () => {
    setFilteredData(data);
    setFilter("all");
    setTaskStatus("all");
  };

  return (
    <div className="flex h-screen justify-center bg-[#f3f4f6] pt-[60px]">
      <div className="w-[377px] size-fit bg-white shadow-md rounded-md py-[24px] px-[16px] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <h1 className="text-xl font-semibold ">To-Do List</h1>
          <div className="flex gap-[6px] w-full">
            <input
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
              value={inputValue}
              type="text"
              placeholder="Add a new task..."
              className="h-[40px] border w-full rounded-md px-2"
            />
            <Button text="Add" handleClick={createTask} isGray />
          </div>

          <div className="flex gap-[6px] mr-[150px]">
            <Button
              isGray={taskStatus === "all"}
              isSmall={true}
              text="All"
              handleClick={clearFilter}
              isActive={filter === "all"}
            />
            <Button
              isGray={filter === "active"}
              isSmall={true}
              text="Active"
              handleClick={filterActive}
              isActive={filter === "active"}
            />
            <Button
              isGray={taskStatus === "completed"}
              isSmall={true}
              text="Completed"
              handleClick={filterCompleted}
              isActive={filter === "completed"}
            />
          </div>

          {filteredData.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                status={task.status}
                deleteTask={deleteTask}
                toggleStatus={toggleStatus}
              />
            );
          })}

          {filteredData.length === 0 && (
            <p className="text-center text-[#6b7280] text-sm my-5">
              No tasks yet. Add one above!
            </p>
          )}

          <div className=" gap-1 pt-4 pb-1 border-t border-[#e4e4e7] flex justify-between text-sm">
            <p className="text-[#6b7280]">
              {completedNumber} of {data.length} tasks completed
            </p>
            <button onClick={clearCompleted} className="text-[#ef4444]">
              Clear completed
            </button>
          </div>
        </div>

        <p className="flex gap-1 mt-10">
          Powered by <a className="text-[#3B73ED]">Pinecone Academy</a>
        </p>
      </div>
    </div>
  );
}

export default App;
