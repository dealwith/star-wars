import {
	Switch,
	Route,
} from 'react-router-dom';

import { ROUTES } from 'constants/index';

import { HomePage } from 'pages';
import { Container, Header, Logo } from 'components';

export const App = () => (
  <div className="App">
    <Header>
      <Container>
        <Logo />
      </Container>
    </Header>
    <main>
      <Container>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
        </Switch>
      </Container>
    </main>
  </div>
);
