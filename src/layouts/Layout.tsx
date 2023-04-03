import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "src/components/shared/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
