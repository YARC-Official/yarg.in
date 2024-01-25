import { TagColor } from "@/components/Tag"
import { NEWS_SOURCE } from "./constants"

export const articleTypes: {
    [k: string]: {
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