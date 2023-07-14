import React from "react";
import Logo from "@/assets/logo";
import { FaHamburger } from "react-icons/fa";
import {MdLogout} from "react-icons/md";

interface BannerProps {
  text: string;
  onLogout: () => void;
  onToggleSidebar: () => void;
}
const Banner: React.FC<BannerProps> = ({ text, onLogout,onToggleSidebar}) => {
  const bannerText = ` ${text} `;
  

  return (
    <div className=" bg-brandPink flex items-center justify-center flex-col w-full">
      <div className="banner-text bg-slate-000 absolute left-25 top-5">{bannerText}</div>   
    <Logo className={'h-10 w-44 bg-slate-50 absolute left-10 top-5'} />
      <div>
        <button className='sidebar-button absolute left-2 top-2 ' onClick = {onToggleSidebar}><FaHamburger className="text-2xl"/></button>
        <div className="dropdown-container">
        <select className="dropdown">
          <option value="Electronic City - Garbhagudi IVF Centre">Electronic City - Garbhagudi IVF Centre</option>
          <option value="Hanumanthanagar - Garbhagudi IVF Centre">Hanumanthanagar - Garbhagudi IVF Centre</option>
          <option value="Jayanagar - Garbhagudi IVF Centre">Jayanagar - Garbhagudi IVF Centre</option>
          <option value="Kalyan Nagar - Garbhagudi IVF Centre">Kalyan Nagar - Garbhagudi IVF Centre </option>
          <option value="Marathahalli - Garbhagudi IVF Centre">Marathahalli - Garbhagudi IVF Centre</option>
          <option value="Nagarabhavi - Garbhagudi IVF Centre">Nagarabhavi - Garbhagudi IVF Centre</option>
          <option value="New BEL Road - Garbhagudi IVF Centre">New BEL Road - Garbhagudi IVF Centre</option>
        </select>
        </div>
        <button className="logout-button absoltue right-2 top-2" onClick={onLogout}><MdLogout className="text-2xl"/>Logout</button>
      <div className="banner-line" />  
      </div>
    </div>
  );
};

export default Banner;
