import { Item } from "./styled";
import {useState} from "react";

const FaqItem = ({ title, answer }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(prevState => !prevState)
  }

  return (
    <Item onClick={handleClick}>
      <h1>{title}</h1>
      {visible && <p>{answer}</p>}
    </Item>
  )
};

export default FaqItem;
