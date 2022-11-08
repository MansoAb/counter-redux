import { useSelector } from "react-redux";

const Number = () => {
  const number = useSelector((state) => state.count);

  return <div>{number}</div>;
};

export default Number;
