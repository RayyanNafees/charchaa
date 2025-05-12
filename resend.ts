import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_ADMIN_API_KEY);

resend.emails.send({
	from: "onboarding@resend.dev",
	to: "resend@rayyan.anonaddy.com",
	subject: "Hello World",
	html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});

resend.domains.list().then((r) => console.log(r.data?.data.map((d) => d.name)));
