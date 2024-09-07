## git上传

创建Tag：
使用git tag -a v<版本号> -m "标签说明"命令来创建一个带注释的tag，其中<版本号>是你想要指定的版本号（如1.0.0），"标签说明"是你对这次tag的简短描述。
如果你只是想快速创建一个轻量级的tag（不带注释），可以使用git tag v<版本号>命令。

推送Tag到GitHub：
使用git push origin v<版本号>命令将你的tag推送到GitHub上。如果你想要推送所有的tag（包括新创建的和其他已经存在的），可以使用git push origin --tags命令。





git 命令：

```git
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/waterare/static.waterare.github.io.git

git tag -a v1.2.6 -m "添加binft_other.js" 6826963533d6d00f6178951b1ec2b30f905ac2a6
git push origin 1.2.6
git push origin --tags

git tag -d 1.2.6	#删除旧的标签
git push origin 1.2.7
git tag -a v1.2.7 -m "添加readme" 
git push origin --tags
```







## cdn


cdn.waterare.github.io