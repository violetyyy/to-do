const Button = (props) => {
  return (
    <button
      className={` rounded-md bg-[#3c82f6] ${
        props.isSmall ? "h-[32px] py-1 px-3 text-xs" : "h-[40px] py-2 px-4"
      } ${
        props.isGray ? "bg-[#3c82f6] text-white" : "bg-[#f3f4f6] text-[#363636]"
      }`}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
