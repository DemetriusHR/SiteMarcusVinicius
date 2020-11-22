import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import FocusLock from "react-focus-lock";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const Logo = require("../imgs/logo.png");

const HeaderWrappper = styled.header`
  background-color: var(--background);
`;

interface IBurgerWrapper {
  open: boolean;
}

const BurgerWrapper = styled.button<IBurgerWrapper>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

interface IBurgerMenu {
  open: boolean;
  changeOpen: () => void;
}

const Burger: React.FC<IBurgerMenu> = ({ open, changeOpen, ...props }) => (
  <BurgerWrapper
    aria-label="Toggle menu"
    className="mt-2"
    aria-expanded={open}
    open={open}
    onClick={changeOpen}
    {...props}
  >
    <span />
    <span />
    <span />
  </BurgerWrapper>
);

export const MenuWrapper = styled.nav<IBurgerWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #484848;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #b9b9b9;
    }
  }

  .active {
    color: #a5a5a5;
  }
`;

const Menu: React.FC<IBurgerWrapper> = ({ open, ...props }) => (
  <MenuWrapper open={open} aria-hidden={!open} id="main-menu" {...props}>
    <Link
      activeClass="active"
      to="aempresa"
      className="cursor-pointer"
      spy={true}
      smooth={true}
      duration={500}
    >
      A Empresa
    </Link>
    <Link
      activeClass="active"
      to="trajes"
      className="cursor-pointer"
      spy={true}
      smooth={true}
      duration={500}
    >
      Trajes
    </Link>
    <Link
      activeClass="active"
      to="alugueis"
      className="cursor-pointer"
      spy={true}
      smooth={true}
      duration={500}
    >
      Alugueis
    </Link>
    <Link
      activeClass="active"
      to="contato"
      className="cursor-pointer"
      spy={true}
      smooth={true}
      duration={500}
    >
      Contato
    </Link>
  </MenuWrapper>
);

const Header: React.FC = () => {
  const node = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const changeOpen = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <HeaderWrappper className="flex justify-between px-4 py-1 space-x-4 fixed min-w-full top-0">
      <nav className="w-10">
        <Link
          to="index"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src={Logo} />
        </Link>
      </nav>
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger
            open={open}
            changeOpen={changeOpen}
            aria-controls="main-menu"
          />
          <Menu open={open} />
        </FocusLock>
      </div>
    </HeaderWrappper>
  );
};

export default Header;
