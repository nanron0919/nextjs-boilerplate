import NextHead from 'next/head';
import { useSelector } from 'react-redux';


const Head = () => {
    const title = useSelector(({ title }) => title);
    const baseTitle = 'Norman\'s Nextjs Boilerplate';
    const realTitle = title ? `${ baseTitle } - ${ title }` : baseTitle;

    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{ realTitle }</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content={ realTitle } />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Oswald|Raleway&display=swap" rel="stylesheet" />
        </NextHead>
    );
};
export default Head;
