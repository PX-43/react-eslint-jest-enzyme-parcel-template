import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function HelloMessage(props) {
    return <div>Hello {props.name}</div>;
}

HelloMessage.propTypes = {
    name: PropTypes.string,
};

const mountNode = document.getElementById('app');
ReactDOM.render(<HelloMessage name="MAN!" />, mountNode);
