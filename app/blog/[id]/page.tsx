import fetchData from "@/app/utility/fetchData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

	return posts.map((post: { id: number }) => ({
		id: post.id.toString(),
	}));
}

export default async function PostDetails({
	params,
}: {
	params: Promise<{ id: number }>;
}) {
	const awaitParams = await params;
	const post = await fetchData(
		`https://jsonplaceholder.typicode.com/posts/${awaitParams.id}`
	);

	if (!post) {
		notFound();
	}

	return (
		<main className="okej">
			<p>testing fetching data</p>
			<p>fetched data details:</p>

			<p>{post.id}</p>
			<p>{post.body}</p>
		</main>
	);
}
