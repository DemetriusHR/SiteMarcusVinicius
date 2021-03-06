import styled from "styled-components";
import EnvironmentOutlined from "@ant-design/icons/EnvironmentOutlined";
import CompassOutlined from "@ant-design/icons/CompassOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import MobileOutlined from "@ant-design/icons/MobileOutlined";
import FacebookOutlined from "@ant-design/icons/FacebookOutlined";
import InstagramOutlined from "@ant-design/icons/InstagramOutlined";
import MailOutlined from "@ant-design/icons/MailOutlined";
import { Link } from "react-scroll";

const Logo = require("../imgs/LogoBranco.png");

const BarraInferiorWrapper = styled.div`
  .border-right-white {
    border-right: 1px solid #fff;
  }

  .img-width {
    width: 18rem;
    @media (max-width: 936px) {
      max-width: none;
    }
  }

  .width-title {
    @media (max-width: 603px) and (min-width: 355px) {
      width: 6rem;
    }

    @media (max-width: 354px) {
      width: 7rem;
    }
  }
`;

const BarraInferior: React.FC = () => (
  <>
    <BarraInferiorWrapper className="flex flex-wrap mt-12 justify-center items-center p-8">
      <div className="p-4 flex-1 w-64">
        <img src={Logo} className="img-width" />
      </div>
      <div className="flex flex-1">
        <div className="p-4 border-right-white width-title">Menu</div>
        <div className="flex">
          <div>
            <div className="p-4 text-sm width-title">
              <Link to="aempresa" spy={true} smooth={true} duration={500}>
                A Empresa
              </Link>
            </div>
            <div className="p-4 text-sm width-title">
              <Link to="trajes" spy={true} smooth={true} duration={500}>
                Trajes
              </Link>
            </div>
          </div>
          <div>
            <div className="p-4 text-sm">
              <Link to="alugueis" spy={true} smooth={true} duration={500}>
                Alugueis
              </Link>
            </div>
            <div className="p-4 text-sm">
              <Link to="contato" spy={true} smooth={true} duration={500}>
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="p-4 border-right-white width-title">Contato</div>
        <div className="p-4">
          <div className="flex my-2 text-sm">
            <EnvironmentOutlined className="mr-4" />
            <p>Rua Nhambiquaras, 73 - Centro – Tupã, SP</p>
          </div>
          <div className="flex my-2 text-sm">
            <CompassOutlined className="mr-4" />
            <p>CEP 17600-060</p>
          </div>
          <div className="flex my-2 text-sm">
            <PhoneOutlined className="mr-4" />
            <a data-phone="+55 14 3441-7192">+55 14 3441-7192</a>
          </div>
          <div className="flex my-4 text-sm">
            <MobileOutlined className="mr-4" />
            <a href="https://api.whatsapp.com/send?phone=5514996082389">+55 14 99608-2389</a>
          </div>
          <div className="flex my-4 text-sm">
            <FacebookOutlined className="mr-4" />
            <a href="https://www.facebook.com/marcus.vinicius.trajes">
              Marcus Vinícius
            </a>
          </div>
          <div className="flex my-4 text-sm">
            <InstagramOutlined className="mr-4" />
            <a href="https://www.instagram.com/lojamarcusviniciustrajes/">
              Marcus Vinícius
            </a>
          </div>
          <div className="flex my-4 text-sm">
            <MailOutlined className="mr-4" />
            <a href="https://www.instagram.com/lojamarcusviniciustrajes/">
              Marcus Vinícius
            </a>
          </div>
        </div>
      </div>
    </BarraInferiorWrapper>
    <p className="text-center text-sm">
      ©{" "}
      <a href="https://www.linkedin.com/in/dem%C3%A9trius-rodrigues-b68968151/">
        Dimer
      </a>
    </p>
  </>
);

export default BarraInferior;
