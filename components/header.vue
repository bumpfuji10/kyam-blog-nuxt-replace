<template>
  <div>
    <header class="py-4">
      <nav class="flex gap-4 items-center">
        <li class="list-none">
          <nuxt-link to="/">
            <img src="/public/img/sphere.png" alt="ブログのロゴ" style="width: 32px">
          </nuxt-link>
        </li>

        <li class="list-none p-2 rounded-full bg-gray-300 hover:bg-orange">
          <nuxt-link to="/" class="text-xl font-bold">
            Kyam Blog
          </nuxt-link>
        </li>

        <li class="list-none p-2 rounded-full bg-gray-300">
          <nuxt-link to="/about" class="text-xl font-bold">
            about
          </nuxt-link>
        </li>
      </nav>
    </header>
  </div>
</template>
