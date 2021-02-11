---
layout: post
title:  "GoogleSpreadSheetでWebスクレイピング"
updated: 2021-02-09
cover:  "/assets/cover_image.jpg"
subheadline:  "IMPORTXMLの使い方"
categories: 
- GoogleSpreadSheet
---

* ETFでの運用を視野に各ETFの比較を行いたい。[bloomberg](https://www.bloomberg.co.jp/)に掲載されている情報をスクレイピングする。

# 完成形
![](https://lh3.googleusercontent.com/pw/ACtC-3cMiUlPUFeLti9JQ8Xk4LNg7ePwiZ2tvey8ofXrm-ig49x3jt5WNxLuyIbeigKIqKOqhwnLy5uv1BVh9ydeyZDYKBKHpB1DTmIPhfTN7kdmRTX9_6J-TOSbJHZHpVj0YWjwDWyeyccACwg62o09xEwp=w1314-h440-no?authuser=0)

* 「銘柄」をもとに「経費率」「運用開始日」「純資産総額」「配分利回り」「名称」「備考」を[bloomberg](https://www.bloomberg.co.jp/)から取得する

# 項目の取得

## IMPORTXML関数

Google SpreadSheetの、[IMPORTXML](https://support.google.com/docs/answer/3093342?hl=ja)を使用する。

昔は1シートあたりの呼び出し回数が50 回までという制限があったが、新しいスプレッドシートでは制限が撤廃された。ただし、多用しすぎると読み込みがうまくいかなくなる。

【使い方】

対象のUALからXPathに指定されている項目を取得する

```
=IMPORTXML(URL, XPathクエリ)
```

Xpath（XML Path Language）は、マークアップ言語 XML に準拠した文書の特定の部分を指定する言語構文である。（[wikipediaより](https://ja.wikipedia.org/wiki/XML_Path_Language)）

つまるところこうゆうやつ

![](https://lh3.googleusercontent.com/pw/ACtC-3eO-r8o64AmQmUdwDCIky9MPLbvSpAZhPbp90fixDoczkn3jHo1lPbN1akAf4i-vvtEg5e2AvImfuRO_1aFkuDA4Jptgz2jVrQ2JLXovjZbqvtfBKfaOlmVtjs5t5OIanpBo65o6Pemx80NIsMOkeQJ=w546-h289-no?authuser=0)

URLはすぐできるが、Xpathは毎回構造を解析していたらとても手間がかかりそう。。。

GoogleChoromeを使用するとコピーが可能

![](https://lh3.googleusercontent.com/pw/ACtC-3fiBcd66rv1RQoHdJttOKPh7TUA91zLauMvYHeslQ6TT5d-ZDxnzlNy6BChoD4KB7YnVrrgaXtT84ybAovLWQnbUeqrpw8wiI8gupR3YT75ZIM62Vu7JTai_JIqhWN8ZuLXDSPcXhaCvYA2F0a4tXDG=w827-h536-no?authuser=0)

GoogleChoromeの「検証」機能（Ctrl＋Shift＋I、もしくはF12）を立ち上げる

必要な箇所を選択 → Copy → Copy XPath をクリックする

クリップボードに `//*[@id="content"]/div/div/div[8]/div/div/div[6]/div[2]`というデータが入る。

ダブルクオート`"`がGoogleSpreadSheetの引数とかぶる為、そこだけシングルクオート`'`に変更する。

`//*[@id='content']/div/div/div[8]/div/div/div[6]/div[2]`

◆分配金利回り：直近配当利回り（税込）

```
=ImportXML("https://www.bloomberg.co.jp/quote/"&$C2&":US","//*[@id='content']/div/div/div[8]/div/div/div[15]/div[2]")
```

# 参考

[SpreadSheetでスクレイピング。Importxml他、便利な関数9+1](https://qiita.com/ktmg/items/d53440c913e20f8bb34c)

[アメ株の各種指標(GoogleFinance関数、セクター名、増配年数、ForwardPER、モーニングスターレート等々)の取得方法(Google スプレッドシート編)](https://nonbiri-reinvest.net/post-851/)