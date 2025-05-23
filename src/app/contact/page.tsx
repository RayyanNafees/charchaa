// import { useId } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Border } from "@/components/Border";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Offices } from "@/components/Offices";
import { PageIntro } from "@/components/PageIntro";
import { SocialMedia } from "@/components/SocialMedia";
import { Footer } from "@/components/Footer";
import Image from "next/image";

// import { LoaderCircle } from "lucide-react";

function TextInput({
	label,
	...props
}: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
	// const id = useId();

	return (
		<div className="group relative z-0 transition-all focus-within:z-10">
			<input
				type="text"
				id={label}
				{...props}
				placeholder=" "
				className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
			/>
			<label
				htmlFor={label}
				className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
			>
				{label}
			</label>
		</div>
	);
}

function RadioInput({
	label,
	...props
}: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
	return (
		<label className="flex gap-x-3">
			<input
				type="radio"
				{...props}
				className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
			/>
			<span className="text-base/6 text-neutral-950">{label}</span>
		</label>
	);
}

function ContactForm() {
	return (
		<FadeIn className="lg:order-last">
			<form action="/send-contact">
				<h2 className="font-display text-base font-semibold text-neutral-950">
					Service Inquiries
				</h2>
				<div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
					<TextInput label="Name" name="name" autoComplete="name" required />
					<TextInput
						label="Email"
						type="email"
						name="email"
						autoComplete="email"
					/>
					<TextInput
						label="Company"
						name="company"
						autoComplete="organization"
					/>
					<TextInput
						label="Phone"
						type="tel"
						name="phone"
						autoComplete="tel"
						required
					/>
					<TextInput label="Message" name="message" />
					<div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
						<fieldset>
							<legend className="text-base/6 text-neutral-500">Budget</legend>
							<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
								<RadioInput label="$25K - $50K" name="budget" value="25" />
								<RadioInput label="$50K - $100K" name="budget" value="50" />
								<RadioInput label="$100K - $150K" name="budget" value="100" />
								<RadioInput label="More than $150K" name="budget" value="150" />
							</div>
						</fieldset>
					</div>
				</div>
				<Button type="submit" className="mt-10 group" variant="black">
					<span className="group-active:hidden inline">Contact</span>
					<span className="group-active:flex hidden items-center justify-center gap-2">
						<Image
							src="https://api.iconify.design/mdi:loading.svg?color=white"
							alt="loading"
							className="w-6 animate-spin"
							width={24}
							height={24}
						/>
						Sending...
					</span>
				</Button>
			</form>
		</FadeIn>
	);
}

function ContactDetails() {
	return (
		<FadeIn>
			<h2 className="font-display text-base font-semibold text-neutral-950">
				Our offices
			</h2>
			<p className="mt-6 text-base text-neutral-600">
				Prefer doing things in person? Meet our team in-person at our office!
			</p>

			<Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

			<Border className="mt-16 pt-16">
				<h2 className="font-display text-base font-semibold text-neutral-950">
					Email us
				</h2>
				<dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
					{[["Office", "charchaa.in@gmail.com"]].map(([label, email]) => (
						<div key={email}>
							<dt className="font-semibold text-neutral-950">{label}</dt>
							<dd>
								<Link
									href={`mailto:${email}`}
									className="text-neutral-600 hover:text-neutral-950"
								>
									{email}
								</Link>
							</dd>
						</div>
					))}
				</dl>
			</Border>

			<Border className="mt-16 pt-16">
				<h2 className="font-display text-base font-semibold text-neutral-950">
					Follow us
				</h2>
				<SocialMedia className="mt-6" />
			</Border>
		</FadeIn>
	);
}

export const metadata: Metadata = {
	title: "Contact Us",
	description: "Get in touch! Let's push your brand to next levle.",
};

export default function Contact() {
	return (
		<div className="bg-white">
			<PageIntro eyebrow="Contact us" title="Get in touch!">
				<p>Let&lsquo;s push your brand to the next level.</p>
			</PageIntro>

			<Container className="mt-24 sm:mt-32 lg:mt-40">
				<div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
					<ContactForm />
					<ContactDetails />
				</div>
			</Container>
			<Footer />
		</div>
	);
}
