import Link from "next/link"

export function BlogCard({slug, title, description, coverPhoto}){
    return (
        <div className=" max-w-sm bg-[#1e1e1e] overflow-hidden rounded-2xl hover:scale-[1.03] duration-300">
            <Link href={"/entries/"+slug} className=" hover:underline cursor-pointer">
                <div className=" h-[520px] overflow-hidden">
                <img src={coverPhoto} width="xs" className="duration-300 p-1 rounded-2xl hover:scale-110 overflow-hidden"/>
                <h1 className=" text-2xl font-bold text-white p-2">{title}</h1>
                <h5 className=" text-gray-200 px-2">{description}</h5>
            </div></Link>
        </div>
    )
}