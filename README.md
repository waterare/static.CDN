## git上传

创建Tag：
使用git tag -a v<版本号> -m "标签说明"命令来创建一个带注释的tag，其中<版本号>是你想要指定的版本号（如1.0.0），"标签说明"是你对这次tag的简短描述。
如果你只是想快速创建一个轻量级的tag（不带注释），可以使用git tag v<版本号>命令。

推送Tag到GitHub：
使用git push origin v<版本号>命令将你的tag推送到GitHub上。如果你想要推送所有的tag（包括新创建的和其他已经存在的），可以使用git push origin --tags命令。

一款图像处理git的软件[Sourcetree | Free Git GUI for Mac and Windows (sourcetreeapp.com)](https://www.sourcetreeapp.com/)

git 命令：

```python
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/waterare/static.waterare.github.io.git

git tag -a v1.2.6 -m "添加binft_other.js" 6826963533d6d00f6178951b1ec2b30f905ac2a6
git push origin 1.2.6
git push origin --tags

git tag -d 1.2.6	#删除旧的标签
git push origin 1.2.7
git tag -a v1.2.7 -m "添加readme" 
git push origin --tags #本地标签推送到origin远程仓库
git push origin <标签名> #如果你只想推送一个特定的标签
```

`git push origin --tags` 只负责推送标签，而不涉及代码的推送。如果你在 GitHub 上看不到最新代码，那么问题很可能与代码的推送有关。

`git push origin main`推送到远程main分支，git log origin/main #查看远程仓库master分支的提交历史。

第一次新建仓库进行提交，可以使用`git pull origin main`  # 拉取远程仓库origin的main分支的更改

## 查看远程log

如果你已经有了一个本地的克隆，但想要查看远程分支的最新提交历史，你可以先使用`git fetch`来从远程仓库获取最新的数据（但不会合并或改变你的工作目录），然后使用`git log`来查看远程分支的log。

```python
git fetch origin  
git log origin/<分支名>
```

## cdn

cdn.waterare.github.io



### jsDelivr + Github 的具体实现

通过如下地址应用资源


```cobol
https://cdn.jsdelivr.net/gh/你的用户名/你的仓库名@发布的版本号/文件路径
```

举个栗子,获取source/bgimg路径下的back-rain.png

https://cdn.jsdelivr.net/gh/xiezhr/mycdn/source/bgimg/back-rain.png       ## 获取最新资源
https://cdn.jsdelivr.net/gh/xiezhr/mycdn@1.0/source/bgimg/back-rain.png   ## 获取1.0版本的资源
注意： 版本号不是必需的，是为了区分新旧资源，如果不使用版本号，将会直接引用最新资源，除此之外还可以使用某个范围内的版本，查看所有资源等，具体使用方法如下：

https://cdn.jsdelivr.net/gh/waterare/static.CDN@v1.2.7/img/qq.png
https://cdn.jsdelivr.net/gh/waterare/static.CDN@v1.2.7/js/fish.js



```yaml
# https://cdn.jsdelivr.net/gh/waterare/static.CDN@v1.2.7

# https://cdn.jsdelivr.net/gh/waterare/static.CDN@v1.2.7/js/bsz.js
# https://cdn.jsdelivr.net/gh/waterare/static.CDN@v1.2.7/js/comment-typing.js
```

v2.0.2 添加列表

- tag-cloud.ejs
- manifest.json
- tag.ejs

- echarts.min.js

v2.0.3 添加列表

- binft_color.js
- fish.js 内容修改
- AfterProcess.js
