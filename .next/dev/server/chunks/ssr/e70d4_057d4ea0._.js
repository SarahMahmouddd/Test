module.exports = [
"[project]/Desktop/ITI_Tasks/task/test/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/modern-browserslist-target.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the minimum browser versions that we consider "modern" and thus compile for by default.
 * This list was generated using `pnpm browserslist "baseline widely available"` on 2025-10-01.
 */ const MODERN_BROWSERSLIST_TARGET = [
    'chrome 111',
    'edge 111',
    'firefox 111',
    'safari 16.4'
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/entry-constants.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UNDERSCORE_GLOBAL_ERROR_ROUTE: null,
    UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: null,
    UNDERSCORE_NOT_FOUND_ROUTE: null,
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
        return UNDERSCORE_GLOBAL_ERROR_ROUTE;
    },
    UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
        return UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    }
});
const UNDERSCORE_NOT_FOUND_ROUTE = '/_not-found';
const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = `${UNDERSCORE_NOT_FOUND_ROUTE}/page`;
const UNDERSCORE_GLOBAL_ERROR_ROUTE = '/_global-error';
const UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY = `${UNDERSCORE_GLOBAL_ERROR_ROUTE}/page`; //# sourceMappingURL=entry-constants.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/constants.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    APP_CLIENT_INTERNALS: null,
    APP_PATHS_MANIFEST: null,
    APP_PATH_ROUTES_MANIFEST: null,
    AdapterOutputType: null,
    BARREL_OPTIMIZATION_PREFIX: null,
    BLOCKED_PAGES: null,
    BUILD_ID_FILE: null,
    BUILD_MANIFEST: null,
    CLIENT_PUBLIC_FILES_PATH: null,
    CLIENT_REFERENCE_MANIFEST: null,
    CLIENT_STATIC_FILES_PATH: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: null,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: null,
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: null,
    COMPILER_INDEXES: null,
    COMPILER_NAMES: null,
    CONFIG_FILES: null,
    DEFAULT_RUNTIME_WEBPACK: null,
    DEFAULT_SANS_SERIF_FONT: null,
    DEFAULT_SERIF_FONT: null,
    DEV_CLIENT_MIDDLEWARE_MANIFEST: null,
    DEV_CLIENT_PAGES_MANIFEST: null,
    DYNAMIC_CSS_MANIFEST: null,
    EDGE_RUNTIME_WEBPACK: null,
    EDGE_UNSUPPORTED_NODE_APIS: null,
    EXPORT_DETAIL: null,
    EXPORT_MARKER: null,
    FUNCTIONS_CONFIG_MANIFEST: null,
    IMAGES_MANIFEST: null,
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: null,
    MIDDLEWARE_BUILD_MANIFEST: null,
    MIDDLEWARE_MANIFEST: null,
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: null,
    MODERN_BROWSERSLIST_TARGET: null,
    NEXT_BUILTIN_DOCUMENT: null,
    NEXT_FONT_MANIFEST: null,
    PAGES_MANIFEST: null,
    PHASE_ANALYZE: null,
    PHASE_DEVELOPMENT_SERVER: null,
    PHASE_EXPORT: null,
    PHASE_INFO: null,
    PHASE_PRODUCTION_BUILD: null,
    PHASE_PRODUCTION_SERVER: null,
    PHASE_TEST: null,
    PRERENDER_MANIFEST: null,
    REACT_LOADABLE_MANIFEST: null,
    ROUTES_MANIFEST: null,
    RSC_MODULE_TYPES: null,
    SERVER_DIRECTORY: null,
    SERVER_FILES_MANIFEST: null,
    SERVER_PROPS_ID: null,
    SERVER_REFERENCE_MANIFEST: null,
    STATIC_PROPS_ID: null,
    STATIC_STATUS_PAGES: null,
    STRING_LITERAL_DROP_BUNDLE: null,
    SUBRESOURCE_INTEGRITY_MANIFEST: null,
    SYSTEM_ENTRYPOINTS: null,
    TRACE_OUTPUT_VERSION: null,
    TURBOPACK_CLIENT_BUILD_MANIFEST: null,
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: null,
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: null,
    UNDERSCORE_GLOBAL_ERROR_ROUTE: null,
    UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: null,
    UNDERSCORE_NOT_FOUND_ROUTE: null,
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: null,
    WEBPACK_STATS: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    AdapterOutputType: function() {
        return AdapterOutputType;
    },
    BARREL_OPTIMIZATION_PREFIX: function() {
        return BARREL_OPTIMIZATION_PREFIX;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    DEFAULT_RUNTIME_WEBPACK: function() {
        return DEFAULT_RUNTIME_WEBPACK;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return DEV_CLIENT_MIDDLEWARE_MANIFEST;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    DYNAMIC_CSS_MANIFEST: function() {
        return DYNAMIC_CSS_MANIFEST;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
        return INTERCEPTION_ROUTE_REWRITE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    PHASE_ANALYZE: function() {
        return PHASE_ANALYZE;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBOPACK_CLIENT_BUILD_MANIFEST: function() {
        return TURBOPACK_CLIENT_BUILD_MANIFEST;
    },
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
        return _entryconstants.UNDERSCORE_GLOBAL_ERROR_ROUTE;
    },
    UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
        return _entryconstants.UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return _entryconstants.UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return _entryconstants.UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    },
    WEBPACK_STATS: function() {
        return WEBPACK_STATS;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [ssr] (ecmascript)");
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/modern-browserslist-target.js [ssr] (ecmascript)"));
const _entryconstants = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/entry-constants.js [ssr] (ecmascript)");
const COMPILER_NAMES = {
    client: 'client',
    server: 'server',
    edgeServer: 'edge-server'
};
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
var AdapterOutputType = /*#__PURE__*/ function(AdapterOutputType) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ AdapterOutputType["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ AdapterOutputType["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ AdapterOutputType["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ AdapterOutputType["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `PRERENDER` represents an ISR enabled route that might
   * have a seeded cache entry or fallback generated during build
   */ AdapterOutputType["PRERENDER"] = "PRERENDER";
    /**
   * `STATIC_FILE` represents a static file (ie /_next/static)
   */ AdapterOutputType["STATIC_FILE"] = "STATIC_FILE";
    /**
   * `MIDDLEWARE` represents the middleware output if present
   */ AdapterOutputType["MIDDLEWARE"] = "MIDDLEWARE";
    return AdapterOutputType;
}({});
const PHASE_EXPORT = 'phase-export';
const PHASE_ANALYZE = 'phase-analyze';
const PHASE_PRODUCTION_BUILD = 'phase-production-build';
const PHASE_PRODUCTION_SERVER = 'phase-production-server';
const PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
const PHASE_TEST = 'phase-test';
const PHASE_INFO = 'phase-info';
const PAGES_MANIFEST = 'pages-manifest.json';
const WEBPACK_STATS = 'webpack-stats.json';
const APP_PATHS_MANIFEST = 'app-paths-manifest.json';
const APP_PATH_ROUTES_MANIFEST = 'app-path-routes-manifest.json';
const BUILD_MANIFEST = 'build-manifest.json';
const FUNCTIONS_CONFIG_MANIFEST = 'functions-config-manifest.json';
const SUBRESOURCE_INTEGRITY_MANIFEST = 'subresource-integrity-manifest';
const NEXT_FONT_MANIFEST = 'next-font-manifest';
const EXPORT_MARKER = 'export-marker.json';
const EXPORT_DETAIL = 'export-detail.json';
const PRERENDER_MANIFEST = 'prerender-manifest.json';
const ROUTES_MANIFEST = 'routes-manifest.json';
const IMAGES_MANIFEST = 'images-manifest.json';
const SERVER_FILES_MANIFEST = 'required-server-files';
const DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
const MIDDLEWARE_MANIFEST = 'middleware-manifest.json';
const TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST = '_clientMiddlewareManifest.json';
const TURBOPACK_CLIENT_BUILD_MANIFEST = 'client-build-manifest.json';
const DEV_CLIENT_MIDDLEWARE_MANIFEST = '_devMiddlewareManifest.json';
const REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
const SERVER_DIRECTORY = 'server';
const CONFIG_FILES = [
    'next.config.js',
    'next.config.mjs',
    'next.config.ts',
    // process.features can be undefined on Edge runtime
    // TODO: Remove `as any` once we bump @types/node to v22.10.0+
    ...process?.features?.typescript ? [
        'next.config.mts'
    ] : []
];
const BUILD_ID_FILE = 'BUILD_ID';
const BLOCKED_PAGES = [
    '/_document',
    '/_app',
    '/_error'
];
const CLIENT_PUBLIC_FILES_PATH = 'public';
const CLIENT_STATIC_FILES_PATH = 'static';
const STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__';
const NEXT_BUILTIN_DOCUMENT = '__NEXT_BUILTIN_DOCUMENT__';
const BARREL_OPTIMIZATION_PREFIX = '__barrel_optimize__';
const CLIENT_REFERENCE_MANIFEST = 'client-reference-manifest';
const SERVER_REFERENCE_MANIFEST = 'server-reference-manifest';
const MIDDLEWARE_BUILD_MANIFEST = 'middleware-build-manifest';
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = 'middleware-react-loadable-manifest';
const INTERCEPTION_ROUTE_REWRITE_MANIFEST = 'interception-route-rewrite-manifest';
const DYNAMIC_CSS_MANIFEST = 'dynamic-css-manifest';
const CLIENT_STATIC_FILES_RUNTIME_MAIN = `main`;
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = `${CLIENT_STATIC_FILES_RUNTIME_MAIN}-app`;
const APP_CLIENT_INTERNALS = 'app-pages-internals';
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = `react-refresh`;
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `webpack`;
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = 'polyfills';
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const DEFAULT_RUNTIME_WEBPACK = 'webpack-runtime';
const EDGE_RUNTIME_WEBPACK = 'edge-runtime-webpack';
const STATIC_PROPS_ID = '__N_SSG';
const SERVER_PROPS_ID = '__N_SSP';
const DEFAULT_SERIF_FONT = {
    name: 'Times New Roman',
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: 'Arial',
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    '/500'
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: 'client',
    server: 'server'
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    'clearImmediate',
    'setImmediate',
    'BroadcastChannel',
    'ByteLengthQueuingStrategy',
    'CompressionStream',
    'CountQueuingStrategy',
    'DecompressionStream',
    'DomException',
    'MessageChannel',
    'MessageEvent',
    'MessagePort',
    'ReadableByteStreamController',
    'ReadableStreamBYOBRequest',
    'ReadableStreamDefaultController',
    'TransformStreamDefaultController',
    'WritableStreamDefaultController'
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRouteObjects: null,
    getSortedRoutes: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRouteObjects: function() {
        return getSortedRouteObjects;
    },
    getSortedRoutes: function() {
        return getSortedRoutes;
    }
});
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split('/').filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix = '/') {
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[]'), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[...]'), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh(`${prefix}${c}/`)).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get('[]')._smoosh(`${prefix}[${this.slugName}]/`));
        }
        if (!this.placeholder) {
            const r = prefix === '/' ? '/' : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw Object.defineProperty(new Error(`You cannot define a route with the same specificity as a optional catch-all route ("${r}" and "${r}[[...${this.optionalRestSlugName}]]").`), "__NEXT_ERROR_CODE", {
                    value: "E458",
                    enumerable: false,
                    configurable: true
                });
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get('[...]')._smoosh(`${prefix}[...${this.restSlugName}]/`));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get('[[...]]')._smoosh(`${prefix}[[...${this.optionalRestSlugName}]]/`));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw Object.defineProperty(new Error(`Catch-all must be the last part of the URL.`), "__NEXT_ERROR_CODE", {
                value: "E392",
                enumerable: false,
                configurable: true
            });
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith('[') && segmentName.endsWith(']')) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith('…')) {
                throw Object.defineProperty(new Error(`Detected a three-dot character ('…') at ('${segmentName}'). Did you mean ('...')?`), "__NEXT_ERROR_CODE", {
                    value: "E147",
                    enumerable: false,
                    configurable: true
                });
            }
            if (segmentName.startsWith('...')) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith('[') || segmentName.endsWith(']')) {
                throw Object.defineProperty(new Error(`Segment names may not start or end with extra brackets ('${segmentName}').`), "__NEXT_ERROR_CODE", {
                    value: "E421",
                    enumerable: false,
                    configurable: true
                });
            }
            if (segmentName.startsWith('.')) {
                throw Object.defineProperty(new Error(`Segment names may not start with erroneous periods ('${segmentName}').`), "__NEXT_ERROR_CODE", {
                    value: "E288",
                    enumerable: false,
                    configurable: true
                });
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw Object.defineProperty(new Error(`You cannot use different slug names for the same dynamic path ('${previousSlug}' !== '${nextSlug}').`), "__NEXT_ERROR_CODE", {
                            value: "E337",
                            enumerable: false,
                            configurable: true
                        });
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw Object.defineProperty(new Error(`You cannot have the same slug name "${nextSlug}" repeat within a single dynamic path`), "__NEXT_ERROR_CODE", {
                            value: "E247",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, '')) {
                        throw Object.defineProperty(new Error(`You cannot have the slug names "${slug}" and "${nextSlug}" differ only by non-word symbols within a single dynamic path`), "__NEXT_ERROR_CODE", {
                            value: "E499",
                            enumerable: false,
                            configurable: true
                        });
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw Object.defineProperty(new Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${urlPaths[0]}" ).`), "__NEXT_ERROR_CODE", {
                            value: "E299",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = '[[...]]';
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw Object.defineProperty(new Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${urlPaths[0]}").`), "__NEXT_ERROR_CODE", {
                            value: "E300",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = '[...]';
                }
            } else {
                if (isOptional) {
                    throw Object.defineProperty(new Error(`Optional route parameters are not yet supported ("${urlPaths[0]}").`), "__NEXT_ERROR_CODE", {
                        value: "E435",
                        enumerable: false,
                        configurable: true
                    });
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = '[]';
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
}
function getSortedRouteObjects(objects, getter) {
    // We're assuming here that all the pathnames are unique, that way we can
    // sort the list and use the index as the key.
    const indexes = {};
    const pathnames = [];
    for(let i = 0; i < objects.length; i++){
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
    }
    // Sort the pathnames.
    const sorted = getSortedRoutes(pathnames);
    // Map the sorted pathnames back to the original objects using the new sorted
    // index.
    return sorted.map((pathname)=>objects[indexes[pathname]]);
} //# sourceMappingURL=sorted-routes.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/segment.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    NOT_FOUND_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    NOT_FOUND_SEGMENT_KEY: function() {
        return NOT_FOUND_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__';
const NOT_FOUND_SEGMENT_KEY = '/_not-found'; //# sourceMappingURL=segment.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/app-paths.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    normalizeAppPath: null,
    normalizeRscURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/segment.js [ssr] (ecmascript)");
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERCEPTION_ROUTE_MARKERS: null,
    extractInterceptionRouteInformation: null,
    isInterceptionRouteAppPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/app-paths.js [ssr] (ecmascript)");
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isDynamicRoute", {
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [ssr] (ecmascript)");
// Identify /.*[param].*/ in route string
const TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
// Identify /[param]/ in route string
const TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
function isDynamicRoute(route, strict = true) {
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
    }
    if (strict) {
        return TEST_STRICT_ROUTE.test(route);
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/index.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRouteObjects: null,
    getSortedRoutes: null,
    isDynamicRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRouteObjects: function() {
        return _sortedroutes.getSortedRouteObjects;
    },
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [ssr] (ecmascript)");
const _isdynamic = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathSep", {
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
});
function normalizePathSep(path) {
    return path.replace(/\\/g, '/');
} //# sourceMappingURL=normalize-path-sep.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "denormalizePagePath", {
    enumerable: true,
    get: function() {
        return denormalizePagePath;
    }
});
const _utils = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/index.js [ssr] (ecmascript)");
const _normalizepathsep = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [ssr] (ecmascript)");
function denormalizePagePath(page) {
    let _page = (0, _normalizepathsep.normalizePathSep)(page);
    return _page.startsWith('/index/') && !(0, _utils.isDynamicRoute)(_page) ? _page.slice(6) : _page !== '/index' ? _page : '/';
} //# sourceMappingURL=denormalize-page-path.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/utils.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/page-path/normalize-page-path.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePagePath", {
    enumerable: true,
    get: function() {
        return normalizePagePath;
    }
});
const _ensureleadingslash = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [ssr] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/router/utils/index.js [ssr] (ecmascript)");
const _utils1 = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/utils.js [ssr] (ecmascript)");
function normalizePagePath(page) {
    const normalized = /^\/index(\/|$)/.test(page) && !(0, _utils.isDynamicRoute)(page) ? `/index${page}` : page === '/' ? '/index' : (0, _ensureleadingslash.ensureLeadingSlash)(page);
    if ("TURBOPACK compile-time truthy", 1) {
        const { posix } = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
        const resolvedPage = posix.normalize(normalized);
        if (resolvedPage !== normalized) {
            throw new _utils1.NormalizeError(`Requested and resolved page mismatch: ${normalized} ${resolvedPage}`);
        }
    }
    return normalized;
} //# sourceMappingURL=normalize-page-path.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/get-page-files.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getPageFiles", {
    enumerable: true,
    get: function() {
        return getPageFiles;
    }
});
const _denormalizepagepath = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js [ssr] (ecmascript)");
const _normalizepagepath = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/page-path/normalize-page-path.js [ssr] (ecmascript)");
function getPageFiles(buildManifest, page) {
    const normalizedPage = (0, _denormalizepagepath.denormalizePagePath)((0, _normalizepagepath.normalizePagePath)(page));
    let files = buildManifest.pages[normalizedPage];
    if (!files) {
        console.warn(`Could not find files for ${normalizedPage} in .next/build-manifest.json`);
        return [];
    }
    return files;
} //# sourceMappingURL=get-page-files.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/htmlescape.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ESCAPE_REGEX: null,
    htmlEscapeJsonString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ESCAPE_REGEX: function() {
        return ESCAPE_REGEX;
    },
    htmlEscapeJsonString: function() {
        return htmlEscapeJsonString;
    }
});
const ESCAPE_LOOKUP = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function htmlEscapeJsonString(str) {
    return str.replace(ESCAPE_REGEX, (match)=>ESCAPE_LOOKUP[match]);
} //# sourceMappingURL=htmlescape.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/is-plain-object.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getObjectClassLabel: null,
    isPlainObject: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getObjectClassLabel: function() {
        return getObjectClassLabel;
    },
    isPlainObject: function() {
        return isPlainObject;
    }
});
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty('isPrototypeOf');
} //# sourceMappingURL=is-plain-object.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/lib/is-error.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getProperError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * Checks whether the given value is a NextError.
 * This can be used to print a more detailed error message with properties like `code` & `digest`.
 */ default: function() {
        return isError;
    },
    getProperError: function() {
        return getProperError;
    }
});
const _isplainobject = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/is-plain-object.js [ssr] (ecmascript)");
/**
 * This is a safe stringify function that handles circular references.
 * We're using a simpler version here to avoid introducing
 * the dependency `safe-stable-stringify` into production bundle.
 *
 * This helper is used both in development and production.
 */ function safeStringifyLite(obj) {
    const seen = new WeakSet();
    return JSON.stringify(obj, (_key, value)=>{
        // If value is an object and already seen, replace with "[Circular]"
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return '[Circular]';
            }
            seen.add(value);
        }
        return value;
    });
}
function isError(err) {
    return typeof err === 'object' && err !== null && 'name' in err && 'message' in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // provide better error for case where `throw undefined`
        // is called in development
        if (typeof err === 'undefined') {
            return Object.defineProperty(new Error('An undefined error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E98",
                enumerable: false,
                configurable: true
            });
        }
        if (err === null) {
            return Object.defineProperty(new Error('A null error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E336",
                enumerable: false,
                configurable: true
            });
        }
    }
    return Object.defineProperty(new Error((0, _isplainobject.isPlainObject)(err) ? safeStringifyLite(err) : err + ''), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=is-error.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)");
        } else //TURBOPACK unreachable
        ;
    } else //TURBOPACK unreachable
    ;
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/route-modules/pages/vendored/contexts/html-context.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)").vendored['contexts'].HtmlContext; //# sourceMappingURL=html-context.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/encode-uri-path.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/lib/trace/constants.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    AppRenderSpan: null,
    AppRouteRouteHandlersSpan: null,
    BaseServerSpan: null,
    LoadComponentsSpan: null,
    LogSpanAllowList: null,
    MiddlewareSpan: null,
    NextNodeServerSpan: null,
    NextServerSpan: null,
    NextVanillaSpanAllowlist: null,
    NodeSpan: null,
    RenderSpan: null,
    ResolveMetadataSpan: null,
    RouterSpan: null,
    StartServerSpan: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRenderSpan: function() {
        return AppRenderSpan;
    },
    AppRouteRouteHandlersSpan: function() {
        return AppRouteRouteHandlersSpan;
    },
    BaseServerSpan: function() {
        return BaseServerSpan;
    },
    LoadComponentsSpan: function() {
        return LoadComponentsSpan;
    },
    LogSpanAllowList: function() {
        return LogSpanAllowList;
    },
    MiddlewareSpan: function() {
        return MiddlewareSpan;
    },
    NextNodeServerSpan: function() {
        return NextNodeServerSpan;
    },
    NextServerSpan: function() {
        return NextServerSpan;
    },
    NextVanillaSpanAllowlist: function() {
        return NextVanillaSpanAllowlist;
    },
    NodeSpan: function() {
        return NodeSpan;
    },
    RenderSpan: function() {
        return RenderSpan;
    },
    ResolveMetadataSpan: function() {
        return ResolveMetadataSpan;
    },
    RouterSpan: function() {
        return RouterSpan;
    },
    StartServerSpan: function() {
        return StartServerSpan;
    }
});
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getRequestHandlerWithMetadata"] = "NextServer.getRequestHandlerWithMetadata";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    return AppRenderSpan;
}(AppRenderSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
const NextVanillaSpanAllowlist = new Set([
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
]);
const LogSpanAllowList = new Set([
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
]); //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/is-thenable.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/compiled/@opentelemetry/api/index.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : /*TURBOPACK member replacement*/ __turbopack_context__.g;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/ITI_Tasks/task/test/node_modules/next/dist/compiled/@opentelemetry/api") + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/lib/trace/tracer.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BubbledError: null,
    SpanKind: null,
    SpanStatusCode: null,
    getTracer: null,
    isBubbledError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BubbledError: function() {
        return BubbledError;
    },
    SpanKind: function() {
        return SpanKind;
    },
    SpanStatusCode: function() {
        return SpanStatusCode;
    },
    getTracer: function() {
        return getTracer;
    },
    isBubbledError: function() {
        return isBubbledError;
    }
});
const _constants = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/lib/trace/constants.js [ssr] (ecmascript)");
const _isthenable = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/is-thenable.js [ssr] (ecmascript)");
const NEXT_OTEL_PERFORMANCE_PREFIX = process.env.NEXT_OTEL_PERFORMANCE_PREFIX;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    try {
        api = __turbopack_context__.r("[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)");
    } catch (err) {
        api = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/compiled/@opentelemetry/api/index.js [ssr] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super(), this.bubble = bubble, this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
            span.setAttribute('error.type', error.name);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!_constants.NextVanillaSpanAllowlist.has(type) && process.env.NEXT_OTEL_VERBOSE !== '1' || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
        }
        // Check if there's already a root span in the store for this trace
        // We are intentionally not checking whether there is an active context
        // from outside of nextjs to ensure that we can provide the same level
        // of telemetry when using a custom server
        const existingRootSpanId = spanContext.getValue(rootSpanIdKey);
        const isRootSpan = typeof existingRootSpanId !== 'number' || !rootSpanAttributesStore.has(existingRootSpanId);
        const spanId = getSpanId();
        options.attributes = {
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                let startTime;
                if (NEXT_OTEL_PERFORMANCE_PREFIX && type && _constants.LogSpanAllowList.has(type)) {
                    startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                }
                let cleanedUp = false;
                const onCleanup = ()=>{
                    if (cleanedUp) return;
                    cleanedUp = true;
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime) {
                        performance.measure(`${NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                if (fn.length > 1) {
                    try {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    } catch (err) {
                        closeSpanWithError(span, err);
                        throw err;
                    } finally{
                        onCleanup();
                    }
                }
                try {
                    const result = fn(span);
                    if ((0, _isthenable.isThenable)(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!_constants.NextVanillaSpanAllowlist.has(name) && process.env.NEXT_OTEL_VERBOSE !== '1') {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes && !attributes.has(key)) {
            attributes.set(key, value);
        }
    }
    withSpan(span, fn) {
        const spanContext = trace.setSpan(context.active(), span);
        return context.with(spanContext, fn);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})(); //# sourceMappingURL=tracer.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/lib/trace/utils.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getTracedMetadata", {
    enumerable: true,
    get: function() {
        return getTracedMetadata;
    }
});
function getTracedMetadata(traceData, clientTraceMetadata) {
    if (!clientTraceMetadata) return undefined;
    return traceData.filter(({ key })=>clientTraceMetadata.includes(key));
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/lib/pretty-bytes.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return prettyBytes;
    }
});
const UNITS = [
    'B',
    'kB',
    'MB',
    'GB',
    'TB',
    'PB',
    'EB',
    'ZB',
    'YB'
];
/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/ const toLocaleString = (number, locale)=>{
    let result = number;
    if (typeof locale === 'string') {
        result = number.toLocaleString(locale);
    } else if (locale === true) {
        result = number.toLocaleString();
    }
    return result;
};
function prettyBytes(number, options) {
    if (!Number.isFinite(number)) {
        throw Object.defineProperty(new TypeError(`Expected a finite number, got ${typeof number}: ${number}`), "__NEXT_ERROR_CODE", {
            value: "E572",
            enumerable: false,
            configurable: true
        });
    }
    options = Object.assign({}, options);
    if (options.signed && number === 0) {
        return ' 0 B';
    }
    const isNegative = number < 0;
    const prefix = isNegative ? '-' : options.signed ? '+' : '';
    if (isNegative) {
        number = -number;
    }
    if (number < 1) {
        const numberString = toLocaleString(number, options.locale);
        return prefix + numberString + ' B';
    }
    const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);
    number = Number((number / Math.pow(1000, exponent)).toPrecision(3));
    const numberString = toLocaleString(number, options.locale);
    const unit = UNITS[exponent];
    return prefix + numberString + ' ' + unit;
} //# sourceMappingURL=pretty-bytes.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/pages/_document.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/// <reference types="webpack/module.d.ts" />
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Head: null,
    Html: null,
    Main: null,
    NextScript: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Head: function() {
        return Head;
    },
    Html: function() {
        return Html;
    },
    Main: function() {
        return Main;
    },
    NextScript: function() {
        return NextScript;
    },
    /**
 * `Document` component handles the initial `document` markup and renders only on the server side.
 * Commonly used for implementing server side rendering for `css-in-js` libraries.
 */ default: function() {
        return Document;
    }
});
const _jsxruntime = __turbopack_context__.r("[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)");
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[externals]/react [external] (react, cjs)"));
const _constants = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/constants.js [ssr] (ecmascript)");
const _getpagefiles = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/get-page-files.js [ssr] (ecmascript)");
const _htmlescape = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/htmlescape.js [ssr] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/lib/is-error.js [ssr] (ecmascript)"));
const _htmlcontextsharedruntime = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/route-modules/pages/vendored/contexts/html-context.js [ssr] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/shared/lib/encode-uri-path.js [ssr] (ecmascript)");
const _tracer = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/lib/trace/tracer.js [ssr] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/server/lib/trace/utils.js [ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
/** Set of pages that have triggered a large data warning on production mode. */ const largePageDataWarnings = new Set();
function getDocumentFiles(buildManifest, pathname) {
    const sharedFiles = (0, _getpagefiles.getPageFiles)(buildManifest, '/_app');
    const pageFiles = (0, _getpagefiles.getPageFiles)(buildManifest, pathname);
    return {
        sharedFiles,
        pageFiles,
        allFiles: [
            ...new Set([
                ...sharedFiles,
                ...pageFiles
            ])
        ]
    };
}
function getPolyfillScripts(context, props) {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const { assetPrefix, buildManifest, assetQueryString, disableOptimizedLoading, crossOrigin } = context;
    return buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map((polyfill)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
            defer: !disableOptimizedLoading,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin,
            noModule: true,
            src: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(polyfill)}${assetQueryString}`
        }, polyfill));
}
function hasComponentProps(child) {
    return !!child && !!child.props;
}
function getDynamicChunks(context, props, files) {
    const { dynamicImports, assetPrefix, isDevelopment, assetQueryString, disableOptimizedLoading, crossOrigin } = context;
    return dynamicImports.map((file)=>{
        if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            src: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin
        }, file);
    });
}
function getScripts(context, props, files) {
    var _buildManifest_lowPriorityFiles;
    const { assetPrefix, buildManifest, isDevelopment, assetQueryString, disableOptimizedLoading, crossOrigin } = context;
    const normalScripts = files.allFiles.filter((file)=>file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest_lowPriorityFiles = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest_lowPriorityFiles.filter((file)=>file.endsWith('.js'));
    return [
        ...normalScripts,
        ...lowPriorityScripts
    ].map((file)=>{
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
            src: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
            nonce: props.nonce,
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            crossOrigin: props.crossOrigin || crossOrigin
        }, file);
    });
}
function getPreNextWorkerScripts(context, props) {
    const { assetPrefix, scriptLoader, crossOrigin, nextScriptWorkers } = context;
    // disable `nextScriptWorkers` in edge runtime
    if (!nextScriptWorkers || ("TURBOPACK compile-time value", "nodejs") === 'edge') return null;
    try {
        // @ts-expect-error: Prevent webpack from processing this require
        let { partytownSnippet } = __non_webpack_require__('@builder.io/partytown/integration');
        const children = Array.isArray(props.children) ? props.children : [
            props.children
        ];
        // Check to see if the user has defined their own Partytown configuration
        const userDefinedConfig = children.find((child)=>{
            var _child_props_dangerouslySetInnerHTML, _child_props;
            return hasComponentProps(child) && (child == null ? void 0 : (_child_props = child.props) == null ? void 0 : (_child_props_dangerouslySetInnerHTML = _child_props.dangerouslySetInnerHTML) == null ? void 0 : _child_props_dangerouslySetInnerHTML.__html.length) && 'data-partytown-config' in child.props;
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                !userDefinedConfig && /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    "data-partytown-config": "",
                    dangerouslySetInnerHTML: {
                        __html: `
            partytown = {
              lib: "${assetPrefix}/_next/static/~partytown/"
            };
          `
                    }
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    "data-partytown": "",
                    dangerouslySetInnerHTML: {
                        __html: partytownSnippet()
                    }
                }),
                (scriptLoader.worker || []).map((file, index)=>{
                    const { strategy, src, children: scriptChildren, dangerouslySetInnerHTML, ...scriptProps } = file;
                    let srcProps = {};
                    if (src) {
                        // Use external src if provided
                        srcProps.src = src;
                    } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                        // Embed inline script if provided with dangerouslySetInnerHTML
                        srcProps.dangerouslySetInnerHTML = {
                            __html: dangerouslySetInnerHTML.__html
                        };
                    } else if (scriptChildren) {
                        // Embed inline script if provided with children
                        srcProps.dangerouslySetInnerHTML = {
                            __html: typeof scriptChildren === 'string' ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join('') : ''
                        };
                    } else {
                        throw Object.defineProperty(new Error('Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script'), "__NEXT_ERROR_CODE", {
                            value: "E82",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    return /*#__PURE__*/ (0, _react.createElement)("script", {
                        ...srcProps,
                        ...scriptProps,
                        type: "text/partytown",
                        key: src || index,
                        nonce: props.nonce,
                        "data-nscript": "worker",
                        crossOrigin: props.crossOrigin || crossOrigin
                    });
                })
            ]
        });
    } catch (err) {
        if ((0, _iserror.default)(err) && err.code !== 'MODULE_NOT_FOUND') {
            console.warn(`Warning: ${err.message}`);
        }
        return null;
    }
}
function getPreNextScripts(context, props) {
    const { scriptLoader, disableOptimizedLoading, crossOrigin } = context;
    const webWorkerScripts = getPreNextWorkerScripts(context, props);
    const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter((script)=>script.src).map((file, index)=>{
        const { strategy, ...scriptProps } = file;
        return /*#__PURE__*/ (0, _react.createElement)("script", {
            ...scriptProps,
            key: scriptProps.src || index,
            defer: scriptProps.defer ?? !disableOptimizedLoading,
            nonce: scriptProps.nonce || props.nonce,
            "data-nscript": "beforeInteractive",
            crossOrigin: props.crossOrigin || crossOrigin
        });
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            webWorkerScripts,
            beforeInteractiveScripts
        ]
    });
}
function getHeadHTMLProps(props) {
    const { crossOrigin, nonce, ...restProps } = props;
    // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>
    const headProps = restProps;
    return headProps;
}
function getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix = '') {
    if (!nextFontManifest) {
        return {
            preconnect: null,
            preload: null
        };
    }
    const appFontsEntry = nextFontManifest.pages['/_app'];
    const pageFontsEntry = nextFontManifest.pages[dangerousAsPath];
    const preloadedFontFiles = Array.from(new Set([
        ...appFontsEntry ?? [],
        ...pageFontsEntry ?? []
    ]));
    // If no font files should preload but there's an entry for the path, add a preconnect tag.
    const preconnectToSelf = !!(preloadedFontFiles.length === 0 && (appFontsEntry || pageFontsEntry));
    return {
        preconnect: preconnectToSelf ? /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            "data-next-font": nextFontManifest.pagesUsingSizeAdjust ? 'size-adjust' : '',
            rel: "preconnect",
            href: "/",
            crossOrigin: "anonymous"
        }) : null,
        preload: preloadedFontFiles ? preloadedFontFiles.map((fontFile)=>{
            const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(fontFile)[1];
            return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                rel: "preload",
                href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(fontFile)}`,
                as: "font",
                type: `font/${ext}`,
                crossOrigin: "anonymous",
                "data-next-font": fontFile.includes('-s') ? 'size-adjust' : ''
            }, fontFile);
        }) : null
    };
}
class Head extends _react.default.Component {
    static #_ = this.contextType = _htmlcontextsharedruntime.HtmlContext;
    getCssLinks(files) {
        const { assetPrefix, assetQueryString, dynamicImports, dynamicCssManifest, crossOrigin, optimizeCss } = this.context;
        const cssFiles = files.allFiles.filter((f)=>f.endsWith('.css'));
        const sharedFiles = new Set(files.sharedFiles);
        // Unmanaged files are CSS files that will be handled directly by the
        // webpack runtime (`mini-css-extract-plugin`).
        let unmanagedFiles = new Set([]);
        let localDynamicCssFiles = Array.from(new Set(dynamicImports.filter((file)=>file.endsWith('.css'))));
        if (localDynamicCssFiles.length) {
            const existing = new Set(cssFiles);
            localDynamicCssFiles = localDynamicCssFiles.filter((f)=>!(existing.has(f) || sharedFiles.has(f)));
            unmanagedFiles = new Set(localDynamicCssFiles);
            cssFiles.push(...localDynamicCssFiles);
        }
        let cssLinkElements = [];
        cssFiles.forEach((file)=>{
            const isSharedFile = sharedFiles.has(file);
            const isUnmanagedFile = unmanagedFiles.has(file);
            const isFileInDynamicCssManifest = dynamicCssManifest.has(file);
            if (!optimizeCss) {
                cssLinkElements.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                    as: "style",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }, `${file}-preload`));
            }
            cssLinkElements.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                nonce: this.props.nonce,
                rel: "stylesheet",
                href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                crossOrigin: this.props.crossOrigin || crossOrigin,
                "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
                "data-n-p": isSharedFile || isUnmanagedFile || isFileInDynamicCssManifest ? undefined : ''
            }, file));
        });
        return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
    getPreloadDynamicChunks() {
        const { dynamicImports, assetPrefix, assetQueryString, crossOrigin } = this.context;
        return dynamicImports.map((file)=>{
            if (!file.endsWith('.js')) {
                return null;
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                rel: "preload",
                href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                as: "script",
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin
            }, file);
        }) // Filter out nulled scripts
        .filter(Boolean);
    }
    getPreloadMainLinks(files) {
        const { assetPrefix, assetQueryString, scriptLoader, crossOrigin } = this.context;
        const preloadFiles = files.allFiles.filter((file)=>{
            return file.endsWith('.js');
        });
        return [
            ...(scriptLoader.beforeInteractive || []).map((file)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: file.src,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }, file.src)),
            ...preloadFiles.map((file)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }, file))
        ];
    }
    getBeforeInteractiveInlineScripts() {
        const { scriptLoader } = this.context;
        const { nonce, crossOrigin } = this.props;
        return (scriptLoader.beforeInteractive || []).filter((script)=>!script.src && (script.dangerouslySetInnerHTML || script.children)).map((file, index)=>{
            const { strategy, children, dangerouslySetInnerHTML, src, ...scriptProps } = file;
            let html = '';
            if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                html = dangerouslySetInnerHTML.__html;
            } else if (children) {
                html = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
            }
            return /*#__PURE__*/ (0, _react.createElement)("script", {
                ...scriptProps,
                dangerouslySetInnerHTML: {
                    __html: html
                },
                key: scriptProps.id || index,
                nonce: nonce,
                "data-nscript": "beforeInteractive",
                crossOrigin: crossOrigin || ("TURBOPACK compile-time value", void 0)
            });
        });
    }
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    render() {
        const { styles, __NEXT_DATA__, dangerousAsPath, headTags, unstable_runtimeJS, unstable_JsPreload, disableOptimizedLoading, optimizeCss, assetPrefix, nextFontManifest } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
        this.context.docComponentsRendered.Head = true;
        let { head } = this.context;
        let cssPreloads = [];
        let otherHeadElements = [];
        if (head) {
            head.forEach((child)=>{
                if (child && child.type === 'link' && child.props['rel'] === 'preload' && child.props['as'] === 'style') {
                    cssPreloads.push(child);
                } else {
                    if (child) {
                        otherHeadElements.push(/*#__PURE__*/ _react.default.cloneElement(child, {
                            'data-next-head': ''
                        }));
                    }
                }
            });
            head = cssPreloads.concat(otherHeadElements);
        }
        let children = _react.default.Children.toArray(this.props.children).filter(Boolean);
        // show a warning if Head contains <title> (only in development)
        if ("TURBOPACK compile-time truthy", 1) {
            children = _react.default.Children.map(children, (child)=>{
                var _child_props;
                const isReactHelmet = child == null ? void 0 : (_child_props = child.props) == null ? void 0 : _child_props['data-react-helmet'];
                if (!isReactHelmet) {
                    var _child_props1;
                    if ((child == null ? void 0 : child.type) === 'title') {
                        console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
                    } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child_props1 = child.props) == null ? void 0 : _child_props1.name) === 'viewport') {
                        console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
                    }
                }
                return child;
            // @types/react bug. Returned value from .map will not be `null` if you pass in `[null]`
            });
            if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
        }
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
        const nextFontLinkTags = getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix);
        const tracingMetadata = (0, _utils.getTracedMetadata)((0, _tracer.getTracer)().getTracePropagationData(), this.context.experimentalClientTraceMetadata);
        const traceMetaTags = (tracingMetadata || []).map(({ key, value }, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                name: key,
                content: value
            }, `next-trace-data-${index}`));
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)("head", {
            ...getHeadHTMLProps(this.props),
            children: [
                this.context.isDevelopment && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                            "data-next-hide-fouc": true,
                            dangerouslySetInnerHTML: {
                                __html: `body{display:none}`
                            }
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("noscript", {
                            "data-next-hide-fouc": true,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                                dangerouslySetInnerHTML: {
                                    __html: `body{display:block}`
                                }
                            })
                        })
                    ]
                }),
                head,
                children,
                nextFontLinkTags.preconnect,
                nextFontLinkTags.preload,
                this.getBeforeInteractiveInlineScripts(),
                !optimizeCss && this.getCssLinks(files),
                !optimizeCss && /*#__PURE__*/ (0, _jsxruntime.jsx)("noscript", {
                    "data-n-css": this.props.nonce ?? ''
                }),
                !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(),
                !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),
                !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(),
                !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(),
                !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files),
                !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),
                optimizeCss && this.getCssLinks(files),
                optimizeCss && /*#__PURE__*/ (0, _jsxruntime.jsx)("noscript", {
                    "data-n-css": this.props.nonce ?? ''
                }),
                this.context.isDevelopment && // this element is used to mount development styles so the
                // ordering matches production
                // (by default, style-loader injects at the bottom of <head />)
                /*#__PURE__*/ (0, _jsxruntime.jsx)("noscript", {
                    id: "__next_css__DO_NOT_USE__"
                }),
                traceMetaTags,
                styles || null,
                /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {}, ...headTags || [])
            ]
        });
    }
}
function handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {
    var _children_find_props, _children_find, _children_find_props1, _children_find1;
    if (!props.children) return;
    const scriptLoaderItems = [];
    const children = Array.isArray(props.children) ? props.children : [
        props.children
    ];
    const headChildren = (_children_find = children.find((child)=>child.type === Head)) == null ? void 0 : (_children_find_props = _children_find.props) == null ? void 0 : _children_find_props.children;
    const bodyChildren = (_children_find1 = children.find((child)=>child.type === 'body')) == null ? void 0 : (_children_find_props1 = _children_find1.props) == null ? void 0 : _children_find_props1.children;
    // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed
    const combinedChildren = [
        ...Array.isArray(headChildren) ? headChildren : [
            headChildren
        ],
        ...Array.isArray(bodyChildren) ? bodyChildren : [
            bodyChildren
        ]
    ];
    _react.default.Children.forEach(combinedChildren, (child)=>{
        var _child_type;
        if (!child) return;
        // When using the `next/script` component, register it in script loader.
        if ((_child_type = child.type) == null ? void 0 : _child_type.__nextScript) {
            if (child.props.strategy === 'beforeInteractive') {
                scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([
                    {
                        ...child.props
                    }
                ]);
                return;
            } else if ([
                'lazyOnload',
                'afterInteractive',
                'worker'
            ].includes(child.props.strategy)) {
                scriptLoaderItems.push(child.props);
                return;
            } else if (typeof child.props.strategy === 'undefined') {
                scriptLoaderItems.push({
                    ...child.props,
                    strategy: 'afterInteractive'
                });
                return;
            }
        }
    });
    __NEXT_DATA__.scriptLoader = scriptLoaderItems;
}
class NextScript extends _react.default.Component {
    static #_ = this.contextType = _htmlcontextsharedruntime.HtmlContext;
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    static getInlineScriptSource(context) {
        const { __NEXT_DATA__, largePageDataBytes } = context;
        try {
            const data = JSON.stringify(__NEXT_DATA__);
            if (largePageDataWarnings.has(__NEXT_DATA__.page)) {
                return (0, _htmlescape.htmlEscapeJsonString)(data);
            }
            const bytes = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Buffer.from(data).byteLength;
            const prettyBytes = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/lib/pretty-bytes.js [ssr] (ecmascript)").default;
            if (largePageDataBytes && bytes > largePageDataBytes) {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                console.warn(`Warning: data for page "${__NEXT_DATA__.page}"${__NEXT_DATA__.page === context.dangerousAsPath ? '' : ` (path "${context.dangerousAsPath}")`} is ${prettyBytes(bytes)} which exceeds the threshold of ${prettyBytes(largePageDataBytes)}, this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data`);
            }
            return (0, _htmlescape.htmlEscapeJsonString)(data);
        } catch (err) {
            if ((0, _iserror.default)(err) && err.message.indexOf('circular structure') !== -1) {
                throw Object.defineProperty(new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`), "__NEXT_ERROR_CODE", {
                    value: "E490",
                    enumerable: false,
                    configurable: true
                });
            }
            throw err;
        }
    }
    render() {
        const { assetPrefix, buildManifest, unstable_runtimeJS, docComponentsRendered, assetQueryString, disableOptimizedLoading, crossOrigin } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        docComponentsRendered.NextScript = true;
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
        }
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map((file)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                        src: `${assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(file)}${assetQueryString}`,
                        nonce: this.props.nonce,
                        crossOrigin: this.props.crossOrigin || crossOrigin
                    }, file)) : null,
                disableRuntimeJS ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    id: "__NEXT_DATA__",
                    type: "application/json",
                    nonce: this.props.nonce,
                    crossOrigin: this.props.crossOrigin || crossOrigin,
                    dangerouslySetInnerHTML: {
                        __html: NextScript.getInlineScriptSource(this.context)
                    }
                }),
                disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(),
                disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(),
                disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files),
                disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files)
            ]
        });
    }
}
function Html(props) {
    const { docComponentsRendered, locale, scriptLoader, __NEXT_DATA__ } = (0, _htmlcontextsharedruntime.useHtmlContext)();
    docComponentsRendered.Html = true;
    handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("html", {
        ...props,
        lang: props.lang || locale || undefined
    });
}
function Main() {
    const { docComponentsRendered } = (0, _htmlcontextsharedruntime.useHtmlContext)();
    docComponentsRendered.Main = true;
    // @ts-ignore
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("next-js-internal-body-render-target", {});
}
class Document extends _react.default.Component {
    /**
   * `getInitialProps` hook returns the context object with the addition of `renderPage`.
   * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
   */ static getInitialProps(ctx) {
        return ctx.defaultGetInitialProps(ctx);
    }
    render() {
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)(Html, {
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
                    nonce: this.props.nonce
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(Main, {}),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(NextScript, {
                            nonce: this.props.nonce
                        })
                    ]
                })
            ]
        });
    }
}
// Add a special property to the built-in `Document` component so later we can
// identify if a user customized `Document` is used or not.
const InternalFunctionDocument = function InternalFunctionDocument() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(Html, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(Main, {}),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(NextScript, {})
                ]
            })
        ]
    });
};
Document[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument; //# sourceMappingURL=_document.js.map
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/next/document.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/ITI_Tasks/task/test/node_modules/next/dist/pages/_document.js [ssr] (ecmascript)");
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/tslib/tslib.es6.mjs [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize
]);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
;
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPropValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [ssr] (ecmascript)");
;
// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var isPropValid = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
;
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Enum.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARSET",
    ()=>CHARSET,
    "COMMENT",
    ()=>COMMENT,
    "COUNTER_STYLE",
    ()=>COUNTER_STYLE,
    "DECLARATION",
    ()=>DECLARATION,
    "DOCUMENT",
    ()=>DOCUMENT,
    "FONT_FACE",
    ()=>FONT_FACE,
    "FONT_FEATURE_VALUES",
    ()=>FONT_FEATURE_VALUES,
    "IMPORT",
    ()=>IMPORT,
    "KEYFRAMES",
    ()=>KEYFRAMES,
    "LAYER",
    ()=>LAYER,
    "MEDIA",
    ()=>MEDIA,
    "MOZ",
    ()=>MOZ,
    "MS",
    ()=>MS,
    "NAMESPACE",
    ()=>NAMESPACE,
    "PAGE",
    ()=>PAGE,
    "RULESET",
    ()=>RULESET,
    "SCOPE",
    ()=>SCOPE,
    "SUPPORTS",
    ()=>SUPPORTS,
    "VIEWPORT",
    ()=>VIEWPORT,
    "WEBKIT",
    ()=>WEBKIT
]);
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
var SCOPE = '@scope';
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Utility.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {number}
 * @return {number}
 */ __turbopack_context__.s([
    "abs",
    ()=>abs,
    "append",
    ()=>append,
    "assign",
    ()=>assign,
    "charat",
    ()=>charat,
    "combine",
    ()=>combine,
    "filter",
    ()=>filter,
    "from",
    ()=>from,
    "hash",
    ()=>hash,
    "indexof",
    ()=>indexof,
    "match",
    ()=>match,
    "replace",
    ()=>replace,
    "sizeof",
    ()=>sizeof,
    "strlen",
    ()=>strlen,
    "substr",
    ()=>substr,
    "trim",
    ()=>trim
]);
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search, position) {
    return value.indexOf(search, position);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}
