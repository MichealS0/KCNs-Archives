import { NavBar } from "@/components/NavBar";
import Link from "next/link";

export default function HomePage(){
    return (
        <div>
            <NavBar />
            <div className="h-screen">
                <div className="w-3/5 h-[60%] flex flex-col text-center py-5 md:flex-row md:justify-center mx-auto">
                    <div className="my-auto textBackground p-4 rounded-md border-2 border-black">
                        <h1 className="text-3xl">KCN's Archives</h1>
                        <p>Embark on a cyber odyssey with "KCN's Archives"—a blog documenting a beginner's conquest of Hack The Box challenges. Join me on this riveting journey through triumphs and pitfalls. As a personal blog, KCN's Archives shares experiences, not tutorials. Explore the thrill of HTB through a unique, narrative lens.</p>
                    </div>
                    <div className="my-auto">
                        <img src="/Retro Computer.png" />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <Link href='/writeups' className="p-5 px-[20%] textBackground border-2 border-black rounded-lg hover:bg-white hover:text-black duration-300">
                        <button className="">Archives</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}