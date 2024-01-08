import Link from "next/link"

export function BlogCard({slug, title, description, coverPhoto}){
    return (
        <div className=" max-w-sm overflow-hidden hover:scale-[1.03] duration-300">
            <Link href={"/entries/"+slug} className=" hover:underline cursor-pointer">
                <div className=" h-[360px] overflow-hidden flex flex-col justify-center">
                    <div className="h-fit bg-[#1e1e1e] p-2 rounded-2xl">
                        <img src={coverPhoto} width="xs" className="duration-300 p-1 rounded-2xl hover:scale-110 overflow-hidden"/>
                        <h1 className=" text-2xl font-bold text-white p-2">{title}</h1>
                        <h5 className=" text-gray-200 px-2">{description}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}