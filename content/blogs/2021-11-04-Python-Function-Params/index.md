---
title: Python Function Parameters
date: 2021-11-04
slug: /blogs/python-function-parameters
tags:
  - tech
postType: blog
---

In Python, or every programming language, functions are one of the larger
building blocks. Functions allow reusing blocks of code and eliminate code
duplication. But, not everyone is fully aware of all the different ways to
pass inputs to functions. That is what I will be exploring in this blog.

<!--excerpt-->

Let's begin with a simple way of defining functions. A function can be
described with three steps:

1. Take inputs
2. Manipulate the inputs (the function body)
3. Return an output

As a note, moving forward, I will be referring to the inputs within the
function definition as parameters, and the actual input values used when
invoking the function as arguments.

So, this is what a typical function looks like in Python, as you may already
know:

```python
def function_name(parameter1, parameter2, ...):
    # indentation important
    # manipulation of input parameters
    return  # something
```

So let's explore the different ways that arguments can be passed in to
functions. When learning about functions, we are usually introduced to them
with a fixed number of parameters. These parameters are **positional** meaning
the position of the arguments when invoking the function will matter. If a
function with a fixed number of parameters is not invoked with the same number
of arguments as the number of parameters, it will raise an error.

```python
def multiply(num1, num2):
    print(f"Multiplying {num1} and {num2}")
    return num1 * num2

multiply(2, 2)     # returns 4
multiply(2, 2, 2)  # error num arguments != num parameters
```

Additionally, when invoking the function, we can either use positional
arguments or keyword arguments to specify the parameters. As a syntax rule,
positional arguments always precede keyword arguments. This is because the
positional arguments are first matched with their respective parameters before
utilizing keyword arguments to target the remaining parameters. If a keyword
argument does not target a parameter that exists, it will raise an error.

```python
def divide(dividend, divisor):
    print(f"Dividing {dividend} by {divisor}")
    return dividend / divisor

divide(4, 2)                   # both positional args
divide(dividend=4, divisor=2)  # both named args
divide(divisor=2, dividend=4)  # both named args in a different order also works
divide(4, divisor=2)           # mix of positional and keyword args

divide(dividend=4, 2)          # will raise an error as positional args should be first
divide(2, dividend=4)          # will raise an error as 2 is already assigned to `dividend` positionally
divide(2, quotient=4)          # will raise an error as `quotient` parameter does not exist
```

However, there are often occasions where having a default value for a
parameter is useful, usually for specifying default settings to the function.
In Python, we can supply default values to parameters by specifying them in
the function definition. This makes the parameter optional and if no value is
supplied when invoking the function, the default value is utilized. However,
the optional parameters, known as keyword parameters, can only be specified
after 0 or more positional parameters in the function definition.

```python
def exponent(power, base=10):
    print(f"Raising {base} to the power {power}")
    return base ** power

exponent(3, base=2)  # returns 8
exponent(3, 2)       # default parameters can be specified through position, returns 8
exponent(3)          # uses default `base`, returns 1000

exponent()           # `power` does not have a default value, so raises error
```

Now, suppose we want to expand our earlier `multiply` function to multiply as
many numbers as we would like. To accomplish this task, we would require a
function that accepts a variable number of arguments. Granted, we could create
a function that just accepts a list or an iterable as its only positional
argument, but that would require the creation of additional containers and
also may require type checking inside the function to make sure we received an
iterable. Wouldn't it be much easier if Python created that list (technically
a tuple) for us? That is exactly what the `*args` parameter accomplishes.

Let's take a short detour here. The `*` in question here is not the binary
operator for multiplication, but actually a packing/unpacking operation. We
can "unpack" an iterable into arguments to a function when invoking it, or
conversely, we can "pack" function parameters into an iterable for use inside
the function body. There are actually two operators here: `*` is used for
packing/unpacking tuples, lists, sets, and keys of dictionaries, while `**` is
used for packing/unpacking dictionary item pairs.

First, let's see some examples for unpacking of iterables:

