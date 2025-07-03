import {pgTable, text, uuid, integer, boolean, timestamp} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const files = pgTable("files", {
    id: uuid("ID").defaultRandom().primaryKey(),

    // basic file metadata
    name: text("Name").notNull(),
    path: text("Path").notNull(),
    size: integer("Size").notNull(),
    type: text("Type").notNull(), // determines if it's a file or directory

    // storage information
    fileURL: text("FileURL").notNull(),
    thumbnailURL: text("ThumbnailURL"),

    // ownership
    userId: text("UserId").notNull(),
    parentId: uuid("ParentId").notNull(), // for directories, null for root

    // file folder information
    isFolder: boolean("IsFolder").default(false).notNull(),
    isStarred: boolean("IsStarred").default(false).notNull(),
    isTrash: boolean("IsTrash").default(false).notNull(),

    // Timestamps
    createdAt: timestamp("CreatedAt").defaultNow().notNull(),
    updatedAt: timestamp("UpdatedAt").defaultNow().notNull(),
})

export const filesRelations = relations(files, ({one, many}) =>
({
    parent: one(files, {
        fields: [files.parentId],
        references: [files.id],
    }),

    children: many(files)
}))

// type definition
export const File = typeof files.$inferSelect
export const newFile = typeof files.$inferInsert