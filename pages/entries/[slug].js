import { GraphQLClient, gql } from "graphql-request";
import {MarkdownRenderer, RichTextRenderer} from '../../components/RichTextRender';
import { NavBar } from "@/components/NavBar";

const graphcms = new GraphQLClient("https://api-ap-northeast-1.hygraph.com/v2/clqy2k2uqv58s01ui2p8u60l8/master");

const QUERY = gql`
query MyQuery($slug: String!) {
    entry(where: { slug: $slug }) {
      slug
      coverImage {
        url
      }
      title
      description
      content {
        raw
      }
      difficulty
      entryDate
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
        <div>
        <NavBar />
        <main className="textBackground border-2 border-black w-5/6 md:w-2/5 mx-auto px-4 mt-4 rounded-3xl">
            <div className="flex flex-col items-center">
                <h1 className=" text-4xl font-bold p-5">{entry.title}</h1>
                <img src={entry.coverImage.url} className="w-2/3"/>
                <h4 className="p-2 text-black underline">{entry.description}</h4>
                <RichTextRenderer content={entry.content.raw}/>
            </div>
            
        </main>
        </div>
    )
}