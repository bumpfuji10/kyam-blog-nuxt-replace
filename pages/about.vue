<template>
  <div class="grid">
    <div class="mx-auto">
      <img src="/public/img/me_image.png" alt="" class="rounded-full max-h-48 w-auto border-4 border-black bg-gray-400">
    </div>
    <div class="flex justify-center text-left" style="font-size: 10px;">
      <pre>
        {
          "name": "Yo Kamada",
          "age": 28,
          "hometown": "Shimane",
          "liveIn": "Yokohama",
          "job": "Web Engineer",
          "jobSkills": {
            "languages": ["Ruby", "JavaScript"],
            "frameworks": ["Ruby on Rails", "Vue.js"],
            "others": ["Git", "SQL", "Docker"]
          },
          "experienced": {
            "languages": ["PHP", "TypeScript"],
            "frameworks": ["Laravel"],
            "others": ["GraphQL"]
          },
          "hobby": "Gymnastics"
        }
      </pre>
    </div>
  </div>
</template>
