import styled from "styled-components";

const StyledButton = styled.button`
  color: #222;
  background-color: ${({ $variant }) =>
    $variant === "primary"
      ? "#b4ec1a"
      : $variant === "secondary"
      ? "#f90d77ff"
      : "#91c291ff"};
  padding: 8px 12px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: block;
  border: none;
  &:hover {
    color: ${({ $variant }) =>
      $variant === "primary"
        ? "#b4ec1a"
        : $variant === "secondary"
        ? "#f90d77ff"
        : "#91c291ff"};
    background-color: #222;
  }
`;

export default StyledButton;
