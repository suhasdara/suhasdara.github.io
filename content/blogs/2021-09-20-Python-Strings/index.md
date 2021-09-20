---
title: Understanding Strings in Python
date: 2021-09-20
slug: /blogs/python-strings
tags:
  - tech
postType: blog
---

Learn the differences between different string literals in Python and how
escape characters work differently between them. Also understand the encoding
and decoding functionality with Python strings.

<!--excerpt-->

While working on a recent project, I was dealing with a lot of strings
containing Unicode characters. For a long time I was trying to print the raw
unicode codes for debugging purposes and went down a rabbit hole trying to
understand the difference between raw strings, byte strings, encoding, decoding
and a lot more. It was a little frustrating to be unable to figure out
something seemingly simple. I want to demystify the experience that I had with strings
in Python.

First let's get the basics out of the way... You can use either double quotes
or single quotes to create strings in Python. You can also use triple quotes
(`'''` or `"""`) to create multi-line strings.

```python
s1 = 'This is a string'
s2 = "This is also a string"
m1 = '''This is a
multi line string'''
m2 = """This is also a
multi line string"""
```

Strings can have characters "escaped" out of the string using the backslash
to represent some other entities. Common ones include `\n` for representing
a newline or `\t` for representing a tab. To use the single quote inside a
single-quote-string, you have to escape it with `\'` and similarly for using
a double quote inside a double-quote-string, you have to escape it with `\"`.
To get a backslash itself within a string you have to escape it like `\\`.

Sometimes, you may have a string with a lot of backslashes. Python has a
way to reduce the clutter of escaped backslashes within strings backslashes.
In Python, you can create raw strings, in which the backslash does not trigger
an escape sequence and is treated as a normal character. This can be useful in
certain situations such as dealing with paths on a Windows system. These raw
strings are represented as `r""`.

```python
s1 = "I\thave\tescape\tcharacters"
print(s1)  # prints "I	have	escape	characters"
s2 = r"I\tdon't\thave\tescape\tcharacters"
print(s2)  # prints "I\tdon't\thave\tescape\tcharacters"
```

In Python 3.5, format strings were first introduced into Python. This allowed
the string representations of variables to be directly injected into strings.
Format strings are represented as `f""` and you can inject the value of any
variable into the string using curly braces (and escape curly braces using
`{{` or `}}`). Format strings can also be combined with raw strings to
form raw format strings (`rf""`). For example:

```python
age = 20
s = f"I am {age} years old"
print(s)  # prints "I am 20 years old"
s = rf"I am {{ {age} }} years old ¯\_(ツ)_/¯"
print(s)  # prints "I am { 20 } years old ¯\_(ツ)_/¯"
```

But this is all basics that you already likely know. Let's move to the parts
that can get confusing.

First, what exactly is a string? It is a "string" of characters you may say.
But what is a character? In crude terms, a character is a single byte of
information that represents something that humans can understand. The mapping
that represents character to bytes conversion is an encoding format known as
ASCII, which covers 128 different basic characters and escape characters. For
now, let's assume that this is the only way characters can be encoded.

Every character in ASCII is represented by 8 bits of data, which is the binary
representation of the character. For example, the character "K" in binary
(base-2, the language of computers) is `01001011`. Similarly, other number
systems such as octal (base-8) or hexadecimal (base-16) can be used to
represent binary more succinctly. For example, the equivalent for character
"K" in octal is `0113` and in hexadecimal is `0x4b`.

Python allows you to write your strings using octal or hexadecimal to
represent the characters. A byte (or 8 bits) of data can be represented by
three digits of octal or two digits of hexadecimal. This is the reason Python
has adopted the standard from C to allow three digit escape sequences of the
sort `\ooo` (where `o` is a valid octal digit) to represent octal mappings,
and two digit escape sequences of the sort `\xhh` (where `h` is a valid hex
digit) to represent hex mappings.

```python
a = "K"         # this is K
o = "\113"      # this is also K
h = "\x4b"      # this is also K
print(a, o, h)  # prints "K K K"
```

However, with a growing web and inclusion of languages across the world and
emoticons, a new character encoding standard called UTF-8 was proposed in
1992. Here, we move from a single byte per character to using between one and
four bytes per character. This is called a Unicode representation of a
character, which is actually backwards compatible with ASCII. Every character
you have ever come across on the Internet is likely to have been encoded with
UTF-8.

The number of characters that can be encoded increased from 2<sup>8</sup>
(256) in ASCII to 2<sup>21</sup> (2,097,152) in UTF-8. However, currently
there are only 1,112,064 valid UTF-8 "codepoints", which each translate to a
different character. This means that the largest valid UTF-8 codepoint is
currently `0x10ffff`, though in the future it could be up to `0x1fffff`.

