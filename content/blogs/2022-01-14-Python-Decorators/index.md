---
title: Python Decorators
date: 2022-01-14
slug: /blogs/python-decorators
tags:
  - tech
postType: blog
---

In Python, decorators are often shrouded by a layer of mystery. We tend to use
them without understanding how they work, but if understood properly, they can
really improve our efficiency. This blog will cover the fundamentals of
decorators, and assumes that you have an understanding of how functions work.

<!--excerpt-->

If you are not fully familiar with how function parameters and arguments work
in Python, I suggest you first take a look at my previous blog post on [Python
function parameters](/blogs/python-function-parameters), which I wrote to lead
up to this blog on decorators.

Decorators are functions that modify the functionality of other functions.
That may sound straightforward, but, to understand decorators, we have to
begin with nested functions and functions as variables.

Nested functions are functions inside functions. We can limit the scope of
functions similar to how we can limit the scope of variables from global to
local. If function B is defined inside function A, we cannot call function B
from outside function A. Nested functions are useful for creating helper
functions and also for recursive functions, but as we will see, they also
serve a purpose in decorators. Nested functions also have access to all the
variables that are available in the scope of the outer function.

```python
def convert(cm):
    def inches():
         return cm / 2.54
    print(f"{cm}cm is {inches()}in.")  # calls the nested inches function

convert(2540)  # this will print the conversion
inches()       # this will error because inches is not in scope
```

A property of functions that many people overlook is that they are essentially
segments of code stored in a variable. This becomes much more obvious with the
use of `lambda` functions.

```python
def two_times(x):
    print(x * 2)

double = two_times
double(5)                         # prints 10

# not pythonic to store lambdas in variables, but just for the example
double2 = lambda x: print(x * 2)
double2(5)                        # prints 10
```

Just like any other variables, functions can be assigned to other variables
and can be passed as arguments to functions:

```python
def call(func, *args, **kwargs):
    func(*args, **kwargs)

def multiply(v1, v2):
    print(v1 * v2)

call(multiply, 7, 8)              # passing multiply to "call" to get invoked by "call"
call(multiply, v1=7, v2=8, v3=0)  # errors as there is no v3 argument for multiply
```

Similarly, just like other variables, functions can also be returned from
functions. The inner function is tied to the outer function and cannot be
accessed outside the outer function unless returned by an invocation of the
outer function.

```python
def mult_table(x):
    def num(y):
        return x * y
    return num

five_table = mult_table(5)   # returns a function computing 5 * y
seven_table = mult_table(7)  # returns a function computing 7 * y
print(five_table(8))         # prints 40
print(seven_table(11))       # prints 77
num(10)                      # this will error because num is not in scope
```

From the previous two examples, we are already close to understanding what
decorators actually do. A decorator essentially takes in function, wraps it in
another function to improve the functionality of the original function, and
then returns the new wrapper function.

Sounds like a mouthful! Let's break it down with a simple decorator example.
Say we have a bunch of functions that call each other, and we are receiving an
error somewhere. But, we are unable to figure out where. We resort to debugging
with print statements: the usual printing of parameters, printing of return
values etc. However, we have too many functions and adding prints to every
single function is too time-consuming. How nice would it be if we could just
attach a "template debugger" to every function that does the same thing? Well,
that's where a decorator will come in handy - it will decorate (wrap) each
function with another function, in this case a template debugger.

If we do debugging the cumbersome way, we would have to edit every single
function to add debugging statements, not to mention that each function could
have a different number of parameters and return values, rendering simple copy
and paste techniques useless. But, anyway, this is probably how we would do
it:

```python
def func(a1, a2, a3, kw1='a', kw2='b', kw3='c'):
    # essentially can be executed before the function
    print(f"debug enter func")
    print(f"debug params: {a1} {a2} {a3} {kw1} {kw2} {kw3}")
    ret = (a1 + a2 + a3, kw1 + kw2 + kw3)
    # essentially can be executed after the function
    print(f"debug return: {ret}")
    print(f"debug exit func")
    return ret

func(1, 2, 3, 'x', 'y', 'z')  # this should print the params and return value
```

To create a template debug function, we move the debugging statements from
inside the actual function into an external wrapper. The following is an
example of a debug decorator:

