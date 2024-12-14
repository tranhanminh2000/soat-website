import crypto from "crypto";
import {HAS_ALGORITHM, SALT_ROUNDS} from "@/shared/utils/constants/variable";

class PasswordGenerator {
    saltLength: number
    hashAlgorithm: string

    constructor(saltLength = SALT_ROUNDS, hashAlgorithm = HAS_ALGORITHM) {
        /**
         * Initialize the PasswordGenerator.
         * @param {number} saltLength - Length of the salt (default: 16 bytes).
         * @param {string} hashAlgorithm - Hashing algorithm (default: 'sha256').
         */
        this.saltLength = saltLength;
        this.hashAlgorithm = hashAlgorithm;
    }

    generateSalt() {
        return crypto.randomBytes(this.saltLength).toString("hex");
    }

    hashPassword(password: string, salt: string) {
        return crypto.createHmac(this.hashAlgorithm, salt).update(password).digest("hex");
    }

    generateStoredPassword(rawPassword: string) {
        const salt = this.generateSalt();
        const hashedPassword = this.hashPassword(rawPassword, salt);
        return `${salt}:${hashedPassword}`;
    }

    verifyPassword(rawPassword: string, storedPassword: string) {
        const [storedSalt, storedHashed] = storedPassword.split(":");
        const currentHashed = this.hashPassword(rawPassword, storedSalt);
        return currentHashed === storedHashed;
    }
}

const passwordGenerator = new PasswordGenerator();
export default passwordGenerator;
