import { FadeIn } from "@/components/FadeIn";
import { Button } from "./Button";
import Image from "next/image";
import { Container } from "./Container";
import { SectionIntro } from "./SectionIntro";

const pricingPlans = [
	{
		name: "Basic",
		description:
			"Ideal for new businesses or those needing foundational visual assets without much initial investment plans",
		services: [
			"Graphic Designing (e.g., 2-3 Social Media Banners/Pamphlet Design per month)",
			"Basic Instagram Content (e.g., 4 Posts + 4 Stories per month)",
			// Note: No Logo or Website
		],
		price: 2000,
	},
	{
		name: "Pro",
		description:
			"Perfect for growing businesses aiming for a strong brand identity and consistent online presence.",
		services: [
			"Branding (Logo Design)",
			"Instagram Content (e.g., 8 Posts, 8 Stories, 2 Reels per month)",
			"Graphic Designing (e.g., Up to 5 Banners/Pamphlets/Misc Graphics per month)",
			// Note: No Website
		],
		price: 4000,
	},
	{
		name: "Advance",
		description:
			"Comprehensive solution for established businesses needing full digital support and a professional website.",
		services: [
			"Website Development (Standard Informational Website)",
			"Branding (Logo Design + Basic Brand Style Guide)",
			"Advanced Instagram Content (e.g., 12 Posts, 12 Stories, 4 Reels per month + Strategy)",
			"Comprehensive Graphic Designing (Covers most standard needs)",
		],
		price: 6000,
	},
];

function Pricing() {
	return (
		<>
			<SectionIntro
				eyebrow="Pricing"
				title="Tailored plans designed to prioritize your success."
				className="mt-24 sm:mt-32 lg:mt-40"
			>
				<p>
					Discover plans crafted to align with your unique goals, whether
					you&lsquo;re just starting out, leveling up, or going all-in.
				</p>
			</SectionIntro>
			<Container className="mt-16">
				<FadeIn>
					<div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
							{pricingPlans.map((plan, index) => (
								<div
									key={plan.name}
									className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105  border-2 border-primary"
								>
									<div className="p-6 sm:p-8">
										<h2 className="text-lg font-medium text-gray-900">
											{plan.name}
										</h2>
										<p className="mt-2 text-gray-700">{plan.description}</p>
										<p className="mt-2 sm:mt-4">
											<strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
												₹ {plan.price}
											</strong>
											<span className="text-sm font-medium text-gray-700">
												/month
											</span>
										</p>

										<Button
											className="w-full mx-auto mt-6 bg-primary hover:bg-primary/90 flex justify-center items-center text-white transition duration-300"
											href="/contact"
										>
											Get Started
										</Button>
									</div>
									<div className="p-6 sm:p-8 border-t border-gray-200">
										<p className="text-lg font-medium text-gray-900 sm:text-xl">
											What&lsquo;s included:
										</p>
										<ul className="mt-2 space-y-2 sm:mt-4 list-disc">
											{plan.services.map((service) => (
												<li key={service} className="flex gap-1">
													<Image
														src="https://api.iconify.design/mdi/check.svg"
														alt="✅"
														className="w-6 h-6 mt-px "
														width={20}
														height={20}
													/>
													<span className="text-gray-700">{service}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</FadeIn>
			</Container>
		</>
	);
}

export default Pricing;
