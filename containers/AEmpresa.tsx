import Image from "next/image";

import WrapperContainer from "../components/WrapperContainer";
import Navbar from "../components/Navbar";

const AEmpresa: React.FC = () => (
  <WrapperContainer>
    <div id="aempresa" className="pt-24 px-8">
      <Navbar name="A Empresa" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
        <div className="flex items-center">
          <Image
            src="/imgs/loja_antes.png"
            alt="Foto de como era a Marcus Vinícius"
            width={500}
            height={400}
            className="m-auto shadow-md"
          />
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <h3 className="text-lg w-full mb-4">História</h3>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
        <div className="col-span-2 flex flex-col items-center">
          <h3 className="text-lg w-full mb-4">Hoje em Dia</h3>
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
        <div className="flex items-center">
          <Image
            src="/imgs/loja_hoje.png"
            alt="Foto de como está atualmente a Marcus Vinícius"
            width={500}
            height={400}
            className="m-auto shadow-md"
          />
        </div>
      </div>
    </div>
  </WrapperContainer>
);

export default AEmpresa;
