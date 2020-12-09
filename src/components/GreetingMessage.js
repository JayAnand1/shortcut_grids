import React from "react";

function GreetingMessage() {
  var hours = new Date().getHours();
  var msg = "";
  if (hours <= 12) {
    msg = "Good Morning!";
  } else if (hours <= 18) {
    msg = "Good Afternoon!";
  } else {
    msg = "Good Evening!";
  }
  return msg;
}

export default GreetingMessage;
