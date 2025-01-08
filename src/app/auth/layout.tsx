import Navbar from "@/components/common/navbar";
import SidePhoto from "@/components/common/sidephoto";

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={``}
        >
            <div className="flex gap-8">
            <SidePhoto/>
            <div className="container p-5  flex flex-col w-7/12">
            <Navbar/>
            {children}
           
            

            </div>
            </div>
            
          
        </body>
      </html>
    );
  }