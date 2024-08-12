declare enum UserRole {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}
declare function getRoleMessage(role: UserRole): string;
declare let userRole: any;
declare let userRoleWithTypeAssertions: UserRole;
