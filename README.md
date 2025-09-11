# Sistema de Monitoramento de Exercícios

Este é um aplicativo web simples para monitorar e gerenciar suas atividades físicas diárias. Com ele, você pode registrar exercícios como caminhadas e corridas, visualizar um resumo das suas atividades e acompanhar o progresso em relação às suas metas diárias, semanais e mensais.

O projeto foi construído com **React** e **Styled-Components** para uma interface de usuário moderna e responsiva. Os dados são armazenados localmente no navegador, utilizando o **LocalStorage** para persistência, garantindo que suas informações não sejam perdidas ao recarregar a página.

## Funcionalidades

- **Registro de Exercícios**: Adicione novos exercícios com detalhes de tipo (caminhada/corrida), distância e duração.
- **Resumo de Atividades**: Visualize um painel com a distância total diária, semanal e mensal percorrida.
- **Círculo de Metas**: Um círculo de progresso visual que mostra a sua evolução em direção a uma meta diária de distância.
- **Gerenciamento de Registros**:
  - **Concluir**: Marque exercícios como concluídos para que sejam incluídos nos seus totais de progresso.
  - **Editar**: Modifique os detalhes de um exercício já registrado.
  - **Progresso**: Atualize a distância e a duração de um exercício que ainda está em andamento.
  - **Deletar**: Remova um exercício da sua lista.
- **Persistência de Dados**: Seus dados são salvos no navegador, permitindo que você continue de onde parou.
- **UI Moderna**: Uma interface de usuário limpa e escura, com animações sutis em azul neon para uma experiência agradável.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Styled-Components**: Ferramenta para estilização de componentes com CSS-in-JS.
- **Vite**: Ferramenta de build de frontend moderna e rápida.

## Como Executar o Projeto

Para colocar o projeto para rodar na sua máquina, siga os passos abaixo:

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passos
1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd parceiro-de-programacao-fitness
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O aplicativo estará disponível em `http://localhost:5173` (ou em outra porta, caso a 5173 já esteja em uso).

## Estrutura do Projeto

A estrutura de pastas do projeto é organizada para facilitar a navegação e a manutenção:

```
src/
├── components/
│   ├── Dashboard.jsx
│   ├── ExerciseForm.jsx
│   ├── GoalCircle.jsx
│   ├── ProgressModal.jsx
│   ├── StatCard.jsx
├── App.jsx
├── index.css
└── main.jsx
```

- `src/components/`: Contém todos os componentes reutilizáveis da aplicação.
- `App.jsx`: Componente principal que gerencia o estado global e a lógica da aplicação.
- `main.jsx`: Ponto de entrada do aplicativo.

---
Se tiver alguma dúvida, sinta-se à vontade para perguntar!