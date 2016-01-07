import React from 'react';

module.exports = () => {
    return {
        H: function (props) {
            var fraction = Math.floor(12.0 / props.children.length);
            return <div className="row">
                {props.children.map((c) => <div className={"col-md-" + fraction }>{c}</div>)}
            </div>
        },
        V: function (props) {
            return <div className="row">
                {props.children.map((c) => <div className="col-xs-12">{c}</div>)}
            </div>
        }//TODO tabs
    }
};