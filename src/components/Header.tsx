const Header = () => {
  const a = 5;
  return (
    <div className="header">
      <button onClick={() => localStorage.clear()} className="logo">Logo</button>
    </div>
  );
};

export default Header;
