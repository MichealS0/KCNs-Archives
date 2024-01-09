import Link from "next/link"

export function BlogCard({slug, title, description, coverPhoto, date, difficulty}){
    return (
        <div className=" max-w-sm overflow-hidden hover:scale-[105%] duration-300">
                <div className=" h-[360px] overflow-hidden flex flex-col justify-center">
                    <Link href={"/entries/"+slug} className=" cursor-pointer">
                        <div className="h-fit textBackground border-2 border-black p-2 rounded-2xl">
                            <img src={coverPhoto} width="xs" className="duration-300 pb-2 rounded-2xl hover:scale-[103%] overflow-hidden"/>
                            <div className="rounded-lg hover:scale-[103%] duration-300">
                                <h1 className=" text-2xl font-bold text-black p-2 hover:underline">{title}</h1>
                                <h5 className=" text-black p-2 pt-0 hover:underline">{description}</h5>
                            </div>
                        </div>
                    </Link>
                </div>
        </div>
    )
}