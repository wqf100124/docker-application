import {defineConfig} from 'vitepress';

export default defineConfig({
    title: 'Docker的应用',
    description: '主要记录Docker在开发和生产环境中的使用文档',
    lang: 'zh-CN',
    base: '/docker-application/',
    themeConfig: {
        editLink: false,
        nav: [
            {text: '开发环境', link: '/dev/php'},
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
            },
            {
                text: '数据库',
                items: [
                    {text: 'Postgres', link: '/db/pgsql'},
                    {text: 'Mysql', link: '/db/mysql'},
                    {text: 'Redis', link: '/db/redis'},
                    {text: 'MariaDB', link: '/db/mariadb'}
                ]
            },
            {
                text: '部署',
                items: [
                    {text: 'Gitlab', link: '/deploy/gitlab'},
                    {text: 'Jenkins', link: '/deploy/jenkins'},
                    {text: 'Ubuntu', link: '/deploy/ubuntu'},
                    {text: 'Webhook', link: '/deploy/webhook'},
                    {text: 'MQ', link: '/deploy/mq'},
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
            ],
            '/db/': [
                {
                    text: '数据库',
                    items: [
                        {text: 'Postgres', link: '/db/pgsql'},
                        {text: 'Mysql', link: '/db/mysql'},
                        {text: 'Redis', link: '/db/redis'},
                        {text: 'MariaDB', link: '/db/mariadb'}
                    ]
                }
            ],
            '/deploy/': [
                {
                    text: '部署',
                    items: [
                        {text: 'Gitlab', link: '/deploy/gitlab'},
                        {text: 'Jenkins', link: '/deploy/jenkins'},
                        {text: 'Ubuntu', link: '/deploy/ubuntu'},
                        {text: 'Webhook', link: '/deploy/webhook'},
                        {text: 'MQ', link: '/deploy/mq'},
                    ]
                }
            ]
        }
    }
});