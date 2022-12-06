import {Container, Navbar, NavbarMenu} from "./Common";

export default function Header() {
    return (
        <Navbar>
            <Container className={'flex justify-between items-center'}>
                <div className={'flex items-center'}>
                    <img src="/src/assets/ali.png" alt="Ali profile picture"/>

                    <NavbarMenu className={'ml-16'}>
                        Ali
                    </NavbarMenu>
                </div>

                <NavbarMenu>
                    Logout
                </NavbarMenu>
            </Container>
        </Navbar>
    )
}