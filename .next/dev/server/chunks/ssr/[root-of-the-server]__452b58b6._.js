module.exports = [
"[project]/Desktop/ITI_Tasks/task/test/pages/login.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// pages/login.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$react$2d$hook$2d$form$29$__ = __turbopack_context__.i("[externals]/react-hook-form [external] (react-hook-form, esm_import, [project]/Desktop/ITI_Tasks/task/test/node_modules/react-hook-form)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/Desktop/ITI_Tasks/task/test/node_modules/axios)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/styled-components/dist/styled-components.esm.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$react$2d$hook$2d$form$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$axios$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$react$2d$hook$2d$form$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$axios$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const FormContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    max-width: 400px;
    margin: auto;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const Button = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].button`
    width: 100%;
    padding: 10px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #005bb5;
    }
`;
const Login = ()=>{
    const { register, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$react$2d$hook$2d$form$29$__["useForm"])();
    const onSubmit = async (data)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$axios$29$__["default"].post(`${process.env.BASE_URL}/auth/login`, {
                email: data.email,
                password: data.password
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.name);
            // إعادة التوجيه إلى لوحة التحكم
            window.location.href = '/dashboard';
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.error('Validation errors:', error.response.data); // This is key
            } else if (error.response && error.response.status === 404) {
                console.error('errors:', error.response.data); // This is key
            } else {
                console.error('Other error:', error.message);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FormContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "تسجيل الدخول"
            }, void 0, false, {
                fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/login.js",
                lineNumber: 61,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                        ...register('email'),
                        type: "email",
                        placeholder: "البريد الإلكتروني",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/login.js",
                        lineNumber: 63,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                        ...register('password'),
                        type: "password",
                        placeholder: "كلمة المرور",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/login.js",
                        lineNumber: 64,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                        type: "submit",
                        children: "تسجيل الدخول"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/login.js",
                        lineNumber: 65,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/login.js",
                lineNumber: 62,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/login.js",
        lineNumber: 60,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Login;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__452b58b6._.js.map