import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ButtonComponent from './components/ButtonComponent';
import ImageClassComponent from './components/imageClassComponent';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Header/>
      <ButtonComponent
      text="Clicca il Bottone!!"
      class="btn btn-success"
      type="button"
      />
      <ImageClassComponent 
      src="./assets/img/photo-Galaxy.avif"
      alt="Galaxy"
      width="100%"
      />
      <ImageClassComponent
      src="./assets/img/Galaxy2.avif"
      alt="altra Galassia"
      width="100%"/>


    </div>
  );
}

export default App;
