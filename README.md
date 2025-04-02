# Prateleira de Vídeos

Uma aplicação web interativa construída com React e Vite para gerenciar sua coleção pessoal de vídeos. Permite adicionar, editar, remover e buscar vídeos de diversas plataformas (YouTube, Vimeo, etc.). Possui também um sistema de temas claro e escuro para uma experiência de visualização personalizada.

## 🚀 Funcionalidades Principais

- **Adicionar Vídeos:** Facilidade para adicionar novos vídeos à sua prateleira através da inserção de links.
- **Exibir Lista de Vídeos:** Visualize todos os seus vídeos adicionados em uma lista organizada.
- **Reprodução de Vídeos:** Integração com `react-player` para reproduzir vídeos diretamente na aplicação.
- **Editar Vídeos:** Modifique o título e a descrição dos seus vídeos.
- **Remover Vídeos:** Exclua vídeos da sua coleção quando não forem mais necessários.
- **Buscar Vídeos:** Encontre rapidamente vídeos na sua prateleira através de busca por título, descrição e link.
- **Animações:** Transições suaves na lista de vídeos com `framer-motion`.
- **Temas Claro e Escuro:** Escolha entre um tema claro e um tema escuro para uma melhor experiência visual em diferentes ambientes.

## 🛠️ Tecnologias Utilizadas

- [Vite](https://vitejs.dev/): Ferramenta de build extremamente rápida para desenvolvimento front-end.
- [React](https://react.dev/): Biblioteca JavaScript para construir interfaces de usuário.
- [Styled Components](https://styled-components.com/): Biblioteca para estilização de componentes React com CSS-in-JS.
- [React Player](https://cookpete.com/react-player/): Componente React para reproduzir uma variedade de vídeos e áudios.
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage): API para persistência de dados no navegador.
- [framer-motion](https://www.framer.com/motion/): Biblioteca para criar animações e gestos fluidos em React.

## ⚙️ Como Executar o Projeto Localmente

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

    (Substitua `<URL_DO_SEU_REPOSITORIO>` pela URL do seu repositório no GitHub)

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd prateleira-de-videos-react
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    O projeto estará rodando em `http://localhost:5173` (ou outra porta especificada no seu terminal).

## 🔭 Próximos Passos e Melhorias Futuras

- Implementar testes unitários e de integração.
- Melhorar a responsividade para diferentes tamanhos de tela.
- Adicionar categorias para organizar os vídeos.
- Implementar funcionalidade de arrastar e soltar para reordenar a lista.
- Explorar a possibilidade de adicionar sugestões de busca (autocompletar).
- Considerar a implementação de autenticação de usuários para coleções privadas.
