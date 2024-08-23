import NavHeader from "../components/NavHeader";

const heading = {
    h1: {
        title: 'Về Chúng Tôi',
    }
}

const crumbs = [
    { href: '/', label: 'Trang chủ' },
    { href: '/about', label: 'Giới thiệu' },
  ];

const Header = () => {
    return (
      <NavHeader crumbs={crumbs} heading={heading}/>
    )
  }
  
export default Header