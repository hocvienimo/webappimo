import NavHeader from "../components/NavHeader";

const heading = {
    h1: {
        title: 'Blog Kiến Thức',
    }
}

const crumbs = [
    { href: '/', label: 'Trang chủ' },
    { href: '/kien-thuc', label: 'Kiến thức' },
  ];

const Header = () => {
    return (
      <NavHeader crumbs={crumbs} heading={heading}/>
    )
  }
  
export default Header