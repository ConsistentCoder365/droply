CREATE TABLE "files" (
	"ID" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Name" text NOT NULL,
	"Path" text NOT NULL,
	"Size" integer NOT NULL,
	"Type" text NOT NULL,
	"FileURL" text NOT NULL,
	"ThumbnailURL" text,
	"UserId" text NOT NULL,
	"ParentId" uuid NOT NULL,
	"IsFolder" boolean DEFAULT false NOT NULL,
	"IsStarred" boolean DEFAULT false NOT NULL,
	"IsTrash" boolean DEFAULT false NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"UpdatedAt" timestamp DEFAULT now() NOT NULL
);
