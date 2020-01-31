import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Placeholder from './placeholder';
import WebsiteFilterBox from './components/WebsiteFilterBox';
import WebContent from './components/WebContent';

import Tabbar from './components/Tabbar';


class Content extends React.Component {
    state = {
        currentTabContent: "",
        currentTab: -1
    }

    getCurrentTab = (tab) => {
        this.setState({
            currentTab: tab
        })
    }

    render() {
        return (
            <div className='box'>
                <Tabbar getCurrentTab={this.getCurrentTab} />
                {/* <Switch>
                    <Route path='/' exact component={Placeholder} />
                    <Route path='/signin' exact component={WebContent} />
                </Switch> */}
                <WebContent webContents={this.props.webContents} currentTabContent={Object.entries(this.props.webContents).filter(
                    element => element[0] === this.state.currentTab
                    )} />
            </div>
        );
    }
}

export default Content;