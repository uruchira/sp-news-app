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
  flex-direction: row;
  height: 126px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  @media screen and (max-width: 1260px) {
    max-width: 1200px;
    padding: 0 1rem;
  }

  @media screen and (max-width: 720px) {
    max-width: 720px;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 0 1rem;
  }
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
  @media screen and (max-width: 576px) {
    top: 12px;
  }
`;

export const LogoTwo = styled.img`
  position: absolute;
  bottom: 41px;
  @media screen and (max-width: 576px) {
    bottom: 0;
  }
`;

export const FooterWrapper = styled.section`
  background-color: #09357b;
  height: 176px;
  width: 100%;
`;

export const MainWrapper = styled.section`
  background-color: #fff;
  min-height: 80vh;
  padding-top: 2.5rem;
  width: 100%;
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const SubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.8rem;
  @media screen and (max-width: 1260px) {
    max-width: 1200px;
    padding: 0 1rem;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SortingSection = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  width: 385px;
  & a {
    margin-right: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 315px;
    & a {
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const NewsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  & a {
    margin: 0 75px 35px 0;
  }
  & a:nth-of-type(3n) {
    margin-right: 0;
  }
`;

export const SportNewsWrapper = styled.div`
  padding: 1rem 0 3rem;
`;

export const LoadingWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 500px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  min-height: 100vh;
  padding-bottom: 3rem;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  width: 65%;
  & button,
  & h1,
  & h2,
  & p {
    margin-bottom: 1rem;
  }

  & h1 {
    font-size: 2rem;
  }

  & i {
    border-bottom: 1px solid #e9e9e9;
    display: block;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const BannerWrapper = styled.div`
  padding-top: 210px;
  width: 35%;
  text-align: center;
  & img {
    width: 72%;
    object-fit: cover;
  }
`;
