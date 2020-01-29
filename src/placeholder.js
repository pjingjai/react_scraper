import React from 'react';
import { MDCSwitch } from '@material/switch';

class Placeholder extends React.Component {
constructor() {
    super()
    this.switchControl = null
    this.state = {
      page: ""
    }
  }
  async componentDidMount() {
    this.switchControl = new MDCSwitch(document.querySelector('.mdc-switch'));
    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cpageviews&list=&meta=&continue=&origin=*&titles=horse"; 

    var params = {
        action: "opensearch",
        search: "Hampi",
        limit: "5",
        namespace: "0",
        format: "json"
    };
    // /w/api.php?action=query&format=json&prop=info%7Cextracts%7Cpageviews&list=&meta=&continue=&titles=irkutsk
    // url = url + "?origin=*";
    // Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
    
    const response = await fetch(url)
    const page = await response.json();
    // console.log(page.query.pages[13645].extract)
    // this.setState({page: page.query.pages[13645].extract})
    let text = page.query.pages[13645].extract + "<a>silly555</a>"
    this.StrippedString = text.match(/((<(p|i|b|div|ul|li|h\d)\s*>|<(p|i|b|div|ul|li|h\d)\s+[^>]*>)[^>]*<\/(p|i|b|div|ul|li|h\d)\s*>)\2/g);
    this.setState({page: this.StrippedString.toString()})
    console.log(this.state.page)
  }

  render() {
    return (
      <div className='App'>
        {/* <script async src="https://cse.google.com/cse.js?cx=002554639367857730194:4taxsq1t0pm"></script> */}
<div style={{width:"200px", height:"100px", backgroundColor: "yellow"}} class="gcse-search"></div>
        {/* <div style={{width:"200px", height:"100px", backgroundColor: "yellow"}}>

        </div> */}
        {/* {this.StrippedString || "Loading..."} */}
        {this.state.page ? <div dangerouslySetInnerHTML={{__html: this.state.page}} /> : "Loading..."}
        <div className="mdc-switch">
          <div className="mdc-switch__track"></div>
          <div className="mdc-switch__thumb-underlay">
            <div className="mdc-switch__thumb"></div>
            <input type="checkbox" id="basic-switch" onClick={() => console.log(this.switchControl)} className="mdc-switch__native-control" role="switch" aria-checked="false" />
          </div>
        </div>
        <label for="basic-switch">off/on</label>
      </div>
    );
  }
}

export default Placeholder;