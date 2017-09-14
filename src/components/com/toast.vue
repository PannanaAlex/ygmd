<template>
  <div>
    <transition name="slide">
      <div class="notification fixed"
           v-if="myShow"
           :style="setStyle">
        <div class="content" v-html="myOptions.content">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myOptions: this.options,
        myShow: this.show,
        myHide:false
      }
    },
    props: {
      'options': {
        type: Object,
        default: {}
      },
      'show': {
        type: Boolean,
        default: false
      }
    },
    computed: {
      setStyle () {
        return {
          color: this.myOptions.textColor || '#fff',
          background: this.myOptions.backgroundColor || 'rgba(252,80,80,.9)'
        }
      }
    },
    methods: {
        countdown () {
            setTimeout(() => {
                this.$emit('hideToast')
            },2000)
        }
    },
    watch: {
      options () {
        this.myOptions = this.options
        this.countdown()
      },
      show (val) {
        this.myShow = val
      }
    },
  }
</script>

<style scoped>
.slide-transition {
    transition: all .3s ease;
    transform: translateZ(0);
}
.slide-active-enter,
.slide-active-leave {
    transform: translate3d(0, -100%, 0);
}

.slide-enter-active, .slide-leave-active {
    transition: all .3s ease;
    transform: translateZ(0);
}
.slide-enter, .slide-leave-active {
    transform: translate3d(0, -100%, 0);
}
.notification {
    width: 100%;
    height:1rem;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:.45rem;
    z-index: 10000;
}
.notification div{
    color:#fff;
}
.count-leave {
    transform: translate3d(-100%, 0, 0);
}
</style>
