<div align="center">
  <a href="https://github.com/kaich/FantasyPass">
    <img width="200" height="200" src="./Icon_256.png">
  </a>

  <h1>FantasyPass</h1>
</div>



# FantasyPass
一个功能强大、便捷的Keepass的IOS客户端。

## 创作缘由

虽然Appstore里面已经有minikeepass。但是它功能有限，例如缺少一下功能：

* 无云同步，缺乏常用的dropbox和onedriver的支持，多少有些不方便
* 无浏览器账号密码自动填充功能。这个就很不方便了，每次都要复制粘贴。
* 不支持1password的app密码填充功能。因为有些国外的App都支持1password的密码填充功能。
* 缺乏对应中文网站模板的支持
* 缺乏附件的支持，无法查看附件内容

由于本人也是keepass的忠实使用者，为了解决以上问题。就干脆自己写了一个App来实现这些功能。目前Fantasypass已经上线了一段时间了。针对了以上的缺点进行了改进。

* 流畅的UI和动效
* 云同步，支持dropbox和onedriver
* 支持浏览器自动填充
* 兼容1password支持的App，意思就是1password能自动填充的，fantasypass也能填充
* 添加了许多常用网站模板的支持
* 支持png、jpg、html、md、txt等后缀的附件进行显示

具体Appstore的链接如下，需要的小伙伴自行下载使用。

https://itunes.apple.com/cn/app/fantasypass/id1357961740?mt=8


如果在使用过程中发现不足和良好的建议，请在Appstore的评论区进行评论，到时候该着上面进行改进。


## 基础功能介绍

* 支持所有基础MiniKeepass的功能
* 支持网页自动填充功能
* 兼容App里面1password的插件自动填充功能
* 创建了自定义的FantasyPass键盘，其他App内不必切换到FantasyPass来复制粘贴，直接切换键盘即可方便输入。包括输出用户名、密码和联系人。方便快捷
* 可导入联系人作为号码簿的备份
* 支持添加附件和显示附件的功能
* 支持常用云同步的功能：Dropbox、OneDrive、iCloud Drive、WebDAV。WebDAV可以支持国内的坚果云，具体设置方式看[坚果云WebDAV 设置教程](http://help.jianguoyun.com/?p=2064)
* 支持TOTP功能
* 支持JS编写扩展程序的功能
* 只是SSH终端连接和操作

日常常用功能基本都包含了，是一个功能强大、便捷的Keepass客户端。

**特别说明： 由于本项目包含了太多其他项目的代码，目前不合适开源。本人发誓不包含任何窃取密码的行为，如果不放心可自行抓包进行确认FantasyPass的安全性**


### 版本概览

#### 1.5 

* 添加TOTP功能

##### 测试

- [x] TOTP和google的Authenticator进行对比校验过，确保一致！


#### 1.6

##### new feature

* TOTP添加移除功能
* 新增对webdav服务的支持
* 新增对icloud drive的支持
* 修复同步的部分bug
* 同步界面提示调整

##### 测试

- [x] webDAV 同步、下载 
- [x] icloud drive 同步、下载 
- [x] dropbox 同步、下载 
- [x] onedriver 同步、下载 

#### 1.7 

* 新增添加文档作为附件的方式
* 提供Javascript API编写扩展的功能，具体参见[JS扩展文档](./jsdoc.md)
* 支持了javascript作为附件，JS代码高亮显示，并且执行的功能。具体参看帮助文档。
* 新增删除附件的功能
* 修复只有没有密码，只有keyfile无法打开的问题

##### 测试

- [x] 提供Javascript API编写扩展的功能
- [x] 新增删除附件的功能
- [x] 修复只有没有密码，只有keyfile无法打开的问题

#### 1.8

* 添加通知小插件，方便快速添加自定义字段, 参见[通知小插件文档](./today_extension_doc.md)。
* 自定义键盘修复搜索bug
* 自定义键盘修改界面效果和提示问题
* 添加通过文字或者小插件添加TOTP字段
* 修复百度桌面模式只填充密码问题
* 优化自动填充功能
* 新增云同步失败提示
* 修复部分UI细节问题
* 完善帮助文档

#### 1.9 

* 添加对SSH终端的支持
* 登录项详情编辑里面新增SSH登录项开关
* URL增加对IP或者IP:PORT方式的支持
* JS附件展示性能优化
* 自动云同步
* 修复Javascript开关问题
* 增加了登录项列表显示样式；设置增加了样式选择

#### 2.0 

* 深度集成优化系统自动填充功能，键盘上方会出现账号提醒
* 根据使用的习惯智能优化账号自动填充推荐功能
* 修复TOTP不显示的问题
* 添加了自定义字段密码保护功能
* 修复了添加附件崩溃的问题
* 修复放大显示动画表现异常的问题
* 开始拥抱SSH终端功能，目前已有该功能，没有提供帮助教程。下版本完善后全面开放！

#### 2.1

* 添加了Spotlight搜索登录项的功能，并且可以直接跳转到对应的详情
* 执行JS Plugin的动作会添加到Siri捷径里面，也可以再Spotlight中搜索到
* 系统的自动填充添加了全局搜索功能。方便没有适配自动填充的App进行登录操作
* 修复部分已知Bug。


#### 3.0

* 添加了引用复制功能
* 添加了Google Drive支持
* 修复一些问题和添加一些细节处理。具体参见苹果商店更新描述。


### TODO

- [x] 提供IOS12的兼容AutoFill功能，有了这个功能就非常方便了。
- [ ] 同步Stop方法实现，避免退出同步界面仍然弹出同步窗口，例如dropbox
- [ ] UI细节调整
- [ ] 图片识别二维码功能，方便取出附件二维码内容
- [x] 从其他App中（例如QQ、微信等）文件中选取文件作为附件
- [ ] 对FantasyPass键盘进行调整，让它更方便使用
- [ ] 提供网站网页视频等使用帮助
- [ ] 提供JS实现扩展功能，具体参见[JS扩展](./jsdoc.md)。

### 反馈

如果有任何任何问题，请直接联系我。如果有新功能需求，请在Appstore添加issue，并在Appstore评论区添加反馈。我会根据优先级添加！
本网站内容逐步向[](http://www.fantasypass.cn)迁移中。

