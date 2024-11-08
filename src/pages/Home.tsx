import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import backgroundImage from "../assets/images/backdrop.png"
import logoUGM from "../assets/images/Lambang UGM-emas.png"

const Header = () => {
  const [fixedHeader, setFixedHeader] = useState<boolean>(false);

  function onScroll() {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      if (windowHeight > 0) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        fixedHeader ? "bg-background" : "bg-transparent",
        "fixed top-0 h-16 w-full p-2 lg:p-4 z-50 flex justify-between items-center transition-colors"
      )}
    >
      <div className="flex gap-2">
        <img src={logoUGM} className="w-8" />
        <p className="text-xs text-card-foreground tracking-tighter lg:tracking-normal">
          <span className="font-semibold">FAKULTAS TEKNIK</span>
          <br />
          UNIVERSITAS GADJAH MADA
        </p>
      </div>
    </header>
  );
};

const Hero = () => {

  return (
    <div className="w-full h-full relative font-poppins">
        <img
          src={backgroundImage}
          className="object-cover w-full h-full absolute top-0 brightness-50"
        />

      <div className="w-full h-[calc(100dvh-72px)] gap-2 p-4 lg:p-16 absolute bottom-0 bg-transparent flex flex-col lg:flex-row-reverse justify-center items-center">
        <div className="flex flex-col gap-2 px-2 lg:pr-28">
            <Link to={"/submission"}>
              <Button className="w-fit">Isi Survei</Button>
            </Link>
        </div>
      </div>

    </div>
  );
};


const Home = () => {
  return (
    <div className="w-dvw lg:w-full h-dvh">
      <Header />
      <Hero />
    </div>
  )
}

export default Home