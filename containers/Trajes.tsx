import styled from "styled-components";
import LeftOutlined from "@ant-design/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/RightOutlined";
import WrapperContainer from "../components/WrapperContainer";
import Navbar from "../components/Navbar";

const Square = styled.div`
  background-color: #eee;
`;

const Trajes: React.FC = () => (
  <WrapperContainer>
    <div id="trajes" className="pt-24 px-8">
      <Navbar name="Trajes" />
      <p className="my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        sodales ligula orci, pulvinar tempor elit pretium fringilla. Aenean
        bibendum quis leo at mattis. Nulla commodo, nibh a condimentum blandit,
        nisl justo sollicitudin arcu, non semper tortor urna facilisis magna.
        Vestibulum pulvinar vulputate mollis. Duis at dictum elit. Donec eu nisi
        eu augue interdum tincidunt at ac quam.
      </p>
      <div className="flex items-center justify-center">
        <LeftOutlined className="text-4xl cursor-pointer" />
        <Square className="mx-6 w-1/2 h-64" />
        <RightOutlined className="text-4xl cursor-pointer" />
      </div>
      <h2 className="text-center my-6 text-xl">Nome do Traje Listado</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        sodales ligula orci, pulvinar tempor elit pretium fringilla. Aenean
        bibendum quis leo at mattis.
      </p>
    </div>
  </WrapperContainer>
);

export default Trajes;
