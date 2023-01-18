# Guestbook

## Project setup
```
npm install
```

### Run server
```
npm start
```

### Url path guest
Mengambil semua data
```
GET /guest
```
Mengambil data berdasarkan id
```
GET /guest/:id
```
Menambah data
```
POST /guest
```

### Url path admin
Register
```
POST /admin?action=sigup
```
Login
```
POST /admin?action=sigin
```
Mengambil semua data
```
GET /admin
```
Mengambil data berdasarkan id
```
GET /admin/:id
```
Menghapus data
```
DELETE /admin/:id
```