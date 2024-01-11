export default function FilterSearch() {
    return (
        <div className="flex gap-4 w-screen p-2 md:mx-auto lg:mx-[25%]">
            <button className="text-xs md:text-base w-[100px] rounded-full textBackground border-2 border-black">All</button>
            <button className="text-xs md:text-base w-[100px] rounded-full textBackground border-2 border-black">Easy</button>
            <button className="text-xs md:text-base w-[100px] rounded-full textBackground border-2 border-black">Medium</button>
            <button className="text-xs md:text-base w-[100px] rounded-full textBackground border-2 border-black">Hard</button>
            <button className="text-xs md:text-base w-[100px] rounded-full textBackground border-2 border-black">Insane</button>
        </div>
    )
}