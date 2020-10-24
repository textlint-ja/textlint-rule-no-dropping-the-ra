# textlint-rule-no-dropping-the-ra [![Actions Status: test](https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra/workflows/test/badge.svg)](https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra/actions?query=workflow%3A"test")

ら抜き言葉を検出する[textlint](https://github.com/textlint/textlint "textlint")ルールです。

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

- [http://www.clear-code.com/blog/2015/8/29.html](http://www.clear-code.com/blog/2015/8/29.html)
