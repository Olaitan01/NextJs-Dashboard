import SideNav from '@/app/ui/dashboard/sidenav';
import React from 'react'

function layout({children}:{children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-xol md:flex-row md:overflow-hidden">
        <div>
            <SideNav/>
        </div>
        <div className="flex flex-grow p-6 md:overflow-y-auto md:p-12">
            
                {children}
            
        </div>
    </div>
  )
}

export default layout