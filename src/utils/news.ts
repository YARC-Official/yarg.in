import { TagColor } from "@/components/Tag"
import { NEWS_SOURCE } from "./constants"
import { z } from "zod";

export const ValidArticleTypes = z.union([
    z.literal("update"), 
    z.literal("announcement"), 
    z.literal("fix"), 
    z.literal("event"), 
    z.literal("tournament"), 
    z.literal("dlc"),
]);

export type ArticleTypes = z.infer<typeof ValidArticleTypes>;

export const ArticleAuthor = z.object({
    displayName: z.string(),
    avatar: z.string().url().optional(),
    role: z.string().optional(),
});

export type ArticleAuthor = z.infer<typeof ArticleAuthor>;

export const BaseArticleSchema = z.object({
    type: ValidArticleTypes,
    title: z.string(),
    banner: z.string().url().optional(),
    author: z.array(z.string()),
    release: z.string().datetime().optional(),
    video: z.string().url().optional(),
});

export type BaseArticle = z.infer<typeof BaseArticleSchema>;

const ArticleSchema = BaseArticleSchema.merge(
    z.object({
        author: z.array(ArticleAuthor)
    }
));

export type Article = z.infer<typeof ArticleSchema>;

export const articleTypes: {
    [key in ArticleTypes]: {
        color: TagColor,
        text: string
    } | undefined
} = {
    "update": {
        color: "blue",
        text: "Update"
    },

    "announcement": {
        color: "green",
        text: "Announcement"
    },

    "fix": {
        color: "yellow",
        text: "Fix"
    },

    "event": {
        color: "purple",
        text: "Event"
    },

    "tournament": {
        color: "red",
        text: "Tournament"
    },

    "dlc": {
        color: "pink",
        text: "DLC Release"
    }
}

export const getArticle = async (slug: string) => {
    const article = await fetch(`${NEWS_SOURCE}/articles/${slug}.md`, { next: { tags: ["articles", `article-${slug}`] } }).then(res => res.text());

    return article;
}