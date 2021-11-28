import { Handler } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
import mailjet from "node-mailjet";

const CONTACT_LIST_ID = 8451;

interface SubsribeToNewsLetterPayload {
    email?: string;
    name?: string;
}

const handler: Handler = (event, context, callback) => {
    try {
        const payload: SubsribeToNewsLetterPayload = JSON.parse(event.body);
        const name = payload.name || "Wandelaar";
        if (!payload.email) {
            return callback(undefined, createError("No email provided", 400));
        }
        addToMailjetList(payload.email, name).then((response) => {
            callback(undefined, createResponse("Subscription complete"))
        }).catch(error => {
            console.log("Mailjet", error)
            callback(createError("Mailjet error"), undefined);
        })
    } catch (e) {
        console.log("catch", e)
        return callback(createError("Unknown error", 400), undefined);
    }

    return callback(undefined, createResponse("Subscription complete"));
};

function createError(message: string, code?: number): Response {
    return {
        statusCode: code || 500,
        body: JSON.stringify({ error: message })
    }
}

function createResponse(message: string): Response {
    return {
        statusCode: 200,
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
