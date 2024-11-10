import Image from "next/image";
import Logo from "../public/next.svg";

export default function Home() {
	return (
		<main className="okej">
			<Image src={Logo} height={50} alt="okej" />
		</main>
	);
}
