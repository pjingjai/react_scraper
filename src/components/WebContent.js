import React from 'react';
import axios from 'axios';



class WebContent extends React.Component {
    state = {
        webContent: "",
        activeIndex: 0
    };

    handleActiveIndexUpdate = (activeIndex) => this.setState({ activeIndex });

    async componentDidMount() {
        let url = [
            'https://en.wikivoyage.org/w/api.php?action=query&format=json&origin=*&prop=extracts&list=&titles=irkutsk',
            'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&list=&titles=horse'
        ]
        // 13645
        const res = await axios.get(url[0]);
        this.setState({ webContent: Object.values(res.data.query.pages)[0].extract });
    }

    render() {
        return (
                <div class="mdc-elevation--z12 content-box">
                    <div class="pad" dangerouslySetInnerHTML={{ __html: this.props.currentTabContent }} />
                </div>
        );
    }
}

export default WebContent;