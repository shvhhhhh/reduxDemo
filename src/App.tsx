import React from "react";
import Header from "./componants/header/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/";
import routes from "./route";
import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <React.Suspense fallback={<div>LOADING...</div>}>
          <Router>
            {routes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                exact
                component={route.component}
              />
            ))}
          </Router>
        </React.Suspense>
      </div>
    </Provider>
  );
};

export default App;
