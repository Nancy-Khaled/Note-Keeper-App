import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Created by Nancy Khaled, Copyright &copy; {currentYear}.</p>
    </footer>
  );
}

export default Footer;
