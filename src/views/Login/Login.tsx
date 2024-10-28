import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let password = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const login = () => {
      if (password.current?.value === 'lafleurqwerty') {
        sessionStorage.setItem('authenticated', 'true');
        navigate('/');
      }
  }

    return (
      <div className="login">
        <div className=""><span>[Nombre de Pareja]</span></div>
        <br />

        <div className="">
          <label id="password" htmlFor="password">
            Contraseña:
            <input
              ref={password}
              type="text"
              name="password"
            />
          </label>
          <br />

          <button type="button" className="" onClick={login}> Entrar </button>
          <br />
        </div>

      </div>
    );
}

export default Login;