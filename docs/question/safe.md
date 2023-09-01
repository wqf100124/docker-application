# 安全相关

#### 提现问题
```php
<?php

// 账户余额
$balance = '20';
// 用户输入
$input = '+50*-3';

if ($input < 10) {
    echo '低于最小限制';
} else if ($input > 100) {
    echo '超出最大限制';
} else if ($balance < $input) {
    echo '可用余额不足';
} else {
    echo '更新账户余额：' . ($balance - $input);
}

echo PHP_EOL;

// 解决办法
$input = abs(sprintf("%.2f", $input));
echo $input;
```

```php 

        var_dump(time(801));
// 秒数转换时分秒
    function time(int $seconds)
    {
        $h = intval($seconds / 3600);
        $m = intval($seconds % 3600 / 60);
        $s = $seconds % 60;

        $time = '';
        if ($h > 0) {
            $time .= $h . '小时';
        }
        if ($m > 0) {
            $time .= $m . '分钟';
        }
        if ($s > 0) {
            $time .= $s . '秒';
        }
    }
```