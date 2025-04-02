import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: var(
    --secondary-background
  ); /* Use a variável de fundo secundária */
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  color: var(--primary-text); /* Use a variável de texto primária */
  margin-bottom: 20px;
  font-size: 1.8em;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: var(--secondary-text); /* Use a variável de texto secundária */
  font-weight: bold;
  font-size: 1em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color); /* Use a variável de cor da borda */
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
  color: var(--primary-text); /* Garante que o texto digitado seja legível */
  background-color: var(
    --secondary-background
  ); /* Garante que o fundo do input acompanhe o tema */

  &:focus {
    border-color: var(--accent-color); /* Use a variável de cor de destaque */
    box-shadow: 0 0 5px rgba(var(--accent-color-rgb), 0.5); /* Ajuste para usar a variável */
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color); /* Use a variável de cor da borda */
  border-radius: 4px;
  box-sizing: border-box;
  min-height: 100px;
  font-size: 1em;
  color: var(--primary-text); /* Garante que o texto digitado seja legível */
  background-color: var(
    --secondary-background
  ); /* Garante que o fundo do textarea acompanhe o tema */

  &:focus {
    border-color: var(--accent-color); /* Use a variável de cor de destaque */
    box-shadow: 0 0 5px rgba(var(--accent-color-rgb), 0.5); /* Ajuste para usar a variável */
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--accent-color); /* Use a variável de cor de destaque */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(
      0.1,
      var(--accent-color)
    ); /* Escurece um pouco no hover */
  }
`;
