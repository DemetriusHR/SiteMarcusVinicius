import styled from "styled-components";
import WrapperContainer from "../components/WrapperContainer";
import Navbar from "../components/Navbar";

const Square = styled.div`
  background-color: #eee;
`;

const Alugueis: React.FC = () => (
  <WrapperContainer>
    <div id="alugueis" className="pt-24 px-8">
      <Navbar name="Alugueis" />
      <div className="flex mt-12">
        <div className="mr-4">
          <div className="flex justify-center">
            <Square className="w-1/2 h-64" />
          </div>
          <h2 className="my-8 text-center">Aluguel</h2>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sodales ligula orci, pulvinar tempor elit pretium fringilla. Aenean
            bibendum quis leo at mattis. Nulla commodo, nibh a condimentum
            blandit, nisl justo sollicitudin arcu, non semper tortor urna
            facilisis magna. Vestibulum pulvinar vulputate mollis. Duis at
            dictum elit. Donec eu nisi eu augue interdum tincidunt.{" "}
            <a href="#contato" className="pl-4">Saiba Mais ></a>
          </p>
        </div>
        <div className="ml-4">
          <div className="flex justify-center">
            <Square className="w-1/2 h-64" />
          </div>
          <h2 className="my-8 text-center">Venda</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sodales ligula orci, pulvinar tempor elit pretium fringilla. Aenean
            bibendum quis leo at mattis. Nulla commodo, nibh a condimentum
            blandit, nisl justo sollicitudin arcu, non semper tortor urna
            facilisis magna. Vestibulum pulvinar vulputate mollis. Duis at
            dictum elit. Donec eu nisi eu augue interdum tincidunt.{" "}
            <a href="#contato" className="pl-4">Saiba Mais ></a>
          </p>
        </div>
      </div>
    </div>
  </WrapperContainer>
);

export default Alugueis;
