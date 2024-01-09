import { NavBar } from "@/components/NavBar";

export default function About(){
    return (
        <div className="background">
            <NavBar currentPage="/about"/>
            <main className="w-full h-screen py-10">
                <div className="w-5/6 md:w-3/4 mx-auto textBackground p-2 mt-10 border-2 border-black rounded-3xl">
                    <h1 className="flex justify-center w-full text-2xl font-bold p-2 text-black">About this page</h1>
                    <p className="p-2 text-black">
                        Hey there, This website serves as my digital playground, a realm dedicated to unraveling the mysteries of cybersecurity Capture The Flag (CTF) challenges. It's more than just a repository; it's where I decode, dissect, and document my conquests in the cyber wilderness.
                        <br />
                        <br />
                        My primary goal is to conquer CTF challenges and meticulously craft comprehensive write-ups, not solely for personal documentation but as a beacon for aspiring enthusiasts navigating the labyrinth of cybersecurity. I aspire for these write-ups to serve as a testament to my dedication, offering insights into my problem-solving strategies, solutions, and discoveries.
                        <br />
                        <br />
                        My aspiration is to share detailed write-ups, not just as personal records but as guiding lights for navigating the cyber labyrinth. Embracing my beginner status, this platform serves as a humble quest for knowledge, translating intricate discoveries into accessible insights.
                        <br />
                        <br />
                        P.S. I'm just getting started on this cybersecurity adventure, but I'm excited to grow and learn together with you!
                    </p>    
                </div>
                <div className="p-2">
                    <div className="flex justify-center gap-5 overflow-hidden">
                        <button className="textBackground border-2 border-[#1e1e1e] rounded-lg p-2 hover:bg-white duration-300 hover:border-2"><a className="p-5 text-white hover:text-[#1e1e1e] duration-300" href="https://github.com/MichealS0">Github</a></button>
                        <button className="textBackground rounded-lg p-2 border-2 border-[#1e1e1e] hover:bg-white duration-300 hover:border-2"><a className="p-5 text-white hover:text-[#1e1e1e] duration-300" href="https://www.linkedin.com/in/awaab-kheiri-346242212/">LinkedIn</a></button>
                        <button className="textBackground rounded-lg p-2 border-2 border-[#1e1e1e] hover:border-2 hover:bg-white duration-300"><a className="p-5 text-white hover:text-[#1e1e1e] duration-300" href="https://app.hackthebox.com/users/778430">HTB</a></button>
                    </div>
                </div>
                
            </main>
        </div>
    )
}