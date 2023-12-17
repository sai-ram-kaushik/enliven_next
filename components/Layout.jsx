import Navbar from "@/sections/Navbar";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Enliven</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
