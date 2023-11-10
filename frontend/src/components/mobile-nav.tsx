import { Avatar, Flex, IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Logo } from "./icons";

function MobileNavigation() {
    return (
        <nav className="flex justify-between p-4 md:hidden fixed top-0 right-0 left-0 bg-gray-100 shadow-sm">
            <div className="flex items-center space-x-2">
                <Logo className="w-8 h-8" />
                <span className="font-bold text-gray-700 text-lg">
                    jotpad
                </span>
            </div>

            <div className="flex items-center space-x-1">
                <Avatar 
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                    size="2"
                    radius="full"
                    className="hover:cursor-pointer"
                />
                <IconButton
                    variant="ghost"
                    radius="full"
                    color="gray"
                    size="3"
                    className="hover:cursor-pointer"
                >
                    <HamburgerMenuIcon 
                        width="18"
                        height="18"
                    />
                </IconButton>
            </div>
        </nav>
    );
}

export default MobileNavigation;