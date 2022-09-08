module.exports = {
  title: "ixo Documents",
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
    },
  },
  base: "/",
  description:
    "ixo - The Internet of Impact",
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: "theme/components",
      },
    ],
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
    ["@maginapp/vuepress-plugin-copy-code", {
      color: "#ffffff",
      backgroundColor: "#ffffff",
      align: { bottom: '7px', right: '12px' },
      successText: " ",
      duration: 350,
    }
    ],
    [ 'tabs' ],
  ],
  head: [
    
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cloud.typography.com/7420256/6416592/css/fonts.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap",
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
      },
    ],
        [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon.png",
      },
    ],
    [
      "script",
      {},
      `window.onload = function() {
        requestAnimationFrame(function() {
          if (location.hash) {
            const element = document.getElementById(location.hash.slice(1))

            if (element) {
              element.scrollIntoView()
            }
          }
        })
      }`,
    ],
    [
      "meta",
      {
        property:"og:image",
        content:"/img/ixo To Earth For Earth.jpeg",
      },
    ],
  ],
  themeConfig: {
    sidebarDepth: 3,
    smoothScroll: true,
    logo: "/img/ixo_logo.svg",
    logoDark: "/img/ixo_logo.svg",
    lastUpdated: "Updated on",
    repo: "ixofoundation/documents",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    docsBranch: 'main',
    docsDir: "",
    nav: [
      { text: 'Home', link: '/', },
      { text: 'Relayers', link: '/relayers/', },
      { text: 'Developers', link: '/developers/',},
      { text: 'Validators', link: '/validators/',},
      { text: 'Creators', link: '/creators/',},
      {
        text: "GitHub",
        link: "https://github.com/ixofoundation/documents",
        icon: "/img/github.svg",
      },
    ],
    sidebar: {
      '/developers': [
        {
          title: 'Developers',
          children: [
            '/developers/',
          ],
          collapsable: true,
        }
      ],
      '/relayers': [
        {
          title: 'Relayers',
          children: [
            '/relayers/',
          ],
          collapsable: true,
        },
      ],
      '/validators': [
        {
          title: 'Validators',
          children: [
            '/validators/',
          ],
          collapsable: true,
        },
      ],
      '/creators': [
        {
          title: 'Creators',
          children: [
            '/creators/',
          ],
          collapsable: true,
        },
      ],
      "/": [
        {
          title: "Home",
          children: [
            "/relayers/",
            "/validators/",
            "/developers/",
            "/creators/",
          ],
          collapsable: false,
        },
      ]
    },
  },
};
