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

### dataSource

1. 更灵活的配置

``` javascript
const dataSource = transpose([
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
const dataSource = [].concat(
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

### theme

``` javascript
类型 string ｜ string[] | object
```

自定义主题

默认主题 [ '#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127' ];

案例

``` html
<d-calendar-graph text="DevUI is excellent" theme="halloween"></d-calendar-graph>

<d-calendar-graph text="DevUI is excellent" theme="#7F7FF0"></d-calendar-graph>

<d-calendar-graph text="DevUI is excellent" [theme]="['#d8e9f2', '#fdde8a', '#fa9e59', '#e55648', '#ae1345']"></d-calendar-graph>

<d-calendar-graph text="DevUI is excellent" [theme]="{
  source: [0, 10, 20, 30, 40],
  target: ['#d8e9f2', '#f57647', '#ee6544', '#e55648', '#db484c']
}"></d-calendar-graph>

<d-calendar-graph text="DevUI is excellent" [theme]="{
  '0': '#d8e9f2',
  '5': '#fbe793',
  '10': '#fdcf7d',
  '20': '#fdb163',
  '50': '#f88a50',
  '100': '#ee6544',
  '200': '#db484c',
  '500': '#bf2649',
  '1000': '#9e0142'
}"></d-calendar-graph>
```

## 栗子🌰

❤️ DevUI

[❤️ DevUI](src/assets/lovedevui.png)

DevUI is excellent

[DevUI is excellent](src/assets/devui-excellent.png)

## TODO

- 解析多种格式的theme
  - 主题名称，如：'halloween'
  - 基本色，如：'#7F7FF0'
  - 颜色数组，如：[ '#e55648', ... ]
  - 阶梯查找表，如：{ source: [], target: [] }
  - 数值/颜色映射表，如：{ 10: '#fdcf7d', ... }
