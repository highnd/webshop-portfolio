import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashToken = await bcryptjs.hash(userId.toString(), 10);
    //  check the type of email
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }
    //
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "highnd@gmail.com",
      to: email,
      subject: emailType === "VERIFY" ? "verify Email" : "reset Password",
      html: `<div><p>hello my friend .. click here to activate</p><a href="${
        process.env.DOMAIN
      }/${
        emailType === "VERIFY" ? "verifyemail" : "changepassword"
      }?token=${hashToken}">HERE</a> to ${
        emailType === "VERIFY" ? "activate your account" : "reset Password"
      }</div>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
    //
  } catch (error: any) {
    throw new Error(error.message);
  }
};
