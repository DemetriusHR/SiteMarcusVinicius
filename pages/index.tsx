import * as React from "react";
import Layout from "../components/Layout";
import Index from "../containers/Index";
import AEmpresa from "../containers/AEmpresa";
import Trajes from "../containers/Trajes";
import Alugueis from "../containers/Alugueis";
import Contato from "../containers/Contato";
import BarraInferior from "../containers/BarraInferior";

const IndexPage: React.FC = () => (
  <Layout>
    <Index />
    <AEmpresa />
    <Trajes />
    <Alugueis />
    <Contato />
    <BarraInferior />
  </Layout>
);

export default IndexPage;
