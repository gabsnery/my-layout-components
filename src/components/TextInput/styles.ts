import { styled } from "styled-components";
import TextInputProps from "./interface";

export const PrimaryInput = styled.input<TextInputProps>`
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 4px;
  font-size: 16px;
  color: #007bff;
  &:focus {
    outline: none;
    border-color: #0056b3;
  }
`;

export const SecondaryInput = styled.input<TextInputProps>`
  padding: 10px;
  border: 2px solid #6c757d;
  border-radius: 4px;
  font-size: 16px;
  color: #6c757d;
  &:focus {
    outline: none;
    border-color: #495057;
  }
`;