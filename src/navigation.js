import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
      
    {
      text: 'Articulos',
      links: [
        {
          text: 'Lista de articulos',
          href: getBlogPermalink(),
        },
      ],
    },

  ],

};

export const footerData = {
  links: [
    {
      title: 'Nosotros',
      links: [
        { text: 'Acerca de', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'contacto', href: '/contact' }
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