function filter(array, pattern) {
    return array.filter(function(value) {
        return !match(value, pattern);
    });
}
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Tokenizer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "caret",
    ()=>caret,
    "char",
    ()=>char,
    "character",
    ()=>character,
    "characters",
    ()=>characters,
    "column",
    ()=>column,
    "commenter",
    ()=>commenter,
    "copy",
    ()=>copy,
    "dealloc",
    ()=>dealloc,
    "delimit",
    ()=>delimit,
    "delimiter",
    ()=>delimiter,
    "escaping",
    ()=>escaping,
    "identifier",
    ()=>identifier,
    "length",
    ()=>length,
    "lift",
    ()=>lift,
    "line",
    ()=>line,
    "next",
    ()=>next,
    "node",
    ()=>node,
    "peek",
    ()=>peek,
    "position",
    ()=>position,
    "prev",
    ()=>prev,
    "slice",
    ()=>slice,
    "token",
    ()=>token,
    "tokenize",
    ()=>tokenize,
    "tokenizer",
    ()=>tokenizer,
    "whitespace",
    ()=>whitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Utility.js [ssr] (ecmascript)");
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length, siblings) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: '',
        siblings: siblings
    };
}
function copy(root, props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["assign"])(node('', null, null, '', null, null, 0, root.siblings), root, {
        length: -root.length
    }, props);
}
function lift(root) {
    while(root.root)root = copy(root.root, {
        children: [
            root
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["append"])(root, root.siblings);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["substr"])(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["trim"])(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["append"])(identifier(position - 1), children);
            break;
        case 2:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["append"])(delimit(character), children);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["append"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["from"])(character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())// not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())// //
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["from"])(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Serializer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize,
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Enum.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Utility.js [ssr] (ecmascript)");
;
;
function serialize(children, callback) {
    var output = '';
    for(var i = 0; i < children.length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["LAYER"]:
            if (element.children.length) break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IMPORT"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["NAMESPACE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DECLARATION"]:
            return element.return = element.return || element.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["COMMENT"]:
            return '';
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(element.value = element.props.join(','))) return '';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Prefixer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefix",
    ()=>prefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Enum.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Utility.js [ssr] (ecmascript)");
;
;
function prefix(value, length, children) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
        // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // mask-composite
        case 4855:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value.replace('add', 'source-over').replace('substract', 'source-out').replace('intersect', 'source-in').replace('exclude', 'xor') + value;
        // tab-size
        case 4789:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MOZ"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
        // flex, flex-direction, scroll-snap-type, writing-mode
        case 6828:
        case 4268:
        case 2903:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') + (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') : '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/g, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /space-between/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // justify-self
        case 4200:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/)) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + 'grid-column-align' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["substr"])(value, length) + value;
            break;
        // grid-template-(columns|rows)
        case 2592:
        case 3360:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'template-', '') + value;
        // grid-(row|column)-start
        case 4384:
        case 3616:
            if (children && children.some(function(element, index) {
                return length = index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-end/);
            })) {
                return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["indexof"])(value + (children = children[length].value), 'span', 0) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-span:' + (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["indexof"])(children, 'span', 0) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) : +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["match"])(value, /\d+/)) + ';';
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value;
        // grid-(row|column)-end
        case 4896:
        case 4128:
            return children && children.some(function(element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-start/);
            }) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-end', '-span'), 'span ', '') + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch', 0) ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length, children) + value : value;
            }
            break;
        // grid-(column|row)
        case 5152:
        case 5920:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + a + ':' + b + f + (c ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
            });
        // position: sticky
        case 4949:
            // stick(y)?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 6) === 121) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
            break;
        // display: (flex|inline-flex|grid|inline-grid)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 18 : 11)){
                // (inline-)?fle(x)
                case 120:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
                // (inline-)?gri(d)
                case 100:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"]) + value;
            }
            break;
        // scroll-margin, scroll-margin-(top|right|bottom|left)
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'scroll-', 'scroll-snap-') + value;
    }
    return value;
}
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Middleware.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>middleware,
    "namespace",
    ()=>namespace,
    "prefixer",
    ()=>prefixer,
    "rulesheet",
    ()=>rulesheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Enum.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Utility.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Tokenizer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Serializer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Prefixer.js [ssr] (ecmascript)");
