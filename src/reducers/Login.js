/**
 * Created by sasha on 17.08.16.
 */

import * as types from '../constants/ActionTypes';

const initialState = {
    "user": {
        "email": "",
        "state": 0
    },
    "isFetching": false,
    "fetched": false,
    "error": null,
    "sortDown": true,
    "measures":[]
};
export default function measures(state = initialState, action) {
    switch (action.type) {
        case types.GET_MEASURES:
            return {
                ...state
            };
        case types.RESOLVE_NEW_MEASURES:
            return {
                ...state,
                measures: action.data.result
            };
        case types.GET_USER_DETAILS:
            return {
                ...state
            };
        case types.RESOLVE_NEW_DETAILS:
            return {
                ...state,
                user: {
                    email: action.data.username,
                    state: 1
                }
            };
        case types.GET_COOKIE:
            return {
                ...state
            };
        case types.LOG_IN:
            return {
                ...state,
                isFetching: true
            };
        case types.LOG_OUT:
            return {
                ...initialState
            };
        case types.LOG_IN_RESPONSE:
            return {
                ...state,
                isFetching: false
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
}
