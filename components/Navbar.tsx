import HomeOutlined from "@ant-design/icons/HomeOutlined";
import { Link } from "react-scroll";

type INavbar = {
  name: string;
};

const Navbar: React.FC<INavbar> = ({ name }) => (
  <p className="text-sm">
    <Link
      activeClass="active"
      to="index"
      className="cursor-pointer"
      spy={true}
      smooth={true}
      duration={500}
    >
      <i className="pr-2">
        <HomeOutlined />
      </i>{" "}
      Ínicio
    </Link>
    <span className="text-color-2 px-4">/</span>
    <span className="text-color-2">{name}</span>
  </p>
);

export default Navbar;
