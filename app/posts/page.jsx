"use client";

import { useAuth } from "@clerk/nextjs";
import React, { useEffect } from "react";

export default function PostsPage() {
  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();

  console.log({ isLoaded, isSignedIn, userId, sessionId, getToken });
  return <div>page</div>;
}
