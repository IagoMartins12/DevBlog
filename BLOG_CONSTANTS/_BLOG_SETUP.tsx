import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";


export const IAGO: IAuthor = {
    name: "Iago Martins",
    designation: "FullStack Developer",
    bio: "Um desenvolvedor apaixonado pela tecnologia, tenho conhecimento e experiência principalmente no stack JavaScript (ES6+,React e NodeJs. Atualmente estagiando como fullstack na empresa Pmovil LTDA",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/IagoMartins12'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https:/linkedin.com/in/iago-martins-313838213/'
        },
    ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Dev blog';
export const WEBSITE_URL: string = 'https://nextjs-simple-blog-template.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px

    logo: {
        type: LogoType.TEXT,
        logo: 'Dev Blog',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Me',
            path: '/about-me'
        },
        {
            // to open a link in new tab pass newTab: true
            label: 'Github Repo',
            path: 'https://github.com/IagoMartins12/Personal-Blog-',
            newTab: true
        },
        {
            label: 'Contact Me',
            path: '/contact-me'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Me',
            path: '/about-me'
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/IagoMartins12/Personal-Blog',
            newTab: true
        },
        {
            label: 'Contact Me',
            path: '/contact-me'
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/profile.php?id=100002150451949',
            icon: <AiFillFacebook />
        },
        {
            link: 'https://www.instagram.com/iago_martins1/',
            icon: <AiFillInstagram />
        },
        {
            link: 'https:/linkedin.com/in/iago-martins-313838213/',
            icon: <AiFillLinkedin />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    author: `${IAGO.name}`,
    title: "Dev blog",
    description: "Um blog onde irei documentar meus estudos e experiencias na minha trajetoria na area de desenvolvimento! ",
    keywords: "Blog, next js,next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    ogImage: '/public/images/og-image.jpg'
}