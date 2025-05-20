export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'], // ຖ້າໃຊ້ React
          // ຫຼື ສຳລັບ Vue:
          // 'vendor': ['vue', 'vue-router'],

          // ສາມາດເພີ່ມ dependencies ອື່ນໆທີ່ໃຫຍ່ໄດ້
          // 'ui': ['material-ui', '@mui/material']
        }
      }
    }
  }
}