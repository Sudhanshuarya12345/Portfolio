"use server"
import nodemailer from "nodemailer"

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;

const sanitize = (value) => String(value || "").replace(/[\r\n\t]+/g, " ").trim();
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
const parseEmails = (value) =>
    String(value || "")
        .split(",")
        .map((item) => item.trim())
        .filter((item) => Boolean(item) && isValidEmail(item));
const escapeHtml = (value) =>
    String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

const formatLocalTime = (isoString) => {
    const timezone = process.env.CONTACT_TIMEZONE || Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatted = new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: timezone,
    }).format(new Date(isoString));
    return { formatted, timezone };
};

const requiredEnv = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_RECEIVER_EMAIL",
];

export const submitAction = async (_prevState, formData) => {
    if (!formData || typeof formData.get !== "function") {
        return {
            ok: false,
            message: "Invalid form submission. Please try again.",
        };
    }

    const name = sanitize(formData.get("name"));
    const email = sanitize(formData.get("email"));
    const message = sanitize(formData.get("message"));

    if (!name || !email || !message) {
        return {
            ok: false,
            message: "Please fill all fields before submitting.",
        };
    }
    if (!isValidEmail(email)) {
        return {
            ok: false,
            message: "Please enter a valid email address.",
        };
    }
    if (message.length <= 10) {
        return {
            ok: false,
            message: "Message must be more than 10 characters.",
        };
    }
    if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
        return {
            ok: false,
            message: "Input is too long. Please shorten your details and try again.",
        };
    }

    const safeName = name.slice(0, MAX_NAME_LENGTH);
    const safeEmail = email.slice(0, MAX_EMAIL_LENGTH);
    const safeMessage = message.slice(0, MAX_MESSAGE_LENGTH);
    const safeHtmlName = escapeHtml(safeName);
    const safeHtmlEmail = escapeHtml(safeEmail);
    const safeHtmlMessage = escapeHtml(safeMessage);

    const timestamp = new Date().toISOString();
    const { formatted: localTime, timezone } = formatLocalTime(timestamp);
    const missingEnv = requiredEnv.filter((key) => !process.env[key]);
    const ccEmails = parseEmails(process.env.CONTACT_CC_EMAILS);
    const bccEmails = parseEmails(process.env.CONTACT_BCC_EMAILS);

    try {
        if (missingEnv.length > 0) {
            return {
                ok: false,
                message: `Email is not configured. Missing: ${missingEnv.join(", ")}`,
            };
        }

        const smtpPort = Number(process.env.SMTP_PORT);
        if (!Number.isFinite(smtpPort)) {
            return {
                ok: false,
                message: "Invalid SMTP_PORT value. Please use a numeric port like 465 or 587.",
            };
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.CONTACT_RECEIVER_EMAIL,
            cc: ccEmails.length ? ccEmails : undefined,
            bcc: bccEmails.length ? bccEmails : undefined,
            replyTo: safeEmail,
            subject: `Portfolio Contact | ${safeName} | ${localTime}`,
            text: [
                `Time: ${timestamp}`,
                `Local Time: ${localTime} (${timezone})`,
                `Name: ${safeName}`,
                `Email: ${safeEmail}`,
                "",
                "Message:",
                safeMessage,
            ].join("\n"),
            html: `
                <h2>New Portfolio Contact Message</h2>
                <p><strong>Time:</strong> ${timestamp}</p>
                <p><strong>Local Time:</strong> ${localTime} (${timezone})</p>
                <p><strong>Name:</strong> ${safeHtmlName}</p>
                <p><strong>Email:</strong> ${safeHtmlEmail}</p>
                <p><strong>Message:</strong></p>
                <p>${safeHtmlMessage}</p>
            `,
        });

        return {
            ok: true,
            message: "Message sent successfully to your email.",
        };
    } catch (error) {
        const details = error?.message || "Unknown SMTP error";
        console.error("Contact form processing failed:", error);
        return {
            ok: false,
            message: `Could not send message email right now. ${details}`,
        };
    }
}
