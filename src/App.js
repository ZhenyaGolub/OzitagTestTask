import { useState } from 'react';
import { Authorization } from './pages/Authorization';
import { User } from './pages/User';

import { AuthContext } from './context';

import { CSSTransition } from 'react-transition-group';

const App = () => {
  
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const authentication = ({data: {email, name}}, type, token) => {
    setUser({
      email,
      name,
      type,
      token
    });
    setIsAuth(true);
  }

  const logoutUser = () => {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={isAuth}>
      <CSSTransition in={isAuth} timeout={300} classNames="animation" unmountOnExit>
        <User user={user} logout={logoutUser}/>
      </CSSTransition>
      <CSSTransition in={!isAuth} timeout={300} classNames="animation" unmountOnExit>
        <Authorization showUser={authentication}/>
      </CSSTransition>
    </AuthContext.Provider>
  );
}

export default App;
