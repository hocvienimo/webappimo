import NavHeader from "../../../components/moduls/NavHeader";

const heading = {
  h1: {
    title: "Thiết Kế Web Theo Yêu Cầu",
  },
};

const crumbs = [
  { href: "/", label: "Trang chủ" },
  { href: "/dich-vu-marketing-online", label: "Dịch vụ" },
  { href: "/thiet-ke-web-theo-yeu-cau", label: "Thiết Kế Web Theo Yêu Cầu" },
];

const Header = () => {
  return <NavHeader crumbs={crumbs} heading={heading} />;
};

export default Header;
