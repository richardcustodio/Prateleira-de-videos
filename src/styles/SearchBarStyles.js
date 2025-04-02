import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 12px 20px;
  margin-bottom: 20px;
  border: 1px solid var(--border-color); /* Use a variável de cor da borda */
  border-radius: 8px;
  font-size: 1em;
  box-sizing: border-box;
  outline: none; /* Remove a borda de foco padrão */
  color: var(--primary-text); /* Garante que o texto digitado seja legível */
  background-color: var(
    --secondary-background
  ); /* Garante que o fundo do input acompanhe o tema */

  &:focus {
    border-color: var(--accent-color); /* Use a variável de cor de destaque */
    box-shadow: 0 0 5px rgba(var(--accent-color-rgb), 0.5); /* Ajuste para usar a variável */
  }
`;
