<template>
    <div class="hello">
        <h1>{{ greeting }}, {{ name }}!</h1>
        <button @click="handleClick">Click Me</button>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, ref } from 'vue'

// Define props
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    greeting: {
        type: String,
        default: 'Hello'
    }
})

// Define emits
const emit = defineEmits(['clicked'])

// Local state
const counter = ref(0)

// Methods
const handleClick = () => {
    counter.value++
    emit('clicked', counter.value)
}
</script>
<style scoped>
.hello {
    text-align: center;
    margin-top: 20px;
}

.hello h1 {
    font-size: 2rem;
    color: #42b983;
}

.hello button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #42b983;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.hello button:hover {
    background-color: #2c8e6f;
}
</style>