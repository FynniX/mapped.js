#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var antlr4 = require('antlr4');

// Generated from Schema.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
class SchemaLexer extends antlr4.Lexer {
    constructor(input) {
        super(input);
        this._interp = new antlr4.LexerATNSimulator(this, SchemaLexer._ATN, SchemaLexer.DecisionsToDFA, new antlr4.PredictionContextCache());
    }
    get grammarFileName() { return "Schema.g4"; }
    get literalNames() { return SchemaLexer.literalNames; }
    get symbolicNames() { return SchemaLexer.symbolicNames; }
    get ruleNames() { return SchemaLexer.ruleNames; }
    get serializedATN() { return SchemaLexer._serializedATN; }
    get channelNames() { return SchemaLexer.channelNames; }
    get modeNames() { return SchemaLexer.modeNames; }
    static get _ATN() {
        if (!SchemaLexer.__ATN) {
            SchemaLexer.__ATN = new antlr4.ATNDeserializer().deserialize(SchemaLexer._serializedATN);
        }
        return SchemaLexer.__ATN;
    }
}
SchemaLexer.T__0 = 1;
SchemaLexer.T__1 = 2;
SchemaLexer.T__2 = 3;
SchemaLexer.T__3 = 4;
SchemaLexer.T__4 = 5;
SchemaLexer.T__5 = 6;
SchemaLexer.T__6 = 7;
SchemaLexer.T__7 = 8;
SchemaLexer.T__8 = 9;
SchemaLexer.T__9 = 10;
SchemaLexer.T__10 = 11;
SchemaLexer.T__11 = 12;
SchemaLexer.T__12 = 13;
SchemaLexer.T__13 = 14;
SchemaLexer.T__14 = 15;
SchemaLexer.T__15 = 16;
SchemaLexer.T__16 = 17;
SchemaLexer.T__17 = 18;
SchemaLexer.T__18 = 19;
SchemaLexer.T__19 = 20;
SchemaLexer.T__20 = 21;
SchemaLexer.T__21 = 22;
SchemaLexer.SEMICOLON = 23;
SchemaLexer.CURVED_BRACKET_OPEN = 24;
SchemaLexer.CURVED_BRACKET_CLOSE = 25;
SchemaLexer.BRACKET_OPEN = 26;
SchemaLexer.BRACKET_CLOSE = 27;
SchemaLexer.DELIMITER = 28;
SchemaLexer.AT = 29;
SchemaLexer.STRING = 30;
SchemaLexer.NAME = 31;
SchemaLexer.NUMBER = 32;
SchemaLexer.NEWLINE = 33;
SchemaLexer.WHITESPACE = 34;
SchemaLexer.EOF = antlr4.Token.EOF;
SchemaLexer.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
SchemaLexer.literalNames = [null, "'struct'",
    "'PATH'", "'char'",
    "'char16_t'",
    "'char32_t'",
    "'wchar_t'",
    "'unsigned'",
    "'signed'",
    "'short'", "'int'",
    "'long'", "'int8_t'",
    "'int16_t'",
    "'int32_t'",
    "'int64_t'",
    "'uint8_t'",
    "'uint16_t'",
    "'uint32_t'",
    "'uint64_t'",
    "'float'", "'double'",
    "'bool'", "';'",
    "'{'", "'}'",
    "'['", "']'",
    null, "'@'",
    null, null,
    null, null,
    "' '"];
SchemaLexer.symbolicNames = [null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, "SEMICOLON",
    "CURVED_BRACKET_OPEN",
    "CURVED_BRACKET_CLOSE",
    "BRACKET_OPEN",
    "BRACKET_CLOSE",
    "DELIMITER",
    "AT", "STRING",
    "NAME", "NUMBER",
    "NEWLINE",
    "WHITESPACE"];
