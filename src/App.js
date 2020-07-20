import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Layout from './components/Layout/Layout';
import Weather from './pages/Weather/Weather';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path={['/', '/weather']}>
            <Weather />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
