
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <NavBar title='TextUtils'/>
    <div className="container my-5">

    <TextForm heading='Enter the text to analysize below' />
    </div>
    </>
  );
}

export default App;
