import { HeaderContainer, HeaderImage } from "./styled";
import image from "../../logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage src={image} alt="logo" />
      <a href="#">Web-app</a>
    </HeaderContainer>
  )
};

export default Header;
