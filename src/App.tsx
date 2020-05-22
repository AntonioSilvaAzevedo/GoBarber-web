import React from 'react';

import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SingUp />
    <GlobalStyle />
  </>
);

export default App;