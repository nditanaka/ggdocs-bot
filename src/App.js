import img from './assets/curator-background.png'
import ChatBot from './components/ChatBot';

function App() {
  const container = {
    backgroundImage: `url(${img})`,
    height: '100%',
    width: '100%'
  };

  return (
    <div style={container}>
      <ChatBot/>
    </div>
  );
}

export default App;
