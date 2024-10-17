import NavHeader from "../components/NavHeader";

const heading = {
  h1: {
    title: "Liên Hệ",
  },
};

const crumbs = [
  { href: "/", label: "Trang chủ" },
  { href: "/lien-he", label: "Liên hệ" },
];

const Header = () => {
  return <NavHeader crumbs={crumbs} heading={heading} />;
};

export default Header;
