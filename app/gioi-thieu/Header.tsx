import NavHeader from "@/components/moduls/NavHeader";

const heading = {
  h1: {
    title: "Về Chúng Tôi",
  },
};

const crumbs = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
];

const Header = () => {
  return <NavHeader crumbs={crumbs} heading={heading} />;
};

export default Header;
