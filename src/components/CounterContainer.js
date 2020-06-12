import React, { Component } from 'react';
import { connect } from 'react-redux';

const addAction = { type: 'ADD' };
const removeAction = { type: 'REMOVE' };
const addAction10 = { type: 'ADD10' };
const removeAction10 = { type: 'REMOVE10' };
const resetAction = { type: 'RESET' };

class CounterContainer extends Component {
    render() {
        const { Counter, dispatch } = this.props;
        return(
            <div>
                <p>{Counter}</p>
                <button onClick={() => dispatch(addAction)}>
                    add1
                </button>
                <button onClick={() => dispatch(removeAction)}>
                    remove1
                </button>
                <button onClick={() => dispatch(addAction10)}>
                    add10
                </button>
                <button onClick={() => dispatch(removeAction10)}>
                    remove10
                </button>
                <button onClick={() => dispatch(resetAction)}>
                    reset
                </button>
            </div>

        );
    }
}
const mapStateToProps = state => ({
    Counter: state
});

export default connect(mapStateToProps)(CounterContainer);