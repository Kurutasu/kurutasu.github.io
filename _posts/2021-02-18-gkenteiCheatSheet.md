---
layout: post
title:  "【G検定】チートシート"
updated: 2021-02-18
cover:  "/assets/cover_image.jpg"
subheadline:  "G検定まとめ"
categories: 
- AI
---

# はじめに

* [一般社団法人 日本ディープラーニング協会　G検定](https://www.jdla.org/certificate/general/)

* ディープラーニングG検定に向けた情報整理を行う。

* 構成は[シラバス](https://www.jdla.org/certificate/general/#general_No03)に従い、該当項目には「📘」を付す。

* 参考図書

    [ディープラーニング G検定(ジェネラリスト) 公式テキスト](https://www.amazon.co.jp/dp/4798157554)

* 模擬テスト

    [Study-AI G検定 模擬テスト](http://study-ai.com/generalist/)

# １．📘[人工知能](https://ledge.ai/artificial-intelligence/)（AI）とは（[人工知能](https://ledge.ai/artificial-intelligence/)の定義）

## AIの定義

* 専門家の間で共有されている定義はない。

* [人工知能](https://ledge.ai/artificial-intelligence/)であるかどうかは「人によって違う」。

* 定義の例

    * 「推論、認識、判断など、人間と同じ知的な処理能力を持つ機械（情報処理システム）」
    
    * 「周囲の状況（入力）によって行動（出力）を変えるエージェント（プログラム）」

    * 🎩松尾豊
    
        **「人工的につくられた人間のような知能、ないしはそれをつくる技術」**

    * 🎩アーサー・サミュエル

        「明示的にプログラムしなくても学習する能力をコンピュータに与える研究分野」

* [汎用人工知能](https://ledge.ai/agi/)

    * 人間の知的処理を総合的に行えるAIで、SF等の作品に登場するAIの多くはこの汎用型AIであることが多い。

* [特化型人工知能（Narrow AI）](https://ledge.ai/agi/)

    * 1つのタスクに特化したAIで、現在「AI」と呼ばれ、社会適応されている技術。

## [人工知能](https://ledge.ai/artificial-intelligence/)レベル

* レベル1

    シンプルな制御プログラム。**ルールベース**。
 
* レベル2

    古典的な[人工知能](https://ledge.ai/artificial-intelligence/)。**探索・推論**を行う。知識データを利用する。
 
* レベル3

    [**機械学習**](https://d.hatena.ne.jp/keyword/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92)を取り入れた[人工知能](https://ledge.ai/artificial-intelligence/)。多くのデータから入力・出力関係を学習する。
 
* レベル4   

    [**ディープラーニング**](https://d.hatena.ne.jp/keyword/%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%A9%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0)を取り入れた[人工知能](https://ledge.ai/artificial-intelligence/)。[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)による学習を行う。

## [AI効果](https://www.sbbit.jp/article/cont1/38019)

* [人工知能](https://ledge.ai/artificial-intelligence/)の原理がわかると「単純な自動化である」とみなしてしまう人間の心理のこと。

    ![](https://www.sbbit.jp/article/image/38019/l_bit202005201553322037.jpg)

## ロボットとの違い

* [人工知能](https://ledge.ai/artificial-intelligence/)では「考える」という、目に見えないものを中心に扱っている。

* [人工知能](https://ledge.ai/artificial-intelligence/)ではロボットの「脳の部分」を扱っている。（脳だけ、というわけではない）

* ロボットの研究者は[人工知能](https://ledge.ai/artificial-intelligence/)の研究者というわけではない。

## 歴史

### ✅ 💻[エニアック：ENIAC(Electronic Numerical Integrator and Computer)](https://ja.wikipedia.org/wiki/ENIAC)

* 1946年、アメリカ ペンシルバニア大学。

* 世界初の汎用電子式コンピュータ。

    ![](https://upload.wikimedia.org/wikipedia/commons/6/6c/ENIAC_Penn1.jpg)

### ✅ [ダートマス会議](https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%BC%E3%83%88%E3%83%9E%E3%82%B9%E4%BC%9A%E8%AD%B0)

* 1956年、アメリカで開催。

* 🎩[ジョン・マッカーシー](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%BB%E3%83%9E%E3%83%83%E3%82%AB%E3%83%BC%E3%82%B7%E3%83%BC)：アメリカの計算機科学者。ダートマス会議を主催し、初めて公で「[人工知能](https://ledge.ai/artificial-intelligence/)（AI）」という言葉を使った。

* 世界初の[人工知能](https://ledge.ai/artificial-intelligence/)プログラムといわれる💻[ロジック・セオリスト](https://ja.wikipedia.org/wiki/Logic_Theorist)のデモを実施した。

    ![](https://miro.medium.com/max/1000/0*8MW8iP2QC_WNhmiW)

### ✅ 第１次AIブーム

* **推論・探索** が中心。

* **トイ・プロブレム（おもちゃの問題）** は解けても、現実の問題は解けないことが判明。

    ⇒ 失望へ

### ✅ 第２次AIブーム

* 💻[**エキスパートシステム**](https://ledge.ai/expert-system/)が流行し、[ナレッジエンジニア](https://www.weblio.jp/content/%E3%83%8A%E3%83%AC%E3%83%83%E3%82%B8%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2)が必要とされた。

    ```
    ナレッジエンジニアとは、
    人工知能（AI）を応用したシステム構築を専門とする技術者（エンジニア）のことである。（引用）
    ```

* 日本

    💻**第五世代コンピュータ**という大型プロジェクトを推進、[エキスパートシステム](https://ledge.ai/expert-system/)等に取り組んだ。

* 知識の蓄積・管理は大変！ということに気づく。

    ```
    第五世代コンピュータとは、
    通商産業省（現経済産業省）が1982年に立ち上げた国家プロジェクトの開発目標である。（引用）
    ```

    ⇒ 失望へ

### ✅ 第３次AIブーム

* **機械学習・特徴表現**が中心。

* ビッグデータによる**機械学習**、[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)による**ディープラーニング（深層学習）** が流行。

# ２．📘[人工知能](https://ledge.ai/artificial-intelligence/)をめぐる動向

# 2-1.📘探索・推論

## 探索・推論の手法

### ✅ 探索木

* [幅優先探索](https://algoful.com/Archive/Algorithm/BFS#abut)

    最短距離の解が必ずわかる。すべてを記憶するためメモリ容量が必要。

    すべての場合分けを記憶しながら探索する方法。最短経路を必ず見つけられるが計算容量を使用する数が多い。

    ![](https://upload.wikimedia.org/wikipedia/commons/b/bc/Breadth-first-tree.png)

* [深さ優先探索](https://algoful.com/Archive/Algorithm/DFS#abut)

    メモリは少なめでよいが、最短距離が必ずわかるわけではない。

    一方向に掘り下げて解でなかった場合、前のステップに戻り、異なる方向を探索することを繰り返しながら買いを探す方法。計算容量を使用する数が少ない。

    ![](https://upload.wikimedia.org/wikipedia/commons/5/5d/Depth-first-tree.png)

### ✅ [ハノイの塔](https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%8E%E3%82%A4%E3%81%AE%E5%A1%94)

* 以下のルールに従ってすべての円盤を右端の杭に移動させられれば完成。

    * 3本の杭と、中央に穴の開いた大きさの異なる複数の円盤から構成される。

    * 最初はすべての円盤が左端の杭に小さいものが上になるように順に積み重ねられている。

    * 円盤を一回に一枚ずつどれかの杭に移動させることができるが、小さな円盤の上に大きな円盤を乗せることはできない。

    ![](https://upload.wikimedia.org/wikipedia/commons/6/60/Tower_of_Hanoi_4.gif)

### ✅ ロボットの行動計画

* [プランニング](https://ja.wikipedia.org/wiki/%E8%87%AA%E5%8B%95%E8%A8%88%E7%94%BB)

    * オフラインプランニング・静的プランニング

        周囲の状況が既知で、その構造がよく理解されている場合に、行動の計画や戦略をあらかじめ組み立てて(計算して）おくこと。

    * オンラインプランニング・動的プランニング

        未知の環境において、周囲の状況が明らかになるにつれて行動の計画や戦略を修正すること。

    * リプランニング

        計画・戦略を修正すること。

* [STRIPS](https://ja.wikipedia.org/wiki/STRIPS)

    * Stanford Research Institute Problem Solver

    * 自動計画に関する[人工知能](https://ledge.ai/artificial-intelligence/)の一種。

    * 「前提条件」「行動」「結果」の3つの組み合わせで1つの動作を定義する自動計画を記述する手法。

* [SHRDLU](https://ja.wikipedia.org/wiki/SHRDLU)

    * 1970年、スタンフォード大学、🎩テリー・ウィノグラード。

    * 英語の指示により画面上の積み木を動かす。

    * 成果は[Cycプロジェクト](https://ja.wikipedia.org/wiki/Cyc%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88)に引き継がれている。

    * [自然言語処理](https://ledge.ai/nlp/)を行う人工知能初期の研究開発プロジェクト。テリー・ウィノグラードにより実施された。自然言語を使って積み木を動かす等の操作をすることができる。

    * 【Youtube】[SHRDLU](https://ja.wikipedia.org/wiki/SHRDLU) in Action

        [![](https://img.youtube.com/vi/bo4RvYJYOzI/0.jpg)](https://youtu.be/bo4RvYJYOzI "SHRDLU in Action")

* [テキストマイニング](https://ledge.ai/text-mining/)

    * 構造化されてないテキストデータから、新しい情報を抽出する分析手法。大量のデータから情報を抽出することで、文章中の単語の使用頻度や傾向、相関関係など、様々な特徴を分析する際に用いられる。
    
### ✅ ボードゲーム

* 1996年、💻**IBM DeepBlue（ディープブルー）。「[力任せの探索](https://ja.wikipedia.org/wiki/%E5%8A%9B%E3%81%BE%E3%81%8B%E3%81%9B%E6%8E%A2%E7%B4%A2)」だったが、チェスの世界チャンピオンを破った。

    ```
    力まかせ探索（Brute-force search）またはしらみつぶし探索（Exhaustive search）は、
    単純だが非常に汎用的な計算機科学の問題解決法であり、
    全ての可能性のある解の候補を体系的に数えあげ、
    それぞれの解候補が問題の解となるかをチェックする方法である。（引用）
    ```

* 2012年、💻ボンクラーズ が将棋において永世棋聖に勝利。

* 2013年、💻ponanza が将棋において現役プロ棋士に勝利。

* 2016年、💻AlphaGo（アルファ碁）が韓国のプロ棋士に勝利。

    ディープラーニングが使われた。

    ![](https://tech-camp.in/note/wp-content/uploads/alphago-1024x519.png)

* 2017年、💻elmo が世界コンピュータ将棋選手権において ponanza に勝利。elmo 同士の対戦を行うことで学習を行った。

### ✅ コスト

* 効率よく探索するため、時間や費用といったコストの概念を取り入れている。

* ヒューリスティックな知識を利用して探索を短縮することができる。

    ※ヒューリスティック：経験則の、試行錯誤的な

### ✅ [Mini-Max法(ミニマックス法)](https://www.webcyou.com/?p=6997)

* ゲーム戦略で利用される。

* 想定される「最大の損害」が最小になるように決断を行う戦略のこと。

* 自分の番はスコア最大、相手の番はスコア最小になるような戦略をとる。

* この手法は全探索を行うため効率が悪い。

### ✅ [α-β法(アルファ・ベータ法：alpha-beta法))](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%BB%E3%83%99%E3%83%BC%E3%82%BF%E6%B3%95)

* [Mini-Max法](https://www.webcyou.com/?p=6997)の応用アルゴリズム。

* 読む必要のない手を打ち切ることで高速化を図っている。

* αカットは関心範囲の最小値のカット、βカットは最大値のカットを行う。

* [Mini-Max法](https://www.webcyou.com/?p=6997)において、無駄な探索をカットする手法の1つ。枝刈りの方法にはαカットとβカットが存在する。

### ✅ [モンテカルロ法](https://xtrend.nikkei.com/atcl/contents/18/00131/00007/)

* ボードゲームにおいて最善手を評価する方法の1つ。次の一手を決める際に、打てる手それぞれで何回もプレイアウトし、勝率が高かった手を選ぶという手法。

* 特徴：

    プレイアウト（ゲームを一度終局までもっていく）の結果、どの方法が一番勝率が高いかを評価する。

* デメリット：

    ブルートフォース（力任せな方法）のため、組合せが多いと計算しきれない。

# 2-2.📘知識表現

## 知識表現

### ✅ 💻[ELIZA（イライザ）](https://ja.wikipedia.org/wiki/ELIZA)

* 1964年から1966年にかけて🎩ジョセフ・ワイゼンバウムによって開発された対話型ロボット。

* 「人工無能」の元祖。精神科セラピストを演じた。

* パターンに合致したら返答する「ルールベース」である。

* イライザ効果：あたかも本物の人間と話しているように錯覚すること。

* その後開発された💻PARRYと会話した記録が残されており（RFC439）、中でもICCC1972が有名。

    ![](https://upload.wikimedia.org/wikipedia/commons/4/4e/ELIZA_conversation.jpg)

## ✅ [エキスパートシステム](https://ledge.ai/expert-system/)

* 専門家の知識を入れ込み、その意思決定能力を誰もが使える形にするもの。知識ベースと推論エンジンにより構成される。

### ✓ 💻DENDRAL

* 1960年代、スタンフォード大学　🎩エドワード・ファイゲンバウム。

* 未知の有機化合物を特定する。質量分析法で分析する。

    ```
    質量分析法とは、
    分子をイオン化し、そのm/zを測定することによってイオンや分子の質量を測定する分析法である。（引用）。
    ```

### ✓ 💻[マイシン（MYCIN）](https://ja.wikipedia.org/wiki/Mycin)

* 1970年、スタンフォード大学。

* ルールベースで血液中のバクテリアの診断支援を行った。

* 正解確率の高い細菌名のリスト、信頼度、推論理由、推奨される薬物療法コースを示した。

* 精度は専門医の80%に対し、69%であった。

* エキスパートシステムの1つで、伝染性の血液疾患を診断し、適した薬を処方するプログラム。

## ✅ [意味ネットワーク](https://ja.wikipedia.org/wiki/%E6%84%8F%E5%91%B3%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF)

* semantic network

* 人間の記憶の一種である意味記憶の構造を表すためのモデル。

* 単語同士の意味関係をネットワークによって表現する。

* 概念を表す節（ノード）と、概念の意味関係を表す辺（エッジ）からなる、有向グラフまたは無向グラフである。

* 知識を線で結びその関連性を表したもの。現在でもAIプロダクトの解釈性を高める為に使われることがある。セマンティックネットワークともいう。

    ```
    無向グラフのエッジには方向性がありません。
    エッジは "双方向" の関係を示します。 
    有向グラフのエッジには方向性があります。エッジは "一方向" の関係を示します。（引用）
    ```

    ![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Semantic_Net.svg/305px-Semantic_Net.svg.png)


## ✅ [Cycプロジェクト:サイクプロジェクト](https://www.cyc.com/)

* [wikipedia](https://ja.wikipedia.org/wiki/Cyc%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88)

* 1984年、🎩ダグラス・レナート。

* すべての一般知識を取り込もうという活動。

* 2001年からはOpenCycとして公開されている。

* 1984年からスタートした「すべての一般常識をコンピューターに取り込もう」というプロジェクト。

## [オントロジー（ontology）](https://qiita.com/mininobu/items/bce0e0ad97ed17e0aff2)

* [Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%B3%E3%83%88%E3%83%AD%E3%82%B8%E3%83%BC_(%E6%83%85%E5%A0%B1%E7%A7%91%E5%AD%A6))

* 🎩トム・グルーバーが提唱。

* 知識を体系化する方法論で、「概念化の明示的な仕様」（知識を記述するための仕様）と定義されている。

* 知識の形式表現であり、あるドメインにおける概念間の関係のセットである。

* is-a 関係（上位概念、下位概念、推移律）、part-of 関係を用いる。

* 意味ネットワーク等で用いられる知識の結び付け方の規則。

### ✅ [セマンティックウェブ](https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%83%83%E3%82%AF%E3%83%BB%E3%82%A6%E3%82%A7%E3%83%96)

* [W3C](https://d.hatena.ne.jp/keyword/W3C) の🎩ティム・バーナーズ＝リーによって提唱されたプロジェクト。

* ウェブページの意味を扱うことができる「標準」や「ツール群」の開発により、ワールド・ワイド・ウェブの利便性を向上させようというもので、[オントロジー](https://qiita.com/mininobu/items/bce0e0ad97ed17e0aff2)を利用する。

* プロジェクトの目的は、ウェブページの閲覧という行為（データ交換）に対し、意味の疎通を付け加えることにある。

* 情報リソースに意味を付与することで、コンピュータで高度な意味処理を実現したり、文書の意味に即した処理が行えるようにする。

### ✅ ヘビーウェイトオントロジー（重量オントロジー）

* 人間が厳密にしっかりと考えて知識を記述していくアプローチ。

* 構成要素や意味的関係の正統性については、哲学的な考察が必要。

### ✅ ライトウェイトオントロジー（軽量オントロジー）

* コンピュータにデータを読み込ませ、自動で概念間の関係性を見つけるアプローチ。

* 完全に正でなくても使えればOKと考える。

* **ウェブマイニング**、**データマイニング**で利用される。

    ```
    ウェブマイニング（web mining）とは、
    ウェブサイトの構造やウェブ上のデータを利用して行うデータマイニングのことである。（引用）

    データマイニング（Data mining）とは、
    統計学、パターン認識、人工知能等のデータ解析の技法を大量のデータに網羅的に適用することで知識を取り出す技術のことである。（引用）
    ```

### ✅ 💻ワトソン

* IBM Watson

* Question-Answering（質問応答）型。

* 2011年、アメリカのクイズ番組である「[ジェパディ！](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%83%91%E3%83%87%E3%82%A3!」で優勝した。

* ライトウェイトオントロジーに該当する。

    ![](https://assets.media-platform.com/bi/dist/images/2019/11/18/5dceff793afd373944079d27-w1280.png)

### ✅ 💻東ロボくん

* 2011年～2016年、国立情報学研究所。

* プロジェクトリーダーは🎩新井紀子。（著書『[AI vs.教科書が読めない子どもたち](https://www.amazon.co.jp/dp/4492762396』）

* 読解力に問題があり、何かしらのブレイクスルーが必要と判断され、開発は凍結された。

* その後、新井氏は人間側の読解力の問題に注目し、さまざまな活動を行っている。（[TED](https://www.ted.com/talks/noriko_arai_can_a_robot_pass_a_university_entrance_exam?language=ja)がわかりやすい）

# 2-3.📘機械学習

* ビッグデータを活用する。

* 統計的自然言語処理を行う。

* 応用例：

    レコメンデーションエンジン、スパムフィルター

## レコメンデーションシステム

* おすすめを提示するシステム。

### ✅ 協調ベースフィルタリング

* ユーザーの購買履歴からおすすめを表示するアプローチ。

* ユーザーの行動をもとにレコメンドする。

### ✅ 内容ベースフィルタリング

* アイテムの特徴をもとにおすすめを表示するアプローチ。

* 検索キーワードに関連する類似アイテムをレコメンドする。

* アイテムの特長ベクトルをもとにレコメンドである。

# 2-4.📘深層学習（ディープラーニング）

## 深層学習　関連手法

### ✅ 単純パーセプトロン

* シンプルなニューラルネットワーク。

* [ステップ関数](https://www.atmarkit.co.jp/ait/articles/2002/26/news010.html)で表現できるがニューラルネットワークでは利用できない。

    ![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Dirac_distribution_CDF.svg/1920px-Dirac_distribution_CDF.svg.png)

* [ステップ関数](https://www.atmarkit.co.jp/ait/articles/2002/26/news010.html)

    * 関数への入力値が0未満の場合には常に出力値が0、入力値が0以上の場合には常に出力値が1となるような関数。

### ✅ ディープラーニング

* ニューラルネットワークを多層にしたもの。

### ✅ バックプロパゲーション

* 誤差逆伝播学習法

* ニューラルネットワークの学習におけるアルゴリズム。

### ✅ 自己符号化器（オートエンコーダ）

* 入力したものと同じものを出力して学習する。

## 深層学習　実装例

### ✅ 💻SuperVision

* 2012年、トロント大学、🎩ジェフリー・ヒントン。

* ILSVRC（Imagenet Large Scale Visual Recognition Challenge）2012 で勝利した。

* エラー率は26%台から15.3%へ劇的に改善。

* その後、2015年に人間の認識率（約5.1%）を抜いた。

* AlexNet（[畳み込みニューラルネットワーク、CNN](https://www.imagazine.co.jp/%E7%95%B3%E3%81%BF%E8%BE%BC%E3%81%BF%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E3%81%AE%E3%80%8C%E5%9F%BA%E7%A4%8E%E3%81%AE%E5%9F%BA%E7%A4%8E%E3%80%8D%E3%82%92%E7%90%86%E8%A7%A3%E3%81%99/)）を採用。

* 前年度までは[サポートベクターマシン](https://logics-of-blue.com/svm-concept/)が主流だったが、ここからCNNに切り替わったことになる。

# ３．📘[人工知能](https://ledge.ai/artificial-intelligence/)分野の問題

# 3-1.📘トイプロブレム（おもちゃの問題）

* ルールが決まっている問題（迷路、オセロなど）は解けても、現実世界に存在する複雑な問題は解けないという問題。

# 3-2.📘[フレーム問題](https://www.ai-gakkai.or.jp/whatsai/AItopics1.html)

* [Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E5%95%8F%E9%A1%8C)

* 1969年、🎩ジョン・マッカーシーと🎩パトリック・ヘイズが提唱。

* 人工知能における重要な難問の一つ。

* 有限の情報処理能力しかないロボットには、現実に起こりうる問題全てに対処することができない。

* 🎩ダニエル・デネット：

    考えすぎて何も解決できないロボットを例示し、[フレーム問題](https://www.ai-gakkai.or.jp/whatsai/AItopics1.html)の難しさを伝えた。

# 3-3.📘強いAI・弱いAI

* 🎩ジョン・サールが提唱。

* 強いAI：

    人間のような心、自意識を持つAI。

* 弱いAI：

    便利な道具であればよいという考え方によるAI。

## 汎用AI、特化型AI

### ✅ 汎用AI

* [フレーム問題](https://www.ai-gakkai.or.jp/whatsai/AItopics1.html)を打ち破るAIのことで、人間のように様々な課題に対処することができる。

### ✅ 特化型AI

* [フレーム問題](https://www.ai-gakkai.or.jp/whatsai/AItopics1.html)を打ち破っていないAIのこと。

## 強いAIに関する主張

### ✅ [中国語の部屋](https://www.ai-gakkai.or.jp/whatsai/AItopics3.html)

* 哲学者🎩ジョン・サールによって発表された論文内で、チューリングテストの結果は何の指標にもならないという批判がされた。その論文内で発表された思考実験の名前。

* 強いAIは実現不可能だという思考実験。

    ```
    中国語を理解できない人を小部屋に閉じ込めて、
    マニュアルに従った作業をさせるという内容。
    チューリング・テストを発展させた思考実験で、意識の問題を考えるのに使われる。（引用）
    ```

### ✅ 🎩ロジャー・ペンローズ

* イギリス生まれの数学者、宇宙物理学・理論物理学者。

* 「量子効果が絡んでいるため強いAIは実現できない」と主張した。

# 3-4.📘身体性

* 知能の成立には身体が不可欠であるという考え方。

* 物理的な身体により外部環境との相互作用を行うことができる。

* しかし、GoogleやFacebookの研究スピードでは、身体性の研究をすっ飛ばして概念獲得や意味理解ができてしまう可能性もある。

# 3-5.📘[シンボルグラウンディング問題](https://ledge.ai/symbol_grounding_problem/)

* 認知科学者の🎩スティーブン・ハルナッドにより議論されたもので、「記号とその対象がいかにして結び付くか」という問題

* 記号（シンボル）と現実世界の意味はどのようにして結びつけられるのかという問題。

* 外部世界を内部化（記号化、シンボル化）した時点で、外界との設置（クラウディング）が切れてしまうという問題。

### ✅ 知識獲得のボトルネック

* 人間が持っている知識は膨大であり、それらを獲得することは困難である。

* 特に[エキスパートシステム](https://ledge.ai/expert-system/)の開発において問題となった。

### ✅ ニューラル機械翻訳

* NMT、Neural Machine Translation

* ニューラルネットワーク、ディープラーニングを利用した機械翻訳。

* 日本語の翻訳品質を飛躍的に高めた。

* 従来の方式には**ルールベース機械翻訳（RMT）**、**統計的機械翻訳（SMT）**がある。

    ```
    「ルールベース機械翻訳（RMT：Rule Based Machine Translation）」は、
    登録済みのルールを適応することで原文を分析し、訳文を出力する機械翻訳の方法です。
    
    「統計的機械翻訳（SMT：Statistical Base Machine Translation）」は、
    コンピュータに学習用の対訳データを与え、統計モデルを学習させることで訳文を出力させる方法です。（引用）
    ```

### ✓ seq2seq

* 再帰型ニューラルネットワーク（RNN）を使った文の生成モデル。

* 時系列データを入力し、時系列データを出力する。

* 別の言語に置き換えたり（翻訳）、質問を回答に置き換えたり（質問・回答）できる。

# 3-6.📘[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)設計

* モデルの性能は、注目すべきデータの特徴（[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)）の選び方により決定づけられるが、それを人間が見つけ出すのは難しい。

* 機械学習自身に発見させるアプローチを[特徴表現学習](https://www.atmarkit.co.jp/ait/articles/1901/06/news036.html)という。

    * 特徴量の加工・抽出までは学習器が行うこと。ディープラーニングは特長表現学習を行う手法である。

# 3-7.📘[チューリングテスト](https://ledge.ai/turing-test)

* [wikipedia](https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%BB%E3%83%86%E3%82%B9%E3%83%88)

* 🎩アラン・チューリングにより考案された。

* ある機械が知的かどうか（人工知能であるかどうか）を判定するためのテスト。

* ある対話式の機械に対し、「人間的」かどうかを判定する為のテスト。イギリスの数学者、アラン・チューリングが提案した。合格基準の一つに判定者の30%以上が対話相手を人間かコンピューターか判別つかないと判定することであり、2014年にロシアのチャットボット「ユージーン・グーツマン」が、13歳の少年という設定で初めて合格したとされる。

### ✅ ローブナーコンテスト

* [ローブナー賞](https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%BC%E3%83%96%E3%83%8A%E3%83%BC%E8%B3%9E)

* [Official Page](https://aisb.org.uk/aisb-events/)

* [チューリングテスト](https://ledge.ai/turing-test)の合格を目指すコンテスト。

# 3-8.📘[シンギュラリティ（技術的特異点）](https://ledge.ai/singularity/)

* 🎩レイ・カーツワイルの著書で提唱された。

    * 2029年：[人工知能](https://ledge.ai/artificial-intelligence/)が人間よりも賢くなる

    * 2045年：[シンギュラリティ](https://ledge.ai/singularity/)の到来（2045年問題ともいわれる）

* 「収穫加速の法則」により「強いAI」が実現され、人間には予測不可能な変化が起こるとされている。

### ✓ [収穫加速の法則](https://ja.wikipedia.org/wiki/%E5%8F%8E%E7%A9%AB%E5%8A%A0%E9%80%9F%E3%81%AE%E6%B3%95%E5%89%87)

* レイ・カーツワイルが提唱した経験則。

* 一つの重要な発明が他の発明と結び付くことで、次の重要な発明の登場までの期間を短縮する。これによりイノベーションの速度が加速され、科学技術は直線的ではなく指数関数的に進歩するというもの。

### ✓ [シンギュラリティ](https://ledge.ai/singularity/)に関する発言等

* 🎩[レイ・カーツワイル](https://ledge.ai/ray-kurzweil/)
    
    [シンギュラリティ](https://ledge.ai/singularity/)は2045年に到来する

    2045年には人間が自分自身よりも賢い人工知能を作り出すことにより起きる技術的特異点のこと。

* 🎩ヒューゴ・デ・ガリス

    [シンギュラリティ](https://ledge.ai/singularity/)は21世紀の後半に来る

* 🎩オレン・エツィオーニ

    [シンギュラリティ](https://ledge.ai/singularity/)の終末論的構想は馬鹿げている

* 🎩ヴィーナー・ヴィンジ

    機械が人間の役に立つふりをしなくなること

* 🎩スティーブン・ホーキング

    AIの完成は人類の終焉を意味するかもしれない

* 🎩イーロン・マスク

    危機感を持ち非営利のAI研究組織 OpenAI を設立。

    OpenAI Gym（[強化学習](https://ledge.ai/reinforcement-learning/)のシミュレーション環境）を発表。

# ４．📘機械学習の具体的手法

# 4-1.📘代表的な手法

## ✅ [教師あり学習](https://ledge.ai/unsupervised/)

* 正解データを適切に予測できるように、正解データとその他の変数のセットを学習する枠組み。この時、正解データは目的変数、その他の変数は説明変数もしくは特徴量と呼ばれる。また、予測値が連続な場合を回帰、不連続な場合を分類という。

### ✓ 回帰問題

* [線形回帰 (linear regression)](https://www.ibm.com/jp-ja/analytics/learn/linear-regression)

    [Wikipedia](https://ja.wikipedia.org/wiki/%E7%B7%9A%E5%BD%A2%E5%9B%9E%E5%B8%B0)

    [![](https://img.youtube.com/vi/zo8BmIGSO2Y/0.jpg)](https://youtu.be/zo8BmIGSO2Y "【機械学習】線形回帰（前編）| 線形回帰の理論")

    線や平面、超平面で関数をデータにフィッティングさせることで回帰を行う手法

    ![](https://upload.wikimedia.org/wikipedia/commons/b/be/Normdist_regression.png)

    * 統計学における回帰分析の一種。

    * 特徴：通常の[線形回帰](https://www.ibm.com/jp-ja/analytics/learn/linear-regression)は[過学習](https://lionbridge.ai/ja/articles/overfitting/)を起こしやすい。ラッソ回帰やリッジ回帰で[過学習](https://lionbridge.ai/ja/articles/overfitting/)を抑制する。

* [アノテーション](https://ledge.ai/annotation/)

    あるデータに対して関連する情報（メタデータ）を注釈として付与すること。転じて、AI業界では、機械学習のモデルに学習させるための教師データ（正解データ、ラベル）を作成することを指す。

* 回帰分析の種類

    * 単回帰分析 ： ひとつの説明変数により、ひとつの目的変数を予測する。
    
    * 重回帰分析 ： 複数の説明変数から、ひとつの目的変数を予測する。

        * 多重共線性 ： 説明変数の選択において、相関係数の絶対値が最大値に近い[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)のペアを選ぶと、予測の精度が悪化する性質。

* [ラッソ回帰：Lasso回帰 (lasso regression)](https://aizine.ai/ridge-lasso-elasticnet/#toc8)

    [Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%83%E3%82%BD%E5%9B%9E%E5%B8%B0)

    * 直線回帰に[正則化](https://toeming.hatenablog.com/entry/2020/04/03/000925)項（L1ノルム）を加えた回帰分析。

* [リッジ回帰：Ridge回帰 (ridge regression)](https://aizine.ai/ridge-lasso-elasticnet/#toc7)

    * 直線回帰に[正則化](https://toeming.hatenablog.com/entry/2020/04/03/000925)項（L2ノルム）を加えた回帰分析。

* 参考資料

    * ノルム ： いろいろなものの「大きさ」を表す。

    * [多重共線性とは？ 〜 概要と対応方法 〜](https://xica.net/vno4ul5p/)

### ✓ 分類問題

* [ロジスティック回帰 (logistic regression)](https://www.nli-research.co.jp/report/detail/id=62065?site=nli)

    [![](https://img.youtube.com/vi/mMMzDFttZ8A/0.jpg)](https://youtu.be/mMMzDFttZ8A "【機械学習】ロジスティック回帰（前編）| ロジスティック回帰の理論と実装")

    * 線形回帰の考え方を拡張し、目的変数が2クラスを取る場合等に使われる分類手法。
    
    * 活性化関数として シグモイド関数 を使い、重回帰分析により二値分類を行う。

        * [シグモイド関数：Sigmoid function](https://www.atmarkit.co.jp/ait/articles/2003/04/news021.html)は 対数オッズ（ロジット） の逆関数である。（ロジット変換（[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)））活性化関数に用いられる関数の1つ。入力xの値を0~1の範囲の値に変換する。主に隠れ層（中間層）や二項分類問題を解くモデルの出力層で用いられる。

        * 対数をとる前の オッズ とは、ある事象が起こる確率 p と起こらない確率 1−p の比のこと。

        * 最小化を行う関数として **尤度関数** が用いられる。

* 多クラスロジスティック回帰

    * 活性化関数に [ソフトマックス関数](https://www.atmarkit.co.jp/ait/articles/2004/08/news016.html) を利用し、多クラス分類を行う。

* [ランダムフォレスト (random forest)](https://avinton.com/academy/random-forest/)

    * 弱学習器に決定木を用いたアンサンブル手法（バギング）で回帰と分類に用いられる。決定木同様、解釈性の高さが特徴。また特徴量のランダムサンプリングも行っている。

    * ブートストラップサンプリングにより、[アンサンブル学習](https://agency-star.co.jp/column/ensemble-learning/)を行う。

    * バギングに該当する。

    * バギング

        * データ全体からランダムに一部データを用いて、複数のモデルを作る（学習する）方法。並列処理になる。

    * ブースティング (boosting)

        * 一部のデータを繰り返し抽出し、複数のモデルを学習させる。

        * 逐次処理のため、[ランダムフォレスト](https://avinton.com/academy/random-forest/)より時間がかかる。

        * AdaBoost、[勾配ブースティング](https://qiita.com/kuroitu/items/57425380546f7b9ed91c#%E5%8B%BE%E9%85%8D%E3%83%96%E3%83%BC%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E6%B1%BA%E5%AE%9A%E6%9C%A8%E3%81%AE%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)、XgBoost

    * [勾配ブースティング](https://qiita.com/kuroitu/items/57425380546f7b9ed91c#%E5%8B%BE%E9%85%8D%E3%83%96%E3%83%BC%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E6%B1%BA%E5%AE%9A%E6%9C%A8%E3%81%AE%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)

        * アンサンブル学習であるブースティングの一種。前の弱学習器の損失の勾配を用いて、次の弱学習器を作成する。

* [ナイーブベイズ](https://avinton.com/academy/naive-bayes/)

    * ベイズの定理を使って、それぞれのクラスに分類される確率を計算し最も確率の高いクラスを結果として出力する、分類問題を解くためのモデル。

* [サポートベクターマシン：SVM](https://logics-of-blue.com/svm-concept/)

    [![](https://img.youtube.com/vi/cNEhKEb9-JU/0.jpg)](https://youtu.be/cNEhKEb9-JU "【機械学習】サポートベクトルマシン（前編）|  SVMの理論、ハードマージンとソフトマージン")

    * コンセプトはマージンの最大化を行うこと。

    * サポートベクター(サポートベクトル)を利用して予測を行う教師あり学習のモデルで、[カーネル](https://qastack.jp/stats/154798/difference-between-kernel-and-filter-in-cnn)法により非線形分離を可能としている。

    * スラック変数
    
        * 誤分類を許容する工夫をする、線形分離不可能なデータのマージンを最大化する。

    * カーネル法

        * カーネル関数により高次元への写像を行い線形分離可能にする。

            [![](https://miro.medium.com/max/2400/1*mCwnu5kXot6buL7jeIafqQ.png)](https://medium.com/@zxr.nju/what-is-the-kernel-trick-why-is-it-important-98a98db0961d)


    * [カーネルトリック：カーネル法](https://punhundon-lifeshift.com/kernel_method)

        * 写像の際に計算が複雑にならないように式変形するテクニック。計算量を大幅に削減する。

        * カーネル関数を使うことで、高次元の特徴空間における内積を行わず、入力空間での[カーネル](https://qastack.jp/stats/154798/difference-between-kernel-and-filter-in-cnn)の計算に落とし込むアプローチ。行っていることに対して、計算量が大幅に少なくて済む。

* [k近傍法](https://dev.classmethod.jp/articles/2017ad_20171218_knn/)

    * 回帰と分類が行える手法。分類においては、特徴量空間において距離が近い順に任意のk個を取得し、多数決でデータが属するクラスを推定する。

    [![](https://img.youtube.com/vi/4Vk1UhRDB34/0.jpg)](https://youtu.be/4Vk1UhRDB34 "【機械学習】機械学習入門 / k最近傍法 | 機械学習の手順と基本的なアルゴリズム")

* [ニアレストネイバー法：最近傍法](https://ledge.ai/machine-learning/)

    * 求めたい要素からもっとも近い既存データが属する集団に分類する、機械学習のアルゴリズムの1つ。すべての要素までの距離を計算しなければならない為、データ量が大きくなるにつれ、膨大な数の計算が必要となる。その為、計算機の性能により、データ量が制限されてしまう欠点がある。

* [決定木](https://cacoo.com/ja/blog/what-is-decision-tree/)

    * 木構造を用いて回帰や分類を行う手法で解釈性の高さが特徴。

    [![](https://img.youtube.com/vi/irTbuevXauk/0.jpg)](https://youtu.be/irTbuevXauk "【機械学習】決定木（CART）| 決定木の理論と実装")

* ニューラルネットワーク

    * キーワード：

        ニューロン、神経回路、単純パーセプトロン、多層パーセプトロン、入力層、出力層、重み、隠れ層、活性化関数、シグモイド関数、誤差逆伝播法

    * [ロジスティック回帰]((https://www.nli-research.co.jp/report/detail/id=62065?site=nli))はニューラルネットワークの一種。（単純パーセプトロンと同等）

## ✅ [教師なし学習](https://ledge.ai/unsupervised)

* 正解を参照せずに変数同士の構造やパターンを抽出する枠組み。クラスタリングや次元削減等は[教師なし学習](https://ledge.ai/unsupervised)に該当する。

* [k-means法：k平均法](https://qiita.com/g-k/items/0d5d22a12a4507ecbf11)

    [![](https://img.youtube.com/vi/8yptHd0JDlw/0.jpg)](https://youtu.be/8yptHd0JDlw "クラスタリング(k-mians)")

    * 教師なし学習で非階層型クラスタリングを行う手法。

        * 課題：クラスタリングを行う処理の初期値の取り方により結果が異なる。（偏りが生じる）

        * kNN法はクラス分類（[教師あり学習](https://ledge.ai/unsupervised/)）の手法なので注意！

    * [階層型クラスタリング](https://datachemeng.com/hierarchicalclustering/)

        * 階層的クラスタリング、階層クラスタリング。分類型と凝縮型に分かれ、凝縮型では距離の近いものを1つのクラスタとして順にデータをまとめていく手法。最終結果を樹形図（デンドログラム）で表すことができる。

        [![](https://img.youtube.com/vi/mmGj9qcFKAM/0.jpg)](https://youtu.be/mmGj9qcFKAM "【機械学習】クラスター分析｜階層的クラスタリング、k-meansクラスタリング")

* k-means++

    * k-meansの課題である初期値の取り方を工夫することにより、結果に偏りが生じることを抑制する。

* [主成分分析（PCA）](https://www.slideshare.net/takanoriogata1121/10pca-49324044)

    * 教師なし学習の[次元削減](https://qiita.com/aya_taka/items/4d3996b3f15aa712a54f)の手法で、データのばらつきを最も顕著に表現できるように、すなわち分散を最大化するように第一主成分を選択する。

    * 相関のある多数の変数から、特徴をよく表している成分（主成分）を特定し要約することで次元を削減する。

    * 寄与率：各成分の重要度を表す。

    [![](https://img.youtube.com/vi/4FUIH4cRLHI/0.jpg)](https://youtu.be/4FUIH4cRLHI "【機械学習】次元削減｜教師なし学習、主成分分析")

* [交差検証法](https://aiacademy.jp/media/?p=263)

    * 手元のデータを複数のブロック（fold）に分割し、その内の1つを評価用として使い、残りを学習データとすることを、評価用データを入れ替えてすべてに対し行う手法。

    [![](https://img.youtube.com/vi/0_ZtMUJ2Mg8/0.jpg)](https://youtu.be/0_ZtMUJ2Mg8 "【機械学習】モデルの評価と選択 | 交差検証、さまざまな評価基準")

* [RMSE/MSE/MAE/RMSLE](https://aizine.ai/rmse-rmsle1114/)

    * それぞれ回帰で使用される評価手法で、「root」「絶対値」「log」がついてることによって様々な特徴がある。

## ✅ [半教師あり学習](https://aizine.ai/semi-supervised-learning0619/)

* 少量のラベルありデータを用いることで大量のラベルなしデータをより学習に活かせることができる学習方法。

## ✅ [強化学習](https://ledge.ai/reinforcement-learning/)

* 正解を与える代わりに、将来の報酬や利益を最大化するように、特定の状況下における行動を学習する枠組み。

* エージェントの目的は収益（報酬・累積報酬）を最大化する方策を獲得すること。

* エージェントが行動を選択することで状態が変化し、最良の行動を選択する行為を繰り返す。

* 状態 →（方策により）行動 → 収益を獲得 → 次の状態 →・・・

# 4-2.📘データの扱い

* ホールドアウト検証

    * データを訓練データとテストデータに分割（例えば７：３）し利用する。

    * 訓練データでの学習によりモデルを構築し、テストデータで検証を行う。

    * 交差検証の一種と説明されることもあるが、データを交差させないため交差検証ではない。

* k-分割交差検証

    * テストデータをk個に分割し、ひとつをテストデータ、その他を訓練データとする。

    * テストデータを順次入れ替えることで、少ないテストデータでもより安定したモデルを選択できる。

* 訓練データ、検証データ、テストデータ

    * 訓練データによる学習でモデルを作成する。

    * 検証データにより[ハイパーパラメータ](https://aizine.ai/glossary-highper-parameter/)等を調整する。

    * テストデータにより評価を行う。

* [ハイパーパラメータ](https://aizine.ai/glossary-highper-parameter/)

    * 機械学習のモデルが持つパラメータの中で人が調整をしないといけないパラメータ、設定のこと。

* [グリッドサーチ](https://www.case-k.jp/entry/2018/09/03/211016)

    * モデルの精度を向上させる為に全てのパラメータの組み合わせを試す手法。

## ✅ 欠損値処理

### ✓ リストワイズ法

* 欠損があるサンプルをそのまま削除する方法。

* 欠損に偏りがある場合はデータの傾向を変えてしまうので注意が必要。

### ✓ 回帰補完

* 欠損しているある[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)と相関が強い他の[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)が存在している場合に有効。

## ✅ カテゴリデータ

### ✓ マッピング

* 順序を持つデータの場合、数値の辞書型データにマッピングする。

### ✓ ワンホットエンコーディング

* 順序を持たないデータの場合、各カテゴリごとにダミー変数を割り当てる。

# 4-3.📘応用・評価指標

## ✅ 混同行列

* [正解率](https://aidemy.net/courses/2010/exercises/S1RYhIj8xf) ： 陽性・陰性を含めた全正解数に対する、予測での正解数。全体の精度を上げたい場合の評価項目。

* [適合率](https://aidemy.net/courses/2010/exercises/HJWxt3UiUxz) ： 予測での陽性数に対する、実際の陽性数（陽性だ！と思ったものがどれくらい合っているか）。偽陽性を削減したい場合の評価項目。正と予測したデータの内、実際に正であるものの割合。$$TP/(TP+FP)$$

* [再現率](https://aidemy.net/courses/2010/exercises/HJWxt3UiUxz) ： 実際の全陽性に対する、予測での陽性正解数（すべての陽性に対し、予測でどれくらい陽性が再現できているか）。偽陰性を削減したい場合の評価項目。適合率と再現率は相反関係にある。実際に正であるデータの内、正であると予測されたものの割合。$$TP/(TP+FN)$$

* [F値](https://aidemy.net/courses/2010/exercises/r1ygYhUiUgG) ： 適合率と再現率の中庸を取るような指標であり、両者の調和平均を取ることで算出。

## ✅ オーバーフィッティング、アンダーフィッティング

* [オーバーフィッティング](https://lionbridge.ai/ja/articles/overfitting/)

    * 訓練データに適合しすぎており（[過学習](https://lionbridge.ai/ja/articles/overfitting/)）、テストデータの精度が低下している状態。（汎化性能が低い状態）

    * 訓練データにフィットしすぎないように、[正則化](https://toeming.hatenablog.com/entry/2020/04/03/000925)項の導入などを行ったのち、改めて学習を行う必要がある。

* アンダーフィッティング

    * 訓練が不十分で、訓練データ・テストデータの両方に対して精度が低い状態。

    * 学習をさらに進めることで改善することがある。

## ✅ [正則化](https://toeming.hatenablog.com/entry/2020/04/03/000925)

* 訓練誤差ではなく、汎化誤差を小さくする（汎化性能を高める）ための手法。[正則化](https://toeming.hatenablog.com/entry/2020/04/03/000925)項を導入することでオーバーフィッティグを防止する。

* L1正則化：ラッソ正則化（Lasso Normalization）。不要なパラメータを削減できる（ゼロにする）。この特徴をスパース性という。

* L2正則化：リッジ回帰（Ridge Normalization）。Lassoと違い[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)の選択は行わないが、パラメータのノルムを小さく抑えることができる（パラメータのノルムにペナルティを課す）。重み減衰（Weight Decay）ともいう。

* [Elastic Net](https://aizine.ai/ridge-lasso-elasticnet/#toc9)：L1正則化、L2正則化を組み合わせたもの。

    * Lasso回帰とRidge回帰の折衷案で「Lasso回帰のモデルに取り込める説明変数の数に制限がある」という問題点をカバーできる手法。

* 参考：[Qiita-【機械学習】ラッソ回帰・リッジ回帰について　メモ](https://qiita.com/nanairoGlasses/items/57515340a1bc24ffe445#%E3%83%A9%E3%83%83%E3%82%BD%E5%9B%9E%E5%B8%B0%E3%81%A8%E3%81%AF)

# ５．📘ディープラーニングの概要

# 5-1.📘ニューラルネットワークとディープラーニング

## ✅ 単純パーセプトロン

* 線形分類しかできない。

    ![](https://miro.medium.com/max/645/0*LJBO8UbtzK_SKMog)

## ✅ 多層パーセプトロン

* 多層化することで、非線形分類が出来るようになった。

    ![](https://miro.medium.com/max/700/1*-IPQlOd46dlsutIbUq1Zcw.png)

## ✅ ディープラーニング

* 概念としては1960年代には既に存在していた。

* ディープニューラルネットワークを用いたもので、ニューロンをいくつもつなげており、複雑な関数を近似できる。

* 検証方法として、通常はデータ量が多いため、ホールドアウト検証でよい（十分である）。

* 問題：

    * [オーバーフィッティング（過学習）](https://lionbridge.ai/ja/articles/overfitting/)しやすい。（但し、精度に特別バラつきが出やすいというわけではない。）

    * 勾配消失問題を起こしやすい。

    * 事前に調整すべきパラメータ数が非常に多い。

## ✅ 用語

* バッチサイズ

    * [イテレーション](https://research.miidas.jp/2019/04/%E3%82%A8%E3%83%9D%E3%83%83%E3%82%AF%E3%81%A8%E3%81%8B%E3%83%9F%E3%83%8B%E3%83%90%E3%83%83%E3%83%81%E3%81%A8%E3%81%8Bsgd%E3%81%A8%E3%81%8B/)で用いるデータセットのサンプル数。

    * 全データをバッチサイズで切り分ける。

* [イテレーション（iteration）](https://research.miidas.jp/2019/04/%E3%82%A8%E3%83%9D%E3%83%83%E3%82%AF%E3%81%A8%E3%81%8B%E3%83%9F%E3%83%8B%E3%83%90%E3%83%83%E3%83%81%E3%81%A8%E3%81%8Bsgd%E3%81%A8%E3%81%8B/)

    * 重みの更新を行う回数。

    * データセットに含まれるデータが少なくとも１回は実行されるようにする学習回数。

    * データセットとバッチサイズが決まれば、[イテレーション](https://research.miidas.jp/2019/04/%E3%82%A8%E3%83%9D%E3%83%83%E3%82%AF%E3%81%A8%E3%81%8B%E3%83%9F%E3%83%8B%E3%83%90%E3%83%83%E3%83%81%E3%81%A8%E3%81%8Bsgd%E3%81%A8%E3%81%8B/)は自動的に決まる。

        * [イテレーション](https://research.miidas.jp/2019/04/%E3%82%A8%E3%83%9D%E3%83%83%E3%82%AF%E3%81%A8%E3%81%8B%E3%83%9F%E3%83%8B%E3%83%90%E3%83%83%E3%83%81%E3%81%A8%E3%81%8Bsgd%E3%81%A8%E3%81%8B/)＝データセット／バッチサイズ

* エポック

    * 訓練データを学習に用いた回数。

    * データセットのバッチサイズ分割から[イテレーション](https://research.miidas.jp/2019/04/%E3%82%A8%E3%83%9D%E3%83%83%E3%82%AF%E3%81%A8%E3%81%8B%E3%83%9F%E3%83%8B%E3%83%90%E3%83%83%E3%83%81%E3%81%A8%E3%81%8Bsgd%E3%81%A8%E3%81%8B/)実行までの処理を繰り返す回数のこと。

    * エポック数が２の場合、データセットを２回使うことになる。（重みの更新回数＝[イテレーション](https://research.miidas.jp/2019/04/%E3%82%A8%E3%83%9D%E3%83%83%E3%82%AF%E3%81%A8%E3%81%8B%E3%83%9F%E3%83%8B%E3%83%90%E3%83%83%E3%83%81%E3%81%A8%E3%81%8Bsgd%E3%81%A8%E3%81%8B/)数×バッチ数×２）

* 参考

    * [機械学習／ディープラーニングにおけるバッチサイズ、イテレーション数、エポック数の決め方 - Qiita](https://qiita.com/kenta1984/items/bad75a37d552510e4682)

        ![](https://miro.medium.com/max/700/1*AOiD8LEDWrWy5l_f9qgweQ@2x.jpeg)

# 5-2.📘既存のニューラルネットワークにおける問題

* 課題

    * 隠れ層の層数を増やすと、誤差逆伝播時に誤差が最後（入力層付近）まで正しく反映されない。

* 原因

    * シグモイド関数の導関数（微分式）の最大値は0.25のため、層を進ごとに伝播させる誤差の値がどんどんと小さくなってしまう。（**勾配消失問題**）

        * 0.25×0.25×0.25… と計算していくと値が小さくなっていく。

# 5-3.📘ディープラーニングのアプローチ

## ✅ オートエンコーダ（autoencoder、自己符号化器）

* 🎩ジェフリー・ヒントンが提唱。

* 入力と出力が同じになるニューラルネットワーク。（＝正解ラベルが入力と同じ）

* 次元削減が行える。

    ![](https://upload.wikimedia.org/wikipedia/commons/3/34/%D0%90%D0%B2%D1%82%D0%BE%D1%8D%D0%BD%D0%BA%D0%BE%D0%B4%D0%B5%D1%80.png)

## ✅ 積層オートエンコーダ

* オートエンコーダを積み重ねて、逐次的に学習させる（事前学習）ことで重みを調整する

## ✅ ファインチューニング

* 積層オートエンコーダにロジスティック回帰層（あるいは[線形回帰](https://www.ibm.com/jp-ja/analytics/learn/linear-regression)層）を追加し、仕上げの学習を行う。

## ✅ [深層信念ネットワーク](https://www.kyoritsu-pub.co.jp/ai/pdf/7-9deeplearning.pdf)

* 🎩ジェフリー・ヒントンが提唱。

* 確定的モデルに分類される。（深層ボルツマンマシンは確率的モデルに分類される）

* 隠れ層の数が多いニューラルネットワークで、効率の良い近似学習手法を提案した。

* 具体的には、[教師なし学習](https://ledge.ai/unsupervised)による事前学習（制限付きボルツマンマシン）により効率的な学習を実現。

* ※ボルツマンマシン（[参考](https://www.sist.ac.jp/~kanakubo/research/neuro/boltzmannmachine.html)）

    ヒントンらによって開発された、確率的に動作するニューラルネットワーク。ネットワークの動作に温度の概念を取り入れ、最初は激しく徐々に穏やかに動作する（擬似焼きなまし法）ように工夫している。

## ✅ 現状

* 事前学習は計算コストが非常に高いので今は使われておらず、活性化関数を工夫することで解決している。

# 5-4.📘CPU と GPU

## ✅ CPU と GPU

* CPU：Central Processing Unit、中央演算処理装置

    * （GPUと相対的に）少ないコア数で、複雑な計算を直列処理する。

    * コア単位の性能は高い。

* GPU：Graphics Processing Unit

    * リアルタイム画像処理に特化した演算装置。近年は機械学習などでも利用される。

    * 多くのコアで、単純な計算を並列処理する。

    * コア単位の性能は低い。

* GPGPU：General-Purpose computing on GPU。

    * 画像以外の目的に最適化されたGPU。

* 開発メーカー

    * [NVIDIA](https://ja.wikipedia.org/wiki/NVIDIA)
    
        * GPUの開発をリード。ディープラーニングには不可欠。

        * 2006年、GUGPUの開発基盤であるCUDAを発表。

        * 2020年、Arm（英国のコンピューティング・アーキテクチャ開発企業）を買収。

        * 2020年現在、[GPUマーケットシェアの8割程度を占める](https://www.techradar.com/news/nvidia-crushes-amd-with-80-gpu-market-share-ahead-of-ampere-launch)。

    * [AMD](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BB%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%83%BB%E3%83%87%E3%83%90%E3%82%A4%E3%82%BB%E3%82%BA)

        * ATI Technologiesを吸収合併し、GPUの開発にあたってきた。

        * 2020年現在、[GPUマーケットシェアの2割程度](https://www.techradar.com/news/nvidia-crushes-amd-with-80-gpu-market-share-ahead-of-ampere-launch)である。

    * Google

        * TPU：Tensor Processing Unit、テンソル計算に最適化されたもの。

        * 分散並列技術である[Dist Belief](https://qiita.com/To_Murakami/items/d470e9dc98ac92cf299d)もGoogleにより提案されたものである。

# 5-5.📘ディープラーニングにおけるデータ量

## ✅ バーニーおじさんのルール (Uncle Bernie's rule)

* モデルを構築するためには、パラメータ数の10倍のデータ数が必要であるという経験則。

* バーニーおじさんは、スタンフォード大学の教授である。

## ✅ 次元の呪い

* データの次元が増えることにより、様々な不都合が生じる法則のこと。

* 具体的には、データの次元（例えば特徴の数）が大きくなると、データ分析における計算量が指数関数的に増大してしまう問題のことを指す。

* 対策のためには、次元数を減らす必要がある。

## ✅ その他の機械学習に関する定理

### ✓ [ノーフリーランチ定理](https://www.atmarkit.co.jp/ait/articles/2007/17/news020.html)

* [Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%8E%E3%83%BC%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%83%81%E5%AE%9A%E7%90%86)

* 組み合わせ最適化の領域での定理。

    ```
    コスト関数の極値を探索するあらゆるアルゴリズムは、
    全ての可能なコスト関数に適用した結果を平均すると同じ性能となる
    ```

* あらゆる問題に対して万能なアルゴリズムは存在しない、ということ。

### ✓ みにくいアヒルの子定理

* 機械学習で、「普通のアヒル」と「みにくいアヒル」を見分けることはできない。

* 「認知できる全ての客観的な特徴」に基づくと、全ての対象は「同程度に類似」している。客観的に見ればどれも同じということ。
区別するためには、何らかの前提知識によって[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)に重要性をつけなければならない。

### ✓ [モラベックのパラドックス](https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%A9%E3%83%99%E3%83%83%E3%82%AF%E3%81%AE%E3%83%91%E3%83%A9%E3%83%89%E3%83%83%E3%82%AF%E3%82%B9)

* 機械にとっては、高度な推論より１歳児レベルの知能・運動スキルを身に着ける方が難しい。

    ```
    高度な推論よりも感覚運動スキルの方が多くの計算資源を要する
    ```

# ディープラーニング　その他

## ディープラーニングのフレームワーク

* Tensorflow

    * Google社が開発。OSS。

    * 数値解析、機械学習、ニューラルネットワークに対応。

    * プログラムによりネットワークを記述する。

    * ※設定ファイルによりネットワークを記述　：　Caffe, CNTK

* Keras

    * Google社が開発。OSS。

    * Tensorflow上で動作し、ディープニューラルネットワークに対応。

    * プログラムによりネットワークを記述する。

* Chainer

    * Preferred Networks が開発。

    * Define-by-Runという形式を採用しており、データを流しながらニューラルネットワークを構築する。

    * ※構築後の実行はDefine-and-Runといわれる。

    * ※プログラムによりネットワークを記述する。

    * 2019年12月、開発を終了しPyTorchに移行すると発表。

* [PyTorch](https://ja.wikipedia.org/wiki/PyTorch)

    * Facebookが開発。

    * Chainerから派生。

## 🎩ヨシュア・ベンジオ

* ディープラーニングの父のひとりといわれる。

* 人間の知識では気づくことが出来ない共通点のことを「良い表現」としている。

    * 複数の説明変数の存在

    * 時間的空間的一貫性

    * スパース性

* ディープラーニングのアプローチとして以下に着目している。

    * 説明変数の階層的構造

    * タスク間の共通要因

    * 要因の依存の単純性

# ６．📘ディープラーニングの手法

# 6-1.📘活性化関数

* ニューラルネットワークにおいて、入力値から出力値を決定するための関数。

* 出力層は、シグモイド関数または[ソフトマックス関数](https://www.atmarkit.co.jp/ait/articles/2004/08/news016.html)で確率を表現する必要がある。

    * [ソフトマックス関数（softmax関数）](https://www.atmarkit.co.jp/ait/articles/2004/08/news016.html)：各ユニットの出力の総和を１に[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)する機能がある

        * シグモイド関数を一般化したものであり、複数個の入力を受け取り、受け取った数と同じ個数の出力を総和が1となるように変換して出力する。主に出力層で使われる。

* 隠れ層ではさまざまな工夫ができ、tanh関数やReLU関数などが使われる

## ✅ シグモイド関数

* 値の範囲は 0～1 。

* 微分の最大値は 0.25 。

    * 層が深くなる（つまり「0.25×0.25×・・・」と積算を繰り返していく）と値がどんどんと小さくなるため、勾配を表す値も小さくなり消失してしまうという課題がある。

    ![](https://imagingsolution.net/wordpress/wp-content/uploads/2017/06/derivative-of-sigmoid-function_1.png)


## ✅ [tanh関数（ハイパボリックタンジェント関数）：双曲線正接関数](https://www.atmarkit.co.jp/ait/articles/2003/19/news015.html)

* 値の範囲は -1～1 。（シグモイド関数よりも広い）

* 微分の最大値は 1 。

    * 値が大きいため、シグモイド関数よりも勾配が消失しづらいという特徴を持つ。

* 活性化関数に用いられる関数の1つ。入力xの値を-1~1の範囲の値に変換する。主に隠れ層（中間層）で用いられる。

## ✅ [ReLU関数（Rectified Linear Unit）：正規化線形関数](https://www.atmarkit.co.jp/ait/articles/2003/11/news016.html)

* 活性化関数に用いられる関数の1つ。sigmoid関数やtanh関数よりも勾配消失が起きにくい。ただし、すべての問題に対して最適というわけではない。

* 特徴
    
    * 現在、最もよく使われている。ニューラルネットワークにおける活性化関数のデファクトスタンダード。

    * x値が1より大きい場合、微分値が1になるため、勾配消失しにくい。

    * x値が0以下の場合、微分値が0になるため、学習がうまくいかない場合もある。

* 派生関数

    * Leaky ReLU： 0以下にわずかな傾き（0.01）を持たせることで微分値0を回避。

    * Parametric ReLU：0以下の傾きを固定値とせず、学習の対象としている。

    * Randomized ReLU：0以下の傾きをランダム値で設定する。

    * どれが一番よいと一概には言えない。

## ✅ [誤差関数](https://ai-kenkyujo.com/term/loss-function-error-function/)

* モデルの予測値と実際の値（正解データ）との誤差を表した関数。

## ✅ [過学習](https://lionbridge.ai/ja/articles/overfitting/)

* 訓練誤差は小さいが、汎化誤差が大きい（テストデータに対する誤差が大きい）状態。

* [正則化](https://toeming.hatenablog.com/entry/2020/04/03/000925)項の導入やアーリーストッピングの適用など、[過学習](https://lionbridge.ai/ja/articles/overfitting/)を抑制するためのさまざまな手法が研究されている。

# 6-2.📘[学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)の最適化

* 学習は、損失関数を最小にするためのパラメータを探索することが目標。

* 微分（偏微分）により関数の最小値を求めたいが、多次元なので難しい。（計算量が多くなってしまう）

## ✅ [勾配降下法](https://aizine.ai/glossary-gradient-descent/)

* 微分値（傾き）を下っていくことでパラメータを最適化する。（パラメータごとに行う）

* 関数の勾配に当たる微分係数に沿って降りていくことで、最小値を求める手法。大域最適解に必ず収束するわけではないので注意が必要。

* [勾配降下法](https://aizine.ai/glossary-gradient-descent/)の[ハイパーパラメータ](https://aizine.ai/glossary-highper-parameter/)

    * [イテレーション（iteration）](https://research.miidas.jp/2019/04/%E3%82%A8%E3%83%9D%E3%83%83%E3%82%AF%E3%81%A8%E3%81%8B%E3%83%9F%E3%83%8B%E3%83%90%E3%83%83%E3%83%81%E3%81%A8%E3%81%8Bsgd%E3%81%A8%E3%81%8B/)：計算の繰り返し数。

        * [勾配降下法](https://aizine.ai/glossary-gradient-descent/)におけるパラメータの更新回数。2000個の学習データについて、バッチサイズ500個でミニバッチ学習する場合、([勾配降下法](https://aizine.ai/glossary-gradient-descent/)等による)重み更新を4[イテレーション](https://research.miidas.jp/2019/04/%E3%82%A8%E3%83%9D%E3%83%83%E3%82%AF%E3%81%A8%E3%81%8B%E3%83%9F%E3%83%8B%E3%83%90%E3%83%83%E3%83%81%E3%81%A8%E3%81%8Bsgd%E3%81%A8%E3%81%8B/)繰り返すと1[エポック（epoch）](https://www.st-hakky-blog.com/entry/2017/01/17/165137)。

    * [学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)：勾配に沿って一度にどれくらい下る（移動するか）を表す。

        * 値が大きければ学習は大きく進むが、おかしなところに飛び出してしまう可能性もある。

        * 値が小さいと学習はなかなか進まない（計算量が増える）が、学習は着実に進む可能性が高い。

        * [勾配降下法](https://aizine.ai/glossary-gradient-descent/)において、勾配に沿って一度にどれだけ降りていくかを設定する[ハイパーパラメータ](https://aizine.ai/glossary-highper-parameter/)。

    * 手法の具体例

        * バッチ勾配降下法：すべての学習データを使って勾配降下を行う。

        * ミニバッチ勾配降下法：学習データから複数（バッチサイズ）を選択し誤差計算＆パラメータ更新を繰り返す。

        * [確率的勾配降下法（SGD）](https://lionbridge.ai/ja/articles/gradient-descent/)：学習データから確率的にデータを選択し、誤差計算＆パラメータ更新を行う。	Stochastic Gradient Descent。パラメータxを更新する為の勾配を求める際、全データの中からランダムに抜き出したデータを利用する（ミニバッチ学習）。

## ✅ [勾配降下法](https://aizine.ai/glossary-gradient-descent/)の問題と改善

* 局所最適解にはまり、大域最適解が求められない場合がある。

    * [学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)の値を大きくすることで抜け出せるが、適宜値を小さくしていく必要がある。（値が大きいままだと飛び出して行ってしまう）

* ２次元の場合は停留点、３次元の場合は [鞍点（あんてん）](https://note.com/lydiacorp/n/n20bfca246c4b) にはまることもある。

    * はまった状態を[プラトー](https://ainow.ai/2019/03/13/164123/#AI-2)という。次元が高いほど発生しやすい。 [鞍点](https://note.com/lydiacorp/n/n20bfca246c4b) 等の[停留点](https://note.com/lydiacorp/n/n20bfca246c4b)に到達して学習が停滞している状態。
    
    * [プラトー](https://ainow.ai/2019/03/13/164123/#AI-2)を抜け出す方法として[モーメンタム](https://qiita.com/omiita/items/1735c1d048fe5f611f80#5-%E3%83%A2%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%A0)、[AdaGrad](https://www.renom.jp/ja/notebooks/tutorial/basic_algorithm/adagrad/notebook.html)、[Adadelta](https://www.renom.jp/ja/notebooks/tutorial/basic_algorithm/adagrad/notebook.html)、RMSprop、Adamなどがある。

    * 現在はRMSprop、Adamが利用される。([参考](https://postd.cc/optimizing-gradient-descent/))

    * ある次元から見ると極大点であるが、他の次元から見ると極小点となる点で[勾配降下法](https://aizine.ai/glossary-gradient-descent/)での学習がうまくいかない原因となることがある。

### ✓ [モーメンタム（Momentum、慣性）](https://qiita.com/omiita/items/1735c1d048fe5f611f80#5-%E3%83%A2%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%A0)

* 以前に適用した勾配の方向を、現在のパラメータ更新にも影響させる。（慣性を効かせる）

* SGDに慣性的な性質を持たせた手法。最小値まで辿り着く経路がSGDと比べて無駄の少ない動きとなっていると共に、停滞しやすい領域においても学習がうまくいきやすくなるといったメリットがある。

* 勾配降下で進む方向が、大きくブレにくくなる。（図の青い線）

    ![](https://cdn-images-1.medium.com/max/842/0*TKxSMrG2xPLtcRVy.png)

### ✓ [AdaGrad](https://www.renom.jp/ja/notebooks/tutorial/basic_algorithm/adagrad/notebook.html)

* SGDの改良手法で、[勾配降下法](https://aizine.ai/glossary-gradient-descent/)におけるパラメータ毎の[学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)を、勾配を用いて自動で更新する。

* [学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)をパラメータに適応させることで自動的に[学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)を調整する。（人が固定値を決めず、調整を機会に任せる）

* 稀なパラメータに対しては大きな更新、頻繁なパラメータに対しては小さな更新を行う。

* 具体的には、勾配を二乗した値を蓄積し、すでに大きく更新されたパラメータほど更新量（[学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)）を小さくする。

* 課題　：　更新量が飽和したパラメータは更新されなくなる。

### ✓ Adadelta

* [AdaGrad](https://www.renom.jp/ja/notebooks/tutorial/basic_algorithm/adagrad/notebook.html)の発展形

* 急速かつ単調な[学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)の低下防止をはかったモデル。

### ✓ [RMSprop](https://qiita.com/omiita/items/1735c1d048fe5f611f80#6-rmsprop)

* [AdaGrad](https://www.renom.jp/ja/notebooks/tutorial/basic_algorithm/adagrad/notebook.html)を改良した手法。

* 急速かつ単調な[学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)の低下防止をはかったモデル。

* Adadeltaと同時期に提唱されたもので、ほぼ同じの内容。

* 指数移動平均を蓄積することにより解決をはかったモデル。

### ✓ [Adam](https://qiita.com/omiita/items/1735c1d048fe5f611f80#7-adam)

* それぞれのパラメータに対し[学習率](https://aidemy.net/courses/5090/exercises/HkMP93IoLlM)を計算し適応させるモデル。

* 勾配の平均と分散をオンラインで推定した値を利用する。

* [RMSprop](https://qiita.com/omiita/items/1735c1d048fe5f611f80#6-rmsprop)を改良したもので、2014年に発表された。

# 6-3.📘更なるテクニック

* 更に精度を高めるためのテクニックがさまざまある。

## ✅ [ドロップアウト(Dropout)](https://qiita.com/shu_marubo/items/70b20c3a6c172aaeb8de)

* ランダムにニューロンを[ドロップアウト](https://qiita.com/shu_marubo/items/70b20c3a6c172aaeb8de)させることで、ディープラーニングのオーバーフィッティング対策を行う。

* ニューラルネットワークの学習の際、一定の確率でランダムにノードを無視して学習を行う手法で過学習を防ぐ効果がある。

* これにより、[アンサンブル学習](https://agency-star.co.jp/column/ensemble-learning/)を行っているのと同じような状況になる。

* [アンサンブル学習](https://agency-star.co.jp/column/ensemble-learning/)

    * 複数のモデルを合わせて、1つのモデルとして扱う手法で、「バギング」「ブースティング」「スタッキング」の3種類が存在する。

    [![](https://img.youtube.com/vi/0WcrBe017-w/0.jpg)](https://youtu.be/0WcrBe017-w "【機械学習】アンサンブル学習（前編）| バギング・スタッキング・バンピング、ランダムフォレスト")

## ✅ [アーリーストッピング(early stopping)](https://note.com/okonomiyaki011/n/n371ef12f40e0#uCoBZ)

* 学習を早めに打ち切ることで、ディープラーニングのオーバーフィッティング対策を行う。

* アンダーフィットからオーバーフィットに切り替わる途中で学習を止める、という単純なもの。

* どんな手法でも使えるため、非常に強力である。

* 早期終了、早期打ち切り。学習の際、主に過学習が起きる前に学習を早めに切り上げて終了すること。

## ✅ データの[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)・重みの初期化

### ✓ データの[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)

データの途中処理ではなく、始めの工夫も必要かつ有効である。

* [正規化（Normalization、≒Scaling）](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)
    
    * データのスケールを合わせることで、学習時の収束を早める。

    * スケーリング。データのスケールを揃える等して調整する事。

    * 一番簡単なのは各[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)を ０～１ の範囲に変換（[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)）すること。

* [標準化](https://kotodori.jp/analytics/what-is-standardization/)

    * データの特徴量を 標準積分布（平均０、分散１） に変換する処理。

* [正則化（Regularization）](https://toeming.hatenablog.com/entry/2020/04/03/000925)

    * 主に[過学習](https://lionbridge.ai/ja/articles/overfitting/)等を防ぎ、汎化性能を上げるために、モデルに制約を設ける手法。
    
    * [過学習](https://lionbridge.ai/ja/articles/overfitting/)の回避を目的とする。

    * 損失関数に[正則化](https://toeming.hatenablog.com/entry/2020/04/03/000925)項を追加することで、値の偏りを防止する。

* 【注意】

    * 上記３つは言葉と意味を混同しやすいので注意！

* [白色化](https://mathwords.net/musoukanka)

    * データを無相関化してから[標準化](https://kotodori.jp/analytics/what-is-standardization/)を行うこと。

    * 各[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)を無相関化したうえで[標準化](https://kotodori.jp/analytics/what-is-standardization/)する、計算コストが高い

* 局所コントラスト[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)
    
    * 減算正規化と除算正規化の処理を行う。画像処理で利用される。

* [バッチ正規化](https://qiita.com/jun40vn/items/2105467cea35f179ea45)

    * 各層で伝わってきたデータに対し、[正規化](https://toeming.hatenablog.com/entry/2020/04/03/000925)を行う手法。

### ✓ 重みの初期化

* ディープニューラルネットワークでは伝播を経て分布が崩れるため、データの[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)手法が有効に働かない場合がある。

* 重みの初期値を工夫することで解決をはかることができる。

* 重み初期化の工夫として、乱数にネットワークの大きさを合わせた適当な係数をかけることにより、データ分布の崩れにくい初期値が考案されている。

    * Xavierの初期値：シグモイド関数、tanh関数で有効。

    * Heの初期値：ReLU関数で有効。

### ✓ ベイズ最適化

* [ハイパーパラメータ](https://aizine.ai/glossary-highper-parameter/)を含めた最適化問題とすることで、効率的なチューニングができる。

### ✓ スパースなデータ

* 疎なデータ。スパース性を用いて計算量を削減するといった工夫がなされる。

## ✅ バッチ[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)

* 各層に伝わってきたデータを、その層でまた[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)するアプローチ。（最初に[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)をするだけでなく、層ごとに[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)を繰り返す）

* データの[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)、重みの初期化と比較し、より直接的な手法となる。

* 非常に強力な手法で学習がうまくいきやすく、オーバーフィッティングしにくい。

* 学習が進むにつれて入力が変化する内部共変量シフトに対応することができる。（出力の分布の偏りを抑制する）

* 内部共変量シフト：

    入力の分布が学習の途中で大きく変わってしまう問題。

* 類似手法として、以下の[正規化](https://qiita.com/yShig/items/dbeb98598abcc98e1a57)法がある
    
    * レイヤー正規化

    * インスタンス正規化

    * グループ正規化

    ![](https://i.imgur.com/kc2OPjA.png)

## ✅ End to End Learning（一気通貫学習）

* 入力から出力までを一括で行う、ディープラーニングにおける重要な方法論。

* 以前は処理を分割していた（せざるを得なかった）が、ディープラーニングにより一括処理ができるようになった。

# 6-4.📘[CNN（畳み込みニューラルネットワーク）](https://www.imagazine.co.jp/%E7%95%B3%E3%81%BF%E8%BE%BC%E3%81%BF%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E3%81%AE%E3%80%8C%E5%9F%BA%E7%A4%8E%E3%81%AE%E5%9F%BA%E7%A4%8E%E3%80%8D%E3%82%92%E7%90%86%E8%A7%A3%E3%81%99/)

* 主に画像処理の分野で高い効果を上げているニューラルネットワーク。畳み込みやプーリングといった処理が行われる。

* 特徴

    * 画像（２次元）をそのまま入力にできる。

    * 人間がもつ視覚野の神経細胞（単純型細胞 S細胞、複雑型細胞 C細胞）を模している。

    * 順伝播型ニューラルネットワークの一種で、時系列データの分析でも使える。

* ネオコグニトロン

    * 🎩福島邦彦が考案。

    * 上記を組み込んだ最初のモデルで多層構造になっている。

    * 学習方法は add-if silentであり 、微分（勾配計算）を用いない。

* LeNet

    * その後の1998年、🎩ヤン・ルカン（Facebookに招かれた研究者、「MNIST」の作成者）によって考案されたモデル。

    * ネオコグニトロンと基本的には同じ。

    * 畳み込み層 と プーリング層（サブサンプリング層） による複数組合せ構造。


    * 誤差逆伝播法 が使われる。

## ✅ 畳み込み層

* [フィルタ（カーネル）](https://qastack.jp/stats/154798/difference-between-kernel-and-filter-in-cnn) により画像の特徴を抽出する操作。

* ストライド：フィルタを移動させる刻み。

* フィルタを通して特徴マップを得る、フィルタの各値が重みにあたる。

* 畳み込みは移動不変性の獲得に貢献、位置ずれの強いモデルが作れる。

* パラメータ数は全結合層よりも少ない。重み共有により有用な[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)を画像の位置によって大きく変化させないためである。

## ✅ プーリング層

* 決められた演算を行うだけの層。（ダウンサンプリング、サブサンプリング）

* そのため、学習すべきパラメータはない。

### ✓ maxプーリング

* ２×２ごとに画像（特徴マップ）の最大値を抽出していく。

### ✓ avgプーリング

* 平均値をとる。平均プーリング。

### ✓ Lpプーリング

* 周りの値をp乗してその標準偏差をとる。

## ✅ 全結合層

* 分類のためには出力を１次元にする必要があ。全結合層によりデータをフラットにする。

* 最近の傾向：

    * 全結合層を用いない方法が増えており、１つの特徴マップに１つのクラスを対応させる Global Average Pooling がほとんどになっている。

## ✅ データ拡張

* 課題：

    * 同じ物体でも「明るさ」「角度」「大きさ」などにより見え方が異なる。

* 対応：

    * データ拡張（データの水増し）を行う。

        →　ずらす、反転、拡大・縮小、回転、歪め、切り取り、コントラスト変更 など

* 注意点：

    * データ拡張により意味の変わってしまう画像がある。（ex.いいねマークを逆さまにすると違う意味）

## ✅ CNNの発展形

* AlexNetの場合（基準として）

    （畳み込み＋プーリング)×３層 の構造をとる。

* VGG16（VGG・[教師あり学習](https://ledge.ai/unsupervised/)），GoogLeNet

* AlexNetよりも深いモデルになっている。

* 課題①

    * 層を深くすると計算が大変

* 工夫①

    * 小さなサイズの畳み込みフィルタにより次元（計算量）を削減する。

    * GoogLeNet　：　Inceptionモジュールというブロックを構成することで、並列計算を行いやすくする。

    * VGG16　：　2014年、GoogleNetに劣らない精度をたたき出した。オックスフォード大学による。

* 課題②

    * 超深層になると誤差の逆伝播がしづらくなるため、逆に性能が落ちる。

* 工夫②

    * Skip Connection　：　層を飛び越えた結合を加える。

    * ResNet

        Skip Connection を導入したモデル、伝播しやすく[アンサンブル学習](https://agency-star.co.jp/column/ensemble-learning/)にもなる。

        入力層から出力層まで伝播する値と入力層の値を足し合わせたモデルである。
        
        入力層まで勾配値がきちんと伝わるようになり、1000 層といったかなり深い構造でも学習が可能となった。

        2015 年の ILSVRC では人間の成績を上回る成果をあげている。

    * ILSVRCのモデル推移

    [![](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/494282/19918227-7887-d697-f4e2-7602c64adbe9.png)](http://image-net.org/challenges/talks_2017/ILSVRC2017_overview.pdf)

# 6-5.📘RNN（リカレント ニューラルネットワーク）

* 特徴

    * 時間情報を反映できるモデル。隠れ層に時間情報（過去の情報）を持たせることができる。

    * 特徴は前回の中間層の状態を隠れ層に入力する再帰構造を取り入れたこと。

    * BackPropagation Through-Time(BPTT) ： 時間軸に沿って誤差を反映していく。

    * 自然言語処理でもよく用いられる。

    * 再帰型ニューラルネットワークで、閉路がある。

* 課題　（[参考1](https://qiita.com/t_Signull/items/21b82be280b46f467d1b)、[参考2](https://sagantaf.hatenablog.com/entry/2019/06/04/225239)）

    * 勾配消失問題

    * 入力重み衝突、出力重み衝突　：　重みが上下して精度が上がらない問題

    * ネットワークにループ構造が含まれるため、中間層が１層でも勾配消失問題が起こる。

* 解決策

    * LSTM手法を使う。

## ✅ LSTM（Long Short-Term Memory）

* 時系列データにおいてはデファクトスタンダード。Google翻訳でも利用されている。

* 🎩ユルゲン・シュミットフーバーと、ケプラー大学の🎩ゼップ・ホフレイターによる提案。

* 過去から未来に向けて学習し、遠い過去の情報でも出力に反映できる。

* 活性化関数の工夫ではなく、隠れ層の構造を変えることで解決する。

* LSTMブロック機構を適用

    * CEC（Constant Error Carousel）　：　誤差を内部にとどまらせ勾配消失を防ぐセル。

    * ゲート　：　入力、出力、忘却の３つ。

    * 各重み衝突に対応しつつ、誤差過剰を防止する忘却を持たせる。

* 機械翻訳や画像からのキャプション生成（画像の説明文生成）などにも利用できる。

* 課題

    * ゲートが多いため計算量が多い

## ✅ GRU（Gated Recurrent Unit）

* LSTMの計算量を少なくした手法。

* リセットゲート、更新ゲートからなる。

## ✅ RNNの発展形

### ✓ Bidirectional RNN

* 未来から過去方向にも学習できるモデル。

### ✓ RNN Encoder-Decoder

* 他モデルの問題

* 入力は時系列だが出力が一時点になってしまう。

* 特徴

    * 出力も時系列である（sequence-to sequence）。

    * モデルはエンコーダとデコーダからなる。

### ✓ Attention

* 他モデルの問題

* どの時点の情報がどれだけ影響力を持っているかまではわからない。

* 特徴
    
    * 時間の重みをネットワークに組み込んでいる。

* Attention GAN

    * 文章から画像を生成することができる。

# その他の応用

## ✅ 転移学習

* 学習済みのモデルを用いて追加学習を行う。

* [過学習](https://lionbridge.ai/ja/articles/overfitting/)を抑制することが出来る。

## ✅ 蒸留

* 学習済みの大規模モデルの入力と出力を使って新たに学習させる方法。

* 少ない計算資源で従来と同程度のモデルを作ることが出来る。

# 6-6.📘深層強化学習

## ✅ DQN（Deep Q-learning）

* [強化学習](https://ledge.ai/reinforcement-learning/)の手法であるQ学習と深層学習の組合せ。CNNの一種である。

* Q関数（＝行動価値関数）の最大化を目指す。

* DeepMind ブロック崩しで採用された。

    [![](https://img.youtube.com/vi/TmPfTpjtdgg/0.jpg)](https://youtu.be/TmPfTpjtdgg "DeepMind ブロック崩し")

* 改良モデル：Double DQN, Dueling Network, Categorical DQN, Rainbow

* 応用事例：AlophaGo（アルファ碁）

# 6-7.📘深層生成モデル

ディープラーニングは生成タスクにも応用されている。

## ✅ 画像生成モデル

### ✓ VAE（Variable AutoEncoder）

* 変分オートエンコーダ、変分自己符号化器

* 変分ベイズ推定法の一種。

* 入力を統計分布に変換（平均と分散を表現）する。

* ランダムサンプリングしたものをデコードすると新しいデータが生成できる。

### ✓ GAN（敵対的生成ネットワーク）

* 🎩イアン・グッドフェローが提唱。

* ２種類のネットワーク（ジェネレータ：生成、ディスクリミネータ：識別）で競わせる。

* 画像生成への応用が顕著である。

* これ自体はモデルでなくアーキテクチャを指す。

* これを実装したモデルがDCGAN（Deep Convolutional GAN）。

* 🎩ヤン・ルカンは「機械学習において、この１０年で最もおもしろいアイデア」とコメント

# ７．📘ディープラーニングの研究分野

# 7-1.📘画像認識

## ✅ ILSVRC（Imagenet Large Scale Visual Recognition Challenge）

* 画像認識のコンペティション、課題は位置課題、検出課題の２つ。

* Imagenet

    * スタンフォード大学がインターネットから収集した画像群。

    * 1400万枚を超える画像を収録したデータベース。

    * 物体名は２万種以上。

## ✅ AlexNet

* 2012年、ILSVRCで優勝したSuperVisionでのモデル。

* 特徴は、ReLU、SRN、データ拡張、２枚のGPU利用。

* パラメータ数は６千万個にものぼった。（ディープラーニングのパラメータは多い）

## ✅ R-CNN（Regional CNN）

* 関心領域の切り出し（一課題）は従来の手法を用いて行う。

    ※ **バンディングボックス**（物体検出。関心領域を表す矩形領域のこと）を求める回帰問題となる。

* 検出課題についてはCNNを用いる。

* 上記組合せは、時間のかかる手法である。

## ✅ 高速RCNN（fast RCNN）

* 関心領域の切り出しと物体認識を高速に行う手法。

* 最初から最後まで深層学習でできるようになった。

## ✅ faster RCNN

* 高速RCNNが改良され、ほぼ実時間で処理できるようになったモデル。

* １６フレーム／秒程度で処理可能。

## ✅ [YOLO（You Only Look at Once）](https://qiita.com/cv_carnavi/items/68dcda71e90321574a2b)

* 検出と識別を同時に行うことで、遅延時間の短縮を実現したモデル。

## ✅ SSD（Single Shot Detector）

* YOLOより高速である。

* Faster RCNNと同等の精度を実現。

## ✅ セマンティックセグメンテーション

* R-CNNのような矩形切り出しではなく、より詳細（画素単位）な領域分割を得るモデル。

* 完全畳み込みネットワーク（FCN）のモデルがあり、すべての層が畳み込み層で構成される。（単体では画像認識を行えない）

* 同じカテゴリに属する物体はすべて同一ラベルになる。

## ✅ インスタンスセグメンテーション

* 同じカテゴリに属する物体でもすべて別ラベルにできる。

## ✅ 完全畳み込みネットワーク（FCN）

* 全ての層が畳み込み層。

## ✅ 画像データの前処理

* リサイズ、トリミング

* グレースケール化：

    カラー画像を白黒画像に変換して計算量を削減する。

* 平滑化：
    
    細かいノイズの影響を除去する。

* ヒストグラム平均：
    
    画素ごとの明るさをスケーリングする。

# 7-2.📘自然言語処理

## ✅ 関連ワード

### ✓ 言語モデル

* 「単語の意味は、その周辺の単語によって決まる」という分布仮説がある。

* [Word2Vecを理解する:Qiita](https://qiita.com/g-k/items/69afa87c73654af49d36)

### ✓ [分散表現](https://sites.google.com/site/iwanamidatascience/vol2/word-embedding)

* 記号を計算機上で扱うための方法論。

* 単語を高次元の実数ベクトルで表現する技術。

    * 単語分布図

        ![](https://sites.google.com/site/iwanamidatascience/_/rsrc/1468857206744/vol2/word-embedding/words.5k.thumbnail.png?height=600&width=600)

* 単語を固定長のベクトルで表現する。

### ✓ [構文解析](https://ja.wikipedia.org/wiki/%E6%A7%8B%E6%96%87%E8%A7%A3%E6%9E%90)

* 文章（テキスト文字列）を形態素に切分け、その間の関連（修飾-被修飾など）といったような統語論的（構文論的）な関係を図式化するなどして明確にする（解析する）手続き。

### ✓ [照応解析](https://ja.wikipedia.org/wiki/%E7%85%A7%E5%BF%9C%E8%A7%A3%E6%9E%90)

* 照応詞（代名詞や指示詞など）の指示対象を推定したり、省略された名詞句（ゼロ代名詞）を補完する処理のこと。

### ✓ 談話解析

* 文章中の文と文の間の役割的関係や話題の推移を明らかにするものである。形態素解析、構文解析、意味解析などの１文内の言語要素を対象にした解析とは異なる。

### ✓ [形態素解析](https://ja.wikipedia.org/wiki/%E5%BD%A2%E6%85%8B%E7%B4%A0%E8%A7%A3%E6%9E%90)

* 文を単語に分解し品詞を特定する。

* 日本語は英語のようにスペースで区切られていない。分析のためには、単語を区切る必要がある。([参考](https://qiita.com/AwaJ/items/98123d1d3a9bbb6e3e3d#%E5%BD%A2%E6%85%8B%E7%B4%A0%E8%A7%A3%E6%9E%90))

    ```
    「すもももももももものうち」
    
    すもも(名詞,一般)/も(助詞,係助詞)/もも(名詞,一般)/も(助詞,係助詞)/もも(名詞,一般)/の(助詞,連体化)/うち(名詞,非自立)
    ```

### ✓ N-gram

* 単語ではなく、文字数で分割する手法。([N-gramの作り方：Qiita](https://qiita.com/kazmaw/items/4df328cba6429ec210fb))

* 形態素解析よりも単純で、任意の連続したN文字単位で区切る。([参考](https://qiita.com/AwaJ/items/98123d1d3a9bbb6e3e3d#ngram))

    ```
    たこ焼きが食べたい

    N=1 unigram
    unigram: た-こ-焼-き-が-食-べ-た-い
    
    N=2 bigram
    bigram: たこ-こ焼-焼き-きが-が食-食べ-べた-たい

    N=3 trigram
    trigram: たこ焼-こ焼き-焼きが-きが食-が食べ-食べた-べたい
    ```

### ✅ bag-of-words

* 文章に単語が含まれているかどうかを考えて、テキストデータを数値化（ベクトル化）する。

* 文の構成などは考えず、単語の出現のみに注目する。([参考](https://qiita.com/AwaJ/items/98123d1d3a9bbb6e3e3d#bag-of-words))

    ![](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F185346%2F87330afb-e3ee-0846-df0b-9ac0ae9beea8.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c6d582efc4651e18c5367bcb8cd616cb)

## ✅ [TF-IDF（Term Frequency - Inverse Document Frequency）](https://qiita.com/AwaJ/items/5937665d5a4152cc24cf)

* 文章に含まれる単語の重要度を[特徴量](https://ainow.ai/2020/07/14/225092/#i-5)とする。

* 文書の中から、その文書の特徴語を抽出する時に使う値。

* [TF](https://qiita.com/AwaJ/items/5937665d5a4152cc24cf#tf)：単語の文書内の出現頻度。一つの文書内で出現する回数が多ければ重要である可能性が高い

    $$\textrm{tf}(t,d)=\frac{n_{t,d}}{\sum_{s \in d}n_{s,d}}$$

    * $$\textrm{tf}(t,d)$$：文書 $$d$$ 内のある単語 $$t$$ のTF値

    * $$n_{t,d}$$：ある単語 $$t$$ の文書 $$d$$ 内での出現回数

    * $$\sum_{s \in d}n_{s,d}$$：文書 $$d$$ 内のすべての単語の出現回数の和

* [IDF](https://qiita.com/AwaJ/items/5937665d5a4152cc24cf#idf)：ある単語が出てくる文書頻度の逆数。多くの文書に出現している単語は重要である可能性が低い。

    $$\textrm{idf(t)}=\log{\frac{N}{df(t)}}+1$$

    * $$\textrm{idf(t)}$$：ある単語 $$t$$ のIDF値

    * $$N$$ : 全文書数

    * $$df(t)$$：ある単語 tt が出現する文書の数


## ✅ 隠れマルコフモデル

* HMM、Hidden Markov Model

* 直前の結果のみから次の結果が確率的に求まるという「マルコフ性」を仮定して、事象をモデル化する手法。

## ✅ word2vec

* ベクトル空間モデル、単語埋め込みモデルともいわれる。

* 2013年、Googleにより開発。

    * 日本語モデルは東北大学や企業が公開している。([参考](https://qiita.com/kenta1984/items/6dc327c31b6c36e66863))

* 中間層の活性値を単語の意味ベクトルとみなす。

    * 中間層の活性化関数の「重み」を分散表現とする。([参考](https://qiita.com/g-k/items/69afa87c73654af49d36))

* 王様－男性＋女性＝女王　のような計算ができる、というのが有名。

* CBOWとスキップグラムの２つの手法がある。

### ✓ CBOW（Countinuous Bag-of-Words）

* 周辺の単語を与えて、ある単語を予測する。

    * 入力層が二つあり、中間層を経て出力層へとたどり着きます。

    ![](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F395230%2Ffdddb635-0ccd-491b-3e9c-27aaaa3ae530.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=77fda3f5f658b8fb5058c8fc4daa279b)

    * 上記例はコンテクストは「毎朝」「を」、ニューラルネットワークが予想したい単語が「コーヒー」である例です。
    
    * 図の中間層は各入力層の全結合による変換後の値が「平均」されたものになります。一つ目のの入力層が$$h_{1}$$二つ目の入力層が$$h_{2}$$に変換されたとすると中間層のニューロンは$$\frac{1}{2}(h_{1}+h_{2})$$になります。

    * 入力層から中間層への変換は、全結合層(重みは$$W_{in}$$)によって行われます。この時は全結合層の重み$$W_{in}$$は$$8×3$$の形状の行列になっていますが、この重みこそが**CBOWを用いて作る単語の分散表現**になります。

    * この時適切な重みを持ったニューラルネットワークでは「確率」を表すニューロンにおいて正解ニューロンが高くなっていることが期待できます。CBOWの学習では正解ラベルとニューラルネットワークが出力した確率の交差エントロピー誤差を求め、それを損失としてその損失を少なくしていく方向に学習を進めます。

    * CBOWモデルの損失関数は下記のように表されます。
    
        (モデルを作成するに当たって用いるコンテクストを前後1単語とした場合)

    $$\textrm{L}=-\frac{1}{T}\displaystyle\sum_{t=1}^T \log{P}(w_{t} \mid w_{t-1},w_{t+1})$$

    * 上記損失関数をできるだけ小さくしていく方向で学習していくことで、その時の重みを単語の分散表現として獲得することができます。

### ✓ スキップグラム（Skip-gram）

* ある単語を与えて、その周辺の単語を予測する。

* CBOWでのコンテクストとターゲットを逆転させたようなモデル。

    ![](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F395230%2F03efeff8-3afe-9020-cafb-d82e0e43bd65.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=5455ed0e3700274a2c75be0fee0b5f19)

* skip-gramの入力層はひとつで出力層はコンテクストの数だけ存在します。それぞれの出力層で個別に損失を求め、それらを足し合わせたものを最終的な損失とします。

* また、skip-gramモデルの損失関数は下記の式で表されます。

    (モデルを作成するに当たって用いるコンテクストを前後1単語とした場合)

    $$\textrm{L}=-\frac{1}{T}\displaystyle\sum_{t=1}^T (\log{P}(w_{t-1} \mid w_{t})+\log{P}(w_{t+1} \mid w_{t}))$$

* skip-gramモデルはコンテクストの数だけ推測を行うためその損失関数は各コンテクストで求めた損失の総和を求める必要があります。

## ✅ fastText

* 🎩トマス・ミコロフらが開発。

* 単語表現に文字の情報も含めることができる。

* 訓練データにない単語が作れるようになる。

* Wikipediaと[Common Crawl](http://commoncrawl.org/)による１５７言語の[訓練データ](https://github.com/facebookresearch/fastText/blob/master/docs/crawl-vectors.md)がある

## ✅ ELMo

* 文章表現を得るモデル。

## ✅ マルチタスク言語処理

* マルチタスク学習は単一のモデルで複数の課題を解く機械学習の手法。

* 自然言語では品詞づけ・文節判定・係り受け・文意関係(補強・反対・普通)・文関係の度合いを同時に学習させる。([参考](https://ai-kenkyujo.com/term/multitask-learning/))

## ✅ ニューラル画像脚注付け

* NIC、Neural Image Captioning。

* 画像認識モデルの全結合直下層の情報を、言語生成用リカレントニューラルネットワークの中間層の初期値として用いる。

## ✅ ニューラルチューリングマシン

* Neural Turing Machine：NTM

* チューリングマシンをニューラルネットワークにより実現する試み。

* 微分可能であり、最急降下法による効率的な学習が可能。

## ✅ 💻Tay

* Microsoft社によるチャットボット。

* Twitter上で不適切な誘導を受け、不適切な行動を繰り返しサービスが停止された。

* Gigazine-Microsoftの[人工知能](https://ledge.ai/artificial-intelligence/)が「クソフェミニストは地獄で焼かれろ」「ヒトラーは正しかった」など問題発言連発で炎上し活動停止

## ✅ BERT

* Bidirectional Encoder Representations from Transformers。

* Google AI Languageの研究者が最新論文で発表した。

* [参考](https://ainow.ai/2019/05/21/167211/) BERT解説：自然言語処理のための最先端言語モデル | AI専門ニュースメディア AINOW

# 7-3.📘音声処理

## ✅ WaveNet

* Google DeepMind社により開発。

* 音声合成と音声認識ができる。

* 自然な発話により、音声合成のブレイクスルーとして注目された。

## ✅ それまでの音声認識

* 1990年代では、隠れマルコフモデル（HMM）による音の判別モデルと、Nグラム法による語と語のつながりを判別する言語モデルでできていた。

# 7-4.📘ロボティクス （[強化学習](https://ledge.ai/reinforcement-learning/)）

* 動作制御には[モンテカルロ法](https://xtrend.nikkei.com/atcl/contents/18/00131/00007/)やQ学習が応用されている。

* DQN（Deep Q Networks） アタリのゲームに対して応用された。

* アルファ碁 モンテカルロ木探索で成果を挙げた。

* アルファ碁ゼロ セルフプレイにより学習を進め、アルファ碁を凌駕した。

* RAINBOWモデル [強化学習](https://ledge.ai/reinforcement-learning/)の性能を改善するための３つのモデルをすべて適用したもの。

    * 方策ベース

    * 状態価値関数（価値ベース）

    * Q学習、SARSA（[参考](https://qiita.com/shionhonda/items/ec05aade07b5bea78081#%E6%96%B9%E7%AD%96%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AE%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)）

    * モデルベース

## ✅ [強化学習](https://ledge.ai/reinforcement-learning/)の課題

* 学習時間

    * 理論的には無限に学習できるが、実際は有限なため損耗し学習継続が困難になることがある。

* マルチエージェント応用

    * 複数のエージェントで相互学習を開始すると、初期段階での知識が不十分なため学習過程において不安定化が見られる。

    * 対応のため、逆強化学習やDQNなどが適用されている。

# 7-5.📘マルチモーダル

* 五感や体性感覚（平衡感覚、空間感覚など）の複数の感覚情報を組み合わせて処理すること。

* 機械学習においては、複数の異なる情報を用いて学習することを、マルチモーダル学習という。

# ８．📘ディープラーニングの応用に向けて

# 8-1.📘産業への応用

* 整理難のため一部のみ記載。

# ✅ モビリティ

* 自動運転

    * 内閣官房IT総合戦略室等、2020年無人自動走行による移動サービス。

    * 2022年高速道路でのトラック隊列走行の商用化を目指す。
    
    * あわせて各種検討が行われている。（安全基準、交通ルール、保険等の責任関係、制度設計）

* 自動運転レベル

    |レベル|概要|運転操作の主体|
    | :--: |:--|:--:|
    |レベル0：運転自動化なし|ドライバーが全ての運転操作を実行。|ドライバー|
    |レベル1：運転支援|システムがアクセル・ブレーキ操作またはハンドル操作のどちらかを部分的に行う。|ドライバー|
    |レベル2：部分運転自動化|システムがアクセル・ブレーキ操作またはハンドル操作の両方を部分的に行う。|ドライバー|
    |レベル3：条件付運転自動化|決められた条件下で、全ての運転操作を自動化。ただし運転自動化システム作動中も、システムからの要請でドライバーはいつでも運転に戻れなければならない。|システム（システム非稼働時はドライバー）|
    |レベル4：高度運転自動化|決められた条件下で、全ての運転操作を自動化。|システム（システム非稼働時はドライバー）|
    |レベル5：完全運転自動化|条件なく、全ての運転操作を自動化。|ドライバー|

* ロボットタクシー

    * 移動サービス（ロボットタクシー）の開発が進められている。

# ✅ 応用路線

* Google 社・Facebook 社
    
    * 言語データによる RNN や映像データからの概念・知識理解を目指す。

* UC Berkeley

    * 実世界を対象に研究を進め知識理解を目指す。

* DeepMind 社

    * 🎩デミス・ハサビスにより設立。

    * オンライン空間上でできることをターゲットにして知識理解を目指す。

# 8-2.📘法律

## ✅ 法

* 制約になり得るが、イノベーションの自由を支えるものでもある。

## ✅ プライバシー・バイ・デザイン

* Privacy by Design：PbD

* 仕様検討段階からプライバシー侵害の予防を指向する。
他に、セキュリティ・バイ・デザイン　や　バリュー・バイ・デザイン　がある。

## ✅ データの収集

* 以下を考慮する必要がある。

    1. 著作権法

    1. 不正防止競争防止法

    1. 個人情報保護法

    1. 個別の契約

    1. その他の理由

    成果（データ）をラボの外に出さなくても問題になるケースがある。（取得自体が問題になるケースも）

## ✅ 日本の著作権法

* 日本では「情報解析を行うために著作物を複製してもよい」とされており、世界的に見ても先進的である。

## ✅ オープンイノベーションの弊害

* 複数企業による研究開発が進んでいるが、トラブルも散見される。

* 認識のズレやプロジェクト管理の甘さから高額訴訟に至るケースもある。

* システム開発の協力義務を念頭に、プロジェクトを注意深く推進することが求められる。

## ✅ [AI・データの利用に関する契約ガイドライン](https://www.meti.go.jp/press/2018/06/20180615001/20180615001.html)

* 2018年、経済産業省が策定。

* 開発プロセスは以下の４段階

    1. アセスメント
    
    1. PoC
    
    1. 開発
    
    1. 追加学習

* 契約類型は以下の３つ

    1. データ提供型

    1. データ創出型
    
    1. データ共用型

## ✅ 知的財産法

* 一定の条件を満たせば知的財産として保護される。

* 事前にケースを整理しておくとよい。

## ✅ 次世代知財システム検討委員会報告書

* [次世代知財システム検討委員会](http://www.kantei.go.jp/jp/singi/titeki2/tyousakai/kensho_hyoka_kikaku/index.html)による。

* [報告書](https://www.kantei.go.jp/jp/singi/titeki2/tyousakai/kensho_hyoka_kikaku/2016/jisedai_tizai/hokokusho.pdf)として取り纏められている。

## ✅ 利用者保護

* 当初目的以外でデータ利用する場合は再度レビューを行うこと。

* 利用目的はできる限り特定すること（**個人情報保護法** 15条1項）

* 利用目的変更では事前の本人同意が必要（16条1項）

* 本人の通知と公表を行う（18条1項）

* 個人データの漏洩防止など安全管理措置を講じること（20条）
* 従業員の監督義務（21条）、委託先の監督義務（22条）

* データ内容の正確性の確保などに関する努力義務（19条）

* EU一般データ保護規則（GDPR）にも注意。

## ✅ ドローンでの利用（[参考](https://viva-drone.com/drone-premission-online-dips-mlit-go-jp/)）

### ✓ 許可が必要になる飛行場所

* 空港周辺

* 150m以上の上空

* 人家の密集地域（人口集中地区、DID地区）

### ✓ 承認が必要になる飛行方法

* 夜間飛行

* 目視外飛行

* 第三者やその所有物（家や車）の30m未満の距離での飛行

* 催し場所での飛行

* 危険物の輸送

* 物件投下

# 8-3.📘倫理

## ✅ IEEE P7000シリーズ

* 「倫理的に調和された設計」レポート。

* 倫理的な設計を技術段階、開発段階に取り込む試み。

## ✅ データセットの偏り

* データセットによっては偏り・過少代表・過大代表などが生じる。

* データベースに登録されていないことによる偏りも生じる可能性がある。

* 現実世界の偏りが増幅されることで、問題が生じる場合がある。

## ✅ [カメラ画像利活用ガイド](https://www.meti.go.jp/press/2017/03/20180330005/20180330005.html)

* 経済産業省、総務省、IOT推進コンソーシアムによる。

* 企業が配慮すべきことをまとめている。

## ✅ 自律型致死性兵器（LAWS：Lethal Autonomous Weapon Systems）

* [人工知能](https://ledge.ai/artificial-intelligence/)などにより完全に自律した殺傷能力を持つ兵器のこと。

* 現段階では存在しないが、専門家間で協議が続いている。

* 一連の会議において、「LAWSの定義」、「人間の関与」等が議論された。

* [参考](https://www.mod.go.jp/msdf/navcol/SSG/topics-column/071.html)

## ✅ [人工知能学会　９つの指針](http://ai-elsi.org/wp-content/uploads/2017/02/%E4%BA%BA%E5%B7%A5%E7%9F%A5%E8%83%BD%E5%AD%A6%E4%BC%9A%E5%80%AB%E7%90%86%E6%8C%87%E9%87%9D.pdf)

1. 人類への貢献

1. 法規制の遵守

1. 他者のプライバシーの尊重

1. 公正性

1. 安全性

1. 誠実な振る舞い

1. 社会に対する責任

1. 社会との対話と自己研鑽

1. [人工知能](https://ledge.ai/artificial-intelligence/)への倫理遵守の要請

## ✅ 日本ディープラーニング協会の見解

* ディープラーニングは決して万能なわけではない。

* ディープラーニング以外の手法を使う方が有効な場合もある。

    →　ディープラーニング自体が目的化してはならない。

* ex.ワシントンDC「IMPACT」

* 教師のスコアリングにより解雇を行ったが、現場のニーズや実情に合致していなかった。

## ✅ 目標間のトレードオフ

* 協調フィルタリングにより、フィルタ・バブル（好みの情報にしか触れられなくなる）が生じる。

* 個別性と社会性のトレードオフになる。

* FAT（Fairness, Accoutability, and Transparency：公平性・説明責任・透明性）という研究領域やコミュニティがある。

## ✅ Adversarial Example（Adversarial attacks）　（[参考](https://qiita.com/deaikei/items/ecbf2e796e771bf7113f)）

* ディープラーニングにおける重要な課題の一つ。

* 分類器に対する脆弱性攻撃のようなもの。

* 学習済みのディープニューラルネットモデルを欺くように人工的に作られたサンプルで、人の目には判別できない程度のノイズを加えることで作為的に分類器の判断を誤らせる。

* 絶対的に安全な技術はないことを認識しておくこと。

## ✅ クライシス・マネジメント（危機管理）
 
* 火消し（危機を最小限に抑える）、復旧（再発防止）が主眼。

* エスカレーションの仕組みづくりが重要。防災訓練を行うこと。

* 危機管理マニュアルの有効性を検証する。

## ✅ 透明性レポート

* プライバシーヤセキュリティについては、積極的に社会と対話する必要がある。

* いくつかの個別企業では透明性レポートを公開している。

## ✅ 指針作り

* Google

    * AI技術開発の原則を公開、「AI at Google: our principles」。

* Partnership on AI（PAI）
    
    * Amazon、Google、Facebook、IBM、Microsoftなどで組織された。

    * AIにおける公平性、透明性、責任などへの取組みを提示。

* アシロマAI原則

    * 2017年2月、世界中のAI研究者らが集まり発表。

    * AIの短期的、長期的な課題について公開。

    * 「AIによる軍拡競争は避けるべきである」ことが明示された。

# その他

## ✅ 日本

### ✓ 新産業構造ビジョン

### ✓ [「人間中心のＡＩ社会原則」及び「ＡＩ戦略2019(有識者提案)」](https://www.mhlw.go.jp/content/10601000/000502267.pdf)

## ✅ 中国

### ✓ 中国製造2025

* 2025年までの中国製造業発展のロードマップ。

* AI技術に関する取組み強化が明言されている。

* ドイツのインダストリー4.0の影響を受けて作成されたと言われている。

### ✓ インターネットプラスAI3年行動実施方案

* 2016年、人工知能産業の促進に向けてインターネットプラスAI3年行動実施方案が発表された。

* AI技術を重点領域で活用することで世界に通用するトップ企業を育成することを目的としている。

## ✅ 英国

### ✓ RAS2020戦略

* 2015年3月、政府はロボット工学・自律システム（RAS）分野の発展を支援すると表明。

## ✅ ドイツ

### ✓ [デジタル戦略2025](https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h29/html/nc277350.html)

* 2017年3月、ツィプリス大臣は連邦政府が2016年3月に策定した「デジタル戦略2025」を発表。

* 2025年までにドイツがいかにしてデジタル化を具体化していくか取り組むべき10の施策について提案している。

## ✅ Coursera

* 🎩 アンドリュー・ング（Andrew Ng） による。（「GoogleBrain」にも携わり、Baidu研究所に勤務する）

* 初級から上級までAIに関する講義が行われている。

# 参考

以下のサイトからの情報をもとに個人でまとめました。

* [【資格試験対策】ディープラーニングG検定【キーワード・ポイントまとめ】](https://sik-bug.hatenablog.com/entry/2020/05/30/103038)

* [【完全版】JDLA G検定チートシート](https://qiita.com/RZQiita/items/4a4fec1c91cf95fd64a2)