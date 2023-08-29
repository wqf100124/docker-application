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