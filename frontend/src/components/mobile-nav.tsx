import { Avatar, Flex, IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Logo } from "./icons";

function MobileNavigation() {
    return (
        <nav className="flex justify-between p-4 md:hidden">
            <Flex 
                gap="2"
                align="center"
            >
                <Logo className="w-7 h-7" />
                <span className="font-bold text-gray-700">
                    jotpad
                </span>
            </Flex>
            <Flex 
                gap='2'
                align="center"
            >
                <Avatar 
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                    size="1"
                    radius="full"
                />
                <IconButton
                    variant="ghost"
                    radius="full"
                    color="gray"
                    size="1"
                >
                    <HamburgerMenuIcon 
                        width="18"
                        height="18"
                    />
                </IconButton>
            </Flex>
        </nav>
    );
}

export default MobileNavigation;