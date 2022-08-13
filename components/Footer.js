import React from "react";

function Footer() {
  return (
    <div className="flex flex-col space-y-12 justify-center items-center mt-16  text-white ">
      <a href="#">
        <div className="rounded-lg opacity-60 hover:opacity-100 bg-gradient-to-br from-red-700 to-primary">
          <p className="px-4 py-2  shadow-2xl">Made by Tayfun Açıcı</p>
        </div>
      </a>
      <p>
        Contract address (Rinkeby): 0x2ddBc1CA73bACF2A8f31b90e6a11C5f95885d210
      </p>
    </div>
  );
}

export default Footer;
