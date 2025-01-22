export function generateContactEmailTemplate({
    name,
    email,
    phone,
    subject,
    comment,
}: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    comment: string;
}) {
    return `
    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 5px;">
        <h2 style="text-align: center; color: #0078d4;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${comment}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #666; text-align: center;">
            This email was generated automatically. Please do not reply.
        </p>
    </div>
`;
}
