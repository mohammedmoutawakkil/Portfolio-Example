const pngs =
    import.meta.globEager('/src/assets/images/projects/*.png');
const projects = [{
        id: 1,
        title: 'Laureats',
        category: 'Web Application',
        img: pngs['/src/assets/images/projects/web-project-1.png'].default,
        link: 'http://laureats.fsjes-umi.ac.ma/'
    },
    {
        id: 2,
        title: 'MK Market',
        category: 'Desktop Application/OpenSource',
        img: pngs['/src/assets/images/projects/desktop-project-1.png'].default,
        link: 'https://github.com/mohammedmoutawakkil/MKMarket'
    },
    {
        id: 3,
        title: 'MK Template',
        category: 'UI/OpenSource',
        img: pngs['/src/assets/images/projects/ui-project-1.png'].default,
        link: 'https://mktemplate.vercel.app/'
    },
    {
        id: 4,
        title: 'MK Coffee',
        category: 'UI/OpenSource',
        img: pngs['/src/assets/images/projects/ui-project-2.png'].default,
        link: 'https://mkcoffee.vercel.app/'
    },
    {
        id: 5,
        title: 'Easy Booking',
        category: 'Web Application',
        img: pngs['/src/assets/images/projects/web-project-2.png'].default,
        link: 'https://hub.docker.com/r/yezz123/easybooking'
    },
];

export default projects;
