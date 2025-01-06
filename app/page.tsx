import Achievements from "@/components/Achievements";
import Approach from "@/components/Approach";
import Blogs from "@/components/Blogs";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden">
      <FloatingNav navItems={navItems} />
      <div className="max-w-7xl w-full pt-16">
        <Hero />
        <Grid />
        <RecentProjects />
        <Achievements />
        <Experience/>
        <Approach/>
        <Blogs/>
        <Footer/>
      </div>
    </main>
  )
}
