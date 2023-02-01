<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Gamma Delta Ratio

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the ratio of two [gamma][@stdlib/math/base/special/gamma] functions.



<section class="usage">

## Usage

To use in Observable,

```javascript
gammaDeltaRatio = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-delta-ratio@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var gammaDeltaRatio = require( 'path/to/vendor/umd/math-base-special-gamma-delta-ratio/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-delta-ratio@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.gammaDeltaRatio;
})();
</script>
```

#### gammaDeltaRatio( z, delta )

Computes the ratio of two [gamma functions][@stdlib/math/base/special/gamma]. Specifically, the function evaluates `Γ( z ) / Γ( z + delta )`.

```javascript
var y = gammaDeltaRatio( 2.0, 3.0 );
// returns ~0.042

y = gammaDeltaRatio( 4.0, 0.5 );
// returns ~0.516

y = gammaDeltaRatio( 100.0, 0.0 );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-delta-ratio@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var delta;
var z;
var i;

for ( i = 0; i < 100; i++ ) {
    z = randu()*10.0;
    delta = randu()*10.0;
    console.log( 'gamma( %d ) / gamma( %d + %d ) = %d', z, z, delta, gammaDeltaRatio( z, delta ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-gamma-delta-ratio.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-gamma-delta-ratio

[test-image]: https://github.com/stdlib-js/math-base-special-gamma-delta-ratio/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-gamma-delta-ratio/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-gamma-delta-ratio/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-gamma-delta-ratio?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-gamma-delta-ratio.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-gamma-delta-ratio/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-gamma-delta-ratio/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-gamma-delta-ratio/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-gamma-delta-ratio/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-gamma-delta-ratio/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-gamma-delta-ratio/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math-base-special-gamma/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
