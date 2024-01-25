import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: coral;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: yellow;
  text-align: center;
  font-size: 50px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: #fff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #eee;
  }
`;

export const Wrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;