import { GraphQLClient, gql } from "graphql-request";
import {MarkdownRenderer} from '../../components/MarkdownRender';
import { NavBar } from "@/components/NavBar";

const graphcms = new GraphQLClient("https://api-ap-northeast-1.hygraph.com/v2/clqy2k2uqv58s01ui2p8u60l8/master");

const QUERY = gql`
query MyQuery($slug: String!) {
    entry(where: {slug: $slug}) {
        slug
        title
        description
        content {
            markdown
        }
        coverImage {
          url
        }
    }
  }
  
`;

const SLUGLIST = gql`
{
    entries {
        slug
    }
}`

export async function getStaticPaths(){
    const {entries} = await graphcms.request(SLUGLIST);
    return {
        paths: entries.map((entry) => ({params: {slug: entry.slug}})),
        fallback: false,
    };
}

export async function getStaticProps( {params}) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {slug});
    const entry = data.entry;
    return {
        props: {
            entry,
        },
    };  
}

export default function BlogPost({entry}){
    return (
        <div className="">
        <NavBar />
        <main className="bg-gray-100 w-5/6 md:w-2/5 mx-auto px-4">
            <div className="flex flex-col items-center">
                <h1 className=" text-4xl font-bold p-5">{entry.title}</h1>
                <img src={entry.coverImage.url} className="w-2/3"/>
                <h4 className="p-2 text-gray-700">{entry.description}</h4>
                <MarkdownRenderer MarkdownText={entry.content.markdown}/>
            </div>
            
        </main>
        </div>
    )
}