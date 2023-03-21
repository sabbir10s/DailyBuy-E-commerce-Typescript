import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Layout = () => {
  return (
    <div>
      <header></header>

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
