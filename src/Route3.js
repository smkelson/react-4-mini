import React from 'react';

class Route3 extends React.Component {
    render(){
        const words = this.props.match.params.words;
        return (
            <div>
                We are route 3 -----{words}
            </div>
        )
    }
}

export default Route3