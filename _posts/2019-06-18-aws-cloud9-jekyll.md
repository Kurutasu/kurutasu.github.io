---
layout: post
title:  "AWSCloud9 を 使用しての jekyll で静的ページの開設"
categories: AWS jekyll
---

* 参考Webサイト

    * [参考Qiita:AWS cloud9でjekyll開発](https://qiita.com/walrein/items/40796eb036eaa3248871)

    * [参考:Running Jekyll on Cloud9](https://www.jflh.ca/2016-01-18-running-jekyll-on-cloud9)

    * [AWS公式:AWS Cloud9 の特徴](https://aws.amazon.com/jp/cloud9/details/)

    * [jekyll公式](https://jekyllrb.com/)

---

# 手順

## jekyllのインストール

```
$ cd username.github.io/
$ gem install jekyll
$ gem install jekyll bundler
```

## Ruby関連ツールのインストール

```
$ gem install bundler
$ gem install concurrent-ruby
```

## サイトの作成

```
$ jekyll new mylog
```

---

# 実行

## ローカル実行

```
$ cd myblog
$ bundle exec jekyll serve
    Configuration file: /home/ec2-user/environment/myblog/_config.yml
               Source: /home/ec2-user/environment/myblog
           Destination: /home/ec2-user/environment/myblog/_site
     Incremental build: disabled. Enable with --incremental
          Generating...
           Jekyll Feed: Generating feed for posts
                        done in 0.44 seconds.
     Auto-regeneration: enabled for '/home/ec2-user/environment/myblog'
        Server address: http://127.0.0.1:4000/
      Server running... press ctrl-c to stop.
```

* ローカル環境であれば問題ないが、Cloud9上だとポート指定で開くことができない

## Cloud9上での実行

1. ``Run``メニュー
1. ``Run Configurations``サブメニュー
1. 名前に``jekyll``を設定
1. Commandに``jekyll serve --host 0.0.0.0 --port $PORT``を設定
1. ``CMD``をクリックし、実行フォルダを作成した``myblog``に指定する
1. ``RUN``で実行

![](https://camo.qiitausercontent.com/02a8952d5c91d5431ebc04e1f3f16d67447f48d0/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f34333630382f38613935613232352d636165302d373235652d616134352d3036333731303066626432352e706e67)

* 下記のようなイメージのサイトが生成される

![]({{site.baseurl}}/assets/posts/20190618_jekyll_awscloud9_01.PNG)