import React from "react";
import Header from "./Header";
import Head from "next/head";
import { Container } from "semantic-ui-react";

function Layout({ children }) {
  return (
    <Container>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
      ></link>

      <Header />
      {children}
    </Container>
  );
}

export default Layout;
