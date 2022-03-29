
import { queryAllByAltText } from '@testing-library/react';
import { useState } from 'react';
import './App.css';
import Table from './Table';
import {User} from "./User";



function App() {
 const [query, setQuery]= useState(" ");

 const keys = ["first_name", "last_name", "email"]

 const search = (data) => {
    return data.filter((item)=> keys.some((key)=> item[key].toLowerCase().includes(query))
    );

 }
 

  return (
    <>
    <div className="App">
      <input text="text" placeholder='Search' className='search' onChange={(e) => setQuery(e.target.value)}></input>
      {/* <ul className='list'>
        {User.filter((user)=>user.first_name.toLocaleLowerCase().includes(query)) .map((user) =>(
          <li key={user.id} className='listItem'>{user.first_name}</li>
        ))}
        
        </ul> */}
        <Table data={search(User)}/>
        
    </div>
    <table />
    </>
  );
}

export default App;
