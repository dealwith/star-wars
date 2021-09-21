import { useState } from 'react';
import {
	Switch,
	Route,
} from 'react-router-dom';

import { ROUTES } from 'constants/index';
import { SortProvider } from 'providers';

import {
  Container,
  Header,
  PeopleGallery,
  PeopleGalleryItemFullInfo
} from 'components';

import styles from './app.module.css'


export const initialPaginationState = {
  currentPage: 1,
  totalPages: 1,
};

export const App = () => {
  const [pagination, setPagination] = useState(initialPaginationState);

  return (
    <div className="App">
      <SortProvider>
        <Header />
        <main className={styles.main}>
          <Container>
            <Switch>
              <Route exact path={ROUTES.HOME}>
                <PeopleGallery
                  totalPages={pagination.totalPages}
                  currentPage={pagination.currentPage}
                  setPagination={setPagination}
                />
              </Route>
              <Route exact path={ROUTES.EXACT_PEOPLE} component={PeopleGalleryItemFullInfo} />
            </Switch>
          </Container>
        </main>
      </SortProvider>
    </div>
  )
};
