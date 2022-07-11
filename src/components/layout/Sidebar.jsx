import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../../context/context';
import Google from '../../assets/svg/Google';
import Linkedin from '../../assets/svg/Linkedin';
import Instagram from '../../assets/svg/Instagram';

const LinkNavItems = [
  { name: 'Dashboard', path: '/home' },
  { name: 'Product', path: '/productlist' },
  { name: 'CostumerList', path: '/costumerlist' },
];

export default function Sidebar() {
  const activeClassName = 'text-black font-medium text-base';
  const { state } = useContext(MyContext);

  return (
    <div className="sm:w-64 bg-gray-50 border-r border-gray-200 overflow-auto hover:overflow-scroll h-screen">
      <div className="ml-5 py-4">
      <img className='ml-5' src="https://static.wixstatic.com/media/b51702_2e867afbfd6f4f4b993edb7078c9af35~mv2.png/v1/crop/x_0,y_171,w_2500,h_965/fill/w_158,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/timelineArtboard%201_3xasd.png" alt="icon" />
        </div>
        <div className="mb-8">
        <h1 className="pt-3.5 font-bold text-center">
          Hallo {state.login.username}
        </h1>
      </div>
      {LinkNavItems.map((item) => (
        <div key={item.name} className="mx-6 mb-2">
          <h3 className="mb-2 p-1.5 text-base font-medium inline-block text-gray-400 hover:text-black transition-all duration-280 cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          </h3>
        </div>
      ))}
      <div className="mb-10 px-8">
        <hr />
      </div>

      
      <div className="text-center text-gray-700 p-4 pt-52">
    <h4 className="text-gray-800 " href="https://tailwind-elements.com/"><b>QYOS.id</b></h4>
  </div>
    <div className="flex justify-center mb-2">
      <a href="https://www.qyos.id/" target="_blank"><Google /></a>
      <a href="https://www.instagram.com/qyos_id/?igshid=YmMyMTA2M2Y=" target="_blank"><Instagram /></a>
      <a href="https://www.linkedin.com/company/qyos/" target="_blank"><Linkedin /></a>
    </div>
    </div>
  );
}
