import { generateContactEmailTemplate } from "@lib/utils/createEmailBody";
import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        // Get environment variables
        const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
        const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
        const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

        if (!username || !password || !myEmail) {
            return NextResponse.json(
                { error: "Email configuration is missing" },
                { status: 500 }
            );
        }

        // Parse the request body
        const { name, email, comment, subject, phone } = await request.json();

        if (!name || !email || !comment || !subject || !phone) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Configure the nodemailer transport
        const transporter = nodemailer.createTransport({
            service: "Gmail", // or another email service provider
            auth: {
                user: username,
                pass: password,
            },
        });

        // Define the email options
        const mailOptions = {
            from: email,
            to: myEmail,
            subject: `Contact Form Submission from ${name}`,
            html: generateContactEmailTemplate({
                name,
                email,
                subject,
                phone,
                comment,
            }),
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
