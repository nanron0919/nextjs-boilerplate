import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Wrapper from '../components/wrapper';
import { SET_TITLE, INCREASE, DECREASE } from '../reducer';

const Homepage = () => {
    const count = useSelector(({ count }) => count);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: SET_TITLE,
            data: 'Home',
        });

        return () => {
            // remove title.
            dispatch({
                type: SET_TITLE,
            });
        };
    }, []);

    const handleCount = (isIncreasing) => () => {
        let type = (isIncreasing ? INCREASE : DECREASE);

        dispatch({
            type,
        });
    };

    return (
        <Wrapper>
            <h1>This is the Home page</h1>
            <p>Your count is { count }</p>
            <div>
                <button type="button" onClick={ handleCount(true) }>+</button>
                <button type="button" onClick={ handleCount(false) }>-</button>
            </div>
        </Wrapper>
    );
};

export default Homepage;
