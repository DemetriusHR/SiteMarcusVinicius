import styled from "styled-components";
import EnvironmentOutlined from "@ant-design/icons/EnvironmentOutlined";
import CompassOutlined from "@ant-design/icons/CompassOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import FacebookOutlined from "@ant-design/icons/FacebookOutlined";
import Logo from "../imgs/LogoBranco.png";

const BarraInferiorWrapper = styled.div`
  .border-right-white {
    border-right: 1px solid #fff;
  }
`;

const BarraInferior: React.FC = () => (
  <BarraInferiorWrapper className="flex mt-12 justify-center items-center p-8">
    <div className="p-4 flex-grow">
      <img className="w-3/5" src={Logo} />
    </div>
    <div className="flex flex-grow">
      <div className="p-4 border-right-white">Menu</div>
      <div className="flex">
        <div>
          <div className="p-4 text-sm">
            <a href="#aempresa">A Empresa</a>
          </div>
          <div className="p-4 text-sm">
            <a href="#trajes">Trajes</a>
          </div>
        </div>
        <div>
          <div className="p-4 text-sm">
            <a href="#alugueis">Alugueis</a>
          </div>
          <div className="p-4 text-sm">
            <a href="#contato">Contato</a>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-grow">
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
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  </BarraInferiorWrapper>
);

export default BarraInferior;
