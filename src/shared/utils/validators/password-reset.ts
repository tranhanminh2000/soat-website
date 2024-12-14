import {IUser} from "@/server/models/users";

export class PasswordResetValidator {
    storedUser: IUser;
    inputUserId: string;
    inputToken: string;

    constructor(storedUser: IUser, userId: string, token: string) {
        this.storedUser = storedUser
        this.inputUserId = userId
        this.inputToken = token
    }

    isActivePasswordReset() {
        const token = this.storedUser.verification?.passwordReset?.token
        const expired = this.storedUser.verification?.passwordReset?.expired
        return token && expired
    }

    isTokenExpired() {
        const now = Date.now()
        const storedExpired = this.storedUser.verification?.passwordReset?.expired
        if (!storedExpired) return false
        console.log(`expired: ${storedExpired <= now}`)
        return storedExpired <= now;
    }

    isMatchToken() {
        const storedToken = this.storedUser.verification?.passwordReset?.token
        console.log(`match: ${storedToken === this.inputToken}`)
        return storedToken === this.inputToken
    }
}