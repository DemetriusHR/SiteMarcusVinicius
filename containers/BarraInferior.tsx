import styled from "styled-components";
import EnvironmentOutlined from "@ant-design/icons/EnvironmentOutlined";
import CompassOutlined from "@ant-design/icons/CompassOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import FacebookOutlined from "@ant-design/icons/FacebookOutlined";
import { Link } from "react-scroll";

const Logo = require("../imgs/LogoBranco.png");

const BarraInferiorWrapper = styled.div`
  .border-right-white {
    border-right: 1px solid #fff;
  }
`;

const BarraInferior: React.FC = () => (
  <BarraInferiorWrapper className="flex flex-wrap mt-12 justify-center items-center p-8">
    <div className="p-4 flex-1">
      <img className="w-3/5" src={Logo} />
    </div>
    <div className="flex flex-1">
      <div className="p-4 border-right-white">Menu</div>
      <div className="flex">
        <div>
          <div className="p-4 text-sm">
            <Link to="aempresa" spy={true} smooth={true} duration={500}>
              A Empresa
            </Link>
          </div>
          <div className="p-4 text-sm">
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
      <div className="p-4 border-right-white">Contato</div>
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
          <p>+55 14 3441-7192</p>
        </div>
        <div className="flex my-2 text-sm">
          <FacebookOutlined className="mr-4" />
          <a href="https://www.facebook.com/marcus.vinicius.trajes">
            Marcus Vinícius
          </a>
        </div>
      </div>
    </div>
  </BarraInferiorWrapper>
);

export default BarraInferior;
