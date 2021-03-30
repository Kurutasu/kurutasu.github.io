---
layout: post
title:  "AWS CodePileLineにてLambdaからCloudFrontのInvalidationを自動実行"
updated: 2021-03-29
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

S3の更新をトリガーとするとLambdaが必要以上に実行されてしまう

参照：[AWS S3更新時にLambdaでCloudFrontのInvalidationを自動実行](https://kurutasu.github.io/2021/03/28/AWSS3-Lambda-cloudfront)

その為、CodePileLineの処理の一環として、Lambdaを実行する

![](https://lh3.googleusercontent.com/pw/ACtC-3ecUEEy-JEjDMw2JehZPMoZsEzajmNnPBz_5C2ICWMzDtYCDzvRoGDAEywjaEHLgBkbWfHKVw1gWIBH0TPftc9zRGtn9QRldAO08hZtuihNZYPr8z857YHH_iVzBhWDPhY_0h6OFoB6xM7hvwdKF1Od=w461-h341-no?authuser=0)

パイプライン処理は、CodeCommitにPushしたソースをCodePipelineでS3にデプロイ後、AWS Lambdaを呼び出しLambda FunctionでInvalidatioinとInvalidationのステータスチェックを行い、Invalidationを実行する。

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

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "codepipeline:PutJobFailureResult",
                "codepipeline:PutJobSuccessResult",
                "cloudfront:CreateInvalidation"
            ],
            "Resource": "*"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogStream",
                "logs:CreateLogGroup",
                "logs:PutLogEvents"
            ],
            "Resource": "arn:aws:logs:*:*:*"
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

ランタイムで使用する言語は「Python 3.8」、実行ロールは既存のロールから「先ほど作成した IAM ロール」を指定する

![](https://lh3.googleusercontent.com/pw/ACtC-3ehgXv_VkN_dTiQV7GNeGJBIDxGPa_rA3-Cv38tFQ0M38hOdRX8_l0fZ_xkQq8lNlHvBkdvTW4xBy02HXPB8PZKEoVWkiBIucEzRCkhzROBOVXS0cPl4g3xrk8NG9A3DYMDqYHCTRdNJZHUg7anCX8Z=w1272-h490-no?authuser=0)

Lambda関数は以下のように記載する

```python
from __future__ import print_function

import boto3
import json
import time

cp = boto3.client('codepipeline')
cf = boto3.client('cloudfront')

# codepipelineへ成功jobを返答する
def put_job_success(job_id):
    cp.put_job_success_result(jobId=job_id)

# codepipelineへ失敗jobを返答する
def put_job_failure(job_id, err):
    message = 'Function exception: ' + str(err)
    cp.put_job_failure_result(
        jobId=job_id,
        failureDetails={
            'type': 'JobFailed',
            'message': message
        }
    )

# lambdaのmain関数
def lambda_handler(event, context):
    try:
        job_id = event['CodePipeline.job']['id']
        job_data = event['CodePipeline.job']['data']
    
        user_parameters = json.loads(
                job_data['actionConfiguration']['configuration']['UserParameters']
            )
    
        pipeline_name = user_parameters['PipelineName']
        distribution_id = user_parameters['DistributionId']
        
        res = cf.create_invalidation(
            DistributionId=distribution_id,
            InvalidationBatch={
            'Paths': {
                'Quantity': 1,
                'Items': ['/*'],
            },
            'CallerReference': str(time.time())
            }
        )
        put_job_success(job_id)
    
    except Exception as err:
        put_job_failure(job_id, err)
        
    return "Complete."
```

## CodePipeLineの設定

CodePipeLineから呼び出すための設定を行う

Deployを実行した後に呼び出しを行うため、最下段の`ステージを追加する`を選択

![](https://lh3.googleusercontent.com/pw/ACtC-3fWlk1ytyEQICY7Ike5e-7LowptwgJfi0k2isFwi5nYgp2ZR68thFUEn9sIa82mmg-6zxiTaUgWX4ByHuPJWTrKPuTEg1DHH7FswX2_xPQcImdW6BYAsCju793YG1ZybqBbOM9kTm73w-GDD8b_UBvS=w1284-h546-no?authuser=0)

アクション名（任意）、アクションプロバイダは`AWS Lambda`、リージョン（任意）、関数名は先ほど作成したLambda関数名、ユーザパラメータはLambdaに渡す引数

ユーザパラメータとしてこのPipeLineの名称と更新するCloudFrontのDistributionIdをjson形式にて記載する

```json
{
    "PipelineName": "PipeLineの名称",
    "DistributionId": "更新するCloudFrontのDistributionId"
}
```

![](https://lh3.googleusercontent.com/pw/ACtC-3ehRnHWpY1xAGBr6e4SJDw8qXk544al3ft2EQJtBykPFLMEjICC8h9jPXK_iAe7N5I4lpNqXSZq46liphSkFQaLybIe46GqeOlr_WEKJDCC7SkQrJBze3TwU4W8En2rckvFcTriMtmcpC84sWHsX9Z7=w922-h609-no?authuser=0)

# おわりに

問題なく実行はされた。これで自動化完了。

PipeLine処理がいつ完了したか取得するため、SNSを用いてSlackへ通知させるようにしたい。

# 参考

* [CodePipelineからAWS Lambdaを呼び出してCloudFrontのキャッシュを削除(Invalidation)してみた](https://dev.classmethod.jp/articles/cloudfront-invalidation-using-codepipeline-custom-action/)

* drawTool：https://app.diagrams.net/