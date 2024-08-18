//  Enums and Type Assertions

// Task 1
enum UserRole {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}

function getRoleMessage(role: UserRole): string {
    switch (role) {
        case UserRole.Admin:
            return `You are an ${UserRole.Admin}.`;
        case UserRole.User:
            return `You are an ${UserRole.User}.`;
        case UserRole.Guest:
            return `You are an ${UserRole.Guest}.`;
        default:
            return "Unknown role.";
    }
}

let userRole: any = "Admin";
let userRoleWithTypeAssertions: UserRole = userRole as UserRole;

console.log(getRoleMessage(userRoleWithTypeAssertions));
