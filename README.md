# textlint-rule-no-dropping-the-ra [![Actions Status: test](https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra/workflows/test/badge.svg)](https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra/actions?query=workflow%3A"test")

ら抜き言葉を検出する[textlint](https://github.com/textlint/textlint "textlint")ルールです。

ら抜き言葉は話し言葉のため、書き言葉である文章では使用しないようにします。

**OK**:

```
お刺身を食べられない。
見られる
出られる
来られる
```

**NG**:

```
お刺身を食べれない。
人が出れないんです
この距離からでも見れる。
今日は来れる？
人が来れないんです
```
## Installation

    npm install textlint-rule-no-dropping-the-ra

## Usage

Put "no-dropping-the-ra" to `.textlintrc`

```json
{
  "rules": {
    "no-dropping-the-ra": true
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

## Reference

- [文化庁 | 国語施策・日本語教育 | 国語施策情報 | 第20期国語審議会 | 新しい時代に応じた国語施策について（審議経過報告） | Ｉ 言葉遣いに関すること](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kakuki/20/tosin03/09.html)
- [http://www.clear-code.com/blog/2015/8/29.html](http://www.clear-code.com/blog/2015/8/29.html)
