import React, {useReducer, useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import './assets/css/spacyder.min.css'

import './assets/vendor/simplebar/dist/simplebar.min.css'
import './assets/vendor/tiny-slider/dist/tiny-slider.css'
import './assets/vendor/lightgallery.js/dist/css/lightgallery.min.css'
import './assets/vendor/flatpickr/dist/flatpickr.min.css'

import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import {appReducer, initialAppState} from "./reducers/appReducer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";


export const AppContext = React.createContext();

const App = () => {
    const [state, dispatchState] = useReducer(appReducer, initialAppState);
  return (
      <AppContext.Provider value={{state: state, dispatchState: dispatchState}}>
          <div className={"App"}>
              <Switch>
                  <Route exact={true} path={'/'} render={()=> <Home />} />
                  <Route exact={true} path={'/coming-soon'} render={()=> <ComingSoon />} />
                  <Route exact={true} path={'/about'} render={()=> <About />} />
                  <Route exact={true} path={'/contact'} render={()=> <Contact />} />
                  <Route component={NotFound} />
              </Switch>
          </div>
      </AppContext.Provider>
  )
}


export default App;