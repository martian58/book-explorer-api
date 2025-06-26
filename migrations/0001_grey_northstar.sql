CREATE TABLE "user_read_books" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"book_id" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "user_read_books_user_id_book_id_unique" UNIQUE("user_id","book_id")
);
