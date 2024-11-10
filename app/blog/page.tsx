import Link from "next/link";
import fetchData from "../utility/fetchData";

export default async function Blog() {
	const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
	console.log(posts);

	return (
		<>
			<main className="okej">
				<p>testing fetching data</p>
				<p>fetched data:</p>

				{posts
					.slice(0, 5)
					.map((post: { id: number; title: string; body: string }) => (
						<div className="border border-red-500" key={post.id}>
							<h2 className="text-xl font-bold">{post.title}</h2>
							<p>{post.body.slice(0, 50)}...</p>
							<Link href={`/blog/${post.id}`}>Read more</Link>
						</div>
					))}
			</main>
		</>
	);
}
