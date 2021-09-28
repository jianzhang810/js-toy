'use strict';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => {
                fetch('./like').then(res => res.json()).then(res => {
                    console.log(res.data);
                    alert(document.cookie);
                })
            }}>
                Like
            </button>
        );
    }
}

const domContainer = document.querySelector('#wrapper');
ReactDOM.render(<LikeButton />, domContainer);