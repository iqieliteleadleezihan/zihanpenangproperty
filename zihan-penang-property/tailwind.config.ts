import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink:'#111815', paper:'#F4F2EC', mist:'#D9DED8', sage:'#B9C8B2', acid:'#D8F56C' }, boxShadow:{soft:'0 20px 60px rgba(0,0,0,.12)'} } },
  plugins: []
} satisfies Config;
