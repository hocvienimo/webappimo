import NavHeader from "../../components/NavHeader";

const heading = {
  h1: {
    title: "Dịch Vụ Marketing Online",
  },
};

const crumbs = [
  { href: "/", label: "Trang chủ" },
  { href: "/dich-vu-marketing-online", label: "Dịch vụ" },
];

const Header = () => {
  return <NavHeader crumbs={crumbs} heading={heading} />;
};

export default Header;
