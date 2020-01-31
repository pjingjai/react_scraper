import React from 'react';
import WebsiteFilterBox from './components/WebsiteFilterBox'

import Content from './Content';
import Topbar from './components/Topbar'
import Drawer from './components/Drawer'
import url from './config'

import axios from 'axios';

class App extends React.Component {
  state = {
    searchValue: '',
    drawerVisible: false,
    sitesToFetch: {
      wikipedia: false,
      wikivoyage: false,
      wiktionary: false
    },
    webContents: {}
  }

  setDrawerVisibility = () => {
    this.setState(
      state => {
        return {
          drawerVisible: !state.drawerVisible
        }
      }
    );
  }

  setSitesToFetch = (site) => {
    this.setState(
      state => {
        return {
          TODO: site,
          sitesToFetch: { ...state.sitesToFetch, [site]: !state.sitesToFetch[site] }
        }
      }
    )
  }

  setwebContents = (sites, searchValue) => {
    const entriesToFetch = Object.entries(url).filter( element => sites.includes(element[0]) );
    entriesToFetch.forEach(
        async entry => {console.log(searchValue)
          const url = entry[1] + searchValue;
          console.log(url)
            const res = await axios.get(entry[1] + searchValue);
            this.setState(
                state => {
                  if (res.data.query) {
                    state.webContents[entry[0]] = Object.values(res.data.query.pages)[0].extract
                    return {
                        webContents: {...state.webContents, [entry[0]]: Object.values(res.data.query.pages)[0].extract}
                    }
                  }
                  return state;
                }
            );
        }
    )
};

  render() {
    return (
      <div id='app'>

        <Topbar hamburgerClicked={this.setDrawerVisibility} setwebContents={this.setwebContents} />
        <div id='main'>
          <Drawer visible={this.state.drawerVisible} />
          {/* {console.log(this.state.webContents)} */}
          <Content webContents={this.state.webContents} />
        </div>

      </div>

    );
  }
}

export default App;
