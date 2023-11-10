import MobileDrawer from "@/components/mobile-drawer";
import MobileNavigation from "@/components/mobile-nav";
import Sidebar from "@/components/sidebar";

type AppLayoutProps = {
    children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="h-screen border-2 z-0">
            <div className="relative z-10">
                <MobileNavigation />
            </div>
            <Sidebar />
            <MobileDrawer />
            {children}
        </div>
    );
}

export default AppLayout;