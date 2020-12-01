/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./resources/assests/js/ace-elements.min.js":
/*!**************************************************!*\
  !*** ./resources/assests/js/ace-elements.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Ace v1.4.0
 */
if ("undefined" == typeof jQuery) throw new Error("Ace's JavaScript requires jQuery");
!function (a, b) {
  var c = function c(b, _c) {
    function d(a) {
      a.preventDefault(), a.stopPropagation();
      var b = A.offset(),
          c = b[o],
          d = u ? a.pageY : a.pageX;
      d > c + G ? (G = d - c - F + I, G > H && (G = H)) : (G = d - c - I, 0 > G && (G = 0)), l.update_scroll();
    }

    function e(b) {
      b.preventDefault(), b.stopPropagation(), ba = aa = u ? b.pageY : b.pageX, Q = !0, a("html").off("mousemove.ace_scroll").on("mousemove.ace_scroll", f), a(R).off("mouseup.ace_scroll").on("mouseup.ace_scroll", g), A.addClass("active"), S && l.$element.trigger("drag.start");
    }

    function f(a) {
      a.preventDefault(), a.stopPropagation(), ba = u ? a.pageY : a.pageX, ba - aa + G > H ? ba = aa + H - G : 0 > ba - aa + G && (ba = aa - G), G += ba - aa, aa = ba, 0 > G ? G = 0 : G > H && (G = H), l.update_scroll();
    }

    function g(b) {
      b.preventDefault(), b.stopPropagation(), Q = !1, a("html").off(".ace_scroll"), a(R).off(".ace_scroll"), A.removeClass("active"), S && l.$element.trigger("drag.end"), w && W && !Y && i();
    }

    function h(a) {
      var b = +new Date();

      if (Z && b - da > 1e3) {
        var c = z[t];
        $ != c && ($ = c, _ = !0, l.reset(!0)), da = b;
      }

      w && W && (null != ca && (clearTimeout(ca), ca = null), A.addClass("not-idle"), Y || 1 != a || i());
    }

    function i() {
      null != ca && (clearTimeout(ca), ca = null), ca = setTimeout(function () {
        ca = null, A.removeClass("not-idle");
      }, X);
    }

    function j() {
      A.css("visibility", "hidden").addClass("scroll-hover"), N = u ? parseInt(A.outerWidth()) || 0 : parseInt(A.outerHeight()) || 0, A.css("visibility", "").removeClass("scroll-hover");
    }

    function k() {
      if (V !== !1) {
        var a = y.offset(),
            b = a.left,
            c = a.top;
        u ? M || (b += y.outerWidth() - N) : M || (c += y.outerHeight() - N), V === !0 ? A.css({
          top: parseInt(c),
          left: parseInt(b)
        }) : "left" === V ? A.css("left", parseInt(b)) : "top" === V && A.css("top", parseInt(c));
      }
    }

    var l = this,
        m = ace.helper.getAttrSettings(b, a.fn.ace_scroll.defaults),
        n = a.extend({}, a.fn.ace_scroll.defaults, _c, m);
    this.size = 0, this.lock = !1, this.lock_anyway = !1, this.$element = a(b), this.element = b;

    var o,
        p,
        q,
        r,
        s,
        t,
        u = !0,
        v = !1,
        w = !1,
        x = !1,
        y = null,
        z = null,
        A = null,
        B = null,
        C = null,
        D = null,
        E = null,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = !0,
        K = !1,
        L = "",
        M = !1,
        N = 0,
        O = 1,
        P = !1,
        Q = !1,
        R = "onmouseup" in window ? window : "html",
        S = n.dragEvent || !1,
        T = _c.scrollEvent || !1,
        U = n.detached || !1,
        V = n.updatePos || !1,
        W = n.hideOnIdle || !1,
        X = n.hideDelay || 1500,
        Y = !1,
        Z = n.observeContent || !1,
        $ = 0,
        _ = !0;

    this.ref = function () {
      return this;
    }, this.create = function (b) {
      if (!x) {
        b && (n = a.extend({}, a.fn.ace_scroll.defaults, b)), this.size = parseInt(this.$element.attr("data-size")) || n.size || 200, u = !n.horizontal, o = u ? "top" : "left", p = u ? "height" : "width", q = u ? "maxHeight" : "maxWidth", r = u ? "clientHeight" : "clientWidth", s = u ? "scrollTop" : "scrollLeft", t = u ? "scrollHeight" : "scrollWidth", this.$element.addClass("ace-scroll"), "static" == this.$element.css("position") ? (P = this.element.style.position, this.element.style.position = "relative") : P = !1;
        var c = null;
        U ? c = a('<div class="scroll-track scroll-detached"><div class="scroll-bar"></div></div>').appendTo("body") : (this.$element.wrapInner('<div class="scroll-content" />'), this.$element.prepend('<div class="scroll-track"><div class="scroll-bar"></div></div>')), y = this.$element, U || (y = this.$element.find(".scroll-content").eq(0)), u || y.wrapInner("<div />"), z = y.get(0), U ? (A = c, k()) : A = this.$element.find(".scroll-track").eq(0), B = A.find(".scroll-bar").eq(0), C = A.get(0), D = B.get(0), E = D.style, u || A.addClass("scroll-hz"), n.styleClass && (L = n.styleClass, A.addClass(L), M = !!L.match(/scroll\-left|scroll\-top/)), 0 == N && (A.show(), j()), A.hide(), A.on("mousedown", d), B.on("mousedown", e), y.on("scroll", function () {
          J && (G = parseInt(Math.round(this[s] * O)), E[o] = G + "px"), J = !1, T && this.$element.trigger("scroll", [z]);
        }), n.mouseWheel && (this.lock = n.mouseWheelLock, this.lock_anyway = n.lockAnyway, this.$element.on(a.event.special.mousewheel ? "mousewheel.ace_scroll" : "mousewheel.ace_scroll DOMMouseScroll.ace_scroll", function (b) {
          if (!v) {
            if (h(!0), !w) return !l.lock_anyway;
            Q && (Q = !1, a("html").off(".ace_scroll"), a(R).off(".ace_scroll"), S && l.$element.trigger("drag.end")), b.deltaY = b.deltaY || 0;
            var c = b.deltaY > 0 || b.originalEvent.detail < 0 || b.originalEvent.wheelDelta > 0 ? 1 : -1,
                d = !1,
                e = z[r],
                f = z[s];
            l.lock || (d = -1 == c ? z[t] <= f + e : 0 == f), l.move_bar(!0);
            var g = parseInt(e / 8);
            return 80 > g && (g = 80), g > l.size && (g = l.size), g += 1, z[s] = f - c * g, d && !l.lock_anyway;
          }
        }));
        var f = ace.vars.touch && "ace_drag" in a.event.special && n.touchDrag;

        if (f) {
          var g = "",
              m = f ? "ace_drag" : "swipe";
          this.$element.on(m + ".ace_scroll", function (a) {
            if (v) return void (a.retval.cancel = !0);
            if (h(!0), !w) return void (a.retval.cancel = this.lock_anyway);

            if (g = a.direction, u && ("up" == g || "down" == g) || !u && ("left" == g || "right" == g)) {
              var b = u ? a.dy : a.dx;
              0 != b && (Math.abs(b) > 20 && f && (b = 2 * b), l.move_bar(!0), z[s] = z[s] + b);
            }
          });
        }

        W && A.addClass("idle-hide"), Z && A.on("mouseenter.ace_scroll", function () {
          Y = !0, h(!1);
        }).on("mouseleave.ace_scroll", function () {
          Y = !1, 0 == Q && i();
        }), this.$element.on("mouseenter.ace_scroll touchstart.ace_scroll", function (a) {
          _ = !0, Z ? h(!0) : n.hoverReset && l.reset(!0), A.addClass("scroll-hover");
        }).on("mouseleave.ace_scroll touchend.ace_scroll", function () {
          A.removeClass("scroll-hover");
        }), u || y.children(0).css(p, this.size), y.css(q, this.size), v = !1, x = !0;
      }
    }, this.is_active = function () {
      return w;
    }, this.is_enabled = function () {
      return !v;
    }, this.move_bar = function (a) {
      J = a;
    }, this.get_track = function () {
      return C;
    }, this.reset = function (a) {
      if (!v) {
        x || this.create();
        var b = this.size;

        if (!a || _) {
          if (_ = !1, U) {
            var c = parseInt(Math.round((parseInt(y.css("border-top-width")) + parseInt(y.css("border-bottom-width"))) / 2.5));
            b -= c;
          }

          var d = u ? z[t] : b;
          if (u && 0 == d || !u && 0 == this.element.scrollWidth) return void A.removeClass("scroll-active");
          var e = u ? b : z.clientWidth;
          u || y.children(0).css(p, b), y.css(q, this.size), d > e ? (w = !0, A.css(p, e).show(), O = parseFloat((e / d).toFixed(5)), F = parseInt(Math.round(e * O)), I = parseInt(Math.round(F / 2)), H = e - F, G = parseInt(Math.round(z[s] * O)), E[p] = F + "px", E[o] = G + "px", A.addClass("scroll-active"), 0 == N && j(), K || (n.reset && (z[s] = 0, E[o] = 0), K = !0), U && k()) : (w = !1, A.hide(), A.removeClass("scroll-active"), y.css(q, ""));
        }
      }
    }, this.disable = function () {
      z[s] = 0, E[o] = 0, v = !0, w = !1, A.hide(), this.$element.addClass("scroll-disabled"), A.removeClass("scroll-active"), y.css(q, "");
    }, this.enable = function () {
      v = !1, this.$element.removeClass("scroll-disabled");
    }, this.destroy = function () {
      w = !1, v = !1, x = !1, this.$element.removeClass("ace-scroll scroll-disabled scroll-active"), this.$element.off(".ace_scroll"), U || (u || y.find("> div").children().unwrap(), y.children().unwrap(), y.remove()), A.remove(), P !== !1 && (this.element.style.position = P), null != ca && (clearTimeout(ca), ca = null);
    }, this.modify = function (b) {
      b && (n = a.extend({}, n, b)), this.destroy(), this.create(), _ = !0, this.reset(!0);
    }, this.update = function (b) {
      b && (n = a.extend({}, n, b)), this.size = n.size || this.size, this.lock = n.mouseWheelLock || this.lock, this.lock_anyway = n.lockAnyway || this.lock_anyway, W = n.hideOnIdle || W, X = n.hideDelay || X, Z = n.observeContent || !1, S = n.dragEvent || !1, "undefined" != typeof b.styleClass && (L && A.removeClass(L), L = b.styleClass, L && A.addClass(L), M = !!L.match(/scroll\-left|scroll\-top/));
    }, this.start = function () {
      z[s] = 0;
    }, this.end = function () {
      z[s] = z[t];
    }, this.hide = function () {
      A.hide();
    }, this.show = function () {
      A.show();
    }, this.update_scroll = function () {
      J = !1, E[o] = G + "px", z[s] = parseInt(Math.round(G / O));
    };
    var aa = -1,
        ba = -1,
        ca = null,
        da = 0;
    return this.track_size = function () {
      return 0 == N && j(), N;
    }, this.create(), _ = !0, this.reset(!0), $ = z[t], this;
  };

  a.fn.ace_scroll = function (d, e) {
    var f,
        g = this.each(function () {
      var b = a(this),
          g = b.data("ace_scroll"),
          h = "object" == _typeof(d) && d;
      g || b.data("ace_scroll", g = new c(this, h)), "string" == typeof d && (f = g[d](e));
    });
    return f === b ? g : f;
  }, a.fn.ace_scroll.defaults = {
    size: 200,
    horizontal: !1,
    mouseWheel: !0,
    mouseWheelLock: !1,
    lockAnyway: !1,
    styleClass: !1,
    observeContent: !1,
    hideOnIdle: !1,
    hideDelay: 1500,
    hoverReset: !0,
    reset: !1,
    dragEvent: !1,
    touchDrag: !0,
    touchSwipe: !1,
    scrollEvent: !1,
    detached: !1,
    updatePos: !0
  };
}(window.jQuery), function (a, b) {
  var c = function c(b, _c2) {
    var d = ace.helper.getAttrSettings(b, a.fn.ace_colorpicker.defaults),
        e = a.extend({}, a.fn.ace_colorpicker.defaults, _c2, d),
        f = a(b),
        g = "",
        h = "",
        i = null,
        j = [];
    f.addClass("hide").find("option").each(function () {
      var a = "colorpick-btn",
          b = this.value.replace(/[^\w\s,#\(\)\.]/g, "");
      b.indexOf("number") >= 0 || (this.value != b && (this.value = b), this.selected && (a += " selected", h = b), j.push(b), g += '<li><a class="' + a + '" style="background-color:' + b + ';" data-color="' + b + '"></a></li>');
    }).end().on("change.color", function () {
      f.next().find(".btn-colorpicker").css("background-color", this.value);
    }).after('<div class="dropdown dropdown-colorpicker">		<a data-toggle="dropdown" class="dropdown-toggle" ' + (e.auto_pos ? 'data-position="auto"' : "") + '><span class="btn-colorpicker" style="background-color:' + h + '"></span></a><ul class="dropdown-menu' + (e.caret ? " dropdown-caret" : "") + (e.pull_right ? " dropdown-menu-right" : "") + '">' + g + "</ul></div>");
    var k = f.next().find(".dropdown-menu");
    k.on(ace.click_event, function (b, c) {
      var d = a(b.target);
      if (!d.is(".colorpick-btn")) return !1;
      i && i.removeClass("selected"), i = d, i.addClass("selected");
      var e = i.data("color");
      return c !== !0 && f.val(e).trigger("change"), f.next().find(".btn-colorpicker").css("background-color", e), b.preventDefault(), !0;
    }), i = f.next().find("a.selected"), this.pick = function (c, d) {
      if ("number" == typeof c) {
        if (c >= j.length) return;
        b.selectedIndex = c, k.find("a:eq(" + c + ")").trigger(ace.click_event, [!0]);
      } else if ("string" == typeof c) {
        var e = c.replace(/[^\w\s,#\(\)\.]/g, "");
        if (c = j.indexOf(e), -1 == c && d === !0 && (j.push(e), a("<option />").appendTo(f).val(e), a('<li><a class="colorpick-btn"></a></li>').appendTo(k).find("a").css("background-color", e).data("color", e), c = j.length - 1), -1 == c) return;
        k.find("a:eq(" + c + ")").trigger(ace.click_event, [!0]);
      }
    }, this.destroy = function () {
      f.removeClass("hide").next().remove(), j = [];
    };
  };

  a.fn.ace_colorpicker = function (d, e) {
    var f,
        g = this.each(function () {
      var b = a(this),
          g = b.data("ace_colorpicker"),
          h = "object" == _typeof(d) && d;
      g || b.data("ace_colorpicker", g = new c(this, h)), "string" == typeof d && (f = g[d](e));
    });
    return f === b ? g : f;
  }, a.fn.ace_colorpicker.defaults = {
    pull_right: !1,
    caret: !0,
    auto_pos: !0
  };
}(window.jQuery), function (a, b) {
  var c = ("multiple" in document.createElement("INPUT")),
      d = ("FileList" in window),
      e = ("FileReader" in window),
      f = ("File" in window),
      g = function g(b, c) {
    var d = this,
        e = ace.helper.getAttrSettings(b, a.fn.ace_file_input.defaults);
    this.settings = a.extend({}, a.fn.ace_file_input.defaults, c, e), this.$element = a(b), this.element = b, this.disabled = !1, this.can_reset = !0, this.$element.off("change.ace_inner_call").on("change.ace_inner_call", function (a, b) {
      return d.disabled || b === !0 ? void 0 : i.call(d);
    });
    var f = this.$element.closest("label").css({
      display: "block"
    }),
        g = 0 == f.length ? "label" : "span";
    this.$element.wrap("<" + g + ' class="ace-file-input" />'), this.apply_settings(), this.reset_input_field();
  };

  g.error = {
    FILE_LOAD_FAILED: 1,
    IMAGE_LOAD_FAILED: 2,
    THUMBNAIL_FAILED: 3
  }, g.prototype.apply_settings = function () {
    var b = this;
    this.multi = this.$element.attr("multiple") && c, this.well_style = "well" == this.settings.style, this.well_style ? (this.settings.thumbnail || (this.settings.thumbnail = "small"), this.$element.parent().addClass("ace-file-multiple")) : this.$element.parent().removeClass("ace-file-multiple"), this.$element.parent().find(":not(input[type=file])").remove(), this.$element.after('<span class="ace-file-container" data-title="' + this.settings.btn_choose + '"><span class="ace-file-name" data-title="' + this.settings.no_file + '">' + (this.settings.no_icon ? '<i class="' + ace.vars.icon + this.settings.no_icon + '"></i>' : "") + "</span></span>"), this.$label = this.$element.next(), this.$container = this.$element.closest(".ace-file-input");
    var e = !!this.settings.icon_remove;

    if (e) {
      var f = a('<a class="remove" href="#"><i class="' + ace.vars.icon + this.settings.icon_remove + '"></i></a>').appendTo(this.$element.parent());
      f.on(ace.click_event, function (a) {
        if (a.preventDefault(), !b.can_reset) return !1;
        var c = !0;
        if (b.settings.before_remove && (c = b.settings.before_remove.call(b.element)), !c) return !1;
        b.reset_input();
        return !1;
      });
    }

    this.settings.droppable && d && h.call(this);
  }, g.prototype.show_file_list = function (b, c) {
    var d = "undefined" == typeof b ? this.$element.data("ace_input_files") : b;

    if (d && 0 != d.length) {
      this.well_style && (this.$label.find(".ace-file-name").remove(), this.settings.btn_change || this.$label.addClass("hide-placeholder")), this.$label.attr("data-title", this.settings.btn_change).addClass("selected");

      for (var g = 0; g < d.length; g++) {
        var h = "",
            i = !1;
        if ("string" == typeof d[g]) h = d[g];else if (f && d[g] instanceof File) h = a.trim(d[g].name);else {
          if (!(d[g] instanceof Object && d[g].hasOwnProperty("name"))) continue;
          h = d[g].name, d[g].hasOwnProperty("type") && (i = d[g].type), d[g].hasOwnProperty("path") || (d[g].path = d[g].name);
        }
        var k = h.lastIndexOf("\\") + 1;
        0 == k && (k = h.lastIndexOf("/") + 1), h = h.substr(k), 0 == i && (i = /\.(jpe?g|png|gif|svg|bmp|tiff?)$/i.test(h) ? "image" : /\.(mpe?g|flv|mov|avi|swf|mp4|mkv|webm|wmv|3gp)$/i.test(h) ? "video" : /\.(mp3|ogg|wav|wma|amr|aac)$/i.test(h) ? "audio" : "file");
        var l = {
          file: "fa fa-file",
          image: "fa fa-picture-o file-image",
          video: "fa fa-film file-video",
          audio: "fa fa-music file-audio"
        },
            m = l[i];

        if (this.well_style) {
          this.$label.append('<span class="ace-file-name" data-title="' + h + '"><i class="' + ace.vars.icon + m + '"></i></span>');
          var n = c === !0 && f && d[g] instanceof File ? a.trim(d[g].type) : "",
              o = e && this.settings.thumbnail && (n.length > 0 && n.match("image") || 0 == n.length && "image" == i);

          if (o) {
            var p = this;
            a.when(j.call(this, d[g])).fail(function (a) {
              p.settings.preview_error && p.settings.preview_error.call(p, h, a.code);
            });
          }
        } else this.$label.find(".ace-file-name").attr({
          "data-title": h
        }).find(ace.vars[".icon"]).attr("class", ace.vars.icon + m);
      }

      return !0;
    }
  }, g.prototype.reset_input = function () {
    this.reset_input_ui(), this.reset_input_field();
  }, g.prototype.reset_input_ui = function () {
    this.$label.attr({
      "data-title": this.settings.btn_choose,
      "class": "ace-file-container"
    }).find(".ace-file-name:first").attr({
      "data-title": this.settings.no_file,
      "class": "ace-file-name"
    }).find(ace.vars[".icon"]).attr("class", ace.vars.icon + this.settings.no_icon).prev("img").remove(), this.settings.no_icon || this.$label.find(ace.vars[".icon"]).remove(), this.$label.find(".ace-file-name").not(":first").remove(), this.reset_input_data();
  }, g.prototype.reset_input_field = function () {
    this.$element.wrap("<form>").parent().get(0).reset(), this.$element.unwrap();
  }, g.prototype.reset_input_data = function () {
    this.$element.data("ace_input_files") && (this.$element.removeData("ace_input_files"), this.$element.removeData("ace_input_method"));
  }, g.prototype.enable_reset = function (a) {
    this.can_reset = a;
  }, g.prototype.disable = function () {
    this.disabled = !0, this.$element.attr("disabled", "disabled").addClass("disabled");
  }, g.prototype.enable = function () {
    this.disabled = !1, this.$element.removeAttr("disabled").removeClass("disabled");
  }, g.prototype.files = function () {
    return a(this).data("ace_input_files") || null;
  }, g.prototype.method = function () {
    return a(this).data("ace_input_method") || "";
  }, g.prototype.update_settings = function (b) {
    this.settings = a.extend({}, this.settings, b), this.apply_settings();
  }, g.prototype.loading = function (b) {
    if (b === !1) this.$container.find(".ace-file-overlay").remove(), this.element.removeAttribute("readonly");else {
      var c = "string" == typeof b ? b : '<i class="overlay-content fa fa-spin fa-spinner orange2 fa-2x"></i>',
          d = this.$container.find(".ace-file-overlay");
      0 == d.length && (d = a('<div class="ace-file-overlay"></div>').appendTo(this.$container), d.on("click tap", function (a) {
        return a.stopImmediatePropagation(), a.preventDefault(), !1;
      }), this.element.setAttribute("readonly", "true")), d.empty().append(c);
    }
  };

  var h = function h() {
    var a = this,
        b = this.$element.parent();
    b.off("dragenter").on("dragenter", function (a) {
      a.preventDefault(), a.stopPropagation();
    }).off("dragover").on("dragover", function (a) {
      a.preventDefault(), a.stopPropagation();
    }).off("drop").on("drop", function (b) {
      if (b.preventDefault(), b.stopPropagation(), !a.disabled) {
        var c = b.originalEvent.dataTransfer,
            d = c.files;

        if (!a.multi && d.length > 1) {
          var e = [];
          e.push(d[0]), d = e;
        }

        return d = l.call(a, d, !0), d === !1 ? !1 : (a.$element.data("ace_input_method", "drop"), a.$element.data("ace_input_files", d), a.show_file_list(d, !0), a.$element.triggerHandler("change", [!0]), !0);
      }
    });
  },
      i = function i() {
    var a = this.element.files || [this.element.value];
    return a = l.call(this, a, !1), a === !1 ? !1 : (this.$element.data("ace_input_method", "select"), this.$element.data("ace_input_files", a), this.show_file_list(a, !0), !0);
  },
      j = function j(b) {
    var c = this,
        d = c.$label.find(".ace-file-name:last"),
        e = new a.Deferred(),
        h = function h(b, c) {
      d.prepend("<img class='middle' style='display:none;' />");
      var e = d.find("img:last").get(0);
      a(e).one("load", function () {
        i.call(null, e, c);
      }).one("error", function () {
        j.call(null, e);
      }), e.src = b;
    },
        i = function i(b, f) {
      var h = c.settings.previewSize;
      h || (c.settings.previewWidth || c.settings.previewHeight ? h = {
        previewWidth: c.settings.previewWidth,
        previewHeight: c.settings.previewHeight
      } : (h = 50, "large" == c.settings.thumbnail && (h = 150))), "fit" == c.settings.thumbnail ? h = d.width() : "number" == typeof h && (h = parseInt(Math.min(h, d.width())));
      var i = k(b, h);
      if (null == i) return a(this).remove(), void e.reject({
        code: g.error.THUMBNAIL_FAILED
      });
      var j = !0;

      if (f && f instanceof File) {
        f.width = i.width, f.height = i.height, c.$element.trigger("file.preview.ace", {
          file: f
        });
        var l;
        c.$element.trigger(l = new a.Event("file.preview.ace"), {
          file: f
        }), l.isDefaultPrevented() && (j = !1);
      }

      if (j) {
        var m = i.previewWidth,
            n = i.previewHeight;
        "small" == c.settings.thumbnail ? m = n = parseInt(Math.max(m, n)) : d.addClass("large"), a(b).css({
          "background-image": "url(" + i.src + ")",
          width: m,
          height: n
        }).data("thumb", i.src).attr({
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
        }).show();
      }

      e.resolve();
    },
        j = function j(a) {
      d.find("img").remove(), e.reject({
        code: g.error.IMAGE_LOAD_FAILED
      });
    };

    if (f && b instanceof File) {
      var l = new FileReader();
      l.onload = function (a) {
        h(a.target.result, b);
      }, l.onerror = function (a) {
        e.reject({
          code: g.error.FILE_LOAD_FAILED
        });
      }, l.readAsDataURL(b);
    } else b instanceof Object && b.hasOwnProperty("path") && h(b.path, null);

    return e.promise();
  },
      k = function k(b, c, d) {
    var e = b.width,
        f = b.height;
    e = e > 0 ? e : a(b).width(), f = f > 0 ? f : a(b).height();
    var g = !1,
        h = !1,
        i = !1;
    "number" == typeof c ? g = c : c instanceof Object && (c.previewWidth && !c.previewHeight ? i = c.previewWidth : c.previewHeight && !c.previewWidth ? h = c.previewHeight : c.previewWidth && c.previewHeight && (i = c.previewWidth, h = c.previewHeight)), g ? e > f ? (i = g, h = parseInt(f / e * i)) : (h = g, i = parseInt(e / f * h)) : !h && i ? h = parseInt(f / e * i) : h && !i && (i = parseInt(e / f * h));
    var j;

    try {
      var k = document.createElement("canvas");
      k.width = i, k.height = h;
      var l = k.getContext("2d");
      l.drawImage(b, 0, 0, e, f, 0, 0, i, h), j = k.toDataURL();
    } catch (m) {
      j = null;
    }

    return j ? (/^data\:image\/(png|jpe?g|gif);base64,[0-9A-Za-z\+\/\=]+$/.test(j) || (j = null), j ? {
      src: j,
      previewWidth: i,
      previewHeight: h,
      width: e,
      height: f
    } : null) : null;
  },
      l = function l(a, b) {
    var c = o.call(this, a, b);
    return -1 === c ? (this.reset_input(), !1) : c && 0 != c.length ? ((c instanceof Array || d && c instanceof FileList) && (a = c), c = !0, this.settings.before_change && (c = this.settings.before_change.call(this.element, a, b)), -1 === c ? (this.reset_input(), !1) : c && 0 != c.length ? ((c instanceof Array || d && c instanceof FileList) && (a = c), a) : (this.$element.data("ace_input_files") || this.reset_input(), !1)) : (this.$element.data("ace_input_files") || this.reset_input(), !1);
  },
      m = function m(a) {
    return a ? ("string" == typeof a && (a = [a]), 0 == a.length ? null : new RegExp(".(?:" + a.join("|") + ")$", "i")) : null;
  },
      n = function n(a) {
    return a ? ("string" == typeof a && (a = [a]), 0 == a.length ? null : new RegExp("^(?:" + a.join("|").replace(/\//g, "\\/") + ")$", "i")) : null;
  },
      o = function o(b, c) {
    var d = m(this.settings.allowExt),
        e = m(this.settings.denyExt),
        g = n(this.settings.allowMime),
        h = n(this.settings.denyMime),
        i = this.settings.maxSize || !1;
    if (!(d || e || g || h || i)) return !0;

    for (var j = [], k = {}, l = 0; l < b.length; l++) {
      var o = b[l],
          p = f ? o.name : o;
      if (!d || d.test(p)) {
        if (e && e.test(p)) "ext" in k || (k.ext = []), k.ext.push(p);else {
          var q;

          if (f) {
            if ((q = a.trim(o.type)).length > 0) {
              if (g && !g.test(q)) {
                "mime" in k || (k.mime = []), k.mime.push(p);
                continue;
              }

              if (h && h.test(q)) {
                "mime" in k || (k.mime = []), k.mime.push(p);
                continue;
              }
            }

            i && o.size > i ? ("size" in k || (k.size = []), k.size.push(p)) : j.push(o);
          } else j.push(o);
        }
      } else "ext" in k || (k.ext = []), k.ext.push(p);
    }

    if (j.length == b.length) return b;
    var r = {
      ext: 0,
      mime: 0,
      size: 0
    };
    "ext" in k && (r.ext = k.ext.length), "mime" in k && (r.mime = k.mime.length), "size" in k && (r.size = k.size.length);
    var s;
    return this.$element.trigger(s = new a.Event("file.error.ace"), {
      file_count: b.length,
      invalid_count: b.length - j.length,
      error_list: k,
      error_count: r,
      dropped: c
    }), s.isDefaultPrevented() ? -1 : j;
  };

  a.fn.aceFileInput = a.fn.ace_file_input = function (c, d) {
    var e,
        f = this.each(function () {
      var b = a(this),
          f = b.data("ace_file_input"),
          h = "object" == _typeof(c) && c;
      f || b.data("ace_file_input", f = new g(this, h)), "string" == typeof c && (e = f[c](d));
    });
    return e === b ? f : e;
  }, a.fn.ace_file_input.defaults = {
    style: !1,
    no_file: "No File ...",
    no_icon: "fa fa-upload",
    btn_choose: "Choose",
    btn_change: "Change",
    icon_remove: "fa fa-times",
    droppable: !1,
    thumbnail: !1,
    allowExt: null,
    denyExt: null,
    allowMime: null,
    denyMime: null,
    maxSize: !1,
    previewSize: !1,
    previewWidth: !1,
    previewHeight: !1,
    before_change: null,
    before_remove: null,
    preview_error: null
  };
}(window.jQuery), !function (a) {
  "use strict";

  var b = function b(_b, c) {
    this.$element = a(_b), this.options = a.extend({}, a.fn.bs_typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = a(this.options.menu), this.shown = !1, this.listen();
  };

  b.prototype = {
    constructor: b,
    select: function select() {
      var a = this.$menu.find(".active").attr("data-value");
      return this.$element.val(this.updater(a)).change(), this.hide();
    },
    updater: function updater(a) {
      return a;
    },
    show: function show() {
      var b = a.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      });
      return this.$menu.insertAfter(this.$element).css({
        top: b.top + b.height,
        left: b.left
      }).show(), this.shown = !0, this;
    },
    hide: function hide() {
      return this.$menu.hide(), this.shown = !1, this;
    },
    lookup: function lookup(b) {
      var c;
      return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (c = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, c ? this.process(c) : this);
    },
    process: function process(b) {
      var c = this;
      return b = a.grep(b, function (a) {
        return c.matcher(a);
      }), b = this.sorter(b), b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this;
    },
    matcher: function matcher(a) {
      return ~a.toLowerCase().indexOf(this.query.toLowerCase());
    },
    sorter: function sorter(a) {
      for (var b, c = [], d = [], e = []; b = a.shift();) {
        b.toLowerCase().indexOf(this.query.toLowerCase()) ? ~b.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
      }

      return c.concat(d, e);
    },
    highlighter: function highlighter(a) {
      var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      return a.replace(new RegExp("(" + b + ")", "ig"), function (a, b) {
        return "<strong>" + b + "</strong>";
      });
    },
    render: function render(b) {
      var c = this;
      return b = a(b).map(function (b, d) {
        return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0];
      }), b.first().addClass("active"), this.$menu.html(b), this;
    },
    next: function next(b) {
      var c = this.$menu.find(".active").removeClass("active"),
          d = c.next();
      d.length || (d = a(this.$menu.find("li")[0])), d.addClass("active");
    },
    prev: function prev(a) {
      var b = this.$menu.find(".active").removeClass("active"),
          c = b.prev();
      c.length || (c = this.$menu.find("li").last()), c.addClass("active");
    },
    listen: function listen() {
      this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this));
    },
    eventSupported: function eventSupported(a) {
      var b = (a in this.$element);
      return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), b;
    },
    move: function move(a) {
      if (this.shown) {
        switch (a.keyCode) {
          case 9:
          case 13:
          case 27:
            a.preventDefault();
            break;

          case 38:
            a.preventDefault(), this.prev();
            break;

          case 40:
            a.preventDefault(), this.next();
        }

        a.stopPropagation();
      }
    },
    keydown: function keydown(b) {
      this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [40, 38, 9, 13, 27]), this.move(b);
    },
    keypress: function keypress(a) {
      this.suppressKeyPressRepeat || this.move(a);
    },
    keyup: function keyup(a) {
      switch (a.keyCode) {
        case 40:
        case 38:
        case 16:
        case 17:
        case 18:
          break;

        case 9:
        case 13:
          if (!this.shown) return;
          this.select();
          break;

        case 27:
          if (!this.shown) return;
          this.hide();
          break;

        default:
          this.lookup();
      }

      a.stopPropagation(), a.preventDefault();
    },
    focus: function focus(a) {
      this.focused = !0;
    },
    blur: function blur(a) {
      this.focused = !1, !this.mousedover && this.shown && this.hide();
    },
    click: function click(a) {
      a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus();
    },
    mouseenter: function mouseenter(b) {
      this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active");
    },
    mouseleave: function mouseleave(a) {
      this.mousedover = !1, !this.focused && this.shown && this.hide();
    }
  };
  var c = a.fn.bs_typeahead;
  a.fn.bs_typeahead = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs_typeahead"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs_typeahead", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.bs_typeahead.defaults = {
    source: [],
    items: 8,
    menu: '<ul class="typeahead dropdown-menu"></ul>',
    item: '<li><a href="#"></a></li>',
    minLength: 1
  }, a.fn.bs_typeahead.Constructor = b, a.fn.bs_typeahead.noConflict = function () {
    return a.fn.bs_typeahead = c, this;
  }, a(document).on("focus.bs_typeahead.data-api", '[data-provide="bs_typeahead"]', function (b) {
    var c = a(this);
    c.data("bs_typeahead") || c.bs_typeahead(c.data());
  });
}(window.jQuery), function (a, b) {
  a.fn.ace_wysiwyg = function (b, c) {
    var d = a.extend({
      speech_button: !0,
      wysiwyg: {}
    }, b),
        e = ["#ac725e", "#d06b64", "#f83a22", "#fa573c", "#ff7537", "#ffad46", "#42d692", "#16a765", "#7bd148", "#b3dc6c", "#fbe983", "#fad165", "#92e1c0", "#9fe1e7", "#9fc6e7", "#4986e7", "#9a9cff", "#b99aff", "#c2c2c2", "#cabdbf", "#cca6ac", "#f691b2", "#cd74e6", "#a47ae2", "#444444"],
        f = {
      font: {
        values: ["Arial", "Courier", "Comic Sans MS", "Helvetica", "Open Sans", "Tahoma", "Verdana"],
        icon: "fa fa-font",
        title: "Font"
      },
      fontSize: {
        values: {
          5: "Huge",
          3: "Normal",
          1: "Small"
        },
        icon: "fa fa-text-height",
        title: "Font Size"
      },
      bold: {
        icon: "fa fa-bold",
        title: "Bold (Ctrl/Cmd+B)"
      },
      italic: {
        icon: "fa fa-italic",
        title: "Italic (Ctrl/Cmd+I)"
      },
      strikethrough: {
        icon: "fa fa-strikethrough",
        title: "Strikethrough"
      },
      underline: {
        icon: "fa fa-underline",
        title: "Underline"
      },
      insertunorderedlist: {
        icon: "fa fa-list-ul",
        title: "Bullet list"
      },
      insertorderedlist: {
        icon: "fa fa-list-ol",
        title: "Number list"
      },
      outdent: {
        icon: "fa fa-outdent",
        title: "Reduce indent (Shift+Tab)"
      },
      indent: {
        icon: "fa fa-indent",
        title: "Indent (Tab)"
      },
      justifyleft: {
        icon: "fa fa-align-left",
        title: "Align Left (Ctrl/Cmd+L)"
      },
      justifycenter: {
        icon: "fa fa-align-center",
        title: "Center (Ctrl/Cmd+E)"
      },
      justifyright: {
        icon: "fa fa-align-right",
        title: "Align Right (Ctrl/Cmd+R)"
      },
      justifyfull: {
        icon: "fa fa-align-justify",
        title: "Justify (Ctrl/Cmd+J)"
      },
      createLink: {
        icon: "fa fa-link",
        title: "Hyperlink",
        button_text: "Add",
        placeholder: "URL",
        button_class: "btn-primary"
      },
      unlink: {
        icon: "fa fa-chain-broken",
        title: "Remove Hyperlink"
      },
      insertImage: {
        icon: "fa fa-picture-o",
        title: "Insert picture",
        button_text: '<i class="' + ace.vars.icon + 'fa fa-file"></i> Choose Image &hellip;',
        placeholder: "Image URL",
        button_insert: "Insert",
        button_class: "btn-success",
        button_insert_class: "btn-primary",
        choose_file: !0
      },
      foreColor: {
        values: e,
        title: "Change Color"
      },
      backColor: {
        values: e,
        title: "Change Background Color"
      },
      undo: {
        icon: "fa fa-undo",
        title: "Undo (Ctrl/Cmd+Z)"
      },
      redo: {
        icon: "fa fa-repeat",
        title: "Redo (Ctrl/Cmd+Y)"
      },
      viewSource: {
        icon: "fa fa-code",
        title: "View Source"
      }
    },
        g = d.toolbar || ["font", null, "fontSize", null, "bold", "italic", "strikethrough", "underline", null, "insertunorderedlist", "insertorderedlist", "outdent", "indent", null, "justifyleft", "justifycenter", "justifyright", "justifyfull", null, "createLink", "unlink", null, "insertImage", null, "foreColor", null, "undo", "redo", null, "viewSource"];
    return this.each(function () {
      var b = ' <div class="wysiwyg-toolbar btn-toolbar center"> <div class="btn-group"> ';

      for (var c in g) {
        if (g.hasOwnProperty(c)) {
          var e = g[c];

          if (null === e) {
            b += ' </div> <div class="btn-group"> ';
            continue;
          }

          if ("string" == typeof e && e in f) e = f[e], e.name = g[c];else {
            if (!("object" == _typeof(e) && e.name in f)) continue;
            e = a.extend(f[e.name], e);
          }
          var h = "className" in e ? e.className : "btn-default";

          switch (e.name) {
            case "font":
              b += ' <a class="btn btn-sm ' + h + ' dropdown-toggle" data-toggle="dropdown" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i><i class="' + ace.vars.icon + 'fa fa-angle-down icon-on-right"></i></a> ', b += ' <ul class="dropdown-menu dropdown-light dropdown-caret">';

              for (var i in e.values) {
                e.values.hasOwnProperty(i) && (b += ' <li><a data-edit="fontName ' + e.values[i] + '" style="font-family:\'' + e.values[i] + "'\">" + e.values[i] + "</a></li> ");
              }

              b += " </ul>";
              break;

            case "fontSize":
              b += ' <a class="btn btn-sm ' + h + ' dropdown-toggle" data-toggle="dropdown" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i>&nbsp;<i class="' + ace.vars.icon + 'fa fa-angle-down icon-on-right"></i></a> ', b += ' <ul class="dropdown-menu dropdown-light dropdown-caret"> ';

              for (var j in e.values) {
                e.values.hasOwnProperty(j) && (b += ' <li><a data-edit="fontSize ' + j + '"><font size="' + j + '">' + e.values[j] + "</font></a></li> ");
              }

              b += " </ul> ";
              break;

            case "createLink":
              b += ' <div class="btn-group"> <a class="btn btn-sm ' + h + ' dropdown-toggle" data-toggle="dropdown" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i></a> ', b += ' <div class="dropdown-menu dropdown-caret dropdown-menu-right">							 <div class="input-group">								<input class="form-control" placeholder="' + e.placeholder + '" type="text" data-edit="' + e.name + '" />								<span class="input-group-btn">									<button class="btn btn-sm ' + e.button_class + '" type="button">' + e.button_text + "</button>								</span>							 </div>						</div> </div>";
              break;

            case "insertImage":
              b += ' <div class="btn-group"> <a class="btn btn-sm ' + h + ' dropdown-toggle" data-toggle="dropdown" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i></a> ', b += ' <div class="dropdown-menu dropdown-caret dropdown-menu-right">							 <div class="input-group">								<input class="form-control" placeholder="' + e.placeholder + '" type="text" data-edit="' + e.name + '" />								<span class="input-group-btn">									<button class="btn btn-sm ' + e.button_insert_class + '" type="button">' + e.button_insert + "</button>								</span>							 </div>", e.choose_file && "FileReader" in window && (b += '<div class="space-2"></div>							 <label class="center block no-margin-bottom">								<button class="btn btn-sm ' + e.button_class + ' wysiwyg-choose-file" type="button">' + e.button_text + '</button>								<input type="file" data-edit="' + e.name + '" />							  </label>'), b += " </div> </div>";
              break;

            case "foreColor":
            case "backColor":
              b += ' <select class="hide wysiwyg_colorpicker" title="' + e.title + '"> ', a.each(e.values, function (a, c) {
                b += ' <option value="' + c + '">' + c + "</option> ";
              }), b += " </select> ", b += ' <input style="display:none;" disabled class="hide" type="text" data-edit="' + e.name + '" /> ';
              break;

            case "viewSource":
              b += ' <a class="btn btn-sm ' + h + '" data-view="source" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i></a> ';
              break;

            default:
              b += ' <a class="btn btn-sm ' + h + '" data-edit="' + e.name + '" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i></a> ';
          }
        }
      }

      b += " </div> ";
      var k;
      d.speech_button && "onwebkitspeechchange" in (k = document.createElement("input")) && (b += ' <input class="wysiwyg-speech-input" type="text" data-edit="inserttext" x-webkit-speech />'), k = null, b += " </div> ", b = d.toolbar_place ? d.toolbar_place.call(this, b) : a(this).before(b).prev(), a.fn.tooltip && b.find("a[title]").tooltip({
        animation: !1,
        container: "body"
      }), b.find(".dropdown-menu input[type=text]").on("click", function () {
        return !1;
      }).on("change", function () {
        a(this).closest(".dropdown-menu").siblings(".dropdown-toggle").dropdown("toggle");
      }).on("keydown", function (b) {
        27 == b.which ? (this.value = "", a(this).change()) : 13 == b.which && (b.preventDefault(), b.stopPropagation(), a(this).change());
      }), b.find("input[type=file]").prev().on(ace.click_event, function (b) {
        a(this).next().click();
      }), b.find(".wysiwyg_colorpicker").each(function () {
        var b = a(this).ace_colorpicker({
          pull_right: !0
        }).change(function () {
          a(this).nextAll("input").eq(0).val(this.value).change();
        }).next().find(".btn-colorpicker");
        a.fn.tooltip && b.tooltip({
          title: this.title,
          animation: !1,
          container: "body"
        });
      });
      var l = a(this),
          m = !1;
      b.find("a[data-view=source]").on("click", function (b) {
        if (b.preventDefault(), m) {
          var c = l.next();
          l.html(c.val()).show(), c.remove(), a(this).removeClass("active");
        } else a("<textarea />").css({
          width: l.outerWidth(),
          height: l.outerHeight()
        }).val(l.html()).insertAfter(l), l.hide(), a(this).addClass("active");

        m = !m;
      });
      var n = a.extend({}, {
        activeToolbarClass: "active",
        toolbarSelector: b
      }, d.wysiwyg || {});
      a(this).wysiwyg(n);
    }), this;
  };
}(window.jQuery), function (a, b) {
  function c(b, c) {
    var d = ace.helper.getAttrSettings(b, a.fn.ace_spinner.defaults),
        e = a.extend({}, a.fn.ace_spinner.defaults, c, d),
        f = e.max;
    f = ("" + f).length;
    var g = parseInt(Math.max(20 * f + 40, 90)),
        h = a(b),
        i = "btn-sm",
        j = 2;
    h.hasClass("input-sm") ? (i = "btn-xs", j = 1) : h.hasClass("input-lg") && (i = "btn-lg", j = 3), 2 == j ? g += 25 : 3 == j && (g += 50), h.addClass("spinbox-input form-control text-center").wrap('<div class="ace-spinner middle">');
    var k = h.closest(".ace-spinner").spinbox(e).wrapInner("<div class='input-group'></div>"),
        l = k.data("fu.spinbox");
    e.on_sides ? (h.before('<div class="spinbox-buttons input-group-btn">					<button type="button" class="btn spinbox-down ' + i + " " + e.btn_down_class + '">						<i class="icon-only ' + ace.vars.icon + e.icon_down + '"></i>					</button>				</div>').after('<div class="spinbox-buttons input-group-btn">					<button type="button" class="btn spinbox-up ' + i + " " + e.btn_up_class + '">						<i class="icon-only ' + ace.vars.icon + e.icon_up + '"></i>					</button>				</div>'), k.addClass("touch-spinner"), k.css("width", g + "px")) : (h.after('<div class="spinbox-buttons input-group-btn">					<button type="button" class="btn spinbox-up ' + i + " " + e.btn_up_class + '">						<i class="icon-only ' + ace.vars.icon + e.icon_up + '"></i>					</button>					<button type="button" class="btn spinbox-down ' + i + " " + e.btn_down_class + '">						<i class="icon-only ' + ace.vars.icon + e.icon_down + '"></i>					</button>				</div>'), ace.vars.touch || e.touch_spinner ? (k.addClass("touch-spinner"), k.css("width", g + "px")) : (h.next().addClass("btn-group-vertical"), k.css("width", g + "px"))), k.on("changed", function () {
      h.trigger("change");
    }), this._call = function (a, b) {
      l[a](b);
    };
  }

  a.fn.ace_spinner = function (d, e) {
    var f,
        g = this.each(function () {
      var b = a(this),
          g = b.data("ace_spinner"),
          h = "object" == _typeof(d) && d;
      g || (h = a.extend({}, a.fn.ace_spinner.defaults, d), b.data("ace_spinner", g = new c(this, h))), "string" == typeof d && (f = g._call(d, e));
    });
    return f === b ? g : f;
  }, a.fn.ace_spinner.defaults = {
    icon_up: "fa fa-chevron-up",
    icon_down: "fa fa-chevron-down",
    on_sides: !1,
    btn_up_class: "",
    btn_down_class: "",
    max: 999,
    touch_spinner: !1
  };
}(window.jQuery), function (a, b) {
  a.fn.aceTree = a.fn.ace_tree = function (b) {
    var c = {
      "open-icon": ace.vars.icon + "fa fa-folder-open",
      "close-icon": ace.vars.icon + "fa fa-folder",
      "toggle-icon": ace.vars.icon + "fa fa-play",
      "selected-icon": ace.vars.icon + "fa fa-check",
      "unselected-icon": ace.vars.icon + "fa fa-times",
      "base-icon": ace.vars.icon + "fa",
      "folder-open-icon": "fa fa-plus-square-o",
      "folder-close-icon": "fa fa-plus-minus-o",
      loadingHTML: "Loading..."
    };
    return this.each(function () {
      var d = ace.helper.getAttrSettings(this, c),
          e = a.extend({}, c, b, d),
          f = a(this);
      f.addClass("tree").attr("role", "tree"), f.html('<li class="tree-branch hide" data-template="treebranch" role="treeitem" aria-expanded="false">				' + (e.folderSelect ? '<i class="icon-caret ' + e["folder-open-icon"] + '"></i>&nbsp;' : "") + '				<div class="tree-branch-header">					<span class="tree-branch-name">						<i class="icon-folder ' + e["close-icon"] + '"></i>						<span class="tree-label"></span>					</span>				</div>				<ul class="tree-branch-children" role="group"></ul>				<div class="tree-loader" role="alert">' + e.loadingHTML + '</div>			</li>			<li class="tree-item hide" data-template="treeitem" role="treeitem">				<span class="tree-item-name">				  ' + (null == e["unselected-icon"] ? "" : '<i class="icon-item ' + e["unselected-icon"] + '"></i>') + '				  <span class="tree-label"></span>				</span>			</li>'), f.addClass(1 == e.selectable ? "tree-selectable" : "tree-unselectable"), f.tree(e);
    }), this;
  };
}(window.jQuery), function (a, b) {
  a.fn.aceWizard = a.fn.ace_wizard = function (b) {
    return this.each(function () {
      var c = a(this);
      c.wizard(), ace.vars.old_ie && c.find("ul.steps > li").last().addClass("last-child");
      var d = b && b.buttons ? a(b.buttons) : c.siblings(".wizard-actions").eq(0),
          e = c.data("fu.wizard");
      e.$prevBtn.remove(), e.$nextBtn.remove(), e.$prevBtn = d.find(".btn-prev").eq(0).on(ace.click_event, function () {
        e.previous();
      }).attr("disabled", "disabled"), e.$nextBtn = d.find(".btn-next").eq(0).on(ace.click_event, function () {
        e.next();
      }).removeAttr("disabled"), e.nextText = e.$nextBtn.text();
      var f = b && (b.selectedItem && b.selectedItem.step || b.step);
      f && (e.currentStep = f, e.setState());
    }), this;
  };
}(window.jQuery), function (a, b) {
  function c(b, c) {
    var e = this,
        f = a(b),
        g = "right",
        h = !1,
        i = f.hasClass("fade"),
        j = ace.helper.getAttrSettings(b, a.fn.ace_aside.defaults);
    if (this.settings = a.extend({}, a.fn.ace_aside.defaults, c, j), !this.settings.background || c.scroll_style || j.scroll_style || (this.settings.scroll_style = "scroll-white no-track"), this.container = this.settings.container, this.container) try {
      a(this.container).get(0) == document.body && (this.container = null);
    } catch (k) {}
    this.container && (this.settings.backdrop = !1, f.addClass("aside-contained"));
    var l = f.find(".modal-dialog"),
        m = f.find(".modal-content"),
        n = 300;
    this.initiate = function () {
      b.className = b.className.replace(/(\s|^)aside\-(right|top|left|bottom)(\s|$)/gi, "$1$3"), g = this.settings.placement, g && (g = a.trim(g.toLowerCase())), g && /right|top|left|bottom/.test(g) || (g = "right"), f.attr("data-placement", g), f.addClass("aside-" + g), /right|left/.test(g) ? (h = !0, f.addClass("aside-vc")) : f.addClass("aside-hz"), this.settings.fixed && f.addClass("aside-fixed"), this.settings.background && f.addClass("aside-dark"), this.settings.offset && f.addClass("navbar-offset"), this.settings.transition || f.addClass("transition-off"), f.addClass("aside-hidden"), this.insideContainer(), l = f.find(".modal-dialog"), m = f.find(".modal-content"), this.settings.body_scroll || f.on("mousewheel.aside DOMMouseScroll.aside touchmove.aside pointermove.aside", function (b) {
        return a.contains(m[0], b.target) ? void 0 : (b.preventDefault(), !1);
      }), 0 == this.settings.backdrop && f.addClass("no-backdrop");
    }, this.show = function () {
      if (0 == this.settings.backdrop) try {
        f.data("bs.modal").$backdrop.remove();
      } catch (b) {}
      this.container ? a(this.container).addClass("overflow-hidden") : f.css("position", "fixed"), f.removeClass("aside-hidden");
    }, this.hide = function () {
      this.container && (this.container.addClass("overflow-hidden"), ace.vars.firefox && b.offsetHeight), o(), ace.vars.transition && !i && f.one("bsTransitionEnd", function () {
        f.addClass("aside-hidden"), f.css("position", ""), e.container && e.container.removeClass("overflow-hidden");
      }).emulateTransitionEnd(n);
    }, this.shown = function () {
      if (o(), a("body").removeClass("modal-open").css("padding-right", ""), "invisible" == this.settings.backdrop) try {
        f.data("bs.modal").$backdrop.css("opacity", 0);
      } catch (b) {}
      var c = h ? m.height() : l.height();
      ace.vars.touch ? m.addClass("overflow-scroll").css("max-height", c + "px") : m.hasClass("ace-scroll") || m.ace_scroll({
        size: c,
        reset: !0,
        mouseWheelLock: !0,
        lockAnyway: !this.settings.body_scroll,
        styleClass: this.settings.scroll_style,
        observeContent: !0,
        hideOnIdle: !ace.vars.old_ie,
        hideDelay: 1500
      }), d.off("resize.modal.aside").on("resize.modal.aside", function () {
        if (ace.vars.touch) m.css("max-height", (h ? m.height() : l.height()) + "px");else {
          m.ace_scroll("disable");
          var a = h ? m.height() : l.height();
          m.ace_scroll("update", {
            size: a
          }).ace_scroll("enable").ace_scroll("reset");
        }
      }).triggerHandler("resize.modal.aside"), e.container && ace.vars.transition && !i && f.one("bsTransitionEnd", function () {
        e.container.removeClass("overflow-hidden");
      }).emulateTransitionEnd(n);
    }, this.hidden = function () {
      d.off(".aside"), ace.vars.transition && !i || (f.addClass("aside-hidden"), f.css("position", ""));
    }, this.insideContainer = function () {
      var b = a(".main-container"),
          c = f.find(".modal-dialog");

      if (c.css({
        right: "",
        left: ""
      }), b.hasClass("container")) {
        var e = !1;
        1 == h && (c.css(g, parseInt((d.width() - b.width()) / 2)), e = !0), e && ace.vars.firefox && ace.helper.redraw(b[0]);
      }
    }, this.flip = function () {
      var a = {
        right: "left",
        left: "right",
        top: "bottom",
        bottom: "top"
      };
      f.removeClass("aside-" + g).addClass("aside-" + a[g]), g = a[g];
    };

    var o = function o() {
      var a = f.find(".aside-trigger");

      if (0 != a.length) {
        a.toggleClass("open");
        var b = a.find(ace.vars[".icon"]);
        0 != b.length && b.toggleClass(b.attr("data-icon1") + " " + b.attr("data-icon2"));
      }
    };

    this.initiate(), this.container && (this.container = a(this.container)), f.appendTo(this.container || "body");
  }

  var d = a(window);
  a(document).on("show.bs.modal", ".modal.aside", function (b) {
    a(".aside.in").modal("hide"), a(this).ace_aside("show");
  }).on("hide.bs.modal", ".modal.aside", function (b) {
    a(this).ace_aside("hide");
  }).on("shown.bs.modal", ".modal.aside", function (b) {
    a(this).ace_aside("shown");
  }).on("hidden.bs.modal", ".modal.aside", function (b) {
    a(this).ace_aside("hidden");
  }), a(window).on("resize.aside_container", function () {
    a(".modal.aside").ace_aside("insideContainer");
  }), a(document).on("settings.ace.aside", function (b, c) {
    "main_container_fixed" == c && a(".modal.aside").ace_aside("insideContainer");
  }), a.fn.aceAside = a.fn.ace_aside = function (d, e) {
    var f,
        g = this.each(function () {
      var b = a(this),
          g = b.data("ace_aside"),
          h = "object" == _typeof(d) && d;
      g || b.data("ace_aside", g = new c(this, h)), "string" == typeof d && "function" == typeof g[d] && (f = e instanceof Array ? g[d].apply(g, e) : g[d](e));
    });
    return f === b ? g : f;
  }, a.fn.ace_aside.defaults = {
    fixed: !1,
    background: !1,
    offset: !1,
    body_scroll: !1,
    transition: !0,
    scroll_style: "scroll-dark no-track",
    container: null,
    backdrop: !1,
    placement: "right"
  };
}(window.jQuery);

/***/ }),

/***/ "./resources/assests/js/ace.min.js":
/*!*****************************************!*\
  !*** ./resources/assests/js/ace.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Ace v1.4.0
 */
if ("undefined" == typeof jQuery) throw new Error("Ace's JavaScript requires jQuery");
!function (a) {
  "ace" in window || (window.ace = {}), "helper" in window.ace || (window.ace.helper = {}), "vars" in window.ace || (window.ace.vars = {}), window.ace.vars.icon = " ace-icon ", window.ace.vars[".icon"] = ".ace-icon", ace.vars.touch = "ontouchstart" in window;
  var b = navigator.userAgent;
  ace.vars.webkit = !!b.match(/AppleWebKit/i), ace.vars.safari = !!b.match(/Safari/i) && !b.match(/Chrome/i), ace.vars.android = ace.vars.safari && !!b.match(/Android/i), ace.vars.ios_safari = !!b.match(/OS ([4-9])(_\d)+ like Mac OS X/i) && !b.match(/CriOS/i), ace.vars.ie = window.navigator.msPointerEnabled || document.all && document.querySelector, ace.vars.old_ie = document.all && !document.addEventListener, ace.vars.very_old_ie = document.all && !document.querySelector, ace.vars.firefox = "MozAppearance" in document.documentElement.style, ace.vars.non_auto_fixed = ace.vars.android || ace.vars.ios_safari, ace.click_event = ace.vars.touch && jQuery.fn.tap ? "tap" : "click";
}(), function (a, b) {
  a.unCamelCase = function (a) {
    return a.replace(/([a-z])([A-Z])/g, function (a, b, c) {
      return b + "-" + c.toLowerCase();
    });
  }, a.strToVal = function (a) {
    var b = a.match(/^(?:(true)|(false)|(null)|(\-?[\d]+(?:\.[\d]+)?)|(\[.*\]|\{.*\}))$/i),
        c = a;
    if (b) if (b[1]) c = !0;else if (b[2]) c = !1;else if (b[3]) c = null;else if (b[4]) c = parseFloat(a);else if (b[5]) try {
      c = JSON.parse(a);
    } catch (d) {}
    return c;
  }, a.getAttrSettings = function (b, c, d) {
    if (b) {
      var e = c instanceof Array ? 1 : 2,
          d = d ? d.replace(/([^\-])$/, "$1-") : "";
      d = "data-" + d;
      var f = {};

      for (var g in c) {
        if (c.hasOwnProperty(g)) {
          var h,
              i = 1 == e ? c[g] : g,
              j = a.unCamelCase(i.replace(/[^A-Za-z0-9]{1,}/g, "-")).toLowerCase();
          if (!(h = b.getAttribute(d + j))) continue;
          f[i] = a.strToVal(h);
        }
      }

      return f;
    }
  }, a.scrollTop = function () {
    return document.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
  }, a.winHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  }, a.redraw = function (a, b) {
    if (a) {
      var c = a.style.display;
      a.style.display = "none", a.offsetHeight, b !== !0 ? a.style.display = c : setTimeout(function () {
        a.style.display = c;
      }, 10);
    }
  };
}(ace.helper), jQuery(function (a) {
  try {
    ace.demo.init();
  } catch (b) {}
}), function (a, b) {
  ace.demo = {
    functions: {},
    init: function init(a) {
      var a = !!a && !0;
      if ("undefined" == typeof requirejs || a) for (var b in ace.demo.functions) {
        ace.demo.functions.hasOwnProperty(b) && ace.demo.functions[b]();
      }
    }
  }, ace.demo.functions.basics = function () {
    ace.vars.non_auto_fixed && a("body").addClass("mob-safari"), ace.vars.transition = ace.vars.animation || !!a.support.transition;
  }, ace.demo.functions.enableSidebar = function () {
    var b = a(".sidebar");
    a.fn.ace_sidebar && b.ace_sidebar(), a.fn.ace_sidebar_scroll && b.ace_sidebar_scroll({
      include_toggle: ace.vars.safari || ace.vars.ios_safari
    }), a.fn.ace_sidebar_hover && b.ace_sidebar_hover({
      sub_hover_delay: 750,
      sub_scroll_style: "no-track scroll-thin scroll-margin scroll-visible"
    });
  }, ace.demo.functions.enableDemoAjax = function () {
    if (a.fn.ace_ajax) {
      window.Pace && (window.paceOptions = {
        ajax: !0,
        document: !0,
        eventLag: !1
      });
      var b = {
        close_active: !0,
        close_mobile_menu: "#sidebar",
        close_dropdowns: !0,
        default_url: "page/index",
        content_url: function content_url(a) {
          if (!a.match(/^page\//)) return !1;
          var b = document.location.pathname;
          return b.match(/(\/ajax\/)(index\.html)?/) ? b.replace(/(\/ajax\/)(index\.html)?/, "/ajax/content/" + a.replace(/^page\//, "") + ".html") : b + "?" + a.replace(/\//, "=");
        }
      };
      b.loading_overlay = "body", a("[data-ajax-content=true]").ace_ajax(b), a(window).on("error.ace_ajax", function () {
        a("[data-ajax-content=true]").each(function () {
          var b = a(this);
          b.ace_ajax("working") && (window.Pace && Pace.running && Pace.stop(), b.ace_ajax("stopLoading", !0));
        });
      });
    }
  }, ace.demo.functions.handleScrollbars = function () {
    var b = !!a.fn.ace_scroll;
    b && a(".dropdown-content").ace_scroll({
      reset: !1,
      mouseWheelLock: !0
    }), b && !ace.vars.old_ie && (a(window).on("resize.reset_scroll", function () {
      a(".ace-scroll:not(.scroll-disabled)").not(":hidden").ace_scroll("reset");
    }), b && a(document).on("settings.ace.reset_scroll", function (b, c) {
      "sidebar_collapsed" == c && a(".ace-scroll:not(.scroll-disabled)").not(":hidden").ace_scroll("reset");
    }));
  }, ace.demo.functions.dropdownAutoPos = function () {
    a(document).on("click.dropdown.pos", '.dropdown-toggle[data-position="auto"]', function () {
      var b = a(this).offset(),
          c = a(this.parentNode);
      parseInt(b.top + a(this).height()) + 50 > ace.helper.scrollTop() + ace.helper.winHeight() - c.find(".dropdown-menu").eq(0).height() ? c.addClass("dropup") : c.removeClass("dropup");
    });
  }, ace.demo.functions.navbarHelpers = function () {
    a('.ace-nav [class*="icon-animated-"]').closest("a").one("click", function () {
      var b = a(this).find('[class*="icon-animated-"]').eq(0),
          c = b.attr("class").match(/icon\-animated\-([\d\w]+)/);
      b.removeClass(c[0]);
    }), a(document).on("click", ".dropdown-navbar .nav-tabs", function (b) {
      b.stopPropagation();
      var c;
      b.target;
      (c = a(b.target).closest("[data-toggle=tab]")) && c.length > 0 && (c.tab("show"), b.preventDefault(), a(window).triggerHandler("resize.navbar.dropdown"));
    });
  }, ace.demo.functions.sidebarTooltips = function () {
    a(".sidebar .nav-list .badge[title],.sidebar .nav-list .badge[title]").each(function () {
      var b = a(this).attr("class").match(/tooltip\-(?:\w+)/);
      b = b ? b[0] : "tooltip-error", a(this).tooltip({
        placement: function placement(b, c) {
          var d = a(c).offset();
          return parseInt(d.left) < parseInt(document.body.scrollWidth / 2) ? "right" : "left";
        },
        container: "body",
        template: '<div class="tooltip ' + b + '"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
      });
    });
  }, ace.demo.functions.someBrowserFix = function () {
    if (ace.vars.webkit) {
      var b = a(".ace-nav").get(0);
      b && a(window).on("resize.webkit_fix", function () {
        ace.helper.redraw(b);
      });
    }

    ace.vars.ios_safari && a(document).on("ace.settings.ios_fix", function (b, c, d) {
      "navbar_fixed" == c && (a(document).off("focus.ios_fix blur.ios_fix", "input,textarea,.wysiwyg-editor"), 1 == d && a(document).on("focus.ios_fix", "input,textarea,.wysiwyg-editor", function () {
        a(window).on("scroll.ios_fix", function () {
          var b = a("#navbar").get(0);
          b && ace.helper.redraw(b);
        });
      }).on("blur.ios_fix", "input,textarea,.wysiwyg-editor", function () {
        a(window).off("scroll.ios_fix");
      }));
    }).triggerHandler("ace.settings.ios_fix", ["navbar_fixed", "fixed" == a("#navbar").css("position")]);
  }, ace.demo.functions.bsCollapseToggle = function () {
    a(document).on("hide.bs.collapse show.bs.collapse", function (b) {
      var c = b.target.getAttribute("id"),
          d = a('a[href*="#' + c + '"]');
      0 == d.length && (d = a('a[data-target*="#' + c + '"]')), 0 != d.length && d.find(ace.vars[".icon"]).each(function () {
        var c,
            d = a(this),
            e = null,
            f = null;
        return (e = d.attr("data-icon-show")) ? f = d.attr("data-icon-hide") : (c = d.attr("class").match(/fa\-(.*)\-(up|down)/)) && (e = "fa-" + c[1] + "-down", f = "fa-" + c[1] + "-up"), e ? ("show" == b.type ? d.removeClass(e).addClass(f) : d.removeClass(f).addClass(e), !1) : void 0;
      });
    });
  }, ace.demo.functions.smallDeviceDropdowns = function () {
    function b() {
      var b = a(this).find("> .dropdown-menu");

      if ("fixed" == b.css("position")) {
        var d = parseInt(a(window).width()),
            e = d > 320 ? 60 : d > 240 ? 40 : 30,
            f = parseInt(d) - e,
            g = parseInt(a(window).height()) - 30,
            h = parseInt(Math.min(f, 320));
        b.css("width", h);
        var i = !1,
            j = 0,
            k = b.find(".tab-pane.active .dropdown-content.ace-scroll");
        0 == k.length ? k = b.find(".dropdown-content.ace-scroll") : i = !0;
        var l = k.closest(".dropdown-menu"),
            m = b[0].scrollHeight;

        if (1 == k.length) {
          var n = k.find(".scroll-content")[0];
          n && (m = n.scrollHeight), j += l.find(".dropdown-header").outerHeight(), j += l.find(".dropdown-footer").outerHeight();
          var o = l.closest(".tab-content");
          0 != o.length && (j += o.siblings(".nav-tabs").eq(0).height());
        }

        var p = parseInt(Math.min(g, 480, m + j)),
            q = parseInt(Math.abs((f + e - h) / 2)),
            r = parseInt(Math.abs((g + 30 - p) / 2)),
            s = parseInt(b.css("z-index")) || 0;

        if (b.css({
          height: p,
          left: q,
          right: "auto",
          top: r - (i ? 3 : 1)
        }), 1 == k.length && (ace.vars.touch ? k.ace_scroll("disable").css("max-height", p - j).addClass("overflow-scroll") : k.ace_scroll("update", {
          size: p - j
        }).ace_scroll("enable").ace_scroll("reset")), b.css("height", p + (i ? 7 : 2)), b.hasClass("user-menu")) {
          b.css("height", "");
          var t = a(this).find(".user-info");
          1 == t.length && "fixed" == t.css("position") ? t.css({
            left: q,
            right: "auto",
            top: r,
            width: h - 2,
            "max-width": h - 2,
            "z-index": s + 1
          }) : t.css({
            left: "",
            right: "",
            top: "",
            width: "",
            "max-width": "",
            "z-index": ""
          });
        }

        a(this).closest(".navbar.navbar-fixed-top").css("z-index", s);
      } else 0 != b.length && c.call(this, b);
    }

    function c(b) {
      if (b = b || a(this).find("> .dropdown-menu"), b.length > 0 && (b.css({
        width: "",
        height: "",
        left: "",
        right: "",
        top: ""
      }).find(".dropdown-content").each(function () {
        ace.vars.touch && a(this).css("max-height", "").removeClass("overflow-scroll");
        var b = parseInt(a(this).attr("data-size") || 0) || a.fn.ace_scroll.defaults.size;
        a(this).ace_scroll("update", {
          size: b
        }).ace_scroll("enable").ace_scroll("reset");
      }), b.hasClass("user-menu"))) {
        a(this).find(".user-info").css({
          left: "",
          right: "",
          top: "",
          width: "",
          "max-width": "",
          "z-index": ""
        });
      }

      a(this).closest(".navbar").css("z-index", "");
    }

    ace.vars.old_ie || a(document).on("shown.bs.dropdown.navbar", ".ace-nav > li.dropdown-modal", function (c) {
      b.call(this);
      var d = this;
      a(window).on("resize.navbar.dropdown", function () {
        b.call(d);
      });
    }).on("hidden.bs.dropdown.navbar", ".ace-nav > li.dropdown-modal", function (b) {
      a(window).off("resize.navbar.dropdown"), c.call(this);
    });
  };
}(jQuery), function (a, b) {
  var c = a(".btn-scroll-up");

  if (c.length > 0) {
    var d = !1;
    a(window).on("scroll.scroll_btn", function () {
      var a = ace.helper.scrollTop(),
          b = ace.helper.winHeight(),
          e = document.body.scrollHeight;
      a > parseInt(b / 4) || a > 0 && e >= b && b + a >= e - 1 ? d || (c.addClass("display"), d = !0) : d && (c.removeClass("display"), d = !1);
    }).triggerHandler("scroll.scroll_btn"), c.on(ace.click_event, function () {
      var b = Math.min(500, Math.max(100, parseInt(ace.helper.scrollTop() / 3)));
      return a("html,body").animate({
        scrollTop: 0
      }, b), !1;
    });
  }
}(window.jQuery), function (a, b) {
  function c(b, c) {
    function e(b) {
      var c = "",
          d = a(".breadcrumb");

      if (d.length > 0 && d.is(":visible")) {
        d.find("> li:not(:first-child)").remove();
        var e = 0;
        b.parents(".nav li").each(function () {
          var b = a(this).find("> a"),
              f = b.clone();
          f.find("i,.fa,.glyphicon,.ace-icon,.menu-icon,.badge,.label").remove();
          var g = f.text();
          f.remove();
          var h = b.attr("href");

          if (0 == e) {
            var i = a('<li class="active"></li>').appendTo(d);
            i.text(g), c = g;
          } else {
            var i = a("<li><a /></li>").insertAfter(d.find("> li:first-child"));
            i.find("a").attr("href", h).text(g);
          }

          e++;
        });
      }

      return c;
    }

    function f(b) {
      var c = g.find(".ajax-append-title");
      if (c.length > 0) document.title = c.text(), c.remove();else if (b.length > 0) {
        var d = a.trim(String(document.title).replace(/^(.*)[\-]/, ""));
        d && (d = " - " + d), b = a.trim(b) + d;
      }
    }

    var g = a(b),
        h = this;
    g.attr("data-ajax-content", "true");
    var i = ace.helper.getAttrSettings(b, a.fn.ace_ajax.defaults);
    this.settings = a.extend({}, a.fn.ace_ajax.defaults, c, i);
    var j = !1,
        k = a();
    this.force_reload = !1, this.loadUrl = function (a, b, c) {
      var d = !1;
      a = a.replace(/^(\#\!)?\#/, ""), this.force_reload = b === !1, "function" == typeof this.settings.content_url && (d = this.settings.content_url(a)), "string" == typeof d && this.getUrl(d, a, c);
    }, this.loadAddr = function (a, b, c) {
      this.force_reload = c === !1, this.getUrl(a, b, !1);
    }, this.reload = function () {
      var b = a.trim(window.location.hash);
      !b && this.settings.default_url && (b = this.settings.default_url), this.loadUrl(b, !1);
    }, this.post = function (b, c, d, e) {
      var b = b || a.trim(location.href.replace(location.hash, ""));

      if (b) {
        var c = c || {},
            d = d || !1;
        this.getUrl(b, null, !1, "POST", c, d, e);
      }
    }, this.getUrl = function (b, c, d, i, l, m, n) {
      if (!j) {
        var o,
            i = i || "GET",
            m = "GET" == i || "POST" == i && 1 == m,
            l = l || null;

        if (g.trigger(o = a.Event("ajaxloadstart"), {
          url: b,
          hash: c,
          method: i,
          data: l
        }), !o.isDefaultPrevented()) {
          h.startLoading();
          var p = "GET" == i ? {
            url: b,
            cache: !this.force_reload
          } : {
            url: b,
            method: "POST",
            data: l
          };
          "POST" == i && "object" == _typeof(n) && (p = a.extend({}, p, n)), a.ajax(p).error(function () {
            g.trigger("ajaxloaderror", {
              url: b,
              hash: c,
              method: i,
              data: l
            }), h.stopLoading(!0);
          }).done(function (j) {
            if (g.trigger("ajaxloaddone", {
              url: b,
              hash: c,
              method: i,
              data: l
            }), "POST" == i) {
              var n;
              g.trigger(n = a.Event("ajaxpostdone", {
                url: b,
                data: l,
                result: j
              })), n.isDefaultPrevented() && (m = !1);
            }

            var o = null,
                p = "";
            if ("function" == typeof h.settings.update_active) o = h.settings.update_active.call(null, c, b, i, m);else if (h.settings.update_active === !0 && c && (o = a('a[data-url="' + c + '"]'), o.length > 0)) {
              var q = o.closest(".nav");

              if (q.length > 0) {
                q.find(".active").each(function () {
                  var b = "active";
                  (a(this).hasClass("hover") || h.settings.close_active) && (b += " open"), a(this).removeClass(b), h.settings.close_active && a(this).find(" > .submenu").css("display", "");
                });
                o.closest("li").addClass("active").parents(".nav li").addClass("active open");
                q.closest(".sidebar[data-sidebar-scroll=true]").each(function () {
                  var b = a(this);
                  b.ace_sidebar_scroll("reset"), 1 == d && b.ace_sidebar_scroll("scroll_to_active");
                });
              }
            }
            "function" == typeof h.settings.update_breadcrumbs ? p = h.settings.update_breadcrumbs.call(null, c, b, o, i, m) : h.settings.update_breadcrumbs === !0 && null != o && o.length > 0 && (p = e(o)), k.addClass("content-loaded").detach(), m && (j = String(j).replace(/<(title|link)([\s\>])/gi, '<div class="hidden ajax-append-$1"$2').replace(/<\/(title|link)\>/gi, "</div>"), g.empty().html(j)), a(h.settings.loading_overlay || g).append(k), m && setTimeout(function () {
              a("head").find("link.ace-ajax-stylesheet").remove();

              for (var b = ["link.ace-main-stylesheet", "link#main-ace-style", 'link[href*="/ace.min.css"]', 'link[href*="/ace.css"]'], c = [], d = 0; d < b.length && (c = a("head").find(b[d]).first(), !(c.length > 0)); d++) {
                ;
              }

              g.find(".ajax-append-link").each(function (b) {
                var d = a(this);

                if (d.attr("href")) {
                  var e = jQuery("<link />", {
                    type: "text/css",
                    rel: "stylesheet",
                    "class": "ace-ajax-stylesheet"
                  });
                  c.length > 0 ? e.insertBefore(c) : e.appendTo("head"), e.attr("href", d.attr("href"));
                }

                d.remove();
              });
            }, 10), "function" == typeof h.settings.update_title ? h.settings.update_title.call(null, c, b, p, i, m) : h.settings.update_title === !0 && "GET" == i && f(p), !d && m && a("html,body").animate({
              scrollTop: 0
            }, 250), g.trigger("ajaxloadcomplete", {
              url: b,
              hash: c,
              method: i,
              data: l
            });
            var r = /\.(?:\s*)ace(?:_a|A)jax(?:\s*)\((?:\s*)(?:\'|\")loadScripts(?:\'|\")/;
            j.match(r) ? h.stopLoading() : h.stopLoading(!0);
          });
        }
      }
    };
    var l = !1,
        m = null;
    this.startLoading = function () {
      j || (j = !0, this.settings.loading_overlay || "static" != g.css("position") || (g.css("position", "relative"), l = !0), k.remove(), k = a('<div class="ajax-loading-overlay"><i class="ajax-loading-icon ' + (this.settings.loading_icon || "") + '"></i> ' + this.settings.loading_text + "</div>"), "body" == this.settings.loading_overlay ? a("body").append(k.addClass("ajax-overlay-body")) : this.settings.loading_overlay ? a(this.settings.loading_overlay).append(k) : g.append(k), this.settings.max_load_wait !== !1 && (m = setTimeout(function () {
        if (m = null, j) {
          var b;
          g.trigger(b = a.Event("ajaxloadlong")), b.isDefaultPrevented() || h.stopLoading(!0);
        }
      }, 1e3 * this.settings.max_load_wait)));
    }, this.stopLoading = function (a) {
      a === !0 ? (j = !1, k.remove(), l && (g.css("position", ""), l = !1), null != m && (clearTimeout(m), m = null)) : (k.addClass("almost-loaded"), g.one("ajaxscriptsloaded.inner_call", function () {
        h.stopLoading(!0);
      }));
    }, this.working = function () {
      return j;
    }, this.loadScripts = function (b, c) {
      var b = b || [];
      a.ajaxPrefilter("script", function (a) {
        a.cache = !0;
      }), setTimeout(function () {
        function e() {
          "function" == typeof c && c(), a('.btn-group[data-toggle="buttons"] > .btn').button(), g.trigger("ajaxscriptsloaded");
        }

        function f(a) {
          a += 1, a < b.length ? h(a) : e();
        }

        function h(c) {
          if (c = c || 0, !b[c]) return f(c);
          var g = "js-" + b[c].replace(/[^\w\d\-]/g, "-").replace(/\-\-/g, "-");
          d[g] !== !0 ? a.getScript(b[c]).done(function () {
            d[g] = !0;
          }).complete(function () {
            k++, k >= i && j ? e() : f(c);
          }) : f(c);
        }

        for (var i = 0, k = 0, l = 0; l < b.length; l++) {
          b[l] && !function () {
            var a = "js-" + b[l].replace(/[^\w\d\-]/g, "-").replace(/\-\-/g, "-");
            d[a] !== !0 && i++;
          }();
        }

        i > 0 ? h() : e();
      }, 10);
    }, a(window).off("hashchange.ace_ajax").on("hashchange.ace_ajax", function (b, c) {
      var d = a.trim(window.location.hash);

      if (d && 0 != d.length) {
        if (h.settings.close_mobile_menu) try {
          a(h.settings.close_mobile_menu).ace_sidebar("mobileHide");
        } catch (b) {}
        h.settings.close_dropdowns && a(".dropdown.open .dropdown-toggle").dropdown("toggle"), h.loadUrl(d, null, c);
      }
    }).trigger("hashchange.ace_ajax", [!0]);
    var n = a.trim(window.location.hash);
    !n && this.settings.default_url && (window.location.hash = this.settings.default_url);
  }

  var d = {};
  a.fn.aceAjax = a.fn.ace_ajax = function (d, e, f, g, h) {
    var i,
        j = this.each(function () {
      var j = a(this),
          k = j.data("ace_ajax"),
          l = "object" == _typeof(d) && d;
      k || j.data("ace_ajax", k = new c(this, l)), "string" == typeof d && "function" == typeof k[d] && (i = h !== b ? k[d](e, f, g, h) : g !== b ? k[d](e, f, g) : f !== b ? k[d](e, f) : k[d](e));
    });
    return i === b ? j : i;
  }, a.fn.aceAjax.defaults = a.fn.ace_ajax.defaults = {
    content_url: !1,
    default_url: !1,
    loading_icon: "fa fa-spin fa-spinner fa-2x orange",
    loading_text: "",
    loading_overlay: null,
    update_breadcrumbs: !0,
    update_title: !0,
    update_active: !0,
    close_active: !1,
    max_load_wait: !1,
    close_mobile_menu: !1,
    close_dropdowns: !1
  };
}(window.jQuery), function (a, b) {
  if (ace.vars.touch) {
    var c = "touchstart MSPointerDown pointerdown",
        d = "touchend touchcancel MSPointerUp MSPointerCancel pointerup pointercancel",
        e = "touchmove MSPointerMove MSPointerHover pointermove";
    a.event.special.ace_drag = {
      setup: function setup() {
        var f = 0,
            g = a(this);
        g.on(c, function (c) {
          function h(a) {
            if (k) {
              var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a;

              if (i = {
                coords: [b.pageX, b.pageY]
              }, k && i && (m = 0, n = 0, l = Math.abs(n = k.coords[1] - i.coords[1]) > f && Math.abs(m = k.coords[0] - i.coords[0]) <= Math.abs(n) ? n > 0 ? "up" : "down" : Math.abs(m = k.coords[0] - i.coords[0]) > f && Math.abs(n) <= Math.abs(m) ? m > 0 ? "left" : "right" : !1, l !== !1)) {
                var c = {
                  cancel: !1
                };
                k.origin.trigger({
                  type: "ace_drag",
                  direction: l,
                  dx: m,
                  dy: n,
                  retval: c
                }), 0 == c.cancel && a.preventDefault();
              }

              k.coords[0] = i.coords[0], k.coords[1] = i.coords[1];
            }
          }

          var i,
              j = c.originalEvent.touches ? c.originalEvent.touches[0] : c,
              k = {
            coords: [j.pageX, j.pageY],
            origin: a(c.target)
          },
              l = !1,
              m = 0,
              n = 0;
          g.on(e, h).one(d, function (a) {
            g.off(e, h), k = i = b;
          });
        });
      }
    };
  }
}(window.jQuery), function (a, b) {
  function c(b, c) {
    function e() {
      this.mobile_view = this.mobile_style < 4 && this.is_mobile_view(), this.collapsible = !this.mobile_view && this.is_collapsible(), this.minimized = !this.collapsible && this.$sidebar.hasClass(k) || 3 == this.mobile_style && this.mobile_view && this.$sidebar.hasClass(l), this.horizontal = !(this.mobile_view || this.collapsible) && this.$sidebar.hasClass(n);
    }

    var f = this;
    this.$sidebar = a(b), this.$sidebar.attr("data-sidebar", "true"), this.$sidebar.attr("id") || this.$sidebar.attr("id", "id-sidebar-" + ++d);
    var g = ace.helper.getAttrSettings(b, a.fn.ace_sidebar.defaults, "sidebar-");
    this.settings = a.extend({}, a.fn.ace_sidebar.defaults, c, g), this.minimized = !1, this.collapsible = !1, this.horizontal = !1, this.mobile_view = !1, this.vars = function () {
      return {
        minimized: this.minimized,
        collapsible: this.collapsible,
        horizontal: this.horizontal,
        mobile_view: this.mobile_view
      };
    }, this.get = function (a) {
      return this.hasOwnProperty(a) ? this[a] : void 0;
    }, this.set = function (a, b) {
      this.hasOwnProperty(a) && (this[a] = b);
    }, this.ref = function () {
      return this;
    };

    var h = function h(b, c) {
      var d,
          e,
          f = a(this).find(ace.vars[".icon"]);

      if (f.length > 0) {
        d = f.attr("data-icon1"), e = f.attr("data-icon2"), "undefined" != typeof b ? b ? f.removeClass(d).addClass(e) : f.removeClass(e).addClass(d) : f.toggleClass(d).toggleClass(e);

        try {
          c !== !1 && ace.settings.saveState(f.get(0));
        } catch (g) {}
      }
    },
        i = function i() {
      var b = f.$sidebar.find(".sidebar-collapse");
      return 0 == b.length && (b = a('.sidebar-collapse[data-target="#' + (f.$sidebar.attr("id") || "") + '"]')), b = 0 != b.length ? b[0] : null;
    };

    this.toggleMenu = function (c, d) {
      if (this.collapsible) return !1;
      this.minimized = !this.minimized;
      var d = !(c === !1 || d === !1);
      this.minimized ? this.$sidebar.addClass("menu-min") : this.$sidebar.removeClass("menu-min");

      try {
        d && ace.settings.saveState(b, "class", "menu-min", this.minimized);
      } catch (e) {}

      return c || (c = i()), c && h.call(c, this.minimized, d), ace.vars.old_ie && ace.helper.redraw(b), a(document).trigger("settings.ace", ["sidebar_collapsed", this.minimized, b, d]), this.minimized ? this.$sidebar.trigger(a.Event("collapse.ace.sidebar")) : this.$sidebar.trigger(a.Event("expand.ace.sidebar")), !0;
    }, this.collapse = function (a, b) {
      this.collapsible || (this.minimized = !1, this.toggleMenu(a, b));
    }, this.expand = function (a, b) {
      this.collapsible || (this.minimized = !0, this.toggleMenu(a, b));
    }, this.showResponsive = function () {
      this.$sidebar.removeClass(l).removeClass(m);
    }, this.toggleResponsive = function (b, c) {
      if (this.mobile_view && 3 == this.mobile_style) {
        if (this.$sidebar.hasClass("menu-min")) {
          this.$sidebar.removeClass("menu-min");
          var d = i();
          d && h.call(d);
        }

        var c = "boolean" == typeof c ? c : "boolean" == typeof b ? b : this.$sidebar.hasClass(l);

        if (c ? this.$sidebar.addClass(m).removeClass(l) : this.$sidebar.removeClass(m).addClass(l), this.minimized = !c, b && "object" == _typeof(b) || (b = this.$sidebar.find(".sidebar-expand"), 0 == b.length && (b = a('.sidebar-expand[data-target="#' + (this.$sidebar.attr("id") || "") + '"]')), b = 0 != b.length ? b[0] : null), b) {
          var e,
              g,
              j = a(b).find(ace.vars[".icon"]);
          j.length > 0 && (e = j.attr("data-icon1"), g = j.attr("data-icon2"), c ? j.removeClass(e).addClass(g) : j.removeClass(g).addClass(e));
        }

        c ? f.$sidebar.trigger(a.Event("mobileShow.ace.sidebar")) : f.$sidebar.trigger(a.Event("mobileHide.ace.sidebar")), a(document).triggerHandler("settings.ace", ["sidebar_collapsed", this.minimized]);
      }
    }, this.is_collapsible = function () {
      var b;
      return this.$sidebar.hasClass("navbar-collapse") && null != (b = a('.navbar-toggle[data-target="#' + (this.$sidebar.attr("id") || "") + '"]').get(0)) && b.scrollHeight > 0;
    }, this.is_mobile_view = function () {
      var b;
      return null != (b = a('.menu-toggler[data-target="#' + (this.$sidebar.attr("id") || "") + '"]').get(0)) && b.scrollHeight > 0;
    };
    var j = !1;
    this.show = function (b, c, d) {
      if (d = d !== !1, d && j) return !1;
      var e,
          f = a(b);
      if (f.trigger(e = a.Event("show.ace.submenu")), e.isDefaultPrevented()) return !1;
      d && (j = !0), c = "undefined" != typeof c ? c : this.settings.duration, f.css({
        height: 0,
        overflow: "hidden",
        display: "block"
      }).removeClass("nav-hide").addClass("nav-show").parent().addClass("open"), b.scrollTop = 0;

      var g = function g(b, c) {
        b && b.stopPropagation(), f.css({
          "transition-property": "",
          "transition-duration": "",
          overflow: "",
          height: ""
        }), c !== !1 && f.trigger(a.Event("shown.ace.submenu")), d && (j = !1);
      },
          h = b.scrollHeight;

      return 0 != c && 0 != h && a.support.transition.end ? (f.css({
        height: h,
        "transition-property": "height",
        "transition-duration": c / 1e3 + "s"
      }).one(a.support.transition.end, g), ace.vars.android && setTimeout(function () {
        g(null, !1), ace.helper.redraw(b);
      }, c + 20)) : g(), !0;
    }, this.hide = function (b, c, d) {
      if (d = d !== !1, d && j) return !1;
      var e,
          f = a(b);
      if (f.trigger(e = a.Event("hide.ace.submenu")), e.isDefaultPrevented()) return !1;
      d && (j = !0), c = "undefined" != typeof c ? c : this.settings.duration;
      var g = b.scrollHeight;
      f.css({
        height: g,
        overflow: "hidden",
        display: "block"
      }).parent().removeClass("open"), b.offsetHeight;

      var h = function h(b, c) {
        b && b.stopPropagation(), f.css({
          display: "none",
          overflow: "",
          height: "",
          "transition-property": "",
          "transition-duration": ""
        }).removeClass("nav-show").addClass("nav-hide"), c !== !1 && f.trigger(a.Event("hidden.ace.submenu")), d && (j = !1);
      };

      return 0 != c && 0 != g && a.support.transition.end ? (f.css({
        height: 0,
        "transition-property": "height",
        "transition-duration": c / 1e3 + "s"
      }).one(a.support.transition.end, h), ace.vars.android && setTimeout(function () {
        h(null, !1), ace.helper.redraw(b);
      }, c + 20)) : h(), !0;
    }, this.toggle = function (a, b) {
      if (b = b || f.settings.duration, 0 == a.scrollHeight) {
        if (this.show(a, b)) return 1;
      } else if (this.hide(a, b)) return -1;

      return 0;
    }, this.mobileToggle = function (a) {
      this.mobile_view ? 1 == this.mobile_style || 2 == this.mobile_style ? this.toggleMobile("object" == _typeof(a) ? a : null, "boolean" == typeof a ? a : null) : 3 == this.mobile_style && this.toggleResponsive("object" == _typeof(a) ? a : null, "boolean" == typeof a ? a : null) : this.collapsible && this.toggleCollapsible("object" == _typeof(a) ? a : null, "boolean" == typeof a ? a : null);
    }, this.mobileShow = function () {
      this.mobileToggle(!0);
    }, this.mobileHide = function () {
      this.mobileToggle(!1);
    }, this.toggleMobile = function (b, c) {
      if (1 == this.mobile_style || 2 == this.mobile_style) {
        var c = "boolean" == typeof c ? c : "boolean" == typeof b ? b : !this.$sidebar.hasClass("display");
        b && "object" == _typeof(b) || (b = a('.menu-toggler[data-target="#' + (this.$sidebar.attr("id") || "") + '"]'), b = 0 != b.length ? b[0] : null), c ? (this.$sidebar.addClass("display"), b && a(b).addClass("display")) : (this.$sidebar.removeClass("display"), b && a(b).removeClass("display")), c ? f.$sidebar.trigger(a.Event("mobileShow.ace.sidebar")) : f.$sidebar.trigger(a.Event("mobileHide.ace.sidebar"));
      }
    }, this.toggleCollapsible = function (b, c) {
      if (4 == this.mobile_style) {
        var c = "boolean" == typeof c ? c : "boolean" == typeof b ? b : !this.$sidebar.hasClass("in");
        c ? this.$sidebar.collapse("show") : (this.$sidebar.removeClass("display"), this.$sidebar.collapse("hide")), c ? f.$sidebar.trigger(a.Event("mobileShow.ace.sidebar")) : f.$sidebar.trigger(a.Event("mobileHide.ace.sidebar"));
      }
    };

    var k = "menu-min",
        l = "responsive-min",
        m = "responsive-max",
        n = "h-sidebar",
        o = function o() {
      this.mobile_style = 1, this.$sidebar.hasClass("responsive") && !a('.menu-toggler[data-target="#' + this.$sidebar.attr("id") + '"]').hasClass("navbar-toggle") ? this.mobile_style = 2 : this.$sidebar.hasClass(l) ? this.mobile_style = 3 : this.$sidebar.hasClass("navbar-collapse") && (this.mobile_style = 4);
    };

    o.call(f), a(window).on("resize.sidebar.vars", function () {
      e.call(f);
    }).triggerHandler("resize.sidebar.vars"), this.$sidebar.on(ace.click_event + ".ace.submenu", ".nav-list", function (b) {
      var c = this,
          d = a(b.target).closest("a");

      if (d && 0 != d.length) {
        var e = f.minimized && !f.collapsible;

        if (d.hasClass("dropdown-toggle")) {
          b.preventDefault();
          var g = d.siblings(".submenu").get(0);
          if (!g) return !1;
          var h = a(g),
              i = 0,
              j = g.parentNode.parentNode;
          if (e && j == c || h.parent().hasClass("hover") && "absolute" == h.css("position") && !f.collapsible) return !1;
          var k = 0 == g.scrollHeight;
          return k && f.settings.hide_open_subs && a(j).find("> .open > .submenu").each(function () {
            this == g || a(this.parentNode).hasClass("active") || (i -= this.scrollHeight, f.hide(this, f.settings.duration, !1));
          }), k ? (f.show(g, f.settings.duration), 0 != i && (i += g.scrollHeight)) : (f.hide(g, f.settings.duration), i -= g.scrollHeight), 0 != i && ("true" != f.$sidebar.attr("data-sidebar-scroll") || f.minimized || f.$sidebar.ace_sidebar_scroll("prehide", i)), !1;
        }

        if ("tap" == ace.click_event && e && d.get(0).parentNode.parentNode == c) {
          var l = d.find(".menu-text").get(0);
          if (null != l && b.target != l && !a.contains(l, b.target)) return b.preventDefault(), !1;
        }

        if (ace.vars.ios_safari && "false" !== d.attr("data-link")) return document.location = d.attr("href"), b.preventDefault(), !1;
      }
    });
  }

  var d = 0;
  a(document).on(ace.click_event + ".ace.menu", ".menu-toggler", function (b) {
    var c = a(this),
        d = a(c.attr("data-target"));

    if (0 != d.length) {
      b.preventDefault(), d.ace_sidebar("mobileToggle", this);
      var e = ace.click_event + ".ace.autohide",
          f = "true" === d.attr("data-auto-hide");
      return c.hasClass("display") ? (f && a(document).on(e, function (b) {
        return d.get(0) == b.target || a.contains(d.get(0), b.target) ? void b.stopPropagation() : (d.ace_sidebar("mobileToggle", this, !1), void a(document).off(e));
      }), "true" == d.attr("data-sidebar-scroll") && d.ace_sidebar_scroll("reset")) : f && a(document).off(e), !1;
    }
  }).on(ace.click_event + ".ace.menu", ".sidebar-collapse", function (b) {
    var c = a(this).attr("data-target"),
        d = null;
    c && (d = a(c)), null != d && 0 != d.length || (d = a(this).closest(".sidebar")), 0 != d.length && (b.preventDefault(), d.ace_sidebar("toggleMenu", this));
  }).on(ace.click_event + ".ace.menu", ".sidebar-expand", function (b) {
    var c = a(this).attr("data-target"),
        d = null;

    if (c && (d = a(c)), null != d && 0 != d.length || (d = a(this).closest(".sidebar")), 0 != d.length) {
      var e = this;
      b.preventDefault(), d.ace_sidebar("toggleResponsive", this);
      var f = ace.click_event + ".ace.autohide";
      "true" === d.attr("data-auto-hide") && (d.hasClass(responsive_max_class) ? a(document).on(f, function (b) {
        return d.get(0) == b.target || a.contains(d.get(0), b.target) ? void b.stopPropagation() : (d.ace_sidebar("toggleResponsive", e), void a(document).off(f));
      }) : a(document).off(f));
    }
  }), a.fn.ace_sidebar = function (d, e, f) {
    var g,
        h = this.each(function () {
      var h = a(this),
          i = h.data("ace_sidebar"),
          j = "object" == _typeof(d) && d;
      i || h.data("ace_sidebar", i = new c(this, j)), "string" == typeof d && "function" == typeof i[d] && (g = e instanceof Array ? i[d].apply(i, e) : f !== b ? i[d](e, f) : i[d](e));
    });
    return g === b ? h : g;
  }, a.fn.ace_sidebar.defaults = {
    duration: 300,
    hide_open_subs: !0
  };
}(window.jQuery), function (a, b) {
  function c(b, c) {
    var f,
        g,
        h,
        i,
        j = this,
        k = a(window),
        l = a(b);

    if (f = l.find(".nav-list"), g = f.get(0)) {
      var m = ace.helper.getAttrSettings(b, a.fn.ace_sidebar_scroll.defaults);
      this.settings = a.extend({}, a.fn.ace_sidebar_scroll.defaults, c, m);
      var n = j.settings.scroll_to_active,
          o = l.ace_sidebar("ref");
      l.attr("data-sidebar-scroll", "true");
      var p = null,
          q = null,
          r = null,
          s = null,
          t = null,
          u = null;
      this.is_scrolling = !1;
      var v = !1;
      this.sidebar_fixed = e(b, "fixed");

      var w,
          x,
          y = function y() {
        var a = f.parent().offset();
        return j.sidebar_fixed && (a.top -= ace.helper.scrollTop()), k.innerHeight() - a.top - (j.settings.include_toggle ? 0 : h.outerHeight()) + 1;
      },
          z = function z() {
        return g.clientHeight;
      },
          A = function A(b) {
        if (!v && j.sidebar_fixed && (f = l.find(".nav-list"), h = l.find(".sidebar-toggle").eq(0), i = l.find(".sidebar-shortcuts").eq(0), g = f.get(0))) {
          f.wrap('<div class="nav-wrap-up pos-rel" />'), f.after("<div><div></div></div>"), f.wrap('<div class="nav-wrap" />'), j.settings.include_toggle || h.css({
            "z-index": 1
          }), j.settings.include_shortcuts || i.css({
            "z-index": 99
          }), p = f.parent().next().ace_scroll({
            size: y(),
            mouseWheelLock: !0,
            hoverReset: !1,
            dragEvent: !0,
            styleClass: j.settings.scroll_style,
            touchDrag: !1
          }).closest(".ace-scroll").addClass("nav-scroll"), u = p.data("ace_scroll"), q = p.find(".scroll-content").eq(0), r = q.find(" > div").eq(0), t = a(u.get_track()), s = t.find(".scroll-bar").eq(0), j.settings.include_shortcuts && 0 != i.length && (f.parent().prepend(i).wrapInner("<div />"), f = f.parent()), j.settings.include_toggle && 0 != h.length && (f.append(h), f.closest(".nav-wrap").addClass("nav-wrap-t")), f.css({
            position: "relative"
          }), 1 == j.settings.scroll_outside && p.addClass("scrollout"), g = f.get(0), g.style.top = 0, q.on("scroll.nav", function () {
            g.style.top = -1 * this.scrollTop + "px";
          }), f.on(a.event.special.mousewheel ? "mousewheel.ace_scroll" : "mousewheel.ace_scroll DOMMouseScroll.ace_scroll", function (a) {
            return j.is_scrolling && u.is_active() ? p.trigger(a) : !j.settings.lock_anyway;
          }), f.on("mouseenter.ace_scroll", function () {
            t.addClass("scroll-hover");
          }).on("mouseleave.ace_scroll", function () {
            t.removeClass("scroll-hover");
          });
          var c = q.get(0);

          if (f.on("ace_drag.nav", function (b) {
            if (!j.is_scrolling || !u.is_active()) return void (b.retval.cancel = !0);
            if (0 != a(b.target).closest(".can-scroll").length) return void (b.retval.cancel = !0);

            if ("up" == b.direction || "down" == b.direction) {
              u.move_bar(!0);
              var d = b.dy;
              d = parseInt(Math.min(w, d)), Math.abs(d) > 2 && (d = 2 * d), 0 != d && (c.scrollTop = c.scrollTop + d, g.style.top = -1 * c.scrollTop + "px");
            }
          }), j.settings.smooth_scroll && f.on("touchstart.nav MSPointerDown.nav pointerdown.nav", function (a) {
            f.css("transition-property", "none"), s.css("transition-property", "none");
          }).on("touchend.nav touchcancel.nav MSPointerUp.nav MSPointerCancel.nav pointerup.nav pointercancel.nav", function (a) {
            f.css("transition-property", "top"), s.css("transition-property", "top");
          }), d && !j.settings.include_toggle) {
            var e = h.get(0);
            e && q.on("scroll.safari", function () {
              ace.helper.redraw(e);
            });
          }

          if (v = !0, 1 == b && (j.reset(), n && j.scroll_to_active(), n = !1), "number" == typeof j.settings.smooth_scroll && j.settings.smooth_scroll > 0 && (f.css({
            "transition-property": "top",
            "transition-duration": (j.settings.smooth_scroll / 1e3).toFixed(2) + "s"
          }), s.css({
            "transition-property": "top",
            "transition-duration": (j.settings.smooth_scroll / 1500).toFixed(2) + "s"
          }), p.on("drag.start", function (a) {
            a.stopPropagation(), f.css("transition-property", "none");
          }).on("drag.end", function (a) {
            a.stopPropagation(), f.css("transition-property", "top");
          })), ace.vars.android) {
            var k = ace.helper.scrollTop();
            2 > k && (window.scrollTo(k, 0), setTimeout(function () {
              j.reset();
            }, 20));
            var m,
                o = ace.helper.winHeight();
            a(window).on("scroll.ace_scroll", function () {
              j.is_scrolling && u.is_active() && (m = ace.helper.winHeight(), m != o && (o = m, j.reset()));
            });
          }
        }
      };

      this.scroll_to_active = function () {
        if (u && u.is_active()) try {
          var a,
              b = o.vars(),
              c = l.find(".nav-list");
          b.minimized && !b.collapsible ? a = c.find("> .active") : (a = f.find("> .active.hover"), 0 == a.length && (a = f.find(".active:not(.open)")));
          var d = a.outerHeight();
          c = c.get(0);

          for (var e = a.get(0); e != c;) {
            d += e.offsetTop, e = e.parentNode;
          }

          var h = d - p.height();
          h > 0 && (g.style.top = -h + "px", q.scrollTop(h));
        } catch (i) {}
      }, this.reset = function (a) {
        if (a === !0 && (this.sidebar_fixed = e(b, "fixed")), !this.sidebar_fixed) return void this.disable();
        v || A();
        var c = o.vars(),
            d = !c.collapsible && !c.horizontal && (w = y()) < (x = g.clientHeight);
        this.is_scrolling = !0, d && (r.css({
          height: x,
          width: 8
        }), p.prev().css({
          "max-height": w
        }), u.update({
          size: w
        }), u.enable(), u.reset()), d && u.is_active() ? l.addClass("sidebar-scroll") : this.is_scrolling && this.disable();
      }, this.disable = function () {
        this.is_scrolling = !1, p && (p.css({
          height: "",
          "max-height": ""
        }), r.css({
          height: "",
          width: ""
        }), p.prev().css({
          "max-height": ""
        }), u.disable()), parseInt(g.style.top) < 0 && j.settings.smooth_scroll && a.support.transition.end ? f.one(a.support.transition.end, function () {
          l.removeClass("sidebar-scroll"), f.off(".trans");
        }) : l.removeClass("sidebar-scroll"), g.style.top = 0;
      }, this.prehide = function (a) {
        if (this.is_scrolling && !o.get("minimized")) if (z() + a < y()) this.disable();else if (0 > a) {
          var b = q.scrollTop() + a;
          if (0 > b) return;
          g.style.top = -1 * b + "px";
        }
      }, this._reset = function (a) {
        a === !0 && (this.sidebar_fixed = e(b, "fixed")), ace.vars.webkit ? setTimeout(function () {
          j.reset();
        }, 0) : this.reset();
      }, this.set_hover = function () {
        t && t.addClass("scroll-hover");
      }, this.get = function (a) {
        return this.hasOwnProperty(a) ? this[a] : void 0;
      }, this.set = function (a, b) {
        this.hasOwnProperty(a) && (this[a] = b);
      }, this.ref = function () {
        return this;
      }, this.updateStyle = function (a) {
        null != u && u.update({
          styleClass: a
        });
      }, l.on("hidden.ace.submenu.sidebar_scroll shown.ace.submenu.sidebar_scroll", ".submenu", function (a) {
        a.stopPropagation(), o.get("minimized") || (j._reset(), "shown" == a.type && j.set_hover());
      }), A(!0);
    }
  }

  var d = ace.vars.safari && navigator.userAgent.match(/version\/[1-5]/i),
      e = "getComputedStyle" in window ? function (a, b) {
    return a.offsetHeight, window.getComputedStyle(a).position == b;
  } : function (b, c) {
    return b.offsetHeight, a(b).css("position") == c;
  };
  a(document).on("settings.ace.sidebar_scroll", function (b, c, d) {
    a(".sidebar[data-sidebar-scroll=true]").each(function () {
      var b = a(this),
          d = b.ace_sidebar_scroll("ref");
      if ("sidebar_collapsed" == c && e(this, "fixed")) "true" == b.attr("data-sidebar-hover") && b.ace_sidebar_hover("reset"), d._reset();else if ("sidebar_fixed" === c || "navbar_fixed" === c) {
        var f = d.get("is_scrolling"),
            g = e(this, "fixed");
        d.set("sidebar_fixed", g), g && !f ? d._reset() : g || d.disable();
      }
    });
  }), a(window).on("resize.ace.sidebar_scroll", function () {
    a(".sidebar[data-sidebar-scroll=true]").each(function () {
      var b = a(this);
      "true" == b.attr("data-sidebar-hover") && b.ace_sidebar_hover("reset");
      var c = a(this).ace_sidebar_scroll("ref"),
          d = e(this, "fixed");
      c.set("sidebar_fixed", d), c._reset();
    });
  }), a.fn.ace_sidebar_scroll || (a.fn.ace_sidebar_scroll = function (d, e) {
    var f,
        g = this.each(function () {
      var b = a(this),
          g = b.data("ace_sidebar_scroll"),
          h = "object" == _typeof(d) && d;
      g || b.data("ace_sidebar_scroll", g = new c(this, h)), "string" == typeof d && "function" == typeof g[d] && (f = g[d](e));
    });
    return f === b ? g : f;
  }, a.fn.ace_sidebar_scroll.defaults = {
    scroll_to_active: !0,
    include_shortcuts: !0,
    include_toggle: !1,
    smooth_scroll: 150,
    scroll_outside: !1,
    scroll_style: "",
    lock_anyway: !1
  });
}(window.jQuery), function (a, b) {
  function c(b, c) {
    function h(b) {
      var c = b,
          d = a(c),
          e = null,
          f = !1;
      this.show = function () {
        null != e && clearTimeout(e), e = null, d.addClass("hover-show hover-shown"), f = !0;

        for (var a = 0; a < g.length; a++) {
          g[a].find(".hover-show").not(".hover-shown").each(function () {
            i(this).hide();
          });
        }
      }, this.hide = function () {
        f = !1, d.removeClass("hover-show hover-shown hover-flip"), null != e && clearTimeout(e), e = null;
        var a = d.find("> .submenu").get(0);
        a && j(a, "hide");
      }, this.hideDelay = function (a) {
        null != e && clearTimeout(e), d.removeClass("hover-shown"), e = setTimeout(function () {
          f = !1, d.removeClass("hover-show hover-flip"), e = null;
          var b = d.find("> .submenu").get(0);
          b && j(b, "hide"), "function" == typeof a && a.call(this);
        }, m.settings.sub_hover_delay);
      }, this.is_visible = function () {
        return f;
      };
    }

    function i(b) {
      var c = a(b).data("subHide");
      return c || a(b).data("subHide", c = new h(b)), c;
    }

    function j(b, c) {
      var d = a(b).data("ace_scroll");
      return d ? "string" == typeof c ? (d[c](), !0) : d : !1;
    }

    function k(c) {
      var d = a(this),
          f = a(c);
      c.style.top = "", c.style.bottom = "";
      var g = null;
      q.minimized && (g = d.find(".menu-text").get(0)) && (g.style.marginTop = "");
      var h = ace.helper.scrollTop(),
          i = 0,
          k = h;
      w && (i = b.offsetTop, k += i + 1);
      var m = d.offset();
      m.top = parseInt(m.top);
      var n,
          o = 0;
      c.style.maxHeight = "";
      var r = c.scrollHeight,
          n = d.height();
      g && (o = n, m.top += o);
      var t = parseInt(m.top + r),
          v = 0,
          y = u.height(),
          z = parseInt(m.top - k - o),
          A = y,
          B = q.horizontal,
          C = !1;
      B && this.parentNode == p && (v = 0, m.top += d.height(), C = !0), !C && (v = t - (y + h)) >= 0 && (v = z > v ? v : z, 0 == v && (v = 20), z - v > 10 && (v += parseInt(Math.min(25, z - v))), m.top + (n - o) > t - v && (v -= m.top + (n - o) - (t - v)), v > 0 && (c.style.top = -v + "px", g && (g.style.marginTop = -v + "px"))), 0 > v && (v = 0);
      var D = v > 0 && v > n - 20;
      if (D ? d.addClass("pull_up") : d.removeClass("pull_up"), B) if (d.parent().parent().hasClass("hover-flip")) d.addClass("hover-flip");else {
        var E = f.offset(),
            F = f.width(),
            G = u.width();
        E.left + F > G && d.addClass("hover-flip");
      }
      var H = d.hasClass("hover") && !q.mobile_view;

      if (!(H && f.find("> li > .submenu").length > 0)) {
        var I = A - (m.top - h) + v,
            J = v - I;

        if (J > 0 && n > J && (I += parseInt(Math.max(n, n - J))), I -= 5, !(90 > I)) {
          var K = !1;
          if (e) f.addClass("sub-scroll").css("max-height", I + "px");else {
            if (K = j(c), 0 == K) {
              f.ace_scroll({
                observeContent: !0,
                detached: !0,
                updatePos: !1,
                reset: !0,
                mouseWheelLock: !0,
                styleClass: l.settings.sub_scroll_style
              }), K = j(c);
              var L = K.get_track();
              L && f.after(L);
            }

            K.update({
              size: I
            });
          }

          if (x = I, !e && K) {
            I > 14 && r - I > 4 ? (K.enable(), K.reset()) : K.disable();
            var L = K.get_track();

            if (L) {
              L.style.top = -(v - o - 1) + "px";
              var m = f.position(),
                  M = m.left;
              M += s ? 2 : f.outerWidth() - K.track_size(), L.style.left = parseInt(M) + "px", C && (L.style.left = parseInt(M - 2) + "px", L.style.top = parseInt(m.top) + (g ? o - 2 : 0) + "px");
            }
          }

          ace.vars.safari && ace.helper.redraw(c);
        }
      }
    }

    var l = this,
        m = this,
        n = ace.helper.getAttrSettings(b, a.fn.ace_sidebar_hover.defaults);
    this.settings = a.extend({}, a.fn.ace_sidebar_hover.defaults, c, n);
    var o = a(b),
        p = o.find(".nav-list").get(0);
    o.attr("data-sidebar-hover", "true"), g.push(o);
    var q = {},
        r = ace.vars.old_ie,
        s = !1,
        t = l.settings.sub_hover_delay || !1;
    d && t && (l.settings.sub_hover_delay = parseInt(Math.max(l.settings.sub_hover_delay, 2500)));
    var u = a(window),
        v = a(".navbar").eq(0),
        w = "fixed" == v.css("position");
    this.update_vars = function () {
      w = "fixed" == v.css("position");
    }, l.dirty = !1, this.reset = function () {
      0 != l.dirty && (l.dirty = !1, o.find(".submenu").each(function () {
        var b = a(this),
            c = b.parent();
        b.css({
          top: "",
          bottom: "",
          "max-height": ""
        }), b.hasClass("ace-scroll") ? b.ace_scroll("disable") : b.removeClass("sub-scroll"), f(this, "absolute") ? b.addClass("can-scroll") : b.removeClass("can-scroll"), c.removeClass("pull_up").find(".menu-text:first").css("margin-top", "");
      }), o.find(".hover-show").removeClass("hover-show hover-shown hover-flip"));
    }, this.updateStyle = function (a) {
      sub_scroll_style = a, o.find(".submenu.ace-scroll").ace_scroll("update", {
        styleClass: a
      });
    }, this.changeDir = function (a) {
      s = "right" === a;
    };
    var x = -1;
    e || o.on("hide.ace.submenu.sidebar_hover", ".submenu", function (b) {
      if (!(1 > x)) {
        b.stopPropagation();
        var c = a(this).closest(".ace-scroll.can-scroll");
        0 != c.length && f(c[0], "absolute") && c[0].scrollHeight - this.scrollHeight < x && c.ace_scroll("disable");
      }
    }), e || o.on("shown.ace.submenu.sidebar_hover hidden.ace.submenu.sidebar_hover", ".submenu", function (b) {
      if (!(1 > x)) {
        var c = a(this).closest(".ace-scroll.can-scroll");

        if (0 != c.length && f(c[0], "absolute")) {
          var d = c[0].scrollHeight;
          x > 14 && d - x > 4 ? c.ace_scroll("enable").ace_scroll("reset") : c.ace_scroll("disable");
        }
      }
    });
    var y = -1,
        z = d ? "touchstart.sub_hover" : "mouseenter.sub_hover",
        A = d ? "touchend.sub_hover touchcancel.sub_hover" : "mouseleave.sub_hover";
    o.on(z, ".nav-list li, .sidebar-shortcuts", function (b) {
      if (q = o.ace_sidebar("vars"), !q.collapsible) {
        var c = a(this),
            e = !1,
            g = c.hasClass("hover"),
            h = c.find("> .submenu").get(0);
        if (!(h || this.parentNode == p || g || (e = c.hasClass("sidebar-shortcuts")))) return void (h && a(h).removeClass("can-scroll"));
        var j = h,
            m = !1;
        if (j || this.parentNode != p || (j = c.find("> a > .menu-text").get(0)), !j && e && (j = c.find(".sidebar-shortcuts-large").get(0)), !(j && (m = f(j, "absolute")) || g)) return void (h && a(h).removeClass("can-scroll"));
        var n = t ? i(this) : null;
        if (h) if (m) {
          l.dirty = !0;
          var s = ace.helper.scrollTop();
          if (t && !n.is_visible() || !d && s != y || r) if (a(h).addClass("can-scroll"), r || d) {
            var u = this;
            setTimeout(function () {
              k.call(u, h);
            }, 0);
          } else k.call(this, h);
          y = s;
        } else a(h).removeClass("can-scroll");
        t && n.show();
      }
    }).on(A, ".nav-list li, .sidebar-shortcuts", function (b) {
      q = o.ace_sidebar("vars"), q.collapsible || a(this).hasClass("hover-show") && t && i(this).hideDelay();
    });
  }

  if (!ace.vars.very_old_ie) {
    var d = ace.vars.touch,
        e = ace.vars.old_ie || d,
        f = "getComputedStyle" in window ? function (a, b) {
      return a.offsetHeight, window.getComputedStyle(a).position == b;
    } : function (b, c) {
      return b.offsetHeight, a(b).css("position") == c;
    };
    a(window).on("resize.sidebar.ace_hover", function () {
      a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("update_vars").ace_sidebar_hover("reset");
    }), a(document).on("settings.ace.ace_hover", function (b, c, d) {
      "sidebar_collapsed" == c ? a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("reset") : "navbar_fixed" == c && a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("update_vars");
    });
    var g = [];
    a.fn.ace_sidebar_hover = function (d, e) {
      var f,
          g = this.each(function () {
        var b = a(this),
            g = b.data("ace_sidebar_hover"),
            h = "object" == _typeof(d) && d;
        g || b.data("ace_sidebar_hover", g = new c(this, h)), "string" == typeof d && "function" == typeof g[d] && (f = g[d](e));
      });
      return f === b ? g : f;
    }, a.fn.ace_sidebar_hover.defaults = {
      sub_hover_delay: 750,
      sub_scroll_style: "no-track scroll-thin"
    };
  }
}(window.jQuery), function (a, b) {
  function c(b, c) {
    var d = b.find(".widget-main").eq(0);
    a(window).off("resize.widget.scroll");
    var e = ace.vars.old_ie || ace.vars.touch;

    if (c) {
      var f = d.data("ace_scroll");
      f && d.data("save_scroll", {
        size: f.size,
        lock: f.lock,
        lock_anyway: f.lock_anyway
      });
      var g = b.height() - b.find(".widget-header").height() - 10;
      g = parseInt(g), d.css("min-height", g), e ? (f && d.ace_scroll("disable"), d.css("max-height", g).addClass("overflow-scroll")) : (f ? d.ace_scroll("update", {
        size: g,
        mouseWheelLock: !0,
        lockAnyway: !0
      }) : d.ace_scroll({
        size: g,
        mouseWheelLock: !0,
        lockAnyway: !0
      }), d.ace_scroll("enable").ace_scroll("reset")), a(window).on("resize.widget.scroll", function () {
        var a = b.height() - b.find(".widget-header").height() - 10;
        a = parseInt(a), d.css("min-height", a), e ? d.css("max-height", a).addClass("overflow-scroll") : d.ace_scroll("update", {
          size: a
        }).ace_scroll("reset");
      });
    } else {
      d.css("min-height", "");
      var h = d.data("save_scroll");
      h && d.ace_scroll("update", {
        size: h.size,
        mouseWheelLock: h.lock,
        lockAnyway: h.lock_anyway
      }).ace_scroll("enable").ace_scroll("reset"), e ? d.css("max-height", "").removeClass("overflow-scroll") : h || d.ace_scroll("disable");
    }
  }

  var d = function d(b, _d) {
    this.$box = a(b);
    this.reload = function () {
      var a = this.$box,
          b = !1;
      "static" == a.css("position") && (b = !0, a.addClass("position-relative")), a.append('<div class="widget-box-overlay"><i class="' + ace.vars.icon + 'loading-icon fa fa-spinner fa-spin fa-2x white"></i></div>'), a.one("reloaded.ace.widget", function () {
        a.find(".widget-box-overlay").remove(), b && a.removeClass("position-relative");
      });
    }, this.closeFast = function () {
      this.close(0);
    }, this.close = function (a) {
      var b = this.$box,
          a = "undefined" == typeof a ? 300 : a;
      b.fadeOut(a, function () {
        b.trigger("closed.ace.widget"), b.remove();
      });
    }, this.toggleFast = function () {
      this.toggle(null, null, 0, 0);
    }, this.toggle = function (a, b, c, d) {
      var e = this.$box,
          f = e.find(".widget-body").eq(0),
          g = null,
          h = a || (e.hasClass("collapsed") ? "show" : "hide"),
          i = "show" == h ? "shown" : "hidden";

      if (b || (b = e.find("> .widget-header a[data-action=collapse]").eq(0), 0 == b.length && (b = null)), b) {
        g = b.find(ace.vars[".icon"]).eq(0);
        var j,
            k = null,
            l = null;
        (k = g.attr("data-icon-show")) ? l = g.attr("data-icon-hide") : (j = g.attr("class").match(/fa\-(.*)\-(up|down)/)) && (k = "fa-" + j[1] + "-down", l = "fa-" + j[1] + "-up");
      }

      var c = "undefined" == typeof c ? 250 : c,
          d = "undefined" == typeof d ? 200 : d;
      "show" == h ? (g && g.removeClass(k).addClass(l), f.hide(), e.removeClass("collapsed"), f.slideDown(c, function () {
        e.trigger(i + ".ace.widget");
      })) : (g && g.removeClass(l).addClass(k), f.slideUp(d, function () {
        e.addClass("collapsed"), e.trigger(i + ".ace.widget");
      })), e.trigger("toggled.ace.widget", [h]);
    }, this.hide = function () {
      this.toggle("hide");
    }, this.show = function () {
      this.toggle("show");
    }, this.hideFast = function () {
      this.toggle("hide", null, 0, 0);
    }, this.showFast = function () {
      this.toggle("show", null, 0, 0);
    }, this.fullscreen = function (a) {
      var b = this.$box.find("> .widget-header a[data-action=fullscreen]").find(ace.vars[".icon"]).eq(0),
          d = null,
          e = null;
      (d = b.attr("data-icon1")) ? e = b.attr("data-icon2") : (d = "fa-expand", e = "fa-compress");
      var f = this.$box.hasClass("fullscreen"),
          g = a !== !0 && a !== !1;
      a === !0 || g && !f ? (b.removeClass(d).addClass(e), this.$box.addClass("fullscreen"), c(this.$box, !0)) : (a === !1 || g && f) && (b.addClass(d).removeClass(e), this.$box.removeClass("fullscreen"), c(this.$box, !1)), this.$box.trigger("fullscreened.ace.widget");
    };
  };

  a.fn.widget_box = function (c, e) {
    var f,
        g = this.each(function () {
      var b = a(this),
          g = b.data("widget_box"),
          h = "object" == _typeof(c) && c;
      g || b.data("widget_box", g = new d(this, h)), "string" == typeof c && (f = g[c](e));
    });
    return f === b ? g : f;
  }, a(document).on(ace.click_event + ".ace.widget", ".widget-header a[data-action]", function (b) {
    b.preventDefault();
    var c = a(this),
        e = c.closest(".widget-box");

    if (0 != e.length && !e.hasClass("ui-sortable-helper")) {
      var f = e.data("widget_box");
      f || e.data("widget_box", f = new d(e.get(0)));
      var g = c.data("action");

      if ("collapse" == g) {
        var h,
            i = e.hasClass("collapsed") ? "show" : "hide";
        if (e.trigger(h = a.Event(i + ".ace.widget")), h.isDefaultPrevented()) return;
        e.trigger(h = a.Event("toggle.ace.widget"), [i]), f.toggle(i, c);
      } else if ("close" == g) {
        var h;
        if (e.trigger(h = a.Event("close.ace.widget")), h.isDefaultPrevented()) return;
        f.close();
      } else if ("reload" == g) {
        c.blur();
        var h;
        if (e.trigger(h = a.Event("reload.ace.widget")), h.isDefaultPrevented()) return;
        f.reload();
      } else if ("fullscreen" == g) {
        var h;
        if (e.trigger(h = a.Event("fullscreen.ace.widget")), h.isDefaultPrevented()) return;
        f.fullscreen();
      } else "settings" == g && e.trigger("setting.ace.widget");
    }
  });
}(window.jQuery), function (a, b) {
  a("#ace-settings-btn").on(ace.click_event, function (b) {
    b.preventDefault(), a(this).toggleClass("open"), a("#ace-settings-box").toggleClass("open");
  }), a("#ace-settings-navbar").on("click", function () {
    ace.settingFunction.navbar_fixed(null, this.checked);
  }), a("#ace-settings-sidebar").on("click", function () {
    ace.settingFunction.sidebar_fixed(null, this.checked);
  }), a("#ace-settings-breadcrumbs").on("click", function () {
    ace.settingFunction.breadcrumbs_fixed(null, this.checked);
  }), a("#ace-settings-add-container").on("click", function () {
    ace.settingFunction.main_container_fixed(null, this.checked);
  }), a("#ace-settings-compact").on("click", function () {
    if (this.checked) {
      a("#sidebar").addClass("compact");
      var b = a("#ace-settings-hover");
      b.length > 0 && b.removeAttr("checked").trigger("click");
    } else a("#sidebar").removeClass("compact"), a("#sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("reset");

    ace.vars.old_ie && ace.helper.redraw(a("#sidebar")[0], !0);
  }), a("#ace-settings-highlight").on("click", function () {
    this.checked ? a("#sidebar .nav-list > li").addClass("highlight") : a("#sidebar .nav-list > li").removeClass("highlight"), ace.vars.old_ie && ace.helper.redraw(a("#sidebar")[0]);
  }), a("#ace-settings-hover").on("click", function () {
    if (!a("#sidebar").hasClass("h-sidebar")) {
      if (this.checked) a("#sidebar li").addClass("hover").filter(".open").removeClass("open").find("> .submenu").css("display", "none");else {
        a("#sidebar li.hover").removeClass("hover");
        var b = a("#ace-settings-compact");
        b.length > 0 && b.get(0).checked && b.trigger("click");
      }
      a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("reset"), a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("reset"), ace.vars.old_ie && ace.helper.redraw(a("#sidebar")[0]);
    }
  });
  a(document).on("settings.ace", function (b, c, d, e, f) {
    var g = "";

    switch (c) {
      case "navbar_fixed":
        g = "ace-settings-navbar";
        break;

      case "sidebar_fixed":
        g = "ace-settings-sidebar";
        break;

      case "breadcrumbs_fixed":
        g = "ace-settings-breadcrumbs";
        break;

      case "main_container_fixed":
        g = "ace-settings-add-container";
    }

    if (g && (g = document.getElementById(g))) {
      a(g).prop("checked", d);

      try {
        1 == f && ace.settings.saveState(g, "checked");
      } catch (h) {}
    }
  }), ace.settingFunction = {
    navbar_fixed: function navbar_fixed(b, c, d, e) {
      if (ace.vars.very_old_ie) return !1;
      var b = b || "#navbar";
      if ("string" == typeof b && (b = a(b).get(0)), !b) return !1;
      var f,
          c = c || !1,
          d = "undefined" != typeof d ? d : !0;
      if (a(document).trigger(f = a.Event("presettings.ace"), ["navbar_fixed", c, b, d]), f.isDefaultPrevented()) return !1;

      if (e !== !1 && !c) {
        var g = a("#sidebar");
        g.hasClass("sidebar-fixed") && ace.settingFunction.sidebar_fixed(g.get(0), !1, d);
      }

      c ? a(b).addClass("navbar-fixed-top") : a(b).removeClass("navbar-fixed-top"), d && ace.settings.saveState(b, "class", "navbar-fixed-top", c), a(document).trigger("settings.ace", ["navbar_fixed", c, b, d]);
    },
    sidebar_fixed: function sidebar_fixed(b, c, d, e) {
      if (ace.vars.very_old_ie) return !1;
      var b = b || "#sidebar";
      if ("string" == typeof b && (b = a(b).get(0)), !b) return !1;
      var f,
          c = c || !1,
          d = "undefined" != typeof d ? d : !0;
      if (a(document).trigger(f = a.Event("presettings.ace"), ["sidebar_fixed", c, b, d]), f.isDefaultPrevented()) return !1;
      e !== !1 && (c ? ace.settingFunction.navbar_fixed(null, !0, d) : ace.settingFunction.breadcrumbs_fixed(null, !1, d));
      var g = a("#menu-toggler");
      c ? (a(b).addClass("sidebar-fixed"), g.addClass("fixed")) : (a(b).removeClass("sidebar-fixed"), g.removeClass("fixed")), d && (ace.settings.saveState(b, "class", "sidebar-fixed", c), 0 != g.length && ace.settings.saveState(g[0], "class", "fixed", c)), a(document).trigger("settings.ace", ["sidebar_fixed", c, b, d]);
    },
    breadcrumbs_fixed: function breadcrumbs_fixed(b, c, d, e) {
      if (ace.vars.very_old_ie) return !1;
      var b = b || "#breadcrumbs";
      if ("string" == typeof b && (b = a(b).get(0)), !b) return !1;
      var f,
          c = c || !1,
          d = "undefined" != typeof d ? d : !0;
      return a(document).trigger(f = a.Event("presettings.ace"), ["breadcrumbs_fixed", c, b, d]), f.isDefaultPrevented() ? !1 : (c && e !== !1 && ace.settingFunction.sidebar_fixed(null, !0, d), c ? a(b).addClass("breadcrumbs-fixed") : a(b).removeClass("breadcrumbs-fixed"), d && ace.settings.saveState(b, "class", "breadcrumbs-fixed", c), void a(document).trigger("settings.ace", ["breadcrumbs_fixed", c, b, d]));
    },
    main_container_fixed: function main_container_fixed(b, c, d) {
      if (ace.vars.very_old_ie) return !1;
      var c = c || !1,
          d = "undefined" != typeof d ? d : !0,
          b = b || "#main-container";
      if ("string" == typeof b && (b = a(b).get(0)), !b) return !1;
      var e;
      if (a(document).trigger(e = a.Event("presettings.ace"), ["main_container_fixed", c, b, d]), e.isDefaultPrevented()) return !1;
      var f = a("#navbar-container");
      c ? (a(b).addClass("container"), a(f).addClass("container")) : (a(b).removeClass("container"), a(f).removeClass("container")), d && (ace.settings.saveState(b, "class", "container", c), 0 != f.length && ace.settings.saveState(f[0], "class", "container", c)), navigator.userAgent.match(/webkit/i) && (a("#sidebar").toggleClass("menu-min"), setTimeout(function () {
        a("#sidebar").toggleClass("menu-min");
      }, 10)), a(document).trigger("settings.ace", ["main_container_fixed", c, b, d]);
    }
  };
}(jQuery), function (a, b) {
  a("#ace-settings-rtl").removeAttr("checked").on("click", function () {
    c();
  });

  var c = function c() {
    function b(b) {
      function c(a, b) {
        e.find("." + a).removeClass(a).addClass("tmp-rtl-" + a).end().find("." + b).removeClass(b).addClass(a).end().find(".tmp-rtl-" + a).removeClass("tmp-rtl-" + a).addClass(b);
      }

      var d = a(document.body);
      b || d.toggleClass("rtl"), b = b || document.body;
      var e = a(b);
      e.find(".dropdown-menu:not(.datepicker-dropdown,.colorpicker)").toggleClass("dropdown-menu-right").end().find(".pull-right:not(.dropdown-menu,blockquote,.profile-skills .pull-right)").removeClass("pull-right").addClass("tmp-rtl-pull-right").end().find(".pull-left:not(.dropdown-submenu,.profile-skills .pull-left)").removeClass("pull-left").addClass("pull-right").end().find(".tmp-rtl-pull-right").removeClass("tmp-rtl-pull-right").addClass("pull-left").end().find(".chosen-select").toggleClass("chosen-rtl").next().toggleClass("chosen-rtl"), c("align-left", "align-right"), c("no-padding-left", "no-padding-right"), c("arrowed", "arrowed-right"), c("arrowed-in", "arrowed-in-right"), c("tabs-left", "tabs-right"), c("messagebar-item-left", "messagebar-item-right"), a(".modal.aside-vc").ace_aside("flip").ace_aside("insideContainer"), e.find(".fa").each(function () {
        if (!(this.className.match(/ui-icon/) || a(this).closest(".fc-button").length > 0)) for (var b = this.attributes.length, c = 0; b > c; c++) {
          var d = this.attributes[c].value;
          d.match(/fa\-(?:[\w\-]+)\-left/) ? this.attributes[c].value = d.replace(/fa\-([\w\-]+)\-(left)/i, "fa-$1-right") : d.match(/fa\-(?:[\w\-]+)\-right/) && (this.attributes[c].value = d.replace(/fa\-([\w\-]+)\-(right)/i, "fa-$1-left"));
        }
      });
      var f = d.hasClass("rtl");
      f ? (e.find(".scroll-hz").addClass("make-ltr").find(".scroll-content").wrapInner('<div class="make-rtl" />'), a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("changeDir", "right")) : (e.find(".scroll-hz").removeClass("make-ltr").find(".make-rtl").children().unwrap(), a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("changeDir", "left")), a.fn.ace_scroll && e.find(".scroll-hz").ace_scroll("reset");

      try {
        var g = a("#piechart-placeholder");

        if (g.length > 0) {
          var h = d.hasClass("rtl") ? "nw" : "ne";
          g.data("draw").call(g.get(0), g, g.data("chart"), h);
        }
      } catch (i) {}

      ace.helper.redraw(b, !0);
    }

    b(), a(".page-content-area[data-ajax-content=true]").on("ajaxscriptsloaded.rtl", function () {
      a("body").hasClass("rtl") && b(this);
    });
  };
}(jQuery), function (a, b) {
  try {
    a("#skin-colorpicker").ace_colorpicker({
      auto_pos: !1
    });
  } catch (c) {}

  a("#skin-colorpicker").on("change", function () {
    function b(b) {
      var c = a(document.body);
      c.removeClass("no-skin skin-1 skin-2 skin-3"), c.addClass(b), ace.data.set("skin", b);
      var d = ["red", "blue", "green", ""];
      a(".ace-nav > li.grey").removeClass("dark"), a(".ace-nav > li").removeClass("no-border margin-1"), a(".ace-nav > li:not(:last-child)").removeClass("light-pink").find("> a > " + ace.vars[".icon"]).removeClass("pink").end().eq(0).find(".badge").removeClass("badge-warning"), a(".sidebar-shortcuts .btn").removeClass("btn-pink btn-white").find(ace.vars[".icon"]).removeClass("white"), a(".ace-nav > li.grey").removeClass("red").find(".badge").removeClass("badge-yellow"), a(".sidebar-shortcuts .btn").removeClass("btn-primary btn-white");
      var e = 0;
      a(".sidebar-shortcuts .btn").each(function () {
        a(this).find(ace.vars[".icon"]).removeClass(d[e++]);
      });
      var f = ["btn-success", "btn-info", "btn-warning", "btn-danger"];

      if ("no-skin" == b) {
        var e = 0;
        a(".sidebar-shortcuts .btn").each(function () {
          a(this).attr("class", "btn " + f[e++ % 4]);
        }), a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle", ""), a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle", "no-track scroll-thin");
      } else if ("skin-1" == b) {
        a(".ace-nav > li.grey").addClass("dark");
        var e = 0;
        a(".sidebar-shortcuts").find(".btn").each(function () {
          a(this).attr("class", "btn " + f[e++ % 4]);
        }), a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle", "scroll-white no-track"), a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle", "no-track scroll-thin scroll-white");
      } else if ("skin-2" == b) a(".ace-nav > li").addClass("no-border margin-1"), a(".ace-nav > li:not(:last-child)").addClass("light-pink").find("> a > " + ace.vars[".icon"]).addClass("pink").end().eq(0).find(".badge").addClass("badge-warning"), a(".sidebar-shortcuts .btn").attr("class", "btn btn-white btn-pink").find(ace.vars[".icon"]).addClass("white"), a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle", "scroll-white no-track"), a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle", "no-track scroll-thin scroll-white");else if ("skin-3" == b) {
        c.addClass("no-skin"), a(".ace-nav > li.grey").addClass("red").find(".badge").addClass("badge-yellow");
        var e = 0;
        a(".sidebar-shortcuts .btn").each(function () {
          a(this).attr("class", "btn btn-primary btn-white"), a(this).find(ace.vars[".icon"]).addClass(d[e++]);
        }), a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle", "scroll-dark no-track"), a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle", "no-track scroll-thin");
      }

      a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("reset"), ace.vars.old_ie && ace.helper.redraw(document.body, !0);
    }

    var c = a(this).find("option:selected").data("skin");
    b(c);
  });
}(jQuery), function (a, b) {
  a(document).on("reload.ace.widget", ".widget-box", function (b) {
    var c = a(this);
    setTimeout(function () {
      c.trigger("reloaded.ace.widget");
    }, parseInt(1e3 * Math.random() + 1e3));
  });
}(window.jQuery), function (a, b) {
  ace.vars.US_STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

  try {
    a("#nav-search-input").bs_typeahead({
      source: ace.vars.US_STATES,
      updater: function updater(b) {
        return a("#nav-search-input").focus(), b;
      }
    });
  } catch (c) {}
}(window.jQuery);

/***/ }),

/***/ "./resources/assests/js/jquery-ui.custom.min.js":
/*!******************************************************!*\
  !*** ./resources/assests/js/jquery-ui.custom.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery UI - v1.11.4 - 2015-09-20
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, slider.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  function b(b, d) {
    var e,
        f,
        g,
        h = b.nodeName.toLowerCase();
    return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b);
  }

  function c(b) {
    return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
      return "hidden" === a.css(this, "visibility");
    }).length;
  }

  a.ui = a.ui || {}, a.extend(a.ui, {
    version: "1.11.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), a.fn.extend({
    scrollParent: function scrollParent(b) {
      var c = this.css("position"),
          d = "absolute" === c,
          e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          f = this.parents().filter(function () {
        var b = a(this);
        return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"));
      }).eq(0);
      return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document);
    },
    uniqueId: function () {
      var a = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++a);
        });
      };
    }(),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id");
      });
    }
  }), a.extend(a.expr[":"], {
    data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
      return function (c) {
        return !!a.data(c, b);
      };
    }) : function (b, c, d) {
      return !!a.data(b, d[3]);
    },
    focusable: function focusable(c) {
      return b(c, !isNaN(a.attr(c, "tabindex")));
    },
    tabbable: function tabbable(c) {
      var d = a.attr(c, "tabindex"),
          e = isNaN(d);
      return (e || d >= 0) && b(c, !e);
    }
  }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (b, c) {
    function d(b, c, d, f) {
      return a.each(e, function () {
        c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
      }), c;
    }

    var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
        f = c.toLowerCase(),
        g = {
      innerWidth: a.fn.innerWidth,
      innerHeight: a.fn.innerHeight,
      outerWidth: a.fn.outerWidth,
      outerHeight: a.fn.outerHeight
    };
    a.fn["inner" + c] = function (b) {
      return void 0 === b ? g["inner" + c].call(this) : this.each(function () {
        a(this).css(f, d(this, b) + "px");
      });
    }, a.fn["outer" + c] = function (b, e) {
      return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function () {
        a(this).css(f, d(this, b, !0, e) + "px");
      });
    };
  }), a.fn.addBack || (a.fn.addBack = function (a) {
    return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
  }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
    return function (c) {
      return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
    };
  }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
    focus: function (b) {
      return function (c, d) {
        return "number" == typeof c ? this.each(function () {
          var b = this;
          setTimeout(function () {
            a(b).focus(), d && d.call(b);
          }, c);
        }) : b.apply(this, arguments);
      };
    }(a.fn.focus),
    disableSelection: function () {
      var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.bind(a + ".ui-disableSelection", function (a) {
          a.preventDefault();
        });
      };
    }(),
    enableSelection: function enableSelection() {
      return this.unbind(".ui-disableSelection");
    },
    zIndex: function zIndex(b) {
      if (void 0 !== b) return this.css("zIndex", b);
      if (this.length) for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
        if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
        e = e.parent();
      }
      return 0;
    }
  }), a.ui.plugin = {
    add: function add(b, c, d) {
      var e,
          f = a.ui[b].prototype;

      for (e in d) {
        f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]]);
      }
    },
    call: function call(a, b, c, d) {
      var e,
          f = a.plugins[b];
      if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)) for (e = 0; e < f.length; e++) {
        a.options[f[e][0]] && f[e][1].apply(a.element, c);
      }
    }
  };
  var d = 0,
      e = Array.prototype.slice;
  a.cleanData = function (b) {
    return function (c) {
      var d, e, f;

      for (f = 0; null != (e = c[f]); f++) {
        try {
          d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove");
        } catch (g) {}
      }

      b(c);
    };
  }(a.cleanData), a.widget = function (b, c, d) {
    var e,
        f,
        g,
        h,
        i = {},
        j = b.split(".")[0];
    return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
      return !!a.data(b, e);
    }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function (a, b) {
      return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new g(a, b);
    }, a.extend(g, f, {
      version: d.version,
      _proto: a.extend({}, d),
      _childConstructors: []
    }), h = new c(), h.options = a.widget.extend({}, h.options), a.each(d, function (b, d) {
      return a.isFunction(d) ? void (i[b] = function () {
        var a = function a() {
          return c.prototype[b].apply(this, arguments);
        },
            e = function e(a) {
          return c.prototype[b].apply(this, a);
        };

        return function () {
          var b,
              c = this._super,
              f = this._superApply;
          return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b;
        };
      }()) : void (i[b] = d);
    }), g.prototype = a.widget.extend(h, {
      widgetEventPrefix: f ? h.widgetEventPrefix || b : b
    }, i, {
      constructor: g,
      namespace: j,
      widgetName: b,
      widgetFullName: e
    }), f ? (a.each(f._childConstructors, function (b, c) {
      var d = c.prototype;
      a.widget(d.namespace + "." + d.widgetName, g, c._proto);
    }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g;
  }, a.widget.extend = function (b) {
    for (var c, d, f = e.call(arguments, 1), g = 0, h = f.length; h > g; g++) {
      for (c in f[g]) {
        d = f[g][c], f[g].hasOwnProperty(c) && void 0 !== d && (a.isPlainObject(d) ? b[c] = a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : b[c] = d);
      }
    }

    return b;
  }, a.widget.bridge = function (b, c) {
    var d = c.prototype.widgetFullName || b;

    a.fn[b] = function (f) {
      var g = "string" == typeof f,
          h = e.call(arguments, 1),
          i = this;
      return g ? this.each(function () {
        var c,
            e = a.data(this, d);
        return "instance" === f ? (i = e, !1) : e ? a.isFunction(e[f]) && "_" !== f.charAt(0) ? (c = e[f].apply(e, h), c !== e && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'");
      }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function () {
        var b = a.data(this, d);
        b ? (b.option(f || {}), b._init && b._init()) : a.data(this, d, new c(f, this));
      })), i;
    };
  }, a.Widget = function () {}, a.Widget._childConstructors = [], a.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function _createWidget(b, c) {
      c = a(c || this.defaultElement || this)[0], this.element = a(c), this.uuid = d++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function remove(a) {
          a.target === c && this.destroy();
        }
      }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: a.noop,
    _getCreateEventData: a.noop,
    _create: a.noop,
    _init: a.noop,
    destroy: function destroy() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
    },
    _destroy: a.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(b, c) {
      var d,
          e,
          f,
          g = b;
      if (0 === arguments.length) return a.widget.extend({}, this.options);
      if ("string" == typeof b) if (g = {}, d = b.split("."), b = d.shift(), d.length) {
        for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) {
          e[d[f]] = e[d[f]] || {}, e = e[d[f]];
        }

        if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
        e[b] = c;
      } else {
        if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
        g[b] = c;
      }
      return this._setOptions(g), this;
    },
    _setOptions: function _setOptions(a) {
      var b;

      for (b in a) {
        this._setOption(b, a[b]);
      }

      return this;
    },
    _setOption: function _setOption(a, b) {
      return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
    },
    enable: function enable() {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: !0
      });
    },
    _on: function _on(b, c, d) {
      var e,
          f = this;
      "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
        function h() {
          return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0;
        }

        "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
        var i = d.match(/^([\w:-]*)\s*(.*)$/),
            j = i[1] + f.eventNamespace,
            k = i[2];
        k ? e.delegate(k, j, h) : c.bind(j, h);
      });
    },
    _off: function _off(b, c) {
      c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get());
    },
    _delay: function _delay(a, b) {
      function c() {
        return ("string" == typeof a ? d[a] : a).apply(d, arguments);
      }

      var d = this;
      return setTimeout(c, b || 0);
    },
    _hoverable: function _hoverable(b) {
      this.hoverable = this.hoverable.add(b), this._on(b, {
        mouseenter: function mouseenter(b) {
          a(b.currentTarget).addClass("ui-state-hover");
        },
        mouseleave: function mouseleave(b) {
          a(b.currentTarget).removeClass("ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(b) {
      this.focusable = this.focusable.add(b), this._on(b, {
        focusin: function focusin(b) {
          a(b.currentTarget).addClass("ui-state-focus");
        },
        focusout: function focusout(b) {
          a(b.currentTarget).removeClass("ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(b, c, d) {
      var e,
          f,
          g = this.options[b];
      if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent) for (e in f) {
        e in c || (c[e] = f[e]);
      }
      return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented());
    }
  }, a.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (b, c) {
    a.Widget.prototype["_" + b] = function (d, e, f) {
      "string" == typeof e && (e = {
        effect: e
      });
      var g,
          h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
      e = e || {}, "number" == typeof e && (e = {
        duration: e
      }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
        a(this)[b](), f && f.call(d[0]), c();
      });
    };
  });
  var f = (a.widget, !1);
  a(document).mouseup(function () {
    f = !1;
  });
  a.widget("ui.mouse", {
    version: "1.11.4",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var b = this;
      this.element.bind("mousedown." + this.widgetName, function (a) {
        return b._mouseDown(a);
      }).bind("click." + this.widgetName, function (c) {
        return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    },
    _mouseDestroy: function _mouseDestroy() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function _mouseDown(b) {
      if (!f) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
        var c = this,
            d = 1 === b.which,
            e = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
        return d && !e && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          c.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
          return c._mouseMove(a);
        }, this._mouseUpDelegate = function (a) {
          return c._mouseUp(a);
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), f = !0, !0)) : !0;
      }
    },
    _mouseMove: function _mouseMove(b) {
      if (this._mouseMoved) {
        if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
        if (!b.which) return this._mouseUp(b);
      }

      return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted);
    },
    _mouseUp: function _mouseUp(b) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), f = !1, !1;
    },
    _mouseDistanceMet: function _mouseDistanceMet(a) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    },
    _mouseStart: function _mouseStart() {},
    _mouseDrag: function _mouseDrag() {},
    _mouseStop: function _mouseStop() {},
    _mouseCapture: function _mouseCapture() {
      return !0;
    }
  });
  !function () {
    function b(a, b, c) {
      return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)];
    }

    function c(b, c) {
      return parseInt(a.css(b, c), 10) || 0;
    }

    function d(b) {
      var c = b[0];
      return 9 === c.nodeType ? {
        width: b.width(),
        height: b.height(),
        offset: {
          top: 0,
          left: 0
        }
      } : a.isWindow(c) ? {
        width: b.width(),
        height: b.height(),
        offset: {
          top: b.scrollTop(),
          left: b.scrollLeft()
        }
      } : c.preventDefault ? {
        width: 0,
        height: 0,
        offset: {
          top: c.pageY,
          left: c.pageX
        }
      } : {
        width: b.outerWidth(),
        height: b.outerHeight(),
        offset: b.offset()
      };
    }

    a.ui = a.ui || {};
    var e,
        f,
        g = Math.max,
        h = Math.abs,
        i = Math.round,
        j = /left|center|right/,
        k = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        m = /^\w+/,
        n = /%$/,
        o = a.fn.position;
    a.position = {
      scrollbarWidth: function scrollbarWidth() {
        if (void 0 !== e) return e;
        var b,
            c,
            d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            f = d.children()[0];
        return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c;
      },
      getScrollInfo: function getScrollInfo(b) {
        var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
            d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
            e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
            f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
        return {
          width: f ? a.position.scrollbarWidth() : 0,
          height: e ? a.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function getWithinInfo(b) {
        var c = a(b || window),
            d = a.isWindow(c[0]),
            e = !!c[0] && 9 === c[0].nodeType;
        return {
          element: c,
          isWindow: d,
          isDocument: e,
          offset: c.offset() || {
            left: 0,
            top: 0
          },
          scrollLeft: c.scrollLeft(),
          scrollTop: c.scrollTop(),
          width: d || e ? c.width() : c.outerWidth(),
          height: d || e ? c.height() : c.outerHeight()
        };
      }
    }, a.fn.position = function (e) {
      if (!e || !e.of) return o.apply(this, arguments);
      e = a.extend({}, e);
      var n,
          p,
          q,
          r,
          s,
          t,
          u = a(e.of),
          v = a.position.getWithinInfo(e.within),
          w = a.position.getScrollInfo(v),
          x = (e.collision || "flip").split(" "),
          y = {};
      return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function () {
        var a,
            b,
            c = (e[this] || "").split(" ");
        1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]];
      }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function () {
        var d,
            j,
            k = a(this),
            l = k.outerWidth(),
            m = k.outerHeight(),
            o = c(this, "marginLeft"),
            t = c(this, "marginTop"),
            z = l + o + c(this, "marginRight") + w.width,
            A = m + t + c(this, "marginBottom") + w.height,
            B = a.extend({}, s),
            C = b(y.my, k.outerWidth(), k.outerHeight());
        "right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {
          marginLeft: o,
          marginTop: t
        }, a.each(["left", "top"], function (b, c) {
          a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
            targetWidth: p,
            targetHeight: q,
            elemWidth: l,
            elemHeight: m,
            collisionPosition: d,
            collisionWidth: z,
            collisionHeight: A,
            offset: [n[0] + C[0], n[1] + C[1]],
            my: e.my,
            at: e.at,
            within: v,
            elem: k
          });
        }), e.using && (j = function j(a) {
          var b = r.left - B.left,
              c = b + p - l,
              d = r.top - B.top,
              f = d + q - m,
              i = {
            target: {
              element: u,
              left: r.left,
              top: r.top,
              width: p,
              height: q
            },
            element: {
              element: k,
              left: B.left,
              top: B.top,
              width: l,
              height: m
            },
            horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
            vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle"
          };
          l > p && h(b + c) < p && (i.horizontal = "center"), m > q && h(d + f) < q && (i.vertical = "middle"), g(h(b), h(c)) > g(h(d), h(f)) ? i.important = "horizontal" : i.important = "vertical", e.using.call(this, a, i);
        }), k.offset(a.extend(B, {
          using: j
        }));
      });
    }, a.ui.position = {
      fit: {
        left: function left(a, b) {
          var c,
              d = b.within,
              e = d.isWindow ? d.scrollLeft : d.offset.left,
              f = d.width,
              h = a.left - b.collisionPosition.marginLeft,
              i = e - h,
              j = h + b.collisionWidth - f - e;
          b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : j > 0 && 0 >= i ? a.left = e : i > j ? a.left = e + f - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left);
        },
        top: function top(a, b) {
          var c,
              d = b.within,
              e = d.isWindow ? d.scrollTop : d.offset.top,
              f = b.within.height,
              h = a.top - b.collisionPosition.marginTop,
              i = e - h,
              j = h + b.collisionHeight - f - e;
          b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : j > 0 && 0 >= i ? a.top = e : i > j ? a.top = e + f - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top);
        }
      },
      flip: {
        left: function left(a, b) {
          var c,
              d,
              e = b.within,
              f = e.offset.left + e.scrollLeft,
              g = e.width,
              i = e.isWindow ? e.scrollLeft : e.offset.left,
              j = a.left - b.collisionPosition.marginLeft,
              k = j - i,
              l = j + b.collisionWidth - g - i,
              m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
              n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
              o = -2 * b.offset[0];
          0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || h(d) < l) && (a.left += m + n + o));
        },
        top: function top(a, b) {
          var c,
              d,
              e = b.within,
              f = e.offset.top + e.scrollTop,
              g = e.height,
              i = e.isWindow ? e.scrollTop : e.offset.top,
              j = a.top - b.collisionPosition.marginTop,
              k = j - i,
              l = j + b.collisionHeight - g - i,
              m = "top" === b.my[1],
              n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
              o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
              p = -2 * b.offset[1];
          0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, (0 > d || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || h(c) < l) && (a.top += n + o + p));
        }
      },
      flipfit: {
        left: function left() {
          a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments);
        },
        top: function top() {
          a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments);
        }
      }
    }, function () {
      var b,
          c,
          d,
          e,
          g,
          h = document.getElementsByTagName("body")[0],
          i = document.createElement("div");
      b = document.createElement(h ? "div" : "body"), d = {
        visibility: "hidden",
        width: 0,
        height: 0,
        border: 0,
        margin: 0,
        background: "none"
      }, h && a.extend(d, {
        position: "absolute",
        left: "-1000px",
        top: "-1000px"
      });

      for (g in d) {
        b.style[g] = d[g];
      }

      b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, f = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b);
    }();
  }();
  a.ui.position;
  a.widget("ui.draggable", a.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function _create() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit();
    },
    _setOption: function _setOption(a, b) {
      this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function _destroy() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy());
    },
    _mouseCapture: function _mouseCapture(b) {
      var c = this.options;
      return this._blurActiveElement(b), this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0) : !1);
    },
    _blockFrames: function _blockFrames(b) {
      this.iframeBlocks = this.document.find(b).map(function () {
        var b = a(this);
        return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function _blurActiveElement(b) {
      var c = this.document[0];
      if (this.handleElement.is(b.target)) try {
        c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur();
      } catch (d) {}
    },
    _mouseStart: function _mouseStart(b) {
      var c = this.options;
      return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === a(this).css("position");
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0);
    },
    _refreshOffsets: function _refreshOffsets(a) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: a.pageX - this.offset.left,
        top: a.pageY - this.offset.top
      };
    },
    _mouseDrag: function _mouseDrag(b, c) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
        var d = this._uiHash();

        if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
        this.position = d.position;
      }

      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
    },
    _mouseStop: function _mouseStop(b) {
      var c = this,
          d = !1;
      return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        c._trigger("stop", b) !== !1 && c._clear();
      }) : this._trigger("stop", b) !== !1 && this._clear(), !1;
    },
    _mouseUp: function _mouseUp(b) {
      return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b);
    },
    cancel: function cancel() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
    },
    _getHandle: function _getHandle(b) {
      return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0;
    },
    _setHandleClassName: function _setHandleClassName() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle");
    },
    _removeHandleClassName: function _removeHandleClassName() {
      this.handleElement.removeClass("ui-draggable-handle");
    },
    _createHelper: function _createHelper(b) {
      var c = this.options,
          d = a.isFunction(c.helper),
          e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
      return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e;
    },
    _setPositionRelative: function _setPositionRelative() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(b) {
      "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
        left: +b[0],
        top: +b[1] || 0
      }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
    },
    _isRootNode: function _isRootNode(a) {
      return /(html|body)/i.test(a.tagName) || a === this.document[0];
    },
    _getParentOffset: function _getParentOffset() {
      var b = this.offsetParent.offset(),
          c = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
        top: 0,
        left: 0
      }), {
        top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };

      var a = this.element.position(),
          b = this._isRootNode(this.scrollParent[0]);

      return {
        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var b,
          c,
          d,
          e = this.options,
          f = this.document[0];
      return this.relativeContainer = null, e.containment ? "window" === e.containment ? void (this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void (this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void (this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void (d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void (this.containment = null);
    },
    _convertPositionTo: function _convertPositionTo(a, b) {
      b || (b = this.position);

      var c = "absolute" === a ? 1 : -1,
          d = this._isRootNode(this.scrollParent[0]);

      return {
        top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
        left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
      };
    },
    _generatePosition: function _generatePosition(a, b) {
      var c,
          d,
          e,
          f,
          g = this.options,
          h = this._isRootNode(this.scrollParent[0]),
          i = a.pageX,
          j = a.pageY;

      return h && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
        top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
        left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
      };
    },
    _clear: function _clear() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
    },
    _normalizeRightBottom: function _normalizeRightBottom() {
      "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"));
    },
    _trigger: function _trigger(b, c, d) {
      return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d);
    },
    plugins: {},
    _uiHash: function _uiHash() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), a.ui.plugin.add("draggable", "connectToSortable", {
    start: function start(b, c, d) {
      var e = a.extend({}, c, {
        item: d.element
      });
      d.sortables = [], a(d.options.connectToSortable).each(function () {
        var c = a(this).sortable("instance");
        c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e));
      });
    },
    stop: function stop(b, c, d) {
      var e = a.extend({}, c, {
        item: d.element
      });
      d.cancelHelperRemoval = !1, a.each(d.sortables, function () {
        var a = this;
        a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
          position: a.placeholder.css("position"),
          top: a.placeholder.css("top"),
          left: a.placeholder.css("left")
        }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e));
      });
    },
    drag: function drag(b, c, d) {
      a.each(d.sortables, function () {
        var e = !1,
            f = this;
        f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function () {
          return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e;
        })), e ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function () {
          return c.helper[0];
        }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function () {
          this.refreshPositions();
        }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function () {
          this.refreshPositions();
        }));
      });
    }
  }), a.ui.plugin.add("draggable", "cursor", {
    start: function start(b, c, d) {
      var e = a("body"),
          f = d.options;
      e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor);
    },
    stop: function stop(b, c, d) {
      var e = d.options;
      e._cursor && a("body").css("cursor", e._cursor);
    }
  }), a.ui.plugin.add("draggable", "opacity", {
    start: function start(b, c, d) {
      var e = a(c.helper),
          f = d.options;
      e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity);
    },
    stop: function stop(b, c, d) {
      var e = d.options;
      e._opacity && a(c.helper).css("opacity", e._opacity);
    }
  }), a.ui.plugin.add("draggable", "scroll", {
    start: function start(a, b, c) {
      c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset());
    },
    drag: function drag(b, c, d) {
      var e = d.options,
          f = !1,
          g = d.scrollParentNotHidden[0],
          h = d.document[0];
      g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b);
    }
  }), a.ui.plugin.add("draggable", "snap", {
    start: function start(b, c, d) {
      var e = d.options;
      d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function () {
        var b = a(this),
            c = b.offset();
        this !== d.element[0] && d.snapElements.push({
          item: this,
          width: b.outerWidth(),
          height: b.outerHeight(),
          top: c.top,
          left: c.left
        });
      });
    },
    drag: function drag(b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = d.options,
          p = o.snapTolerance,
          q = c.offset.left,
          r = q + d.helperProportions.width,
          s = c.offset.top,
          t = s + d.helperProportions.height;

      for (m = d.snapElements.length - 1; m >= 0; m--) {
        i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
          snapItem: d.snapElements[m].item
        })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = Math.abs(k - t) <= p, f = Math.abs(l - s) <= p, g = Math.abs(i - r) <= p, h = Math.abs(j - q) <= p, e && (c.position.top = d._convertPositionTo("relative", {
          top: k - d.helperProportions.height,
          left: 0
        }).top), f && (c.position.top = d._convertPositionTo("relative", {
          top: l,
          left: 0
        }).top), g && (c.position.left = d._convertPositionTo("relative", {
          top: 0,
          left: i - d.helperProportions.width
        }).left), h && (c.position.left = d._convertPositionTo("relative", {
          top: 0,
          left: j
        }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = Math.abs(k - s) <= p, f = Math.abs(l - t) <= p, g = Math.abs(i - q) <= p, h = Math.abs(j - r) <= p, e && (c.position.top = d._convertPositionTo("relative", {
          top: k,
          left: 0
        }).top), f && (c.position.top = d._convertPositionTo("relative", {
          top: l - d.helperProportions.height,
          left: 0
        }).top), g && (c.position.left = d._convertPositionTo("relative", {
          top: 0,
          left: i
        }).left), h && (c.position.left = d._convertPositionTo("relative", {
          top: 0,
          left: j - d.helperProportions.width
        }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
          snapItem: d.snapElements[m].item
        })), d.snapElements[m].snapping = e || f || g || h || n);
      }
    }
  }), a.ui.plugin.add("draggable", "stack", {
    start: function start(b, c, d) {
      var e,
          f = d.options,
          g = a.makeArray(a(f.stack)).sort(function (b, c) {
        return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
      });
      g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function (b) {
        a(this).css("zIndex", e + b);
      }), this.css("zIndex", e + g.length));
    }
  }), a.ui.plugin.add("draggable", "zIndex", {
    start: function start(b, c, d) {
      var e = a(c.helper),
          f = d.options;
      e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex);
    },
    stop: function stop(b, c, d) {
      var e = d.options;
      e._zIndex && a(c.helper).css("zIndex", e._zIndex);
    }
  });
  a.ui.draggable;
  a.widget("ui.droppable", {
    version: "1.11.4",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function _create() {
      var b,
          c = this.options,
          d = c.accept;
      this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function (a) {
        return a.is(d);
      }, this.proportions = function () {
        return arguments.length ? void (b = arguments[0]) : b ? b : b = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight
        };
      }, this._addToManager(c.scope), c.addClasses && this.element.addClass("ui-droppable");
    },
    _addToManager: function _addToManager(b) {
      a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [], a.ui.ddmanager.droppables[b].push(this);
    },
    _splice: function _splice(a) {
      for (var b = 0; b < a.length; b++) {
        a[b] === this && a.splice(b, 1);
      }
    },
    _destroy: function _destroy() {
      var b = a.ui.ddmanager.droppables[this.options.scope];
      this._splice(b), this.element.removeClass("ui-droppable ui-droppable-disabled");
    },
    _setOption: function _setOption(b, c) {
      if ("accept" === b) this.accept = a.isFunction(c) ? c : function (a) {
        return a.is(c);
      };else if ("scope" === b) {
        var d = a.ui.ddmanager.droppables[this.options.scope];
        this._splice(d), this._addToManager(c);
      }

      this._super(b, c);
    },
    _activate: function _activate(b) {
      var c = a.ui.ddmanager.current;
      this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c));
    },
    _deactivate: function _deactivate(b) {
      var c = a.ui.ddmanager.current;
      this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c));
    },
    _over: function _over(b) {
      var c = a.ui.ddmanager.current;
      c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)));
    },
    _out: function _out(b) {
      var c = a.ui.ddmanager.current;
      c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)));
    },
    _drop: function _drop(b, c) {
      var d = c || a.ui.ddmanager.current,
          e = !1;
      return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
        var c = a(this).droppable("instance");
        return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(c, {
          offset: c.element.offset()
        }), c.options.tolerance, b) ? (e = !0, !1) : void 0;
      }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1) : !1;
    },
    ui: function ui(a) {
      return {
        draggable: a.currentItem || a.element,
        helper: a.helper,
        position: a.position,
        offset: a.positionAbs
      };
    }
  }), a.ui.intersect = function () {
    function a(a, b, c) {
      return a >= b && b + c > a;
    }

    return function (b, c, d, e) {
      if (!c.offset) return !1;
      var f = (b.positionAbs || b.position.absolute).left + b.margins.left,
          g = (b.positionAbs || b.position.absolute).top + b.margins.top,
          h = f + b.helperProportions.width,
          i = g + b.helperProportions.height,
          j = c.offset.left,
          k = c.offset.top,
          l = j + c.proportions().width,
          m = k + c.proportions().height;

      switch (d) {
        case "fit":
          return f >= j && l >= h && g >= k && m >= i;

        case "intersect":
          return j < f + b.helperProportions.width / 2 && h - b.helperProportions.width / 2 < l && k < g + b.helperProportions.height / 2 && i - b.helperProportions.height / 2 < m;

        case "pointer":
          return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);

        case "touch":
          return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);

        default:
          return !1;
      }
    };
  }(), a.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function prepareOffsets(b, c) {
      var d,
          e,
          f = a.ui.ddmanager.droppables[b.options.scope] || [],
          g = c ? c.type : null,
          h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();

      a: for (d = 0; d < f.length; d++) {
        if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
          for (e = 0; e < h.length; e++) {
            if (h[e] === f[d].element[0]) {
              f[d].proportions().height = 0;
              continue a;
            }
          }

          f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({
            width: f[d].element[0].offsetWidth,
            height: f[d].element[0].offsetHeight
          }));
        }
      }
    },
    drop: function drop(b, c) {
      var d = !1;
      return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)));
      }), d;
    },
    dragStart: function dragStart(b, c) {
      b.element.parentsUntil("body").bind("scroll.droppable", function () {
        b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
      });
    },
    drag: function drag(b, c) {
      b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var d,
              e,
              f,
              g = a.ui.intersect(b, this, this.options.tolerance, c),
              h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
          h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function () {
            return a(this).droppable("instance").options.scope === e;
          }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)));
        }
      });
    },
    dragStop: function dragStop(b, c) {
      b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
    }
  };
  a.ui.droppable;
  a.widget("ui.resizable", a.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function _num(a) {
      return parseInt(a, 10) || 0;
    },
    _isNumber: function _isNumber(a) {
      return !isNaN(parseInt(a, 10));
    },
    _hasScroll: function _hasScroll(b, c) {
      if ("hidden" === a(b).css("overflow")) return !1;
      var d = c && "left" === c ? "scrollLeft" : "scrollTop",
          e = !1;
      return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e);
    },
    _create: function _create() {
      var b,
          c,
          d,
          e,
          f,
          g = this,
          h = this.options;
      if (this.element.addClass("ui-resizable"), a.extend(this, {
        _aspectRatio: !!h.aspectRatio,
        aspectRatio: h.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
        marginLeft: this.originalElement.css("marginLeft"),
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom")
      }), this.originalElement.css({
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0
      }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css({
        margin: this.originalElement.css("margin")
      }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      } : "e,s,se"), this._handles = a(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; c < b.length; c++) {
        d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({
          zIndex: h.zIndex
        }), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
      }
      this._renderAxis = function (b) {
        var c, d, e, f;
        b = b || this.element;

        for (c in this.handles) {
          this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), this._on(this.handles[c], {
            mousedown: g._mouseDown
          })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c]);
        }
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () {
        g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se");
      }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
        h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show());
      }).mouseleave(function () {
        h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide());
      })), this._mouseInit();
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      var b,
          c = function c(b) {
        a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
      };

      return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
        position: b.css("position"),
        width: b.outerWidth(),
        height: b.outerHeight(),
        top: b.css("top"),
        left: b.css("left")
      }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this;
    },
    _mouseCapture: function _mouseCapture(b) {
      var c,
          d,
          e = !1;

      for (c in this.handles) {
        d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
      }

      return !this.options.disabled && e;
    },
    _mouseStart: function _mouseStart(b) {
      var c,
          d,
          e,
          f = this.options,
          g = this.element;
      return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: c,
        top: d
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: g.width(),
        height: g.height()
      }, this.originalSize = this._helper ? {
        width: g.outerWidth(),
        height: g.outerHeight()
      } : {
        width: g.width(),
        height: g.height()
      }, this.sizeDiff = {
        width: g.outerWidth() - g.width(),
        height: g.outerHeight() - g.height()
      }, this.originalPosition = {
        left: c,
        top: d
      }, this.originalMousePosition = {
        left: b.pageX,
        top: b.pageY
      }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), g.addClass("ui-resizable-resizing"), this._propagate("start", b), !0;
    },
    _mouseDrag: function _mouseDrag(b) {
      var c,
          d,
          e = this.originalMousePosition,
          f = this.axis,
          g = b.pageX - e.left || 0,
          h = b.pageY - e.top || 0,
          i = this._change[f];
      return this._updatePrevProperties(), i ? (c = i.apply(this, [b, g, h]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1) : !1;
    },
    _mouseStop: function _mouseStop(b) {
      this.resizing = !1;
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j = this.options,
          k = this;
      return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
        width: k.helper.width() - f,
        height: k.helper.height() - e
      }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
        top: i,
        left: h
      })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1;
    },
    _updatePrevProperties: function _updatePrevProperties() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      };
    },
    _applyChanges: function _applyChanges() {
      var a = {};
      return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a;
    },
    _updateVirtualBoundaries: function _updateVirtualBoundaries(a) {
      var b,
          c,
          d,
          e,
          f,
          g = this.options;
      f = {
        minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
        maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
        minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
        maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
      }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), c < f.maxWidth && (f.maxWidth = c), e < f.maxHeight && (f.maxHeight = e)), this._vBoundaries = f;
    },
    _updateCache: function _updateCache(a) {
      this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width);
    },
    _updateRatio: function _updateRatio(a) {
      var b = this.position,
          c = this.size,
          d = this.axis;
      return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a;
    },
    _respectSize: function _respectSize(a) {
      var b = this._vBoundaries,
          c = this.axis,
          d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
          e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
          f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
          g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
          h = this.originalPosition.left + this.originalSize.width,
          i = this.position.top + this.size.height,
          j = /sw|nw|w/.test(c),
          k = /nw|ne|n/.test(c);
      return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a;
    },
    _getPaddingPlusBorderDimensions: function _getPaddingPlusBorderDimensions(a) {
      for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++) {
        c[b] = parseInt(d[b], 10) || 0, c[b] += parseInt(e[b], 10) || 0;
      }

      return {
        height: c[0] + c[2],
        width: c[1] + c[3]
      };
    },
    _proportionallyResize: function _proportionallyResize() {
      if (this._proportionallyResizeElements.length) for (var a, b = 0, c = this.helper || this.element; b < this._proportionallyResizeElements.length; b++) {
        a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
          height: c.height() - this.outerDimensions.height || 0,
          width: c.width() - this.outerDimensions.width || 0
        });
      }
    },
    _renderProxy: function _renderProxy() {
      var b = this.element,
          c = this.options;
      this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
        width: this.element.outerWidth() - 1,
        height: this.element.outerHeight() - 1,
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++c.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    },
    _change: {
      e: function e(a, b) {
        return {
          width: this.originalSize.width + b
        };
      },
      w: function w(a, b) {
        var c = this.originalSize,
            d = this.originalPosition;
        return {
          left: d.left + b,
          width: c.width - b
        };
      },
      n: function n(a, b, c) {
        var d = this.originalSize,
            e = this.originalPosition;
        return {
          top: e.top + c,
          height: d.height - c
        };
      },
      s: function s(a, b, c) {
        return {
          height: this.originalSize.height + c
        };
      },
      se: function se(b, c, d) {
        return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]));
      },
      sw: function sw(b, c, d) {
        return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]));
      },
      ne: function ne(b, c, d) {
        return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]));
      },
      nw: function nw(b, c, d) {
        return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]));
      }
    },
    _propagate: function _propagate(b, c) {
      a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui());
    },
    plugins: {},
    ui: function ui() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  }), a.ui.plugin.add("resizable", "animate", {
    stop: function stop(b) {
      var c = a(this).resizable("instance"),
          d = c.options,
          e = c._proportionallyResizeElements,
          f = e.length && /textarea/i.test(e[0].nodeName),
          g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
          h = f ? 0 : c.sizeDiff.width,
          i = {
        width: c.size.width - h,
        height: c.size.height - g
      },
          j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
          k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
      c.element.animate(a.extend(i, k && j ? {
        top: k,
        left: j
      } : {}), {
        duration: d.animateDuration,
        easing: d.animateEasing,
        step: function step() {
          var d = {
            width: parseInt(c.element.css("width"), 10),
            height: parseInt(c.element.css("height"), 10),
            top: parseInt(c.element.css("top"), 10),
            left: parseInt(c.element.css("left"), 10)
          };
          e && e.length && a(e[0]).css({
            width: d.width,
            height: d.height
          }), c._updateCache(d), c._propagate("resize", b);
        }
      });
    }
  }), a.ui.plugin.add("resizable", "containment", {
    start: function start() {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = a(this).resizable("instance"),
          j = i.options,
          k = i.element,
          l = j.containment,
          m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
      m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {
        left: 0,
        top: 0
      }, i.containerPosition = {
        left: 0,
        top: 0
      }, i.parentData = {
        element: a(document),
        left: 0,
        top: 0,
        width: a(document).width(),
        height: a(document).height() || document.body.parentNode.scrollHeight
      }) : (b = a(m), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function (a, d) {
        c[a] = i._num(b.css("padding" + d));
      }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {
        height: b.innerHeight() - c[3],
        width: b.innerWidth() - c[1]
      }, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, i.parentData = {
        element: m,
        left: d.left,
        top: d.top,
        width: g,
        height: h
      }));
    },
    resize: function resize(b) {
      var c,
          d,
          e,
          f,
          g = a(this).resizable("instance"),
          h = g.options,
          i = g.containerOffset,
          j = g.position,
          k = g._aspectRatio || b.shiftKey,
          l = {
        top: 0,
        left: 0
      },
          m = g.containerElement,
          n = !0;
      m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height);
    },
    stop: function stop() {
      var b = a(this).resizable("instance"),
          c = b.options,
          d = b.containerOffset,
          e = b.containerPosition,
          f = b.containerElement,
          g = a(b.helper),
          h = g.offset(),
          i = g.outerWidth() - b.sizeDiff.width,
          j = g.outerHeight() - b.sizeDiff.height;
      b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
        left: h.left - e.left - d.left,
        width: i,
        height: j
      }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
        left: h.left - e.left - d.left,
        width: i,
        height: j
      });
    }
  }), a.ui.plugin.add("resizable", "alsoResize", {
    start: function start() {
      var b = a(this).resizable("instance"),
          c = b.options;
      a(c.alsoResize).each(function () {
        var b = a(this);
        b.data("ui-resizable-alsoresize", {
          width: parseInt(b.width(), 10),
          height: parseInt(b.height(), 10),
          left: parseInt(b.css("left"), 10),
          top: parseInt(b.css("top"), 10)
        });
      });
    },
    resize: function resize(b, c) {
      var d = a(this).resizable("instance"),
          e = d.options,
          f = d.originalSize,
          g = d.originalPosition,
          h = {
        height: d.size.height - f.height || 0,
        width: d.size.width - f.width || 0,
        top: d.position.top - g.top || 0,
        left: d.position.left - g.left || 0
      };
      a(e.alsoResize).each(function () {
        var b = a(this),
            d = a(this).data("ui-resizable-alsoresize"),
            e = {},
            f = b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        a.each(f, function (a, b) {
          var c = (d[b] || 0) + (h[b] || 0);
          c && c >= 0 && (e[b] = c || null);
        }), b.css(e);
      });
    },
    stop: function stop() {
      a(this).removeData("resizable-alsoresize");
    }
  }), a.ui.plugin.add("resizable", "ghost", {
    start: function start() {
      var b = a(this).resizable("instance"),
          c = b.options,
          d = b.size;
      b.ghost = b.originalElement.clone(), b.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: d.height,
        width: d.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper);
    },
    resize: function resize() {
      var b = a(this).resizable("instance");
      b.ghost && b.ghost.css({
        position: "relative",
        height: b.size.height,
        width: b.size.width
      });
    },
    stop: function stop() {
      var b = a(this).resizable("instance");
      b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0));
    }
  }), a.ui.plugin.add("resizable", "grid", {
    resize: function resize() {
      var b,
          c = a(this).resizable("instance"),
          d = c.options,
          e = c.size,
          f = c.originalSize,
          g = c.originalPosition,
          h = c.axis,
          i = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
          j = i[0] || 1,
          k = i[1] || 1,
          l = Math.round((e.width - f.width) / j) * j,
          m = Math.round((e.height - f.height) / k) * k,
          n = f.width + l,
          o = f.height + m,
          p = d.maxWidth && d.maxWidth < n,
          q = d.maxHeight && d.maxHeight < o,
          r = d.minWidth && d.minWidth > n,
          s = d.minHeight && d.minHeight > o;
      d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.left = g.left - l) : ((0 >= o - k || 0 >= n - j) && (b = c._getPaddingPlusBorderDimensions(this)), o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, c.position.left = g.left - l) : (n = j - b.width, c.size.width = n, c.position.left = g.left + f.width - n));
    }
  });
  a.ui.resizable, a.widget("ui.selectable", a.ui.mouse, {
    version: "1.11.4",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function _create() {
      var b,
          c = this;
      this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
        b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function () {
          var b = a(this),
              c = b.offset();
          a.data(this, "selectable-item", {
            element: this,
            $element: b,
            left: c.left,
            top: c.top,
            right: c.left + b.outerWidth(),
            bottom: c.top + b.outerHeight(),
            startselected: !1,
            selected: b.hasClass("ui-selected"),
            selecting: b.hasClass("ui-selecting"),
            unselecting: b.hasClass("ui-unselecting")
          });
        });
      }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>");
    },
    _destroy: function _destroy() {
      this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy();
    },
    _mouseStart: function _mouseStart(b) {
      var c = this,
          d = this.options;
      this.opos = [b.pageX, b.pageY], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
        left: b.pageX,
        top: b.pageY,
        width: 0,
        height: 0
      }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var d = a.data(this, "selectable-item");
        d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
          unselecting: d.element
        }));
      }), a(b.target).parents().addBack().each(function () {
        var d,
            e = a.data(this, "selectable-item");
        return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {
          selecting: e.element
        }) : c._trigger("unselecting", b, {
          unselecting: e.element
        }), !1) : void 0;
      }));
    },
    _mouseDrag: function _mouseDrag(b) {
      if (this.dragged = !0, !this.options.disabled) {
        var c,
            d = this,
            e = this.options,
            f = this.opos[0],
            g = this.opos[1],
            h = b.pageX,
            i = b.pageY;
        return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
          left: f,
          top: g,
          width: h - f,
          height: i - g
        }), this.selectees.each(function () {
          var c = a.data(this, "selectable-item"),
              j = !1;
          c && c.element !== d.element[0] && ("touch" === e.tolerance ? j = !(c.left > h || c.right < f || c.top > i || c.bottom < g) : "fit" === e.tolerance && (j = c.left > f && c.right < h && c.top > g && c.bottom < i), j ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {
            selecting: c.element
          }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, {
            unselecting: c.element
          }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {
            unselecting: c.element
          })))));
        }), !1;
      }
    },
    _mouseStop: function _mouseStop(b) {
      var c = this;
      return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function () {
        var d = a.data(this, "selectable-item");
        d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
          unselected: d.element
        });
      }), a(".ui-selecting", this.element[0]).each(function () {
        var d = a.data(this, "selectable-item");
        d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
          selected: d.element
        });
      }), this._trigger("stop", b), this.helper.remove(), !1;
    }
  }), a.widget("ui.sortable", a.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function _isOverAxis(a, b, c) {
      return a >= b && b + c > a;
    },
    _isFloating: function _isFloating(a) {
      return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"));
    },
    _create: function _create() {
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
    },
    _setOption: function _setOption(a, b) {
      this._super(a, b), "handle" === a && this._setHandleClassName();
    },
    _setHandleClassName: function _setHandleClassName() {
      this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), a.each(this.items, function () {
        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
      });
    },
    _destroy: function _destroy() {
      this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();

      for (var a = this.items.length - 1; a >= 0; a--) {
        this.items[a].item.removeData(this.widgetName + "-item");
      }

      return this;
    },
    _mouseCapture: function _mouseCapture(b, c) {
      var d = null,
          e = !1,
          f = this;
      return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function () {
        return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0;
      }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d && (!this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function () {
        this === b.target && (e = !0);
      }), e)) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1);
    },
    _mouseStart: function _mouseStart(b, c, d) {
      var e,
          f,
          g = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, a.extend(this.offset, {
        click: {
          left: b.pageX - this.offset.left,
          top: b.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d) for (e = this.containers.length - 1; e >= 0; e--) {
        this.containers[e]._trigger("activate", b, this._uiHash(this));
      }
      return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0;
    },
    _mouseDrag: function _mouseDrag(b) {
      var c,
          d,
          e,
          f,
          g = this.options,
          h = !1;

      for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - this.document.scrollTop() < g.scrollSensitivity ? h = this.document.scrollTop(this.document.scrollTop() - g.scrollSpeed) : this.window.height() - (b.pageY - this.document.scrollTop()) < g.scrollSensitivity && (h = this.document.scrollTop(this.document.scrollTop() + g.scrollSpeed)), b.pageX - this.document.scrollLeft() < g.scrollSensitivity ? h = this.document.scrollLeft(this.document.scrollLeft() - g.scrollSpeed) : this.window.width() - (b.pageX - this.document.scrollLeft()) < g.scrollSensitivity && (h = this.document.scrollLeft(this.document.scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--) {
        if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
          if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
          this._rearrange(b, d), this._trigger("change", b, this._uiHash());
          break;
        }
      }

      return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function _mouseStop(b, c) {
      if (b) {
        if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
          var d = this,
              e = this.placeholder.offset(),
              f = this.options.axis,
              g = {};
          f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function () {
            d._clear(b);
          });
        } else this._clear(b, c);

        return !1;
      }
    },
    cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp({
          target: null
        }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();

        for (var b = this.containers.length - 1; b >= 0; b--) {
          this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0);
        }
      }

      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this;
    },
    serialize: function serialize(b) {
      var c = this._getItemsAsjQuery(b && b.connected),
          d = [];

      return b = b || {}, a(c).each(function () {
        var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
        c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]));
      }), !d.length && b.key && d.push(b.key + "="), d.join("&");
    },
    toArray: function toArray(b) {
      var c = this._getItemsAsjQuery(b && b.connected),
          d = [];

      return b = b || {}, c.each(function () {
        d.push(a(b.item || this).attr(b.attribute || "id") || "");
      }), d;
    },
    _intersectsWith: function _intersectsWith(a) {
      var b = this.positionAbs.left,
          c = b + this.helperProportions.width,
          d = this.positionAbs.top,
          e = d + this.helperProportions.height,
          f = a.left,
          g = f + a.width,
          h = a.top,
          i = h + a.height,
          j = this.offset.click.top,
          k = this.offset.click.left,
          l = "x" === this.options.axis || d + j > h && i > d + j,
          m = "y" === this.options.axis || b + k > f && g > b + k,
          n = l && m;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i;
    },
    _intersectsWithPointer: function _intersectsWithPointer(a) {
      var b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height),
          c = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width),
          d = b && c,
          e = this._getDragVerticalDirection(),
          f = this._getDragHorizontalDirection();

      return d ? this.floating ? f && "right" === f || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1) : !1;
    },
    _intersectsWithSides: function _intersectsWithSides(a) {
      var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
          c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
          d = this._getDragVerticalDirection(),
          e = this._getDragHorizontalDirection();

      return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b);
    },
    _getDragVerticalDirection: function _getDragVerticalDirection() {
      var a = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== a && (a > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var a = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== a && (a > 0 ? "right" : "left");
    },
    refresh: function refresh(a) {
      return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this;
    },
    _connectWith: function _connectWith() {
      var a = this.options;
      return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith;
    },
    _getItemsAsjQuery: function _getItemsAsjQuery(b) {
      function c() {
        h.push(this);
      }

      var d,
          e,
          f,
          g,
          h = [],
          i = [],
          j = this._connectWith();

      if (j && b) for (d = j.length - 1; d >= 0; d--) {
        for (f = a(j[d], this.document[0]), e = f.length - 1; e >= 0; e--) {
          g = a.data(f[e], this.widgetFullName), g && g !== this && !g.options.disabled && i.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]);
        }
      }

      for (i.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), d = i.length - 1; d >= 0; d--) {
        i[d][0].each(c);
      }

      return a(h);
    },
    _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = a.grep(this.items, function (a) {
        for (var c = 0; c < b.length; c++) {
          if (b[c] === a.item[0]) return !1;
        }

        return !0;
      });
    },
    _refreshItems: function _refreshItems(b) {
      this.items = [], this.containers = [this];

      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = this.items,
          l = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
        item: this.currentItem
      }) : a(this.options.items, this.element), this]],
          m = this._connectWith();

      if (m && this.ready) for (c = m.length - 1; c >= 0; c--) {
        for (e = a(m[c], this.document[0]), d = e.length - 1; d >= 0; d--) {
          f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
            item: this.currentItem
          }) : a(f.options.items, f.element), f]), this.containers.push(f));
        }
      }

      for (c = l.length - 1; c >= 0; c--) {
        for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) {
          i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
            item: i,
            instance: g,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
        }
      }
    },
    refreshPositions: function refreshPositions(b) {
      this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var c, d, e, f;

      for (c = this.items.length - 1; c >= 0; c--) {
        d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
      }

      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (c = this.containers.length - 1; c >= 0; c--) {
        f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
      }
      return this;
    },
    _createPlaceholder: function _createPlaceholder(b) {
      b = b || this;
      var c,
          d = b.options;
      d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
        element: function element() {
          var d = b.currentItem[0].nodeName.toLowerCase(),
              e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
          return "tbody" === d ? b._createTrPlaceholder(b.currentItem.find("tr").eq(0), a("<tr>", b.document[0]).appendTo(e)) : "tr" === d ? b._createTrPlaceholder(b.currentItem, e) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e;
        },
        update: function update(a, e) {
          c && !d.forcePlaceholderSize || (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)));
        }
      }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder);
    },
    _createTrPlaceholder: function _createTrPlaceholder(b, c) {
      var d = this;
      b.children().each(function () {
        a("<td>&#160;</td>", d.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(c);
      });
    },
    _contactContainers: function _contactContainers(b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = null,
          n = null;

      for (c = this.containers.length - 1; c >= 0; c--) {
        if (!a.contains(this.currentItem[0], this.containers[c].element[0])) if (this._intersectsWith(this.containers[c].containerCache)) {
          if (m && a.contains(this.containers[c].element[0], m.element[0])) continue;
          m = this.containers[c], n = c;
        } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
      }

      if (m) if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1);else {
        for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", h = k ? "width" : "height", l = k ? "clientX" : "clientY", d = this.items.length - 1; d >= 0; d--) {
          a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), Math.abs(b[l] - i) < e && (e = Math.abs(b[l] - i), f = this.items[d], this.direction = j ? "up" : "down"));
        }

        if (!f && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[n]) return void (this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), this.currentContainer.containerCache.over = 1));
        f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1;
      }
    },
    _createHelper: function _createHelper(b) {
      var c = this.options,
          d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
      return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), d[0].style.width && !c.forceHelperSize || d.width(this.currentItem.width()), d[0].style.height && !c.forceHelperSize || d.height(this.currentItem.height()), d;
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(b) {
      "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
        left: +b[0],
        top: +b[1] || 0
      }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
    },
    _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();
      var b = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
        top: 0,
        left: 0
      }), {
        top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" === this.cssPosition) {
        var a = this.currentItem.position();
        return {
          top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }

      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var b,
          c,
          d,
          e = this.options;
      "parent" === e.containment && (e.containment = this.helper[0].parentNode), "document" !== e.containment && "window" !== e.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === e.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    },
    _convertPositionTo: function _convertPositionTo(b, c) {
      c || (c = this.position);
      var d = "absolute" === b ? 1 : -1,
          e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          f = /(html|body)/i.test(e[0].tagName);
      return {
        top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
        left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
      };
    },
    _generatePosition: function _generatePosition(b) {
      var c,
          d,
          e = this.options,
          f = b.pageX,
          g = b.pageY,
          h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          i = /(html|body)/i.test(h[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
        top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
        left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
      };
    },
    _rearrange: function _rearrange(a, b, c, d) {
      c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var e = this.counter;

      this._delay(function () {
        e === this.counter && this.refreshPositions(!d);
      });
    },
    _clear: function _clear(a, b) {
      function c(a, b, c) {
        return function (d) {
          c._trigger(a, d, b._uiHash(b));
        };
      }

      this.reverting = !1;
      var d,
          e = [];

      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (d in this._storedCSS) {
          "auto" !== this._storedCSS[d] && "static" !== this._storedCSS[d] || (this._storedCSS[d] = "");
        }

        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();

      for (this.fromOutside && !b && e.push(function (a) {
        this._trigger("receive", a, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function (a) {
        this._trigger("update", a, this._uiHash());
      }), this !== this.currentContainer && (b || (e.push(function (a) {
        this._trigger("remove", a, this._uiHash());
      }), e.push(function (a) {
        return function (b) {
          a._trigger("receive", b, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), e.push(function (a) {
        return function (b) {
          a._trigger("update", b, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) {
        b || e.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0);
      }

      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !b) {
        for (d = 0; d < e.length; d++) {
          e[d].call(this, a);
        }

        this._trigger("stop", a, this._uiHash());
      }

      return this.fromOutside = !1, !this.cancelHelperRemoval;
    },
    _trigger: function _trigger() {
      a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    },
    _uiHash: function _uiHash(b) {
      var c = b || this;
      return {
        helper: c.helper,
        placeholder: c.placeholder || a([]),
        position: c.position,
        originalPosition: c.originalPosition,
        offset: c.positionAbs,
        item: c.currentItem,
        sender: b ? b.element : null
      };
    }
  }), a.widget("ui.slider", a.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function _create() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
    },
    _refresh: function _refresh() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function _createHandles() {
      var b,
          c,
          d = this.options,
          e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
          f = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          g = [];

      for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; c > b; b++) {
        g.push(f);
      }

      this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (b) {
        a(this).data("ui-slider-handle-index", b);
      });
    },
    _createRange: function _createRange() {
      var b = this.options,
          c = "";
      b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
        left: "",
        bottom: ""
      }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : (this.range && this.range.remove(), this.range = null);
    },
    _setupEvents: function _setupEvents() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    },
    _destroy: function _destroy() {
      this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
    },
    _mouseCapture: function _mouseCapture(b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = this,
          l = this.options;
      return l.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), c = {
        x: b.pageX,
        y: b.pageY
      }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function (b) {
        var c = Math.abs(d - k.values(b));
        (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, f = a(this), g = b);
      }), h = this._start(b, g), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = j ? {
        left: 0,
        top: 0
      } : {
        left: b.pageX - i.left - f.width() / 2,
        top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0));
    },
    _mouseStart: function _mouseStart() {
      return !0;
    },
    _mouseDrag: function _mouseDrag(a) {
      var b = {
        x: a.pageX,
        y: a.pageY
      },
          c = this._normValueFromMouse(b);

      return this._slide(a, this._handleIndex, c), !1;
    },
    _mouseStop: function _mouseStop(a) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    },
    _detectOrientation: function _detectOrientation() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function _normValueFromMouse(a) {
      var b, c, d, e, f;
      return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f);
    },
    _start: function _start(a, b) {
      var c = {
        handle: this.handles[b],
        value: this.value()
      };
      return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c);
    },
    _slide: function _slide(a, b, c) {
      var d, e, f;
      this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
        handle: this.handles[b],
        value: c,
        values: e
      }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c))) : c !== this.value() && (f = this._trigger("slide", a, {
        handle: this.handles[b],
        value: c
      }), f !== !1 && this.value(c));
    },
    _stop: function _stop(a, b) {
      var c = {
        handle: this.handles[b],
        value: this.value()
      };
      this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c);
    },
    _change: function _change(a, b) {
      if (!this._keySliding && !this._mouseSliding) {
        var c = {
          handle: this.handles[b],
          value: this.value()
        };
        this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c);
      }
    },
    value: function value(a) {
      return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0)) : this._value();
    },
    values: function values(b, c) {
      var d, e, f;
      if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), void this._change(null, b);
      if (!arguments.length) return this._values();
      if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();

      for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1) {
        d[f] = this._trimAlignValue(e[f]), this._change(null, f);
      }

      this._refreshValue();
    },
    _setOption: function _setOption(b, c) {
      var d,
          e = 0;

      switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), "disabled" === b && this.element.toggleClass("ui-state-disabled", !!c), this._super(b, c), b) {
        case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === c ? "bottom" : "left", "");
          break;

        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;

        case "values":
          for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1) {
            this._change(null, d);
          }

          this._animateOff = !1;
          break;

        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;

        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;
      }
    },
    _value: function _value() {
      var a = this.options.value;
      return a = this._trimAlignValue(a);
    },
    _values: function _values(a) {
      var b, c, d;
      if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);

      if (this.options.values && this.options.values.length) {
        for (c = this.options.values.slice(), d = 0; d < c.length; d += 1) {
          c[d] = this._trimAlignValue(c[d]);
        }

        return c;
      }

      return [];
    },
    _trimAlignValue: function _trimAlignValue(a) {
      if (a <= this._valueMin()) return this._valueMin();
      if (a >= this._valueMax()) return this._valueMax();
      var b = this.options.step > 0 ? this.options.step : 1,
          c = (a - this._valueMin()) % b,
          d = a - c;
      return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5));
    },
    _calculateNewMax: function _calculateNewMax() {
      var a = this.options.max,
          b = this._valueMin(),
          c = this.options.step,
          d = Math.floor(+(a - b).toFixed(this._precision()) / c) * c;

      a = d + b, this.max = parseFloat(a.toFixed(this._precision()));
    },
    _precision: function _precision() {
      var a = this._precisionOf(this.options.step);

      return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a;
    },
    _precisionOf: function _precisionOf(a) {
      var b = a.toString(),
          c = b.indexOf(".");
      return -1 === c ? 0 : b.length - c - 1;
    },
    _valueMin: function _valueMin() {
      return this.options.min;
    },
    _valueMax: function _valueMax() {
      return this.max;
    },
    _refreshValue: function _refreshValue() {
      var b,
          c,
          d,
          e,
          f,
          g = this.options.range,
          h = this.options,
          i = this,
          j = this._animateOff ? !1 : h.animate,
          k = {};
      this.options.values && this.options.values.length ? this.handles.each(function (d) {
        c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
          left: c + "%"
        }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
          width: c - b + "%"
        }, {
          queue: !1,
          duration: h.animate
        })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
          bottom: c + "%"
        }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
          height: c - b + "%"
        }, {
          queue: !1,
          duration: h.animate
        }))), b = c;
      }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
        width: c + "%"
      }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
        width: 100 - c + "%"
      }, {
        queue: !1,
        duration: h.animate
      }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
        height: c + "%"
      }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
        height: 100 - c + "%"
      }, {
        queue: !1,
        duration: h.animate
      }));
    },
    _handleEvents: {
      keydown: function keydown(b) {
        var c,
            d,
            e,
            f,
            g = a(b.target).data("ui-slider-handle-index");

        switch (b.keyCode) {
          case a.ui.keyCode.HOME:
          case a.ui.keyCode.END:
          case a.ui.keyCode.PAGE_UP:
          case a.ui.keyCode.PAGE_DOWN:
          case a.ui.keyCode.UP:
          case a.ui.keyCode.RIGHT:
          case a.ui.keyCode.DOWN:
          case a.ui.keyCode.LEFT:
            if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, a(b.target).addClass("ui-state-active"), c = this._start(b, g), c === !1)) return;
        }

        switch (f = this.options.step, d = e = this.options.values && this.options.values.length ? this.values(g) : this.value(), b.keyCode) {
          case a.ui.keyCode.HOME:
            e = this._valueMin();
            break;

          case a.ui.keyCode.END:
            e = this._valueMax();
            break;

          case a.ui.keyCode.PAGE_UP:
            e = this._trimAlignValue(d + (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case a.ui.keyCode.PAGE_DOWN:
            e = this._trimAlignValue(d - (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case a.ui.keyCode.UP:
          case a.ui.keyCode.RIGHT:
            if (d === this._valueMax()) return;
            e = this._trimAlignValue(d + f);
            break;

          case a.ui.keyCode.DOWN:
          case a.ui.keyCode.LEFT:
            if (d === this._valueMin()) return;
            e = this._trimAlignValue(d - f);
        }

        this._slide(b, g, e);
      },
      keyup: function keyup(b) {
        var c = a(b.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"));
      }
    }
  });
});

/***/ }),

/***/ "./resources/assests/js/jquery.easypiechart.min.js":
/*!*********************************************************!*\
  !*** ./resources/assests/js/jquery.easypiechart.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a) {
    return b(a);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (a) {
  var b = function b(a, _b) {
    var c,
        d = document.createElement("canvas");
    a.appendChild(d), "object" == (typeof G_vmlCanvasManager === "undefined" ? "undefined" : _typeof(G_vmlCanvasManager)) && G_vmlCanvasManager.initElement(d);
    var e = d.getContext("2d");
    d.width = d.height = _b.size;
    var f = 1;
    window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [_b.size, "px"].join(""), d.width = d.height = _b.size * f, e.scale(f, f)), e.translate(_b.size / 2, _b.size / 2), e.rotate((-0.5 + _b.rotate / 180) * Math.PI);
    var g = (_b.size - _b.lineWidth) / 2;
    _b.scaleColor && _b.scaleLength && (g -= _b.scaleLength + 2), Date.now = Date.now || function () {
      return +new Date();
    };

    var h = function h(a, b, c) {
      c = Math.min(Math.max(-1, c || 0), 1);
      var d = 0 >= c;
      e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke();
    },
        i = function i() {
      var a, c;
      e.lineWidth = 1, e.fillStyle = _b.scaleColor, e.save();

      for (var d = 24; d > 0; --d) {
        d % 6 === 0 ? (c = _b.scaleLength, a = 0) : (c = .6 * _b.scaleLength, a = _b.scaleLength - c), e.fillRect(-_b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
      }

      e.restore();
    },
        j = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
        window.setTimeout(a, 1e3 / 60);
      };
    }(),
        k = function k() {
      _b.scaleColor && i(), _b.trackColor && h(_b.trackColor, _b.trackWidth || _b.lineWidth, 1);
    };

    this.getCanvas = function () {
      return d;
    }, this.getCtx = function () {
      return e;
    }, this.clear = function () {
      e.clearRect(_b.size / -2, _b.size / -2, _b.size, _b.size);
    }, this.draw = function (a) {
      _b.scaleColor || _b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, _b.size * f, _b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = _b.lineCap;
      var d;
      d = "function" == typeof _b.barColor ? _b.barColor(a) : _b.barColor, h(d, _b.lineWidth, a / 100);
    }.bind(this), this.animate = function (a, c) {
      var d = Date.now();

      _b.onStart(a, c);

      var e = function () {
        var f = Math.min(Date.now() - d, _b.animate.duration),
            g = _b.easing(this, f, a, c - a, _b.animate.duration);

        this.draw(g), _b.onStep(a, c, g), f >= _b.animate.duration ? _b.onStop(a, c) : j(e);
      }.bind(this);

      j(e);
    }.bind(this);
  },
      c = function c(a, _c) {
    var d = {
      barColor: "#ef1e25",
      trackColor: "#f9f9f9",
      scaleColor: "#dfe0e0",
      scaleLength: 5,
      lineCap: "round",
      lineWidth: 3,
      trackWidth: void 0,
      size: 110,
      rotate: 0,
      animate: {
        duration: 1e3,
        enabled: !0
      },
      easing: function easing(a, b, c, d, e) {
        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
      },
      onStart: function onStart(a, b) {},
      onStep: function onStep(a, b, c) {},
      onStop: function onStop(a, b) {}
    };
    if ("undefined" != typeof b) d.renderer = b;else {
      if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
      d.renderer = SVGRenderer;
    }

    var e = {},
        f = 0,
        g = function () {
      this.el = a, this.options = e;

      for (var b in d) {
        d.hasOwnProperty(b) && (e[b] = _c && "undefined" != typeof _c[b] ? _c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
      }

      "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
        duration: e.animate,
        enabled: !0
      }), "boolean" != typeof e.animate || e.animate || (e.animate = {
        duration: 1e3,
        enabled: e.animate
      }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent"))), a.style.width = a.style.height = e.size + "px", a.style.lineHeight = e.size - 1 + "px";
    }.bind(this);

    this.update = function (a) {
      return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this;
    }.bind(this), this.disableAnimation = function () {
      return e.animate.enabled = !1, this;
    }, this.enableAnimation = function () {
      return e.animate.enabled = !0, this;
    }, g();
  };

  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});

/***/ }),

/***/ "./resources/assests/js/jquery.flot.min.js":
/*!*************************************************!*\
  !*** ./resources/assests/js/jquery.flot.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
!function (a) {
  a.color = {}, a.color.make = function (b, c, d, e) {
    var f = {};
    return f.r = b || 0, f.g = c || 0, f.b = d || 0, f.a = null != e ? e : 1, f.add = function (a, b) {
      for (var c = 0; c < a.length; ++c) {
        f[a.charAt(c)] += b;
      }

      return f.normalize();
    }, f.scale = function (a, b) {
      for (var c = 0; c < a.length; ++c) {
        f[a.charAt(c)] *= b;
      }

      return f.normalize();
    }, f.toString = function () {
      return f.a >= 1 ? "rgb(" + [f.r, f.g, f.b].join(",") + ")" : "rgba(" + [f.r, f.g, f.b, f.a].join(",") + ")";
    }, f.normalize = function () {
      function a(a, b, c) {
        return a > b ? a : b > c ? c : b;
      }

      return f.r = a(0, parseInt(f.r), 255), f.g = a(0, parseInt(f.g), 255), f.b = a(0, parseInt(f.b), 255), f.a = a(0, f.a, 1), f;
    }, f.clone = function () {
      return a.color.make(f.r, f.b, f.g, f.a);
    }, f.normalize();
  }, a.color.extract = function (b, c) {
    var d;

    do {
      if (d = b.css(c).toLowerCase(), "" != d && "transparent" != d) break;
      b = b.parent();
    } while (b.length && !a.nodeName(b.get(0), "body"));

    return "rgba(0, 0, 0, 0)" == d && (d = "transparent"), a.color.parse(d);
  }, a.color.parse = function (c) {
    var d,
        e = a.color.make;
    if (d = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)) return e(parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10));
    if (d = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)) return e(parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10), parseFloat(d[4]));
    if (d = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)) return e(2.55 * parseFloat(d[1]), 2.55 * parseFloat(d[2]), 2.55 * parseFloat(d[3]));
    if (d = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)) return e(2.55 * parseFloat(d[1]), 2.55 * parseFloat(d[2]), 2.55 * parseFloat(d[3]), parseFloat(d[4]));
    if (d = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)) return e(parseInt(d[1], 16), parseInt(d[2], 16), parseInt(d[3], 16));
    if (d = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)) return e(parseInt(d[1] + d[1], 16), parseInt(d[2] + d[2], 16), parseInt(d[3] + d[3], 16));
    var f = a.trim(c).toLowerCase();
    return "transparent" == f ? e(255, 255, 255, 0) : (d = b[f] || [0, 0, 0], e(d[0], d[1], d[2]));
  };
  var b = {
    aqua: [0, 255, 255],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    black: [0, 0, 0],
    blue: [0, 0, 255],
    brown: [165, 42, 42],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgrey: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkviolet: [148, 0, 211],
    fuchsia: [255, 0, 255],
    gold: [255, 215, 0],
    green: [0, 128, 0],
    indigo: [75, 0, 130],
    khaki: [240, 230, 140],
    lightblue: [173, 216, 230],
    lightcyan: [224, 255, 255],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    navy: [0, 0, 128],
    olive: [128, 128, 0],
    orange: [255, 165, 0],
    pink: [255, 192, 203],
    purple: [128, 0, 128],
    violet: [128, 0, 128],
    red: [255, 0, 0],
    silver: [192, 192, 192],
    white: [255, 255, 255],
    yellow: [255, 255, 0]
  };
}(jQuery), function (a) {
  function b(b, c) {
    var d = c.children("." + b)[0];

    if (null == d && (d = document.createElement("canvas"), d.className = b, a(d).css({
      direction: "ltr",
      position: "absolute",
      left: 0,
      top: 0
    }).appendTo(c), !d.getContext)) {
      if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
      d = window.G_vmlCanvasManager.initElement(d);
    }

    this.element = d;
    var e = this.context = d.getContext("2d"),
        f = window.devicePixelRatio || 1,
        g = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    this.pixelRatio = f / g, this.resize(c.width(), c.height()), this.textContainer = null, this.text = {}, this._textCache = {};
  }

  function c(c, e, f, g) {
    function h(a, b) {
      b = [qa].concat(b);

      for (var c = 0; c < a.length; ++c) {
        a[c].apply(this, b);
      }
    }

    function i() {
      for (var c = {
        Canvas: b
      }, d = 0; d < g.length; ++d) {
        var e = g[d];
        e.init(qa, c), e.options && a.extend(!0, ea, e.options);
      }
    }

    function j(b) {
      a.extend(!0, ea, b), b && b.colors && (ea.colors = b.colors), null == ea.xaxis.color && (ea.xaxis.color = a.color.parse(ea.grid.color).scale("a", .22).toString()), null == ea.yaxis.color && (ea.yaxis.color = a.color.parse(ea.grid.color).scale("a", .22).toString()), null == ea.xaxis.tickColor && (ea.xaxis.tickColor = ea.grid.tickColor || ea.xaxis.color), null == ea.yaxis.tickColor && (ea.yaxis.tickColor = ea.grid.tickColor || ea.yaxis.color), null == ea.grid.borderColor && (ea.grid.borderColor = ea.grid.color), null == ea.grid.tickColor && (ea.grid.tickColor = a.color.parse(ea.grid.color).scale("a", .22).toString());
      var d,
          e,
          f,
          g = c.css("font-size"),
          i = g ? +g.replace("px", "") : 13,
          j = {
        style: c.css("font-style"),
        size: Math.round(.8 * i),
        variant: c.css("font-variant"),
        weight: c.css("font-weight"),
        family: c.css("font-family")
      };

      for (f = ea.xaxes.length || 1, d = 0; f > d; ++d) {
        e = ea.xaxes[d], e && !e.tickColor && (e.tickColor = e.color), e = a.extend(!0, {}, ea.xaxis, e), ea.xaxes[d] = e, e.font && (e.font = a.extend({}, j, e.font), e.font.color || (e.font.color = e.color), e.font.lineHeight || (e.font.lineHeight = Math.round(1.15 * e.font.size)));
      }

      for (f = ea.yaxes.length || 1, d = 0; f > d; ++d) {
        e = ea.yaxes[d], e && !e.tickColor && (e.tickColor = e.color), e = a.extend(!0, {}, ea.yaxis, e), ea.yaxes[d] = e, e.font && (e.font = a.extend({}, j, e.font), e.font.color || (e.font.color = e.color), e.font.lineHeight || (e.font.lineHeight = Math.round(1.15 * e.font.size)));
      }

      for (ea.xaxis.noTicks && null == ea.xaxis.ticks && (ea.xaxis.ticks = ea.xaxis.noTicks), ea.yaxis.noTicks && null == ea.yaxis.ticks && (ea.yaxis.ticks = ea.yaxis.noTicks), ea.x2axis && (ea.xaxes[1] = a.extend(!0, {}, ea.xaxis, ea.x2axis), ea.xaxes[1].position = "top", null == ea.x2axis.min && (ea.xaxes[1].min = null), null == ea.x2axis.max && (ea.xaxes[1].max = null)), ea.y2axis && (ea.yaxes[1] = a.extend(!0, {}, ea.yaxis, ea.y2axis), ea.yaxes[1].position = "right", null == ea.y2axis.min && (ea.yaxes[1].min = null), null == ea.y2axis.max && (ea.yaxes[1].max = null)), ea.grid.coloredAreas && (ea.grid.markings = ea.grid.coloredAreas), ea.grid.coloredAreasColor && (ea.grid.markingsColor = ea.grid.coloredAreasColor), ea.lines && a.extend(!0, ea.series.lines, ea.lines), ea.points && a.extend(!0, ea.series.points, ea.points), ea.bars && a.extend(!0, ea.series.bars, ea.bars), null != ea.shadowSize && (ea.series.shadowSize = ea.shadowSize), null != ea.highlightColor && (ea.series.highlightColor = ea.highlightColor), d = 0; d < ea.xaxes.length; ++d) {
        q(ka, d + 1).options = ea.xaxes[d];
      }

      for (d = 0; d < ea.yaxes.length; ++d) {
        q(la, d + 1).options = ea.yaxes[d];
      }

      for (var k in pa) {
        ea.hooks[k] && ea.hooks[k].length && (pa[k] = pa[k].concat(ea.hooks[k]));
      }

      h(pa.processOptions, [ea]);
    }

    function k(a) {
      da = l(a), r(), s();
    }

    function l(b) {
      for (var c = [], d = 0; d < b.length; ++d) {
        var e = a.extend(!0, {}, ea.series);
        null != b[d].data ? (e.data = b[d].data, delete b[d].data, a.extend(!0, e, b[d]), b[d].data = e.data) : e.data = b[d], c.push(e);
      }

      return c;
    }

    function m(a, b) {
      var c = a[b + "axis"];
      return "object" == _typeof(c) && (c = c.n), "number" != typeof c && (c = 1), c;
    }

    function n() {
      return a.grep(ka.concat(la), function (a) {
        return a;
      });
    }

    function o(a) {
      var b,
          c,
          d = {};

      for (b = 0; b < ka.length; ++b) {
        c = ka[b], c && c.used && (d["x" + c.n] = c.c2p(a.left));
      }

      for (b = 0; b < la.length; ++b) {
        c = la[b], c && c.used && (d["y" + c.n] = c.c2p(a.top));
      }

      return void 0 !== d.x1 && (d.x = d.x1), void 0 !== d.y1 && (d.y = d.y1), d;
    }

    function p(a) {
      var b,
          c,
          d,
          e = {};

      for (b = 0; b < ka.length; ++b) {
        if (c = ka[b], c && c.used && (d = "x" + c.n, null == a[d] && 1 == c.n && (d = "x"), null != a[d])) {
          e.left = c.p2c(a[d]);
          break;
        }
      }

      for (b = 0; b < la.length; ++b) {
        if (c = la[b], c && c.used && (d = "y" + c.n, null == a[d] && 1 == c.n && (d = "y"), null != a[d])) {
          e.top = c.p2c(a[d]);
          break;
        }
      }

      return e;
    }

    function q(b, c) {
      return b[c - 1] || (b[c - 1] = {
        n: c,
        direction: b == ka ? "x" : "y",
        options: a.extend(!0, {}, b == ka ? ea.xaxis : ea.yaxis)
      }), b[c - 1];
    }

    function r() {
      var b,
          c = da.length,
          d = -1;

      for (b = 0; b < da.length; ++b) {
        var e = da[b].color;
        null != e && (c--, "number" == typeof e && e > d && (d = e));
      }

      d >= c && (c = d + 1);
      var f,
          g = [],
          h = ea.colors,
          i = h.length,
          j = 0;

      for (b = 0; c > b; b++) {
        f = a.color.parse(h[b % i] || "#666"), b % i == 0 && b && (j = j >= 0 ? .5 > j ? -j - .2 : 0 : -j), g[b] = f.scale("rgb", 1 + j);
      }

      var k,
          l = 0;

      for (b = 0; b < da.length; ++b) {
        if (k = da[b], null == k.color ? (k.color = g[l].toString(), ++l) : "number" == typeof k.color && (k.color = g[k.color].toString()), null == k.lines.show) {
          var n,
              o = !0;

          for (n in k) {
            if (k[n] && k[n].show) {
              o = !1;
              break;
            }
          }

          o && (k.lines.show = !0);
        }

        null == k.lines.zero && (k.lines.zero = !!k.lines.fill), k.xaxis = q(ka, m(k, "x")), k.yaxis = q(la, m(k, "y"));
      }
    }

    function s() {
      function b(a, b, c) {
        b < a.datamin && b != -s && (a.datamin = b), c > a.datamax && c != s && (a.datamax = c);
      }

      var c,
          d,
          e,
          f,
          g,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q = Number.POSITIVE_INFINITY,
          r = Number.NEGATIVE_INFINITY,
          s = Number.MAX_VALUE;

      for (a.each(n(), function (a, b) {
        b.datamin = q, b.datamax = r, b.used = !1;
      }), c = 0; c < da.length; ++c) {
        g = da[c], g.datapoints = {
          points: []
        }, h(pa.processRawData, [g, g.data, g.datapoints]);
      }

      for (c = 0; c < da.length; ++c) {
        if (g = da[c], o = g.data, p = g.datapoints.format, !p) {
          if (p = [], p.push({
            x: !0,
            number: !0,
            required: !0
          }), p.push({
            y: !0,
            number: !0,
            required: !0
          }), g.bars.show || g.lines.show && g.lines.fill) {
            var t = !!(g.bars.show && g.bars.zero || g.lines.show && g.lines.zero);
            p.push({
              y: !0,
              number: !0,
              required: !1,
              defaultValue: 0,
              autoscale: t
            }), g.bars.horizontal && (delete p[p.length - 1].y, p[p.length - 1].x = !0);
          }

          g.datapoints.format = p;
        }

        if (null == g.datapoints.pointsize) {
          g.datapoints.pointsize = p.length, j = g.datapoints.pointsize, i = g.datapoints.points;
          var u = g.lines.show && g.lines.steps;

          for (g.xaxis.used = g.yaxis.used = !0, d = e = 0; d < o.length; ++d, e += j) {
            m = o[d];
            var v = null == m;
            if (!v) for (f = 0; j > f; ++f) {
              k = m[f], l = p[f], l && (l.number && null != k && (k = +k, isNaN(k) ? k = null : k == 1 / 0 ? k = s : k == -(1 / 0) && (k = -s)), null == k && (l.required && (v = !0), null != l.defaultValue && (k = l.defaultValue))), i[e + f] = k;
            }
            if (v) for (f = 0; j > f; ++f) {
              k = i[e + f], null != k && (l = p[f], l.autoscale !== !1 && (l.x && b(g.xaxis, k, k), l.y && b(g.yaxis, k, k))), i[e + f] = null;
            } else if (u && e > 0 && null != i[e - j] && i[e - j] != i[e] && i[e - j + 1] != i[e + 1]) {
              for (f = 0; j > f; ++f) {
                i[e + j + f] = i[e + f];
              }

              i[e + 1] = i[e - j + 1], e += j;
            }
          }
        }
      }

      for (c = 0; c < da.length; ++c) {
        g = da[c], h(pa.processDatapoints, [g, g.datapoints]);
      }

      for (c = 0; c < da.length; ++c) {
        g = da[c], i = g.datapoints.points, j = g.datapoints.pointsize, p = g.datapoints.format;
        var w = q,
            x = q,
            y = r,
            z = r;

        for (d = 0; d < i.length; d += j) {
          if (null != i[d]) for (f = 0; j > f; ++f) {
            k = i[d + f], l = p[f], l && l.autoscale !== !1 && k != s && k != -s && (l.x && (w > k && (w = k), k > y && (y = k)), l.y && (x > k && (x = k), k > z && (z = k)));
          }
        }

        if (g.bars.show) {
          var A;

          switch (g.bars.align) {
            case "left":
              A = 0;
              break;

            case "right":
              A = -g.bars.barWidth;
              break;

            default:
              A = -g.bars.barWidth / 2;
          }

          g.bars.horizontal ? (x += A, z += A + g.bars.barWidth) : (w += A, y += A + g.bars.barWidth);
        }

        b(g.xaxis, w, y), b(g.yaxis, x, z);
      }

      a.each(n(), function (a, b) {
        b.datamin == q && (b.datamin = null), b.datamax == r && (b.datamax = null);
      });
    }

    function t() {
      c.css("padding", 0).children().filter(function () {
        return !a(this).hasClass("flot-overlay") && !a(this).hasClass("flot-base");
      }).remove(), "static" == c.css("position") && c.css("position", "relative"), fa = new b("flot-base", c), ga = new b("flot-overlay", c), ia = fa.context, ja = ga.context, ha = a(ga.element).unbind();
      var d = c.data("plot");
      d && (d.shutdown(), ga.clear()), c.data("plot", qa);
    }

    function u() {
      ea.grid.hoverable && (ha.mousemove(T), ha.bind("mouseleave", U)), ea.grid.clickable && ha.click(V), h(pa.bindEvents, [ha]);
    }

    function v() {
      sa && clearTimeout(sa), ha.unbind("mousemove", T), ha.unbind("mouseleave", U), ha.unbind("click", V), h(pa.shutdown, [ha]);
    }

    function w(a) {
      function b(a) {
        return a;
      }

      var c,
          d,
          e = a.options.transform || b,
          f = a.options.inverseTransform;
      "x" == a.direction ? (c = a.scale = na / Math.abs(e(a.max) - e(a.min)), d = Math.min(e(a.max), e(a.min))) : (c = a.scale = oa / Math.abs(e(a.max) - e(a.min)), c = -c, d = Math.max(e(a.max), e(a.min))), e == b ? a.p2c = function (a) {
        return (a - d) * c;
      } : a.p2c = function (a) {
        return (e(a) - d) * c;
      }, f ? a.c2p = function (a) {
        return f(d + a / c);
      } : a.c2p = function (a) {
        return d + a / c;
      };
    }

    function x(a) {
      for (var b = a.options, c = a.ticks || [], d = b.labelWidth || 0, e = b.labelHeight || 0, f = d || ("x" == a.direction ? Math.floor(fa.width / (c.length || 1)) : null), g = a.direction + "Axis " + a.direction + a.n + "Axis", h = "flot-" + a.direction + "-axis flot-" + a.direction + a.n + "-axis " + g, i = b.font || "flot-tick-label tickLabel", j = 0; j < c.length; ++j) {
        var k = c[j];

        if (k.label) {
          var l = fa.getTextInfo(h, k.label, i, null, f);
          d = Math.max(d, l.width), e = Math.max(e, l.height);
        }
      }

      a.labelWidth = b.labelWidth || d, a.labelHeight = b.labelHeight || e;
    }

    function y(b) {
      var c = b.labelWidth,
          d = b.labelHeight,
          e = b.options.position,
          f = "x" === b.direction,
          g = b.options.tickLength,
          h = ea.grid.axisMargin,
          i = ea.grid.labelMargin,
          j = !0,
          k = !0,
          l = !0,
          m = !1;
      a.each(f ? ka : la, function (a, c) {
        c && (c.show || c.reserveSpace) && (c === b ? m = !0 : c.options.position === e && (m ? k = !1 : j = !1), m || (l = !1));
      }), k && (h = 0), null == g && (g = l ? "full" : 5), isNaN(+g) || (i += +g), f ? (d += i, "bottom" == e ? (ma.bottom += d + h, b.box = {
        top: fa.height - ma.bottom,
        height: d
      }) : (b.box = {
        top: ma.top + h,
        height: d
      }, ma.top += d + h)) : (c += i, "left" == e ? (b.box = {
        left: ma.left + h,
        width: c
      }, ma.left += c + h) : (ma.right += c + h, b.box = {
        left: fa.width - ma.right,
        width: c
      })), b.position = e, b.tickLength = g, b.box.padding = i, b.innermost = j;
    }

    function z(a) {
      "x" == a.direction ? (a.box.left = ma.left - a.labelWidth / 2, a.box.width = fa.width - ma.left - ma.right + a.labelWidth) : (a.box.top = ma.top - a.labelHeight / 2, a.box.height = fa.height - ma.bottom - ma.top + a.labelHeight);
    }

    function A() {
      var b,
          c = ea.grid.minBorderMargin;
      if (null == c) for (c = 0, b = 0; b < da.length; ++b) {
        c = Math.max(c, 2 * (da[b].points.radius + da[b].points.lineWidth / 2));
      }
      var d = {
        left: c,
        right: c,
        top: c,
        bottom: c
      };
      a.each(n(), function (a, b) {
        b.reserveSpace && b.ticks && b.ticks.length && ("x" === b.direction ? (d.left = Math.max(d.left, b.labelWidth / 2), d.right = Math.max(d.right, b.labelWidth / 2)) : (d.bottom = Math.max(d.bottom, b.labelHeight / 2), d.top = Math.max(d.top, b.labelHeight / 2)));
      }), ma.left = Math.ceil(Math.max(d.left, ma.left)), ma.right = Math.ceil(Math.max(d.right, ma.right)), ma.top = Math.ceil(Math.max(d.top, ma.top)), ma.bottom = Math.ceil(Math.max(d.bottom, ma.bottom));
    }

    function B() {
      var b,
          c = n(),
          d = ea.grid.show;

      for (var e in ma) {
        var f = ea.grid.margin || 0;
        ma[e] = "number" == typeof f ? f : f[e] || 0;
      }

      h(pa.processOffset, [ma]);

      for (var e in ma) {
        "object" == _typeof(ea.grid.borderWidth) ? ma[e] += d ? ea.grid.borderWidth[e] : 0 : ma[e] += d ? ea.grid.borderWidth : 0;
      }

      if (a.each(c, function (a, b) {
        var c = b.options;
        b.show = null == c.show ? b.used : c.show, b.reserveSpace = null == c.reserveSpace ? b.show : c.reserveSpace, C(b);
      }), d) {
        var g = a.grep(c, function (a) {
          return a.show || a.reserveSpace;
        });

        for (a.each(g, function (a, b) {
          D(b), E(b), F(b, b.ticks), x(b);
        }), b = g.length - 1; b >= 0; --b) {
          y(g[b]);
        }

        A(), a.each(g, function (a, b) {
          z(b);
        });
      }

      na = fa.width - ma.left - ma.right, oa = fa.height - ma.bottom - ma.top, a.each(c, function (a, b) {
        w(b);
      }), d && K(), R();
    }

    function C(a) {
      var b = a.options,
          c = +(null != b.min ? b.min : a.datamin),
          d = +(null != b.max ? b.max : a.datamax),
          e = d - c;

      if (0 == e) {
        var f = 0 == d ? 1 : .01;
        null == b.min && (c -= f), null != b.max && null == b.min || (d += f);
      } else {
        var g = b.autoscaleMargin;
        null != g && (null == b.min && (c -= e * g, 0 > c && null != a.datamin && a.datamin >= 0 && (c = 0)), null == b.max && (d += e * g, d > 0 && null != a.datamax && a.datamax <= 0 && (d = 0)));
      }

      a.min = c, a.max = d;
    }

    function D(b) {
      var c,
          e = b.options;
      c = "number" == typeof e.ticks && e.ticks > 0 ? e.ticks : .3 * Math.sqrt("x" == b.direction ? fa.width : fa.height);
      var f = (b.max - b.min) / c,
          g = -Math.floor(Math.log(f) / Math.LN10),
          h = e.tickDecimals;
      null != h && g > h && (g = h);
      var i,
          j = Math.pow(10, -g),
          k = f / j;
      if (1.5 > k ? i = 1 : 3 > k ? (i = 2, k > 2.25 && (null == h || h >= g + 1) && (i = 2.5, ++g)) : i = 7.5 > k ? 5 : 10, i *= j, null != e.minTickSize && i < e.minTickSize && (i = e.minTickSize), b.delta = f, b.tickDecimals = Math.max(0, null != h ? h : g), b.tickSize = e.tickSize || i, "time" == e.mode && !b.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");

      if (b.tickGenerator || (b.tickGenerator = function (a) {
        var b,
            c = [],
            e = d(a.min, a.tickSize),
            f = 0,
            g = Number.NaN;

        do {
          b = g, g = e + f * a.tickSize, c.push(g), ++f;
        } while (g < a.max && g != b);

        return c;
      }, b.tickFormatter = function (a, b) {
        var c = b.tickDecimals ? Math.pow(10, b.tickDecimals) : 1,
            d = "" + Math.round(a * c) / c;

        if (null != b.tickDecimals) {
          var e = d.indexOf("."),
              f = -1 == e ? 0 : d.length - e - 1;
          if (f < b.tickDecimals) return (f ? d : d + ".") + ("" + c).substr(1, b.tickDecimals - f);
        }

        return d;
      }), a.isFunction(e.tickFormatter) && (b.tickFormatter = function (a, b) {
        return "" + e.tickFormatter(a, b);
      }), null != e.alignTicksWithAxis) {
        var l = ("x" == b.direction ? ka : la)[e.alignTicksWithAxis - 1];

        if (l && l.used && l != b) {
          var m = b.tickGenerator(b);

          if (m.length > 0 && (null == e.min && (b.min = Math.min(b.min, m[0])), null == e.max && m.length > 1 && (b.max = Math.max(b.max, m[m.length - 1]))), b.tickGenerator = function (a) {
            var b,
                c,
                d = [];

            for (c = 0; c < l.ticks.length; ++c) {
              b = (l.ticks[c].v - l.min) / (l.max - l.min), b = a.min + b * (a.max - a.min), d.push(b);
            }

            return d;
          }, !b.mode && null == e.tickDecimals) {
            var n = Math.max(0, -Math.floor(Math.log(b.delta) / Math.LN10) + 1),
                o = b.tickGenerator(b);
            o.length > 1 && /\..*0$/.test((o[1] - o[0]).toFixed(n)) || (b.tickDecimals = n);
          }
        }
      }
    }

    function E(b) {
      var c = b.options.ticks,
          d = [];
      null == c || "number" == typeof c && c > 0 ? d = b.tickGenerator(b) : c && (d = a.isFunction(c) ? c(b) : c);
      var e, f;

      for (b.ticks = [], e = 0; e < d.length; ++e) {
        var g = null,
            h = d[e];
        "object" == _typeof(h) ? (f = +h[0], h.length > 1 && (g = h[1])) : f = +h, null == g && (g = b.tickFormatter(f, b)), isNaN(f) || b.ticks.push({
          v: f,
          label: g
        });
      }
    }

    function F(a, b) {
      a.options.autoscaleMargin && b.length > 0 && (null == a.options.min && (a.min = Math.min(a.min, b[0].v)), null == a.options.max && b.length > 1 && (a.max = Math.max(a.max, b[b.length - 1].v)));
    }

    function G() {
      fa.clear(), h(pa.drawBackground, [ia]);
      var a = ea.grid;
      a.show && a.backgroundColor && I(), a.show && !a.aboveData && J();

      for (var b = 0; b < da.length; ++b) {
        h(pa.drawSeries, [ia, da[b]]), L(da[b]);
      }

      h(pa.draw, [ia]), a.show && a.aboveData && J(), fa.render(), X();
    }

    function H(a, b) {
      for (var c, d, e, f, g = n(), h = 0; h < g.length; ++h) {
        if (c = g[h], c.direction == b && (f = b + c.n + "axis", a[f] || 1 != c.n || (f = b + "axis"), a[f])) {
          d = a[f].from, e = a[f].to;
          break;
        }
      }

      if (a[f] || (c = "x" == b ? ka[0] : la[0], d = a[b + "1"], e = a[b + "2"]), null != d && null != e && d > e) {
        var i = d;
        d = e, e = i;
      }

      return {
        from: d,
        to: e,
        axis: c
      };
    }

    function I() {
      ia.save(), ia.translate(ma.left, ma.top), ia.fillStyle = ca(ea.grid.backgroundColor, oa, 0, "rgba(255, 255, 255, 0)"), ia.fillRect(0, 0, na, oa), ia.restore();
    }

    function J() {
      var b, c, d, e;
      ia.save(), ia.translate(ma.left, ma.top);
      var f = ea.grid.markings;
      if (f) for (a.isFunction(f) && (c = qa.getAxes(), c.xmin = c.xaxis.min, c.xmax = c.xaxis.max, c.ymin = c.yaxis.min, c.ymax = c.yaxis.max, f = f(c)), b = 0; b < f.length; ++b) {
        var g = f[b],
            h = H(g, "x"),
            i = H(g, "y");

        if (null == h.from && (h.from = h.axis.min), null == h.to && (h.to = h.axis.max), null == i.from && (i.from = i.axis.min), null == i.to && (i.to = i.axis.max), !(h.to < h.axis.min || h.from > h.axis.max || i.to < i.axis.min || i.from > i.axis.max)) {
          h.from = Math.max(h.from, h.axis.min), h.to = Math.min(h.to, h.axis.max), i.from = Math.max(i.from, i.axis.min), i.to = Math.min(i.to, i.axis.max);
          var j = h.from === h.to,
              k = i.from === i.to;
          if (!j || !k) if (h.from = Math.floor(h.axis.p2c(h.from)), h.to = Math.floor(h.axis.p2c(h.to)), i.from = Math.floor(i.axis.p2c(i.from)), i.to = Math.floor(i.axis.p2c(i.to)), j || k) {
            var l = g.lineWidth || ea.grid.markingsLineWidth,
                m = l % 2 ? .5 : 0;
            ia.beginPath(), ia.strokeStyle = g.color || ea.grid.markingsColor, ia.lineWidth = l, j ? (ia.moveTo(h.to + m, i.from), ia.lineTo(h.to + m, i.to)) : (ia.moveTo(h.from, i.to + m), ia.lineTo(h.to, i.to + m)), ia.stroke();
          } else ia.fillStyle = g.color || ea.grid.markingsColor, ia.fillRect(h.from, i.to, h.to - h.from, i.from - i.to);
        }
      }
      c = n(), d = ea.grid.borderWidth;

      for (var o = 0; o < c.length; ++o) {
        var p,
            q,
            r,
            s,
            t = c[o],
            u = t.box,
            v = t.tickLength;

        if (t.show && 0 != t.ticks.length) {
          for (ia.lineWidth = 1, "x" == t.direction ? (p = 0, q = "full" == v ? "top" == t.position ? 0 : oa : u.top - ma.top + ("top" == t.position ? u.height : 0)) : (q = 0, p = "full" == v ? "left" == t.position ? 0 : na : u.left - ma.left + ("left" == t.position ? u.width : 0)), t.innermost || (ia.strokeStyle = t.options.color, ia.beginPath(), r = s = 0, "x" == t.direction ? r = na + 1 : s = oa + 1, 1 == ia.lineWidth && ("x" == t.direction ? q = Math.floor(q) + .5 : p = Math.floor(p) + .5), ia.moveTo(p, q), ia.lineTo(p + r, q + s), ia.stroke()), ia.strokeStyle = t.options.tickColor, ia.beginPath(), b = 0; b < t.ticks.length; ++b) {
            var w = t.ticks[b].v;
            r = s = 0, isNaN(w) || w < t.min || w > t.max || "full" == v && ("object" == _typeof(d) && d[t.position] > 0 || d > 0) && (w == t.min || w == t.max) || ("x" == t.direction ? (p = t.p2c(w), s = "full" == v ? -oa : v, "top" == t.position && (s = -s)) : (q = t.p2c(w), r = "full" == v ? -na : v, "left" == t.position && (r = -r)), 1 == ia.lineWidth && ("x" == t.direction ? p = Math.floor(p) + .5 : q = Math.floor(q) + .5), ia.moveTo(p, q), ia.lineTo(p + r, q + s));
          }

          ia.stroke();
        }
      }

      d && (e = ea.grid.borderColor, "object" == _typeof(d) || "object" == _typeof(e) ? ("object" != _typeof(d) && (d = {
        top: d,
        right: d,
        bottom: d,
        left: d
      }), "object" != _typeof(e) && (e = {
        top: e,
        right: e,
        bottom: e,
        left: e
      }), d.top > 0 && (ia.strokeStyle = e.top, ia.lineWidth = d.top, ia.beginPath(), ia.moveTo(0 - d.left, 0 - d.top / 2), ia.lineTo(na, 0 - d.top / 2), ia.stroke()), d.right > 0 && (ia.strokeStyle = e.right, ia.lineWidth = d.right, ia.beginPath(), ia.moveTo(na + d.right / 2, 0 - d.top), ia.lineTo(na + d.right / 2, oa), ia.stroke()), d.bottom > 0 && (ia.strokeStyle = e.bottom, ia.lineWidth = d.bottom, ia.beginPath(), ia.moveTo(na + d.right, oa + d.bottom / 2), ia.lineTo(0, oa + d.bottom / 2), ia.stroke()), d.left > 0 && (ia.strokeStyle = e.left, ia.lineWidth = d.left, ia.beginPath(), ia.moveTo(0 - d.left / 2, oa + d.bottom), ia.lineTo(0 - d.left / 2, 0), ia.stroke())) : (ia.lineWidth = d, ia.strokeStyle = ea.grid.borderColor, ia.strokeRect(-d / 2, -d / 2, na + d, oa + d))), ia.restore();
    }

    function K() {
      a.each(n(), function (a, b) {
        var c,
            d,
            e,
            f,
            g,
            h = b.box,
            i = b.direction + "Axis " + b.direction + b.n + "Axis",
            j = "flot-" + b.direction + "-axis flot-" + b.direction + b.n + "-axis " + i,
            k = b.options.font || "flot-tick-label tickLabel";
        if (fa.removeText(j), b.show && 0 != b.ticks.length) for (var l = 0; l < b.ticks.length; ++l) {
          c = b.ticks[l], !c.label || c.v < b.min || c.v > b.max || ("x" == b.direction ? (f = "center", d = ma.left + b.p2c(c.v), "bottom" == b.position ? e = h.top + h.padding : (e = h.top + h.height - h.padding, g = "bottom")) : (g = "middle", e = ma.top + b.p2c(c.v), "left" == b.position ? (d = h.left + h.width - h.padding, f = "right") : d = h.left + h.padding), fa.addText(j, d, e, c.label, k, null, null, f, g));
        }
      });
    }

    function L(a) {
      a.lines.show && M(a), a.bars.show && P(a), a.points.show && N(a);
    }

    function M(a) {
      function b(a, b, c, d, e) {
        var f = a.points,
            g = a.pointsize,
            h = null,
            i = null;
        ia.beginPath();

        for (var j = g; j < f.length; j += g) {
          var k = f[j - g],
              l = f[j - g + 1],
              m = f[j],
              n = f[j + 1];

          if (null != k && null != m) {
            if (n >= l && l < e.min) {
              if (n < e.min) continue;
              k = (e.min - l) / (n - l) * (m - k) + k, l = e.min;
            } else if (l >= n && n < e.min) {
              if (l < e.min) continue;
              m = (e.min - l) / (n - l) * (m - k) + k, n = e.min;
            }

            if (l >= n && l > e.max) {
              if (n > e.max) continue;
              k = (e.max - l) / (n - l) * (m - k) + k, l = e.max;
            } else if (n >= l && n > e.max) {
              if (l > e.max) continue;
              m = (e.max - l) / (n - l) * (m - k) + k, n = e.max;
            }

            if (m >= k && k < d.min) {
              if (m < d.min) continue;
              l = (d.min - k) / (m - k) * (n - l) + l, k = d.min;
            } else if (k >= m && m < d.min) {
              if (k < d.min) continue;
              n = (d.min - k) / (m - k) * (n - l) + l, m = d.min;
            }

            if (k >= m && k > d.max) {
              if (m > d.max) continue;
              l = (d.max - k) / (m - k) * (n - l) + l, k = d.max;
            } else if (m >= k && m > d.max) {
              if (k > d.max) continue;
              n = (d.max - k) / (m - k) * (n - l) + l, m = d.max;
            }

            k == h && l == i || ia.moveTo(d.p2c(k) + b, e.p2c(l) + c), h = m, i = n, ia.lineTo(d.p2c(m) + b, e.p2c(n) + c);
          }
        }

        ia.stroke();
      }

      function c(a, b, c) {
        for (var d = a.points, e = a.pointsize, f = Math.min(Math.max(0, c.min), c.max), g = 0, h = !1, i = 1, j = 0, k = 0;;) {
          if (e > 0 && g > d.length + e) break;
          g += e;
          var l = d[g - e],
              m = d[g - e + i],
              n = d[g],
              o = d[g + i];

          if (h) {
            if (e > 0 && null != l && null == n) {
              k = g, e = -e, i = 2;
              continue;
            }

            if (0 > e && g == j + e) {
              ia.fill(), h = !1, e = -e, i = 1, g = j = k + e;
              continue;
            }
          }

          if (null != l && null != n) {
            if (n >= l && l < b.min) {
              if (n < b.min) continue;
              m = (b.min - l) / (n - l) * (o - m) + m, l = b.min;
            } else if (l >= n && n < b.min) {
              if (l < b.min) continue;
              o = (b.min - l) / (n - l) * (o - m) + m, n = b.min;
            }

            if (l >= n && l > b.max) {
              if (n > b.max) continue;
              m = (b.max - l) / (n - l) * (o - m) + m, l = b.max;
            } else if (n >= l && n > b.max) {
              if (l > b.max) continue;
              o = (b.max - l) / (n - l) * (o - m) + m, n = b.max;
            }

            if (h || (ia.beginPath(), ia.moveTo(b.p2c(l), c.p2c(f)), h = !0), m >= c.max && o >= c.max) ia.lineTo(b.p2c(l), c.p2c(c.max)), ia.lineTo(b.p2c(n), c.p2c(c.max));else if (m <= c.min && o <= c.min) ia.lineTo(b.p2c(l), c.p2c(c.min)), ia.lineTo(b.p2c(n), c.p2c(c.min));else {
              var p = l,
                  q = n;
              o >= m && m < c.min && o >= c.min ? (l = (c.min - m) / (o - m) * (n - l) + l, m = c.min) : m >= o && o < c.min && m >= c.min && (n = (c.min - m) / (o - m) * (n - l) + l, o = c.min), m >= o && m > c.max && o <= c.max ? (l = (c.max - m) / (o - m) * (n - l) + l, m = c.max) : o >= m && o > c.max && m <= c.max && (n = (c.max - m) / (o - m) * (n - l) + l, o = c.max), l != p && ia.lineTo(b.p2c(p), c.p2c(m)), ia.lineTo(b.p2c(l), c.p2c(m)), ia.lineTo(b.p2c(n), c.p2c(o)), n != q && (ia.lineTo(b.p2c(n), c.p2c(o)), ia.lineTo(b.p2c(q), c.p2c(o)));
            }
          }
        }
      }

      ia.save(), ia.translate(ma.left, ma.top), ia.lineJoin = "round";
      var d = a.lines.lineWidth,
          e = a.shadowSize;

      if (d > 0 && e > 0) {
        ia.lineWidth = e, ia.strokeStyle = "rgba(0,0,0,0.1)";
        var f = Math.PI / 18;
        b(a.datapoints, Math.sin(f) * (d / 2 + e / 2), Math.cos(f) * (d / 2 + e / 2), a.xaxis, a.yaxis), ia.lineWidth = e / 2, b(a.datapoints, Math.sin(f) * (d / 2 + e / 4), Math.cos(f) * (d / 2 + e / 4), a.xaxis, a.yaxis);
      }

      ia.lineWidth = d, ia.strokeStyle = a.color;
      var g = Q(a.lines, a.color, 0, oa);
      g && (ia.fillStyle = g, c(a.datapoints, a.xaxis, a.yaxis)), d > 0 && b(a.datapoints, 0, 0, a.xaxis, a.yaxis), ia.restore();
    }

    function N(a) {
      function b(a, b, c, d, e, f, g, h) {
        for (var i = a.points, j = a.pointsize, k = 0; k < i.length; k += j) {
          var l = i[k],
              m = i[k + 1];
          null == l || l < f.min || l > f.max || m < g.min || m > g.max || (ia.beginPath(), l = f.p2c(l), m = g.p2c(m) + d, "circle" == h ? ia.arc(l, m, b, 0, e ? Math.PI : 2 * Math.PI, !1) : h(ia, l, m, b, e), ia.closePath(), c && (ia.fillStyle = c, ia.fill()), ia.stroke());
        }
      }

      ia.save(), ia.translate(ma.left, ma.top);
      var c = a.points.lineWidth,
          d = a.shadowSize,
          e = a.points.radius,
          f = a.points.symbol;

      if (0 == c && (c = 1e-4), c > 0 && d > 0) {
        var g = d / 2;
        ia.lineWidth = g, ia.strokeStyle = "rgba(0,0,0,0.1)", b(a.datapoints, e, null, g + g / 2, !0, a.xaxis, a.yaxis, f), ia.strokeStyle = "rgba(0,0,0,0.2)", b(a.datapoints, e, null, g / 2, !0, a.xaxis, a.yaxis, f);
      }

      ia.lineWidth = c, ia.strokeStyle = a.color, b(a.datapoints, e, Q(a.points, a.color), 0, !1, a.xaxis, a.yaxis, f), ia.restore();
    }

    function O(a, b, c, d, e, f, g, h, i, j, k) {
      var l, m, n, o, p, q, r, s, t;
      j ? (s = q = r = !0, p = !1, l = c, m = a, o = b + d, n = b + e, l > m && (t = m, m = l, l = t, p = !0, q = !1)) : (p = q = r = !0, s = !1, l = a + d, m = a + e, n = c, o = b, n > o && (t = o, o = n, n = t, s = !0, r = !1)), m < g.min || l > g.max || o < h.min || n > h.max || (l < g.min && (l = g.min, p = !1), m > g.max && (m = g.max, q = !1), n < h.min && (n = h.min, s = !1), o > h.max && (o = h.max, r = !1), l = g.p2c(l), n = h.p2c(n), m = g.p2c(m), o = h.p2c(o), f && (i.fillStyle = f(n, o), i.fillRect(l, o, m - l, n - o)), k > 0 && (p || q || r || s) && (i.beginPath(), i.moveTo(l, n), p ? i.lineTo(l, o) : i.moveTo(l, o), r ? i.lineTo(m, o) : i.moveTo(m, o), q ? i.lineTo(m, n) : i.moveTo(m, n), s ? i.lineTo(l, n) : i.moveTo(l, n), i.stroke()));
    }

    function P(a) {
      function b(b, c, d, e, f, g) {
        for (var h = b.points, i = b.pointsize, j = 0; j < h.length; j += i) {
          null != h[j] && O(h[j], h[j + 1], h[j + 2], c, d, e, f, g, ia, a.bars.horizontal, a.bars.lineWidth);
        }
      }

      ia.save(), ia.translate(ma.left, ma.top), ia.lineWidth = a.bars.lineWidth, ia.strokeStyle = a.color;
      var c;

      switch (a.bars.align) {
        case "left":
          c = 0;
          break;

        case "right":
          c = -a.bars.barWidth;
          break;

        default:
          c = -a.bars.barWidth / 2;
      }

      var d = a.bars.fill ? function (b, c) {
        return Q(a.bars, a.color, b, c);
      } : null;
      b(a.datapoints, c, c + a.bars.barWidth, d, a.xaxis, a.yaxis), ia.restore();
    }

    function Q(b, c, d, e) {
      var f = b.fill;
      if (!f) return null;
      if (b.fillColor) return ca(b.fillColor, d, e, c);
      var g = a.color.parse(c);
      return g.a = "number" == typeof f ? f : .4, g.normalize(), g.toString();
    }

    function R() {
      if (null != ea.legend.container ? a(ea.legend.container).html("") : c.find(".legend").remove(), ea.legend.show) {
        for (var b, d, e = [], f = [], g = !1, h = ea.legend.labelFormatter, i = 0; i < da.length; ++i) {
          b = da[i], b.label && (d = h ? h(b.label, b) : b.label, d && f.push({
            label: d,
            color: b.color
          }));
        }

        if (ea.legend.sorted) if (a.isFunction(ea.legend.sorted)) f.sort(ea.legend.sorted);else if ("reverse" == ea.legend.sorted) f.reverse();else {
          var j = "descending" != ea.legend.sorted;
          f.sort(function (a, b) {
            return a.label == b.label ? 0 : a.label < b.label != j ? 1 : -1;
          });
        }

        for (var i = 0; i < f.length; ++i) {
          var k = f[i];
          i % ea.legend.noColumns == 0 && (g && e.push("</tr>"), e.push("<tr>"), g = !0), e.push('<td class="legendColorBox"><div style="border:1px solid ' + ea.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + k.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + k.label + "</td>");
        }

        if (g && e.push("</tr>"), 0 != e.length) {
          var l = '<table style="font-size:smaller;color:' + ea.grid.color + '">' + e.join("") + "</table>";
          if (null != ea.legend.container) a(ea.legend.container).html(l);else {
            var m = "",
                n = ea.legend.position,
                o = ea.legend.margin;
            null == o[0] && (o = [o, o]), "n" == n.charAt(0) ? m += "top:" + (o[1] + ma.top) + "px;" : "s" == n.charAt(0) && (m += "bottom:" + (o[1] + ma.bottom) + "px;"), "e" == n.charAt(1) ? m += "right:" + (o[0] + ma.right) + "px;" : "w" == n.charAt(1) && (m += "left:" + (o[0] + ma.left) + "px;");
            var p = a('<div class="legend">' + l.replace('style="', 'style="position:absolute;' + m + ";") + "</div>").appendTo(c);

            if (0 != ea.legend.backgroundOpacity) {
              var q = ea.legend.backgroundColor;
              null == q && (q = ea.grid.backgroundColor, q = q && "string" == typeof q ? a.color.parse(q) : a.color.extract(p, "background-color"), q.a = 1, q = q.toString());
              var r = p.children();
              a('<div style="position:absolute;width:' + r.width() + "px;height:" + r.height() + "px;" + m + "background-color:" + q + ';"> </div>').prependTo(p).css("opacity", ea.legend.backgroundOpacity);
            }
          }
        }
      }
    }

    function S(a, b, c) {
      var d,
          e,
          f,
          g = ea.grid.mouseActiveRadius,
          h = g * g + 1,
          i = null;

      for (d = da.length - 1; d >= 0; --d) {
        if (c(da[d])) {
          var j = da[d],
              k = j.xaxis,
              l = j.yaxis,
              m = j.datapoints.points,
              n = k.c2p(a),
              o = l.c2p(b),
              p = g / k.scale,
              q = g / l.scale;
          if (f = j.datapoints.pointsize, k.options.inverseTransform && (p = Number.MAX_VALUE), l.options.inverseTransform && (q = Number.MAX_VALUE), j.lines.show || j.points.show) for (e = 0; e < m.length; e += f) {
            var r = m[e],
                s = m[e + 1];

            if (null != r && !(r - n > p || -p > r - n || s - o > q || -q > s - o)) {
              var t = Math.abs(k.p2c(r) - a),
                  u = Math.abs(l.p2c(s) - b),
                  v = t * t + u * u;
              h > v && (h = v, i = [d, e / f]);
            }
          }

          if (j.bars.show && !i) {
            var w, x;

            switch (j.bars.align) {
              case "left":
                w = 0;
                break;

              case "right":
                w = -j.bars.barWidth;
                break;

              default:
                w = -j.bars.barWidth / 2;
            }

            for (x = w + j.bars.barWidth, e = 0; e < m.length; e += f) {
              var r = m[e],
                  s = m[e + 1],
                  y = m[e + 2];
              null != r && (da[d].bars.horizontal ? n <= Math.max(y, r) && n >= Math.min(y, r) && o >= s + w && s + x >= o : n >= r + w && r + x >= n && o >= Math.min(y, s) && o <= Math.max(y, s)) && (i = [d, e / f]);
            }
          }
        }
      }

      return i ? (d = i[0], e = i[1], f = da[d].datapoints.pointsize, {
        datapoint: da[d].datapoints.points.slice(e * f, (e + 1) * f),
        dataIndex: e,
        series: da[d],
        seriesIndex: d
      }) : null;
    }

    function T(a) {
      ea.grid.hoverable && W("plothover", a, function (a) {
        return 0 != a.hoverable;
      });
    }

    function U(a) {
      ea.grid.hoverable && W("plothover", a, function (a) {
        return !1;
      });
    }

    function V(a) {
      W("plotclick", a, function (a) {
        return 0 != a.clickable;
      });
    }

    function W(a, b, d) {
      var e = ha.offset(),
          f = b.pageX - e.left - ma.left,
          g = b.pageY - e.top - ma.top,
          h = o({
        left: f,
        top: g
      });
      h.pageX = b.pageX, h.pageY = b.pageY;
      var i = S(f, g, d);

      if (i && (i.pageX = parseInt(i.series.xaxis.p2c(i.datapoint[0]) + e.left + ma.left, 10), i.pageY = parseInt(i.series.yaxis.p2c(i.datapoint[1]) + e.top + ma.top, 10)), ea.grid.autoHighlight) {
        for (var j = 0; j < ra.length; ++j) {
          var k = ra[j];
          k.auto != a || i && k.series == i.series && k.point[0] == i.datapoint[0] && k.point[1] == i.datapoint[1] || $(k.series, k.point);
        }

        i && Z(i.series, i.datapoint, a);
      }

      c.trigger(a, [h, i]);
    }

    function X() {
      var a = ea.interaction.redrawOverlayInterval;
      return -1 == a ? void Y() : void (sa || (sa = setTimeout(Y, a)));
    }

    function Y() {
      sa = null, ja.save(), ga.clear(), ja.translate(ma.left, ma.top);
      var a, b;

      for (a = 0; a < ra.length; ++a) {
        b = ra[a], b.series.bars.show ? ba(b.series, b.point) : aa(b.series, b.point);
      }

      ja.restore(), h(pa.drawOverlay, [ja]);
    }

    function Z(a, b, c) {
      if ("number" == typeof a && (a = da[a]), "number" == typeof b) {
        var d = a.datapoints.pointsize;
        b = a.datapoints.points.slice(d * b, d * (b + 1));
      }

      var e = _(a, b);

      -1 == e ? (ra.push({
        series: a,
        point: b,
        auto: c
      }), X()) : c || (ra[e].auto = !1);
    }

    function $(a, b) {
      if (null == a && null == b) return ra = [], void X();

      if ("number" == typeof a && (a = da[a]), "number" == typeof b) {
        var c = a.datapoints.pointsize;
        b = a.datapoints.points.slice(c * b, c * (b + 1));
      }

      var d = _(a, b);

      -1 != d && (ra.splice(d, 1), X());
    }

    function _(a, b) {
      for (var c = 0; c < ra.length; ++c) {
        var d = ra[c];
        if (d.series == a && d.point[0] == b[0] && d.point[1] == b[1]) return c;
      }

      return -1;
    }

    function aa(b, c) {
      var d = c[0],
          e = c[1],
          f = b.xaxis,
          g = b.yaxis,
          h = "string" == typeof b.highlightColor ? b.highlightColor : a.color.parse(b.color).scale("a", .5).toString();

      if (!(d < f.min || d > f.max || e < g.min || e > g.max)) {
        var i = b.points.radius + b.points.lineWidth / 2;
        ja.lineWidth = i, ja.strokeStyle = h;
        var j = 1.5 * i;
        d = f.p2c(d), e = g.p2c(e), ja.beginPath(), "circle" == b.points.symbol ? ja.arc(d, e, j, 0, 2 * Math.PI, !1) : b.points.symbol(ja, d, e, j, !1), ja.closePath(), ja.stroke();
      }
    }

    function ba(b, c) {
      var d,
          e = "string" == typeof b.highlightColor ? b.highlightColor : a.color.parse(b.color).scale("a", .5).toString(),
          f = e;

      switch (b.bars.align) {
        case "left":
          d = 0;
          break;

        case "right":
          d = -b.bars.barWidth;
          break;

        default:
          d = -b.bars.barWidth / 2;
      }

      ja.lineWidth = b.bars.lineWidth, ja.strokeStyle = e, O(c[0], c[1], c[2] || 0, d, d + b.bars.barWidth, function () {
        return f;
      }, b.xaxis, b.yaxis, ja, b.bars.horizontal, b.bars.lineWidth);
    }

    function ca(b, c, d, e) {
      if ("string" == typeof b) return b;

      for (var f = ia.createLinearGradient(0, d, 0, c), g = 0, h = b.colors.length; h > g; ++g) {
        var i = b.colors[g];

        if ("string" != typeof i) {
          var j = a.color.parse(e);
          null != i.brightness && (j = j.scale("rgb", i.brightness)), null != i.opacity && (j.a *= i.opacity), i = j.toString();
        }

        f.addColorStop(g / (h - 1), i);
      }

      return f;
    }

    var da = [],
        ea = {
      colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
      legend: {
        show: !0,
        noColumns: 1,
        labelFormatter: null,
        labelBoxBorderColor: "#ccc",
        container: null,
        position: "ne",
        margin: 5,
        backgroundColor: null,
        backgroundOpacity: .85,
        sorted: null
      },
      xaxis: {
        show: null,
        position: "bottom",
        mode: null,
        font: null,
        color: null,
        tickColor: null,
        transform: null,
        inverseTransform: null,
        min: null,
        max: null,
        autoscaleMargin: null,
        ticks: null,
        tickFormatter: null,
        labelWidth: null,
        labelHeight: null,
        reserveSpace: null,
        tickLength: null,
        alignTicksWithAxis: null,
        tickDecimals: null,
        tickSize: null,
        minTickSize: null
      },
      yaxis: {
        autoscaleMargin: .02,
        position: "left"
      },
      xaxes: [],
      yaxes: [],
      series: {
        points: {
          show: !1,
          radius: 3,
          lineWidth: 2,
          fill: !0,
          fillColor: "#ffffff",
          symbol: "circle"
        },
        lines: {
          lineWidth: 2,
          fill: !1,
          fillColor: null,
          steps: !1
        },
        bars: {
          show: !1,
          lineWidth: 2,
          barWidth: 1,
          fill: !0,
          fillColor: null,
          align: "left",
          horizontal: !1,
          zero: !0
        },
        shadowSize: 3,
        highlightColor: null
      },
      grid: {
        show: !0,
        aboveData: !1,
        color: "#545454",
        backgroundColor: null,
        borderColor: null,
        tickColor: null,
        margin: 0,
        labelMargin: 5,
        axisMargin: 8,
        borderWidth: 2,
        minBorderMargin: null,
        markings: null,
        markingsColor: "#f4f4f4",
        markingsLineWidth: 2,
        clickable: !1,
        hoverable: !1,
        autoHighlight: !0,
        mouseActiveRadius: 10
      },
      interaction: {
        redrawOverlayInterval: 1e3 / 60
      },
      hooks: {}
    },
        fa = null,
        ga = null,
        ha = null,
        ia = null,
        ja = null,
        ka = [],
        la = [],
        ma = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
        na = 0,
        oa = 0,
        pa = {
      processOptions: [],
      processRawData: [],
      processDatapoints: [],
      processOffset: [],
      drawBackground: [],
      drawSeries: [],
      draw: [],
      bindEvents: [],
      drawOverlay: [],
      shutdown: []
    },
        qa = this;
    qa.setData = k, qa.setupGrid = B, qa.draw = G, qa.getPlaceholder = function () {
      return c;
    }, qa.getCanvas = function () {
      return fa.element;
    }, qa.getPlotOffset = function () {
      return ma;
    }, qa.width = function () {
      return na;
    }, qa.height = function () {
      return oa;
    }, qa.offset = function () {
      var a = ha.offset();
      return a.left += ma.left, a.top += ma.top, a;
    }, qa.getData = function () {
      return da;
    }, qa.getAxes = function () {
      var b = {};
      return a.each(ka.concat(la), function (a, c) {
        c && (b[c.direction + (1 != c.n ? c.n : "") + "axis"] = c);
      }), b;
    }, qa.getXAxes = function () {
      return ka;
    }, qa.getYAxes = function () {
      return la;
    }, qa.c2p = o, qa.p2c = p, qa.getOptions = function () {
      return ea;
    }, qa.highlight = Z, qa.unhighlight = $, qa.triggerRedrawOverlay = X, qa.pointOffset = function (a) {
      return {
        left: parseInt(ka[m(a, "x") - 1].p2c(+a.x) + ma.left, 10),
        top: parseInt(la[m(a, "y") - 1].p2c(+a.y) + ma.top, 10)
      };
    }, qa.shutdown = v, qa.destroy = function () {
      v(), c.removeData("plot").empty(), da = [], ea = null, fa = null, ga = null, ha = null, ia = null, ja = null, ka = [], la = [], pa = null, ra = [], qa = null;
    }, qa.resize = function () {
      var a = c.width(),
          b = c.height();
      fa.resize(a, b), ga.resize(a, b);
    }, qa.hooks = pa, i(qa), j(f), t(), k(e), B(), G(), u();
    var ra = [],
        sa = null;
  }

  function d(a, b) {
    return b * Math.floor(a / b);
  }

  var e = Object.prototype.hasOwnProperty;
  a.fn.detach || (a.fn.detach = function () {
    return this.each(function () {
      this.parentNode && this.parentNode.removeChild(this);
    });
  }), b.prototype.resize = function (a, b) {
    if (0 >= a || 0 >= b) throw new Error("Invalid dimensions for plot, width = " + a + ", height = " + b);
    var c = this.element,
        d = this.context,
        e = this.pixelRatio;
    this.width != a && (c.width = a * e, c.style.width = a + "px", this.width = a), this.height != b && (c.height = b * e, c.style.height = b + "px", this.height = b), d.restore(), d.save(), d.scale(e, e);
  }, b.prototype.clear = function () {
    this.context.clearRect(0, 0, this.width, this.height);
  }, b.prototype.render = function () {
    var a = this._textCache;

    for (var b in a) {
      if (e.call(a, b)) {
        var c = this.getTextLayer(b),
            d = a[b];
        c.hide();

        for (var f in d) {
          if (e.call(d, f)) {
            var g = d[f];

            for (var h in g) {
              if (e.call(g, h)) {
                for (var i, j = g[h].positions, k = 0; i = j[k]; k++) {
                  i.active ? i.rendered || (c.append(i.element), i.rendered = !0) : (j.splice(k--, 1), i.rendered && i.element.detach());
                }

                0 == j.length && delete g[h];
              }
            }
          }
        }

        c.show();
      }
    }
  }, b.prototype.getTextLayer = function (b) {
    var c = this.text[b];
    return null == c && (null == this.textContainer && (this.textContainer = a("<div class='flot-text'></div>").css({
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      "font-size": "smaller",
      color: "#545454"
    }).insertAfter(this.element)), c = this.text[b] = a("<div></div>").addClass(b).css({
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }).appendTo(this.textContainer)), c;
  }, b.prototype.getTextInfo = function (b, c, d, e, f) {
    var g, h, i, j;

    if (c = "" + c, g = "object" == _typeof(d) ? d.style + " " + d.variant + " " + d.weight + " " + d.size + "px/" + d.lineHeight + "px " + d.family : d, h = this._textCache[b], null == h && (h = this._textCache[b] = {}), i = h[g], null == i && (i = h[g] = {}), j = i[c], null == j) {
      var k = a("<div></div>").html(c).css({
        position: "absolute",
        "max-width": f,
        top: -9999
      }).appendTo(this.getTextLayer(b));
      "object" == _typeof(d) ? k.css({
        font: g,
        color: d.color
      }) : "string" == typeof d && k.addClass(d), j = i[c] = {
        width: k.outerWidth(!0),
        height: k.outerHeight(!0),
        element: k,
        positions: []
      }, k.detach();
    }

    return j;
  }, b.prototype.addText = function (a, b, c, d, e, f, g, h, i) {
    var j = this.getTextInfo(a, d, e, f, g),
        k = j.positions;
    "center" == h ? b -= j.width / 2 : "right" == h && (b -= j.width), "middle" == i ? c -= j.height / 2 : "bottom" == i && (c -= j.height);

    for (var l, m = 0; l = k[m]; m++) {
      if (l.x == b && l.y == c) return void (l.active = !0);
    }

    l = {
      active: !0,
      rendered: !1,
      element: k.length ? j.element.clone() : j.element,
      x: b,
      y: c
    }, k.push(l), l.element.css({
      top: Math.round(c),
      left: Math.round(b),
      "text-align": h
    });
  }, b.prototype.removeText = function (a, b, c, d, f, g) {
    if (null == d) {
      var h = this._textCache[a];
      if (null != h) for (var i in h) {
        if (e.call(h, i)) {
          var j = h[i];

          for (var k in j) {
            if (e.call(j, k)) for (var l, m = j[k].positions, n = 0; l = m[n]; n++) {
              l.active = !1;
            }
          }
        }
      }
    } else for (var l, m = this.getTextInfo(a, d, f, g).positions, n = 0; l = m[n]; n++) {
      l.x == b && l.y == c && (l.active = !1);
    }
  }, a.plot = function (b, d, e) {
    var f = new c(a(b), d, e, a.plot.plugins);
    return f;
  }, a.plot.version = "0.8.3", a.plot.plugins = [], a.fn.plot = function (b, c) {
    return this.each(function () {
      a.plot(this, b, c);
    });
  };
}(jQuery);

/***/ }),

/***/ "./resources/assests/js/jquery.flot.pie.min.js":
/*!*****************************************************!*\
  !*** ./resources/assests/js/jquery.flot.pie.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Flot plugin for rendering pie charts.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes that each series has a single data value, and that each
value is a positive integer or zero.  Negative numbers don't make sense for a
pie chart, and have unpredictable results.  The values do NOT need to be
passed in as percentages; the plugin will calculate the total and per-slice
percentages internally.

* Created by Brian Medendorp

* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

The plugin supports these options:

	series: {
		pie: {
			show: true/false
			radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
			innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
			startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
			tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
			offset: {
				top: integer value to move the pie up or down
				left: integer value to move the pie left or right, or 'auto'
			},
			stroke: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
				width: integer pixel width of the stroke
			},
			label: {
				show: true/false, or 'auto'
				formatter:  a user-defined function that modifies the text/style of the label text
				radius: 0-1 for percentage of fullsize, or a specified pixel length
				background: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
					opacity: 0-1
				},
				threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
			},
			combine: {
				threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
				label: any text value of what the combined slice should be labeled
			}
			highlight: {
				opacity: 0-1
			}
		}
	}

More detail and specific examples can be found in the included HTML file.

*/
!function (a) {
  function b(b) {
    function e(b, c, d) {
      x || (x = !0, r = b.getCanvas(), s = a(r).parent(), t = b.getOptions(), b.setData(f(b.getData())));
    }

    function f(b) {
      for (var c = 0, d = 0, e = 0, f = t.series.pie.combine.color, g = [], h = 0; h < b.length; ++h) {
        var i = b[h].data;
        a.isArray(i) && 1 == i.length && (i = i[0]), a.isArray(i) ? !isNaN(parseFloat(i[1])) && isFinite(i[1]) ? i[1] = +i[1] : i[1] = 0 : i = !isNaN(parseFloat(i)) && isFinite(i) ? [1, +i] : [1, 0], b[h].data = [i];
      }

      for (var h = 0; h < b.length; ++h) {
        c += b[h].data[0][1];
      }

      for (var h = 0; h < b.length; ++h) {
        var i = b[h].data[0][1];
        i / c <= t.series.pie.combine.threshold && (d += i, e++, f || (f = b[h].color));
      }

      for (var h = 0; h < b.length; ++h) {
        var i = b[h].data[0][1];
        (2 > e || i / c > t.series.pie.combine.threshold) && g.push(a.extend(b[h], {
          data: [[1, i]],
          color: b[h].color,
          label: b[h].label,
          angle: i * Math.PI * 2 / c,
          percent: i / (c / 100)
        }));
      }

      return e > 1 && g.push({
        data: [[1, d]],
        color: f,
        label: t.series.pie.combine.label,
        angle: d * Math.PI * 2 / c,
        percent: d / (c / 100)
      }), g;
    }

    function g(b, e) {
      function f() {
        y.clearRect(0, 0, j, k), s.children().filter(".pieLabel, .pieLabelBackground").remove();
      }

      function g() {
        var a = t.series.pie.shadow.left,
            b = t.series.pie.shadow.top,
            c = 10,
            d = t.series.pie.shadow.alpha,
            e = t.series.pie.radius > 1 ? t.series.pie.radius : u * t.series.pie.radius;

        if (!(e >= j / 2 - a || e * t.series.pie.tilt >= k / 2 - b || c >= e)) {
          y.save(), y.translate(a, b), y.globalAlpha = d, y.fillStyle = "#000", y.translate(v, w), y.scale(1, t.series.pie.tilt);

          for (var f = 1; c >= f; f++) {
            y.beginPath(), y.arc(0, 0, e, 0, 2 * Math.PI, !1), y.fill(), e -= f;
          }

          y.restore();
        }
      }

      function i() {
        function b(a, b, c) {
          0 >= a || isNaN(a) || (c ? y.fillStyle = b : (y.strokeStyle = b, y.lineJoin = "round"), y.beginPath(), Math.abs(a - 2 * Math.PI) > 1e-9 && y.moveTo(0, 0), y.arc(0, 0, e, f, f + a / 2, !1), y.arc(0, 0, e, f + a / 2, f + a, !1), y.closePath(), f += a, c ? y.fill() : y.stroke());
        }

        function c() {
          function b(b, c, d) {
            if (0 == b.data[0][1]) return !0;
            var f,
                g = t.legend.labelFormatter,
                h = t.series.pie.label.formatter;
            f = g ? g(b.label, b) : b.label, h && (f = h(f, b));
            var i = (c + b.angle + c) / 2,
                l = v + Math.round(Math.cos(i) * e),
                m = w + Math.round(Math.sin(i) * e) * t.series.pie.tilt,
                n = "<span class='pieLabel' id='pieLabel" + d + "' style='position:absolute;top:" + m + "px;left:" + l + "px;'>" + f + "</span>";
            s.append(n);
            var o = s.children("#pieLabel" + d),
                p = m - o.height() / 2,
                q = l - o.width() / 2;
            if (o.css("top", p), o.css("left", q), 0 - p > 0 || 0 - q > 0 || k - (p + o.height()) < 0 || j - (q + o.width()) < 0) return !1;

            if (0 != t.series.pie.label.background.opacity) {
              var r = t.series.pie.label.background.color;
              null == r && (r = b.color);
              var u = "top:" + p + "px;left:" + q + "px;";
              a("<div class='pieLabelBackground' style='position:absolute;width:" + o.width() + "px;height:" + o.height() + "px;" + u + "background-color:" + r + ";'></div>").css("opacity", t.series.pie.label.background.opacity).insertBefore(o);
            }

            return !0;
          }

          for (var c = d, e = t.series.pie.label.radius > 1 ? t.series.pie.label.radius : u * t.series.pie.label.radius, f = 0; f < m.length; ++f) {
            if (m[f].percent >= 100 * t.series.pie.label.threshold && !b(m[f], c, f)) return !1;
            c += m[f].angle;
          }

          return !0;
        }

        var d = Math.PI * t.series.pie.startAngle,
            e = t.series.pie.radius > 1 ? t.series.pie.radius : u * t.series.pie.radius;
        y.save(), y.translate(v, w), y.scale(1, t.series.pie.tilt), y.save();

        for (var f = d, g = 0; g < m.length; ++g) {
          m[g].startAngle = f, b(m[g].angle, m[g].color, !0);
        }

        if (y.restore(), t.series.pie.stroke.width > 0) {
          y.save(), y.lineWidth = t.series.pie.stroke.width, f = d;

          for (var g = 0; g < m.length; ++g) {
            b(m[g].angle, t.series.pie.stroke.color, !1);
          }

          y.restore();
        }

        return h(y), y.restore(), t.series.pie.label.show ? c() : !0;
      }

      if (s) {
        var j = b.getPlaceholder().width(),
            k = b.getPlaceholder().height(),
            l = s.children().filter(".legend").children().width() || 0;
        y = e, x = !1, u = Math.min(j, k / t.series.pie.tilt) / 2, w = k / 2 + t.series.pie.offset.top, v = j / 2, "auto" == t.series.pie.offset.left ? (t.legend.position.match("w") ? v += l / 2 : v -= l / 2, u > v ? v = u : v > j - u && (v = j - u)) : v += t.series.pie.offset.left;
        var m = b.getData(),
            n = 0;

        do {
          n > 0 && (u *= d), n += 1, f(), t.series.pie.tilt <= .8 && g();
        } while (!i() && c > n);

        n >= c && (f(), s.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")), b.setSeries && b.insertLegend && (b.setSeries(m), b.insertLegend());
      }
    }

    function h(a) {
      if (t.series.pie.innerRadius > 0) {
        a.save();
        var b = t.series.pie.innerRadius > 1 ? t.series.pie.innerRadius : u * t.series.pie.innerRadius;
        a.globalCompositeOperation = "destination-out", a.beginPath(), a.fillStyle = t.series.pie.stroke.color, a.arc(0, 0, b, 0, 2 * Math.PI, !1), a.fill(), a.closePath(), a.restore(), a.save(), a.beginPath(), a.strokeStyle = t.series.pie.stroke.color, a.arc(0, 0, b, 0, 2 * Math.PI, !1), a.stroke(), a.closePath(), a.restore();
      }
    }

    function i(a, b) {
      for (var c = !1, d = -1, e = a.length, f = e - 1; ++d < e; f = d) {
        (a[d][1] <= b[1] && b[1] < a[f][1] || a[f][1] <= b[1] && b[1] < a[d][1]) && b[0] < (a[f][0] - a[d][0]) * (b[1] - a[d][1]) / (a[f][1] - a[d][1]) + a[d][0] && (c = !c);
      }

      return c;
    }

    function j(a, c) {
      for (var d, e, f = b.getData(), g = b.getOptions(), h = g.series.pie.radius > 1 ? g.series.pie.radius : u * g.series.pie.radius, j = 0; j < f.length; ++j) {
        var k = f[j];

        if (k.pie.show) {
          if (y.save(), y.beginPath(), y.moveTo(0, 0), y.arc(0, 0, h, k.startAngle, k.startAngle + k.angle / 2, !1), y.arc(0, 0, h, k.startAngle + k.angle / 2, k.startAngle + k.angle, !1), y.closePath(), d = a - v, e = c - w, y.isPointInPath) {
            if (y.isPointInPath(a - v, c - w)) return y.restore(), {
              datapoint: [k.percent, k.data],
              dataIndex: 0,
              series: k,
              seriesIndex: j
            };
          } else {
            var l = h * Math.cos(k.startAngle),
                m = h * Math.sin(k.startAngle),
                n = h * Math.cos(k.startAngle + k.angle / 4),
                o = h * Math.sin(k.startAngle + k.angle / 4),
                p = h * Math.cos(k.startAngle + k.angle / 2),
                q = h * Math.sin(k.startAngle + k.angle / 2),
                r = h * Math.cos(k.startAngle + k.angle / 1.5),
                s = h * Math.sin(k.startAngle + k.angle / 1.5),
                t = h * Math.cos(k.startAngle + k.angle),
                x = h * Math.sin(k.startAngle + k.angle),
                z = [[0, 0], [l, m], [n, o], [p, q], [r, s], [t, x]],
                A = [d, e];
            if (i(z, A)) return y.restore(), {
              datapoint: [k.percent, k.data],
              dataIndex: 0,
              series: k,
              seriesIndex: j
            };
          }

          y.restore();
        }
      }

      return null;
    }

    function k(a) {
      m("plothover", a);
    }

    function l(a) {
      m("plotclick", a);
    }

    function m(a, c) {
      var d = b.offset(),
          e = parseInt(c.pageX - d.left),
          f = parseInt(c.pageY - d.top),
          g = j(e, f);
      if (t.grid.autoHighlight) for (var h = 0; h < z.length; ++h) {
        var i = z[h];
        i.auto != a || g && i.series == g.series || o(i.series);
      }
      g && n(g.series, a);
      var k = {
        pageX: c.pageX,
        pageY: c.pageY
      };
      s.trigger(a, [k, g]);
    }

    function n(a, c) {
      var d = p(a);
      -1 == d ? (z.push({
        series: a,
        auto: c
      }), b.triggerRedrawOverlay()) : c || (z[d].auto = !1);
    }

    function o(a) {
      null == a && (z = [], b.triggerRedrawOverlay());
      var c = p(a);
      -1 != c && (z.splice(c, 1), b.triggerRedrawOverlay());
    }

    function p(a) {
      for (var b = 0; b < z.length; ++b) {
        var c = z[b];
        if (c.series == a) return b;
      }

      return -1;
    }

    function q(a, b) {
      function c(a) {
        a.angle <= 0 || isNaN(a.angle) || (b.fillStyle = "rgba(255, 255, 255, " + d.series.pie.highlight.opacity + ")", b.beginPath(), Math.abs(a.angle - 2 * Math.PI) > 1e-9 && b.moveTo(0, 0), b.arc(0, 0, e, a.startAngle, a.startAngle + a.angle / 2, !1), b.arc(0, 0, e, a.startAngle + a.angle / 2, a.startAngle + a.angle, !1), b.closePath(), b.fill());
      }

      var d = a.getOptions(),
          e = d.series.pie.radius > 1 ? d.series.pie.radius : u * d.series.pie.radius;
      b.save(), b.translate(v, w), b.scale(1, d.series.pie.tilt);

      for (var f = 0; f < z.length; ++f) {
        c(z[f].series);
      }

      h(b), b.restore();
    }

    var r = null,
        s = null,
        t = null,
        u = null,
        v = null,
        w = null,
        x = !1,
        y = null,
        z = [];
    b.hooks.processOptions.push(function (a, b) {
      b.series.pie.show && (b.grid.show = !1, "auto" == b.series.pie.label.show && (b.legend.show ? b.series.pie.label.show = !1 : b.series.pie.label.show = !0), "auto" == b.series.pie.radius && (b.series.pie.label.show ? b.series.pie.radius = .75 : b.series.pie.radius = 1), b.series.pie.tilt > 1 ? b.series.pie.tilt = 1 : b.series.pie.tilt < 0 && (b.series.pie.tilt = 0));
    }), b.hooks.bindEvents.push(function (a, b) {
      var c = a.getOptions();
      c.series.pie.show && (c.grid.hoverable && b.unbind("mousemove").mousemove(k), c.grid.clickable && b.unbind("click").click(l));
    }), b.hooks.processDatapoints.push(function (a, b, c, d) {
      var f = a.getOptions();
      f.series.pie.show && e(a, b, c, d);
    }), b.hooks.drawOverlay.push(function (a, b) {
      var c = a.getOptions();
      c.series.pie.show && q(a, b);
    }), b.hooks.draw.push(function (a, b) {
      var c = a.getOptions();
      c.series.pie.show && g(a, b);
    });
  }

  var c = 10,
      d = .95,
      e = {
    series: {
      pie: {
        show: !1,
        radius: "auto",
        innerRadius: 0,
        startAngle: 1.5,
        tilt: 1,
        shadow: {
          left: 5,
          top: 15,
          alpha: .02
        },
        offset: {
          top: 0,
          left: "auto"
        },
        stroke: {
          color: "#fff",
          width: 1
        },
        label: {
          show: "auto",
          formatter: function formatter(a, b) {
            return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + b.color + ";'>" + a + "<br/>" + Math.round(b.percent) + "%</div>";
          },
          radius: 1,
          background: {
            color: null,
            opacity: 0
          },
          threshold: 0
        },
        combine: {
          threshold: -1,
          color: null,
          label: "Other"
        },
        highlight: {
          opacity: .5
        }
      }
    }
  };
  a.plot.plugins.push({
    init: b,
    options: e,
    name: "pie",
    version: "1.1"
  });
}(jQuery);

/***/ }),

/***/ "./resources/assests/js/jquery.flot.resize.min.js":
/*!********************************************************!*\
  !*** ./resources/assests/js/jquery.flot.resize.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Flot plugin for automatically redrawing plots as the placeholder resizes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

It works by listening for changes on the placeholder div (through the jQuery
resize event plugin) - if the size changes, it will redraw the plot.

There are no options. If you need to disable the plugin for some plots, you
can just fix the size of their placeholders.

*/
!function (a, b, c) {
  "$:nomunge";

  function d(c) {
    h === !0 && (h = c || 1);

    for (var i = f.length - 1; i >= 0; i--) {
      var m = a(f[i]);

      if (m[0] == b || m.is(":visible")) {
        var n = m.width(),
            o = m.height(),
            p = m.data(k);
        !p || n === p.w && o === p.h || (m.trigger(j, [p.w = n, p.h = o]), h = c || !0);
      } else p = m.data(k), p.w = 0, p.h = 0;
    }

    null !== e && (h && (null == c || 1e3 > c - h) ? e = b.requestAnimationFrame(d) : (e = setTimeout(d, g[l]), h = !1));
  }

  var e,
      f = [],
      g = a.resize = a.extend(a.resize, {}),
      h = !1,
      i = "setTimeout",
      j = "resize",
      k = j + "-special-event",
      l = "pendingDelay",
      m = "activeDelay",
      n = "throttleWindow";
  g[l] = 200, g[m] = 20, g[n] = !0, a.event.special[j] = {
    setup: function setup() {
      if (!g[n] && this[i]) return !1;
      var b = a(this);
      f.push(this), b.data(k, {
        w: b.width(),
        h: b.height()
      }), 1 === f.length && (e = c, d());
    },
    teardown: function teardown() {
      if (!g[n] && this[i]) return !1;

      for (var b = a(this), c = f.length - 1; c >= 0; c--) {
        if (f[c] == this) {
          f.splice(c, 1);
          break;
        }
      }

      b.removeData(k), f.length || (h ? cancelAnimationFrame(e) : clearTimeout(e), e = null);
    },
    add: function add(b) {
      function d(b, d, f) {
        var g = a(this),
            h = g.data(k) || {};
        h.w = d !== c ? d : g.width(), h.h = f !== c ? f : g.height(), e.apply(this, arguments);
      }

      if (!g[n] && this[i]) return !1;
      var e;
      return a.isFunction(b) ? (e = b, d) : (e = b.handler, void (b.handler = d));
    }
  }, b.requestAnimationFrame || (b.requestAnimationFrame = function () {
    return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a, c) {
      return b.setTimeout(function () {
        a(new Date().getTime());
      }, g[m]);
    };
  }()), b.cancelAnimationFrame || (b.cancelAnimationFrame = function () {
    return b.webkitCancelRequestAnimationFrame || b.mozCancelRequestAnimationFrame || b.oCancelRequestAnimationFrame || b.msCancelRequestAnimationFrame || clearTimeout;
  }());
}(jQuery, this), function (a) {
  function b(a) {
    function b() {
      var b = a.getPlaceholder();
      0 != b.width() && 0 != b.height() && (a.resize(), a.setupGrid(), a.draw());
    }

    function c(a, c) {
      a.getPlaceholder().resize(b);
    }

    function d(a, c) {
      a.getPlaceholder().unbind("resize", b);
    }

    a.hooks.bindEvents.push(c), a.hooks.shutdown.push(d);
  }

  var c = {};
  a.plot.plugins.push({
    init: b,
    options: c,
    name: "resize",
    version: "1.0"
  });
}(jQuery);

/***/ }),

/***/ "./resources/assests/js/jquery.sparkline.index.min.js":
/*!************************************************************!*\
  !*** ./resources/assests/js/jquery.sparkline.index.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
*
* jquery.sparkline.js
*
* v2.1.2
* (c) Splunk, Inc
* Contact: Gareth Watts (gareth@splunk.com)
* http://omnipotent.net/jquery.sparkline/
*
* Generates inline sparkline charts from data supplied either to the method
* or inline in HTML
*
* Compatible with Internet Explorer 6.0+ and modern browsers equipped with the canvas tag
* (Firefox 2.0+, Safari, Opera, etc)
*
* License: New BSD License
*
* Copyright (c) 2012, Splunk Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright notice,
*       this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright notice,
*       this list of conditions and the following disclaimer in the documentation
*       and/or other materials provided with the distribution.
*     * Neither the name of Splunk Inc nor the names of its contributors may
*       be used to endorse or promote products derived from this software without
*       specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
* OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
* SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
* OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
* HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* Usage:
*  $(selector).sparkline(values, options)
*
* If values is undefined or set to 'html' then the data values are read from the specified tag:
*   <p>Sparkline: <span class="sparkline">1,4,6,6,8,5,3,5</span></p>
*   $('.sparkline').sparkline();
* There must be no spaces in the enclosed data set
*
* Otherwise values must be an array of numbers or null values
*    <p>Sparkline: <span id="sparkline1">This text replaced if the browser is compatible</span></p>
*    $('#sparkline1').sparkline([1,4,6,6,8,5,3,5])
*    $('#sparkline2').sparkline([1,4,6,null,null,5,3,5])
*
* Values can also be specified in an HTML comment, or as a values attribute:
*    <p>Sparkline: <span class="sparkline"><!--1,4,6,6,8,5,3,5 --></span></p>
*    <p>Sparkline: <span class="sparkline" values="1,4,6,6,8,5,3,5"></span></p>
*    $('.sparkline').sparkline();
*
* For line charts, x values can also be specified:
*   <p>Sparkline: <span class="sparkline">1:1,2.7:4,3.4:6,5:6,6:8,8.7:5,9:3,10:5</span></p>
*    $('#sparkline1').sparkline([ [1,1], [2.7,4], [3.4,6], [5,6], [6,8], [8.7,5], [9,3], [10,5] ])
*
* By default, options should be passed in as teh second argument to the sparkline function:
*   $('.sparkline').sparkline([1,2,3,4], {type: 'bar'})
*
* Options can also be set by passing them on the tag itself.  This feature is disabled by default though
* as there's a slight performance overhead:
*   $('.sparkline').sparkline([1,2,3,4], {enableTagOptions: true})
*   <p>Sparkline: <span class="sparkline" sparkType="bar" sparkBarColor="red">loading</span></p>
* Prefix all options supplied as tag attribute with "spark" (configurable by setting tagOptionPrefix)
*
* Supported options:
*   lineColor - Color of the line used for the chart
*   fillColor - Color used to fill in the chart - Set to '' or false for a transparent chart
*   width - Width of the chart - Defaults to 3 times the number of values in pixels
*   height - Height of the chart - Defaults to the height of the containing element
*   chartRangeMin - Specify the minimum value to use for the Y range of the chart - Defaults to the minimum value supplied
*   chartRangeMax - Specify the maximum value to use for the Y range of the chart - Defaults to the maximum value supplied
*   chartRangeClip - Clip out of range values to the max/min specified by chartRangeMin and chartRangeMax
*   chartRangeMinX - Specify the minimum value to use for the X range of the chart - Defaults to the minimum value supplied
*   chartRangeMaxX - Specify the maximum value to use for the X range of the chart - Defaults to the maximum value supplied
*   composite - If true then don't erase any existing chart attached to the tag, but draw
*           another chart over the top - Note that width and height are ignored if an
*           existing chart is detected.
*   tagValuesAttribute - Name of tag attribute to check for data values - Defaults to 'values'
*   enableTagOptions - Whether to check tags for sparkline options
*   tagOptionPrefix - Prefix used for options supplied as tag attributes - Defaults to 'spark'
*   disableHiddenCheck - If set to true, then the plugin will assume that charts will never be drawn into a
*           hidden dom element, avoding a browser reflow
*   disableInteraction - If set to true then all mouseover/click interaction behaviour will be disabled,
*       making the plugin perform much like it did in 1.x
*   disableTooltips - If set to true then tooltips will be disabled - Defaults to false (tooltips enabled)
*   disableHighlight - If set to true then highlighting of selected chart elements on mouseover will be disabled
*       defaults to false (highlights enabled)
*   highlightLighten - Factor to lighten/darken highlighted chart values by - Defaults to 1.4 for a 40% increase
*   tooltipContainer - Specify which DOM element the tooltip should be rendered into - defaults to document.body
*   tooltipClassname - Optional CSS classname to apply to tooltips - If not specified then a default style will be applied
*   tooltipOffsetX - How many pixels away from the mouse pointer to render the tooltip on the X axis
*   tooltipOffsetY - How many pixels away from the mouse pointer to render the tooltip on the r axis
*   tooltipFormatter  - Optional callback that allows you to override the HTML displayed in the tooltip
*       callback is given arguments of (sparkline, options, fields)
*   tooltipChartTitle - If specified then the tooltip uses the string specified by this setting as a title
*   tooltipFormat - A format string or SPFormat object  (or an array thereof for multiple entries)
*       to control the format of the tooltip
*   tooltipPrefix - A string to prepend to each field displayed in a tooltip
*   tooltipSuffix - A string to append to each field displayed in a tooltip
*   tooltipSkipNull - If true then null values will not have a tooltip displayed (defaults to true)
*   tooltipValueLookups - An object or range map to map field values to tooltip strings
*       (eg. to map -1 to "Lost", 0 to "Draw", and 1 to "Win")
*   numberFormatter - Optional callback for formatting numbers in tooltips
*   numberDigitGroupSep - Character to use for group separator in numbers "1,234" - Defaults to ","
*   numberDecimalMark - Character to use for the decimal point when formatting numbers - Defaults to "."
*   numberDigitGroupCount - Number of digits between group separator - Defaults to 3
*
* There are 7 types of sparkline, selected by supplying a "type" option of 'line' (default),
* 'bar', 'tristate', 'bullet', 'discrete', 'pie' or 'box'
*    line - Line chart.  Options:
*       spotColor - Set to '' to not end each line in a circular spot
*       minSpotColor - If set, color of spot at minimum value
*       maxSpotColor - If set, color of spot at maximum value
*       spotRadius - Radius in pixels
*       lineWidth - Width of line in pixels
*       normalRangeMin
*       normalRangeMax - If set draws a filled horizontal bar between these two values marking the "normal"
*                      or expected range of values
*       normalRangeColor - Color to use for the above bar
*       drawNormalOnTop - Draw the normal range above the chart fill color if true
*       defaultPixelsPerValue - Defaults to 3 pixels of width for each value in the chart
*       highlightSpotColor - The color to use for drawing a highlight spot on mouseover - Set to null to disable
*       highlightLineColor - The color to use for drawing a highlight line on mouseover - Set to null to disable
*       valueSpots - Specify which points to draw spots on, and in which color.  Accepts a range map
*
*   bar - Bar chart.  Options:
*       barColor - Color of bars for postive values
*       negBarColor - Color of bars for negative values
*       zeroColor - Color of bars with zero values
*       nullColor - Color of bars with null values - Defaults to omitting the bar entirely
*       barWidth - Width of bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*       barSpacing - Gap between bars in pixels
*       zeroAxis - Centers the y-axis around zero if true
*
*   tristate - Charts values of win (>0), lose (<0) or draw (=0)
*       posBarColor - Color of win values
*       negBarColor - Color of lose values
*       zeroBarColor - Color of draw values
*       barWidth - Width of bars in pixels
*       barSpacing - Gap between bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*
*   discrete - Options:
*       lineHeight - Height of each line in pixels - Defaults to 30% of the graph height
*       thesholdValue - Values less than this value will be drawn using thresholdColor instead of lineColor
*       thresholdColor
*
*   bullet - Values for bullet graphs msut be in the order: target, performance, range1, range2, range3, ...
*       options:
*       targetColor - The color of the vertical target marker
*       targetWidth - The width of the target marker in pixels
*       performanceColor - The color of the performance measure horizontal bar
*       rangeColors - Colors to use for each qualitative range background color
*
*   pie - Pie chart. Options:
*       sliceColors - An array of colors to use for pie slices
*       offset - Angle in degrees to offset the first slice - Try -90 or +90
*       borderWidth - Width of border to draw around the pie chart, in pixels - Defaults to 0 (no border)
*       borderColor - Color to use for the pie chart border - Defaults to #000
*
*   box - Box plot. Options:
*       raw - Set to true to supply pre-computed plot points as values
*             values should be: low_outlier, low_whisker, q1, median, q3, high_whisker, high_outlier
*             When set to false you can supply any number of values and the box plot will
*             be computed for you.  Default is false.
*       showOutliers - Set to true (default) to display outliers as circles
*       outlierIQR - Interquartile range used to determine outliers.  Default 1.5
*       boxLineColor - Outline color of the box
*       boxFillColor - Fill color for the box
*       whiskerColor - Line color used for whiskers
*       outlierLineColor - Outline color of outlier circles
*       outlierFillColor - Fill color of the outlier circles
*       spotRadius - Radius of outlier circles
*       medianColor - Line color of the median line
*       target - Draw a target cross hair at the supplied value (default undefined)
*
*
*
*   Examples:
*   $('#sparkline1').sparkline(myvalues, { lineColor: '#f00', fillColor: false });
*   $('.barsparks').sparkline('html', { type:'bar', height:'40px', barWidth:5 });
*   $('#tristate').sparkline([1,1,-1,1,0,0,-1], { type:'tristate' }):
*   $('#discrete').sparkline([1,3,4,5,5,3,4,5], { type:'discrete' });
*   $('#bullet').sparkline([10,12,12,9,7], { type:'bullet' });
*   $('#pie').sparkline([1,1,2], { type:'pie' });
*/
!function (a, b, c) {
  !function (a) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
  }(function (d) {
    "use strict";

    var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K = {},
        L = 0;
    e = function e() {
      return {
        common: {
          type: "line",
          lineColor: "#00f",
          fillColor: "#cdf",
          defaultPixelsPerValue: 3,
          width: "auto",
          height: "auto",
          composite: !1,
          tagValuesAttribute: "values",
          tagOptionsPrefix: "spark",
          enableTagOptions: !1,
          enableHighlight: !0,
          highlightLighten: 1.4,
          tooltipSkipNull: !0,
          tooltipPrefix: "",
          tooltipSuffix: "",
          disableHiddenCheck: !1,
          numberFormatter: !1,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ",",
          numberDecimalMark: ".",
          disableTooltips: !1,
          disableInteraction: !1
        },
        line: {
          spotColor: "#f80",
          highlightSpotColor: "#5f5",
          highlightLineColor: "#f22",
          spotRadius: 1.5,
          minSpotColor: "#f80",
          maxSpotColor: "#f80",
          lineWidth: 1,
          normalRangeMin: c,
          normalRangeMax: c,
          normalRangeColor: "#ccc",
          drawNormalOnTop: !1,
          chartRangeMin: c,
          chartRangeMax: c,
          chartRangeMinX: c,
          chartRangeMaxX: c,
          tooltipFormat: new g('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
        },
        bar: {
          barColor: "#3366cc",
          negBarColor: "#f44",
          stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          zeroColor: c,
          nullColor: c,
          zeroAxis: !0,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: c,
          chartRangeMin: c,
          chartRangeClip: !1,
          colorMap: c,
          tooltipFormat: new g('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
        },
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: "#6f6",
          negBarColor: "#f44",
          zeroBarColor: "#999",
          colorMap: {},
          tooltipFormat: new g('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
          tooltipValueLookups: {
            map: {
              "-1": "Loss",
              0: "Draw",
              1: "Win"
            }
          }
        },
        discrete: {
          lineHeight: "auto",
          thresholdColor: c,
          thresholdValue: 0,
          chartRangeMax: c,
          chartRangeMin: c,
          chartRangeClip: !1,
          tooltipFormat: new g("{{prefix}}{{value}}{{suffix}}")
        },
        bullet: {
          targetColor: "#f33",
          targetWidth: 3,
          performanceColor: "#33f",
          rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
          base: c,
          tooltipFormat: new g("{{fieldkey:fields}} - {{value}}"),
          tooltipValueLookups: {
            fields: {
              r: "Range",
              p: "Performance",
              t: "Target"
            }
          }
        },
        pie: {
          offset: 0,
          sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          borderWidth: 0,
          borderColor: "#000",
          tooltipFormat: new g('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
        },
        box: {
          raw: !1,
          boxLineColor: "#000",
          boxFillColor: "#cdf",
          whiskerColor: "#000",
          outlierLineColor: "#333",
          outlierFillColor: "#fff",
          medianColor: "#f00",
          showOutliers: !0,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: c,
          targetColor: "#4a2",
          chartRangeMax: c,
          chartRangeMin: c,
          tooltipFormat: new g("{{field:fields}}: {{value}}"),
          tooltipFormatFieldlistKey: "field",
          tooltipValueLookups: {
            fields: {
              lq: "Lower Quartile",
              med: "Median",
              uq: "Upper Quartile",
              lo: "Left Outlier",
              ro: "Right Outlier",
              lw: "Left Whisker",
              rw: "Right Whisker"
            }
          }
        }
      };
    }, D = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', f = function f() {
      var a, b;
      return a = function a() {
        this.init.apply(this, arguments);
      }, arguments.length > 1 ? (arguments[0] ? (a.prototype = d.extend(new arguments[0](), arguments[arguments.length - 1]), a._super = arguments[0].prototype) : a.prototype = arguments[arguments.length - 1], arguments.length > 2 && (b = Array.prototype.slice.call(arguments, 1, -1), b.unshift(a.prototype), d.extend.apply(d, b))) : a.prototype = arguments[0], a.prototype.cls = a, a;
    }, d.SPFormatClass = g = f({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
      precre: /(\w+)\.(\d+)/,
      init: function init(a, b) {
        this.format = a, this.fclass = b;
      },
      render: function render(a, b, d) {
        var e,
            f,
            g,
            h,
            i,
            j = this,
            k = a;
        return this.format.replace(this.fre, function () {
          var a;
          return f = arguments[1], g = arguments[3], e = j.precre.exec(f), e ? (i = e[2], f = e[1]) : i = !1, h = k[f], h === c ? "" : g && b && b[g] ? (a = b[g], a.get ? b[g].get(h) || h : b[g][h] || h) : (m(h) && (h = d.get("numberFormatter") ? d.get("numberFormatter")(h) : r(h, i, d.get("numberDigitGroupCount"), d.get("numberDigitGroupSep"), d.get("numberDecimalMark"))), h);
        });
      }
    }), d.spformat = function (a, b) {
      return new g(a, b);
    }, h = function h(a, b, c) {
      return b > a ? b : a > c ? c : a;
    }, i = function i(a, c) {
      var d;
      return 2 === c ? (d = b.floor(a.length / 2), a.length % 2 ? a[d] : (a[d - 1] + a[d]) / 2) : a.length % 2 ? (d = (a.length * c + c) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]) : (d = (a.length * c + 2) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]);
    }, j = function j(a) {
      var b;

      switch (a) {
        case "undefined":
          a = c;
          break;

        case "null":
          a = null;
          break;

        case "true":
          a = !0;
          break;

        case "false":
          a = !1;
          break;

        default:
          b = parseFloat(a), a == b && (a = b);
      }

      return a;
    }, k = function k(a) {
      var b,
          c = [];

      for (b = a.length; b--;) {
        c[b] = j(a[b]);
      }

      return c;
    }, l = function l(a, b) {
      var c,
          d,
          e = [];

      for (c = 0, d = a.length; d > c; c++) {
        a[c] !== b && e.push(a[c]);
      }

      return e;
    }, m = function m(a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    }, r = function r(a, b, c, e, f) {
      var g, h;

      for (a = (b === !1 ? parseFloat(a).toString() : a.toFixed(b)).split(""), g = (g = d.inArray(".", a)) < 0 ? a.length : g, g < a.length && (a[g] = f), h = g - c; h > 0; h -= c) {
        a.splice(h, 0, e);
      }

      return a.join("");
    }, n = function n(a, b, c) {
      var d;

      for (d = b.length; d--;) {
        if ((!c || null !== b[d]) && b[d] !== a) return !1;
      }

      return !0;
    }, o = function o(a) {
      var b,
          c = 0;

      for (b = a.length; b--;) {
        c += "number" == typeof a[b] ? a[b] : 0;
      }

      return c;
    }, q = function q(a) {
      return d.isArray(a) ? a : [a];
    }, p = function p(b) {
      var c;
      a.createStyleSheet ? a.createStyleSheet().cssText = b : (c = a.createElement("style"), c.type = "text/css", a.getElementsByTagName("head")[0].appendChild(c), c["string" == typeof a.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = b);
    }, d.fn.simpledraw = function (b, e, f, g) {
      var h, i;
      if (f && (h = this.data("_jqs_vcanvas"))) return h;
      if (d.fn.sparkline.canvas === !1) return !1;

      if (d.fn.sparkline.canvas === c) {
        var j = a.createElement("canvas");
        if (j.getContext && j.getContext("2d")) d.fn.sparkline.canvas = function (a, b, c, d) {
          return new H(a, b, c, d);
        };else {
          if (!a.namespaces || a.namespaces.v) return d.fn.sparkline.canvas = !1, !1;
          a.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), d.fn.sparkline.canvas = function (a, b, c, d) {
            return new I(a, b, c);
          };
        }
      }

      return b === c && (b = d(this).innerWidth()), e === c && (e = d(this).innerHeight()), h = d.fn.sparkline.canvas(b, e, this, g), i = d(this).data("_jqs_mhandler"), i && i.registerCanvas(h), h;
    }, d.fn.cleardraw = function () {
      var a = this.data("_jqs_vcanvas");
      a && a.reset();
    }, d.RangeMapClass = s = f({
      init: function init(a) {
        var b,
            c,
            d = [];

        for (b in a) {
          a.hasOwnProperty(b) && "string" == typeof b && b.indexOf(":") > -1 && (c = b.split(":"), c[0] = 0 === c[0].length ? -(1 / 0) : parseFloat(c[0]), c[1] = 0 === c[1].length ? 1 / 0 : parseFloat(c[1]), c[2] = a[b], d.push(c));
        }

        this.map = a, this.rangelist = d || !1;
      },
      get: function get(a) {
        var b,
            d,
            e,
            f = this.rangelist;
        if ((e = this.map[a]) !== c) return e;
        if (f) for (b = f.length; b--;) {
          if (d = f[b], d[0] <= a && d[1] >= a) return d[2];
        }
        return c;
      }
    }), d.range_map = function (a) {
      return new s(a);
    }, t = f({
      init: function init(a, b) {
        var c = d(a);
        this.$el = c, this.options = b, this.currentPageX = 0, this.currentPageY = 0, this.el = a, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !b.get("disableTooltips"), this.highlightEnabled = !b.get("disableHighlight");
      },
      registerSparkline: function registerSparkline(a) {
        this.splist.push(a), this.over && this.updateDisplay();
      },
      registerCanvas: function registerCanvas(a) {
        var b = d(a.canvas);
        this.canvas = a, this.$canvas = b, b.mouseenter(d.proxy(this.mouseenter, this)), b.mouseleave(d.proxy(this.mouseleave, this)), b.click(d.proxy(this.mouseclick, this));
      },
      reset: function reset(a) {
        this.splist = [], this.tooltip && a && (this.tooltip.remove(), this.tooltip = c);
      },
      mouseclick: function mouseclick(a) {
        var b = d.Event("sparklineClick");
        b.originalEvent = a, b.sparklines = this.splist, this.$el.trigger(b);
      },
      mouseenter: function mouseenter(b) {
        d(a.body).unbind("mousemove.jqs"), d(a.body).bind("mousemove.jqs", d.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = b.pageX, this.currentPageY = b.pageY, this.currentEl = b.target, !this.tooltip && this.displayTooltips && (this.tooltip = new u(this.options), this.tooltip.updatePosition(b.pageX, b.pageY)), this.updateDisplay();
      },
      mouseleave: function mouseleave() {
        d(a.body).unbind("mousemove.jqs");
        var b,
            c,
            e = this.splist,
            f = e.length,
            g = !1;

        for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), c = 0; f > c; c++) {
          b = e[c], b.clearRegionHighlight() && (g = !0);
        }

        g && this.canvas.render();
      },
      mousemove: function mousemove(a) {
        this.currentPageX = a.pageX, this.currentPageY = a.pageY, this.currentEl = a.target, this.tooltip && this.tooltip.updatePosition(a.pageX, a.pageY), this.updateDisplay();
      },
      updateDisplay: function updateDisplay() {
        var a,
            b,
            c,
            e,
            f,
            g = this.splist,
            h = g.length,
            i = !1,
            j = this.$canvas.offset(),
            k = this.currentPageX - j.left,
            l = this.currentPageY - j.top;

        if (this.over) {
          for (c = 0; h > c; c++) {
            b = g[c], e = b.setRegionHighlight(this.currentEl, k, l), e && (i = !0);
          }

          if (i) {
            if (f = d.Event("sparklineRegionChange"), f.sparklines = this.splist, this.$el.trigger(f), this.tooltip) {
              for (a = "", c = 0; h > c; c++) {
                b = g[c], a += b.getCurrentRegionTooltip();
              }

              this.tooltip.setContent(a);
            }

            this.disableHighlight || this.canvas.render();
          }

          null === e && this.mouseleave();
        }
      }
    }), u = f({
      sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
      init: function init(b) {
        var c,
            e = b.get("tooltipClassname", "jqstooltip"),
            f = this.sizeStyle;
        this.container = b.get("tooltipContainer") || a.body, this.tooltipOffsetX = b.get("tooltipOffsetX", 10), this.tooltipOffsetY = b.get("tooltipOffsetY", 12), d("#jqssizetip").remove(), d("#jqstooltip").remove(), this.sizetip = d("<div/>", {
          id: "jqssizetip",
          style: f,
          "class": e
        }), this.tooltip = d("<div/>", {
          id: "jqstooltip",
          "class": e
        }).appendTo(this.container), c = this.tooltip.offset(), this.offsetLeft = c.left, this.offsetTop = c.top, this.hidden = !0, d(window).unbind("resize.jqs scroll.jqs"), d(window).bind("resize.jqs scroll.jqs", d.proxy(this.updateWindowDims, this)), this.updateWindowDims();
      },
      updateWindowDims: function updateWindowDims() {
        this.scrollTop = d(window).scrollTop(), this.scrollLeft = d(window).scrollLeft(), this.scrollRight = this.scrollLeft + d(window).width(), this.updatePosition();
      },
      getSize: function getSize(a) {
        this.sizetip.html(a).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove();
      },
      setContent: function setContent(a) {
        return a ? (this.getSize(a), this.tooltip.html(a).css({
          width: this.width,
          height: this.height,
          visibility: "visible"
        }), void (this.hidden && (this.hidden = !1, this.updatePosition()))) : (this.tooltip.css("visibility", "hidden"), void (this.hidden = !0));
      },
      updatePosition: function updatePosition(a, b) {
        if (a === c) {
          if (this.mousex === c) return;
          a = this.mousex - this.offsetLeft, b = this.mousey - this.offsetTop;
        } else this.mousex = a -= this.offsetLeft, this.mousey = b -= this.offsetTop;

        this.height && this.width && !this.hidden && (b -= this.height + this.tooltipOffsetY, a += this.tooltipOffsetX, b < this.scrollTop && (b = this.scrollTop), a < this.scrollLeft ? a = this.scrollLeft : a + this.width > this.scrollRight && (a = this.scrollRight - this.width), this.tooltip.css({
          left: a,
          top: b
        }));
      },
      remove: function remove() {
        this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = c, d(window).unbind("resize.jqs scroll.jqs");
      }
    }), E = function E() {
      p(D);
    }, d(E), J = [], d.fn.sparkline = function (b, e) {
      return this.each(function () {
        var f,
            g,
            h = new d.fn.sparkline.options(this, e),
            i = d(this);

        if (f = function f() {
          var e, f, g, j, k, l, m;
          return "html" === b || b === c ? (m = this.getAttribute(h.get("tagValuesAttribute")), m !== c && null !== m || (m = i.html()), e = m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : e = b, f = "auto" === h.get("width") ? e.length * h.get("defaultPixelsPerValue") : h.get("width"), "auto" === h.get("height") ? h.get("composite") && d.data(this, "_jqs_vcanvas") || (j = a.createElement("span"), j.innerHTML = "a", i.html(j), g = d(j).innerHeight() || d(j).height(), d(j).remove(), j = null) : g = h.get("height"), h.get("disableInteraction") ? k = !1 : (k = d.data(this, "_jqs_mhandler"), k ? h.get("composite") || k.reset() : (k = new t(this, h), d.data(this, "_jqs_mhandler", k))), h.get("composite") && !d.data(this, "_jqs_vcanvas") ? void (d.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), d.data(this, "_jqs_errnotify", !0))) : (l = new d.fn.sparkline[h.get("type")](this, e, h, f, g), l.render(), void (k && k.registerSparkline(l)));
        }, d(this).html() && !h.get("disableHiddenCheck") && d(this).is(":hidden") || !d(this).parents("body").length) {
          if (!h.get("composite") && d.data(this, "_jqs_pending")) for (g = J.length; g; g--) {
            J[g - 1][0] == this && J.splice(g - 1, 1);
          }
          J.push([this, f]), d.data(this, "_jqs_pending", !0);
        } else f.call(this);
      });
    }, d.fn.sparkline.defaults = e(), d.sparkline_display_visible = function () {
      var a,
          b,
          c,
          e = [];

      for (b = 0, c = J.length; c > b; b++) {
        a = J[b][0], d(a).is(":visible") && !d(a).parents().is(":hidden") ? (J[b][1].call(a), d.data(J[b][0], "_jqs_pending", !1), e.push(b)) : d(a).closest("html").length || d.data(a, "_jqs_pending") || (d.data(J[b][0], "_jqs_pending", !1), e.push(b));
      }

      for (b = e.length; b; b--) {
        J.splice(e[b - 1], 1);
      }
    }, d.fn.sparkline.options = f({
      init: function init(a, b) {
        var c, e, f, g;
        this.userOptions = b = b || {}, this.tag = a, this.tagValCache = {}, e = d.fn.sparkline.defaults, f = e.common, this.tagOptionsPrefix = b.enableTagOptions && (b.tagOptionsPrefix || f.tagOptionsPrefix), g = this.getTagSetting("type"), c = g === K ? e[b.type || f.type] : e[g], this.mergedOptions = d.extend({}, f, c, b);
      },
      getTagSetting: function getTagSetting(a) {
        var b,
            d,
            e,
            f,
            g = this.tagOptionsPrefix;
        if (g === !1 || g === c) return K;
        if (this.tagValCache.hasOwnProperty(a)) b = this.tagValCache.key;else {
          if (b = this.tag.getAttribute(g + a), b === c || null === b) b = K;else if ("[" === b.substr(0, 1)) for (b = b.substr(1, b.length - 2).split(","), d = b.length; d--;) {
            b[d] = j(b[d].replace(/(^\s*)|(\s*$)/g, ""));
          } else if ("{" === b.substr(0, 1)) for (e = b.substr(1, b.length - 2).split(","), b = {}, d = e.length; d--;) {
            f = e[d].split(":", 2), b[f[0].replace(/(^\s*)|(\s*$)/g, "")] = j(f[1].replace(/(^\s*)|(\s*$)/g, ""));
          } else b = j(b);
          this.tagValCache.key = b;
        }
        return b;
      },
      get: function get(a, b) {
        var d,
            e = this.getTagSetting(a);
        return e !== K ? e : (d = this.mergedOptions[a]) === c ? b : d;
      }
    }), d.fn.sparkline._base = f({
      disabled: !1,
      init: function init(a, b, e, f, g) {
        this.el = a, this.$el = d(a), this.values = b, this.options = e, this.width = f, this.height = g, this.currentRegion = c;
      },
      initTarget: function initTarget() {
        var a = !this.options.get("disableInteraction");
        (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), a)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0;
      },
      render: function render() {
        return this.disabled ? (this.el.innerHTML = "", !1) : !0;
      },
      getRegion: function getRegion(a, b) {},
      setRegionHighlight: function setRegionHighlight(a, b, d) {
        var e,
            f = this.currentRegion,
            g = !this.options.get("disableHighlight");
        return b > this.canvasWidth || d > this.canvasHeight || 0 > b || 0 > d ? null : (e = this.getRegion(a, b, d), f !== e ? (f !== c && g && this.removeHighlight(), this.currentRegion = e, e !== c && g && this.renderHighlight(), !0) : !1);
      },
      clearRegionHighlight: function clearRegionHighlight() {
        return this.currentRegion !== c ? (this.removeHighlight(), this.currentRegion = c, !0) : !1;
      },
      renderHighlight: function renderHighlight() {
        this.changeHighlight(!0);
      },
      removeHighlight: function removeHighlight() {
        this.changeHighlight(!1);
      },
      changeHighlight: function changeHighlight(a) {},
      getCurrentRegionTooltip: function getCurrentRegionTooltip() {
        var a,
            b,
            e,
            f,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r = this.options,
            s = "",
            t = [];
        if (this.currentRegion === c) return "";
        if (a = this.getCurrentRegionFields(), n = r.get("tooltipFormatter")) return n(this, r, a);
        if (r.get("tooltipChartTitle") && (s += '<div class="jqs jqstitle">' + r.get("tooltipChartTitle") + "</div>\n"), b = this.options.get("tooltipFormat"), !b) return "";

        if (d.isArray(b) || (b = [b]), d.isArray(a) || (a = [a]), j = this.options.get("tooltipFormatFieldlist"), k = this.options.get("tooltipFormatFieldlistKey"), j && k) {
          for (l = [], i = a.length; i--;) {
            m = a[i][k], -1 != (q = d.inArray(m, j)) && (l[q] = a[i]);
          }

          a = l;
        }

        for (e = b.length, p = a.length, i = 0; e > i; i++) {
          for (o = b[i], "string" == typeof o && (o = new g(o)), f = o.fclass || "jqsfield", q = 0; p > q; q++) {
            a[q].isNull && r.get("tooltipSkipNull") || (d.extend(a[q], {
              prefix: r.get("tooltipPrefix"),
              suffix: r.get("tooltipSuffix")
            }), h = o.render(a[q], r.get("tooltipValueLookups"), r), t.push('<div class="' + f + '">' + h + "</div>"));
          }
        }

        return t.length ? s + t.join("\n") : "";
      },
      getCurrentRegionFields: function getCurrentRegionFields() {},
      calcHighlightColor: function calcHighlightColor(a, c) {
        var d,
            e,
            f,
            g,
            i = c.get("highlightColor"),
            j = c.get("highlightLighten");
        if (i) return i;

        if (j && (d = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))) {
          for (f = [], e = 4 === a.length ? 16 : 1, g = 0; 3 > g; g++) {
            f[g] = h(b.round(parseInt(d[g + 1], 16) * e * j), 0, 255);
          }

          return "rgb(" + f.join(",") + ")";
        }

        return a;
      }
    }), v = {
      changeHighlight: function changeHighlight(a) {
        var b,
            c = this.currentRegion,
            e = this.target,
            f = this.regionShapes[c];
        f && (b = this.renderRegion(c, a), d.isArray(b) || d.isArray(f) ? (e.replaceWithShapes(f, b), this.regionShapes[c] = d.map(b, function (a) {
          return a.id;
        })) : (e.replaceWithShape(f, b), this.regionShapes[c] = b.id));
      },
      render: function render() {
        var a,
            b,
            c,
            e,
            f = this.values,
            g = this.target,
            h = this.regionShapes;

        if (this.cls._super.render.call(this)) {
          for (c = f.length; c--;) {
            if (a = this.renderRegion(c)) {
              if (d.isArray(a)) {
                for (b = [], e = a.length; e--;) {
                  a[e].append(), b.push(a[e].id);
                }

                h[c] = b;
              } else a.append(), h[c] = a.id;
            } else h[c] = null;
          }

          g.render();
        }
      }
    }, d.fn.sparkline.line = w = f(d.fn.sparkline._base, {
      type: "line",
      init: function init(a, b, c, d, e) {
        w._super.init.call(this, a, b, c, d, e), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget();
      },
      getRegion: function getRegion(a, b, d) {
        var e,
            f = this.regionMap;

        for (e = f.length; e--;) {
          if (null !== f[e] && b >= f[e][0] && b <= f[e][1]) return f[e][2];
        }

        return c;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: null === this.yvalues[a],
          x: this.xvalues[a],
          y: this.yvalues[a],
          color: this.options.get("lineColor"),
          fillColor: this.options.get("fillColor"),
          offset: a
        };
      },
      renderHighlight: function renderHighlight() {
        var a,
            b,
            d = this.currentRegion,
            e = this.target,
            f = this.vertices[d],
            g = this.options,
            h = g.get("spotRadius"),
            i = g.get("highlightSpotColor"),
            j = g.get("highlightLineColor");
        f && (h && i && (a = e.drawCircle(f[0], f[1], h, c, i), this.highlightSpotId = a.id, e.insertAfterShape(this.lastShapeId, a)), j && (b = e.drawLine(f[0], this.canvasTop, f[0], this.canvasTop + this.canvasHeight, j), this.highlightLineId = b.id, e.insertAfterShape(this.lastShapeId, b)));
      },
      removeHighlight: function removeHighlight() {
        var a = this.target;
        this.highlightSpotId && (a.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (a.removeShapeId(this.highlightLineId), this.highlightLineId = null);
      },
      scanValues: function scanValues() {
        var a,
            c,
            d,
            e,
            f,
            g = this.values,
            h = g.length,
            i = this.xvalues,
            j = this.yvalues,
            k = this.yminmax;

        for (a = 0; h > a; a++) {
          c = g[a], d = "string" == typeof g[a], e = "object" == _typeof(g[a]) && g[a] instanceof Array, f = d && g[a].split(":"), d && 2 === f.length ? (i.push(Number(f[0])), j.push(Number(f[1])), k.push(Number(f[1]))) : e ? (i.push(c[0]), j.push(c[1]), k.push(c[1])) : (i.push(a), null === g[a] || "null" === g[a] ? j.push(null) : (j.push(Number(c)), k.push(Number(c))));
        }

        this.options.get("xvalues") && (i = this.options.get("xvalues")), this.maxy = this.maxyorg = b.max.apply(b, k), this.miny = this.minyorg = b.min.apply(b, k), this.maxx = b.max.apply(b, i), this.minx = b.min.apply(b, i), this.xvalues = i, this.yvalues = j, this.yminmax = k;
      },
      processRangeOptions: function processRangeOptions() {
        var a = this.options,
            b = a.get("normalRangeMin"),
            d = a.get("normalRangeMax");
        b !== c && (b < this.miny && (this.miny = b), d > this.maxy && (this.maxy = d)), a.get("chartRangeMin") !== c && (a.get("chartRangeClip") || a.get("chartRangeMin") < this.miny) && (this.miny = a.get("chartRangeMin")), a.get("chartRangeMax") !== c && (a.get("chartRangeClip") || a.get("chartRangeMax") > this.maxy) && (this.maxy = a.get("chartRangeMax")), a.get("chartRangeMinX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMinX") < this.minx) && (this.minx = a.get("chartRangeMinX")), a.get("chartRangeMaxX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMaxX") > this.maxx) && (this.maxx = a.get("chartRangeMaxX"));
      },
      drawNormalRange: function drawNormalRange(a, d, e, f, g) {
        var h = this.options.get("normalRangeMin"),
            i = this.options.get("normalRangeMax"),
            j = d + b.round(e - e * ((i - this.miny) / g)),
            k = b.round(e * (i - h) / g);
        this.target.drawRect(a, j, f, k, c, this.options.get("normalRangeColor")).append();
      },
      render: function render() {
        var a,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            t,
            u,
            v,
            x,
            y,
            z,
            A,
            B,
            C,
            D,
            E = this.options,
            F = this.target,
            G = this.canvasWidth,
            H = this.canvasHeight,
            I = this.vertices,
            J = E.get("spotRadius"),
            K = this.regionMap;

        if (w._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), B = this.xvalues, C = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) {
          for (g = h = 0, a = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, e = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, f = this.yvalues.length - 1, J && (4 * J > G || 4 * J > H) && (J = 0), J && (z = E.get("highlightSpotColor") && !E.get("disableInteraction"), (z || E.get("minSpotColor") || E.get("spotColor") && C[f] === this.miny) && (H -= b.ceil(J)), (z || E.get("maxSpotColor") || E.get("spotColor") && C[f] === this.maxy) && (H -= b.ceil(J), g += b.ceil(J)), (z || (E.get("minSpotColor") || E.get("maxSpotColor")) && (C[0] === this.miny || C[0] === this.maxy)) && (h += b.ceil(J), G -= b.ceil(J)), (z || E.get("spotColor") || E.get("minSpotColor") || E.get("maxSpotColor") && (C[f] === this.miny || C[f] === this.maxy)) && (G -= b.ceil(J))), H--, E.get("normalRangeMin") === c || E.get("drawNormalOnTop") || this.drawNormalRange(h, g, H, G, e), j = [], k = [j], q = r = null, t = C.length, D = 0; t > D; D++) {
            l = B[D], n = B[D + 1], m = C[D], o = h + b.round((l - this.minx) * (G / a)), p = t - 1 > D ? h + b.round((n - this.minx) * (G / a)) : G, r = o + (p - o) / 2, K[D] = [q || 0, r, D], q = r, null === m ? D && (null !== C[D - 1] && (j = [], k.push(j)), I.push(null)) : (m < this.miny && (m = this.miny), m > this.maxy && (m = this.maxy), j.length || j.push([o, g + H]), i = [o, g + b.round(H - H * ((m - this.miny) / e))], j.push(i), I.push(i));
          }

          for (u = [], v = [], x = k.length, D = 0; x > D; D++) {
            j = k[D], j.length && (E.get("fillColor") && (j.push([j[j.length - 1][0], g + H]), v.push(j.slice(0)), j.pop()), j.length > 2 && (j[0] = [j[0][0], j[1][1]]), u.push(j));
          }

          for (x = v.length, D = 0; x > D; D++) {
            F.drawShape(v[D], E.get("fillColor"), E.get("fillColor")).append();
          }

          for (E.get("normalRangeMin") !== c && E.get("drawNormalOnTop") && this.drawNormalRange(h, g, H, G, e), x = u.length, D = 0; x > D; D++) {
            F.drawShape(u[D], E.get("lineColor"), c, E.get("lineWidth")).append();
          }

          if (J && E.get("valueSpots")) for (y = E.get("valueSpots"), y.get === c && (y = new s(y)), D = 0; t > D; D++) {
            A = y.get(C[D]), A && F.drawCircle(h + b.round((B[D] - this.minx) * (G / a)), g + b.round(H - H * ((C[D] - this.miny) / e)), J, c, A).append();
          }
          J && E.get("spotColor") && null !== C[f] && F.drawCircle(h + b.round((B[B.length - 1] - this.minx) * (G / a)), g + b.round(H - H * ((C[f] - this.miny) / e)), J, c, E.get("spotColor")).append(), this.maxy !== this.minyorg && (J && E.get("minSpotColor") && (l = B[d.inArray(this.minyorg, C)], F.drawCircle(h + b.round((l - this.minx) * (G / a)), g + b.round(H - H * ((this.minyorg - this.miny) / e)), J, c, E.get("minSpotColor")).append()), J && E.get("maxSpotColor") && (l = B[d.inArray(this.maxyorg, C)], F.drawCircle(h + b.round((l - this.minx) * (G / a)), g + b.round(H - H * ((this.maxyorg - this.miny) / e)), J, c, E.get("maxSpotColor")).append())), this.lastShapeId = F.getLastShapeId(), this.canvasTop = g, F.render();
        }
      }
    }), d.fn.sparkline.bar = x = f(d.fn.sparkline._base, v, {
      type: "bar",
      init: function init(a, e, f, g, i) {
        var m,
            n,
            o,
            p,
            q,
            r,
            t,
            u,
            v,
            w,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K = parseInt(f.get("barWidth"), 10),
            L = parseInt(f.get("barSpacing"), 10),
            M = f.get("chartRangeMin"),
            N = f.get("chartRangeMax"),
            O = f.get("chartRangeClip"),
            P = 1 / 0,
            Q = -(1 / 0);

        for (x._super.init.call(this, a, e, f, g, i), r = 0, t = e.length; t > r; r++) {
          H = e[r], m = "string" == typeof H && H.indexOf(":") > -1, (m || d.isArray(H)) && (C = !0, m && (H = e[r] = k(H.split(":"))), H = l(H, null), n = b.min.apply(b, H), o = b.max.apply(b, H), P > n && (P = n), o > Q && (Q = o));
        }

        this.stacked = C, this.regionShapes = {}, this.barWidth = K, this.barSpacing = L, this.totalBarWidth = K + L, this.width = g = e.length * K + (e.length - 1) * L, this.initTarget(), O && (A = M === c ? -(1 / 0) : M, B = N === c ? 1 / 0 : N), q = [], p = C ? [] : q;
        var R = [],
            S = [];

        for (r = 0, t = e.length; t > r; r++) {
          if (C) for (D = e[r], e[r] = G = [], R[r] = 0, p[r] = S[r] = 0, E = 0, F = D.length; F > E; E++) {
            H = G[E] = O ? h(D[E], A, B) : D[E], null !== H && (H > 0 && (R[r] += H), 0 > P && Q > 0 ? 0 > H ? S[r] += b.abs(H) : p[r] += H : p[r] += b.abs(H - (0 > H ? Q : P)), q.push(H));
          } else H = O ? h(e[r], A, B) : e[r], H = e[r] = j(H), null !== H && q.push(H);
        }

        this.max = z = b.max.apply(b, q), this.min = y = b.min.apply(b, q), this.stackMax = Q = C ? b.max.apply(b, R) : z, this.stackMin = P = C ? b.min.apply(b, q) : y, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < y) && (y = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > z) && (z = f.get("chartRangeMax")), this.zeroAxis = v = f.get("zeroAxis", !0), w = 0 >= y && z >= 0 && v ? 0 : 0 == v ? y : y > 0 ? y : z, this.xaxisOffset = w, u = C ? b.max.apply(b, p) + b.max.apply(b, S) : z - y, this.canvasHeightEf = v && 0 > y ? this.canvasHeight - 2 : this.canvasHeight - 1, w > y ? (J = C && z >= 0 ? Q : z, I = (J - w) / u * this.canvasHeight, I !== b.ceil(I) && (this.canvasHeightEf -= 2, I = b.ceil(I))) : I = this.canvasHeight, this.yoffset = I, d.isArray(f.get("colorMap")) ? (this.colorMapByIndex = f.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = f.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new s(this.colorMapByValue))), this.range = u;
      },
      getRegion: function getRegion(a, d, e) {
        var f = b.floor(d / this.totalBarWidth);
        return 0 > f || f >= this.values.length ? c : f;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a,
            b,
            c = this.currentRegion,
            d = q(this.values[c]),
            e = [];

        for (b = d.length; b--;) {
          a = d[b], e.push({
            isNull: null === a,
            value: a,
            color: this.calcColor(b, a, c),
            offset: c
          });
        }

        return e;
      },
      calcColor: function calcColor(a, b, e) {
        var f,
            g,
            h = this.colorMapByIndex,
            i = this.colorMapByValue,
            j = this.options;
        return f = this.stacked ? j.get("stackedBarColor") : 0 > b ? j.get("negBarColor") : j.get("barColor"), 0 === b && j.get("zeroColor") !== c && (f = j.get("zeroColor")), i && (g = i.get(b)) ? f = g : h && h.length > e && (f = h[e]), d.isArray(f) ? f[a % f.length] : f;
      },
      renderRegion: function renderRegion(a, e) {
        var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            o,
            p,
            q = this.values[a],
            r = this.options,
            s = this.xaxisOffset,
            t = [],
            u = this.range,
            v = this.stacked,
            w = this.target,
            x = a * this.totalBarWidth,
            y = this.canvasHeightEf,
            z = this.yoffset;
        if (q = d.isArray(q) ? q : [q], l = q.length, m = q[0], i = n(null, q), p = n(s, q, !0), i) return r.get("nullColor") ? (h = e ? r.get("nullColor") : this.calcHighlightColor(r.get("nullColor"), r), f = z > 0 ? z - 1 : z, w.drawRect(x, f, this.barWidth - 1, 0, h, h)) : c;

        for (j = z, k = 0; l > k; k++) {
          if (m = q[k], v && m === s) {
            if (!p || o) continue;
            o = !0;
          }

          g = u > 0 ? b.floor(y * (b.abs(m - s) / u)) + 1 : 1, s > m || m === s && 0 === z ? (f = j, j += g) : (f = z - g, z -= g), h = this.calcColor(k, m, a), e && (h = this.calcHighlightColor(h, r)), t.push(w.drawRect(x, f, this.barWidth - 1, g - 1, h, h));
        }

        return 1 === t.length ? t[0] : t;
      }
    }), d.fn.sparkline.tristate = y = f(d.fn.sparkline._base, v, {
      type: "tristate",
      init: function init(a, b, e, f, g) {
        var h = parseInt(e.get("barWidth"), 10),
            i = parseInt(e.get("barSpacing"), 10);
        y._super.init.call(this, a, b, e, f, g), this.regionShapes = {}, this.barWidth = h, this.barSpacing = i, this.totalBarWidth = h + i, this.values = d.map(b, Number), this.width = f = b.length * h + (b.length - 1) * i, d.isArray(e.get("colorMap")) ? (this.colorMapByIndex = e.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = e.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new s(this.colorMapByValue))), this.initTarget();
      },
      getRegion: function getRegion(a, c, d) {
        return b.floor(c / this.totalBarWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          color: this.calcColor(this.values[a], a),
          offset: a
        };
      },
      calcColor: function calcColor(a, b) {
        var c,
            d,
            e = this.values,
            f = this.options,
            g = this.colorMapByIndex,
            h = this.colorMapByValue;
        return c = h && (d = h.get(a)) ? d : g && g.length > b ? g[b] : e[b] < 0 ? f.get("negBarColor") : e[b] > 0 ? f.get("posBarColor") : f.get("zeroBarColor");
      },
      renderRegion: function renderRegion(a, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j = this.values,
            k = this.options,
            l = this.target;
        return d = l.pixelHeight, f = b.round(d / 2), g = a * this.totalBarWidth, j[a] < 0 ? (h = f, e = f - 1) : j[a] > 0 ? (h = 0, e = f - 1) : (h = f - 1, e = 2), i = this.calcColor(j[a], a), null !== i ? (c && (i = this.calcHighlightColor(i, k)), l.drawRect(g, h, this.barWidth - 1, e - 1, i, i)) : void 0;
      }
    }), d.fn.sparkline.discrete = z = f(d.fn.sparkline._base, v, {
      type: "discrete",
      init: function init(a, e, f, g, h) {
        z._super.init.call(this, a, e, f, g, h), this.regionShapes = {}, this.values = e = d.map(e, Number), this.min = b.min.apply(b, e), this.max = b.max.apply(b, e), this.range = this.max - this.min, this.width = g = "auto" === f.get("width") ? 2 * e.length : this.width, this.interval = b.floor(g / e.length), this.itemWidth = g / e.length, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < this.min) && (this.min = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > this.max) && (this.max = f.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === f.get("lineHeight") ? b.round(.3 * this.canvasHeight) : f.get("lineHeight"));
      },
      getRegion: function getRegion(a, c, d) {
        return b.floor(c / this.itemWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          offset: a
        };
      },
      renderRegion: function renderRegion(a, c) {
        var d,
            e,
            f,
            g,
            i = this.values,
            j = this.options,
            k = this.min,
            l = this.max,
            m = this.range,
            n = this.interval,
            o = this.target,
            p = this.canvasHeight,
            q = this.lineHeight,
            r = p - q;
        return e = h(i[a], k, l), g = a * n, d = b.round(r - r * ((e - k) / m)), f = j.get("thresholdColor") && e < j.get("thresholdValue") ? j.get("thresholdColor") : j.get("lineColor"), c && (f = this.calcHighlightColor(f, j)), o.drawLine(g, d, g, d + q, f);
      }
    }), d.fn.sparkline.bullet = A = f(d.fn.sparkline._base, {
      type: "bullet",
      init: function init(a, d, e, f, g) {
        var h, i, j;
        A._super.init.call(this, a, d, e, f, g), this.values = d = k(d), j = d.slice(), j[0] = null === j[0] ? j[2] : j[0], j[1] = null === d[1] ? j[2] : j[1], h = b.min.apply(b, d), i = b.max.apply(b, d), h = e.get("base") === c ? 0 > h ? h : 0 : e.get("base"), this.min = h, this.max = i, this.range = i - h, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = f = "auto" === e.get("width") ? "4.0em" : f, this.target = this.$el.simpledraw(f, g, e.get("composite")), d.length || (this.disabled = !0), this.initTarget();
      },
      getRegion: function getRegion(a, b, d) {
        var e = this.target.getShapeAt(a, b, d);
        return e !== c && this.shapes[e] !== c ? this.shapes[e] : c;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          fieldkey: a.substr(0, 1),
          value: this.values[a.substr(1)],
          region: a
        };
      },
      changeHighlight: function changeHighlight(a) {
        var b,
            c = this.currentRegion,
            d = this.valueShapes[c];

        switch (delete this.shapes[d], c.substr(0, 1)) {
          case "r":
            b = this.renderRange(c.substr(1), a);
            break;

          case "p":
            b = this.renderPerformance(a);
            break;

          case "t":
            b = this.renderTarget(a);
        }

        this.valueShapes[c] = b.id, this.shapes[b.id] = c, this.target.replaceWithShape(d, b);
      },
      renderRange: function renderRange(a, c) {
        var d = this.values[a],
            e = b.round(this.canvasWidth * ((d - this.min) / this.range)),
            f = this.options.get("rangeColors")[a - 2];
        return c && (f = this.calcHighlightColor(f, this.options)), this.target.drawRect(0, 0, e - 1, this.canvasHeight - 1, f, f);
      },
      renderPerformance: function renderPerformance(a) {
        var c = this.values[1],
            d = b.round(this.canvasWidth * ((c - this.min) / this.range)),
            e = this.options.get("performanceColor");
        return a && (e = this.calcHighlightColor(e, this.options)), this.target.drawRect(0, b.round(.3 * this.canvasHeight), d - 1, b.round(.4 * this.canvasHeight) - 1, e, e);
      },
      renderTarget: function renderTarget(a) {
        var c = this.values[0],
            d = b.round(this.canvasWidth * ((c - this.min) / this.range) - this.options.get("targetWidth") / 2),
            e = b.round(.1 * this.canvasHeight),
            f = this.canvasHeight - 2 * e,
            g = this.options.get("targetColor");
        return a && (g = this.calcHighlightColor(g, this.options)), this.target.drawRect(d, e, this.options.get("targetWidth") - 1, f - 1, g, g);
      },
      render: function render() {
        var a,
            b,
            c = this.values.length,
            d = this.target;

        if (A._super.render.call(this)) {
          for (a = 2; c > a; a++) {
            b = this.renderRange(a).append(), this.shapes[b.id] = "r" + a, this.valueShapes["r" + a] = b.id;
          }

          null !== this.values[1] && (b = this.renderPerformance().append(), this.shapes[b.id] = "p1", this.valueShapes.p1 = b.id), null !== this.values[0] && (b = this.renderTarget().append(), this.shapes[b.id] = "t0", this.valueShapes.t0 = b.id), d.render();
        }
      }
    }), d.fn.sparkline.pie = B = f(d.fn.sparkline._base, {
      type: "pie",
      init: function init(a, c, e, f, g) {
        var h,
            i = 0;
        if (B._super.init.call(this, a, c, e, f, g), this.shapes = {}, this.valueShapes = {}, this.values = c = d.map(c, Number), "auto" === e.get("width") && (this.width = this.height), c.length > 0) for (h = c.length; h--;) {
          i += c[h];
        }
        this.total = i, this.initTarget(), this.radius = b.floor(b.min(this.canvasWidth, this.canvasHeight) / 2);
      },
      getRegion: function getRegion(a, b, d) {
        var e = this.target.getShapeAt(a, b, d);
        return e !== c && this.shapes[e] !== c ? this.shapes[e] : c;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          percent: this.values[a] / this.total * 100,
          color: this.options.get("sliceColors")[a % this.options.get("sliceColors").length],
          offset: a
        };
      },
      changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
            c = this.renderSlice(b, a),
            d = this.valueShapes[b];
        delete this.shapes[d], this.target.replaceWithShape(d, c), this.valueShapes[b] = c.id, this.shapes[c.id] = b;
      },
      renderSlice: function renderSlice(a, d) {
        var e,
            f,
            g,
            h,
            i,
            j = this.target,
            k = this.options,
            l = this.radius,
            m = k.get("borderWidth"),
            n = k.get("offset"),
            o = 2 * b.PI,
            p = this.values,
            q = this.total,
            r = n ? 2 * b.PI * (n / 360) : 0;

        for (h = p.length, g = 0; h > g; g++) {
          if (e = r, f = r, q > 0 && (f = r + o * (p[g] / q)), a === g) return i = k.get("sliceColors")[g % k.get("sliceColors").length], d && (i = this.calcHighlightColor(i, k)), j.drawPieSlice(l, l, l - m, e, f, c, i);
          r = f;
        }
      },
      render: function render() {
        var a,
            d,
            e = this.target,
            f = this.values,
            g = this.options,
            h = this.radius,
            i = g.get("borderWidth");

        if (B._super.render.call(this)) {
          for (i && e.drawCircle(h, h, b.floor(h - i / 2), g.get("borderColor"), c, i).append(), d = f.length; d--;) {
            f[d] && (a = this.renderSlice(d).append(), this.valueShapes[d] = a.id, this.shapes[a.id] = d);
          }

          e.render();
        }
      }
    }), d.fn.sparkline.box = C = f(d.fn.sparkline._base, {
      type: "box",
      init: function init(a, b, c, e, f) {
        C._super.init.call(this, a, b, c, e, f), this.values = d.map(b, Number), this.width = "auto" === c.get("width") ? "4.0em" : e, this.initTarget(), this.values.length || (this.disabled = 1);
      },
      getRegion: function getRegion() {
        return 1;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = [{
          field: "lq",
          value: this.quartiles[0]
        }, {
          field: "med",
          value: this.quartiles[1]
        }, {
          field: "uq",
          value: this.quartiles[2]
        }];
        return this.loutlier !== c && a.push({
          field: "lo",
          value: this.loutlier
        }), this.routlier !== c && a.push({
          field: "ro",
          value: this.routlier
        }), this.lwhisker !== c && a.push({
          field: "lw",
          value: this.lwhisker
        }), this.rwhisker !== c && a.push({
          field: "rw",
          value: this.rwhisker
        }), a;
      },
      render: function render() {
        var a,
            d,
            e,
            f,
            g,
            h,
            j,
            k,
            l,
            m,
            n,
            o = this.target,
            p = this.values,
            q = p.length,
            r = this.options,
            s = this.canvasWidth,
            t = this.canvasHeight,
            u = r.get("chartRangeMin") === c ? b.min.apply(b, p) : r.get("chartRangeMin"),
            v = r.get("chartRangeMax") === c ? b.max.apply(b, p) : r.get("chartRangeMax"),
            w = 0;

        if (C._super.render.call(this)) {
          if (r.get("raw")) r.get("showOutliers") && p.length > 5 ? (d = p[0], a = p[1], f = p[2], g = p[3], h = p[4], j = p[5], k = p[6]) : (a = p[0], f = p[1], g = p[2], h = p[3], j = p[4]);else if (p.sort(function (a, b) {
            return a - b;
          }), f = i(p, 1), g = i(p, 2), h = i(p, 3), e = h - f, r.get("showOutliers")) {
            for (a = j = c, l = 0; q > l; l++) {
              a === c && p[l] > f - e * r.get("outlierIQR") && (a = p[l]), p[l] < h + e * r.get("outlierIQR") && (j = p[l]);
            }

            d = p[0], k = p[q - 1];
          } else a = p[0], j = p[q - 1];
          this.quartiles = [f, g, h], this.lwhisker = a, this.rwhisker = j, this.loutlier = d, this.routlier = k, n = s / (v - u + 1), r.get("showOutliers") && (w = b.ceil(r.get("spotRadius")), s -= 2 * b.ceil(r.get("spotRadius")), n = s / (v - u + 1), a > d && o.drawCircle((d - u) * n + w, t / 2, r.get("spotRadius"), r.get("outlierLineColor"), r.get("outlierFillColor")).append(), k > j && o.drawCircle((k - u) * n + w, t / 2, r.get("spotRadius"), r.get("outlierLineColor"), r.get("outlierFillColor")).append()), o.drawRect(b.round((f - u) * n + w), b.round(.1 * t), b.round((h - f) * n), b.round(.8 * t), r.get("boxLineColor"), r.get("boxFillColor")).append(), o.drawLine(b.round((a - u) * n + w), b.round(t / 2), b.round((f - u) * n + w), b.round(t / 2), r.get("lineColor")).append(), o.drawLine(b.round((a - u) * n + w), b.round(t / 4), b.round((a - u) * n + w), b.round(t - t / 4), r.get("whiskerColor")).append(), o.drawLine(b.round((j - u) * n + w), b.round(t / 2), b.round((h - u) * n + w), b.round(t / 2), r.get("lineColor")).append(), o.drawLine(b.round((j - u) * n + w), b.round(t / 4), b.round((j - u) * n + w), b.round(t - t / 4), r.get("whiskerColor")).append(), o.drawLine(b.round((g - u) * n + w), b.round(.1 * t), b.round((g - u) * n + w), b.round(.9 * t), r.get("medianColor")).append(), r.get("target") && (m = b.ceil(r.get("spotRadius")), o.drawLine(b.round((r.get("target") - u) * n + w), b.round(t / 2 - m), b.round((r.get("target") - u) * n + w), b.round(t / 2 + m), r.get("targetColor")).append(), o.drawLine(b.round((r.get("target") - u) * n + w - m), b.round(t / 2), b.round((r.get("target") - u) * n + w + m), b.round(t / 2), r.get("targetColor")).append()), o.render();
        }
      }
    }), F = f({
      init: function init(a, b, c, d) {
        this.target = a, this.id = b, this.type = c, this.args = d;
      },
      append: function append() {
        return this.target.appendShape(this), this;
      }
    }), G = f({
      _pxregex: /(\d+)(px)?\s*$/i,
      init: function init(a, b, c) {
        a && (this.width = a, this.height = b, this.target = c, this.lastShapeId = null, c[0] && (c = c[0]), d.data(c, "_jqs_vcanvas", this));
      },
      drawLine: function drawLine(a, b, c, d, e, f) {
        return this.drawShape([[a, b], [c, d]], e, f);
      },
      drawShape: function drawShape(a, b, c, d) {
        return this._genShape("Shape", [a, b, c, d]);
      },
      drawCircle: function drawCircle(a, b, c, d, e, f) {
        return this._genShape("Circle", [a, b, c, d, e, f]);
      },
      drawPieSlice: function drawPieSlice(a, b, c, d, e, f, g) {
        return this._genShape("PieSlice", [a, b, c, d, e, f, g]);
      },
      drawRect: function drawRect(a, b, c, d, e, f) {
        return this._genShape("Rect", [a, b, c, d, e, f]);
      },
      getElement: function getElement() {
        return this.canvas;
      },
      getLastShapeId: function getLastShapeId() {
        return this.lastShapeId;
      },
      reset: function reset() {
        alert("reset not implemented");
      },
      _insert: function _insert(a, b) {
        d(b).html(a);
      },
      _calculatePixelDims: function _calculatePixelDims(a, b, c) {
        var e;
        e = this._pxregex.exec(b), e ? this.pixelHeight = e[1] : this.pixelHeight = d(c).height(), e = this._pxregex.exec(a), e ? this.pixelWidth = e[1] : this.pixelWidth = d(c).width();
      },
      _genShape: function _genShape(a, b) {
        var c = L++;
        return b.unshift(c), new F(this, c, a, b);
      },
      appendShape: function appendShape(a) {
        alert("appendShape not implemented");
      },
      replaceWithShape: function replaceWithShape(a, b) {
        alert("replaceWithShape not implemented");
      },
      insertAfterShape: function insertAfterShape(a, b) {
        alert("insertAfterShape not implemented");
      },
      removeShapeId: function removeShapeId(a) {
        alert("removeShapeId not implemented");
      },
      getShapeAt: function getShapeAt(a, b, c) {
        alert("getShapeAt not implemented");
      },
      render: function render() {
        alert("render not implemented");
      }
    }), H = f(G, {
      init: function init(b, e, f, g) {
        H._super.init.call(this, b, e, f), this.canvas = a.createElement("canvas"), f[0] && (f = f[0]), d.data(f, "_jqs_vcanvas", this), d(this.canvas).css({
          display: "inline-block",
          width: b,
          height: e,
          verticalAlign: "top"
        }), this._insert(this.canvas, f), this._calculatePixelDims(b, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = g, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c, d(this.canvas).css({
          width: this.pixelWidth,
          height: this.pixelHeight
        });
      },
      _getContext: function _getContext(a, b, d) {
        var e = this.canvas.getContext("2d");
        return a !== c && (e.strokeStyle = a), e.lineWidth = d === c ? 1 : d, b !== c && (e.fillStyle = b), e;
      },
      reset: function reset() {
        var a = this._getContext();

        a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c;
      },
      _drawShape: function _drawShape(a, b, d, e, f) {
        var g,
            h,
            i = this._getContext(d, e, f);

        for (i.beginPath(), i.moveTo(b[0][0] + .5, b[0][1] + .5), g = 1, h = b.length; h > g; g++) {
          i.lineTo(b[g][0] + .5, b[g][1] + .5);
        }

        d !== c && i.stroke(), e !== c && i.fill(), this.targetX !== c && this.targetY !== c && i.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
      },
      _drawCircle: function _drawCircle(a, d, e, f, g, h, i) {
        var j = this._getContext(g, h, i);

        j.beginPath(), j.arc(d, e, f, 0, 2 * b.PI, !1), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a), g !== c && j.stroke(), h !== c && j.fill();
      },
      _drawPieSlice: function _drawPieSlice(a, b, d, e, f, g, h, i) {
        var j = this._getContext(h, i);

        j.beginPath(), j.moveTo(b, d), j.arc(b, d, e, f, g, !1), j.lineTo(b, d), j.closePath(), h !== c && j.stroke(), i && j.fill(), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
      },
      _drawRect: function _drawRect(a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b + d, c], [b + d, c + e], [b, c + e], [b, c]], f, g);
      },
      appendShape: function appendShape(a) {
        return this.shapes[a.id] = a, this.shapeseq.push(a.id), this.lastShapeId = a.id, a.id;
      },
      replaceWithShape: function replaceWithShape(a, b) {
        var c,
            d = this.shapeseq;

        for (this.shapes[b.id] = b, c = d.length; c--;) {
          d[c] == a && (d[c] = b.id);
        }

        delete this.shapes[a];
      },
      replaceWithShapes: function replaceWithShapes(a, b) {
        var c,
            d,
            e,
            f = this.shapeseq,
            g = {};

        for (d = a.length; d--;) {
          g[a[d]] = !0;
        }

        for (d = f.length; d--;) {
          c = f[d], g[c] && (f.splice(d, 1), delete this.shapes[c], e = d);
        }

        for (d = b.length; d--;) {
          f.splice(e, 0, b[d].id), this.shapes[b[d].id] = b[d];
        }
      },
      insertAfterShape: function insertAfterShape(a, b) {
        var c,
            d = this.shapeseq;

        for (c = d.length; c--;) {
          if (d[c] === a) return d.splice(c + 1, 0, b.id), void (this.shapes[b.id] = b);
        }
      },
      removeShapeId: function removeShapeId(a) {
        var b,
            c = this.shapeseq;

        for (b = c.length; b--;) {
          if (c[b] === a) {
            c.splice(b, 1);
            break;
          }
        }

        delete this.shapes[a];
      },
      getShapeAt: function getShapeAt(a, b, c) {
        return this.targetX = b, this.targetY = c, this.render(), this.currentTargetShapeId;
      },
      render: function render() {
        var a,
            b,
            c,
            d = this.shapeseq,
            e = this.shapes,
            f = d.length,
            g = this._getContext();

        for (g.clearRect(0, 0, this.pixelWidth, this.pixelHeight), c = 0; f > c; c++) {
          a = d[c], b = e[a], this["_draw" + b.type].apply(this, b.args);
        }

        this.interact || (this.shapes = {}, this.shapeseq = []);
      }
    }), I = f(G, {
      init: function init(b, c, e) {
        var f;
        I._super.init.call(this, b, c, e), e[0] && (e = e[0]), d.data(e, "_jqs_vcanvas", this), this.canvas = a.createElement("span"), d(this.canvas).css({
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          width: b,
          height: c,
          margin: "0px",
          padding: "0px",
          verticalAlign: "top"
        }), this._insert(this.canvas, e), this._calculatePixelDims(b, c, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, f = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", f), this.group = d(this.canvas).children()[0], this.rendered = !1, this.prerender = "";
      },
      _drawShape: function _drawShape(a, b, d, e, f) {
        var g,
            h,
            i,
            j,
            k,
            l,
            m,
            n = [];

        for (m = 0, l = b.length; l > m; m++) {
          n[m] = "" + b[m][0] + "," + b[m][1];
        }

        return g = n.splice(0, 1), f = f === c ? 1 : f, h = d === c ? ' stroked="false" ' : ' strokeWeight="' + f + 'px" strokeColor="' + d + '" ', i = e === c ? ' filled="false"' : ' fillColor="' + e + '" filled="true" ', j = n[0] === n[n.length - 1] ? "x " : "", k = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + a + '" ' + h + i + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + g + " l " + n.join(", ") + " " + j + 'e"> </v:shape>';
      },
      _drawCircle: function _drawCircle(a, b, d, e, f, g, h) {
        var i, j, k;
        return b -= e, d -= e, i = f === c ? ' stroked="false" ' : ' strokeWeight="' + h + 'px" strokeColor="' + f + '" ', j = g === c ? ' filled="false"' : ' fillColor="' + g + '" filled="true" ', k = '<v:oval  id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;top:' + d + "px; left:" + b + "px; width:" + 2 * e + "px; height:" + 2 * e + 'px"></v:oval>';
      },
      _drawPieSlice: function _drawPieSlice(a, d, e, f, g, h, i, j) {
        var k, l, m, n, o, p, q, r;
        if (g === h) return "";

        if (h - g === 2 * b.PI && (g = 0, h = 2 * b.PI), l = d + b.round(b.cos(g) * f), m = e + b.round(b.sin(g) * f), n = d + b.round(b.cos(h) * f), o = e + b.round(b.sin(h) * f), l === n && m === o) {
          if (h - g < b.PI) return "";
          l = n = d + f, m = o = e;
        }

        return l === n && m === o && h - g < b.PI ? "" : (k = [d - f, e - f, d + f, e + f, l, m, n, o], p = i === c ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + i + '" ', q = j === c ? ' filled="false"' : ' fillColor="' + j + '" filled="true" ', r = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + a + '" ' + p + q + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + d + "," + e + " wa " + k.join(", ") + ' x e"> </v:shape>');
      },
      _drawRect: function _drawRect(a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b, c + e], [b + d, c + e], [b + d, c], [b, c]], f, g);
      },
      reset: function reset() {
        this.group.innerHTML = "";
      },
      appendShape: function appendShape(a) {
        var b = this["_draw" + a.type].apply(this, a.args);
        return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", b) : this.prerender += b, this.lastShapeId = a.id, a.id;
      },
      replaceWithShape: function replaceWithShape(a, b) {
        var c = d("#jqsshape" + a),
            e = this["_draw" + b.type].apply(this, b.args);
        c[0].outerHTML = e;
      },
      replaceWithShapes: function replaceWithShapes(a, b) {
        var c,
            e = d("#jqsshape" + a[0]),
            f = "",
            g = b.length;

        for (c = 0; g > c; c++) {
          f += this["_draw" + b[c].type].apply(this, b[c].args);
        }

        for (e[0].outerHTML = f, c = 1; c < a.length; c++) {
          d("#jqsshape" + a[c]).remove();
        }
      },
      insertAfterShape: function insertAfterShape(a, b) {
        var c = d("#jqsshape" + a),
            e = this["_draw" + b.type].apply(this, b.args);
        c[0].insertAdjacentHTML("afterEnd", e);
      },
      removeShapeId: function removeShapeId(a) {
        var b = d("#jqsshape" + a);
        this.group.removeChild(b[0]);
      },
      getShapeAt: function getShapeAt(a, b, c) {
        var d = a.id.substr(8);
        return d;
      },
      render: function render() {
        this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0);
      }
    });
  });
}(document, Math);

/***/ }),

/***/ "./resources/assests/js/jquery.ui.touch-punch.min.js":
/*!***********************************************************!*\
  !*** ./resources/assests/js/jquery.ui.touch-punch.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function (a) {
  function b(a, b) {
    if (!(a.originalEvent.touches.length > 1)) {
      a.preventDefault();
      var c = a.originalEvent.changedTouches[0],
          d = document.createEvent("MouseEvents");
      d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d);
    }
  }

  if (a.support.touch = "ontouchend" in document, a.support.touch) {
    var c,
        d = a.ui.mouse.prototype,
        e = d._mouseInit,
        f = d._mouseDestroy;
    d._touchStart = function (a) {
      var d = this;
      !c && d._mouseCapture(a.originalEvent.changedTouches[0]) && (c = !0, d._touchMoved = !1, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"));
    }, d._touchMove = function (a) {
      c && (this._touchMoved = !0, b(a, "mousemove"));
    }, d._touchEnd = function (a) {
      c && (b(a, "mouseup"), b(a, "mouseout"), this._touchMoved || b(a, "click"), c = !1);
    }, d._mouseInit = function () {
      var b = this;
      b.element.bind({
        touchstart: a.proxy(b, "_touchStart"),
        touchmove: a.proxy(b, "_touchMove"),
        touchend: a.proxy(b, "_touchEnd")
      }), e.call(b);
    }, d._mouseDestroy = function () {
      var b = this;
      b.element.unbind({
        touchstart: a.proxy(b, "_touchStart"),
        touchmove: a.proxy(b, "_touchMove"),
        touchend: a.proxy(b, "_touchEnd")
      }), f.call(b);
    };
  }
}(jQuery);

/***/ }),

/***/ 1:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/assests/js/jquery-ui.custom.min.js ./resources/assests/js/jquery.ui.touch-punch.min.js ./resources/assests/js/jquery.easypiechart.min.js ./resources/assests/js/jquery.sparkline.index.min.js ./resources/assests/js/jquery.flot.min.js ./resources/assests/js/jquery.flot.pie.min.js ./resources/assests/js/jquery.flot.resize.min.js ./resources/assests/js/ace-elements.min.js ./resources/assests/js/ace.min.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\office\EMIS Enhancement\emisv3-ace\resources\assests\js\jquery-ui.custom.min.js */"./resources/assests/js/jquery-ui.custom.min.js");
__webpack_require__(/*! D:\office\EMIS Enhancement\emisv3-ace\resources\assests\js\jquery.ui.touch-punch.min.js */"./resources/assests/js/jquery.ui.touch-punch.min.js");
__webpack_require__(/*! D:\office\EMIS Enhancement\emisv3-ace\resources\assests\js\jquery.easypiechart.min.js */"./resources/assests/js/jquery.easypiechart.min.js");
__webpack_require__(/*! D:\office\EMIS Enhancement\emisv3-ace\resources\assests\js\jquery.sparkline.index.min.js */"./resources/assests/js/jquery.sparkline.index.min.js");
__webpack_require__(/*! D:\office\EMIS Enhancement\emisv3-ace\resources\assests\js\jquery.flot.min.js */"./resources/assests/js/jquery.flot.min.js");
__webpack_require__(/*! D:\office\EMIS Enhancement\emisv3-ace\resources\assests\js\jquery.flot.pie.min.js */"./resources/assests/js/jquery.flot.pie.min.js");
__webpack_require__(/*! D:\office\EMIS Enhancement\emisv3-ace\resources\assests\js\jquery.flot.resize.min.js */"./resources/assests/js/jquery.flot.resize.min.js");
__webpack_require__(/*! D:\office\EMIS Enhancement\emisv3-ace\resources\assests\js\ace-elements.min.js */"./resources/assests/js/ace-elements.min.js");
module.exports = __webpack_require__(/*! D:\office\EMIS Enhancement\emisv3-ace\resources\assests\js\ace.min.js */"./resources/assests/js/ace.min.js");


/***/ })

/******/ });