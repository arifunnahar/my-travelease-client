import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';
import { RiKeyboardBoxLine } from "react-icons/ri";
import { TbUsersGroup } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
   import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
     const { signOutUserFunc, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOutUserFunc()
      .then(() => {
        setUser(null);
        window.location.href = "/";
      })
      .catch((err) => console.log(err.message));
  };
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* Main Content */}
            <div className="drawer-content">
                
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M9 4v16"></path>
                            <path d="M14 10l2 2l-2 2"></path>
                        </svg>
                    </label>
                    <div className="px-4 font-bold text-lg">Dashboard</div>
                </nav>

                {/* Page content */}
            

                <div className="p-4">
                <Outlet />
                </div>

            </div>

            {/* Sidebar */}
            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    
                    
                    
                    {/* Sidebar content */}
                    <ul className="menu w-full grow">
                        {/* Home */}
                        <li>
                            <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip=" Home">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                                <span className="is-drawer-close:hidden"> Home</span>
                            </Link>
                        </li>

                        
                        <li>
                        <Link to="/dashboard" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard Home">
                            <RiKeyboardBoxLine />
                            <span className="is-drawer-close:hidden">Dashboard Home</span>
                        </Link>
                        </li>

                      
                        

                        
                        


                        


                      {/* Profile */}
                        <li>
                            <Link to="/dashboard/profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                    <circle cx="12" cy="8" r="4"></circle>
                                    <path d="M6 20v-2a6 6 0 0 1 12 0v2"></path>
                                </svg>
                                <span className="is-drawer-close:hidden">Profile</span>
                            </Link>
                        </li>





                        {/* Logout */}
                    <li className="mt-auto w-full">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-start gap-2 px-4 py-2 hover:bg-gray-200 rounded"
                        >
                            {/* Icon  */}
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            fill="none"
                            stroke="currentColor"
                            className="w-6 h-6 flex-none"
                            >
                            <path d="M17 16l4-4m0 0l-4-4m4 4H7"></path>
                            <path d="M7 16v1a2 2 0 0 0 2 2h6"></path>
                            <path d="M7 6v-1a2 2 0 0 1 2-2h6"></path>
                            </svg>

    
                            <span className="is-drawer-close:hidden">Logout</span>
                        </button>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
