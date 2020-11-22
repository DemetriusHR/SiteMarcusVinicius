import styled from "styled-components";
import { Link } from "react-scroll";

import WrapperContainer from "../components/WrapperContainer";
import Navbar from "../components/Navbar";

const Square = styled.div`
  background-color: #eee;
`;

const Alugueis: React.FC = () => (
  <WrapperContainer>
    <div id="alugueis" className="pt-24 px-8">
      <Navbar name="Alugueis" />
      <div className="flex flex-wrap mt-12">
        <div className="mr-4">
          <div className="flex justify-center">
            <Square className="w-1/2 h-64" />
          </div>
          <h2 className="my-8 text-center">Aluguel</h2>
          <p className="text-sm text-center">
            Você pode escolher qualquer traje disponível na loja para usar-lo,
            mas durante um tempo. Ótima escolha para clientes que não usam com
            frequência e irão usar o traje para uma ocasião especial. Venha até
            nós para saber nossos preços.
            <Link
              to="contato"
              spy={true}
              smooth={true}
              duration={500}
              className="pl-4"
            >
              {`Saiba Mais >`}
            </Link>
          </p>
        </div>
        <div className="ml-4">
          <div className="flex justify-center">
            <Square className="w-1/2 h-64" />
          </div>
          <h2 className="my-8 text-center">Venda</h2>
          <p className="text-sm">
            Você pode escolher qualquer traje disponível na loja para
            comprar-lo. Ótima escolha para clientes que usam com frequência e
            gostam de se vestir com trajes de alto nível. Venha até nós para
            saber nossos preços.
            <Link
              to="contato"
              spy={true}
              smooth={true}
              duration={500}
              className="pl-4"
            >
              {`Saiba Mais >`}
            </Link>
          </p>
        </div>
      </div>
    </div>
  </WrapperContainer>
);

export default Alugueis;
