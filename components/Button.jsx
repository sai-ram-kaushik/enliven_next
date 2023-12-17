const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`p-2 bg-primary text-xl text-background border border-primary rounded-tl-xl rounded-br-xl hover:bg-background hover:text-primary w-[7rem] duration-200 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
