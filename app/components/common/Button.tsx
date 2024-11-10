import cn from "../../utility/cn";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Button = ({ children, className }: Props) => {
	return (
		<>
			<button className={cn("py-4 px-2", className)}>{children}</button>
		</>
	);
};
