import { GraphQLClient, gql } from "graphql-request";
import {BlogCard } from '/components/BlogCard';
import { NavBar } from '/components/NavBar';

const graphcms = new GraphQLClient("https://api-ap-northeast-1.hygraph.com/v2/clqy2k2uqv58s01ui2p8u60l8/master");

const QUERY = gql`
  {
    entries {
      slug
      id
      description
      title
      content
      coverImage {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { entries } = await graphcms.request(QUERY);
  return {
    props: {
      entries,
    },
  };
}

export default function Home({ entries }) {
  return (
    <main className="h-screen">
      <NavBar currentPage="/" className=''/>
      <div className="w-full flex justify-center">
        <div className="p-5 md:w-3/4 sm:w-5/6 justify-start flex flex-wrap gap-2 items-center">
          {entries.map((entry, index) => (
            <BlogCard slug={entry.slug} title={entry.title} description={entry.description} coverPhoto={entry.coverImage.url}/>))}
        </div>
      </div>
    </main>
  );
}
