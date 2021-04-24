// LICENSE : MIT
"use strict";
import { RuleHelper } from "textlint-rule-helper";
import { tokenize } from "kuromojin";

function isTargetVerb(token) {
    return (
        token.pos == "動詞" &&
        token.pos_detail_1 == "自立" &&
        token.conjugated_type == "一段" &&
        token.conjugated_form == "未然形"
    );
}

function isRaWord(token) {
    return token.pos == "動詞" && token.pos_detail_1 == "接尾" && token.basic_form == "れる";
}

function isSpecialCases(token) {
    // Due to kuromoji.js's behavior, some dropping-ra words will be tokenized as one.
    // See also https://github.com/takuyaa/kuromoji.js/issues/28
    return token.pos == "動詞" && (token.basic_form == "来れる" || token.basic_form == "見れる");
}

export default function (context) {
    const helper = new RuleHelper(context);
    const { Syntax, report, getSource, RuleError } = context;
    return {
        [Syntax.Str](node) {
            if (helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote, Syntax.Emphasis])) {
                return;
            }
            const text = getSource(node);
            return tokenize(text).then((tokens) => {
                tokens.forEach((token) => {
                    if (isSpecialCases(token)) {
                        report(
                            node,
                            new RuleError("ら抜き言葉を使用しています。", {
                                index: token.word_position
                            })
                        );
                    }
                });
                // tokenのペアがない場合は無視する
                if (tokens.length <= 1) {
                    return;
                }
                tokens.reduce((prev, current) => {
                    if (isTargetVerb(prev) && isRaWord(current)) {
                        report(
                            node,
                            new RuleError("ら抜き言葉を使用しています。", {
                                index: current.word_position - 1
                            })
                        );
                    }
                    return current;
                });
            });
        }
    };
};
