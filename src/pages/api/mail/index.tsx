import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";
import axios from "axios";

type ResponseData = {
  status: string;
  message: string;
};

const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  let verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  return await axios.post(verificationUrl);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const token = req.body.gRecaptchaToken;

    // Recaptcha response
    const response = await verifyRecaptcha(token);

    // Checking if the reponse sent by reCaptcha success or not and if the score is above 0.5
    // In ReCaptcha v3, a score sent which tells if the data sent from front end is from Human or from Bots. If score above 0.5 then it is human otherwise it is bot
    // For more info check, https://developers.google.com/recaptcha/docs/v3
    // ReCaptcha v3 response, {
    //     "success": true|false,      // whether this request was a valid reCAPTCHA token for your site
    //     "score": number             // the score for this request (0.0 - 1.0)
    //     "action": string            // the action name for this request (important to verify)
    //     "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
    //     "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
    //     "error-codes": [...]        // optional
    //   }
    if (response.data.success && response.data.score >= 0.5) {
      mail.setApiKey(process.env.SENDGRID_API_KEY as string);
      const messageData = req.body.data;
      const { fullName, email, phone, message } = messageData;
      const msg = `
                  Name:${fullName}\r\n
                  Email:${email}\r\n
                  Phone:${phone}\r\n          
                  Message:${message}
              `;
      const data = {
        to: "support@alfredojdominguez.com",
        from: "support@alfredojdominguez.com",
        subject: "new portfolio contact form message!",
        text: msg,
        html: msg.replace(/\r\n/g, "<br>"),
      };

      try {
        await mail.send(data);
        res.status(200).json({
          status: "Ok",
          message: "Thank you! your message was submitted successfully",
        });
      } catch (error) {
        res.status(500).json({
          status: "Fail",
          message: "There has been an error; please try again",
        });
      }
    } else {
      return res.status(500).json({
        status: "error",
        message: "There has been an error; please try again",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "There has been an error; please try again",
    });
  }
}
