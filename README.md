# textlint-rule-no-dropping-the-ra [![Build Status](https://travis-ci.org/textlint-ja/textlint-rule-no-dropping-the-ra.svg?branch=master)](https://travis-ci.org/textlint-ja/textlint-rule-no-dropping-the-ra) [![Gitter](https://badges.gitter.im/textlint-ja/textlint-ja.svg)](https://gitter.im/textlint-ja/textlint-ja)

ら抜き言葉を検出する[textlint](https://github.com/textlint/textlint "textlint")ルールです。

- ◯ お刺身を食べられない
- ✗ お刺身を食べれない。

## Installation

    npm install textlint-rule-no-dropping-the-ra

textlint >= 5.0

## Usage

Put "no-dropping-the-ra" to `.textlintrc`

```js
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
