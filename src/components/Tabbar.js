import React from 'react';

import Tab from '@material/react-tab';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';

class Tabbar extends React.Component {
    state = {
        tabs: [
            { id: "wikipedia", active: false },
            { id: "wikivoyage", active: false },
            { id: "wiktionary", active: false }
        ]
    };

    render() {
        return (
            <div className="mdc-tab-bar" role="tablist">
                <div className="mdc-tab-scroller">
                    <div className="mdc-tab-scroller__scroll-area">
                        <div className="mdc-tab-scroller__scroll-content">

                            {/* <button className="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                                <span className="mdc-tab__content">
                                    <span className="mdc-tab__icon material-icons" aria-hidden="true">favorite</span>
                                    <span className="mdc-tab__text-label">Favorites</span>
                                </span>
                                <span className="mdc-tab-indicator mdc-tab-indicator--active">
                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                </span>
                                <span className="mdc-tab__ripple"></span>
                            </button> */}

                            <Tab key={0} id='wikipedia'
                                active={this.state.tabs[0].active}
                                onClick={(e) => {
                                    this.setState(
                                        state => ({
                                            tabs: state.tabs.map(
                                                (element, index) => {
                                                    return index === 0 ?
                                                        element = { ...element, active: !element.active }
                                                        : false
                                                }
                                            )
                                        })
                                    );
                                    this.props.getCurrentTab('wikipedia');
                                }
                                }
                            >
                                <MaterialIcon className='mdc-tab__icon' icon='menu_book' />
                                <span className='mdc-tab__text-label'>Wikipedia</span>
                            </Tab>

                            <Tab
                                key={1}
                                id='wikivoyage'
                                active={this.state.tabs[1].active}
                                onClick={(e) => {
                                    this.setState(
                                        state => ({
                                            tabs: state.tabs.map(
                                                (element, index) => {
                                                    return index === 1 ?
                                                        element = { ...element, active: !element.active }
                                                        : false
                                                }
                                            )
                                        })
                                    );
                                    this.props.getCurrentTab('wikivoyage');
                                }
                                }
                            >
                                <MaterialIcon className='mdc-tab__icon' icon='airplanemode_active' />
                                <span className='mdc-tab__text-label'>Wikivoyage</span>
                            </Tab>

                            <Tab
                                key={2}
                                id='wiktionary'
                                active={this.state.tabs[2].active}
                                onClick={(e) => {
                                    this.setState(
                                        state => ({
                                            tabs: state.tabs.map(
                                                (element, index) => {
                                                    return index === 2 ?
                                                        element = { ...element, active: !element.active }
                                                        : false
                                                }
                                            )
                                        })
                                    );
                                    this.props.getCurrentTab('wiktionary');
                                }
                                }
                            >
                                <MaterialIcon className='mdc-tab__icon' icon='language' />
                                <span className='mdc-tab__text-label'>Wiktionary</span>
                            </Tab>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabbar;