import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <Link to="/">
              <img src="/logoPixo.png" alt="PIXO Logo" className="h-14" />
            </Link>
            <p className="text-black text-base sm:text-xl font-medium leading-relaxed">
            La inteligencia artificial que transforma tus ideas en soluciones inteligentes, impulsando tu negocio y cuidando tu bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-20 gap-y-8">
            <div>
              <h2 className="mb-4 text-lg font-semibold text-black uppercase">
                Compañía
              </h2>
              <ul className="text-black space-y-2">
                <li>
                  <Link to="/company" className="hover:underline hover:text-blue-500">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:underline">
                    Seguridad
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-8 md:mt-0">
              <h2 className="mb-4 text-lg font-semibold text-black uppercase">
                Productos
              </h2>
              <ul className="text-black space-y-2">
                <li>
                  <Link to="/services/ai" className="hover:underline hover:text-blue-500">
                    Inteligencia Artificial PIXO
                  </Link>
                </li>
                <li>
                  <Link to="/services/marketing" className="hover:underline hover:text-blue-500">
                    Marketing Digital
                  </Link>
                </li>
                <li>
                  <Link to="/services/software" className="hover:underline hover:text-blue-500">
                    Desarrollo de Software
                  </Link>
                </li>
                <li>
                  <Link to="/services/paginaweb" className="hover:underline hover:text-blue-500">
                    Páginas Web
                  </Link>
                </li>
                <li>
                  <Link to="/services/disenografico" className="hover:underline hover:text-blue-500">
                    Diseño Gráfico
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

        <div className="flex items-center justify-center">
          <span className="text-sm font-semibold text-black sm:text-center">
             PIXO Company <span className="text-lg align-super">&reg;</span> 2023 - 2024
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;