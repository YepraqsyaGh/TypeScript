//  Enums and Type Assertions
// Task 1
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["User"] = "User";
    UserRole["Guest"] = "Guest";
})(UserRole || (UserRole = {}));
function getRoleMessage(role) {
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
var userRole = "Admin";
var userRoleWithTypeAssertions = userRole;
console.log(getRoleMessage(userRoleWithTypeAssertions));
