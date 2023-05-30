import Header from "@/components/Header";
// import { UnderLine } from "@/components/UnderLine";
import About from "@/components/About";
import Join from "@/components/Join";
import Contact from "@/components/Contact";
import NewsLetter from "@/components/NewsLetter";
export default function Home() {
    return (
    <>
        <Header />
        <About />
        <Join />
        {/* <Contact /> */}
        <NewsLetter />
    </>
    );
}