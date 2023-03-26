import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import MyNav from "../components/shared/Nav/MyNav";

const Layout = () => {
  return (
    <div>
      <header>
        <MyNav />
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
