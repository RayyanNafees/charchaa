"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Logo } from "@/components/Logo";
import { socialMediaProfiles } from "@/components/SocialMedia";

const navigation = [
	{
		title: "Work",
		links: [
			{ title: "FamilyFund", href: "/work/family-fund" },
			{ title: "Unseal", href: "/work/unseal" },
			{ title: "Phobia", href: "/work/phobia" },
			{
				title: (
					<>
						See all <span aria-hidden="true">&rarr;</span>
					</>
				),
				href: "/work",
			},
		],
	},
	{
		title: "Company",
		links: [
			{ title: "About", href: "/about" },
			{ title: "Process", href: "/process" },
			{ title: "Blog", href: "/blog" },
			{ title: "Contact us", href: "/contact" },
		],
	},
	{
		title: "Connect",
		links: socialMediaProfiles,
	},
];

function Navigation() {
	return (
		<nav>
			<ul className="grid grid-cols-2 gap-8 sm:grid-cols-3">
				<li>
					<div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
						Contact Us
					</div>
					<ul className="mt-4 text-sm text-neutral-700">
						<li className="mt-4">
							<Link
								href="mailto:charchaa.in@gmail.com"
								className="transition hover:text-neutral-950 flex items-center gap-x-2"
							>
								<Mail size={30} />
								charchaa.in@gmail.com
							</Link>
						</li>
						<li className="mt-4">
							<Link
								href="tel:+917500860576"
								className="transition hover:text-neutral-950 flex items-center gap-x-2"
							>
								<Phone size={30} /> 75008 60576
							</Link>
						</li>
						<li className="mt-4">
							<Link
								href="tel:+916398001680"
								className="transition hover:text-neutral-950 flex items-center gap-x-2"
							>
								<Phone size={30} /> 63980 01680
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
						Address
					</div>
					<ul className="mt-4 text-sm text-neutral-700">
						<li className="mt-4">
							<span className="transition hover:text-neutral-950">
								Lal Diggi Road, Aligarh <br />
								Uttar Pradesh, India
							</span>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
			<path
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 3 10 .5v2H0v1h10v2L16 3Z"
			/>
		</svg>
	);
}

function NewsletterForm() {
	return (
		<form className="max-w-sm">
			<h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
				Let&lsquo;s Talk!
			</h2>
			<p className="mt-4 text-sm text-neutral-700">
				Leave your number, and we&lsquo;ll ring you back shortly!
			</p>
			<div className="relative mt-6">
				<input
					type="tel"
					placeholder="Phone Number"
					autoComplete="tel"
					aria-label="Phone Number"
					className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
				/>
				<div className="absolute inset-y-1 right-1 flex justify-end">
					<button
						type="submit"
						aria-label="Submit"
						className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
					>
						<ArrowIcon className="w-4" />
					</button>
				</div>
			</div>
		</form>
	);
}

import LogoBlack from "@/images/logos/logo-black.png";
import { Mail, Phone, PhoneCall } from "lucide-react";

export function Footer() {
	return (
		<Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
			<FadeIn>
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
					<Navigation />
					<div className="flex lg:justify-end">
						<NewsletterForm />
					</div>
				</div>
				<div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
					<Link href="/" aria-label="Home">
						<div className="flex items-center gap-x-2">
							<Image
								src={LogoBlack}
								alt="logo"
								height={36}
								width={50}
								className="hover:animate-bounce"
							/>
							<span className="font-display text-xl font-semibold tracking-tight">
								Charchaa
							</span>
						</div>
					</Link>
					<p className="text-sm text-neutral-700">© Charchaa Inc. 2025</p>
				</div>
			</FadeIn>
		</Container>
	);
}
