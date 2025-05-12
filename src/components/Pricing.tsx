import { Check, X as Cross } from "lucide-react";
import { Button } from "./Button";

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
		<div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
				{pricingPlans.map((plan) => (
					<div
						key={plan.name}
						className="divide-y hover:shadow-md divide-gray-200 rounded-2xl border border-gray-200 shadow-xs"
					>
						<div className="p-6 sm:px-8">
							<h2 className="text-lg font-medium text-gray-900">
								{plan.name}
								<span className="sr-only">Plan</span>
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
								className="w-full mx-auto m-4  bg-primary hover:bg-primary/90 flex justify-center items-center text-white"
								href="/contact"
							>
								<div>Get Started</div>
							</Button>
							{/* <a
								className="mt-4 block rounded-sm border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
								href="/"
							>
								Get Started
							</a> */}
						</div>

						<div className="p-6 sm:px-8">
							<p className="text-lg font-medium text-gray-900 sm:text-xl">
								What&lsquo;s included:
							</p>

							<ul className="mt-2 space-y-2 sm:mt-4 list-disc ">
								{plan.services.map((service) => (
									<li key={service} className="flex items-center gap-1">
										{/* <Check size={50} color={'green'} /> */}

										<span className="text-gray-700">✅ {service} </span>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Pricing;
