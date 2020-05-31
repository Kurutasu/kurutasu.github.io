---
layout: post
title:  "静的WebサイトジェネレータであるjekyllをWindowsにインストールする"
updated: 2020-05-31
cover:  "/assets/cover_image.jpg"
subheadline:  "jekyllをインストールした際のメモ"
categories:
 - jekyll
---

# 参考Webサイト

* [（公式）Jekyll on Windows](http://jekyllrb-ja.github.io/docs/installation/windows/)

# インストール

## Rubyインストーラでインストール

* [RubyInstaller](https://rubyinstaller.org/downloads/)にあるDevKit付のファイルをインストール

    * rubyinstaller-devkit-2.6.3-1-x64

* ダウンロードしたインストーラを管理者として実行する

* デフォルトのまま、インストールをする

* コマンドプロンプトを開き、下記コマンドを実行してJekyllとBundlerをインストールする

```
$ gem install jekyll bundler
```

* 問題なくインストールされたか確認

```
$ jekyll -v
jekyll 3.8.6
```