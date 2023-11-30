---
title: Membuat web component dengan Vue 3
description: Membahas cara membuat web component dengan menggunakan Vue 3.
date: 2023-06-30T12:14:19.204Z
preview: ""
draft: false
tags:
  - vue
  - web component
  - frontend
categories:
  - programming
type: blog
keywords:
  - vue
  - web component
layout: article
cover: /articles/web-component-vue3.png
---
Pada artikel ini, kita akan membahas cara membuat web component dengan menggunakan Vue 3. Web component adalah sebuah teknologi yang memungkinkan pengembang untuk membuat komponen UI yang dapat digunakan di berbagai platform, termasuk website, aplikasi mobile, dan bahkan aplikasi desktop. Vue 3 adalah versi terbaru dari framework Vue yang telah banyak digunakan oleh pengembang frontend.

Sebelum kita memulai, pastikan bahwa kamu sudah menginstal Vue 3 dan memiliki pengetahuan dasar tentang Vue dan HTML.

Langkah pertama yang harus kamu lakukan adalah membuat sebuah proyek Vue baru. Kamu bisa menggunakan Vue CLI untuk membuat proyek baru dengan menjalankan perintah berikut:

```sh
vue create my-component
```

Setelah proyek terbuat, masuk ke direktori proyek dengan menjalankan perintah:

```sh
vue create my-component
```

Langkah selanjutnya adalah membuat sebuah komponen Vue. Buat file baru dengan nama MyComponent.vue di dalam direktori src/components. Isi file tersebut dengan kode berikut:

```vue
<template>
	<div>    
    	<h1>{{ title }}</h1>    
        <p>{{ content }}</p>  
   	</div>
</template>

<script>
export default { 
	name: 'MyComponent', 
    props: { 
    	title: { type: String, required: true }, 
    	content: { type: String, required: true } 
    } 
}    
</script>
```

Kode di atas adalah sebuah komponen Vue sederhana yang memiliki dua properti, yaitu title dan content. Properti tersebut akan digunakan untuk menampilkan judul dan isi dari komponen.

Setelah komponen selesai dibuat, langkah selanjutnya adalah membuat web component. Untuk membuat web component, kita perlu menambahkan sedikit konfigurasi di dalam file main.js. Tambahkan kode berikut di dalam file tersebut:

```ts
import { createApp } from 'vue';
import MyComponent from './components/MyComponent.vue';

const app = createApp(MyComponent); 

app.config.isCustomElement = tag => tag.startsWith('my-'); 

app.mount('#app');
```

Kode di atas akan membuat sebuah instance Vue dan menjadikan MyComponent sebagai komponen utama. Kemudian, kita menambahkan konfigurasi isCustomElement yang akan mendefinisikan tag HTML yang akan digunakan untuk menampilkan komponen. Di sini, tag HTML yang digunakan adalah my-component.

Setelah konfigurasi selesai ditambahkan, kita perlu mengubah file MyComponent.vue agar dapat digunakan sebagai web component. Tambahkan kode berikut di dalam file tersebut:

```ts
import { defineCustomElement } from 'vue';
import MyComponent from './MyComponent.vue';

const MyComponentElement = defineCustomElement(MyComponent);

window.customElements.define('my-component', MyComponentElement);
```

Kode di atas akan mengekspor MyComponent sebagai custom element dengan menggunakan defineCustomElement(). Kemudian, kita mendaftarkan custom element tersebut dengan tag HTML my-component menggunakan window.customElements.define().

Sekarang, kita telah berhasil membuat sebuah web component dengan Vue 3. Web component tersebut dapat digunakan di berbagai platform, termasuk website, aplikasi mobile, dan bahkan aplikasi desktop.

Untuk menguji web component yang telah dibuat, kamu bisa membuat file HTML sederhana yang memuat web component tersebut. Buat file baru dengan nama index.html di dalam direktori public dan isi dengan kode berikut:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Component</title>
    <script src="./dist/my-component.js"></script>
  </head>
  <body>
    <my-component title="Hello World" content="Lorem ipsum dolor sit amet"></my-component>
  </body>
</html>
```

Kode di atas memuat file JavaScript dari web component yang telah kita buat sebelumnya. Kemudian, kita menggunakan tag HTML my-component untuk menampilkan komponen tersebut di dalam halaman web.

Untuk menjalankan aplikasi, jalankan perintah berikut di dalam terminal:

```sh
npm run serve
```

Setelah aplikasi dijalankan, buka halaman http://localhost:8080/ di browser dan kamu akan melihat web component yang telah dibuat.

Dalam artikel ini, kita telah membahas cara membuat web component dengan Vue 3. Dengan teknologi ini, pengembang dapat membuat komponen UI yang dapat digunakan di berbagai platform dengan mudah dan efisien. Semoga artikel ini bermanfaat bagi kamu yang ingin mempelajari Vue 3 dan web component.

