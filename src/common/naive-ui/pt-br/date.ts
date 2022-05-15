import type { Locale } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface NDateLocale {
	name: string
	locale: Locale
}

const datePtBR: NDateLocale = {
	name: 'pt-BR',
	locale: ptBR
}

export type { NDateLocale }
export default datePtBR
