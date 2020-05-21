import DownOutlined from "@ant-design/icons/DownOutlined";
import styled, { StyledComponent } from "styled-components";
import Img from "../imgs/image.jpg";
import WrapperContainer from "../components/WrapperContainer";

const IndexStyle: StyledComponent<"div", any, {}, never> = styled.div`
  background-image: url(${Img});
`;

const Index: React.FC = () => (
  <WrapperContainer>
    <IndexStyle className="w-full max-h-screen min-h-screen bg-no-repeat bg-cover bg-opacity-25 flex flex-col-reverse">
      <div className="text-center">
        <h1 className="text-6xl font-decorative">Marcus Vinicius</h1>
        <h2 className="text-3xl">Alugueis de Trajes</h2>
        <i>
          <DownOutlined />
        </i>
      </div>
    </IndexStyle>
  </WrapperContainer>
);

export default Index;
