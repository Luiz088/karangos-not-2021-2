import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './ui/AppHeader'
import { createTheme, ThemeProvider } from '@mui/material';
import { yellow, pink } from '@mui/material/colors';
import Box from '@mui/material/Box';

import ClientesList from './routed/ClientesList'
import ClientesForm from './routed/ClientesForm'
import AppFooter from './ui/AppFooter';

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: yellow[500]
    },
    secondary: {
      main: pink[500]
    }
  }
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
      <Box sx={{ height: '100vh', backgroundColor: customTheme.palette.background.default, color: customTheme.palette.text.primary }}>
          <AppHeader bgcolor={customTheme.palette.primary.main} />
          <Switch>
            <Box component="main" sx={{ margin: '20px 20px 60px 20px'}}>
              <Route path="/clientes" exact>
                <ClientesList />
              </Route>

              <Route path="/clientes/new" exact>
                <ClientesForm />
              </Route>
            </Box>
          </Switch>
          <AppFooter />
        </ Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
