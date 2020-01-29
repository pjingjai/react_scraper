<div className={["mdc-icon-button"].join(' ')} onClick={(e) => {
    let classList = e.target.className.split(' ');
    if (classList.includes('mdc-icon-button')) {
        if (classList.includes('mdc-icon-button--on')) {
            classList.splice(classList.findIndex(element => element == 'mdc-icon-button--on'), 'mdc-icon-button--on'.length)
        } else {
            classList.push('mdc-icon-button--on')
        }
        e.target.className = classList.join(' ')
    } else if (classList.includes('mdc-icon-button__icon')) {
        if (classList.includes('mdc-icon-button--on')) {
            classList.splice(classList.findIndex(element => element == 'mdc-icon-button--on'), 'mdc-icon-button--on'.length)
        } else {
            e.target.parentElement.className = classList.join(' ');
        }
    }
    console.dir(e.target.parentElement)
    this.setState(state => { return { TODO: 'wiktionary' } })
}}
    onDoubleClick={() => this.openTab('https://en.wiktionary.org')} >
    <img className="mdc-icon-button__icon" src={wiktionary} />

</div>