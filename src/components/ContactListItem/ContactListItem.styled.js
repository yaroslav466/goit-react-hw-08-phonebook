import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  background-color: coral;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  

  
  span {
    width: 150px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;  
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
  }
`;

export const ButtonDelete = styled.button`
  background-color: violet;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: crimson;
  }
`;