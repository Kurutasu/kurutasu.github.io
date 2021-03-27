---
layout: post
title:  "GithubへのpushをトリガーとしてCode PipelineでJekyllをビルドしてS3にデプロイする"
updated: 2021-03-27
cover:  "/assets/cover_image.jpg"
subheadline:  ""
categories: 
- AWS
- jekyll
---

# はじめに

すでにGitHub上にJekyllのコード自体が存在して、ローカルでjekyll buildで _siteに出力されることを確認している

S3上のコンテンツをCloudFrontを使用し配信している。

参照：[独自ドメインを使用してS3上の静的ウェブサイトをRoute53を使用し公開する](https://kurutasu.github.io/2019/06/18/aws-s3-route53)

# 手順

## Code PipelineとCode Buildでパイプラインを作る

`パイプラインを作成する`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3cEXu05cdBh4BsBO1W4Tlwla4LSlPJK6HQu72RE2c6DV2XDBEzAjDXtc3SzqletKb6rbVgBPznS3ZfHXYChZYLnD5kcUd1io4n7khEKaagzOMvUu4F7qPgVBVep_u3MjHVdyUjVNeWi_sWBfkObQ2xE=w1262-h517-no?authuser=0)

### 1.パイプラインの設定を選択する

ここではパイプライン名を設定します
（このパイプライン名は変えられなくなるので注意）

`次に`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3esLIMEMABlbbE29o8cCch1KHuvBG-5upxUH1OsvFLsP0LkA9GJe2PzxaCBDX8mNE_kj0ksuDHpibMDOLjT4w74j9dAWQ7AGnWlfYA5n80yyTLJLFGU9REH2VMAi0vnpNPZQmhMdqKsKksiIVUJ56q0=w1084-h550-no?authuser=0)

### 2.ソースステージを追加する

`ソースプロバイダー`に`GitHub（バージョン2）`を選択する

※`GitHub（バージョン1）`は非推奨の為、使用しない

`GitHubに接続する`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3cbX9h9eTKoRHx0BAaAhiJ8b6ZLXyMajnhIrsLNBWJKPK-QDFKTn4VyeXTNBApnY5ys6aVoIIiqw8tYP92ofSUH2_kcjZ7KFtqSm9PTZk6rUa8bPpgk1qVVOqtZAelx_k-J_d6O_mhPF0pifUA4129t=w1289-h555-no?authuser=0)

接続を作成する

接続名（任意）を入力する

![](https://lh3.googleusercontent.com/pw/ACtC-3fBJrjsWtoyYduvL1DvV5CoEZ2jOtJV_vRd6GNO77rnXU_tItWU_ywMYaK9XsAy8F9OEypP-CFq59Kk7XPDtwSEBtMz3vjMaoKT0sEWcUG1TyM3APv3SPTZMUoa1OFslxyAIlFmPDy1-0O7qy6O7XZM=w591-h281-no?authuser=0)

auth認証にて接続する

![](https://lh3.googleusercontent.com/pw/ACtC-3fzOV2xR-MrrR8cyvesa-8NRiPO6gIOU3KVLmdPJ-qLQKSFs2iXGE580y6h4HMa5nJPs_dih8hzNpomrQC85C4JmHk22RY9YAROEZlnh_x-7O8GjJFKXpuBkosvs4pD3SZ7PHPGiiHbauenH0JQyW-L=w561-h584-no?authuser=0)

`新しいアプリをインストールする`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3dAxvN4ghZltaQLPllEL3DzoGdKmSGZh4s9RoZa3Zyr_rkAY8V6fxRg4GmhzRT6mN97OJQnXmOTxhwORDePGV_uhFRIvNRY5zlny62GWj-Z4HHy3E2aMc-1XBOuDYJOiF1FzVmCKXm-1seoZhVOq6py=w898-h415-no?authuser=0)

すべてのリポジトリでもよいが、必要以上に権限は不要かと考え、対象のリポジトリのみとする

`Install`を選択

パスワード入力後、先ほどの画面にて`接続`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3e1OyuIb_ISdVMouVdknnKzT4Z3-qHSJEHR45ZuMRdnCsNaCiO131WRGpE15-9lUpGlrWrbZLZ9YqaqdV8IR2tfdbTjoxPBvYuLYIKVXOP28DmRPJpYh9wUYOUcI9iyyRnZcSakp0DdYSos-MA2y4US=w501-h635-no?authuser=0)

対象リポジトリとブランチを入力

`次に`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3f9_z4Zpy3pA5Gure84f-MFZP5ru62bqtEh8JWSNc_ffNVXTu2qnVgnuyuTOM_CRzoMcXJs1-9QKOrKZGiyCKF5O_2t70ilY-p1sGjLKgnXn-DfNK8g9frd0eyEk1jRIXTolx8QynoZW3YhCFygygWe=w689-h569-no?authuser=0)

### 3.ビルドステージを追加する

