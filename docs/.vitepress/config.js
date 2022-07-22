import {defineConfig} from 'vitepress';

export default defineConfig({
    title: 'Docker的应用',
    description: '主要记录Docker在开发和生产环境中的使用文档',
    lang: 'zh-CN',
    base: '/docker-application/',
    head: [['link', {rel: 'shortcut icon', href: '/logo.svg'}]],
    themeConfig: {
        editLink: false,
        logo: '/logo.svg',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/wqf100124/docker-application'},
        ],
        docFooter: {
            prev: '上一条',
            next: '下一条',
        },
        nav: [
            {
                text: '开发环境',
                items: [
                    {text: 'PHP', link: '/dev/php'},
                    {text: 'Django', link: '/dev/django'},
                ]
            },
            {
                text: '生产环境',
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
            },
            {
                text: '数据库',
                items: [
                    {text: 'Postgres', link: '/db/pgsql'},
                    {text: 'Mysql', link: '/db/mysql'},
                    {text: 'MariaDB', link: '/db/mariadb'},
                    {text: 'Redis', link: '/db/redis'},
                    {text: 'Memcached', link: '/db/memcached'},
                ]
            },
            {
                text: '第三方服务',
                items: [
                    {text: 'MQ', link: '/service/mq'},
                    {text: 'Webhook', link: '/service/webhook'},
                    {text: 'Jenkins', link: '/service/jenkins'},
                    {text: 'Gitlab', link: '/service/gitlab'},
                ]
            },
            {
                text: '服务器部署',
                items: [
                    {text: 'Ubuntu20.04', link: '/deploy/ubuntu20.04'},
                ]
            }
        ],
        sidebar: {
            '/dev/': [
                {
                    text: '开发环境搭建',
                    items: [
                        {text: 'PHP', link: '/dev/php'},
                        {text: 'Django', link: '/dev/django'},
                    ]
                }
            ],
            '/prod/': [
                {
                    text: '生产环境',
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
            '/db/': [
                {
                    text: '数据库',
                    items: [
                        {text: 'Postgres', link: '/db/pgsql'},
                        {text: 'Mysql', link: '/db/mysql'},
                        {text: 'MariaDB', link: '/db/mariadb'},
                        {text: 'Redis', link: '/db/redis'},
                        {text: 'Memcached', link: '/db/memcached'},
                    ]
                }
            ],
            '/service/': [
                {
                    text: '第三方服务',
                    items: [
                        {text: 'MQ', link: '/service/mq'},
                        {text: 'Webhook', link: '/service/webhook'},
                        {text: 'Jenkins', link: '/service/jenkins'},
                        {text: 'Gitlab', link: '/service/gitlab'},
                    ]
                }
            ],
            '/deploy/': [
                {
                    text: '服务器部署',
                    items: [
                        {text: 'Ubuntu20.04', link: '/deploy/ubuntu20.04'},
                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Wade Wang'
        },
    }
});