SchemaLexer.modeNames = ["DEFAULT_MODE",];
SchemaLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
    "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
    "T__17", "T__18", "T__19", "T__20", "T__21", "SEMICOLON", "CURVED_BRACKET_OPEN",
    "CURVED_BRACKET_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE", "DELIMITER",
    "AT", "STRING", "NAME", "NUMBER", "NEWLINE", "WHITESPACE",
];
SchemaLexer._serializedATN = [4, 0, 34, 271, 6, -1, 2, 0,
    7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9,
    7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23,
    2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2,
    31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4,
    1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8,
    1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1,
    13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15,
    1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1,
    17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18,
    1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1,
    20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23, 1, 23, 1, 24, 1, 24, 1, 25, 1, 25, 1, 26,
    1, 26, 1, 27, 1, 27, 1, 28, 1, 28, 1, 29, 1, 29, 5, 29, 244, 8, 29, 10, 29, 12, 29, 247, 9, 29, 1,
    29, 1, 29, 1, 30, 4, 30, 252, 8, 30, 11, 30, 12, 30, 253, 1, 31, 4, 31, 257, 8, 31, 11, 31, 12,
    31, 258, 1, 32, 4, 32, 262, 8, 32, 11, 32, 12, 32, 263, 1, 32, 1, 32, 1, 33, 1, 33, 1, 33, 1, 33,
    1, 245, 0, 34, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25,
    13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22, 45, 23, 47, 24, 49,
    25, 51, 26, 53, 27, 55, 28, 57, 29, 59, 30, 61, 31, 63, 32, 65, 33, 67, 34, 1, 0, 4, 2, 0, 34, 34,
    39, 39, 3, 0, 48, 57, 65, 90, 97, 122, 1, 0, 48, 57, 2, 0, 10, 10, 13, 13, 274, 0, 1, 1, 0, 0, 0,
    0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0,
    0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25,
    1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0,
    0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 0, 45, 1, 0, 0, 0, 0, 47,
    1, 0, 0, 0, 0, 49, 1, 0, 0, 0, 0, 51, 1, 0, 0, 0, 0, 53, 1, 0, 0, 0, 0, 55, 1, 0, 0, 0, 0, 57, 1, 0, 0,
    0, 0, 59, 1, 0, 0, 0, 0, 61, 1, 0, 0, 0, 0, 63, 1, 0, 0, 0, 0, 65, 1, 0, 0, 0, 0, 67, 1, 0, 0, 0, 1, 69,
    1, 0, 0, 0, 3, 76, 1, 0, 0, 0, 5, 81, 1, 0, 0, 0, 7, 86, 1, 0, 0, 0, 9, 95, 1, 0, 0, 0, 11, 104, 1, 0,
    0, 0, 13, 112, 1, 0, 0, 0, 15, 121, 1, 0, 0, 0, 17, 128, 1, 0, 0, 0, 19, 134, 1, 0, 0, 0, 21, 138,
    1, 0, 0, 0, 23, 143, 1, 0, 0, 0, 25, 150, 1, 0, 0, 0, 27, 158, 1, 0, 0, 0, 29, 166, 1, 0, 0, 0, 31,
    174, 1, 0, 0, 0, 33, 182, 1, 0, 0, 0, 35, 191, 1, 0, 0, 0, 37, 200, 1, 0, 0, 0, 39, 209, 1, 0, 0, 0,
    41, 215, 1, 0, 0, 0, 43, 222, 1, 0, 0, 0, 45, 227, 1, 0, 0, 0, 47, 229, 1, 0, 0, 0, 49, 231, 1, 0,
    0, 0, 51, 233, 1, 0, 0, 0, 53, 235, 1, 0, 0, 0, 55, 237, 1, 0, 0, 0, 57, 239, 1, 0, 0, 0, 59, 241,
    1, 0, 0, 0, 61, 251, 1, 0, 0, 0, 63, 256, 1, 0, 0, 0, 65, 261, 1, 0, 0, 0, 67, 267, 1, 0, 0, 0, 69,
    70, 5, 115, 0, 0, 70, 71, 5, 116, 0, 0, 71, 72, 5, 114, 0, 0, 72, 73, 5, 117, 0, 0, 73, 74, 5, 99,
    0, 0, 74, 75, 5, 116, 0, 0, 75, 2, 1, 0, 0, 0, 76, 77, 5, 80, 0, 0, 77, 78, 5, 65, 0, 0, 78, 79, 5,
    84, 0, 0, 79, 80, 5, 72, 0, 0, 80, 4, 1, 0, 0, 0, 81, 82, 5, 99, 0, 0, 82, 83, 5, 104, 0, 0, 83, 84,
    5, 97, 0, 0, 84, 85, 5, 114, 0, 0, 85, 6, 1, 0, 0, 0, 86, 87, 5, 99, 0, 0, 87, 88, 5, 104, 0, 0, 88,
    89, 5, 97, 0, 0, 89, 90, 5, 114, 0, 0, 90, 91, 5, 49, 0, 0, 91, 92, 5, 54, 0, 0, 92, 93, 5, 95, 0,
    0, 93, 94, 5, 116, 0, 0, 94, 8, 1, 0, 0, 0, 95, 96, 5, 99, 0, 0, 96, 97, 5, 104, 0, 0, 97, 98, 5, 97,
    0, 0, 98, 99, 5, 114, 0, 0, 99, 100, 5, 51, 0, 0, 100, 101, 5, 50, 0, 0, 101, 102, 5, 95, 0, 0, 102,
    103, 5, 116, 0, 0, 103, 10, 1, 0, 0, 0, 104, 105, 5, 119, 0, 0, 105, 106, 5, 99, 0, 0, 106, 107,
    5, 104, 0, 0, 107, 108, 5, 97, 0, 0, 108, 109, 5, 114, 0, 0, 109, 110, 5, 95, 0, 0, 110, 111, 5,
    116, 0, 0, 111, 12, 1, 0, 0, 0, 112, 113, 5, 117, 0, 0, 113, 114, 5, 110, 0, 0, 114, 115, 5, 115,
    0, 0, 115, 116, 5, 105, 0, 0, 116, 117, 5, 103, 0, 0, 117, 118, 5, 110, 0, 0, 118, 119, 5, 101,
    0, 0, 119, 120, 5, 100, 0, 0, 120, 14, 1, 0, 0, 0, 121, 122, 5, 115, 0, 0, 122, 123, 5, 105, 0,
    0, 123, 124, 5, 103, 0, 0, 124, 125, 5, 110, 0, 0, 125, 126, 5, 101, 0, 0, 126, 127, 5, 100, 0,
    0, 127, 16, 1, 0, 0, 0, 128, 129, 5, 115, 0, 0, 129, 130, 5, 104, 0, 0, 130, 131, 5, 111, 0, 0,
    131, 132, 5, 114, 0, 0, 132, 133, 5, 116, 0, 0, 133, 18, 1, 0, 0, 0, 134, 135, 5, 105, 0, 0, 135,
    136, 5, 110, 0, 0, 136, 137, 5, 116, 0, 0, 137, 20, 1, 0, 0, 0, 138, 139, 5, 108, 0, 0, 139, 140,
    5, 111, 0, 0, 140, 141, 5, 110, 0, 0, 141, 142, 5, 103, 0, 0, 142, 22, 1, 0, 0, 0, 143, 144, 5,
    105, 0, 0, 144, 145, 5, 110, 0, 0, 145, 146, 5, 116, 0, 0, 146, 147, 5, 56, 0, 0, 147, 148, 5,
    95, 0, 0, 148, 149, 5, 116, 0, 0, 149, 24, 1, 0, 0, 0, 150, 151, 5, 105, 0, 0, 151, 152, 5, 110,
    0, 0, 152, 153, 5, 116, 0, 0, 153, 154, 5, 49, 0, 0, 154, 155, 5, 54, 0, 0, 155, 156, 5, 95, 0,
    0, 156, 157, 5, 116, 0, 0, 157, 26, 1, 0, 0, 0, 158, 159, 5, 105, 0, 0, 159, 160, 5, 110, 0, 0,
    160, 161, 5, 116, 0, 0, 161, 162, 5, 51, 0, 0, 162, 163, 5, 50, 0, 0, 163, 164, 5, 95, 0, 0, 164,
    165, 5, 116, 0, 0, 165, 28, 1, 0, 0, 0, 166, 167, 5, 105, 0, 0, 167, 168, 5, 110, 0, 0, 168, 169,
    5, 116, 0, 0, 169, 170, 5, 54, 0, 0, 170, 171, 5, 52, 0, 0, 171, 172, 5, 95, 0, 0, 172, 173, 5,
    116, 0, 0, 173, 30, 1, 0, 0, 0, 174, 175, 5, 117, 0, 0, 175, 176, 5, 105, 0, 0, 176, 177, 5, 110,
    0, 0, 177, 178, 5, 116, 0, 0, 178, 179, 5, 56, 0, 0, 179, 180, 5, 95, 0, 0, 180, 181, 5, 116, 0,
    0, 181, 32, 1, 0, 0, 0, 182, 183, 5, 117, 0, 0, 183, 184, 5, 105, 0, 0, 184, 185, 5, 110, 0, 0,
    185, 186, 5, 116, 0, 0, 186, 187, 5, 49, 0, 0, 187, 188, 5, 54, 0, 0, 188, 189, 5, 95, 0, 0, 189,
    190, 5, 116, 0, 0, 190, 34, 1, 0, 0, 0, 191, 192, 5, 117, 0, 0, 192, 193, 5, 105, 0, 0, 193, 194,
    5, 110, 0, 0, 194, 195, 5, 116, 0, 0, 195, 196, 5, 51, 0, 0, 196, 197, 5, 50, 0, 0, 197, 198, 5,
    95, 0, 0, 198, 199, 5, 116, 0, 0, 199, 36, 1, 0, 0, 0, 200, 201, 5, 117, 0, 0, 201, 202, 5, 105,
    0, 0, 202, 203, 5, 110, 0, 0, 203, 204, 5, 116, 0, 0, 204, 205, 5, 54, 0, 0, 205, 206, 5, 52, 0,
    0, 206, 207, 5, 95, 0, 0, 207, 208, 5, 116, 0, 0, 208, 38, 1, 0, 0, 0, 209, 210, 5, 102, 0, 0, 210,
    211, 5, 108, 0, 0, 211, 212, 5, 111, 0, 0, 212, 213, 5, 97, 0, 0, 213, 214, 5, 116, 0, 0, 214,
    40, 1, 0, 0, 0, 215, 216, 5, 100, 0, 0, 216, 217, 5, 111, 0, 0, 217, 218, 5, 117, 0, 0, 218, 219,
    5, 98, 0, 0, 219, 220, 5, 108, 0, 0, 220, 221, 5, 101, 0, 0, 221, 42, 1, 0, 0, 0, 222, 223, 5, 98,
    0, 0, 223, 224, 5, 111, 0, 0, 224, 225, 5, 111, 0, 0, 225, 226, 5, 108, 0, 0, 226, 44, 1, 0, 0,
    0, 227, 228, 5, 59, 0, 0, 228, 46, 1, 0, 0, 0, 229, 230, 5, 123, 0, 0, 230, 48, 1, 0, 0, 0, 231,
    232, 5, 125, 0, 0, 232, 50, 1, 0, 0, 0, 233, 234, 5, 91, 0, 0, 234, 52, 1, 0, 0, 0, 235, 236, 5,
    93, 0, 0, 236, 54, 1, 0, 0, 0, 237, 238, 7, 0, 0, 0, 238, 56, 1, 0, 0, 0, 239, 240, 5, 64, 0, 0, 240,
    58, 1, 0, 0, 0, 241, 245, 3, 55, 27, 0, 242, 244, 9, 0, 0, 0, 243, 242, 1, 0, 0, 0, 244, 247, 1,
    0, 0, 0, 245, 246, 1, 0, 0, 0, 245, 243, 1, 0, 0, 0, 246, 248, 1, 0, 0, 0, 247, 245, 1, 0, 0, 0, 248,
    249, 3, 55, 27, 0, 249, 60, 1, 0, 0, 0, 250, 252, 7, 1, 0, 0, 251, 250, 1, 0, 0, 0, 252, 253, 1,
    0, 0, 0, 253, 251, 1, 0, 0, 0, 253, 254, 1, 0, 0, 0, 254, 62, 1, 0, 0, 0, 255, 257, 7, 2, 0, 0, 256,
    255, 1, 0, 0, 0, 257, 258, 1, 0, 0, 0, 258, 256, 1, 0, 0, 0, 258, 259, 1, 0, 0, 0, 259, 64, 1, 0,
    0, 0, 260, 262, 7, 3, 0, 0, 261, 260, 1, 0, 0, 0, 262, 263, 1, 0, 0, 0, 263, 261, 1, 0, 0, 0, 263,
    264, 1, 0, 0, 0, 264, 265, 1, 0, 0, 0, 265, 266, 6, 32, 0, 0, 266, 66, 1, 0, 0, 0, 267, 268, 5, 32,
    0, 0, 268, 269, 1, 0, 0, 0, 269, 270, 6, 33, 0, 0, 270, 68, 1, 0, 0, 0, 5, 0, 245, 253, 258, 263,
    1, 6, 0, 0];
SchemaLexer.DecisionsToDFA = SchemaLexer._ATN.decisionToState.map((ds, index) => new antlr4.DFA(ds, index));

exports.default = SchemaLexer;
