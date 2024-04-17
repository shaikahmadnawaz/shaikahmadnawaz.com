import * as React from "react";
import { Body, Container, Head, Hr, Html, Text } from "@react-email/components";

interface ReceiveEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ReceiveEmailTemplate: React.FC<
  Readonly<ReceiveEmailTemplateProps>
> = ({ name, email, message }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>New Contact Form Submission</Text>
        <Hr style={hr} />
        <Text style={paragraph}>Name:</Text>
        <Text style={messageText}>{name}</Text>
        <Text style={paragraph}>Email:</Text>
        <Text style={messageText}>{email}</Text>
        <Text style={paragraph}>Message:</Text>
        <Text style={messageText}>{message}</Text>
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
  fontWeight: "bold",
  color: "#333333",
};

const messageText = {
  fontSize: "14px",
  lineHeight: "24px",
  margin: "10px 0",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