;
;
;
;
;
function middleware(collection) {
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["sizeof"])(collection);
    return function(element, index, children, callback) {
        var output = '';
        for(var i = 0; i < length; i++)output += collection[i](element, index, children, callback) || '';
        return output;
    };
}
function rulesheet(callback) {
    return function(element) {
        if (!element.root) {
            if (element = element.return) callback(element);
        }
    };
}
function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element.return) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element.return = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prefix"])(element.value, element.length, children);
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["combine"])(children = element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["match"])(value, callback = /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    value
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["assign"])(element, {
                                props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["filter"])(children, callback)
                            });
                            break;
                        // :placeholder
                        case '::placeholder':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    value
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["assign"])(element, {
                                props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["filter"])(children, callback)
                            });
                            break;
                    }
                    return '';
                });
        }
    }
}
function namespace(element) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
            element.props = element.props.map(function(value) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["combine"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["tokenize"])(value), function(value, index, children) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 0)){
                        // \f
                        case 12:
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["substr"])(value, 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(value));
                        // \0 ( + > ~
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return value;
                        // :
                        case 58:
                            if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["substr"])(children[index], index = 1, -1);
                        // \s
                        case 32:
                            return index === 1 ? '' : value;
                        default:
                            switch(index){
                                case 0:
                                    element = value;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["sizeof"])(children) > 1 ? '' : value;
                                case index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["sizeof"])(children) - 1:
                                case 2:
                                    return index === 2 ? value + element + element : value + element;
                                default:
                                    return value;
                            }
                    }
                });
            });
    }
}
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Parser.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comment",
    ()=>comment,
    "compile",
    ()=>compile,
    "declaration",
    ()=>declaration,
    "parse",
    ()=>parse,
    "ruleset",
    ()=>ruleset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Enum.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Utility.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Tokenizer.js [ssr] (ecmascript)");
