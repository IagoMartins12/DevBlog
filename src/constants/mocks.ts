import { IAGO } from "../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iArticle } from "../shared/interfaces";

export const MOCK_ARTICLES_LIST: iArticle[] = [
    {
        path: '/pages/tutorial/how-to-setup-blog.tsx',
        featureArticle: true,
        preview: {
            author: IAGO,
            date: "August 08 2022",
            articleTitle: "How to setup this blog template",
            tags: "demo, blog setup",
            thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
            shortIntro: "These are the steps to setup your blog",
            category: 'tutorial'
        },
        seo: {
            title: "How to setup this blog template",
            description: "These are the steps to setup your blog",
            keywords: "demo, blog setup",
            ogImage: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
            twitterHandle: "@IAGO_nalwala",
            author: IAGO.name
        }
    },
]