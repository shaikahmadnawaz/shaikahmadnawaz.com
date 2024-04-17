import * as React from "react";
import { Body, Container, Head, Hr, Html, Text } from "@react-email/components";

interface ReplyEmailTemplateProps {
  name: string;
  message: string;
}

export const ReplyEmailTemplate: React.FC<
  Readonly<ReplyEmailTemplateProps>
> = ({ name, message }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Thank you for reaching out to me. I appreciate your interest and will
          get back to you as soon as possible.
        </Text>
        <Text style={paragraph}>Your message:</Text>
        <Text style={messageText}>{message}</Text>
        <Text style={paragraph}>
          Best regards,
          <br />
          Shaik Ahmad Nawaz
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const messageText = {
  fontSize: "14px",
  lineHeight: "24px",
  margin: "10px 0",
};
