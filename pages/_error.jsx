import PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = styled(({ className, statusCode }) => (
    <section className={ className }>
        <h1>
            {
                statusCode
                    ? `Something went wrong ${ statusCode }`
                    : 'Something went wrong'
            }
        </h1>
    </section>
))`
    text-align: center;
`;

Error.getServerSideProps = async ({ res, err }) => {
    let statusCode = null;

    if (res) {
        ({ statusCode } = res);
    }
    else if (err) {
        ({ statusCode } = err);
    }

    return {
        statusCode,
    };
}

Error.defaultProps = {
    statusCode: null,
}

Error.propTypes = {
    statusCode: PropTypes.number,
}

export default Error;
