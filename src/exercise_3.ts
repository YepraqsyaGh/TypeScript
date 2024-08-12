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
            return "You are an admin.";
        case UserRole.User:
            return "You are a user.";
        case UserRole.Guest:
            return "You are a guest.";
        default:
            return "Unknown role.";
    }
}

let userRole: any = "Admin";
let userRoleWithTypeAssertions: UserRole = userRole as UserRole;

console.log(getRoleMessage(userRoleWithTypeAssertions));
