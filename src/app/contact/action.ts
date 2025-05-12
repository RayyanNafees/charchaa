import emailjs from "@emailjs/nodejs";


emailjs.init({
	publicKey: process.env.EMAILJS_PUBLIC_KEY,
	privateKey: process.env.EMAILJS_PRIVATE_KEY, // optional, highly recommended for security reasons
});

export type ContactDetails = {
	name: string;
	email?: string;
	phone: string;
	company?: string;
	message?: string;
	budget?: string;
};

export const sendContactMail = ({
	name,
	email,
	phone,
	company,
	message,
	budget,
}: ContactDetails) => {
	if (
		!process.env.EMAILJS_GMAIL_SERVICE_ID ||
		!process.env.EMAILJS_CONTACT_TEMPLATE
	)
		throw "contact: emailjs api keys not found";
	return emailjs
		.send(
			process.env.EMAILJS_GMAIL_SERVICE_ID,
			process.env.EMAILJS_CONTACT_TEMPLATE,
			{
				name,
				email,
				phone,
				company,
				message,
				budget,
				to: process.env.EMAILJS_RECIPIENT,
			},
		)
		.then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
			},
			(err) => {
				console.log("FAILED...", err);
			},
		);
};
export const sendNewslettertMail = (phone: string) => {
	if (
		!process.env.EMAILJS_GMAIL_SERVICE_ID ||
		!process.env.EMAILJS_NEWSLETTER_TEMPLATE
	)
		throw "newsletter: emailjs api keys not found";
	return emailjs
		.send(
			process.env.EMAILJS_GMAIL_SERVICE_ID,
			process.env.EMAILJS_NEWSLETTER_TEMPLATE,
			{ phone, to: process.env.EMAILJS_RECIPIENT },
		)
		.then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
			},
			(err) => {
				console.log("FAILED...", err);
			},
		);
};
