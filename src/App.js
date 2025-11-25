import React, { useState, useMemo } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import UserList from './components/users/UserList';
import AddUserForm from './components/users/AddUserForm';
import Button from './components/common/Button';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.3s ease, color 0.3s ease;
  }
`;

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [showModal, setShowModal] = useState(false);
  const theme = useMemo(() => (themeMode === 'light' ? lightTheme : darkTheme), [themeMode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          background: theme.colors.card,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <h1 style={{ margin: 0 }}>User Management Dashboard</h1>
          <div>
            <Button onClick={() => setThemeMode(m => m === 'light' ? 'dark' : 'light')}>
              Toggle Theme
            </Button>
            <Button style={{ marginLeft: '12px' }} onClick={() => setShowModal(true)}>
              + Add User
            </Button>
          </div>
        </header>

        <main style={{ padding: '24px' }}>
          <UserList />
        </main>

        {showModal && <AddUserForm onClose={() => setShowModal(false)} />}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
