/**
 * Created by sasha on 20.08.16.
 */

/**
 * Created by sasha on 16.08.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeasureTableRow from './MeasureTableRow'

@connect(state => ({
    login: state.login
}))
export default class MeasureTable extends Component {

    constructor (props) {
        super(props);
        this.state = {
            sort: true
        };
    }

    handleSortTimeStartClick(e){
        e.preventDefault();

        var that = this;
        var newMeasures = this.props.login.measures.sort(function(a,b){
            if(new Date(a.timeStart) > new Date(b.timeStart)){
                return that.props.login.sortDown;
            }else{
                return that.props.login.sortDown;
            }
        });

        this.setState({
            measures: newMeasures,
            sort: !that.state.sort
        });

    }

    render() {
        const { login, dispatch } = this.props;

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Тип источника</th>
                            <th>Название источника</th>
                            <th>Стресс</th>
                            <th>Усталость</th>
                            <th>Начало замера
                                <a href="#" className="sortIcon" onClick={this.handleSortTimeStartClick.bind(this)}>
                                    { this.state.sort ? <i className='flaticon-sort-down'></i> : <i className='flaticon-sort-up'></i> }
                                </a>
                            </th>
                            <th>
                                Окончание замера
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.login.measures.map(function(result, i) {
                            return <MeasureTableRow line={result} key={i}/>;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}