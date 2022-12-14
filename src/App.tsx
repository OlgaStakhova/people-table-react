import { Navigate, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { PeoplePage } from './components/PeoplePage';
import { Navbar } from './components/Navbar';

export const App: FC = () => {
  return (
    <div data-cy="app">
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<h1 className="title">Home Page</h1>}
            />

            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="people">
              <Route
                index
                element={<PeoplePage />}
              />

              <Route
                path=":slug"
                element={<PeoplePage />}
              />
            </Route>

            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
