// LICENSE : MIT
"use strict";
import kuromojin from "./kuromojin";

function isTargetVerb(token) {
    return token.pos == '動詞' &&
        token.pos_detail_1 == '自立' &&
        token.conjugated_type == '一段' &&
        token.conjugated_form == '未然形';
}

function isRaWord(token) {
    return token.pos == '動詞' &&
        token.pos_detail_1 == '接尾' &&
        token.basic_form == 'れる'
}

export default function (context) {
    let {Syntax, report, getSource, RuleError} = context;
    return {
        [Syntax.Str](node){
            let text = getSource(node);
            return kuromojin(text).then(tokens => {
                tokens.reduce((prev, current) => {
                    if (isTargetVerb(prev) && isRaWord(current)) {
                        report(node, new RuleError("ら抜き言葉を使用しています。", {
                            column: (current.word_position - 1)
                        }))
                    }
                    return current;
                });
            })
        }
    }
}