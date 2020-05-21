import EnvironmentOutlined from "@ant-design/icons/EnvironmentOutlined";
import CompassOutlined from "@ant-design/icons/CompassOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import FacebookOutlined from "@ant-design/icons/FacebookOutlined";
import styled from "styled-components";
import WrapperContainer from "../components/WrapperContainer";
import Navbar from "../components/Navbar";

const Square = styled.div`
  background-color: #eee;
`;

const Contato: React.FC = () => (
  <WrapperContainer>
    <div id="contato" className="pt-24 px-8">
      <Navbar name="Contato" />
      <div className="flex mt-12 justify-center">
        <div>
          <Square className="w-full h-64" />
          <h2 className="my-4 text-xl text-center">Encontre-nos por aqui</h2>
          <div className="flex my-2">
            <EnvironmentOutlined className="mr-4 text-lg" />
            <p>Rua Nhambiquaras, 73 - Centro – Tupã, SP</p>
          </div>
          <div className="flex my-2">
            <CompassOutlined className="mr-4 text-lg" />
            <p>CEP 17600-060</p>
          </div>
          <div className="flex my-2">
            <PhoneOutlined className="mr-4 text-lg" />
            <p>+55 14 3441-7192</p>
          </div>
          <div className="flex my-2">
            <FacebookOutlined className="mr-4 text-lg" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  </WrapperContainer>
);

export default Contato;
