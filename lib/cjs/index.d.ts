export type TOTPAlgorithm = "SHA-1" | "SHA-224" | "SHA-256" | "SHA-384" | "SHA-512" | "SHA3-224" | "SHA3-256" | "SHA3-384" | "SHA3-512";
/**
 * @param {string} [digits=6]
 * @param {string} [algorithm="SHA-1"]
 * @param {string} [period=30]
 * @param {string} [timestamp=Date.now()]
 */
type Options = {
    digits?: number;
    algorithm?: TOTPAlgorithm;
    period?: number;
    timestamp?: number;
    keyIsHex?: boolean;
};
export declare class TOTP {
    static generate(key: string, options?: Options): {
        otp: string;
        expires: number;
    };
    private static hex2dec;
    private static dec2hex;
    private static base32tohex;
    private static leftpad;
}
export {};
