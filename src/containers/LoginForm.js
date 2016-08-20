/**
 * Created by sasha on 16.08.16.
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../actions/LoginActions';

@connect(state => ({
    login: state.login
}))
export default class LoginForm extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChangeEmail (e) {
        this.setState({ email: e.target.value });
    }

    handleChangePassword (e) {
        this.setState({ password: e.target.value });
    }

    render () {

        const { dispatch } = this.props;
        return (
            <div className="loginFormParent">
                <div className="loginForm panel panel-default">
                    <div className="panel-body">
                        <form>
                            <img src="./src/img/logo-vertical.png" alt="welltory-logo" className="welltoryLogo"/>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ваш email" autoComplete="on"
                                       onChange={this.handleChangeEmail.bind(this)}
                                       value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Пароль" autoComplete="on"
                                       onChange={this.handleChangePassword.bind(this)}
                                       value={this.state.password} />
                            </div>
                            <input type="submit" className="btn btn-default btn-welltory" value="Войти" onClick={this.handleSubmit.bind(this)} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit (e) {
        e.preventDefault()
        const { dispatch } = this.props;
        const actions = bindActionCreators(LoginActions, dispatch);
        dispatch(actions.getCookie()); // получаю куку
        dispatch(actions.logIn({ // вхожу
            email: this.state.email,
            password: this.state.password
        }));
    }

}