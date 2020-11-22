import Carousel from "antd/lib/carousel";
import styled from "styled-components";

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
        A Marcus Vinícius dispõe de trajes de diferentes estilos, desde ternos
        em tons pastel para eventos ao ar livre à luz do dia até smokings
        estilizados. Todas as peças podem ser ajustadas para que o caimento seja
        sempre impecável, até mesmo poucas semanas antes do evento.
      </p>
      <Carousel autoplay>
        <div>
          <div className="flex items-center justify-center">
            <Square className="mx-6 w-1/2 h-64" />
          </div>
          <h2 className="text-center my-6 text-xl">Terno</h2>
          <p>
            É composto de calças, casaco e, por vezes, colete, daí o nome terno
            (de três peças). A rigor, o terno é o conjunto da calça, paletó e
            colete, sendo que este último foi, aos poucos, sendo deixado de
            lado, e foi-se tornando, socialmente aceito, o terno como conjunto
            apenas da calça com o paletó.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <Square className="mx-6 w-1/2 h-64" />
          </div>
          <h2 className="text-center my-6 text-xl">Smoking</h2>
          <p>
            O smoking é um traje de cerimónia masculino, sendo também conhecido
            como black tie (traduzido do inglês, "gravata preta").
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <Square className="mx-6 w-1/2 h-64" />
          </div>
          <h2 className="text-center my-6 text-xl">Fraque</h2>
          <p>
            O fraque é um traje de cerimónia que se usa em eventos que tenham
            lugar durante o dia. É o equivalente diurno à casaca (hoje usada
            apenas em eventos muito formais) e ao smoking (usada em eventos
            nocturnos formais e sofisticados).
          </p>
        </div>
      </Carousel>
    </div>
  </WrapperContainer>
);

export default Trajes;
