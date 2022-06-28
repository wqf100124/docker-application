import {defineConfig} from 'vitepress';

export default defineConfig({
    title: 'Docker的应用',
    description: '主要记录Docker在开发和生产环境中的使用文档',
    lang: 'zh-CN',
    base: '/docker-application/',
    themeConfig: {
        editLink: false,
        nav: [
            {text: '开发环境', link: '/dev'},
            {
                text: '生产环节',
                items: [
                    {text: '基础配置', link: '/prod/'},
                    {text: 'Nginx', link: '/prod/nginx'},
                    {text: 'PHP-FPM', link: '/prod/php-fpm'},
                    {text: 'Laravel Octane', link: '/prod/octane'},
                    {text: 'Supervisor', link: '/prod/supervisor'},
                    {text: 'Taro', link: '/prod/taro'},
                    {text: 'Django', link: '/prod/django'},
                    {text: 'Scrapy', link: '/prod/scrapy'},
                ]
            }
        ],
        sidebar: {
            '/dev/': [
                {
                    text: '开发环境搭建',
                    items: [
                        {text: 'PHP', link: '/dev/'},
                    ]
                }
            ],
            '/prod/': [
                {
                    text: '生产环境部署',
                    items: [
                        {text: '基础配置', link: '/prod/'},
                        {text: 'Nginx', link: '/prod/nginx'},
                        {text: 'PHP-FPM', link: '/prod/php-fpm'},
                        {text: 'Laravel Octane', link: '/prod/octane'},
                        {text: 'Supervisor', link: '/prod/supervisor'},
                        {text: 'Taro', link: '/prod/taro'},
                        {text: 'Django', link: '/prod/django'},
                        {text: 'Scrapy', link: '/prod/scrapy'},
                    ]
                }
            ]
        }
    }
});