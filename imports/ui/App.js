import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Map from '/imports/ui/Map';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      origin: 'Olsztyn',
      destination: 'Kraków',
    }
  }
  render() {
    console.log(Map);
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Moto Weather"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Map />
        </div>
      </MuiThemeProvider>
    );
  }
}
