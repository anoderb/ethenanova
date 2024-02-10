import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Ethena Nova is a new space in the Crypto world, where you can wade through vast spaces on various networks from layer 1 layer 2 or others, you can experience the ease of transactions on Ethena Nova because this is the innovation. Ethena Nova invites you to explore by scrolling down."
        />
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </Head>
      <body className="bg-primary-black overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
