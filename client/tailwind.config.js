/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    // Add additional paths to your source files here
  ],
  content: ['./src/*.js'],
  theme: {
    extend: {},
  },
  plugins: [],
}

