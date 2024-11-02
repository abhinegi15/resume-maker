import React from 'react';
import { Routes, Route } from "react-router-dom";
import { routes } from './routes/Routes';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        {routes.map(({ path, component: Component, }, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={<Component />}
            />
          );
        })}
      </Routes>
      <Footer />
    </React.Fragment>

  )
}

export default App