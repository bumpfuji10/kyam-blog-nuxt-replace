<template>
  <div class="grid">
    <div class="mx-auto">
      <img src="/img/me_image.png" alt="" class="rounded-full max-h-48 w-auto border-4 border-black bg-gray-400">
    </div>
    <div class="text-left text-xl flex justify-center json-info">
      <pre style="font-size: 15px;">
        {
          "name": "Yo Kamada",
          "age": 28,
          "hometown": "Shimane",
          "liveIn": "Yokohama",
          "job": "Web Engineer",
          "jobSkills": {
            "languages": [
              "Ruby",
              "JavaScript"
            ],
            "frameworks": [
              "Ruby on Rails",
              "Vue.js"
            ],
            "others": [
              "Git",
              "SQL",
              "Docker"
            ]
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

<style scoped>

.json-info {
  font-size: 14px;
}

@media (max-width: 768px) {
  .json-info {
    font-size: 12px;
  }
}


@media (max-width: 480px) {
  .json-info {
    font-size: 10px;
  }
}
</style>
