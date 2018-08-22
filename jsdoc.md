# Javascript API

## 创建缘由

尽管FantasyPass已经支持了相当多的特性，基本已经满足日常所需，例如：

* 附件添加和展示
* 自动填充
* 自定义键盘
* 多种云盘、WebDAV同步支持
* 1password的支持

但是作为每个人用途不一向，难免会需要自定义一些简单的需求，特别是会一些开发的人。特别是一些简单的： `HTTP请求 -> 解析 -> 显示 -> 拷贝`。如果需要这么简单的操作，但是FantasyPass又并不支持这样功能。就我日常就有这样的需求，例如：定期更改自己服务的密码，这个HTTP必须保密，为了保密，我想把它放到FantasyPass里面去。但是我不能为了我一个人的需求，把这个并不通用的功能去传递给所有人。因此决定写Javascript扩展API，提供大家自定义简单功能。

## 特性

* 安全。 提供Javascript扩展，由你自己编写，自己导入，完全由自己控制。
* 权限。 设置提供三种权限选择：
    * 执行时弹窗提醒
    * 允许执行，不提示
    * 禁止Javascript Api执行
* 控制范围。 Javascript API 只能删除和修改，Javascript API增加的属性。保证主要数据的安全性。

## API文档

### 行操作（详情里面增、删、改动一行）

#### 添加一行 

```
appendRow(sectionTitle: String, sectionIndex: Int, rowType: String, key: String, value: String)
```

参数说明：

名称 | 说明
--- | ---
sectionTitle | 章节名称
sectionIndex | 章节位置
rowType | 行类型，目前支持： FPLabelRow
key | 键，既是唯一标识也是现实的标题
value | 值