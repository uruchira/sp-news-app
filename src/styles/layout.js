import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const HeaderWrapper = styled.section`
  background-color: #09357b;
  height: 126px;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  height: 126px;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
`;

export const LogoLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 126px;
  justify-content: center;
  position: relative;
  width: 133px;
`;

export const LogoOne = styled.img`
  position: absolute;
  right: 53px;
  top: 35px;
`;

export const LogoTwo = styled.img`
  position: absolute;
  bottom: 41px;
`;

export const FooterWrapper = styled.section`
  background-color: #09357b;
  height: 176px;
  width: 100%;
`;

export const MainWrapper = styled.section`
  background-color: #fff;
  min-height: 80vh;
  padding-top: 1rem;
  width: 100%;
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export const SubHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
