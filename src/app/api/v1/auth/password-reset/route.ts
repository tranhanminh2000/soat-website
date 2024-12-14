import {withErrorHandling} from "@/server/utils/api/handler";
import {ApiResponse} from "@/server/utils/api/response";
import {HttpStatusCode} from "axios";
import User from "@/server/models/users";
import GmailSenderService from "@/server/services/mail/sender/gmail";
import {HttpError} from "@/server/utils/error";
import {randomUUID} from "node:crypto";

export const POST = withErrorHandling(async (req: Request) => {
    const {userId, token, password} = await req.json()

    const uuid = randomUUID()
    const expiredTime = Date.now() + 36000
    const user = await User.findOneAndUpdate(
        {email}, // Filter
        {
            $set: {
                "verification.resetPassword.token": uuid,
                "verification.resetPassword.expired": expiredTime,
            },
        },
        {returnDocument: "after"} // Options to return the updated document
    );

    if (!user) {
        throw new HttpError(`User ${uuid} not found!`, HttpStatusCode.NotFound);
    }

    new GmailSenderService().sendMail(
        user.email,
        "Request reset password",
        `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?userId=${user._id}&token=${uuid}&expired=${expiredTime}`
    )

    return new ApiResponse(
        "Password reset link has been sent to your email.",
        HttpStatusCode.Ok
    ).message();
});
