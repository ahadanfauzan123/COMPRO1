import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { welcomeTemplate } from "./templates/welcome";

export async function sendMail({
  to,
  from,
  name,
  phone,
  subject,
  body,
}: {
  to: string;
  from: string;
  name: string;
  phone: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: from,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileWelcomeTemplate(name: string, email: string, to: string, phone: string, subject: string, body: string) {
  const template = handlebars.compile(welcomeTemplate);
  const htmlBody = template({
    name: name,
    email: email,
    to: to,
    phone: phone,
    subject: subject,
    body: body,
  });
  return htmlBody;
}