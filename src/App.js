import React, { useState } from 'react';
import Sidebar from './components/sidebar/sidebar'
import Item from './components/item/item'
import Main from './components/Main/Main'
import GetUsers from './components/getUsers/GetUsers'
import './App.css';

export const Context = React.createContext({})

function App() {
  const [users, setUsers] = useState([]);
  const [reloadUsers, setReloadUsers] = useState(false)

  const store = {
    users: { get: users, set: setUsers },
    reloadUsers: { get: reloadUsers, set: setReloadUsers }
  }

  return (
    <div className="App">
      <Context.Provider value={store}>
        <Sidebar />
        <GetUsers />
        <Main>
          {store.users.get.map((user, index) =>
            <Item key={index} user={user}>
              {user}
            </Item>
          )}
        </Main>
      </Context.Provider>
    </div>
  );
}

export default App;
