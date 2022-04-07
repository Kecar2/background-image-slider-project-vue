  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  Vue.createApp({
    data() {
      return {
        index: 0
      }
    },

    methods: {

      leftClick() {

      this.index--;

      if (this.index == -1) {
      this.index = pictures.length - 1;
      
      }
      },

      rightClick() {

      this.index++;

      if (this.index == pictures.length) {
      this.index = 0;

        }
      }
   
    },

    computed: {
      getUrl() {
        return `url(../img/${pictures[this.index]}.jpeg)`; 
      }
    }
  }).mount('#app')

