# このリポジトリの目的

簡単なGUIの画面について、単体テストを GitHub Actions で自動で実行するサンプルを実装しました。

テスト自動化の有用性を理解/説明する手助けとしてお使いください。

# 実装した画面の説明

[こちら](https://abebe123000.github.io/ts_github_actions_example/) からアクセスできます

会員登録画面のGUI部分の実装になります。

ユーザー名、パスワードのそれぞれに文字数、文字種の制限があり、
送信ボタン押下時にバリデーションチェックが行われ、不正な値の場合はダイアログで警告されます。

送信に成功すると「登録完了」とダイアログで表示されますが、それ以外何も起こりません。

# 単体テストコードについて

[validation.ts](https://github.com/Abebe123000/ts_github_actions_example/blob/master/src/validation.ts) にバリデーションに使う関数が定義されており、
[validation.test.ts](https://github.com/Abebe123000/ts_github_actions_example/blob/master/src/validation.test.ts) で各バリデーション関数の単体テストを実装しています。

テストの実装には [Vitest](https://vitest.dev/) というライブラリを使用しています。
コマンドラインで以下コマンドを実行することで実装した単体テストを実施できます。

```
npm install
npm run test
```

## 単体テストコードの読み方

`expect(xxx).toBe(yyy)` は `xxx` が `yyy` になることを保証するという意味です。

https://github.com/Abebe123000/ts_github_actions_example/blob/1c756fef484f04f03c9e28549df484ef5ab7453c/src/validation.test.ts#L6-L7

この例の場合、ユーザー名が空文字の場合はバリデーションエラーとなり、ユーザー名が `1` の場合はバリデーションをパスすることを保証するテストになります。

## 単体テストをテストコードで実施するメリット

単体テストを手動で実施するのと比較して、テストコード用いて単体テストを実施することには以下の利点があります。

- 作業効率の向上
    - テストコードは一度作成すれば、人間が実施するよりも高速にテストを実行することが可能です。これは繰り返し同じテストを実行する場面で特に効果を発揮します。

- テストの信頼性の向上
    - 人間がテストを実施する場合ヒューマンエラーが含まれる可能性があります。テストコードを使用することでテストの信頼性が高まります。
 
- テストの網羅性の向上
    - テストコードを使用する場合、手動では困難な膨大な数のテストケースを実行する事が可能です。これによりバグを発見する可能性が高まります。

# GitHub Actions で継続的にテストを実行する

作成したテストコードを自動的に継続的に実施することで更に開発プロセスの効率化を狙えます。これは一般に [CI](https://aws.amazon.com/jp/devops/continuous-integration/) と呼ばれます。

本リポジトリでは [GitHub Actions](https://docs.github.com/ja/actions) を用いてテストを継続的に実行する仕組みを作成しています。

[test_on_pull_request.yml](https://github.com/Abebe123000/ts_github_actions_example/blob/master/.github/workflows/test_on_pull_request.yml) によって、プルリクエストのたびにテストが実行されます。

これによって、実装したテストがパスしなくなる修正を行った際にすぐに気づくことができるようになります。

[こちらのプルリク](https://github.com/Abebe123000/ts_github_actions_example/pull/12) では修正ミスによって既存のバリデーション関数の挙動をうっかり変更してしまいました。

しかし、[自動的にテストが実行された結果](https://github.com/Abebe123000/ts_github_actions_example/actions/runs/10751728927/job/29819284472?pr=12) 、既存の関数が意図しない挙動をしていることにすぐに気づくことができました。

## 継続的にテストを実行するメリット

テストを継続的に実行する事で以下のメリットが得られます。

- 潜在的バグの早期発見による工数の削減
  - 先程の例のように、継続的にテストが実行されていると早い段階で潜在的バグを検知する事が可能になります。通常のテスト工程でバグを発見する場合と比べて手戻りを減らして工数の削減を狙えます。