```python
def debug(func):                                  # decorator
    def wrapper(*args, **kwargs):                 # wrapper that executes extra code
        print(f"debug enter {func.__name__}")
        print(f"debug params: {args}, {kwargs}")
        ret = func(*args, **kwargs)               # actual function invocation
        print(f"debug return: {ret}")
        print(f"debug exist {func.__name__}")
        return ret                                # forwarding return value from actual invocation
    return wrapper                                # making the wrapper available outside decorator scope

def linear(m, x, b=0):                            # function that will be decorated
    return m * x + b

def quad(a, b, x, c=0):                           # function that will be decorated
    return a * (x ** 2) + b * x + c

# we override the reference to the original function with a
# reference to the wrapper function returned by the decorator.
# overriding is not necessary however.
linear = debug(linear)
linear(2, 5, b=8)                                 # should return 18, and print debugging statements
quad = debug(quad)
quad(2, 5, 2)                                     # should return 18, and print debugging statements
```

In the above example, the decorator returns a wrapper function to the original
function that executes additional code before and after the original function.
However, decorators can also be used to modify the functionality of the
original function or even modify the function itself.

But, one thing still bothers us... we still have to write that extra piece of
overriding code for every single function we want to debug. This is where the
`@` notation for decorators comes in handy.

```python
def decorator(func):
    def wrapper(*args, **kwargs):
        print(f"{func.__name__} is now decorated!")
        return func(*args, **kwargs)
    return wrapper

# after the decoration, linear no longer points to the original
# function, but rather the wrapper returned by the decorator
@decorator
def linear(m, x, b=0):
    return m * x + b

linear(2, 5, b=8)  # linear is now already decorated by the decorator
```

Now that we understand how a basic decorator works, another question arises,
what if we want to customize our decorator (customizing the template itself!?)
In a normal decorator, the only thing that changes in a wrapper is the
function that is invoked, but if we want the wrapper itself to change, we need
to add another layer for parameterization, something I like to call a decorator
factory.

Let's extend our debugging example. What if we want to write the output from
the debug statements to a file instead of `stdout`, and what if we want the
filename to be different based on the function we want to debug? We can use
a decorator factory to generate custom debug decorators.

```python
def debug(filename):
    def debug_file(func):
        def wrapper(*args, **kwargs):
            with open(filename, 'w') as f:
                print(f"debug {func.__name__}", file=f)
                ret = func(*args, **kwargs)
                print(f"{func.__name__} returned {ret}", file=f)
            return ret
        return wrapper
    return debug_file

@debug('linear.txt')                 # this will generate a decorator with filename='linear.txt'
def linear(m, x, b=0):
    return m * x + b

@debug('quad.txt')                   # this will generate a decorator with filename='quad.txt'
def quad(a, b, x, c=0):
    return a * (x ** 2) + b * x + c

linear(2, 5, b=8)                    # this will write to linear.txt
quad(2, 5, 2)                        # this will write to quad.txt
```

PS: You can go a step further and reroute **all** output from the original
function into a file by temporarily overriding the destination of `sys.stdout`!
This would be an example of modifying the original function's behavior using a
decorator instead of just extending its behavior.

Now that we understand how decorators and decorator factories work, the
following are some use cases where you can utilize them:
- Debugging a function (decorator)
- Timing a function (decorator)
- Counting calls to a function / singleton functions (decorator, but usually
  metaclasses are a better option)
- Thread synchronization (decorator factory using a lock)
- Parameter validation (decorator factory using args and kwargs!)

And the following are some very useful built-in decorators available for use in
Python right now:
- [`@atexit.register`](https://docs.python.org/3/library/atexit.html#atexit.register)
  : executes the function on program termination
- [`@classmethod`](https://docs.python.org/3/library/functions.html#classmethod)
  : returns a class method
- [`@staticmethod`](https://docs.python.org/3/library/functions.html#staticmethod)
  : returns a static method
- [`@property`](https://docs.python.org/3/library/functions.html#property)
  : returns a property
- [`@functools.cache`](https://docs.python.org/3/library/functools.html#functools.cache)
  and [`@functools.lru_cache`](https://docs.python.org/3/library/functools.html#functools.lru_cache)
  : useful for memoization
- [`@functools.wraps`](https://docs.python.org/3/library/functools.html#functools.wraps)
  : a must-use decorator for the wrapper function to inherit properties from
  the original function

Overall, this article gives an insight into how decorators and decorator
factories work. These are some of the more complicated concepts in Python, but
with the incremental examples and the potential uses of decorators, I hope
the concepts are clearer.
