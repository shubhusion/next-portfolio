import type { NextApiRequest, NextApiResponse } from "next";
import brevo from "@getbrevo/brevo";

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const {
            name,
            email,
            message,
        }: { name: string; email: string; message: string } = req.body;

        // Initialize Brevo API and configure the API key directly through environment variable
        const apiInstance = new brevo.TransactionalEmailsApi();

        // Set up the email data
        const sendSmtpEmail = new brevo.SendSmtpEmail({
            subject: `${name.toUpperCase()} sent you a message from Portfolio`,
            htmlContent: `<html><body><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p></body></html>`,
            sender: { email: process.env.MAIL_FROM as string },
            to: [{ email: process.env.MAIL_TO as string }],
            replyTo: { email: process.env.MAIL_FROM as string },
            headers: { "X-Mailin-custom": "unique-id-1234" },
            params: { name, email, message }
        });

        try {
            // Send the email
            const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            res.status(200).json({ message: "Your message was sent successfully." });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: `There was an error sending your message. ${err}` });
        }
    } else {
        res.status(405).json({ message: "Method not allowed." });
    }
}
