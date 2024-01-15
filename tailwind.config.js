/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-neutral': '#A1BDD914',
        'btn-neutral-hover': '#A6C5E229',
        'btn-neutral-pressed': '#BFDBF847',

        'btn-primary': '#579DFF',
        'btn-primary-hover': '#85B8FF',
        'btn-primary-active': '#CCE0FF',

        'btn-danger': '#F87168',
        'btn-danger-hover': '#FD9891',
        'btn-danger-active': '#FFD5D2',

        'btn-warning': '#F5CD47',
        'btn-warning-hover': '#E2B203',
        'btn-warning-active': '#CF9F02',

        'btn-subtle': '#00000000',
        'btn-subtle-hover': '#A1BDD914',
        'btn-subtle-active': '#A6C5E229',

        // text colors
        'link-primary': '#579DFF',
        'link-primary-active': '#85B8FF',
        'default': '#B6C2CF',
        'inverse': '#1D2125',
        'subtle': '##9FADBC',
        'neutral': '#091E420F',
        'success': '#216E4E',
        'bg-success': '#DCFFF1',
      }
    },
  },
  plugins: [],
}

