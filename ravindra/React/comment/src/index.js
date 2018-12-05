
import React from 'react';
import ReactDom from 'react-dom';

import CommentDatails from './commentDetails';

const App = () => {
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <CommentDatails />
            <form className="ui reply form">
                <div className="field">
                    <textarea placeholder="Entre the comment"></textarea>
                </div>
                <div className="ui blue labeled submit icon button">
                    <i className="icon edit"></i> Add Reply
                </div>
            </form>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'))
