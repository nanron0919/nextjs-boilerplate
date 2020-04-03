export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const SET_TITLE = 'SET_TITLE';

const initState = {
    count: 0,
    title: undefined,
};

export default (state = initState, action) => {
    let ret;
    let { count, title } = state;

    switch (action.type) {
    case INCREASE: {
        ret = {
            count: count += 1,
        };
        break;
    }

    case DECREASE: {
        ret = {
            count: count -= 1,
        };
        break;
    }

    case SET_TITLE: {
        ret = {
            title: action.data,
        };
        break;
    }

    default:
        return state;
    }

    return {
        ...state,
        ...ret,
    };
};
