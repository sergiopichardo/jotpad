import MobileDrawer from "@/components/mobile-drawer";
import MobileNavigation from "@/components/mobile-nav";
import Sidebar from "@/components/sidebar";

type AppLayoutProps = {
    children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="bg-white h-screen relative border-2">
            <Sidebar />
            <MobileNavigation />
            <MobileDrawer />
            {children}
        </div>
    );
}

export default AppLayout;