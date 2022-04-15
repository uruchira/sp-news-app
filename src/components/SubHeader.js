import { useLocation } from "react-router-dom";

const SubHeader = () => {
  let location = useLocation();
  console.log(location.pathname);
  return <h1>This is SUB Header</h1>;
};

export default SubHeader;
