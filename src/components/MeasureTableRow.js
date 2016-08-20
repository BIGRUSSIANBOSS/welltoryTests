/**
 * Created by sasha on 20.08.16.
 */

/**
 * Created by sasha on 16.08.16.
 */
import React, { Component } from 'react';

export default class MeasureTable extends Component {
    constructor (props) {
        super(props);
    }

    render() {

        return (
            <tr>
                <td>{this.props.line.sourceType}</td>
                <td>{this.props.line.sourceName}</td>
                <td>{this.props.line.statistics.stress}</td>
                <td>{this.props.line.statistics.vegetative}</td>
                <td>{this.props.line.timeStart}</td>
                <td>{this.props.line.timeEnd}</td>
            </tr>
        );
    }
}