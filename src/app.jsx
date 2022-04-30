import './global.css';
import Button from './button.tsx';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <Button accentColour={theme.primary}>
        Click me!
      </Button>
    </div>
  );
}

export default App;
