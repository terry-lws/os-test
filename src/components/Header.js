import {
    Box,
    HStack,
    Image,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerHeader,
    Button,
    useDisclosure,
    useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../images/logo.png";

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
            color="#2F2F2F"
            position="absolute"
            background="#ffffff"
            h={95}
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
            top={0}
            left={0}
            right={0}
            bottom={0}
            display="flex"
            alignItems="center"
            zIndex="1"
        >
            <Box maxWidth="1440px" pl="9.375rem">
                <HStack spacing="72px">
                    <HStack spacing="12px" cursor="pointer">
                        <div>
                            <Image src={logo} width="90px" height="30px" alt="logo" />
                        </div>
                        <Text display="flex" fontSize="14.5px" fontFamily="Poppins" textAlign="left">Online Service<br />Test page</Text>
                    </HStack>
                    {isMobile && 
                    <Button colorScheme='blue' onClick={onOpen}>
                        Open
                    </Button>
                    }
                    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                      <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                    <HStack spacing={23} fontFamily="Arial" fontSize={17}>
                        <Text cursor="pointer">Overview</Text>
                        <Text cursor="pointer">The Challenge</Text>
                        <Text cursor="pointer">Schools</Text>
                        <Text cursor="pointer">Results</Text>
                    </HStack>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;