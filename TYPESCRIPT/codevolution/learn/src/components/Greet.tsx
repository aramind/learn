import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, messageCount = 22, isLoggedIn }: GreetProps) => {
  return (
    <h2>
      {isLoggedIn
        ? `Welcome ${name}! You have ${messageCount} unread messages`
        : `Welcome Guest`}
    </h2>
  );
};

export default Greet;
