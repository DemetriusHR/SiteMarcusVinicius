import HomeOutlined from "@ant-design/icons/HomeOutlined";

type INavbar = {
  name: string;
};

const Navbar: React.FC<INavbar> = ({ name }) => (
  <p className="text-sm">
    <a href="#">
      <i className="pr-2">
        <HomeOutlined />
      </i>{" "}
      Ínicio
    </a>
    <span className="text-color-2 px-4">/</span>
    <span className="text-color-2">{name}</span>
  </p>
);

export default Navbar;
