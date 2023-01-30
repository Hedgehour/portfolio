// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "Invalid HTTP method, only POST is allowed" });
  }
  try {
    const apiKey = process.env.WHOISXML_API_KEY;

    // Extract the email address from the request body
    const { email } = JSON.parse(req.body);

    // Build the API endpoint URL
    const apiUrl = `https://emailverification.whoisxmlapi.com/api/v2?apiKey=${apiKey}&emailAddress=${email}`;
    const verificationResponse = await fetch(apiUrl);

    if (verificationResponse.status !== 200) {
      console.error(
        `Verification check failed - Status Code ${verificationResponse.status}`,
        verificationResponse.body
      );
      throw "Verification Failed - verification response status not successful";
    }

    const data = await verificationResponse.json();

    if (data.smtpCheck === "false") {
      // short circuit the response because email is not deliverable - status 400 (bad request)
      return res.status(400).json({ message: "Email is not deliverable" });
    }

    const submissionResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        access_key: process.env.WEB3FORMS_API_KEY,
      }),
    });

    // if status code is not 200 - Success, throw an error
    if (submissionResponse.status !== 200) {
      console.error(
        `Web3forms submission failed - Status Code ${submissionResponse.status}`,
        submissionResponse.body
      );
      throw "Submission Failed - Web3Forms submission status not successful";
    }

    // return success status without content when code makes it this far successfully
    return res.status(200).json({ message: "Successfully delivered" });
  } catch (error) {
    // log detailed error for app logging
    console.error("An unexpected error occurred", error);

    /* send generic error back to client so that bad actors cannot 
    get a sense of the systems inner workings.
    Status 500 - Internal Server Error
    */
    return res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
}
