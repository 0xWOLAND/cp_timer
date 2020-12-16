import logo from './logo.svg';
import './App.css';
import MainView from './components/main_view.js'
import Result from "./components/result"
function App() {
  return (
    <div className="App">
      <div id="background">
        <Result />
        <MainView />
      </div>
    </div>
  );
}

export default App;
