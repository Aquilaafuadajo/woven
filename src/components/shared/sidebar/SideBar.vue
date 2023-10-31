<template>
  <nav class="flex flex-col w-64 h-screen overflow-y-scroll px-4 py-8 sidebar">
    <div class="flex items-center p-3 rounded-md bg-red-700 text-white h-max w-full mb-9">
      <UserAvatar class="mr-2" />
      <div class="flex flex-col justify-between font-medium">
        <p class="text-xs">Gamma Spark Updated</p>
        <p class="text-[0.625rem]">sammyfish007@gmail.com</p>
      </div>
    </div>
    <ul class="flex flex-col">
      <SideBarItem
        @onLinkClick="$emit('onLinkClick')"
        to="/"
        label="Get Started"
        :iconComponent="GlobeIcon"
      />
      <SideBarItem
        @onLinkClick="$emit('onLinkClick')"
        to="/dashboard"
        label="Dashboard"
        :iconComponent="FourSquaresIcon"
      />
    </ul>
    <div v-for="(item, idx) in sidebarConfig" :key="idx">
      <p class="ml-4 mt-8 mb-6 capitalize text-xs font-black text-black-300">{{ item.title }}</p>
      <ul class="flex flex-col">
        <SideBarItem
          v-for="(group, id) in item.group"
          :key="id"
          :to="group.path"
          :label="group.title"
          :iconComponent="group.icon"
          @onLinkClick="$emit('onLinkClick')"
        />
      </ul>
    </div>
    <ul class="flex flex-col mt-14">
      <SideBarItem
        @onLinkClick="$emit('onLinkClick')"
        to="/settings"
        label="Settings"
        :iconComponent="SettingsIcon"
      />
      <SideBarItem
        @onLinkClick="$emit('onLinkClick')"
        to="/logout"
        label="Log Out"
        :iconComponent="LogOutIcon"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import GlobeIcon from '@/assets/icons/GlobeIcon.vue'
import UserAvatar from '@/assets/icons/UserAvatar.vue'
import FourSquaresIcon from '@/assets/icons/FourSquaresIcon.vue'
import SettingsIcon from '@/assets/icons/SettingsIcon.vue'
import LogOutIcon from '@/assets/icons/LogOutIcon.vue'
import SideBarItem from './SideBarItem.vue'
import { sidebarConfig } from './sidebarConfig.ts'

defineEmits(['onLinkClick'])
</script>

<style scoped>
.sidebar {
  background: linear-gradient(
      241deg,
      rgba(204, 255, 250, 0.25) -2.96%,
      rgba(255, 252, 245, 0.25) 44.27%,
      rgba(255, 229, 233, 0.25) 89.58%
    ),
    #fff;
}
</style>
