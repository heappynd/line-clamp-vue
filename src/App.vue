<template>
  <div class="box">
    <LineClampVue
      :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id ultricies lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc. Sed euismod, nunc id ultricies lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.'"
      :max-lines="1"
    />
  </div>
  <LineClampVue
    :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id ultricies lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc. Sed euismod, nunc id ultricies lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.'"
    :max-lines="2"
  />
</template>

<script setup lang="ts">
import LineClampVue from "./packages/LineClampVue/LineClampVue.vue";
</script>

<style scoped>
.box {
  width: 50%;
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
