import React from "react";

const Header = () => {
  return (
    <header className="bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://knovator.com/wp-content/uploads/2023/08/Knovator.svg"
            alt="Knovator Logo"
            height="40"
          />
          <h1 className="ms-3 mb-0">Job Board</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
