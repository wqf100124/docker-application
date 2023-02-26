# WebHook

Github：[https://github.com/adnanh/webhook](https://github.com/adnanh/webhook)

Github：[https://hub.docker.com/r/almir/webhook](https://hub.docker.com/r/almir/webhook)


1.安装

Ubuntu
```sh
$ sudo apt-get install webhook
```

2.配置域名

```ini
# http
server {
    listen       80;
    server_name  webhook.example.com;

    location / {
        proxy_pass http://127.0.0.1:9000;
    }
}
```

3.简单的例子hooks.json
```json
[
    {
        "id": "example",
        "execute-command": "/etc/webhook/deploy/example.sh",
        "command-working-directory": "/etc/webhook/deploy",
        "response-message": "webhook success!"
    }
]
```

运行
```sh
# 测试
webhook -hooks /var/web/servicd/webhook/webhooks.json -urlprefix 'webhooks' -port 9000 -verbose
# 后台运行
webhook -hooks /var/web/servicd/webhook/webhooks.json -urlprefix 'webhooks' -port 9000 -nopanic &

# https
-cert /path/to/cert.pem
-key /path/to/key.pem
```

重启
```sh
kill -USR1 webhookpid
或
kill -HUP webhookpid
```

Git自动部署

/etc/webhook/deploy/git.sh
```sh
#!/bin/sh
PATH=${1}
BRANCH=${2}
if [ ${PATH} ]
then
  echo "pull ${PATH} origin/${BRANCH}"
  cd "${PATH}"
  git fetch --all 2>&1
  git reset --hard origin/${BRANCH} 2>&1
  git pull origin ${BRANCH} 2>&1
fi
```

Gitee 密码方式
```json
[
    {
        "id": "example",
        "execute-command": "/etc/webhook/deploy/git.sh /home/web/project/example master",
        "command-working-directory": "/etc/webhook/deploy",
        "response-message": "webhook success!",
        "http-methods": [
            "POST",
            "GET"
        ],
        "trigger-rule": {
            "match": {
                "type": "value",
                "value": "9p3H11kOy8njfeHpYyfhZma0bjEW2ZC2",
                "parameter": {
                    "source": "header",
                    "name": "X-Gitee-Token"
                }
            }
        }
    }
]
```

Github webhook
```json
[
  {
    "id": "webhook.github",
    "execute-command": "/var/scripts/webhook.github.sh",
    "command-working-directory": "/home/webhooks/shell"
    "pass-arguments-to-command": [
      {
        "source": "payload",
        "name": "head_commit.id"
      },
      {
        "source": "payload",
        "name": "pusher.name"
      },
      {
        "source": "payload",
        "name": "pusher.email"
      }
    ],
    "trigger-rule": {
      "and": [
        {
          "match": {
            "type": "payload-hash-sha1",
            "secret": "mysecret",
            "parameter": {
              "source": "header",
              "name": "X-Hub-Signature"
            }
          }
        },
        {
          "match": {
            "type": "value",
            "value": "refs/heads/master",
            "parameter": {
              "source": "payload",
              "name": "ref"
            }
          }
        }
      ]
    }
  }
]
```

Gitlab Webhook
```json
[
  {
    "id": "webhook.gitlab",
    "execute-command": "/var/scripts/webhook.gitlab.sh",
    "command-working-directory": "/home/webhooks/shell"
    "pass-arguments-to-command": [
      {
        "source": "payload",
        "name": "user_name"
      }
    ],
    "response-message": "Executing redeploy script",
    "trigger-rule": {
      "match": {
        "type": "value",
        "value": "<YOUR-GENERATED-TOKEN>",
        "parameter": {
          "source": "header",
          "name": "X-Gitlab-Token"
        }
      }
    }
  }
]
```

Gogs webhook
```json
[
  {
    "id": "webhook.gogs",
    "execute-command": "/var/scripts/webhook.gogs.sh",
    "command-working-directory": "/home/webhooks/shell"
    "pass-arguments-to-command": [
      {
        "source": "payload",
        "name": "head_commit.id"
      },
      {
        "source": "payload",
        "name": "pusher.name"
      },
      {
        "source": "payload",
        "name": "pusher.email"
      }
    ],
    "trigger-rule": {
      "and": [
        {
          "match": {
            "type": "payload-hash-sha256",
            "secret": "mysecret",
            "parameter": {
              "source": "header",
              "name": "X-Gogs-Signature"
            }
          }
        },
        {
          "match": {
            "type": "value",
            "value": "refs/heads/master",
            "parameter": {
              "source": "payload",
              "name": "ref"
            }
          }
        }
      ]
    }
  }
]
```

Gitea webhook
```json
[
  {
    "id": "webhook.gitea",
    "execute-command": "/var/scripts/webhook.gitea.sh",
    "command-working-directory": "/home/webhooks/shell"
    "pass-arguments-to-command":
    [
      {
        "source": "payload",
        "name": "head_commit.id"
      },
      {
        "source": "payload",
        "name": "pusher.name"
      },
      {
        "source": "payload",
        "name": "pusher.email"
      }
    ],
    "trigger-rule":
    {
      "and":
      [
        {
          "match":
          {
            "type": "value",
            "value": "mysecret",
            "parameter":
            {
              "source": "payload",
              "name": "secret"
            }
          }
        },
        {
          "match":
          {
            "type": "value",
            "value": "refs/heads/master",
            "parameter":
            {
              "source": "payload",
              "name": "ref"
            }
          }
        }
      ]
    }
  }
]
```

A simple webhook with a secret key in GET query  
example.com:9000/hooks/simple-one - won't work  
example.com:9000/hooks/simple-one?token=42 - will work
```json
[
  {
    "id": "simple-one",
    "execute-command": "/path/to/command.sh",
    "response-message": "Executing simple webhook...",
    "trigger-rule":
    {
      "match":
      {
        "type": "value",
        "value": "42",
        "parameter":
        {
          "source": "url",
          "name": "token"
        }
      }
    }
  }
]
```

hash-sha256
```json
{
  "match": {
    "type": "payload-hash-sha256",
    "secret": "yoursecret",
    "parameter": {
      "source": "header",
      "name": "X-Signature"
    }
  }
}
```

Ip白名单
```json
{
  "match": {
    "type": "ip-whitelist",
    "ip-range": "192.168.0.1/24"
  }
}
```

## Yaml

```yaml
- id: example
  execute-command: "/home/web/deploy/example.sh"
  http-methods:
    - GET
    - POST
  pass-arguments-to-command:
    - source: string
      name: "参数1"
    - source: string
      name: "参数2"
  response-message: "webhook test success!"
```

gitee
```yaml
- id: gitee
  execute-command: "/home/web/deploy/git.sh"
  http-methods:
    - GET
    - POST
  pass-arguments-to-command:
    - source: string
      name: "/home/web/project/example"
    - source: string
      name: "master"
  trigger-rule:
    match:
      type: "value"
      value: "<YOUR-GENERATED-TOKEN>"
      parameter:
        source: "header"
        name: "X-Gitee-Token"
  response-message: "webhook success!"
```

./deploy.sh /var/wep/project/example main
```sh
#!/bin/bash
git_path=${1}
if [ -d ${git_path} ]
then
  git_branch=${2}
  echo "path: ${git_path}"
  echo "branch: origin/${git_branch}"
  cd ${git_path}
  git fetch --all 2>&1
  git reset --hard origin/${git_branch} 2>&1
  git pull origin ${git_branch} 2>&1
else
  echo "No such directory: ${git_path}"
fi
```