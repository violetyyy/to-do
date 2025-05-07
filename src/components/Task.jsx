const Task = (props) => {
  const isDone = props.status === "active" ? false : true;

  return (
    <div
      key={props.id}
      className="w-full rounded-md bg-[#f3f4f6] p-4 flex justify-between items-center text-sm"
    >
      <div className="flex gap-[10px] items-center text-sm">
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={isDone}
          onChange={() => {
            props.toggleStatus(props.id);
          }}
        />
        <p>{props.text}</p>
      </div>
      <button
        onClick={() => {
          props.deleteTask(props.id);
        }}
        className="w-[67px] h-[30px] text-[#ef4444] bg-[#FEF2F2]"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
