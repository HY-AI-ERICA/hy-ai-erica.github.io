// src/app/components/Header.js
import Image from 'next/image';
import logo from '../../public/ico_logo.png';

const Header = () => (
  <header className="bg-gray-100 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1>
        <a href="/">
          <Image src={logo} alt="kakao tech" width={50} height={50} />
        </a>
      </h1>
      <button type="button" className="btn_toggle" aria-expanded="false">
        <span className="ir_pm">메뉴 열기</span>
      </button>
    </div>
  </header>
);

export default Header;
