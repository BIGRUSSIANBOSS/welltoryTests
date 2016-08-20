/**
 * Created by sasha on 16.08.16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';
import MeasureTable from '../components/MeasureTable';


@connect(state => ({
    measures: state.measures
}))
export default class Layout extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="layout">
                <Menu />
                <MeasureTable />
            </div>
        );
    }

}