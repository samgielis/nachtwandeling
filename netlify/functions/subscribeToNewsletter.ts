import { Handler } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
import mailjet from "node-mailjet";

const CONTACT_LIST_ID = 8451;

interface SubsribeToNewsLetterPayload {
    email?: string;
    fname?: string;
    lname?: string;
}

const handler: Handler = async (event, context) => {
    try {
        const payload: SubsribeToNewsLetterPayload = JSON.parse(event.body);
        let name: string;
        if (!payload.email) {
            return createError("No email provided", 400);
        }

        if (!payload.fname && !payload.lname) {
            name = "Wandelaar"
        } else if (payload.fname && payload.lname) {
            name = `${payload.fname} ${payload.lname}`;
        } else {
            name = payload.fname || payload.lname
        }

        try {
            await addToMailjetList(payload.email, name);
        } catch (e) {
            return createError("Mailjet error", e?.statusCode);
        }
    } catch (e) {
        return createError("Unknown error", 400);
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
    };
};

function createError(message: string, code?: number): Response {
    return {
        statusCode: code || 500,
        body: JSON.stringify({ error: message })
    }
}
export { handler };

function addToMailjetList(email: string, name: string): Promise<any> {
    mailjet
        .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);
    return mailjet
        .post("contactslist", { 'version': 'v3' })
        .id(CONTACT_LIST_ID)
        .action("managecontact")
        .request({
            "Name": name,
            "Properties": "object",
            "Action": "addnoforce",
            "Email": email
        });
}
