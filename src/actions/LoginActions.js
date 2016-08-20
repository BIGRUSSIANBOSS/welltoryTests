/**
 * Created by sasha on 17.08.16.
 */
import * as types from '../constants/ActionTypes';
import axios from 'axios';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

// сделать коллбэки!!
// сделать тесты
// сделать таблицу с сортировкой

export function getCookie() {
    return {
        type: types.GET_COOKIE,
        request: axios.get('/api2/api/version/')
            .then((response) => {
                
            }).catch((response) => {
                
            })
    };
}


export function getUserDetails(payload){
    return {
        type: types.GET_USER_DETAILS,
        payload: payload()
    };
}
export function resolveNewDetails(data){
    return {
        type: types.RESOLVE_NEW_DETAILS,
        data: data
    };
}


export function getMeasures(payload){
    return {
        type: types.GET_MEASURES,
        payload: payload()
    };
}
export function resolveNewMeasures(data){
    return {
        type: types.RESOLVE_NEW_MEASURES,
        data: data
    };
}



export function logOut(){
    // не сработает
    Object.keys(cookie.select(/^session.*/i)).forEach(name => cookie.remove(name, { path: '/' }))
    return {
        type: types.LOG_OUT
    };
}


export function logInError(error) {
    return {
        type: types.LOGIN_ERROR,
        error
    };
}

export function logIn(credentials){
    return {
        type: types.LOG_IN,
        payload: axios.post('/api2/auth/', {
            email: credentials.email,
            password: credentials.password
        },{
            headers: {
                "X-CSRFToken": cookie.load('csrftoken'),
                "Content-Type": "application/json"
            }
        }).then((response) => {
                browserHistory.push('/measures');
            })
            .catch((error) => {
                $('.loginForm').addClass('animated shake').delay(2000).promise().done(function () {
                    $('.loginForm').removeClass('animated shake');
                });
                // alert(error.response.data.error)
            })
    };
}

export function logInResponse(data) {
    return {
        type: types.LOG_IN_RESPONSE,
        data
    };
}
















// export function getUserDetails(payload){
//     return {
//         type: types.GET_USER_DETAILS,
//         payload: payload()
//     };
// }
//
// export function logOut(){
//     return {
//         type: types.LOG_OUT
//     };
// }
//
// export function getCookie(){
//     return {
//         type: types.GET_COOKIE,
//         request: axios.get('https://api.welltory.com/api2/api/version/')
//             .then((response) => {
//             }).catch((response) => {
//                 console.log(response);
//             })
//     };
// }
//
// export function login(credentials){
//     return {
//         type: types.LOG_IN,
//         payload: axios.post('https://api.welltory.com/api2/auth/', {
//             email: credentials.email,
//             password: credentials.password
//         },{
//             headers: {
//                 "X-CSRFToken": cookie.load('csrftoken'),
//                 "Content-Type": "application/json"
//             }
//         }).then((response) => {
//                 browserHistory.push('/measures');
//             })
//             .catch((error) => {
//
//             })
//     };
// }