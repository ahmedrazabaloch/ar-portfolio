const CustomButton = ({ value, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {value}
    </button>
  );
};
export default CustomButton;
