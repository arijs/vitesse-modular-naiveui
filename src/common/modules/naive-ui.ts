import { UserModule } from '~/types'
import { setup } from '@css-render/vue3-ssr'

export const install: UserModule = (ctx) => {
	if (!ctx.isClient) {
		ctx.afterRender = setup(ctx.app).collect
	}
}