```python
def exponent(power, base):
    print(f"Raising {base} to the power {power}")
    return base ** power

args = [3, 2]
exponent(*args)                      # unpacking the list into positional args
args = {3, 2}
exponent(*args)                      # unpacking the set works but unpredictable order and output
kwargs = {"power": 3, "base": 2}
exponent(**kwargs)                   # unpacking the dictionary into keyword args

args = [3]
kwargs = {"base": 2}
exponent(*args, **kwargs)            # unpacking positional and keyword args

exponent(*[3, 2, 1])                 # will raise an error as too many args
exponent(*[3])                       # will raise an error as too few args
exponent(**{"power": 3, "blah": 2})  # will raise an error as unexpected keyword arg
```

Going back to the variable number of positional parameters `*args`, we can
make an association that if we are unpacking arguments when invoking a
function, we can similarly pack the parameters inside the function itself. We
can either have completely variable number of parameters (0 to computer limit)
or a few fixed positional parameters and then a variable number of additional
parameters (fixed `x` to computer limit). It is generally a good practice to
group the variable positional parameters along with the fixed positional
parameters and have the keyword parameters follow if any.

```python
# one number followed by variable amount of numbers followed by an optional factor
# *nums is the packing of variable positional parameters into nums
def multiply(num, *nums, factor=1):
    print(num, nums, factor)
    ret = num * factor
    # nums is just a tuple that can be iterated over
    for new_num in nums:
        ret *= new_num
    return ret

multiply(2)                  # returns 2, num=2, nums is (), factor is default 1
multiply(2, 3, 4, 5)         # returns 120, num=2, nums is (3, 4, 5), factor is default 1
multiply(2, factor=0.5)      # returns 1, num=2, nums is (), factor is 0.5

# the following is equivalent to multiply(2, 3, 4, 5, factor=0.5)
args = [2, 3, 4, 5]
multiply(*args, factor=0.5)  # returns 60, num=2, nums is (3, 4, 5), factor is 0.5

multiply()                   # will raise an error as `num` is still required
multiply(factor=2)           # will raise an error as `num` is still required
multiply(2, factor=2, 3)     # will raise an error as keyword arg precedes positional arg
```

Similarly, we can have a variable number of keyword parameters in the form of
`**kwargs`. Any keyword arguments that do not match any of the parameter names
when invoking a function will get packed into a dictionary inside the
function. The variable number of keyword parameters can be used by itself if
all we want are key-value pairs inside the function, but they typically
follow either or all of the following: fixed positional parameters, variable
positional parameters, and fixed keyword parameters.

```python
# one number followed by an optional factor followed by named numbers
# **nums is the packing of variable keyword parameters into nums
def multiply(num, factor=1, **nums):
    print(num, factor, nums)
    ret = num * factor
    # nums is just a dictionary that can be iterated over
    for name in nums:
        new_num = nums[name]
        print(f"Multiplying by {name}={new_num}")
        ret *= new_num
    return ret

multiply(2)                   # returns 2, num=2, factor is default 1, nums is {}
multiply(2, a=3, b=4, c=5)    # returns 120, num=2, factor is default 1, nums is {'a':3, 'b':4, 'c':5}
multiply(2, factor=0.5)       # returns 1, num=2, factor is 0.5, nums is {}
multiply(2, factor=0.5, a=3)  # returns 3, num=2, factor is 0.5, nums is {'a':3}
multiply(2, a=3, factor=0.5)  # same as above, but bad style to put variables first

# the following is equivalent to multiply(num=2, a=3, b=4, c=5, factor=0.5)
args = {'num':2, 'a':3, 'b':4, 'c':5}
multiply(**args, factor=0.5)  # returns 60, num=2, factor is 0.5, nums is {'a':3, 'b':4, 'c':5}

multiply()                    # will raise an error as `num` is still required
multiply(factor=2, a=3, b=4)  # will raise an error as `num` is still required
```

In general, the good practice to avoid unexpected behaviors when passing
arguments to a function is to use the following order of parameters in the
function definition and also when invoking the function:

1. Fixed positional parameters
2. Variable positional parameters
3. Fixed keyword parameters
4. Variable keyword parameters

```python
def example(arg1, arg2, *args, kwarg=None, **kwargs):
    print(arg1, arg2, args, kwarg, kwargs)

example(
  "hello",                   # arg1
  "world",                   # arg2
  "did", "you", "receive",   # args
  kwarg="my",                # kwarg
  hidden="message"           # kwargs
)
```

I hope this example-heavy blog is actually useful to learn positional,
keyword, and variable parameters. The packing and unpacking operator often
confused me but when I understood what it meant, `*args` and `**kwargs`
suddenly made a lot more sense.
