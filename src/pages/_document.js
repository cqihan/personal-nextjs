// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* <script>
            AOS.init();
          </script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;