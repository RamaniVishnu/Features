<template>
  <div>
    <input placeholder="enter color" @input="throttledFetch" v-model="searchQuery"/>
    <div v-if="searchQuery.length > 0" v-for="color in inputColors" :key="color">
      <li>{{ color }}</li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      colorsList: ['red', 'black', 'yellow', 'orange', 'blue', 'brown', 'white'],
      inputColors: [],
      throttledFetch: null
    };
  },
  created() {
    this.throttledFetch = this.throttle(this.fetchValues, 10000); // Adjust the throttle time as needed (in milliseconds)
  },
  methods: {
    throttle(func, limit) {
      let inThrottle;
      return function() {
        const context = this,
              args = arguments;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },
    fetchValues() {
      console.log("called....", this.searchQuery);
      this.inputColors = this.colorsList.filter(color => color.toLowerCase().includes(this.searchQuery.toLowerCase()));
      console.log("called....", this.inputColors);
    }
  }
};
</script>
