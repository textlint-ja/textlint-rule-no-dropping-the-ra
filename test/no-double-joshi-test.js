import assert from "power-assert";
import rule from "../src/no-dropping-the-ra";
import TextLintTester from "textlint-tester";
var tester = new TextLintTester();
tester.run("no-dropping-the-ra", rule, {
    valid: [
        "お刺身を食べられない。"
    ],
    invalid: [
        {
            text: "お刺身を食べれない。",
            errors: [
                {
                    message: "ら抜き言葉を使用しています。",
                    line: 1,
                    column: 7
                }
            ]
        }
    ]
});