/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'xs':'575px' //사용 xs:넣기
      },
      colors: {
        'trip-blue': '#0051D3',
        'trip-yellow': '#FFDA00',
        'trip-white': '#FFFFFF',
        'trip-gray1': '#B5B5B5',
        'trip-gray2': '#D9D9D9',
        'trip-gray3': '#777777',
        'trip-black': '#111111',
        'trip-skyblue': '#D2E4FF',
        'trip-red': '#FF6A6A',
        'trip-sun': '#FF7F50',
        'trip-green': '#3EB489',
        'bg-gray': '#f3f3f3',
      },
      fontSize: {
        'main-slide': '4rem',
        'huge-text': '3rem',
        'big-text': '2.5rem',
        'semibig-text': '2rem',
        'mediumbig-text': '1.75rem',
        'medium-text': '1.5rem',
        'semismall-text': '1.25rem',
        'small-text': '1rem',
        'desc-text': '0.875rem',
        'm-small-text': '0.75rem',
      },
      fontFamily: {
        'theJamsil-thin': ['TheJamsil100'],
        'theJamsil-light': ['TheJamsil300'],
        'theJamsil-regular': ['TheJamsil400'],
        'theJamsil-medium': ['TheJamsil500'],
        'theJamsil-bold': ['TheJamsil700'],
        'theJamsil-extrabold': ['TheJamsil800'],
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      boxShadow: {
        'shadow': '1px 1px 5px rgba(0, 0, 0, 0.25)',
      },
      maxWidth: {
        'container': '90rem',
        'container-m': '48rem',
      },
      padding: {
        'container-x': '0 1.25rem',
        'container-m-x': '0 0.5rem',
      }
    },
  },
  plugins: [],
}
