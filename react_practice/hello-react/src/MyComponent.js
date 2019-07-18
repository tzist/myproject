import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: "tzist"
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    
    render() {
        return (
            <div>
                나의 새롭고 멋진 컴포넌트,
                안녕하세요! 제 이름은 {this.props.name} ({this.props.age}) 입니다!
            </div>
        )
    }
}

export default MyComponent;