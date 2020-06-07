import styled from 'styled-components';

const BtnStyled = styled.button`
  font-family: 'Roboto', sans-serif;
  padding: 15px 25px;
  font-size: 16px;
  background: #fff;
  border: 1px solid #EDCDD3;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  display: block;
  margin: 9px 0;
  text-align: left;

  &:active {
    background: #eee;
  }
`;

export default BtnStyled;