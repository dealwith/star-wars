import {
	Switch,
	Route,
} from 'react-router-dom';

import { ROUTES } from 'constants/index';
import { SortProvider } from 'providers';

import { HomePage } from 'pages';
import { Container, Header, PeopleGalleryItemFullInfo } from 'components';

import styles from './app.module.css'

export const App = () => {
  return (
    <div className="App">
      <SortProvider>
        <Header />
        <main className={styles.main}>
          <Container>
            <Switch>
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route exact path={ROUTES.EXACT_PEOPLE} component={PeopleGalleryItemFullInfo} />
            </Switch>
          </Container>
        </main>
      </SortProvider>
    </div>
  )
};
