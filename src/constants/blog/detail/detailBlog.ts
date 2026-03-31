type Post = {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image: string;
};

export const posts: Post[] = [
    {
        id: 1,
        title: "Tenemos Nueva App",
        excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        author: "Olivia Rye",
        date: "7 abr 2025",
        image: "/blog/marketing.webp"
    },
    {
        id: 2,
        title: "Pasa nuestro curso de marketing",
        excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        author: "Olivia Rye",
        date: "7 abr 2025",
        image: "/blog/mujer marketing.webp"
    },
    {
        id: 3,
        title: "Nos expandimos a instagram",
        excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        author: "Olivia Rye",
        date: "7 abr 2025",
        image: "/blog/chica marketing.webp"
    }
];