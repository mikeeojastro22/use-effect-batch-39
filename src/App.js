import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  function fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    // We get the response from the API in JSON
    .then(response => response.json())
    // Setting user array
    .then(data => setUsers(data))
  }

  // upon loading a component/page, useEffect will kick in
  // useEffect(setup/function, dependency)
  useEffect(() => {
    if(users.length === 0){
      console.log("here");
      fetchUsers();
    }
  });

  return (
    <div className="App">
      {/* <button onClick={fetchUsers}>Click me!</button> */}
      {
        users.map(user => {
          const {id, name, email} = user;
          return (
            <div key={id}>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
