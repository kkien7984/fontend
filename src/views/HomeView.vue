<script setup>
document.title = "Trang chủ"
import { ref } from 'vue';
import TypeComicView from '@/components/home/ForYou.vue';
const activeKey = ref('1');
</script>
<template>
  <div class="sub-menu">
    <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1">
          <template #tab>
            <span>
              Facebook
            </span>
          </template>
          <TypeComicView :type="0" />
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #tab>
            <span>
              Tiktok
            </span>
          </template>
          <TypeComicView :type="1"/>
        </a-tab-pane>
        <a-tab-pane key="3">
          <template #tab>
            <span>
              Youtube
            </span>
          </template>
          <TypeComicView :type="2"/>
        </a-tab-pane>
        <a-tab-pane key="4">
          <template #tab>
            <span>
              Khác
            </span>
          </template>
          <TypeComicView :type="3" />
        </a-tab-pane>
      </a-tabs>
  </div>
</template>
<style scoped>
.sub-menu {
  /* max-width: 600px; */
  /* margin: auto; */
}
</style>