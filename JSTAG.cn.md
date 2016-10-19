# Cloudmobi JSTag 广告接入方式说明

* [ct.showAd()渲染广告](#showAd)
* [ct.getAds()获取多条广告数据并利用该数据进行操作](#getAds)

### 引入js文件

在WAP页面引入`http://cdn.download.cloudmobi.net/adsource/ad.js`，例如：

```
<head>
    <script src="http://cdn.download.cloudmobi.net/adsource/ad.js"></script>
</head>   
```

[ct.showAd()](showAd)
### ct.showAd()渲染广告

###调用`ct.showAd()`方法

在要插入广告的div里调用`ct.showAd(divId, slotId);`，参数说明:

| 参数名 | 参数描述 |
| :--: | :--: |
| divId | 要插入广告的div的id |
| slotId | 广告位ID，在cloudmobi注册后由账户经理进行分配 |

注：需要先引入`ad.js`才能调用`ct.showAd();`

调用示例：

```
<div id="iframe1">
    <script>
        ct.showAd('iframe1', 11);
    </script>
</div>
```

### 广告展示示例：

![img-cn](demo.cn.jpg)

### [ct.getAds()获取多条广告数据并利用该数据进行操作](getAds)

### 调用`ct.getAds(slotId,callback,num)`方法，获取广告数据

| 参数名 | 参数描述 |
| :--: | :--: |
| slotId | 广告位ID，在cloudmobi注册后由账户经理进行分配 |
| callback | 回调函数，callback的参数名为data，data的类型为Array|
| num | 广告数量 |

### callback参数data组成示例：

```
[
	{ 
		icon: "http://cdn.cloudmobi.net/icon/1.png",
        title: "plan",
        image: "http://i1.tobei.cn/2014/1222/20141222092542930.jpg",
        desc: "御剑情缘-登录送绝版飞剑 全民DIY家园开启",
        button: "install",
        rank: 4.2
	    clkUrl: "https://github.com"
	},
	{ 
		icon: "http://cdn.cloudmobi.net/icon/1.png",
        title: "仙剑奇侠传3D回合-互动直播欢乐交友",
        image: "http://i1.tobei.cn/2014/1222/20141222092542930.jpg",
        desc: "《仙剑奇侠传3D回合》一款3DMMORPG回合制手游，由大宇全系列正版授权、盖娅互娱自主研发。游戏内置直播、个性时装",
        button: "install",
        rank: 4.2
	    clkUrl: "https://github.com"
	}

]

```

