"use strict";
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
            return `You are an ${UserRole.Admin}.`;
        case UserRole.User:
            return `You are an ${UserRole.User}.`;
        case UserRole.Guest:
            return `You are an ${UserRole.Guest}.`;
        default:
            return "Unknown role.";
    }
}
let userRole = "Admin";
let userRoleWithTypeAssertions = userRole;
console.log(getRoleMessage(userRoleWithTypeAssertions));
//# sourceMappingURL=exercise_3.js.map