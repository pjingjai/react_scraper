import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Placeholder from './placeholder';
import WebsiteFilterBox from './components/WebsiteFilterBox';
import WebContent from './components/WebContent';

import Tabbar from './components/Tabbar';


class Content extends React.Component {


    render() {
        return (
            <div>
                <Tabbar />
                <Switch>
                    <Route path='/' exact component={Placeholder} />
                    <Route path='/signin' exact component={WebContent} />
                </Switch>
            </div>
        );
    }
}

export default Content;