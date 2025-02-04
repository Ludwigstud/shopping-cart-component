import Cart from './Cart';

const Header = ({ total, onRemove }) => {
  return (
    <div className="header">
      <img
        src="https://i.ebayimg.com/images/g/P8AAAOSww-hlmQCC/s-l400.jpg"
        alt="logo"
      />
      <Cart 
        total={total} 
        onRemove={onRemove}
      />
    </div>
  );
};

export default Header;