;
;
;
function compile(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["dealloc"])(parse('', null, null, null, [
        ''
    ], value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["alloc"])(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["next"])()){
        // (
        case 40:
            if (previous != 108 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, length - 1) == 58) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["indexof"])(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["delimit"])(character), '&', '&\f'), '&\f', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["abs"])(index ? points[index - 1] : 0)) != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["delimit"])(character);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["whitespace"])(previous);
            break;
        // \
        case 92:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["escaping"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["caret"])() - 1, 7);
            continue;
        // /
        case 47:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["peek"])()){
                case 42:
                case 47:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["append"])(comment((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["commenter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["next"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["caret"])()), root, parent, declarations), declarations);
                    if (((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["token"])(previous || 1) == 5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["token"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["peek"])() || 1) == 5) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["substr"])(characters, -1, void 0) !== ' ') characters += ' ';
                    break;
                default:
                    characters += '/';
            }
            break;
        // {
        case 123 * variable:
            points[index++] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(characters, /\f/g, '');
                    if (property > 0 && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) - length || variable === 0 && previous === 47)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["append"])(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
                    break;
                // @ ;
                case 59:
                    characters += ';';
                // { rule/at-rule
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["append"])(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else {
                        switch(atrule){
                            // c(ontainer)
                            case 99:
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, 3) === 110) break;
                            // l(ayer)
                            case 108:
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, 2) === 97) break;
                            default:
                                offset = 0;
                            // d(ocument) m(edia) s(upports)
                            case 100:
                            case 109:
                            case 115:
                        }
                        if (offset) parse(value, reference, reference, rule && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["append"])(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
                        else parse(characters, reference, reference, reference, [
                            ''
                        ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        // :
        case 58:
            length = 1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prev"])() == 125) continue;
            }
            switch(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["from"])(character), character * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                // ,
                case 44:
                    points[index++] = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["peek"])() === 45) characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["delimit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["next"])());
                    atrule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["peek"])(), offset = length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(type = characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["identifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["caret"])())), character++;
                    break;
                // -
                case 45:
                    if (previous === 45 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["sizeof"])(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["substr"])(value, post + 1, post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["abs"])(j = points[i])), z = value; x < size; ++x)if (z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["trim"])(j > 0 ? rule[x] + ' ' + y : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replace"])(y, /&\f/g, rule[x]))) props[k++] = z;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["node"])(value, root, parent, offset === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RULESET"] : type, props, children, length, siblings);
}
function comment(value, root, parent, siblings) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["COMMENT"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["from"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["char"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["substr"])(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length, siblings) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DECLARATION"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["substr"])(value, 0, length), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["substr"])(value, length + 1, -1), length, siblings);
}
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unitlessKeys
]);
var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
;
}),
"[project]/Desktop/ITI_Tasks/task/test/node_modules/styled-components/dist/styled-components.esm.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServerStyleSheet",
    ()=>ht,
    "StyleSheetConsumer",
    ()=>ke,
    "StyleSheetContext",
    ()=>je,
    "StyleSheetManager",
    ()=>Fe,
    "ThemeConsumer",
    ()=>Xe,
    "ThemeContext",
    ()=>Je,
    "ThemeProvider",
    ()=>Ke,
    "__PRIVATE__",
    ()=>ft,
    "createGlobalStyle",
    ()=>lt,
    "css",
    ()=>ot,
    "default",
    ()=>at,
    "isStyledComponent",
    ()=>Z,
    "keyframes",
    ()=>ut,
    "styled",
    ()=>at,
    "useTheme",
    ()=>Ze,
    "version",
    ()=>u,
    "withTheme",
    ()=>pt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/tslib/tslib.es6.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Enum.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Middleware.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Serializer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/stylis/src/Parser.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [ssr] (ecmascript)");
