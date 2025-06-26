<template>
    <div v-if="hasError">
        <p class="text-red-600">Something went wrong.</p>
    </div>
    <slot v-else />
</template>

<script setup>
    import { ref, onErrorCaptured } from 'vue';

    const hasError = ref(false);

    onErrorCaptured((err) => {
    console.error('Caught error:', err);
    hasError.value = true;
    return false;
    });
</script>