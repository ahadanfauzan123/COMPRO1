"use server"
import { compileWelcomeTemplate, sendMail } from "./mail";

export const Send = async ({name,from,phone, subject, message}: {
      name: string,
      from: string,
      phone: string,
      subject: string,
      message: string,
}) => {
      await sendMail({
        to: process.env.SMTP_EMAIL as string,
        from: from,
        name: name,
        phone: phone,
        subject: subject,
        body: compileWelcomeTemplate(name,from, process.env.SMTP_EMAIL as string, phone, subject, message),
      });
};