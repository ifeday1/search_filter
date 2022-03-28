
import './App.css';
import {User} from "./User";

function App() {
  return (
    <div className="App">
      <input text="text" placeholder='Search' className='search'></input>
      <ul className='list'>
        {User.map((User) =>(
          <li className='listItem'>{User.first_name}</li>
        ))};
        
        

      </ul>
    </div>
  );
}

export default App;
