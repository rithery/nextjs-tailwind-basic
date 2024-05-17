import React from "react";

async function getPost() {
  const res = await fetch(
    "https://dummyjson.com/posts?limit=4&select=title,body"
  );
  const data = await res.json();
  return data.posts;
}

const BlogPost: React.FC = async () => {
  const article = await getPost();

  return (
    <main>
      <div className="font-semibold">Prompt Article</div>
      <div>
        {article.map((val: any, index: number) => (
          <article key={index}>
            <h2>{val.title}</h2>
            <p>{val.body}</p>
            <br />
          </article>
        ))}
      </div>
    </main>
  );
};

export default BlogPost;
