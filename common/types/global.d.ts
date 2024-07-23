export { };

// Create a type for the roles
export type Roles = "admin" | "student" | "user";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles
        };
    }
}