export const Message = {
    Info: {
        PasswordResetSuccessfully: {
            txt: "Password reset successfully."
        }
    },
    Warning: {},
    Error: {
        InternalServerError: {
            txt: "Internal server error!",
            code: "InternalServerError",
        },
        BadRequest: {
            txt: "Bad request!",
            code: "BadRequest",
        },
        ToManyRequest: {
            txt: "Too {_s} many {_s} request! {_s}",
            code: "ToManyRequest",
        },
        InvalidCredential: {
            txt: "Invalid credential!",
            code: "InvalidCredential",
        },
        AlreadyExists: {
            txt: "{_s} already exists!",
            code: "AlreadyExists",
        },
        NotExists: {
            txt: "{_s} not exists!",
            code: "NotExists",
        },
        InvalidOrExpired: {
            txt: "Invalid or expired refresh token",
            code: "InvalidOrExpired",
        },
        InActive: {
            txt: "Inactive"
        }
    },
};
