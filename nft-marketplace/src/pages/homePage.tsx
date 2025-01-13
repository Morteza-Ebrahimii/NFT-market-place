import {Header} from "../components/Header";

interface HomePageProps {
    setIsToggleHomburgerMenu: (isToggleHomburgerMenu: boolean) => void;
}
export function HomePage({ setIsToggleHomburgerMenu }: HomePageProps){
    return (
        <Header  setIsToggleHomburgerMenu={setIsToggleHomburgerMenu} />
    )
}
