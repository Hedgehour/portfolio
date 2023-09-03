import { NavBar } from "./Navbar/Navbar";
import { Footer } from "./Section/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
