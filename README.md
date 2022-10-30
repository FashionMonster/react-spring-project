# 技術構成

| 分類          | 項目      | 技術                      |
|-------------|---------|-------------------------|
| **フロントエンド** | 言語      | TypeScript              |
|             | ライブラリ   | React                   |
|             | スタイル    | CSS or Styled Component |
| **バックエンド**  | 言語      | Java                    |
|             | フレームワーク | Spring Boot             |
|             | ORM     | MyBatis                 |
| **ミドルウェア**  | データベース  | MySQL                   |
| **インフラ系**   | Dev環境   | Docker                  |
|             | Prod環境  | AWS                     |

# 開発環境構築

## フロントエンドについて

以下のバージョンであること  
Node.js：16.18.0 [※2022/10/23 推奨版の最新バージョン](https://nodejs.org/ja/)  
[最新バージョンへのアップデート手順 ※MACのみの手順です](https://qiita.com/Hide-Zaemon/items/cbb4497237843a729994)

1. [React Developer Tools拡張機能を追加](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja)
2. /frontendに移動
3. ``` npm install -g yarn ```でyarn をインストール ※インストール済みの場合は不要
4. ``` yarn install ```でパッケージ全てインストール
5. ``` yarn build ```でビルドファイル生成
6. ``` yarn start ``` でフロントエンドのファイル監視

パッケージ管理にnpmではなくyarnを採用した理由は[URL](https://qiita.com/Hai-dozo/items/90b852ac29b79a7ea02b)を確認ください

## バックエンドについて

以下のバージョンであること  
SDK：Oracle OpenJDK version 18  
spring boot：2.7.4

1. フロントエンド編で ``` yran start ```まで実行していること
2. backend/static/にbundle.jsが存在することを確認する
3. /backendに移動
4. ``` ./gradlew bootrun ```でアプリケーション起動
5. http://localhost:8080 をブラウザで実行
6. 「バックエンドへのリクエスト確認」ボタンを押下してメッセージが表示されればOK

[IntelliJ ideaを使用した場合の バックエンドのソース修正時に自動ビルド、反映する手順リンク](https://zenn.dev/adito/articles/3bc06d4822f28a)  
※他エディタの場合は調べる必要があります。。

## Dockerについて

1. Docker Desktopのインストール（[公式](https://matsuand.github.io/docs.docker.jp.onthefly/desktop/)から端末にインストール、homebrewとかのパッケージ管理ツールでインストール）  
※インストール済みの場合は不要
2. ``` docker version ```でインストールされたことを確認
3. /backendに移動
4. ``` docker-compose up -d ```でイメージを作成、MySQLコンテナを起動する
5. 停止したい場合は``` docker-compose down ```を実行するかDocker Desktop画面上で停止する

※テーブル作成のクエリを実行してコンテナ起動したい場合は、以下の作業を実施する

1. /backend/docker/db/sqlにテーブル作成のクエリを記述したcreate-tables.sqlを作成する
2. /backend/docker-compose.ymlのMySQL初期化スクリプトをbindする設定のコメントを外す
3. ``` docker-compose up -d ```でイメージを作成、MySQLコンテナを起動する

## 注意点 ※必ず読んで欲しい
* 現状フロント側で修正をした場合は、javaアプリを停止した後``` ./gradlew bootrun ```でアプリケーションを再起動する必要がある
* .gitignoreは/frontendと/backendにそれぞれ配置してます。gitの追跡対象から外す時は忘れずに追記して下さい
