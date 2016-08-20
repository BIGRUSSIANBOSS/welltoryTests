/**
 * Created by sasha on 20.08.16.
 */
import React, { Component, PropTypes } from 'react';
import {resolveNewDetails, resolveNewMeasures, logInError} from '../src/actions/LoginActions';
import * as types from '../src/constants/ActionTypes';
import expect from 'expect'
import * as reducers from '../src/reducers';

import { combineReducers } from 'redux';


const reducer = combineReducers(reducers);

describe('Actions', () => {
    it('Getting data about user', () => {
        const expectedAction = {
            type: types.RESOLVE_NEW_DETAILS,
            data: {}
        };
        expect(resolveNewDetails({})).toEqual(expectedAction)
    });
    it('Getting user measures', () => {
        const expectedAction = {
            type: types.RESOLVE_NEW_MEASURES,
            data: {}
        };
        expect(resolveNewMeasures({})).toEqual(expectedAction)
    });
    it('Login error response', () => {
        var error = () => {
            return true;
        };
        const expectedAction = {
            type: types.LOGIN_ERROR,
            error: error
        };
        expect(logInError(error)).toEqual(expectedAction)
    });
});

describe('Redusers', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual([
            {
                "user": {
                    "email": "",
                    "state": 0
                },
                "isFetching": false,
                "fetched": false,
                "error": null,
                "sortDown": true,
                "measures":[]
            }
        ])
    })

})