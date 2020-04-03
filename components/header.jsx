import React, { useEffect, useState, useReducer } from 'react';
import { func } from 'prop-types'
import Link from 'next/link';
import styled from 'styled-components';
import media from 'styled-media-query';
import Wrapper from './wrapper';

const CustomWrapper = styled(Wrapper)`
    box-shadow: 0 2px 10px 4px rgba(0, 0, 0, .3);
    justify-content: space-between;
    min-height: 100px;

    ${ media.lessThan('medium')`
        min-height: 80px;
    `}
`;

const CustomHeader = styled(({ className, children }) => {
    return (
        <CustomWrapper tag="header">
            { children }
        </CustomWrapper>
    );
})`

`;
const NavContainer = styled.section`
    display: flex;
    justify-content: flex-start;

    > * {
        margin: 0 10px 0 0;
    }
`;
const CustomH1 = styled(({ className, children }) => (
    <h1 className={ className }>
        { children }
    </h1>
))`
    && {
        font-size: 3rem;
        font-weight: 100;

        ${ media.lessThan('medium')`
            margin: 0 0 10px 0;
        `}
    }
`;

const PageHeader = ({ t }) => {

    return (
        <CustomHeader>
            <CustomH1>Header</CustomH1>
            <NavContainer>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </NavContainer>
        </CustomHeader>
    );
};

export default PageHeader;
