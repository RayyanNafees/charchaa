import { Check, X as Cross } from "lucide-react";

function Pricing() {
	return (
		<div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
				<div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
					<div className="p-6 sm:px-8">
						<h2 className="text-lg font-medium text-gray-900">
							Starter
							<span className="sr-only">Plan</span>
						</h2>

						<p className="mt-2 text-gray-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>

						<p className="mt-2 sm:mt-4">
							<strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
								₹ 2000
							</strong>

							<span className="text-sm font-medium text-gray-700">/month</span>
						</p>

						<a
							className="mt-4 block rounded-sm border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
							href="/"
						>
							Get Started
						</a>
					</div>

					<div className="p-6 sm:px-8">
						<p className="text-lg font-medium text-gray-900 sm:text-xl">
							What&lsquo;s included:
						</p>

						<ul className="mt-2 space-y-2 sm:mt-4">
							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> 10 users </span>
							</li>

							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> 2GB of storage </span>
							</li>

							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> Email support </span>
							</li>

							<li className="flex items-center gap-1">
								<Cross />

								<span className="text-gray-700"> Help center access </span>
							</li>

							<li className="flex items-center gap-1">
								<Cross />

								<span className="text-gray-700"> Phone support </span>
							</li>

							<li className="flex items-center gap-1">
								<Cross />

								<span className="text-gray-700"> Community access </span>
							</li>
						</ul>
					</div>
				</div>

				<div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
					<div className="p-6 sm:px-8">
						<h2 className="text-lg font-medium text-gray-900">
							Pro
							<span className="sr-only">Plan</span>
						</h2>

						<p className="mt-2 text-gray-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>

						<p className="mt-2 sm:mt-4">
							<strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
								₹ 4000
							</strong>

							<span className="text-sm font-medium text-gray-700">/month</span>
						</p>

						<a
							className="mt-4 block rounded-sm border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
							href="/"
						>
							Get Started
						</a>
					</div>

					<div className="p-6 sm:px-8">
						<p className="text-lg font-medium text-gray-900 sm:text-xl">
							What&lsquo;s included:
						</p>

						<ul className="mt-2 space-y-2 sm:mt-4">
							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> 20 users </span>
							</li>

							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> 5GB of storage </span>
							</li>

							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> Email support </span>
							</li>

							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> Help center access </span>
							</li>

							<li className="flex items-center gap-1">
								<Cross />

								<span className="text-gray-700"> Phone support </span>
							</li>

							<li className="flex items-center gap-1">
								<Cross />

								<span className="text-gray-700"> Community access </span>
							</li>
						</ul>
					</div>
				</div>

				<div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
					<div className="p-6 sm:px-8">
						<h2 className="text-lg font-medium text-gray-900">
							Enterprise
							<span className="sr-only">Plan</span>
						</h2>

						<p className="mt-2 text-gray-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>

						<p className="mt-2 sm:mt-4">
							<strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
								₹ 6000
							</strong>

							<span className="text-sm font-medium text-gray-700">/month</span>
						</p>

						<a
							className="mt-4 block rounded-sm border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
							href="/"
						>
							Get Started
						</a>
					</div>

					<div className="p-6 sm:px-8">
						<p className="text-lg font-medium text-gray-900 sm:text-xl">
							What&lsquo;s included:
						</p>

						<ul className="mt-2 space-y-2 sm:mt-4">
							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> 50 users </span>
							</li>

							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> 20GB of storage </span>
							</li>

							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> Email support </span>
							</li>

							<li className="flex items-center gap-1">
								<Check />

								<span className="text-gray-700"> Help center access </span>
							</li>

							<li className="flex items-center gap-1">
								<Cross />

								<span className="text-gray-700"> Phone support </span>
							</li>

							<li className="flex items-center gap-1">
								<Cross />

								<span className="text-gray-700"> Community access </span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;
