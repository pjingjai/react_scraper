import React from 'react';
import IconButton from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-icon-button/dist/icon-button.css';
import logo from '../logo.svg';
import wiktionary from '../enwiktionary.png';
import './style.css';

class WebsiteFilterBox extends React.Component {
    state = {
        TODO: ''
    }

    handleClick = () => null;
    openTab = url => { window.open(url) };



    render() {
        return (
            <div>
                <IconButton onClick={() => { this.setState(state => { return { TODO: 'wikipedia' } }) }} onDoubleClick={() => this.openTab('https://en.wikipedia.org')}>
                    <img src={logo} />
                </IconButton>
                <IconButton onClick={() => { this.setState(state => { return { TODO: 'wikivoyage' } }) }} onDoubleClick={() => this.openTab('https://en.wikivoyage.org')} >
                    <img src={logo} />
                </IconButton>

                <IconButton onClick={() => { this.setState(state => { return { TODO: 'wiktionary' } }) }} onDoubleClick={() => this.openTab('https://en.wiktionary.org')} >
                    <img src={wiktionary} />
                </IconButton>

                <hr />
                {this.state.TODO}
            </div>
        );
    }
}

export default WebsiteFilterBox;