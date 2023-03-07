import { iArticle } from "../src/shared/interfaces";

// Import author profiles
import { IAGO } from "./_BLOG_SETUP";

// main article list to display all atricles


// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/blog/presentation.tsx",
    featureArticle: false,
    preview: {
      author: IAGO,
      date: "March 7 2023",
      articleTitle: "Apresentação",
      shortIntro:
        "Me conheça melhor",
      tags: "introduction, presentation",
      thumbnail: "/public/images/code2-icon.png",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
        ogImage: "/public/images/code2-icon.png",
    },
  },
  {
    path: "/pages/blog/outro-artigo.tsx",
    featureArticle:false,
    preview: {
      author: IAGO,
      date: "March 5 2023",
      articleTitle: "Meu segundo artigo",
      shortIntro:
        "Teste teste",
      tags: "demo, tags tags tags, blogueiro d++",
      thumbnail: "/public/images/react-icon.png",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
        ogImage: "/public/images/react-icon.png",
      },
  },
  {
    path: "/pages/blog/teste.tsx",
    featureArticle:false,
    preview: {
      author: IAGO,
      date: "March 7 2023",
      articleTitle: "Outro teste",
      shortIntro:
        "Teste teste",
      tags: "teste, tags tags tags, blogueiro d++",
      thumbnail: "/public/images/react-icon.png",
      category: "Teste",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
      ogImage: "/public/images/react-icon.png",
    },
  },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
