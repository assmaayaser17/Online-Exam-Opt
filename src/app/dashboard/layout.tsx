import SearchBar from '@/components/common/searchbar';
import SideBar from '@/components/common/sidebar';
import React from 'react'

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={``}
        >
            <div className="flex gap-24 p-5">
            <SideBar/>
           <div className="flex flex-col gap-16 w-[1063px] h-[988px]">
           <SearchBar/>
              {children}
           </div>
           </div>
        </body>
      </html>
    );
  }