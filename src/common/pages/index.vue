<script setup lang="ts">
// graphql example
import { useExampleQuery } from '~/common/services/useExample.query'
import { useOtherApiQuery } from '../services/useOtherApi.query'

const { result, loading, error } = useExampleQuery()
const otherApi = reactive(useOtherApiQuery(5))

// Routing
const router = useRouter()
const go = () => {
  router.push('/users/home')
}

// Internationalization
const { t } = useI18n()
const timestamp = ref(1183135260000)
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse"
        target="_blank"
        class="underline"
      >
        Vitesse
      </a>
    </p>
    <p class="max-w-md mx-auto mt-4">
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <div>
      <n-date-picker
        v-model:value="timestamp"
        format="P"
        type="date"
        clearable
      />
      <button
        class="m-3 text-sm btn"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>

    <div class="py-4" />

    <h1 class="mb-3 text-lg font-semibold underline">
      <a href="https://v4.apollo.vuejs.org/" target="_blank">
        Vue Apollo GraphQL V4 (beta)
      </a>
    </h1>
    <div>
      <div v-if="loading">
        Loading. . .
      </div>
      <div v-else-if="error">
        Error: {{ error.message }}
      </div>
      <div v-else-if="result">
        <div class="mb-1 text-lg font-semibold">
          Example Query Result:
        </div>
        <code>{{ result }}</code>
        <div class="mt-5">
          <div class="mb-1 text-lg font-semibold">
            Specific values from result object
          </div>
          <div>Company CEO: {{ result.company.ceo }}</div>
          <div>Roadster Apoapsis_au: {{ result.roadster.apoapsis_au }}</div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="mt-5 text-lg font-semibold">Other API</h2>
      <div v-if="otherApi.loading">
        Loading. . .
      </div>
      <div v-else-if="otherApi.error">
        Error: {{ otherApi.error.message }}
      </div>
      <div v-else-if="otherApi.result">
        <div class="mb-1 text-lg font-semibold">
          Example Query Result:
        </div>
        <code>{{ otherApi.result }}</code>
      </div>
    </div>

    <div class="mx-auto mt-10 prose">
      <h1>Typography Demo</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque suscipit consequuntur optio? Earum doloremque qui adipisci magnam aliquam dolorem iste delectus! Possimus, nam beatae quisquam provident reprehenderit praesentium ipsa ullam!
      </p>
      <code>print('Hello World')</code>
    </div>
  </div>
</template>
