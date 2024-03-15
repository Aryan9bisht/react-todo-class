import React from 'react';

// Define headerStyle function outside the Header component
const headerStyle = () => {
  return {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  };
};

function Header() {
  return (
    <header style={headerStyle()}>
      <h1>To-Do List</h1>
    </header>
  );
}

export default Header;
