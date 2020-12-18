import styled from "styled-components";
import Slider from "react-slick";

import WrapperContainer from "../components/WrapperContainer";
import Navbar from "../components/Navbar";

const imgTerno = require("../imgs/terno.jpg");
const imgSmoking = require("../imgs/smoking.jpg");
const imgFraque = require("../imgs/fraque.jpg");
const imgMeioFraque = require("../imgs/meio-fraque.jpg");

const Terno = styled.div`
  background: url(${imgTerno});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 670px) {
    width: 100%;
  }
`;

const Smoking = styled.div`
  background: url(${imgSmoking});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 670px) {
    width: 100%;
  }
`;

const Fraque = styled.div`
  background: url(${imgFraque});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 670px) {
    width: 100%;
  }
`;

const MeioFraque = styled.div`
  background: url(${imgMeioFraque});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 670px) {
    width: 100%;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

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
      <Slider {...settings}>
        <div>
          <div className="flex items-center justify-center">
            <Terno className="mx-6 w-1/2 h-96" />
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
            <Smoking className="mx-6 w-1/2 h-96" />
          </div>
          <h2 className="text-center my-6 text-xl">Smoking</h2>
          <p>
            O smoking é um traje de cerimónia masculino, sendo também conhecido
            como black tie (traduzido do inglês, "gravata preta").
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <Fraque className="mx-6 w-1/2 h-96" />
          </div>
          <h2 className="text-center my-6 text-xl">Fraque</h2>
          <p>
            O fraque é um traje de cerimónia que se usa em eventos que tenham
            lugar durante o dia. É o equivalente diurno à casaca (hoje usada
            apenas em eventos muito formais) e ao smoking (usada em eventos
            nocturnos formais e sofisticados).
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <MeioFraque className="mx-6 w-1/2 h-96" />
          </div>
          <h2 className="text-center my-6 text-xl">Meio-Fraque</h2>
          <p>
            É o traje que tem a parte de trás do casaco mais longa, a tal “cauda
            de pinguim”. Ele é composto por um paletó cinza escuro, uma camisa
            branca, uma calça risca-de-giz e uma gravata.
          </p>
        </div>
      </Slider>
    </div>
  </WrapperContainer>
);

export default Trajes;
