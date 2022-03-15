import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'
import {} from '@heroicons/react/outline'

function Layout({children}) {
    return (
        <div className="min-w-full min-h-screen h-screen overflow-hidden bg-blue-300">
        <TopBar/>
        <SideBar/>
        <main>
            {children}
        </main>
        </div>
    );
}

export default Layout