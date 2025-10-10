"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const messages = useQuery(api.functions.getForAuthenticatedUser);

  return (
    <div>
      {messages?.map((message) => (
        <div key={message._id}>{message.body} - {message.user}</div>
      ))}
    </div>
  );
}

