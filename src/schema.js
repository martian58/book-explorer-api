import { pgTable, serial, text, timestamp, unique } from "drizzle-orm/pg-core";

export const userStarredBooks = pgTable("user_starred_books", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  bookId: text("book_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => ([
   unique().on(table.userId, table.bookId)
]));


export const userReadBooks = pgTable("user_read_books", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  bookId: text("book_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => ([
   unique().on(table.userId, table.bookId)
]));