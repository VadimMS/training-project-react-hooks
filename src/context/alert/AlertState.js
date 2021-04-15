import React, {useReducer} from 'react';
import {SHOW_ALERT, HIDE_ALERT} from './../types';
import {AlertContext} from './alertContext';
import {alertReducer} from './alertReducer';

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null); // useReducer это hook, первым парраметром принимает редьюсер, а вторым парраметром начальное значение. Возвращает массив с двумя парраметрами, первый парамметр это state, а второй dispatch.

    const hide = () => dispatch({type: HIDE_ALERT});

    const show = (text, type = 'secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {type, text},
        });
    };

    return <AlertContext.Provider value={{hide, show, alert: state}}>{children}</AlertContext.Provider>;
};
