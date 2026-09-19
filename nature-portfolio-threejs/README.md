# 9826.Florenzi - 3D Nature Portfolio

Trang web Portfolio cá nhân 3D phong cách thiên nhiên chân thật (Realistic Nature / Forest Biome) dành cho **Nguyễn Hữu Nghĩa (AI Engineer)**.

## 📁 Cấu trúc file
- `index.html`: Cấu trúc HTML5, import-map Three.js và nội dung 4 phân cảnh.
- `style.css`: Giao diện Glassmorphism mờ phủ rêu, hiệu ứng neon đom đóm, thanh cuộn mượt mà.
- `main.js`: Hệ thống Three.js 3D (Địa hình đồi núi thủ tục, rừng thông, đàn đom đóm phát sáng, Scrollytelling camera).

## 🚀 Hướng dẫn chạy thử trên máy (Local)
Vì `main.js` dùng ES Module (`type="module"`), bạn cần chạy thông qua một Web Server nhỏ:
- Cách 1 (VS Code): Cài extension **Live Server**, bấm chuột phải vào `index.html` -> chọn **Open with Live Server**.
- Cách 2 (Python): Mở terminal trong thư mục và gõ:
  ```bash
  python -m http.server 8000
  ```
  Sau đó mở trình duyệt truy cập: `http://localhost:8000`

## 🌐 Hướng dẫn Push lên GitHub Pages
1. Tạo một repository mới trên GitHub (ví dụ: `nature-portfolio` hoặc `<username>.github.io`).
2. Giải nén file zip này và tải toàn bộ file lên thư mục gốc (root) của repo.
3. Vào **Settings** > **Pages** trên GitHub:
   - Branch: `main` (hoặc `master`)
   - Folder: `/ (root)`
   - Nhấn **Save**.
4. Chờ 1 - 2 phút, website của bạn sẽ online trực tiếp!
