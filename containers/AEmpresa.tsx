import styled from "styled-components";
import WrapperContainer from "../components/WrapperContainer";
import Navbar from "../components/Navbar";

const Square = styled.div`
  background-color: #eee;
  width: 150%;
`;

const AEmpresa: React.FC = () => (
  <WrapperContainer>
    <div id="aempresa" className="pt-24 px-8">
      <Navbar name="A Empresa" />
      <div className="flex pt-8">
        <Square className="flex-auto mr-8" />
        <div className="flex-auto">
          <h3 className="text-lg">História</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sodales ligula orci, pulvinar tempor elit pretium fringilla. Aenean
            bibendum quis leo at mattis. Nulla commodo, nibh a condimentum
            blandit, nisl justo sollicitudin arcu, non semper tortor urna
            facilisis magna. Vestibulum pulvinar vulputate mollis. Duis at
            dictum elit. Donec eu nisi eu augue interdum tincidunt at ac quam.
            Phasellus consectetur porttitor nunc, at varius urna efficitur eget.
            Donec fermentum rutrum felis ac malesuada. Donec interdum accumsan
            purus, quis scelerisque lorem maximus eu. Nam eget libero molestie
            lacus imperdiet viverra. Cras luctus nulla eget bibendum feugiat.
            Fusce placerat sagittis ante id accumsan. Nunc gravida diam nisi, a
            tincidunt turpis malesuada ut. Duis dignissim nibh vel arcu
            porttitor accumsan. Duis scelerisque lectus enim, in vulputate arcu
            laoreet et. Proin sit amet semper ipsum.
          </p>
        </div>
      </div>
      <div className="flex pt-8">
        <div className="flex-auto">
          <h3 className="text-lg">Hoje em Dia</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sodales ligula orci, pulvinar tempor elit pretium fringilla. Aenean
            bibendum quis leo at mattis. Nulla commodo, nibh a condimentum
            blandit, nisl justo sollicitudin arcu, non semper tortor urna
            facilisis magna. Vestibulum pulvinar vulputate mollis. Duis at
            dictum elit. Donec eu nisi eu augue interdum tincidunt at ac quam.
            Phasellus consectetur porttitor nunc, at varius urna efficitur eget.
            Donec fermentum rutrum felis ac malesuada. Donec interdum accumsan
            purus, quis scelerisque lorem maximus eu. Nam eget libero molestie
            lacus imperdiet viverra. Cras luctus nulla eget bibendum feugiat.
            Fusce placerat sagittis ante id accumsan. Nunc gravida diam nisi, a
            tincidunt turpis malesuada ut. Duis dignissim nibh vel arcu
            porttitor accumsan. Duis scelerisque lectus enim, in vulputate arcu
            laoreet et. Proin sit amet semper ipsum.
          </p>
        </div>
        <Square className="flex-auto ml-8" />
      </div>
    </div>
  </WrapperContainer>
);

export default AEmpresa;
