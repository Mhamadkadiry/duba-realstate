import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, HStack, Button } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import lg1 from '../assets/images/lg1.png';
const data = {

};
const Navbar = () => (
<Flex p="2" borderBottom="1px" borderColor="gray.200">
    <Box alignItems="center" display="flex" fontSize="xl" color="blue.300" fontWeight="bold">
        <Image src={lg1} width={60} height={60} />
        <Link href="/">Duba</Link>
    </Box>
    <Spacer />
    <Box display={{ base: "none", md: "flex" }} p="2">
        <HStack as="nav" spacing="5">
            <Link href="/" passHref>
              <Button icon={<FcHome />} variant="nav"> Home </Button>
            </Link>
            <Link href="/search" passHref>
              <Button variant="nav"> Search </Button>
            </Link>
            <Link  href="/search?purpose=for-sale" passHref>
              <Button variant="nav"> Buy Property </Button>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <Button variant="nav"> Rent Property </Button>
            </Link>
                {/* <Link href="/" passHref>
                    <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                    <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                    <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                    <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                </Link> */}
        </HStack>
    </Box>
    <Box display={{ base: "flex", md: "none" }}>
        <Menu>
            <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
            <MenuList>
                <Link href="/" passHref>
                    <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                    <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                    <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                    <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                </Link>
            </MenuList>
        </Menu>
    </Box>
</Flex>
)

export default Navbar;