import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 20px; /* Reduzi o padding geral */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-background);
  color: var(--primary-text);
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
  max-width: 1200px; /* Adicionei uma largura máxima para centralizar o conteúdo */
  margin: 0 auto; /* Centraliza o container na tela */
`;

export const AppTitle = styled.h1`
  color: var(--primary-text);
  margin-bottom: 40px; /* Aumentei a margem inferior */
  font-size: 2.8em; /* Aumentei o tamanho da fonte */
  text-align: center;
  font-weight: 700;
`;
