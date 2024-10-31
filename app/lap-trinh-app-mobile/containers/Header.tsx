import NavHeader from "../../../components/moduls/NavHeader";

const heading = {
  h1: {
    title: "Thiết Kế App Mobile",
  },
};

const crumbs = [
  { href: "/", label: "Trang chủ" },
  { href: "/dich-vu-marketing-online", label: "Dịch vụ" },
  { href: "/lap-trinh-app-mobile", label: "Thiết Kế App Mobile Theo Yêu Cầu" },
];

const Header = () => {
  return <NavHeader crumbs={crumbs} heading={heading} />;
};

export default Header;
