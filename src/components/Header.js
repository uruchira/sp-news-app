import { Link } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import { HOME_PATH } from "../constants";

import { HeaderWrapper, HeaderContainer } from "../styles/layout";
import logoOneIcon from "../assets/the.svg";
import logoTwoIcon from "../assets/peaks.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to={HOME_PATH}>
          <img src={logoOneIcon} alt="The" />
          <img src={logoTwoIcon} alt="Peaks" />
        </Link>
        <SearchBox />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
