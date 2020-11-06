# Calendar Graph

生成自定义的Github提交图。

## 快速开始

``` html
<d-calendar-graph text="❤ DevUI"></d-calendar-graph>
```

## 支持的字母和符号

A-Za-z0-9❤️

## API

### date

自定义日期区间

``` javascript
const date = '2020-06-01';
const date = ['2020-06-01'];
const date = ['2020-06-01', '2020-11-03'];
```

### text

自定义显示文本

``` javascript
const text = '❤ DevUI';
const text = 'DevUI is excellent';
const text = 'Today is 20201103';
```

### sourceData

1. 更灵活的配置

``` javascript
const sourceData = transpose([
  // I
  [ 1, 1, 1, 1, 1, 1, 1 ],

  [ 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0 ],
  
  // a
  [ 0, 1, 0, 0, 1, 0, 0 ],
  [ 0, 1, 0, 1, 0, 1, 0 ],
  [ 0, 1, 0, 1, 0, 1, 0 ],
  [ 0, 0, 1, 1, 1, 1, 0 ],

  [ 0, 0, 0, 0, 0, 0, 0 ],

  // m
  [ 0, 1, 1, 1, 1, 1, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0 ],
  [ 0, 1, 1, 1, 1, 1, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 1, 1, 0 ],

  [ 0, 0, 0, 0, 0, 0, 0 ],
  
  [ 0, 0, 0, 0, 0, 0, 0 ],

  // K
  [ 1, 1, 1, 1, 1, 1, 1 ],
  [ 0, 0, 0, 1, 0, 0, 0 ],
  [ 0, 0, 0, 1, 0, 0, 0 ],
  [ 0, 0, 1, 0, 1, 0, 0 ],
  [ 1, 1, 0, 0, 0, 1, 1 ],
  
  [ 0, 0, 0, 0, 0, 0, 0 ],

  // a
  [ 0, 1, 0, 0, 1, 0, 0 ],
  [ 0, 1, 0, 1, 0, 1, 0 ],
  [ 0, 1, 0, 1, 0, 1, 0 ],
  [ 0, 0, 1, 1, 1, 1, 0 ],
  
  [ 0, 0, 0, 0, 0, 0, 0 ],

  // g
  [ 0, 1, 1, 1, 0, 0, 1 ],
  [ 1, 0, 0, 0, 1, 0, 1 ],
  [ 1, 0, 0, 0, 1, 0, 1 ],
  [ 1, 1, 1, 1, 1, 1, 0 ],
  
  [ 0, 0, 0, 0, 0, 0, 0 ],

  // o
  [ 0, 0, 1, 1, 1, 0, 0 ],
  [ 0, 1, 0, 0, 0, 1, 0 ],
  [ 0, 1, 0, 0, 0, 1, 0 ],
  [ 0, 0, 1, 1, 1, 0, 0 ],
  
  [ 0, 0, 0, 0, 0, 0, 0 ],

  // l
  [ 1, 1, 1, 1, 1, 1, 0 ],

])
```

2. 也可以使用定义好的字符变量

``` javascript
const sourceData = [].concat(
  LETTER_I, EMPTY_WEEK, EMPTY_WEEK,
  LETTER_a, EMPTY_WEEK, LETTER_m, EMPTY_WEEK, EMPTY_WEEK,
  LETTER_K, EMPTY_WEEK, LETTER_a, EMPTY_WEEK, LETTER_g, EMPTY_WEEK, LETTER_o, EMPTY_WEEK, LETTER_l
);
```

### schedule

这是一个boolean类型的参数，用于打印提交日程，默认值为false，即不打印提交日程。

提交日程的格式是：

您需要在X年X月X日，提交X次代码。

只要按照日程规定的日期进行Github代码提交，即可在你的Github提交日历图上画出想要的图形，快试试吧！

## 栗子🌰

❤️ DevUI

[❤️ DevUI](src/assets/lovedevui.png)

DevUI is excellent

[DevUI is excellent](src/assets/devui-excellent.png)
