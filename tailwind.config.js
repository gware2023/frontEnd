/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'login-logo': "#127369",
                'login-bg': "#BFBFBF",
                'login-bg2': "#eee",
                'login-form-title': '#127369',
                'login-form-title-border': '#10403B'
            }
        },
    },
    plugins: [],
}