;
;
;
;
;
var a = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", c = "active", l = "data-styled-version", u = "6.3.8", p = "/*!sc*/\n", d = "undefined" != ("TURBOPACK compile-time value", "undefined") && "undefined" != typeof document, h = void 0 === __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext, f = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== ("TURBOPACK compile-time value", "development")), m = {}, y = /invalid hook call/i, v = new Set, g = function(t, n) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (h) return;
        var o = n ? ' with the id of "'.concat(n, '"') : "", s = "The component ".concat(t).concat(o, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n", i = console.error;
        try {
            var a = !0;
            console.error = function(t) {
                for(var n = [], r = 1; r < arguments.length; r++)n[r - 1] = arguments[r];
                y.test(t) ? (a = !1, v.delete(s)) : i.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                    t
                ], n, !1));
            }, "function" == typeof __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState && __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(null), a && !v.has(s) && (console.warn(s), v.add(s));
        } catch (e) {
            y.test(e.message) && v.delete(s);
        } finally{
            console.error = i;
        }
    }
}, S = Object.freeze([]), w = Object.freeze({});
function b(e, t, n) {
    return void 0 === n && (n = w), e.theme !== n.theme && e.theme || t || n.theme;
}
var E = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "button",
    "br",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "menu",
    "meter",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "search",
    "section",
    "select",
    "slot",
    "small",
    "span",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tspan",
    "use"
]), N = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, C = /(^-|-$)/g;
function A(e) {
    return e.replace(N, "-").replace(C, "");
}
var P = /(a)(d)/gi, _ = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function I(e) {
    var t, n = "";
    for(t = Math.abs(e); t > 52; t = t / 52 | 0)n = _(t % 52) + n;
    return (_(t % 52) + n).replace(P, "$1-$2");
}
var O, D = function(e, t) {
    for(var n = t.length; n;)e = 33 * e ^ t.charCodeAt(--n);
    return e;
}, T = function(e) {
    return D(5381, e);
};
function R(e) {
    return I(T(e) >>> 0);
}
function x(e) {
    return "production" !== ("TURBOPACK compile-time value", "development") && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function j(e) {
    return "string" == typeof e && ("production" === ("TURBOPACK compile-time value", "development") || e.charAt(0) === e.charAt(0).toLowerCase());
}
var k = "function" == typeof Symbol && Symbol.for, M = k ? Symbol.for("react.memo") : 60115, V = k ? Symbol.for("react.forward_ref") : 60112, F = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}, B = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}, L = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}, z = ((O = {})[V] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, O[M] = L, O);
function G(e) {
    return ("type" in (t = e) && t.type.$$typeof) === M ? L : "$$typeof" in e ? z[e.$$typeof] : F;
    //TURBOPACK unreachable
    ;
    var t;
}
var $ = Object.defineProperty, Y = Object.getOwnPropertyNames, W = Object.getOwnPropertySymbols, q = Object.getOwnPropertyDescriptor, H = Object.getPrototypeOf, U = Object.prototype;
function J(e, t, n) {
    if ("string" != typeof t) {
        if (U) {
            var r = H(t);
            r && r !== U && J(e, r, n);
        }
        var o = Y(t);
        W && (o = o.concat(W(t)));
        for(var s = G(e), i = G(t), a = 0; a < o.length; ++a){
            var c = o[a];
            if (!(c in B || n && n[c] || i && c in i || s && c in s)) {
                var l = q(t, c);
                try {
                    $(e, c, l);
                } catch (e) {}
            }
        }
    }
    return e;
}
function X(e) {
    return "function" == typeof e;
}
function Z(e) {
    return "object" == typeof e && "styledComponentId" in e;
}
function K(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Q(e, t) {
    if (0 === e.length) return "";
    for(var n = e[0], r = 1; r < e.length; r++)n += t ? t + e[r] : e[r];
    return n;
}
function ee(e) {
    return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function te(e, t, n) {
    if (void 0 === n && (n = !1), !n && !ee(e) && !Array.isArray(e)) return t;
    if (Array.isArray(t)) for(var r = 0; r < t.length; r++)e[r] = te(e[r], t[r]);
    else if (ee(t)) for(var r in t)e[r] = te(e[r], t[r]);
    return e;
}
function ne(e, t) {
    Object.defineProperty(e, "toString", {
        value: t
    });
}
var re = ("TURBOPACK compile-time truthy", 1) ? {
    1: "Cannot create styled-component for component: %s.\n\n",
    2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
    3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
    4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
    5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
    6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
    9: "Missing document `<head>`\n\n",
    10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
    11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
    12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
    13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
    14: 'ThemeProvider: "theme" prop is required.\n\n',
    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
    16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
    17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
    18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"
} : "TURBOPACK unreachable";
function oe() {
    for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
    for(var n = e[0], r = [], o = 1, s = e.length; o < s; o += 1)r.push(e[o]);
    return r.forEach(function(e) {
        n = n.replace(/%[a-z]/, e);
    }), n;
}
function se(t) {
    for(var n = [], r = 1; r < arguments.length; r++)n[r - 1] = arguments[r];
    return ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : new Error(oe.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
        re[t]
    ], n, !1)).trim());
}
var ie = function() {
    function e(e) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    return e.prototype.indexOfGroup = function(e) {
        for(var t = 0, n = 0; n < e; n++)t += this.groupSizes[n];
        return t;
    }, e.prototype.insertRules = function(e, t) {
        if (e >= this.groupSizes.length) {
            for(var n = this.groupSizes, r = n.length, o = r; e >= o;)if ((o <<= 1) < 0) throw se(16, "".concat(e));
            this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
            for(var s = r; s < o; s++)this.groupSizes[s] = 0;
        }
        for(var i = this.indexOfGroup(e + 1), a = (s = 0, t.length); s < a; s++)this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
    }, e.prototype.clearGroup = function(e) {
        if (e < this.length) {
            var t = this.groupSizes[e], n = this.indexOfGroup(e), r = n + t;
            this.groupSizes[e] = 0;
            for(var o = n; o < r; o++)this.tag.deleteRule(n);
        }
    }, e.prototype.getGroup = function(e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for(var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++)t += "".concat(this.tag.getRule(s)).concat(p);
        return t;
    }, e;
}(), ae = 1 << 30, ce = new Map, le = new Map, ue = 1, pe = function(e) {
    if (ce.has(e)) return ce.get(e);
    for(; le.has(ue);)ue++;
    var t = ue++;
    if ("production" !== ("TURBOPACK compile-time value", "development") && ((0 | t) < 0 || t > ae)) throw se(16, "".concat(t));
    return ce.set(e, t), le.set(t, e), t;
}, de = function(e, t) {
    ue = t + 1, ce.set(e, t), le.set(t, e);
}, he = "style[".concat(a, "][").concat(l, '="').concat(u, '"]'), fe = new RegExp("^".concat(a, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), me = function(e, t, n) {
    for(var r, o = n.split(","), s = 0, i = o.length; s < i; s++)(r = o[s]) && e.registerName(t, r);
}, ye = function(e, t) {
    for(var n, r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(p), o = [], s = 0, i = r.length; s < i; s++){
        var a = r[s].trim();
        if (a) {
            var c = a.match(fe);
            if (c) {
                var l = 0 | parseInt(c[1], 10), u = c[2];
                0 !== l && (de(u, l), me(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
            } else o.push(a);
        }
    }
}, ve = function(e) {
    for(var t = document.querySelectorAll(he), n = 0, r = t.length; n < r; n++){
        var o = t[n];
        o && o.getAttribute(a) !== c && (ye(e, o), o.parentNode && o.parentNode.removeChild(o));
    }
};
function ge() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Se = function(e) {
    var t = document.head, n = e || t, r = document.createElement("style"), o = function(e) {
        var t = Array.from(e.querySelectorAll("style[".concat(a, "]")));
        return t[t.length - 1];
    }(n), s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(a, c), r.setAttribute(l, u);
    var i = ge();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
}, we = function() {
    function e(e) {
        this.element = Se(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
            if (e.sheet) return e.sheet;
            for(var t = document.styleSheets, n = 0, r = t.length; n < r; n++){
                var o = t[n];
                if (o.ownerNode === e) return o;
            }
            throw se(17);
        }(this.element), this.length = 0;
    }
    return e.prototype.insertRule = function(e, t) {
        try {
            return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e) {
            return !1;
        }
    }, e.prototype.deleteRule = function(e) {
        this.sheet.deleteRule(e), this.length--;
    }, e.prototype.getRule = function(e) {
        var t = this.sheet.cssRules[e];
        return t && t.cssText ? t.cssText : "";
    }, e;
}(), be = function() {
    function e(e) {
        this.element = Se(e), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e.prototype.insertRule = function(e, t) {
        if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t);
            return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
        }
        return !1;
    }, e.prototype.deleteRule = function(e) {
        this.element.removeChild(this.nodes[e]), this.length--;
    }, e.prototype.getRule = function(e) {
        return e < this.length ? this.nodes[e].textContent : "";
    }, e;
}(), Ee = function() {
    function e(e) {
        this.rules = [], this.length = 0;
    }
    return e.prototype.insertRule = function(e, t) {
        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, e.prototype.deleteRule = function(e) {
        this.rules.splice(e, 1), this.length--;
    }, e.prototype.getRule = function(e) {
        return e < this.length ? this.rules[e] : "";
    }, e;
}(), Ne = d, Ce = {
    isServer: !d,
    useCSSOMInjection: !f
}, Ae = function() {
    function e(e, n, r) {
        void 0 === e && (e = w), void 0 === n && (n = {});
        var o = this;
        this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, Ce), e), this.gs = n, this.names = new Map(r), this.server = !!e.isServer, !this.server && d && Ne && (Ne = !1, ve(this)), ne(this, function() {
            return function(e) {
                for(var t = e.getTag(), n = t.length, r = "", o = function(n) {
                    var o = function(e) {
                        return le.get(e);
                    }(n);
                    if (void 0 === o) return "continue";
                    var s = e.names.get(o), i = t.getGroup(n);
                    if (void 0 === s || !s.size || 0 === i.length) return "continue";
                    var c = "".concat(a, ".g").concat(n, '[id="').concat(o, '"]'), l = "";
                    void 0 !== s && s.forEach(function(e) {
                        e.length > 0 && (l += "".concat(e, ","));
                    }), r += "".concat(i).concat(c, '{content:"').concat(l, '"}').concat(p);
                }, s = 0; s < n; s++)o(s);
                return r;
            }(o);
        });
    }
    return e.registerId = function(e) {
        return pe(e);
    }, e.prototype.rehydrate = function() {
        !this.server && d && ve(this);
    }, e.prototype.reconstructWithOptions = function(n, r) {
        return void 0 === r && (r = !0), new e((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, this.options), n), this.gs, r && this.names || void 0);
    }, e.prototype.allocateGSInstance = function(e) {
        return this.gs[e] = (this.gs[e] || 0) + 1;
    }, e.prototype.getTag = function() {
        return this.tag || (this.tag = (e = function(e) {
            var t = e.useCSSOMInjection, n = e.target;
            return e.isServer ? new Ee(n) : t ? new we(n) : new be(n);
        }(this.options), new ie(e)));
        //TURBOPACK unreachable
        ;
        var e;
    }, e.prototype.hasNameForId = function(e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
    }, e.prototype.registerName = function(e, t) {
        if (pe(e), this.names.has(e)) this.names.get(e).add(t);
        else {
            var n = new Set;
            n.add(t), this.names.set(e, n);
        }
    }, e.prototype.insertRules = function(e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(pe(e), n);
    }, e.prototype.clearNames = function(e) {
        this.names.has(e) && this.names.get(e).clear();
    }, e.prototype.clearRules = function(e) {
        this.getTag().clearGroup(pe(e)), this.clearNames(e);
    }, e.prototype.clearTag = function() {
        this.tag = void 0;
    }, e;
}(), Pe = /&/g, _e = 47;
function Ie(e) {
    if (-1 === e.indexOf("}")) return !1;
    for(var t = e.length, n = 0, r = 0, o = !1, s = 0; s < t; s++){
        var i = e.charCodeAt(s);
        if (0 !== r || o || i !== _e || 42 !== e.charCodeAt(s + 1)) if (o) 42 === i && e.charCodeAt(s + 1) === _e && (o = !1, s++);
        else if (34 !== i && 39 !== i || 0 !== s && 92 === e.charCodeAt(s - 1)) {
            if (0 === r) {
                if (123 === i) n++;
                else if (125 === i && --n < 0) return !0;
            }
        } else 0 === r ? r = i : r === i && (r = 0);
        else o = !0, s++;
    }
    return 0 !== n || 0 !== r;
}
function Oe(e, t) {
    return e.map(function(e) {
        return "rule" === e.type && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(e) {
            return "".concat(t, " ").concat(e);
        })), Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = Oe(e.children, t)), e;
    });
}
function De(e) {
    var t, n, r, o = void 0 === e ? w : e, i = o.options, a = void 0 === i ? w : i, c = o.plugins, l = void 0 === c ? S : c, u = function(e, r, o) {
        return o.startsWith(n) && o.endsWith(n) && o.replaceAll(n, "").length > 0 ? ".".concat(t) : e;
    }, p = l.slice();
    p.push(function(e) {
        e.type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RULESET"] && e.value.includes("&") && (e.props[0] = e.props[0].replace(Pe, n).replace(r, u));
    }), a.prefix && p.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prefixer"]), p.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["stringify"]);
    var d = function(e, o, i, c) {
        void 0 === o && (o = ""), void 0 === i && (i = ""), void 0 === c && (c = "&"), t = c, n = o, r = new RegExp("\\".concat(n, "\\b"), "g");
        var l = function(e) {
            if (!Ie(e)) return e;
            for(var t = e.length, n = "", r = 0, o = 0, s = 0, i = !1, a = 0; a < t; a++){
                var c = e.charCodeAt(a);
                if (0 !== s || i || c !== _e || 42 !== e.charCodeAt(a + 1)) if (i) 42 === c && e.charCodeAt(a + 1) === _e && (i = !1, a++);
                else if (34 !== c && 39 !== c || 0 !== a && 92 === e.charCodeAt(a - 1)) {
                    if (0 === s) if (123 === c) o++;
                    else if (125 === c) {
                        if (--o < 0) {
                            for(var l = a + 1; l < t;){
                                var u = e.charCodeAt(l);
                                if (59 === u || 10 === u) break;
                                l++;
                            }
                            l < t && 59 === e.charCodeAt(l) && l++, o = 0, a = l - 1, r = l;
                            continue;
                        }
                        0 === o && (n += e.substring(r, a + 1), r = a + 1);
                    } else 59 === c && 0 === o && (n += e.substring(r, a + 1), r = a + 1);
                } else 0 === s ? s = c : s === c && (s = 0);
                else i = !0, a++;
            }
            if (r < t) {
                var p = e.substring(r);
                Ie(p) || (n += p);
            }
            return n;
        }(function(e) {
            if (-1 === e.indexOf("//")) return e;
            for(var t = e.length, n = [], r = 0, o = 0, s = 0, i = 0; o < t;){
                var a = e.charCodeAt(o);
                if (34 !== a && 39 !== a || 0 !== o && 92 === e.charCodeAt(o - 1)) if (0 === s) if (40 === a && o >= 3 && 108 == (32 | e.charCodeAt(o - 1)) && 114 == (32 | e.charCodeAt(o - 2)) && 117 == (32 | e.charCodeAt(o - 3))) i = 1, o++;
                else if (i > 0) 41 === a ? i-- : 40 === a && i++, o++;
                else if (a === _e && o + 1 < t && e.charCodeAt(o + 1) === _e) {
                    for(o > r && n.push(e.substring(r, o)); o < t && 10 !== e.charCodeAt(o);)o++;
                    r = o;
                } else o++;
                else o++;
                else 0 === s ? s = a : s === a && (s = 0), o++;
            }
            return 0 === r ? e : (r < t && n.push(e.substring(r)), n.join(""));
        }(e)), u = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["compile"](i || o ? "".concat(i, " ").concat(o, " { ").concat(l, " }") : l);
        a.namespace && (u = Oe(u, a.namespace));
        var d = [];
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["serialize"](u, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["middleware"](p.concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["rulesheet"](function(e) {
            return d.push(e);
        })))), d;
    };
    return d.hash = l.length ? l.reduce(function(e, t) {
        return t.name || se(15), D(e, t.name);
    }, 5381).toString() : "", d;
}
var Te = new Ae, Re = De(), xe = {
    shouldForwardProp: void 0,
    styleSheet: Te,
    stylis: Re
}, je = h ? {
    Provider: function(e) {
        return e.children;
    },
    Consumer: function(e) {
        return (0, e.children)(xe);
    }
} : __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext(xe), ke = je.Consumer, Me = h ? {
    Provider: function(e) {
        return e.children;
    },
    Consumer: function(e) {
        return (0, e.children)(void 0);
    }
} : __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext(void 0);
function Ve() {
    return h ? xe : __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(je);
}
function Fe(e) {
    if (h || !__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useMemo) return e.children;
    var t = Ve().styleSheet, n = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useMemo(function() {
        var n = t;
        return e.sheet ? n = e.sheet : e.target && (n = n.reconstructWithOptions({
            target: e.target
        }, !1)), e.disableCSSOMInjection && (n = n.reconstructWithOptions({
            useCSSOMInjection: !1
        })), n;
    }, [
        e.disableCSSOMInjection,
        e.sheet,
        e.target,
        t
    ]), o = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useMemo(function() {
        return De({
            options: {
                namespace: e.namespace,
                prefix: e.enableVendorPrefixes
            },
            plugins: e.stylisPlugins
        });
    }, [
        e.enableVendorPrefixes,
        e.namespace,
        e.stylisPlugins
    ]), s = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useMemo(function() {
        return {
            shouldForwardProp: e.shouldForwardProp,
            styleSheet: n,
            stylis: o
        };
    }, [
        e.shouldForwardProp,
        n,
        o
    ]);
    return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(je.Provider, {
        value: s
    }, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(Me.Provider, {
        value: o
    }, e.children));
}
var Be = function() {
    function e(e, t) {
        var n = this;
        this.inject = function(e, t) {
            void 0 === t && (t = Re);
            var r = n.name + t.hash;
            e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
        }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, ne(this, function() {
            throw se(12, String(n.name));
        });
    }
    return e.prototype.getName = function(e) {
        return void 0 === e && (e = Re), this.name + e.hash;
    }, e;
}();
function Le(e, t) {
    return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || e in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"] || e.startsWith("--") ? String(t).trim() : "".concat(t, "px");
}
var ze = function(e) {
    return e >= "A" && e <= "Z";
};
function Ge(e) {
    for(var t = "", n = 0; n < e.length; n++){
        var r = e[n];
        if (1 === n && "-" === r && "-" === e[0]) return e;
        ze(r) ? t += "-" + r.toLowerCase() : t += r;
    }
    return t.startsWith("ms-") ? "-" + t : t;
}
var $e = function(e) {
    return null == e || !1 === e || "" === e;
}, Ye = function(t) {
    var n = [];
    for(var r in t){
        var o = t[r];
        t.hasOwnProperty(r) && !$e(o) && (Array.isArray(o) && o.isCss || X(o) ? n.push("".concat(Ge(r), ":"), o, ";") : ee(o) ? n.push.apply(n, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
            "".concat(r, " {")
        ], Ye(o), !1), [
            "}"
        ], !1)) : n.push("".concat(Ge(r), ": ").concat(Le(r, o), ";")));
    }
    return n;
};
function We(e, t, n, r) {
    if ($e(e)) return [];
    if (Z(e)) return [
        ".".concat(e.styledComponentId)
    ];
    if (X(e)) {
        if (!X(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [
            e
        ];
        var o = e(t);
        return "production" === ("TURBOPACK compile-time value", "development") || "object" != typeof o || Array.isArray(o) || o instanceof Be || ee(o) || null === o || console.error("".concat(x(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), We(o, t, n, r);
    }
    var s;
    return e instanceof Be ? n ? (e.inject(n, r), [
        e.getName(r)
    ]) : [
        e
    ] : ee(e) ? Ye(e) : Array.isArray(e) ? Array.prototype.concat.apply(S, e.map(function(e) {
        return We(e, t, n, r);
    })) : [
        e.toString()
    ];
}
function qe(e) {
    for(var t = 0; t < e.length; t += 1){
        var n = e[t];
        if (X(n) && !Z(n)) return !1;
    }
    return !0;
}
var He = T(u), Ue = function() {
    function e(e, t, n) {
        this.rules = e, this.staticRulesId = "", this.isStatic = "production" === ("TURBOPACK compile-time value", "development") && (void 0 === n || n.isStatic) && qe(e), this.componentId = t, this.baseHash = D(He, t), this.baseStyle = n, Ae.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function(e, t, n) {
        var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n).className : "";
        if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r = K(r, this.staticRulesId);
        else {
            var o = Q(We(this.rules, e, t, n)), s = I(D(this.baseHash, o) >>> 0);
            if (!t.hasNameForId(this.componentId, s)) {
                var i = n(o, ".".concat(s), void 0, this.componentId);
                t.insertRules(this.componentId, s, i);
            }
            r = K(r, s), this.staticRulesId = s;
        }
        else {
            for(var a = D(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++){
                var u = this.rules[l];
                if ("string" == typeof u) c += u, "production" !== ("TURBOPACK compile-time value", "development") && (a = D(a, u));
                else if (u) {
                    var p = Q(We(u, e, t, n));
                    a = D(a, p + l), c += p;
                }
            }
            if (c) {
                var d = I(a >>> 0);
                if (!t.hasNameForId(this.componentId, d)) {
                    var h = n(c, ".".concat(d), void 0, this.componentId);
                    t.insertRules(this.componentId, d, h);
                }
                r = K(r, d);
            }
        }
        return {
            className: r,
            css: ("TURBOPACK compile-time truthy", 1) ? t.getTag().getGroup(pe(this.componentId)) : "TURBOPACK unreachable"
        };
    }, e;
}(), Je = h ? {
    Provider: function(e) {
        return e.children;
    },
    Consumer: function(e) {
        return (0, e.children)(void 0);
    }
} : __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext(void 0), Xe = Je.Consumer;
function Ze() {
    var e = h ? void 0 : __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(Je);
    if (!e) throw se(18);
    return e;
}
function Ke(e) {
    if (h) return e.children;
    var n = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(Je), o = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useMemo(function() {
        return function(e, n) {
            if (!e) throw se(14);
            if (X(e)) {
                var r = e(n);
                if ("production" !== ("TURBOPACK compile-time value", "development") && (null === r || Array.isArray(r) || "object" != typeof r)) throw se(7);
                return r;
            }
            if (Array.isArray(e) || "object" != typeof e) throw se(8);
            return n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, n), e) : e;
        }(e.theme, n);
    }, [
        e.theme,
        n
    ]);
    return e.children ? __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(Je.Provider, {
        value: o
    }, e.children) : null;
}
var Qe = {}, et = new Set;
function tt(e, s, i) {
    var a = Z(e), c = e, l = !j(e), p = s.attrs, d = void 0 === p ? S : p, f = s.componentId, m = void 0 === f ? function(e, t) {
        var n = "string" != typeof e ? "sc" : A(e);
        Qe[n] = (Qe[n] || 0) + 1;
        var r = "".concat(n, "-").concat(R(u + n + Qe[n]));
        return t ? "".concat(t, "-").concat(r) : r;
    }(s.displayName, s.parentComponentId) : f, y = s.displayName, v = void 0 === y ? function(e) {
        return j(e) ? "styled.".concat(e) : "Styled(".concat(x(e), ")");
    }(e) : y, N = s.displayName && s.componentId ? "".concat(A(s.displayName), "-").concat(s.componentId) : s.componentId || m, C = a && c.attrs ? c.attrs.concat(d).filter(Boolean) : d, P = s.shouldForwardProp;
    if (a && c.shouldForwardProp) {
        var _ = c.shouldForwardProp;
        if (s.shouldForwardProp) {
            var I = s.shouldForwardProp;
            P = function(e, t) {
                return _(e, t) && I(e, t);
            };
        } else P = _;
    }
    var O = new Ue(i, N, a ? c.componentStyle : void 0);
    function D(e, s) {
        return function(e, s, i) {
            var a = e.attrs, c = e.componentStyle, l = e.defaultProps, u = e.foldedComponentIds, p = e.styledComponentId, d = e.target, f = h ? void 0 : __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(Je), m = Ve(), y = e.shouldForwardProp || m.shouldForwardProp;
            "production" !== ("TURBOPACK compile-time value", "development") && __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useDebugValue && __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useDebugValue(p);
            var v = b(s, f, l) || w, g = function(e, n, r) {
                for(var o, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, n), {
                    className: void 0,
                    theme: r
                }), i = 0; i < e.length; i += 1){
                    var a = X(o = e[i]) ? o(s) : o;
                    for(var c in a)"className" === c ? s.className = K(s.className, a[c]) : "style" === c ? s.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, s.style), a[c]) : s[c] = a[c];
                }
                return "className" in n && "string" == typeof n.className && (s.className = K(s.className, n.className)), s;
            }(a, s, v), S = g.as || d, N = {};
            for(var C in g)void 0 === g[C] || "$" === C[0] || "as" === C || "theme" === C && g.theme === v || ("forwardedAs" === C ? N.as = g.forwardedAs : y && !y(C, S) || (N[C] = g[C], y || "development" !== ("TURBOPACK compile-time value", "development") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(C) || et.has(C) || !E.has(S) || (et.add(C), console.warn('styled-components: it looks like an unknown prop "'.concat(C, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
            var A = function(e, t) {
                var n = Ve(), o = e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
                return "production" !== ("TURBOPACK compile-time value", "development") && __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useDebugValue && __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useDebugValue(o.className), o;
            }(c, g), P = A.className, _ = A.css;
            "production" !== ("TURBOPACK compile-time value", "development") && e.warnTooManyClasses && e.warnTooManyClasses(P);
            var I = K(u, p);
            P && (I += " " + P), g.className && (I += " " + g.className), N[j(S) && !E.has(S) ? "class" : "className"] = I, i && (N.ref = i);
            var O = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"])(S, N);
            return h && _ ? __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("style", {
                precedence: "styled-components",
                href: "sc-".concat(p, "-").concat(P),
                children: _
            }), O) : O;
        }(T, e, s);
    }
    D.displayName = v;
    var T = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].forwardRef(D);
    return T.attrs = C, T.componentStyle = O, T.displayName = v, T.shouldForwardProp = P, T.foldedComponentIds = a ? K(c.foldedComponentIds, c.styledComponentId) : "", T.styledComponentId = N, T.target = a ? c.target : e, Object.defineProperty(T, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps;
        },
        set: function(e) {
            this._foldedDefaultProps = a ? function(e) {
                for(var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
                for(var r = 0, o = t; r < o.length; r++)te(e, o[r], !0);
                return e;
            }({}, c.defaultProps, e) : e;
        }
    }), "production" !== ("TURBOPACK compile-time value", "development") && (g(v, N), T.warnTooManyClasses = function(e, t) {
        var n = {}, r = !1;
        return function(o) {
            if (!r && (n[o] = !0, Object.keys(n).length >= 200)) {
                var s = t ? ' with the id of "'.concat(t, '"') : "";
                console.warn("Over ".concat(200, " classes were generated for component ").concat(e).concat(s, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = !0, n = {};
            }
        };
    }(v, N)), ne(T, function() {
        return ".".concat(T.styledComponentId);
    }), l && J(T, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0
    }), T;
}
function nt(e, t) {
    for(var n = [
        e[0]
    ], r = 0, o = t.length; r < o; r += 1)n.push(t[r], e[r + 1]);
    return n;
}
var rt = function(e) {
    return Object.assign(e, {
        isCss: !0
    });
};
function ot(t) {
    for(var n = [], r = 1; r < arguments.length; r++)n[r - 1] = arguments[r];
    if (X(t) || ee(t)) return rt(We(nt(S, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
        t
    ], n, !0))));
    var o = t;
    return 0 === n.length && 1 === o.length && "string" == typeof o[0] ? We(o) : rt(We(nt(o, n)));
}
function st(n, r, o) {
    if (void 0 === o && (o = w), !r) throw se(1, r);
    var s = function(t) {
        for(var s = [], i = 1; i < arguments.length; i++)s[i - 1] = arguments[i];
        return n(r, o, ot.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
            t
        ], s, !1)));
    };
    return s.attrs = function(e) {
        return st(n, r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, o), {
            attrs: Array.prototype.concat(o.attrs, e).filter(Boolean)
        }));
    }, s.withConfig = function(e) {
        return st(n, r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, o), e));
    }, s;
}
var it = function(e) {
    return st(tt, e);
}, at = it;
E.forEach(function(e) {
    at[e] = it(e);
});
var ct = function() {
    function e(e, t) {
        this.rules = e, this.componentId = t, this.isStatic = qe(e), Ae.registerId(this.componentId + 1);
    }
    return e.prototype.createStyles = function(e, t, n, r) {
        var o = r(Q(We(this.rules, t, n, r)), ""), s = this.componentId + e;
        n.insertRules(s, s, o);
    }, e.prototype.removeStyles = function(e, t) {
        t.clearRules(this.componentId + e);
    }, e.prototype.renderStyles = function(e, t, n, r) {
        e > 2 && Ae.registerId(this.componentId + e);
        var o = this.componentId + e;
        this.isStatic ? n.hasNameForId(o, o) || this.createStyles(e, t, n, r) : (this.removeStyles(e, n), this.createStyles(e, t, n, r));
    }, e;
}();
function lt(n) {
    for(var o = [], s = 1; s < arguments.length; s++)o[s - 1] = arguments[s];
    var i = ot.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
        n
    ], o, !1)), a = "sc-global-".concat(R(JSON.stringify(i))), c = new ct(i, a);
    "production" !== ("TURBOPACK compile-time value", "development") && g(a);
    var l = new WeakMap, u = function(e) {
        var n = Ve(), o = h ? void 0 : __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(Je), s = l.get(n.styleSheet);
        if (void 0 === s && (s = n.styleSheet.allocateGSInstance(a), l.set(n.styleSheet, s)), "production" !== ("TURBOPACK compile-time value", "development") && __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Children.count(e.children) && console.warn("The global style component ".concat(a, " was given child JSX. createGlobalStyle does not render children.")), "production" !== ("TURBOPACK compile-time value", "development") && i.some(function(e) {
            return "string" == typeof e && -1 !== e.indexOf("@import");
        }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), ("undefined" == ("TURBOPACK compile-time value", "undefined") || !n.styleSheet.server) && function(e, n, r, o, s) {
            if (c.isStatic) c.renderStyles(e, m, r, s);
            else {
                var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, n), {
                    theme: b(n, o, u.defaultProps)
                });
                c.renderStyles(e, i, r, s);
            }
        }(s, e, n.styleSheet, o, n.stylis), h) {
            var p = a + s, d = ("TURBOPACK compile-time truthy", 1) ? n.styleSheet.getTag().getGroup(pe(p)) : "TURBOPACK unreachable";
            if (d) {
                var f = "".concat(a, "-").concat(s);
                return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("style", {
                    key: f,
                    "data-styled-global": a,
                    precedence: "styled-components",
                    href: f,
                    children: d
                });
            }
        }
        return null;
    };
    return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].memo(u);
}
function ut(t) {
    for(var n = [], r = 1; r < arguments.length; r++)n[r - 1] = arguments[r];
    "production" !== ("TURBOPACK compile-time value", "development") && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
    var o = Q(ot.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
        t
    ], n, !1))), s = R(o);
    return new Be(s, o);
}
function pt(e) {
    var n = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].forwardRef(function(n, o) {
        var s = b(n, h ? void 0 : __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(Je), e.defaultProps);
        return "production" !== ("TURBOPACK compile-time value", "development") && void 0 === s && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(x(e), '"')), __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, n), {
            theme: s,
            ref: o
        }));
    });
    return n.displayName = "WithTheme(".concat(x(e), ")"), J(n, e);
}
var dt = /^\s*<\/[a-z]/i, ht = function() {
    function e() {
        var e = this;
        this._emitSheetCSS = function() {
            var t = e.instance.toString();
            if (!t) return "";
            var n = ge(), r = Q([
                n && 'nonce="'.concat(n, '"'),
                "".concat(a, '="true"'),
                "".concat(l, '="').concat(u, '"')
            ].filter(Boolean), " ");
            return "<style ".concat(r, ">").concat(t, "</style>");
        }, this.getStyleTags = function() {
            if (e.sealed) throw se(2);
            return e._emitSheetCSS();
        }, this.getStyleElement = function() {
            var n;
            if (e.sealed) throw se(2);
            var o = e.instance.toString();
            if (!o) return [];
            var s = ((n = {})[a] = "", n[l] = u, n.dangerouslySetInnerHTML = {
                __html: o
            }, n), i = ge();
            return i && (s.nonce = i), [
                __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, s, {
                    key: "sc-0-0"
                }))
            ];
        }, this.seal = function() {
            e.sealed = !0;
        }, this.instance = new Ae({
            isServer: !0
        }), this.sealed = !1;
    }
    return e.prototype.collectStyles = function(e) {
        if (this.sealed) throw se(2);
        return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(Fe, {
            sheet: this.instance
        }, e);
    }, e.prototype.interleaveWithNodeStream = function(e) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (this.sealed) throw se(2);
        this.seal();
        var t = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Transform, n = this.instance, r = this._emitSheetCSS, o = new t({
            transform: function(e, t, o) {
                var s = e.toString(), i = r();
                if (n.clearTag(), dt.test(s)) {
                    var a = s.indexOf(">") + 1, c = s.slice(0, a), l = s.slice(a);
                    this.push(c + i + l);
                } else this.push(i + s);
                o();
            }
        });
        if ("on" in e && "function" == typeof e.on && "pipe" in e) {
            var s = e;
            return s.on("error", function(e) {
                o.emit("error", e);
            }), s.pipe(o);
        }
        if ("pipe" in e && "function" == typeof e.pipe) return e.pipe(o);
        throw new Error("Unsupported stream type");
    }, e;
}(), ft = {
    StyleSheet: Ae,
    mainSheet: Te
};
"production" !== ("TURBOPACK compile-time value", "development") && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var mt = "__sc-".concat(a, "__");
"production" !== ("TURBOPACK compile-time value", "development") && "test" !== ("TURBOPACK compile-time value", "development") && "undefined" != ("TURBOPACK compile-time value", "undefined") && (window[mt] || (window[mt] = 0), 1 === window[mt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info."), window[mt] += 1);
;
 //# sourceMappingURL=styled-components.esm.js.map
}),
];

//# sourceMappingURL=e70d4_057d4ea0._.js.map