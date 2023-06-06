import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Địa chỉ IP của máy tính
    port: 5173, // Cổng mà máy chủ Vite sẽ lắng nghe
    origin: 'http://192.168.0.115:5173',
  }
})
