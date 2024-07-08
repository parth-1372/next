import Hero from "@/components/Hero";
import {FloatingNav} from "../components/ui/FloatingNav";
import { link } from "fs";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { Grid } from "@react-three/drei";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100 text-white">
      <div className="max-w-7xl w-full">
       <FloatingNav
       navItems={[
        {name:'Home',
         link:'/',
         icon: <FaHome/>
        }
       ]}
       />
       <Hero/>
       <Grid/>
       <RecentProjects/>
      </div>
    </main>
  );
}
