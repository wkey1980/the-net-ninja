import './App.css';
import Navbar from './Navbar';

function App() {
  const title = 'Hello, Welcome to React'
  const likes = 50
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>Liked {likes} times</p>
      <Navbar />
    </div>
  );
}

export default App;
