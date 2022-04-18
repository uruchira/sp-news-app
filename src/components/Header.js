import SearchBox from "../components/SearchBox";
import { HOME_PATH } from "../constants";

import {
  HeaderWrapper,
  HeaderContainer,
  LogoLink,
  LogoOne,
  LogoTwo,
} from "../styles/layout";
import logoOneIcon from "../assets/the.svg";
import logoTwoIcon from "../assets/peaks.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoLink to={HOME_PATH}>
          <LogoOne src={logoOneIcon} alt="The" />
          <LogoTwo src={logoTwoIcon} alt="Peaks" />
        </LogoLink>
        <SearchBox />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
