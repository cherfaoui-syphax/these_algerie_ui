import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import Home from "./components/Home"
import ExtractCitation from './components/ExtractCitations';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import ESI from './components/ESI';
import Scrap from "./components/Scrap";
import Classify from "./components/Classify";
import ExtractKeywords from "./components/ExtractKeywords";
import Authors from './components/Authors';
function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <React.Fragment>
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
    <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
        ↑   
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



function App() {
  return (
    <div className="App">
          <CssBaseline />
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
          These algerie
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar id="back-to-top-anchor" />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path= "/citations" element={<ExtractCitation/>} />
          <Route path= "/esi" element={<ESI/>} />
          <Route path= "/scrap" element={<Scrap/>} />
          <Route path= "/classify" element={<Classify/>} />
          <Route path= "/keywords" element={<ExtractKeywords/>} />
          <Route path= "/authors" element={<Authors/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
