import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                        enhanceApp: (App) => (props) => sheet.collectStyles( < App {...props }
                            />)
                        });

                    const initialProps = await Document.getInitialProps(ctx);

                    return {
                        ...initialProps,
                        styles: [initialProps.styles, sheet.getStyleElement()]
                    };
                }
            finally {
                sheet.seal();
            }
        }

        render() {
            return ( <
                Html lang="en">
                <Head>
                <link rel = "apple-touch-icon"sizes ="180x180" href ="/apple-touch-icon.png" />
                <link rel = "icon" type ="image/png" sizes = "32x32" href ="/favicon-ultron.png" />
                <link rel = "manifest" href ="/manifest.json" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
                </Html>
            );
        }
    }

    export default MyDocument;
