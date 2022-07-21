import './App.css';
import Blogs from './components/Blogs';
import New_Blog from './components/New_Blog'

function App() {
  return (
    
     <div className="App">
      <h1><b>My Blog website</b></h1>
      <br></br>
      <h4>Add New Blog!</h4>
      <New_Blog />
      <Blogs />
      </div>
     
  );
}

export default App;
