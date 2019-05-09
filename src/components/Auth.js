import React, { useContext } from 'react';
import AuthContext from '../auth-context';

export default props => {
  const auth = useContext(AuthContext);
  return (
    <React.Fragment>
      <h1>Auth</h1>
      <button onClick={auth.login}>Login</button>
    </React.Fragment>
  );
};
