 import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow Render to detect the open port
    port: process.env.PORT || 4173, // Use Render's provided PORT
  },
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
  
// })
