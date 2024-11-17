import { getPosts } from "@/app/get-posts";

export async function GET() {
  const posts = await getPosts();
  const max = 100; // max returned posts
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Saad Bencherif</title>
    <subtitle>Essays</subtitle>
    <link href="https://saadbencherif.com/atom" rel="self"/>
    <link href="https://saadbencherif.com/"/>
    <updated>${posts[0].date}</updated>
    <id>https://saadbencherif.com/</id>
    <author>
      <name>Saad Bencherif</name>
      <email>saad@presti.ai</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      const dateMatch = post.date.match(/\d{4}/);
      if (!dateMatch) return "";
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://saadbencherif.com/${dateMatch[0]}/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`;
    }, "")}
  </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  );
}
