import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
	invert?: boolean;
	variant?: "white" | "primary" | "black";
} & (
	| React.ComponentPropsWithoutRef<typeof Link>
	| (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
);

export function Button({
	className,
	children,
	variant = "primary",
	...props
}: ButtonProps) {
	className = clsx(
		className,
		"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition ",
		{
			"bg-white text-black": variant === "white",
			"bg-primary text-white": variant === "primary",
			"bg-black text-white": variant === "black",
		},
	);

	const inner = <span className="relative top-px">{children}</span>;

	if (typeof props.href === "undefined") {
		return (
			<button className={className} {...props}>
				{inner}
			</button>
		);
	}

	return (
		<Link className={className} {...props}>
			{inner}
		</Link>
	);
}
