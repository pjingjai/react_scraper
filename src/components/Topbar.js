import React from 'react';
import '@material/react-top-app-bar/dist/top-app-bar.css';

import WebsiteFilterBox from './WebsiteFilterBox'
import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
  
  const Navbar = (props) => {
    return (
      <div>
        <TopAppBar>
          <TopAppBarRow>

            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon hasRipple icon='menu' onClick={() => props.hamburgerClicked()}/>
              </TopAppBarIcon>
              <TopAppBarTitle>WiKiBrowS</TopAppBarTitle>
            </TopAppBarSection>

            <TopAppBarSection align='middle'>
              <TopAppBarIcon actionItem tabIndex={0}>
                <WebsiteFilterBox setwebContents={props.setwebContents} />
              </TopAppBarIcon>
            </TopAppBarSection>

            
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust>
          {/* My exciting content! */}
        </TopAppBarFixedAdjust>
      </div>
    );
  }

  export default Navbar;