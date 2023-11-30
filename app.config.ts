export default defineAppConfig({
  alpine: {
    title: 'wypratama',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300,
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right',
      logo: 'wypratama'
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine', // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on', // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'wypratama',
      instagram: 'wypratama',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/wypratama',
      },
    },
    form: {
      successMessage: 'Message sent. Thank you!',
    },
  },
});
