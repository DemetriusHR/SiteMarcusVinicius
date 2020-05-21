import styled from "styled-components";
import Logo from "../imgs/LogoBranco.png";

const HeaderWrappper = styled.header`
  background-color: var(--background);
`;

const Header: React.FC = () => (
  <HeaderWrappper className="flex p-4 space-x-4 fixed min-w-full top-0">
    <nav className="w-40">
      <a href="#">
        <img src={Logo} />
      </a>
    </nav>
    <div className="flex justify-between px-32 flex-grow">
      <nav className="text-lg self-center">
        <a href="#aempresa">A Empresa</a>
      </nav>
      <div className="text-lg self-center">|</div>
      <nav className="text-lg self-center">
        <a href="#trajes">Trajes</a>
      </nav>
      <div className="text-lg self-center">|</div>
      <nav className="text-lg self-center">
        <a href="#alugueis">Alugueis</a>
      </nav>
      <div className="text-lg self-center">|</div>
      <nav className="text-lg self-center">
        <a href="#contato">Contato</a>
      </nav>
    </div>
  </HeaderWrappper>
);

export default Header;
