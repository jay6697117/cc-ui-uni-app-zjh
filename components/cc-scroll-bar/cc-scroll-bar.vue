<template>
  <view class="cc-scroll-bar">
    <view class="cc-scroll-bar-left" :style="{ width: leftWidth + 'rpx' }">
      <view
        v-for="(item, index) in list"
        :key="index"
        class="cc-scroll-bar-left-scroll-item"
        :class="{ 'cc-scroll-bar-left-scroll-item-active': activeIndex === index }"
        :style="{ background: leftBgColor }"
        @click="clickLeft(item, index)"
      >
        <view
          class="cc-scroll-bar-left-scroll-item-line"
          :style="{ width: lineWidth + 'rpx', height: lineHeight + 'rpx', background: lineBgColor }"
          v-if="activeIndex === index"
        ></view>
        <view class="cc-scroll-bar-left-scroll-item-name">{{ item.name }}</view>
      </view>
    </view>
    <template v-for="(item, index) in list">
      <view class="cc-scroll-bar-right" :key="index" v-if="activeIndex === index">
        <view class="cc-scroll-bar-right-scroll-wrap">
          <view class="cc-scroll-bar-right-scroll-name" :key="index">{{ item.name }}</view>
          <view class="cc-scroll-bar-right-scroll-content">
            <view class="cc-scroll-bar-right-scroll-content-item" v-for="(item1, index1) in item.goods" :key="index1">
              <view class="cc-scroll-bar-right-scroll-content-item-img"><image :src="item1.img" style="width: 100%;height: 100%;"></image></view>
              <view class="cc-scroll-bar-right-scroll-content-item-name">{{ item1.name }}</view>
            </view>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    list: {
      type: Array,
      required: true
    },
    // 左侧宽度
    leftWidth: {
      type: [Number, String],
      default: 120
    },
    // 左侧宽度
    leftHeight: {
      type: [Number, String],
      default: 80
    },
    // 左侧背景颜色
    leftBgColor: {
      type: String,
      default: '#f6f6f6'
    },
    // 左侧滑块宽度
    lineWidth: {
      type: [Number, String],
      default: 8
    },
    // 左侧滑块高度
    lineHeight: {
      type: [Number, String],
      default: 24
    },
    // 左侧背景颜色
    lineBgColor: {
      type: String,
      default: '#0081ff'
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    clickLeft(item, index) {
      this.activeIndex = index
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-scroll-bar {
  display: flex;
  height: 100vh;
  &-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-scroll {
      height: 100vh;
      &-item {
        width: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 12px;
        color: #444;
        &-line {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &-active {
          font-weight: 500;
          color: #000;
          background: #fff !important;
        }
      }
    }
  }
  &-right {
    position: relative;
    height: 100vh;
    flex: 1;
    &-scroll {
      &-wrap {
        margin-bottom: 14rpx;
        height: 100vh;
      }
      &-name {
        font-size: 14px;
        font-weight: 500;
        background: #fff;
        padding: 12rpx;
      }
      &-content {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        background: #fff;
        &-item {
          width: 33.3333%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          margin: 40rpx 0;
          &-img {
            width: 100rpx;
            height: 100rpx;
          }
        }
      }
    }
  }
}
</style>
