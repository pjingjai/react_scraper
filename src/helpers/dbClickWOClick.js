let timer = null;
let status = 1;

const singleClick = (event) => {
    this.status = 1;
    this.timer = setTimeout(() => {
        if (this.status == 1) {
            console.log('I  am single click !');
        }
    }, 500);
    console.log(this.status)
}

const doubleClick = (event) => {
    clearTimeout(this.timer);
    this.status = 0;
    console.log('I  am a double  click!');
}