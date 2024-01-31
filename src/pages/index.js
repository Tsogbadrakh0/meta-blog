import {
    Highlight,
    Trending,
    Blog,
}from "@/components/index";

  
  export default function Home(props) {
    const { highlights, trendings, blogs} = props;
  
    return (
      <div className="flex flex-col  items-center ">
        <Highlight highlights={highlights} />
        <Trending trendings={trendings} />
        <Blog blogs={blogs} />
      </div>
    );
  }
  
  export const getStaticProps = async () => {
    const highlight = await fetch("https://dev.to/api/articles?per_page=1&top=1");
    const trending = await fetch("https://dev.to/api/articles?top=1&per_page=4");
    const blog = await fetch("https://dev.to/api/articles?top=2&per_page=9");
    const highlights = await highlight.json();
    const trendings = await trending.json();
    const blogs = await blog.json();
  
    return {
      props: { highlights, trendings, blogs },
    };
  };