プロバイダーを構築するは`AWS CodeBuild`を選択

`プロジェクトを作成する`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3fRkmCPe0C79MD0s6fx5aXV5eEf6RUI3wjjWd423HzBp7vpl6KjXNcfIDvnwBIMUEPELnTVyEsJa2vd07pOYlbqZeBmJ5SW56j-7dqW6YLwJcmaTC7jx65k2IumWMnQ7UduNKeCdMSKkwuWVQ1deDy_=w1083-h565-no?authuser=0)

プロジェクトの設定

プロジェクト名（任意）を入力する

![](https://lh3.googleusercontent.com/pw/ACtC-3dpU9iD1GFvebQpjA4wgPumDjN9h8nka4KM6JXoTAFUtpx8ZmVcE0ZfdPNYba0N436zO1TlB9RiAjrN-4Hy5ZIEB5T1A-9UtCY5Dc_KHtz7qqnXk0UrJtFf8sXfsGPf6rqpLYq7lctD2V55GmAvUSfW=w577-h410-no?authuser=0)

環境を以下のように設定する

![](https://lh3.googleusercontent.com/pw/ACtC-3cnrt1uXlf23xApM-7lBKAOWsxz3ZaZWuBBBGgV6SeL4wcKxtenAEC7hg_JnwYsnc5k7uO2xo9PB1Bveh_ndpXGk2ZbiL7wfR-PF_yAZ-PZvqCXl_CkA26MLNvvSFEOLruxgxgBc9_D9ESuj-ZM5Rni=w545-h628-no?authuser=0)

Buildspec、バッチの設定、ログからオプショナルの部分のチェックを外す

※ログの出力が必要になった際は、再度設定する

`CodePipeLineに進む`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3eh7DMSjF0iM_ivylBXKN18_unvP_sALyd28BA1NjvbxlYNAo7pmg4BAdswb877Q3P5QljVfIFIqdVsStpJuXU-EKWOwqBWpmcrz9x08sgGPzI9w3I13gVMQM9rSJrtIcZf8ncMBvizQeduwwRNskui=w547-h560-no?authuser=0)

戻ると作成したプロジェクトが自動で入力されている

`次に`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3d2spR-RtwjWo_il1e4GEYYDHbI9mZUSouoNfpyimdtZPOnEL6biL0MjYvRm4F1uoAvxIC8wsYxYeqinC3b0SkOhwhG-J1Qp418kYTG0FeC8WgTxtqtiRPvdX6-RdQAwB3EtztkkJ8jb6jtL_BzymUa=w904-h549-no?authuser=0)

### 4.デプロイステージを追加する

以下のように設定する

`デプロイする前にファイルを抽出する`のチェックを忘れるとZIPファイルとして出力されてしまう為、注意

`次に`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3dHDTtV9tp7bsBs59Kf6zXE82QRYRY4LKTXL_tww9ulGfH2WL0uxoHoP3FV8sB-XRZDxomoSQJ5Of9UEZS5MpDUPmC_yiacojveZRmfTYKitjgFFRHhOkUZ-SBQ9cPYwpHk0blDsjHO8iS2BwEAg1IV=w901-h446-no?authuser=0)

作成内容の確認を行い、`パイプラインを作成する`を選択

## buildspec.ymlを作成する

CodeBuildでどのような処理をするか指示するファイル（buildspec.yml）を作成し、リポジトリのルートディレクトリに保存する

```buildspec.yml
version: 0.2

phases:
  pre_build:
    commands:
      - export LC_ALL="en_US.utf8"
      - bundle install
  build:
    commands:
      - bundle exec jekyll build

artifacts:
  base-directory: '_site'
  files:
    - '**/*'
```

リポジトリへコミット＆プッシュ後、問題なくデプロイされたことを確認した。

# おわりに

build、deployは完全に自動化できたが、CloudFrontのキャッシュクリアが必用であることを忘れていた。

S3の更新イベントを使用してLambdakから動作させることが可能そうなのでまた、別の機会に対応する

# 参考

* [Code PipelineでJekyllをビルドしてS3+CloudFrontで静的配信する](https://qiita.com/Nekoya3/items/20ec0fd15df893578c21)

* [AWS S3更新時にLambdaでCloudFrontのInvalidationを自動実行](https://qiita.com/kskinaba/items/dcf9693dd034517e114a)

実は、ローカルのbundlerが古いことにより、エラーが発生した。ローカルのbundlerを最新にし、`Gemfile.lock`をupdateすることにより解決

bundlerの最新時、入力コマンド

```
bundle update --bundler
```

* [Ruby 2.7 の bundle install で Could not find 'bundler' エラーが出たときの対応](https://qiita.com/uasi/items/8be1490b1735dae05e6a)

* [Gemfile.lock内にはbundlerのバージョンをトラッキングする記述がある](https://shinkufencer.hateblo.jp/entry/2019/05/20/000000)