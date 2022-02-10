# hexo-link-card

Convert a link to a link card via existing markdown grammar.

使用现有 Markdown 语法将链接转换为卡片式链接（网页卡片）.

**卡片式链接的优点：**

1. 在移动互联网的时代，有许多人通过智能手机浏览文章，通过卡片式链接打开新页面对他们更友好；
2. 旧式的链接显示方式不够明显，很容易导致人们忽视了这是一条链接，卡片式链接能够突出显示，不容易被他人忽略；
3. 许多平台，例如 Bilibili，知乎，微信公众号等平台，均有将链接转换为卡片式链接的功能，如果能在书写 Markdown 阶段，就将卡片式链接的书写考虑进去，能给后续发布带来很大的便利。

## 安装 Install

在你的 Hexo 项目下执行以下命令即可。

``` sh
npm install hexo-link-card --save
```

## 语法 Grammar

我们定义如下语法：

``` markdown
---

OrangeX4/hexo-link-card - GitHub
https://github.com/OrangeX4/hexo-link-card
 
---
```

注意，两个空行里不应该有空格，否则会显示失败。

**这种语法有以下优点：**

1. 书写简单，易于识别，符合 Markdown 语法的设计理念；
2. 实现简单，只需要用 Javascript 的正则表达式替换和内置 HTML 功能即可实现；
3. 与现有的 Markdown 语法兼容，即使是没有实现这种语法的 Markdown 显示页面，也能有一定的显示效果（以两行分割线替代卡片）。

## 渲染效果 Preview

<a target="_blank" href="https://github.com/OrangeX4/hexo-link-card" style="position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; box-sizing: border-box; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-align-items: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center; width: 390px; min-height: 84px; border-radius: 8px; max-width: 100%; overflow: hidden; margin: 16px auto; padding: 12px 12px 9px 12px; background-color: #F6F6F6;"><span class="LinkCard-contents"><span style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; max-height: 40px; line-height: 1.25; color: #121212;">OrangeX4/hexo-link-card - GitHub</span><span style="display: -webkit-box; font-size: 13px; height: 18px; line-height: 18px; color: #999; word-break: break-all; text-overflow: ellipsis; overflow: hidden; -webkit-line-clamp: 1; -webkit-box-orient: vertical;"><span style="display: inline-flex; align-items: center;"><svg class="Zi Zi--InsertLink" fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path d="M13.414 4.222a4.5 4.5 0 1 1 6.364 6.364l-3.005 3.005a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.005-3.005a2.5 2.5 0 1 0-3.536-3.536l-3.005 3.005a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.005-3.005zm-6.187 6.187a.5.5 0 0 1 .638-.058l.07.058.706.707a.5.5 0 0 1 .058.638l-.058.07-3.005 3.004a2.5 2.5 0 0 0 3.405 3.658l.13-.122 3.006-3.005a.5.5 0 0 1 .638-.058l.069.058.707.707a.5.5 0 0 1 .058.638l-.058.069-3.005 3.005a4.5 4.5 0 0 1-6.524-6.196l.16-.168 3.005-3.005zm8.132-3.182a.25.25 0 0 1 .353 0l1.061 1.06a.25.25 0 0 1 0 .354l-8.132 8.132a.25.25 0 0 1-.353 0l-1.061-1.06a.25.25 0 0 1 0-.354l8.132-8.132z"></path></svg></span><span>https://github.com/OrangeX4/hexo-link-card</span></span></span></a>

图片展示：

![](https://gitee.com/orangex4/picgo/raw/master/images/20220210201854.png)

## 卡片式链接的 VSCode 支持

我们可以让 VSCode 也支持卡片式链接的语法，只需要下载好 Markdown Preview Enhanced 插件，按下 `Shift + Ctrl + P` 按钮，输入 `preview extend parser`，即可打开配置文件。

然后将

``` js
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject)=> {
      return resolve(markdown)
    })
  },
```

改为

``` js
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject)=> {
      return resolve(markdown.replace(/----*\n\n([^\n]*)\n([a-zA-Z]*:\/\/[^\n]*)\n\n----*/g, `<a target="_blank" href="$2" style="position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; box-sizing: border-box; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-align-items: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center; width: 390px; min-height: 84px; border-radius: 8px; max-width: 100%; overflow: hidden; margin: 16px auto; padding: 12px 12px 9px 12px; background-color: #F6F6F6;"><span class="LinkCard-contents"><span style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; max-height: 40px; line-height: 1.25; color: #121212;">$1</span><span style="display: -webkit-box; font-size: 13px; height: 18px; line-height: 18px; color: #999; word-break: break-all; text-overflow: ellipsis; overflow: hidden; -webkit-line-clamp: 1; -webkit-box-orient: vertical;"><span style="display: inline-flex; align-items: center;"><svg class="Zi Zi--InsertLink" fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path d="M13.414 4.222a4.5 4.5 0 1 1 6.364 6.364l-3.005 3.005a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.005-3.005a2.5 2.5 0 1 0-3.536-3.536l-3.005 3.005a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.005-3.005zm-6.187 6.187a.5.5 0 0 1 .638-.058l.07.058.706.707a.5.5 0 0 1 .058.638l-.058.07-3.005 3.004a2.5 2.5 0 0 0 3.405 3.658l.13-.122 3.006-3.005a.5.5 0 0 1 .638-.058l.069.058.707.707a.5.5 0 0 1 .058.638l-.058.069-3.005 3.005a4.5 4.5 0 0 1-6.524-6.196l.16-.168 3.005-3.005zm8.132-3.182a.25.25 0 0 1 .353 0l1.061 1.06a.25.25 0 0 1 0 .354l-8.132 8.132a.25.25 0 0 1-.353 0l-1.061-1.06a.25.25 0 0 1 0-.354l8.132-8.132z"></path></svg></span><span>$2</span></span></span></a>`))
      // return resolve(markdown)
    })
  },
```

即可。