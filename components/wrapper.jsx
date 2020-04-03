import styled from 'styled-components';

export default styled(({ tag = 'div', className, children }) => {
    const CustomTag = tag;

    return (
        <CustomTag className={ className }>
            { children }
        </CustomTag>
    );
})`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: left;
    padding: 40px max(40px, calc((100vw - 1280px) / 2));
`;
