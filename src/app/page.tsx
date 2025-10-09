"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  return (
    <>
      <Authenticated>
        <UserButton />
        <Content />
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
        
      </Unauthenticated>
    </>
  );
}

function Content() {
  const messages = useQuery(api.functions.getForAuthenticatedUser);

  return <div>
    {messages?.map((message) => (
      <div key={message._id}>{message.body} - {message.user}</div>
    ))}
  </div>;
}

