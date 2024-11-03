export const Message = {
  INFO: {},
  WARNING: {},
  ERROR: {
    INTERNAL_SERVER_ERROR: {
      TXT: "Internal server error!",
      CODE: 5001,
    },
    TO_MANY_REQUEST: {
      TXT: "Too {_s} many {_s} request! {_s}",
      CODE: 5002,
    },
    INVALID_CREDENTIAL: {
      TXT: "Invalid credential!",
      CODE: 5003,
    },
    ALREADY_EXISTS: {
      TXT: "{_s} already exists!",
      CODE: 5004,
    }
  },
};
