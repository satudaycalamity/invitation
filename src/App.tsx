import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Header from './components/Header';

import {
  Main,
  Login
} from './views';

function App() {
  const authenticated: boolean = Boolean(sessionStorage.getItem('authenticated'));

  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            {
              authenticated &&
              <Route path='/main' element={<Main />} />
            }
            <Route path='/login' element={<Login />}/>
            <Route path='/*' element={<Navigate to={authenticated ? '/main' : '/login'} replace={true} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
