import { query, mutation, action } from "./_generated/server";
import { v } from "convex/values";

// Return the l ast 100 tasks in a given task list.
export const getUserList = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const users = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("_id"), args.userId)) 
      .order("desc")
      .take(100);
    return users;
  },
});

// Create a new task with the given text
export const createUser = mutation({
  args: { name: v.string(), tokenIdentifier: v.string() },
  handler: async (ctx, args) => {
    const newUserId = await ctx.db.insert("users", { name: args.name, tokenIdentifier: args.tokenIdentifier });
    return newUserId;
  },
});

export const doSomething = action({
  handler: () => {
    // implementation goes here

    // optionally return a value
    return "success";
  },
});

export const getForAuthenticatedUser = query({
  args: { },
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }
    return await ctx.db.query("messages").collect();
  },
});