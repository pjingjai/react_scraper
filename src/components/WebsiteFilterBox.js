import React from 'react';
import IconButton from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';
import TextField, { Input } from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-icon-button/dist/icon-button.css';

import logo from '../logo.svg';
import wikipedia from '../wikipedia.jfif';
import wiktionary from '../enwiktionary.png';
import './style.css';
import url from '../config'

import axios from 'axios';

class WebsiteFilterBox extends React.Component {
    state = {
        value: '',
        show: '',
        webContents: {},
        iconButtonOnCollection: {
            wikipedia: false,
            wikivoyage: false,
            wiktionary: false
        },
    }

    handleClick = (site) => {
        this.setState(
            state => {
                return {
                    iconButtonOnCollection: { ...state.iconButtonOnCollection, [site]: !state.iconButtonOnCollection[site] }
                }
            }
        )
    };

    handleMouseOver = (site) => {
        this.setState(
            state => {
                return {
                    show: site
                }
            }
        )
    };

    openTab = (url) => { window.open(url) };

    render() {
        return (
            <div style={{ display: 'flex' }}>{console.log(this.state)}

                <div>
                    <TextField
                        id='search'
                        label='Search'
                        onTrailingIconSelect={
                            () => {
                                const sites = Object.entries(this.state.iconButtonOnCollection).filter(element => element[1]).map(element => element[0]);
                                this.props.setwebContents(sites, this.state.value);
                            }
                        }
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            value={this.state.value}
                            onChange={(e) => this.setState({ value: e.currentTarget.value })} />
                    </TextField>

                    <IconButton isOn={this.state.iconButtonOnCollection.wikipedia} onMouseOver={() => { this.handleMouseOver('wikipedia') }} onClick={() => { this.handleClick('wikipedia') }} onDoubleClick={() => this.openTab('https://en.wikipedia.org')}>
                        <MaterialIcon className='mdc-tab__icon' icon='menu_book' />
                    </IconButton>

                    <IconButton isOn={this.state.iconButtonOnCollection.wikivoyage} onMouseOver={() => { this.handleMouseOver('wikivoyage') }} onClick={() => { this.handleClick('wikivoyage') }} onDoubleClick={() => this.openTab('https://en.wikivoyage.org')} >
                        <MaterialIcon className='mdc-tab__icon' icon='airplanemode_active' />
                    </IconButton>

                    <IconButton isOn={this.state.iconButtonOnCollection.wiktionary} onMouseOver={() => { this.handleMouseOver('wiktionary') }} onClick={() => { this.handleClick('wiktionary') }} onDoubleClick={() => this.openTab('https://en.wiktionary.org')} >
                        <MaterialIcon className='mdc-tab__icon' icon='language' />
                    </IconButton>

                </div>

                <span style={{ position: 'absolute', top: '18px', right: '0px', padding: '4px' }}>{this.state.show}</span>
            </div>
        );
    }
}

export default WebsiteFilterBox;