module.exports = {
  title: 'JS_ticks',
  description: 'Just playing around',
  base: "/js_tricks/",
  description: '常用的js方法，js_tricks',
  dest: './dist',
  repo: "https://github.com/KangJun-KJ/js_tricks/",
  head: [
      ['link', { rel: 'icon', href: `/images/favicon.png` }]
  ],
  themeConfig: {
      nav: [
          { text: 'Home', link: '/' },
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