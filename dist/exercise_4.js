"use strict";
//  Asynchronous Functions and Promises
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Task 1
function getUser(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Failed to fetch data:", error);
            throw error;
        }
    });
}
getUser("https://mocki.io/v1/d79c58a5-867b-4543-b0b3-ce6d2d0c9240")
    .then(data => {
    console.log(data);
})
    .catch(error => {
    console.error("Error fetching API data:", error);
});
//# sourceMappingURL=exercise_4.js.map