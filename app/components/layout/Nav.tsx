import Link from "next/link";

export default function Nav() {
	return (
		<nav>
			<h1>navigation</h1>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/blog">blog</Link>
		</nav>
	);
}
