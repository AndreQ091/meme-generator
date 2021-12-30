import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className={"header"}>
      <img className={"header__img"} alt="" src="https://pngicon.ru/file/uploads/trollfeys.png" />
      <p>MemeGen v1.0.0</p>
    </header>
  );
};

export default Header;
