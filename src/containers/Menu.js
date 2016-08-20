/**
 * Created by sasha on 16.08.16.
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../actions/LoginActions';
import axios from 'axios';
import { browserHistory } from 'react-router';

@connect(state => ({
    login: state.login
}))
export default class Menu extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    constructor (props) {
        super(props);
    }

    componentDidMount(){
        const { login, dispatch } = this.props;
        const actions = bindActionCreators(LoginActions, dispatch);
        dispatch(actions.getUserDetails(() => {
            axios.get('/api2/profile/')
                .then((response) => {
                    console.log(response.data);
                    dispatch(actions.resolveNewDetails(response.data));
                })
                .catch((error) => {
                    browserHistory.push('/login');
                })
        }));
        dispatch(actions.getMeasures(() => {
            axios.get('/api2/data/rr/')
                .then((response) => {
                    console.log(response.data);
                    dispatch(actions.resolveNewMeasures(response.data));
                })
                .catch((error) => {
                    browserHistory.push('/login');
                })
        }));
    }
    render () {

        return (
            <div className="menu">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand nav-bar-fix" href="#">
                                <img alt="Brand" src="./src/img/logo.png" width="30" />
                            </a>
                            <p className="navbar-text">Здравствуйте, {this.props.login.user.email}!</p>
                        </div>

                    </div>

                </nav>
            </div>
        );
    }

}