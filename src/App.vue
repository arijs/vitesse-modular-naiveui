<script setup lang="ts">
import { ptBR, datePtBR } from 'naive-ui'
import { ApolloClients } from '@vue/apollo-composable'
import { apolloClient, otherApiClient } from './common/ApolloClient'
import { isDark, preferredDark } from '~/common/composables'

// https://v4.apollo.vuejs.org/
provide(ApolloClients, {
  default: apolloClient,
  otherApi: otherApiClient,
})

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse Modular NaiveUI',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template with modular architecture design' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

const refMsgTargetEl = ref<any>()
</script>

<template>
  <n-config-provider :locale="ptBR" :date-locale="datePtBR">
    <n-loading-bar-provider>
      <n-message-provider :to="refMsgTargetEl">
        <n-notification-provider>
          <n-dialog-provider>
            <router-view />
            <div ref="refMsgTargetEl" class="app-msg-target"></div>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
