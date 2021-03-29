---
layout: post
title:  "AWS S3更新時にLambdaでCloudFrontのInvalidationを自動実行"
updated: 2021-03-28
cover:  "/assets/cover_image.jpg"
subheadline:  ""
categories: 
- AWS
---

# はじめに

S3上のコンテンツをCloudFrontを使用し配信している。

参照：[独自ドメインを使用してS3上の静的ウェブサイトをRoute53を使用し公開する](https://kurutasu.github.io/2019/06/18/aws-s3-route53)

また、githubへpushした際、CodePipeLineを使用し自動build、自動deployは対応済

参照：[GithubへのpushをトリガーとしてCode PipelineでJekyllをビルドしてS3にデプロイする](https://kurutasu.github.io/2021/03/26/AWSCodeipeline-S3-Jekyll-github)

S3の更新をトリガーとし、LambdaからCodeFrontのInvalidationを実行する

# 手順

## IAM ロールの作成

[IAM コンソール](https://console.aws.amazon.com/iam/home?region=us-east-1#/users)から新しいロールを作成する

`ロールの作成`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3dVoJ0aXZb80LcRotH1AEnuuXp5-7WmzuXdU6dvzmgrJHS9_MHHqnHTq0a7-G-RnHIyPI6S7LfND1EachJVwNAj2xyRCZ2sLt_CS-i0dx-j5W6b0VbJ4aNxIByZJ-tut3Kn1gcDwW2DNsfEYlWNkF_s=w1322-h529-no?authuser=0)

信頼されたエンティティの種類を選択

`AWSサービス`選択

ユースケースの選択

`Lambda`を選択

`次のステップ`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3dluFNEQGK_3czOMRVmbQA3Rk-hENhvS5mxhFmQfV5IWsP4qOVJgf48mklSG2saz9LyKPLIPsuDX-UOeiBAvk1LP2FJoVJOH1WwV2zrotzydgfmRylR5d9p9XxTWAf-7o0GBGmnRD5KrgKrdHblGP_Z=w977-h545-no?authuser=0)

`ポリシーの作成`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3fYElxDQS0NW9ycQ8lTOaYs1fLt7vdB5bau3E88qhjgBj1aUvnUELGE0dWAioDlMZmj4rSmPMv9kA0oMGCLLtpheqEGkeJu2GvzMl_9Dcf0Si8x9zMHx7HEy9csqP7bNXaDWLEsf2kQ7pGk8j9UJUdO=w977-h548-no?authuser=0)

権限内容は以下の JSON で指定する