As an example, the character "€" has a codepoint of `0x20ac`. This codepoint
translates to the hexadecimal bytes `0xe2 0x82 0xac`. As this translation from
codepoint to bytes is not straightforward, to understand exactly how Unicode
codepoints translate to their one to four byte representations, you can read
more about the UTF-8 encoding
[here](https://en.wikipedia.org/wiki/UTF-8#Encoding). The UTF-8 encoding is
backwards compatible with ASCII because any character with a UTF-8 codepoint
below `0x7f` (128) translates exactly into the same hexadecimal bytes.

In Python, you can include Unicode codepoints in strings using escape
sequences similar to how you can include octal or hexadecimal representations
of characters. To include any Unicode character below the codepoint `0xffff`
in a string, you can use escape sequences of the sort `\uhhhh` (where `h` is
a valid hex digit and `hhhh` is a codepoint). To include absolutely any
Unicode character, you can use escape sequences of the sort `\Uhhhhhhhh`
instead. Bear in mind however, that even though the `\U` escape sequence
expects 8 hexadecimal characters, the largest codepoint that is supported 
without throwing an error is `\U0010ffff` as explained above.

So, we can expand on our previous representations as follows:

```python
u = "\u004b"      # this is also K
U = "\U0000004b"  # this is also K
print(u, U)       # prints "K K"
```

Now based on what we've learned, you may expect that the string
`"\xe2\x82\xac"` would convert to `"€"` based on the UTF-8 encoding system.
However, this is where things may get confusing because Python deals with
byte representations included in strings on an individual byte basis. It uses
the UTF-8 encoding on a per-byte basis instead of sets of bytes. A reason for
this behavior is because there are encoding formats other than UTF-8, and it
would be incorrect for Python to assume the encoding format of the bytes in
the string. As an example try the following code, and you will see the
unexpected results:

```python
d = "€"             # this is a €
u = "\u20ac"        # this is also a €
U = "\U000020ac"    # this is also a €
b = "\xe2\x82\xac"  # this is NOT a €, instead is â¬
print(d, u, U, b)   # prints "€ € € â¬"
```

The bytes representation of "€" I mentioned earlier translates to "â¬" instead
based on the individual byte translation pattern. `0xe2` maps to "â", `0x82`
is a non-printable character, and `0xac` maps to "¬". I will explain exactly
why this happens in more detail towards the end.

This is where we need to separate the concept of strings from raw bytes in
Python. Before moving forward, I would like to make the difference between
"encoded" and "decoded" clear in terms of Python. In Python, encoding means
converting a string of characters into the raw bytes that it represents based
on an encoding scheme such as UTF-8. Similarly, decoding means converting raw
bytes into a string of characters based on an encoding scheme. But what do
these raw bytes look like?

Raw bytes are stored as something called byte literals. Byte literals
look similar to strings in code, but the characters are instead auto-encoded
into bytes using the UTF-8 encoding scheme on individual characters unless
they are already encoded into bytes. Byte literals are represented using `b""`
or `b''`. However, an important thing to note is that byte literals only allow
for characters up to `0xff`. This means that Unicode is not supported by byte
literals and the `\u` and `\U` escapes do not work!(**!!**).

```python
d = b"€"         # does not work, throws an error!
u = b"\u20ac"    # works like a "raw" byte literal as \u is unrecognized
ru = rb"\u20ac"  # exactly same as above
print(u, ru)     # prints "b'\\u20ac' b'\\u20ac'" denoting byte literals
```

Additionally, a string can be newly defined as a set of **individual** bytes
that are auto-decoded using the UTF-8 encoding scheme unless already decoded.
Notice the use of the word "individual". This individual byte behavior can be
"escaped" using either `\u` or `\U` to induce two to four byte behavior and
decode the rarer Unicode characters.

Now, byte literals can be decoded using any encoding format in which they form
a valid sequence of bytes. When the bytes get decoded using an encoding
format, they turn into a string. Similarly, a string can get encoded into byte
literals using any encoding format. So now if we try to print a byte literal
with the byte representation of the "€" character, you will notice it stays
as bytes, until it is encoded using UTF-8.

```python
b = b"\xe2\x82\xac"     # this is a bytes literal representing € in UTF-8
print(type(b), b)       # prints "<class 'bytes'> b'\xe2\x82\xac'"
d = b.decode("utf-8")   # we decode the byte literal using UTF-8
print(type(d), d)       # prints "<class 'str'> €"
e = d.encode("utf-8")   # we can encode back into byte literal using UTF-8
print(type(e), e)       # prints "<class 'bytes'> b'\xe2\x82\xac'"

f = b.decode("utf-16")  # this will error out
f = d.encode("ascii")   # this will error out
```

As we see above, we can freely convert between strings and byte literals
using an encoding format. However, if we try to decode bytes using an
encoding format where the bytes do not form a valid sequence, or if we try to
encode a string into bytes using an encoding format that does not support
the characters of the string, we will see errors.

To end off, as I promised earlier, I will explain why `"\xe2\x82\xac"` does
not actually translate to €. There is an important point to note, which is the
difference between byte sequences inside strings and inside byte literals.
Inside byte literals, the byte sequences are exactly what they seem like.
However, inside strings, the bytes actually represent the Unicode characters
below `0xff`. If they are non-printable they get displayed as the bytes,
however, if they are printable, we see the actual character. In UTF-8,
characters between `0x80` and `0xff` need two bytes of information as opposed
to one byte for `0x7f` and below (remember ASCII compatibility?). You can see
these principles unfurl:

```python
s = "\x60"            # below 0x7f
print(s, s.encode())  # "\x60" == b"\x60"
u = "\xe0"            # above 0x80
print(u, u.encode())  # "\xe0" == b"\xc3\xa0" != b"\xe0"
b = b"\xe0".decode()  # error, this is actually invalid in UTF-8!

# our old example, now understood
e = "\xe2\x82\xac"
print(e, e.encode())  # "\xe2\x82\xac" == b"\xc3\xa2\xc2\x82\xc2\xac" != b"\xe2\x82\xac"
```

Overall, I hope this gives some insights into how strings work in Python.
While some concepts are specific to Python, some concepts are much more
generalized over all programming languages. If you want more resources about
strings in Python or UTF-8 in general, you can check these out:
- [String and Bytes](https://docs.python.org/3/reference/lexical_analysis.html#literals)
- [UTF-8 Encoding](https://en.wikipedia.org/wiki/UTF-8#Encoding)
- [Other Encoding Formats](https://docs.python.org/3/library/codecs.html#standard-encodings)
- [
   Other Encoding Formats useful for Pickling and Debugging
  ](https://docs.python.org/3/library/codecs.html#text-encodings)
