export function generateContactEmailTemplate({
    name,
    email,
    phone,
    subject,
    projectType,
    budgetRange,
    timeline,
    comment,
}: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    projectType: string;
    budgetRange: string;
    timeline: string;
    comment: string;
}) {
    const escapeHtml = (value: string) =>
        value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    const safeMessage = escapeHtml(comment).replace(/\n/g, "<br />");

    return `
    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 5px;">
        <h2 style="text-align: center; color: #0078d4;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Budget Range:</strong> ${escapeHtml(budgetRange)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #666; text-align: center;">
            This email was generated automatically. Please do not reply.
        </p>
    </div>
`;
}
