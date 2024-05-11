<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps<{
  maxLines: number;
  text: string;
}>();

const isTextClamped = (el: HTMLElement) => {
  return el.scrollHeight > el.clientHeight;
};

const textEl = ref<HTMLElement | null>(null);

onMounted(() => {
  console.log(isTextClamped(textEl.value!));
});
</script>

<template>
  <div
    ref="textEl"
    :style="{
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: maxLines,
    }"
    :title="text"
  >
    {{ text }}
  </div>
</template>
