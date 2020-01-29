import React from 'react';
import WebsiteFilterBox from './components/WebsiteFilterBox'

import Content from './Content';



class App extends React.Component {


  render() {
    return (
      <div>
        <WebsiteFilterBox />
        <Content />
      </div>

    );
  }
}

export default App;
