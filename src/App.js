import React from 'react';
import Header from './components/Header';
import Main from './pages/main';
import api from './services/api';
import Routes from './routes';

import './style.css';

//stateless component
//colocamos o componente Header
const App = () => (
  <div className="App">
    <Header />
    <Routes/>
</div>
);



export default App;
