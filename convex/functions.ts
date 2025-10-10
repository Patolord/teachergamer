import { query, mutation, action } from "./_generated/server";
import { v } from "convex/values";

// Return the last 100 tasks in a given task list.
export const getUserList = query({
  args: { userId: v.id("users") },
  returns: v.array(v.object({
    _id: v.id("users"),
    _creationTime: v.number(),
    name: v.string(),
  })),
  handler: async (ctx, args) => {
    const users = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("_id"), args.userId)) 
      .order("desc")
      .take(100);
    return users;
  },
});

// Create a new user with the given name
export const createUser = mutation({
  args: { name: v.string() },
  returns: v.id("users"),
  handler: async (ctx, args) => {
    const newUserId = await ctx.db.insert("users", { name: args.name });
    return newUserId;
  },
});

export const doSomething = action({
  args: {},
  returns: v.string(),
  handler: () => {
    // implementation goes here

    // optionally return a value
    return "success";
  },
});

export const getForAuthenticatedUser = query({
  args: {},
  returns: v.array(v.object({
    _id: v.id("messages"),
    _creationTime: v.number(),
    body: v.string(),
    user: v.string(),
  })),
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});