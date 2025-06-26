<template>
  <div v-if="hasError">
    <p class="text-red-500">Something went wrong.</p>
    <button @click="resetError" class="mt-2 text-blue-500 underline">Try again</button>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue';
const hasError = ref(false);
function resetError() {
  hasError.value = false;
  window.location.reload();
}
onErrorCaptured((err) => {
  console.error('Caught error:', err);
  hasError.value = true;
  return false;
});
</script>