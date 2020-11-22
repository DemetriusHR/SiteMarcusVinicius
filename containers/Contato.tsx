import { GoogleApiWrapper, Map, IMapProps, Marker, IMarkerProps } from "google-maps-react";
import EnvironmentOutlined from "@ant-design/icons/EnvironmentOutlined";
import CompassOutlined from "@ant-design/icons/CompassOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import FacebookOutlined from "@ant-design/icons/FacebookOutlined";

import WrapperContainer from "../components/WrapperContainer";
import Navbar from "../components/Navbar";

interface IContato {
  google: any;
  loaded: boolean;
}

interface IMap extends IMapProps {
  zoom: number;
}

const MapComponent: React.FC<IMap> = ({ ...props }) => (<Map {...props} />);

interface IMarker extends IMarkerProps {
  name: string;
  title: string;
  position: {
    lat: number;
    lng: number;
  };
}

const MarkerComponent: React.FC<IMarker> = ({ ...props }) => (<Marker {...props} />);

const Contato: React.FC<IContato> = ({ loaded, google }) => (
  <WrapperContainer>
    <div id="contato" className="pt-24 px-8">
      <Navbar name="Contato" />
      <div className="flex mt-12 justify-center">
        <div>
          <div className="w-full h-64">
            {!loaded ? (
              <div>Loading...</div>
            ) : (
              <MapComponent
                google={google}
                style={{
                  position: "relative",
                  width: "25rem",
                  height: "15rem",
                }}
                initialCenter={{
                  lat: -21.93435629906899,
                  lng: -50.52137117542768,
                }}
                zoom={14}
              >
                <MarkerComponent
                  name="Marcus Vinícius"
                  position={{
                    lat: -21.93435629906899,
                    lng: -50.52137117542768,
                  }}
                  title="Marcus Vinícius"
                />
              </MapComponent>
            )}
          </div>
          <h2 className="my-4 text-xl text-center">Encontre-nos por aqui</h2>
          <div className="flex my-2">
            <EnvironmentOutlined className="mr-4 text-lg" />
            <p>Rua Nhambiquaras, 73 - Centro – Tupã, SP</p>
          </div>
          <div className="flex my-2">
            <CompassOutlined className="mr-4 text-lg" />
            <p>CEP 17600-060</p>
          </div>
          <div className="flex my-2">
            <PhoneOutlined className="mr-4 text-lg" />
            <p>+55 14 3441-7192</p>
          </div>
          <div className="flex my-2">
            <FacebookOutlined className="mr-4 text-lg" />
            <a href="https://www.facebook.com/marcus.vinicius.trajes">
              Marcus Vinícius
            </a>
          </div>
        </div>
      </div>
    </div>
  </WrapperContainer>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyAIqkISgLorbZ1DoIx0IB4E2elQ-UajnGw",
})(Contato);
