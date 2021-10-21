import img from './assets/curator-background.png'

function App() {
  const container = {
    backgroundImage: `url(${img})`,
    height: '100%',
    width: '100%'
  };

  return (
    <div style={container}></div>
  );
}

export default App;
