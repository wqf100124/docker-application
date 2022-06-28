<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <title>The shop production environment.</title>
    <link href="/static/css/weui.min.css" rel="stylesheet">
    <style>
        .container {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
            color: var(--weui-FG-0);
        }
    </style>
</head>
<body>
<div class="container">
    <div class="weui-msg" style="padding: 50px 0;">
        <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
        <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">Welcome!</h2>
            <p class="weui-msg__desc">
                The shop production environment build success.
            </p>
            <p class="weui-msg__desc">
                <?php echo PHP_VERSION; ?>
            </p>
        </div>
        <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <p class="weui-footer__text">built with docker</p>
            </div>
        </div>
    </div>
</div>
</body>
</html>
