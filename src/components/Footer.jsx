import FooterLink from './footerLink';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <FooterLink to="/">
              <img src="/logoPixo.png" alt="PIXO Logo" className="h-14" />
            </FooterLink>
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
                  <FooterLink to="/company">
                    Sobre Nosotros
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="">
                    Seguridad
                  </FooterLink>
                </li>
              </ul>
            </div>

            <div className="mt-8 md:mt-0">
              <h2 className="mb-4 text-lg font-semibold text-black uppercase">
                Productos
              </h2>
              <ul className="text-black space-y-2">
                <li>
                  <FooterLink to="/services/ai">
                    Inteligencia Artificial PIXO
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/services/marketing">
                    Marketing Digital
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/services/software">
                    Desarrollo de Software
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/services/paginaweb">
                    Páginas Web
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/services/disenografico">
                    Diseño Gráfico
                  </FooterLink>
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