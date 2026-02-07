module.exports = [
"[externals]/console [external] (console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("console", () => require("console"));

module.exports = mod;
}),
"[project]/Desktop/ITI_Tasks/task/test/pages/register.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// pages/register.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$react$2d$hook$2d$form$29$__ = __turbopack_context__.i("[externals]/react-hook-form [external] (react-hook-form, esm_import, [project]/Desktop/ITI_Tasks/task/test/node_modules/react-hook-form)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/Desktop/ITI_Tasks/task/test/node_modules/axios)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ITI_Tasks/task/test/node_modules/styled-components/dist/styled-components.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$console__$5b$external$5d$__$28$console$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/console [external] (console, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$react$2d$hook$2d$form$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$axios$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$react$2d$hook$2d$form$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$axios$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
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
const Register = ()=>{
    const { register, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$react$2d$hook$2d$form$29$__["useForm"])();
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const onSubmit = async (data)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$ITI_Tasks$2f$task$2f$test$2f$node_modules$2f$axios$29$__["default"].post(`${("TURBOPACK compile-time value", "https://tinytales.trendline.marketing/api")}/auth/register`, {
                name: data.fullName,
                email: data.email,
                mobile: data.phoneNumber,
                password: data.password,
                password_confirmation: data.passwordConfirmation,
                mobile_country_code: data.countryCode
            });
            console.log(response.data);
            localStorage.setItem('userName', response.data.data.name);
            // إعادة التوجيه إلى صفحة تسجيل الدخول
            window.location.href = '/verify';
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.message); // This is key
            } else if (error.response && error.response.status === 400) {
                setErrors(error.response.data.message); // This is key
            } else {
                setErrors(error.message);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FormContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "تسجيل مستخدم جديد"
            }, void 0, false, {
                fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                lineNumber: 70,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            errors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    color: 'red',
                    marginBottom: '10px',
                    width: '100%'
                },
                children: Object.keys(errors).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: Array.isArray(errors[key]) ? errors[key][0] : errors[key]
                    }, key, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                        lineNumber: 74,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                lineNumber: 72,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                        ...register('fullName'),
                        placeholder: "الاسم الكامل",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                        lineNumber: 84,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                        ...register('email'),
                        type: "email",
                        placeholder: "البريد الإلكتروني",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                        lineNumber: 85,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                        ...register('phoneNumber'),
                        placeholder: "رقم الهاتف",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                        lineNumber: 86,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                        ...register('password'),
                        type: "password",
                        placeholder: "كلمة المرور",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                        lineNumber: 87,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                        ...register('passwordConfirmation'),
                        type: "password",
                        placeholder: "تأكيد كلمة المرور",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                        lineNumber: 88,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                        ...register('countryCode'),
                        placeholder: "رمز الدولة",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                        lineNumber: 89,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                        type: "submit",
                        children: "تسجيل"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                        lineNumber: 90,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
                lineNumber: 83,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/ITI_Tasks/task/test/pages/register.js",
        lineNumber: 69,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Register;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f7221ecf._.js.map