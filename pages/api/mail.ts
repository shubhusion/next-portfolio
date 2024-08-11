import type { NextApiRequest, NextApiResponse } from "next";
import * as brevo from '@getbrevo/brevo';

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed." });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    const apiInstance = new brevo.TransactionalEmailsApi();
    
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
        console.error('BREVO_API_KEY is not set');
        return res.status(500).json({ message: "Server configuration error." });
    }
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;
    if (!mailFrom || !mailTo) {
        console.error('MAIL_FROM or MAIL_TO is not set');
        return res.status(500).json({ message: "Server configuration error." });
    }

    const sendSmtpEmail = {
        to: [{ email: mailTo }],
        sender: { name: "Portfolio Contact Form", email: mailFrom },
        subject: `${name} sent you a message from Portfolio`,
        htmlContent: `<html><body><h2>New message from portfolio</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p></body></html>`,
        replyTo: { email: email },
    };

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent successfully. Returned data:', JSON.stringify(data));
        return res.status(200).json({ message: "Your message was sent successfully." });
    } catch (error) {
        console.error('Error sending email:', error);
        // Log the full error object for debugging
        console.error(JSON.stringify(error, null, 2));
        return res.status(500).json({ message: "There was an error sending your message. Please try again later." });
    }
}