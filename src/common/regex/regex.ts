export const REGEX = {
    /**
     * Pattern for validating names.
     */
    name: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,

    /**
     * Pattern for validating mobile numbers.
     */
    mobileNumber: /^[6-9][0-9]{9}$/,

    /**
     * Pattern for validating email addresses.
     */
    email: /^(?!.{81})(?:\w+[.-])*\w{1,50}@\w{1,25}(?:[.-]\w+)*\.[a-zA-Z]{2,}$/,

    /**
     * Pattern for validating user ID.
     */
    userId: /^[A-Za-z0-9]{4,10}$/,

}