import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_TITLE } from '../reducer';
import Wrapper from '../components/wrapper';


export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: SET_TITLE,
            data: 'About',
        });

        return () => {
            // remove title.
            dispatch({
                type: SET_TITLE,
            });
        };
    }, []);

    return (
        <Wrapper>
            <h1>This is the About page</h1>
        </Wrapper>
    );
};
