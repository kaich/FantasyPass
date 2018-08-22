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

* 提供Javascript API编写扩展功能，具体参见[JS 文档](./jsdoc.md)


### TODO

- [ ] 提供IOS12的兼容AutoFill功能，有了这个功能就非常方便了。
- [ ] 同步Stop方法实现，避免退出同步界面仍然弹出同步窗口，例如dropbox
- [ ] UI细节调整
- [ ] 图片识别二维码功能，方便取出附件二维码内容
- [ ] 从其他App中（例如QQ、微信等）文件中选取文件作为附件
- [ ] 对FantasyPass键盘进行调整，让它更方便使用
- [ ] 提供网站网页视频等使用帮助
- [ ] 提供JS实现扩展功能。

### 反馈

如果有任何任何问题，请直接联系我。如果有新功能需求，请在Appstore添加issue，并在Appstore评论区添加反馈。我会根据优先级添加！

