module.exports = {
    title: 'JS_ticks',
    description: 'Just playing around',
    base: "/js_tricks/",
    description: '常用的js方法，js_tricks',
    dest: './dist',
    repo: "https://github.com/KangJun-KJ/js_tricks/tree/gh-pages",
    head: [
        ['link', { rel: 'icon', href: `/images/favicon.png` }],
        ['meta', { name: 'theme-color', content: '#00adb5' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileColor', content: '#00adb5' }],
        ['meta', { name: 'description', itemprop: 'description', content: '常用的js方法，js_tricks' }],
        ['meta', { itemprop: 'name', content: 'js_trick' }],
        ['meta', { itemprop: 'image', content: '/js_tricks/images/favicon.png' }],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'github', link: 'https://github.com/KangJun-KJ/js_tricks' },
        ],
        sidebar: [
            '/bom/',
            '/dom/',
            '/array/',
            '/date/'
        ]
    },
    markdown: {
        anchor: { permalink: false },
        toc: { includeLevel: [1, 2] },
        config: md => {
            md.use(require('markdown-it-include'), './')
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
            }
        }
    }
}