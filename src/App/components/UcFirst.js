import React from 'react';

class UpperCaseFirst extends React.Component {
    render() {
        const string = this.props.text;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export default UpperCaseFirst;