import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";
import { ReceiveEmailTemplate } from "@/emails/receive-template";
import { ReplyEmailTemplate } from "@/emails/reply-template";

export async function POST(request: Request) {
  const { email, message } = await request.json();

  const name = email.split("@")[0];

  try {
    await resend.emails.send({
      from: "Shaik Ahmad Nawaz <onboarding@resend.dev>",
      to: "shaikahmadnawaz@gmail.com",
      subject: "New Message from Portfolio",
      react: ReceiveEmailTemplate({
        name,
        email,
        message,
      }) as React.ReactElement,
    });

    // await resend.emails.send({
    //   from: "Shaik Ahmad Nawaz <onboarding@resend.dev>",
    //   to: email,
    //   subject: "Thank you for contacting me",
    //   react: ReplyEmailTemplate({
    //     name,
    //     message,
    //   }) as React.ReactElement,
    // });

    return NextResponse.json({
      success: true,
      message: "Emails sent",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Emails not sent",
    });
  }
}
