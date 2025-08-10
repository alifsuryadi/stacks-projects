# Full-Stack Tic-Tac-Toe Game on Stacks 🎲

[![Built with Stacks](https://img.shields.io/badge/Built_with-Stacks-5546FF.svg)](https://www.stacks.co)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Ini adalah game Tic-Tac-Toe _full-stack_ dan terdesentralisasi yang dibangun di atas blockchain Stacks. Proyek ini mencakup smart contract Clarity untuk logika game _on-chain_ dan _betting_, serta antarmuka pengguna (UI) modern yang dibangun dengan Next.js dan TypeScript untuk interaksi yang mulus.

Pemain dapat membuat game baru dengan memasang taruhan STX, bergabung dengan game yang ada, dan bermain untuk memenangkan total hadiah.

[Image of the Tic-Tac-Toe Game UI]

## ✨ Fitur Utama

### 🎯 Smart Contract (Backend)

- **Logika Game Lengkap**: Implementasi aturan Tic-Tac-Toe yang aman.
- **Sistem Taruhan**: Pemain mempertaruhkan token STX untuk bermain, dengan pemenang mengambil semua.
- **Dukungan Multiplayer**: Dirancang untuk dua pemain per game.
- **Manajemen Status Game**: Kemampuan untuk mengelola beberapa game secara bersamaan.
- **Anti-Cheat**: Mencegah langkah yang tidak valid dan memastikan giliran pemain yang benar.
- **Deteksi Kemenangan & Seri**: Penentuan pemenang atau seri secara otomatis dengan distribusi hadiah yang sesuai.

### 🎨 Frontend (UI)

- **Antarmuka Modern**: Desain yang bersih dan responsif menggunakan Next.js & TailwindCSS.
- **Integrasi Dompet**: Koneksi mudah menggunakan Stacks Connect (Hiro Wallet, Xverse, dll.).
- **Papan Game Interaktif**: Grid 3x3 yang intuitif untuk gameplay.
- **Alur Game Lengkap**: Buat game baru, lihat daftar game yang dapat dimasuki, dan mainkan game aktif.
- **Tampilan Status Real-time**: Memantau status game, giliran, dan hasil.

## 🛠️ Tumpukan Teknologi

- **Blockchain**: Stacks
- **Smart Contract**: Clarity
- **Backend Tooling**: Clarinet
- **Frontend Framework**: Next.js 15 (App Router)
- **Bahasa**: TypeScript
- **Styling**: TailwindCSS
- **Integrasi Stacks**: Stacks Connect, @stacks/transactions
- **Testing**: Vitest, Clarinet SDK

## ✅ Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (v18 atau lebih baru)
- [Clarinet](https://github.com/hirosystems/clarinet)
- [Hiro Wallet](https://www.hiro.so/wallet) (atau dompet Stacks lainnya yang kompatibel dengan Testnet)

## 🚀 Memulai

Ikuti langkah-langkah ini untuk menjalankan proyek secara lokal.

### 1. Kloning Repositori

```bash
git clone https://github.com/alifsuryadi/stacks-projects.git
cd stacks-projects
```

### 2. Pengaturan Backend (Smart Contract)

Langkah-langkah ini untuk menguji dan men-deploy smart contract Anda ke Testnet.

#### 1. Navigasi ke direktori backend:

```bash
cd tic-tac-toe-game
```

#### 2. Instal dependensi untuk pengujian:

```bash
npm install
```

#### 3. Jalankan tes untuk memverifikasi logika kontrak:

```bash
npm run test
```

#### 4. Konfigurasi untuk Deployment Testnet:

Buka `settings/Testnet.toml` dan perbarui dengan mnemonic phrase akun Testnet Anda yang didanai.

```Ini, TOML
[accounts.deployer]
mnemonic = "your 12 or 24 word testnet mnemonic phrase here"
```

#### 5. Deploy kontrak ke Stacks Testnet:

```bash
clarinet deployment apply --testnet
```

> _Penting_: Catat alamat kontrak yang telah di-deploy (misalnya, `ST...`). Anda akan memerlukannya untuk frontend.

### 3. Pengaturan Frontend (UI)

#### 1. Navigasi ke direktori frontend:

```Bash
cd ../frontend
```

#### 2. Instal dependensi:

```Bash
npm install
```

#### 3. Konfigurasi Variabel Lingkungan:

Buat file `.env.local` di root direktori frontend. Salin alamat kontrak yang Anda deploy dari langkah backend.

```
NEXT_PUBLIC_CONTRACT_ADDRESS=ST3P49R8XXQWG69S66MZASYPTTGNDKK0WW32RRJDN
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> _Catatan_: Ganti `ST3P...` dengan alamat kontrak Anda yang sebenarnya.

#### 4. Jalankan server pengembangan frontend:

```Bash
npm run dev
```

#### 5. Buka browser Anda dan navigasikan ke `http://localhost:3000` untuk melihat aplikasi beraksi!

## 🎮 Cara Bermain

### 1. Hubungkan Dompet

- Klik tombol **"Connect Wallet"** dan otorisasi koneksi dengan dompet Stacks Anda (pastikan diatur ke **Testnet**).

---

### 2. Buat Game

1. Navigasi ke halaman **"Create Game"**.
2. Masukkan jumlah **STX** yang ingin Anda pertaruhkan.
3. Klik pada kotak di papan untuk melakukan langkah pertama Anda (sebagai **'X'**).
4. Klik tombol **"Create Game"** dan konfirmasikan transaksi di dompet Anda.

---

### 3. Bergabung dengan Game

1. Di halaman utama, temukan game di bawah **"Joinable Games"**.
2. Klik game untuk masuk ke halaman detail.
3. Pilih langkah Anda (sebagai **'O'**).
4. Klik **"Join Game"** dan konfirmasikan transaksi.

---

### 4. Mainkan Game

- Para pemain akan bergiliran melakukan langkah mereka.
- Setelah setiap langkah, klik **"Play"** dan konfirmasikan transaksi.

---

### 5. Akhir Permainan

- Game berakhir ketika satu pemain menang atau papan penuh (seri).
- **Pemenang** akan secara otomatis menerima total taruhan dari kedua pemain.
- Jika seri, taruhan akan dikembalikan ke masing-masing pemain.

## 🤝 Berkontribusi

Kontribusi, isu, dan permintaan fitur sangat diterima! Jangan ragu untuk memeriksa halaman isu jika Anda ingin berkontribusi.
