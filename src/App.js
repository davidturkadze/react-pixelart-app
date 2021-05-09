import Editor from './components/Editor/Editor';
import GlobalStyle, { Container } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Editor />
      </Container>
    </>
  );
}

export default App;
