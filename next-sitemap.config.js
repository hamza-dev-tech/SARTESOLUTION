/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.sartesolution.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './public',
    exclude: ['/private/*', '/admin/*'],
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/', disallow: ['/private/', '/admin/'] },
      ],
    },
  };
  