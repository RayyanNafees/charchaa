import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { sendContactMail, sendNewslettertMail } from "../contact/action";

export default async function ThankYou({
	searchParams,
	...props
}: {
	searchParams: {
		name: string;
		email?: string;
		company?: string;
		phone: string;
		message?: string;
		budget?: string;
		newsletter?: string;
	};
}) {
	if (searchParams?.newsletter === "true")
		await sendNewslettertMail(searchParams.phone);
	else await sendContactMail(searchParams);
	console.log({searchParams, props});
	return (
		<div className="bg-white">
			<PageIntro eyebrow="Thank you" title="We'll be in touch soon">
				<p>
					Thank you for reaching out to us. We appreciate your interest and will
					get back to you as soon as possible.
				</p>
			</PageIntro>

			<Container className="mt-24 sm:mt-32 lg:mt-40">
				<FadeIn>
					<div className="text-center">
						<p className="text-base text-neutral-600">
							We&lsquo;ll review your message and get back to you within the
							next 24 hours.
						</p>
					</div>
				</FadeIn>
			</Container>
		</div>
	);
}
