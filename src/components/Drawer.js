import React, { Component } from 'react';
import Drawer, {
    DrawerHeader,
    DrawerSubtitle,
    DrawerTitle,
    DrawerContent,
} from '@material/react-drawer';

import "@material/react-drawer/dist/drawer.css";

class InfoBar extends Component {

    render() {
        return (
            this.props.visible ? (
            <Drawer id="sideBar">

                <DrawerContent tag='main'>  {/*defaults to div*/}
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/3/31/Wikimedia_Foundation_logo_-_vertical.svg'} />
                </DrawerContent>

                <DrawerHeader> {/*defaults to div*/}
                    <DrawerTitle tag='h2'> {/*defaults to h3*/}
                        Useful Links
          </DrawerTitle>
                    <DrawerSubtitle> {/*defaults to h6*/}
                        double-click to open new tab
          </DrawerSubtitle>
                </DrawerHeader>

                <DrawerContent tag='links' style={{textAlign: 'center', color: '#38bdd3'}}>  {/*defaults to div*/}
                    <div onDoubleClick={() => {window.open('https://www.google.co.th/maps')}}>https://www.google.co.th/maps</div>
                    <div onDoubleClick={() => {window.open('https://trends.google.co.th/trends')}}>https://trends.google.co.th/trends</div>
                    <div onDoubleClick={() => {window.open('https://pantip.com/')}}>https://pantip.com/</div>
                </DrawerContent>

            </Drawer>
            ) : null
        );
    }
}

export default InfoBar;