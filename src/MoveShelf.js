import React from 'react';
import PropTypes from 'prop-types';

class MoveShelf extends React.Component{
    constructor(props) {
        super(props);
        this.state = { shelf: "" };
    }

    bookstates = [
        {states:"currentlyReading",text:"Currently Reading"},
        {states:"wantToRead",text:"Want to Read"},
        {states:"read",text:"Read"},
        {states:"none",text:"None"}
    ]
    hangeShelfHandler = (event) =>{
        this.props.changeShelf(this.props.book,event.target.value);
    }

    render(){
        return(
        <select 
            value={this.props.currentStatus? this.props.currentStatus : 'none'}
            onChange={e => this.hangeShelfHandler(e)} 
        >
            <option value="move" disabled>Move to...</option>
            {this.bookstates.map( bookstate => (
                <option key={bookstate.states} value={bookstate.states} >{bookstate.text}</option>
            ))}
        </select>
        )
    }
}

MoveShelf.propTypes = {
    currentStatus:PropTypes.string.isRequired,
    book:PropTypes.object.isRequired,
    changeShelf:PropTypes.func.isRequired
}

export default MoveShelf