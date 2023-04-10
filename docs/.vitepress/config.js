import {defineConfig} from 'vitepress';

export default defineConfig({
    title: '开发笔记',
    description: '记录日常在开发、生产以及部署过程中遇到的问题和解决方案。',
    lang: 'zh-CN',
    base: '/',
    head: [
        ['link', {rel: 'shortcut icon', href: '/image/logo.svg'}]
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
                link: '/dev/php'
            },
            {
                text: '生产环境',
                link: '/prod/'
            },
            {
                text: '数据库',
                link: '/db/pgsql'
            },
            {
                text: '第三方服务',
                link: '/service/rabbitmq'
            },
            {
                text: '原生部署',
                link: '/deploy/ubuntu'
            },
            {
                text: '常见问题',
                link: '/question/'
            }
        ],
        sidebar: {
            '/dev/': [
                {
                    text: '开发环境容器',
                    items: [
                        {text: 'PHP', link: '/dev/php'},
                        {text: 'Django', link: '/dev/django'},
                        {text: 'Scrapy', link: '/dev/scrapy'},
                        {text: 'Nodejs项目', link: '/dev/nodejs'},
                    ]
                }
            ],
            '/prod/': [
                {
                    text: '生产环境容器',
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
                    text: '第三方服务',
                    items: [
                        {text: 'RabbitMQ', link: '/service/rabbitmq'},
                        {text: 'Gitlab', link: '/service/gitlab'},
                        {text: 'Jenkins', link: '/service/jenkins'},
                    ]
                }
            ],
            '/deploy/': [
                {
                    text: '原生部署',
                    items: [
                        {text: '宝塔面板', link: '/deploy/bt'},
                        {text: 'Ubuntu', link: '/deploy/ubuntu'},
                        {text: 'Cron(定时任务)', link: '/deploy/cron'},
                        {text: 'Webhook', link: '/deploy/webhook'},
                        {text: 'Jenkins', link: '/deploy/jenkins'},
                    ]
                }
            ],
            '/question/': [
                {
                    text: '常见问题',
                    items: [
                        {text: 'Linux 挂载数据盘', link: '/question/disk'},
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