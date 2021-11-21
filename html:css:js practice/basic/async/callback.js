"use strict";

// js is synchronous.
// Execute the codes by order after hoisting.
// hoisting: Executing declaration first like var, function.
console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 1000);
// 아래처럼 arrow로 표현해줄 수 있음!
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}
