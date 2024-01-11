import { NavBar } from "@/components/NavBar";

export default function HomePage(){
    return (
        <div>
            <NavBar />
            <div className="h-screen">
                <div className="w-3/5 h-[60%] flex flex-col text-center py-5 md:flex-row md:justify-center mx-auto">
                    <div className="my-auto textBackground p-4 rounded-md border-2 border-black">
                        <h1 className="text-3xl">KCN's Archives</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur libero quaerat sed explicabo autem asperiores quasi in, facilis placeat iure officia perferendis voluptate quod mollitia iusto cupiditate non dolore assumenda eaque amet dignissimos rem, deleniti alias excepturi. In mollitia enim, ipsam tempore delectus sed dolores nobis. Sit aliquid laboriosam accusamus!</p>
                    </div>
                    <div className="my-auto">
                        <img src="/Retro Computer.png" />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button className="p-5 px-[20%] textBackground border-2 border-black rounded-lg hover:bg-white hover:text-black duration-300">Archives</button>
                </div>
            </div>
        </div>
    )
}