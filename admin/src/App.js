import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/postlist';
import PostCreate from './components/postCreate';
import PostEdit from './components/postEdit';

import UserList from './components/userlist';
import UserCreate from './components/userCreate';
import UserEdit from './components/userEdit';
import './App.css';

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource
      name='Candidates'
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
    />
    <Resource
      name='Admin'
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
  </Admin>
}

export default App;
