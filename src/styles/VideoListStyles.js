import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const ListTitle = styled.h2`
  color: var(--primary-text); /* Use a variável de texto primária */
  margin-bottom: 20px;
  font-size: 1.8em;
`;

export const EmptyListMessage = styled.p`
  color: var(--secondary-text); /* Use a variável de texto secundária */
  font-style: italic;
`;

export const VideoListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const VideoListItemLi = styled.li`
  background-color: var(
    --secondary-background
  ); /* Use a variável de fundo secundária */
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  color: var(
    --primary-text
  ); /* Garante que o texto dentro do item seja legível */
`;
