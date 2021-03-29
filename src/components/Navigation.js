import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
    {/* a href="#"  이렇게 경로를 쓰는게 아니라 
        Link로 링크연결!! 링크는 라우터 안에있어야한다!
    */}
    
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;