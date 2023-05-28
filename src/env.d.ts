/// <reference types="astro/client" />

// types.ts
export type Frontmatter = {
    postTitle: string;
    postDescription: string;
    publishedTime: string;
    tags: string[];
};