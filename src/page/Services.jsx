import { Link, Outlet, useLocation } from "react-router-dom";
import Container from "../components/container";

const Services = () => {
  const location = useLocation();
  const fullPageRoutes = ["/services/marketing", "/services/software", "/services/ai", "/services/disenografico", "/services/paginaweb",];
  const isFullPageRoute = fullPageRoutes.includes(location.pathname);

  if (isFullPageRoute) {
    return <Outlet />;
  }

  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 mb-4 md:mb-0">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/services/marketing" className="text-white hover:text-blue-500"></Link>
              </li>
              <li>
                <Link to="/services/software" className="text-white hover:text-blue-500"></Link>
              </li>
              <li>
                <Link to="/services/ai" className="text-white hover:text-blue-500"></Link>
              </li>
              <li>
                <Link to="/services/disenografico" className="text-white hover:text-blue-500"></Link>
              </li>
              <li>
                <Link to="/services/paginaweb" className="text-white hover:text-blue-500"></Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="w-full md:w-3/4 md:pl-8">
          <Outlet />
        </main>
      </div>
    </Container>
  );
};

export default Services;