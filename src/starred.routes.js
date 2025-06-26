import { Router } from "express";
import { db } from "./db.js";
import { userStarredBooks } from "./schema.js";
import { requireClerkAuth } from "./auth.js";
import { eq } from "drizzle-orm";

export const router = Router();

// Get all starred books for the logged-in user
router.get("/", requireClerkAuth, async (req, res) => {
  const userId = req.userId;
  const result = await db.select().from(userStarredBooks).where(eq(userStarredBooks.userId, userId));
  res.json({ books: result.map(row => row.bookId) });
});

// Star a book
router.post("/:bookId", requireClerkAuth, async (req, res) => {
  const userId = req.userId;
  const { bookId } = req.params;
  try {
    await db.insert(userStarredBooks).values({ userId, bookId }).onConflictDoNothing();
    res.status(201).json({ success: true });
  } catch(err) {
    res.status(500).json({ error: "Failed to star book" });
  }
});

// Unstar a book
router.delete("/:bookId", requireClerkAuth, async (req, res) => {
  const userId = req.userId;
  const { bookId } = req.params;
  await db.delete(userStarredBooks).where(
    eq(userStarredBooks.userId, userId),
    eq(userStarredBooks.bookId, bookId)
  );
  res.json({ success: true });
});