# 技術構成

| 分類               | 項目           | 技術                    |
| ------------------ | -------------- | ----------------------- |
| **フロントエンド** | 言語           | TypeScript              |
|                    | ライブラリ     | React                   |
|                    | スタイル       | CSS or Styled Component |
| **バックエンド**   | 言語           | Java                    |
|                    | フレームワーク | Spring Boot             |
|                    | ORM            | MyBatis                 |
| **ミドルウェア**   | データベース   | MySQL                   |
| **インフラ系**     | Dev 環境       | Docker                  |
|                    | Prod 環境      | AWS                     |

# 開発環境構築

## フロントエンドについて

以下のバージョンであること  
Node.js：16.18.0 [※2022/10/23 推奨版の最新バージョン](https://nodejs.org/ja/)  
[最新バージョンへのアップデート手順 ※MAC のみの手順です](https://qiita.com/Hide-Zaemon/items/cbb4497237843a729994)

1. [React Developer Tools 拡張機能を追加](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja)
2. /frontend に移動
3. `npm install -g yarn`で yarn をインストール ※インストール済みの場合は不要
4. `yarn install`でパッケージ全てインストール
5. `yarn build`でビルドファイル生成
6. `yarn start` でフロントエンドのファイル監視

パッケージ管理に npm ではなく yarn を採用した理由は[URL](https://qiita.com/Hai-dozo/items/90b852ac29b79a7ea02b)を確認ください

## バックエンドについて

以下のバージョンであること  
SDK：Oracle OpenJDK version 18  
spring boot：2.7.4

1. フロントエンド編で `yran start`まで実行していること
2. backend/static/に bundle.js が存在することを確認する
3. /backend に移動
4. `./gradlew bootrun`でアプリケーション起動
5. http://localhost:8080/app をブラウザで実行
6. 「バックエンドへのリクエスト確認」ボタンを押下してメッセージが表示されれば OK

[IntelliJ idea を使用した場合の バックエンドのソース修正時に自動ビルド、反映する手順リンク](https://zenn.dev/adito/articles/3bc06d4822f28a)  
※他エディタの場合は調べる必要があります。。

## Docker について

1. Docker Desktop のインストール（[公式](https://matsuand.github.io/docs.docker.jp.onthefly/desktop/)から端末にインストール、homebrew とかのパッケージ管理ツールでインストール）  
   ※インストール済みの場合は不要
2. `docker version`でインストールされたことを確認
3. /backend に移動
4. `docker-compose up -d`でイメージを作成、MySQL コンテナを起動する
5. 停止したい場合は`docker-compose down`を実行するか Docker Desktop 画面上で停止する

※テーブル作成のクエリを実行してコンテナ起動したい場合は、以下の作業を実施する

1. /backend/docker/db/sql にテーブル作成のクエリを記述した create-tables.sql を作成する
2. /backend/docker-compose.yml の MySQL 初期化スクリプトを bind する設定のコメントを外す
3. `docker-compose up -d`でイメージを作成、MySQL コンテナを起動する

## 注意点 ※必ず読んで欲しい

- 現状フロント側で修正をした場合は、java アプリを停止した後`./gradlew bootrun`でアプリケーションを再起動する必要がある
- .gitignore は/frontend と/backend にそれぞれ配置してます。git の追跡対象から外す時は忘れずに追記して下さい
