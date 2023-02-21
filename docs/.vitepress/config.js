import {defineConfig} from 'vitepress';

export default defineConfig({
    title: '开发笔记',
    description: '记录日常在开发、生产以及部署过程中遇到的问题和解决方案。',
    lang: 'zh-CN',
    base: '/docker-application/',
    head: [
        ['link', {rel: 'shortcut icon', href: '/docker-application/image/logo.svg'}]
    ],
    themeConfig: {
        editLink: false,
        logo: {
            light: '/image/logo.svg',
            dark: '/image/logo.svg',
        },
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
                    {text: 'Scrapy', link: '/dev/scrapy'},
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
                text: '依赖服务',
                items: [
                    {text: 'MQ', link: '/service/mq'},
                    {text: 'Webhook', link: '/service/webhook'},
                    {text: 'Jenkins', link: '/service/jenkins'},
                    {text: 'Gitlab', link: '/service/gitlab'},
                ]
            },
            {
                text: '原生部署',
                items: [
                    {text: 'Ubuntu20.04', link: '/deploy/ubuntu20.04'},
                ]
            }
        ],
        sidebar: {
            '/dev/': [
                {
                    text: '开发环境',
                    items: [
                        {text: 'PHP', link: '/dev/php'},
                        {text: 'Django', link: '/dev/django'},
                        {text: 'Scrapy', link: '/dev/scrapy'},
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
                    text: '依赖服务',
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
                    text: '原生部署',
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