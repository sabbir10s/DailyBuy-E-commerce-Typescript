import { Outlet } from "react-router-dom";
import TopNav from "../components/screen/TopNav";
import Footer from "../components/shared/Footer";

const Layout = () => {
  // const location = useLocation();
  return (
    <div>
      <header>
        <TopNav />
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
