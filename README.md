# Hello Vue Component

A simple and reusable Vue 3 component that greets the user. This component uses the `<script setup>` syntax and is designed to be easily integrated into any Vue 3 project.

## Features

- Displays a customizable greeting message.
- Button click event with a click counter.
- Scoped styles for easy integration.

## Installation

You can install this component via npm:

```bash
npm install @medelm/hello-vue-component
```

## Usage

First, import and register the component in your Vue application:

```javascript
// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import Hello from 'hello-vue-component';

const app = createApp(App);
app.component('Hello', Hello);
app.mount('#app');
```

Then, use the component in your template:

```html
<template>
  <div id="app">
    <Hello name="Vue Developer" @clicked="handleClick" />
    <p>Total Clicks: {{ clickCount }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const clickCount = ref(0);

const handleClick = (count) => {
  clickCount.value = count;
  console.log(`Button clicked ${count} times`);
}
</script>
```

## Props

The component accepts the following props:

- `name` (String, required): The name to be displayed in the greeting.
- `greeting` (String, optional, default: 'Hello'): The greeting message.

## Emits

The component emits the following events:

- `clicked` (number): Emitted every time the button is clicked, passing the current click count as an argument.

## Example

Here's an example of how to use the component:

```html
<template>
  <div>
    <Hello name="World" greeting="Hi" @clicked="onClicked" />
    <p>Total Clicks: {{ clickCount }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const clickCount = ref(0);

const onClicked = (count) => {
  clickCount.value = count;
  console.log(`Button clicked ${count} times`);
}
</script>
```

## Styling

The component comes with scoped styles, so it will not affect other parts of your application. The styles can be customized by modifying the component's scoped CSS.

## License

MIT
