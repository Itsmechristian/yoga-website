import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/routes/Home';
import Classes from './components/routes/Classes'
import Notfound from './components/routes/Notfound'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <React.Fragment>
             <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/classes" component={Classes} />
                <Route path="**" component={Notfound} />
              </React.Fragment>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
