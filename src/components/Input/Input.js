import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default class Input extends React.Component {
    static defaultProps = {
        name: '',
        id: '',
        type: '',
        placeholder: 'PLACEHOLDER'
    }

    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string
    }

    render() {
        const { name, id, type, placeholder } = this.props;
        return (
            <input className='CommonInput' 
                    name={name} 
                    id={id}
                    type={type}
                    placeholder={placeholder} />
        )
    }
}