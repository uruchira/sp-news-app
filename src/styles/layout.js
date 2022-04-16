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
  & a {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 133px;
  }
`;