※「[Automatic Cloudfront invalidation with Amazon Lambda](https://blog.miguelangelnieto.net/posts/Automatic_Cloudfront_invalidation_with_Amazon_Lambda.html)」より引用

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
        "Effect": "Allow",
        "Action": [
            "cloudfront:CreateInvalidation"
        ],
        "Resource": [
            "*"
        ]
    }
  ]
}
```

`タグ`は任意で必要であれば作成する

`名前`も任意で自分のわかりやすい名称をつける

例：lambda_cloud_front_invalidation

![](https://lh3.googleusercontent.com/pw/ACtC-3dzCrRpdIx-uIL02khI_wpN2Cl401C8G9WiNxtR2I2DiCb_QXPSAmr7e0YR7tZbTdbvhIFhebzB1X3vNVEv-bul9ECYYkOvakgzzN-cBAoyT-Y8sDzk3kyS_ta7Am4TcJ924ufQX9XLn7eUX7_9H7_K=w1163-h482-no?authuser=0)

先ほど作成したポリシーを検索し、選択

`次のステップ`を選択

`タグ`は任意で必要であれば作成する

`名前`も任意で自分のわかりやすい名称をつける

例：lambda_cloud_front_invalidation

ポリシーと区別する必要もないと考えたので同じ名前

![](https://lh3.googleusercontent.com/pw/ACtC-3fKQeiXmuCKvU_lvbpB-NiUa7VQAhAZhUuiBlVV5JLcuO-tBgNFIaYAw2-9mnNG_5PhsBI5Ko8pXUCc4T-0iiOgxg5CpKzoM_xawvN0NzGfWQ6kYV1RMAGbkgNK8ShsOEHXrV8duxM1vo_vOugSmSz3=w973-h543-no?authuser=0)

## Lambda 関数の作成

[Lambda コンソール](https://ap-northeast-1.console.aws.amazon.com/lambda/home?region=ap-northeast-1#/functions)から新しい関数を作成する

![](https://lh3.googleusercontent.com/pw/ACtC-3dEtzTN_8eNl_gG4NVZ2kd6ZRa959AzYSiNhbdUWBmzO-hRTBkQgot1HuJb4I-DiyTIwhqiGYHSp5GUZpgsvRW6nRzQLdnc7RwRwtuPdjm_CD44w7N152FBiT-92PpMs1RyqzxH2GGjUS2k0KeTeq0W=w1285-h401-no?authuser=0)

`一から作成`を選択

関数名は任意で入力

![](https://lh3.googleusercontent.com/pw/ACtC-3eUhVHFQCTjDkvqeyzIRPkLA0SN9WHc12Ib5AxBp-X0Wm6p5mTCNK_s8aiVSp4OtAypvZvwgTt4suVv0Kof5vaVhtUe22rpaiIHHcMqD4-DsnVQFzR5AQkGvS7VDXksLHfjsQZsdlnE3NghDt972lKU=w1284-h546-no?authuser=0)

ランタイムで使用する言語は「Python 2.8」、実行ロールは既存のロールから「先ほど作成した IAM ロール」を指定する

![](https://lh3.googleusercontent.com/pw/ACtC-3ehgXv_VkN_dTiQV7GNeGJBIDxGPa_rA3-Cv38tFQ0M38hOdRX8_l0fZ_xkQq8lNlHvBkdvTW4xBy02HXPB8PZKEoVWkiBIucEzRCkhzROBOVXS0cPl4g3xrk8NG9A3DYMDqYHCTRdNJZHUg7anCX8Z=w1272-h490-no?authuser=0)

`トリガーを追加`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3ew4pWnqul_eYDh3zcw-535BuZc-m1hcrraFugW_N4wueRMUgqlXI--6P7FZoW84_N6gEJZ048FCRX7OQUCJ6maJVuei2rxa5Prw5jrPgoH9091vkHAk3vcoL2RP59AgqCDGMNtTerRsitwOMmKBBWr=w1208-h439-no?authuser=0)

`YOUR_DISTRIBUTION_ID`は自身のDISTRIBUTION IDに置き換える

```python
from __future__ import print_function

import boto3
import time

def lambda_handler(event, context):
    for items in event["Records"]:
        if path in items["s3"]["object"]["key"]:
            client = boto3.client('cloudfront')
            invalidation = client.create_invalidation(DistributionId='YOUR_DISTRIBUTION_ID',
                InvalidationBatch={
                    'Paths': {
                        'Quantity': 1,
                        'Items': ['/*']
                },
                'CallerReference': str(time.time())
            })
            break
```

問題なく、S3を更新した際にLambdaが実行されたことを確認できた。

# おわりに

問題なく実行はされたが、CodePipeLineにてdeployした場合、更新対象ファイル分Lambdaが実行される。

その為、トリガーをS3が更新された場合ではなく、CodePipeLineにてLambdaを実行する。

# 参考

* [AWS S3更新時にLambdaでCloudFrontのInvalidationを自動実行](https://qiita.com/kskinaba/items/dcf9693dd034517e114a)

* [CodePipelineからAWS Lambdaを呼び出してCloudFrontのキャッシュを削除(Invalidation)してみた](https://dev.classmethod.jp/articles/cloudfront-invalidation-using-codepipeline-custom-action/)