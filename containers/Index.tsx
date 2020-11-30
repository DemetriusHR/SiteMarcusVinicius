import DownOutlined from "@ant-design/icons/DownOutlined";
import styled, { StyledComponent } from "styled-components";
import { Link } from "react-scroll";
import WrapperContainer from "../components/WrapperContainer";

const Img = require("../imgs/image.jpg");

const IndexStyle: StyledComponent<"div", any, {}, never> = styled.div`
  background-image: url(${Img});
`;

const Index: React.FC = () => (
  <WrapperContainer>
    <IndexStyle id="index" className="max-h-screen min-h-screen bg-no-repeat bg-cover bg-center bg-opacity-25 flex flex-col-reverse">
      <div className="text-center py-2">
        <h1 className="text-6xl font-decorative m-0">Marcus Vinícius</h1>
        <h2 className="text-3xl">Aluguel de Trajes</h2>
        <Link
          activeClass="active"
          to="aempresa"
          className="cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
        >
          <i>
            <DownOutlined />
          </i>
        </Link>
      </div>
    </IndexStyle>
  </WrapperContainer>
);

export default Index;
