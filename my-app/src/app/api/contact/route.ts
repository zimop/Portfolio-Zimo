import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.PERSONAL_USERNAME,
        pass: process.env.PERSONAL_PASSWORD,
    },
  });

export async function POST(request: NextRequest): Promise<NextResponse> {
    try{
        const {data} = await request.json();
        const info_patient = await transporter.sendMail({
            from: `"Lume Health" <${process.env.PERSONAL_USERNAME}`, // sender address
            to: data.email, // list of receivers
            subject: "Thank you for connecting with me!", // Subject line
            text: "emailContents", // plain text body
            html: `<div style="font-family: Arial, sans-serif; color: #333;">
                    <h2>Thank you for sending your contact information to me (Zimo Peng) :) I will be in contact with you as soon as possible!</h2>
                    <br>
                    <p>Kind Regards,</p>
                    <p><strong>Zimo Peng</strong></p>
                    <p><strong>Mobile: </strong>0426 800 718</p>
                    <p><strong>Email: </strong>zimopeng12345@gmail.com</p>
                </div>`, // html body
        });
        console.log("Message sent: %s", info_patient.messageId);

        const info_self = await transporter.sendMail({
            from: `"Lume Health" <${process.env.PERSONAL_USERNAME}`, // sender address
            to: process.env.PERSONAL_USERNAME, // list of receivers
            subject: `Contact Details of ${data.name}`, // Subject line
            text: "emailContents", // plain text body
            html:`<div style="font-family: Arial, sans-serif; color: #333;">
                    <h1>${data.name} just submitted their contact details to you</h1>
                    <br>
                    <h3>Here are the details for ${data.name}</h3>
                    <p><strong>Name of Patient:</strong> ${data.name}</p>
                    <p><strong>Email of Patient</strong> ${data.email}</p>
                    <p><strong>Phone Number of Patient:</strong> ${data.phone}</p>
                    <p><strong>Patient Message</strong> ${data.message}</p>
                    <br>
                </div>`, // html body
        });
        console.log("Message sent: %s", info_self.messageId);
        return NextResponse.json(data, { status: 200 });
    }
    catch (error) {
        console.log(error)
        if (error instanceof Error) {
            console.error('Error updating data:', error.message);
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }
        console.error('Unknown error:', error);
        return NextResponse.json(
            { error: 'An unknown error occurred' },
            { status: 500 }
        );
    }
}