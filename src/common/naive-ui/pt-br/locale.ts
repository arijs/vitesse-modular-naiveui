
const ptBR = {
	name: 'pt-BR',
	global: {
		undo: 'Desfazer',
		redo: 'Refazer'
	},
	Popconfirm: {
		positiveText: 'Confirmar',
		negativeText: 'Cancelar'
	},
	Cascader: {
		placeholder: 'Por favor selecione',
		loading: 'Carregando',
		loadingRequiredMessage: (label: string): string =>
			`Por favor carregue todos os descendentes de ${label} antes de marcá-lo.`
	},
	Time: {
		dateFormat: 'dd-MM-yyyy',
		dateTimeFormat: 'dd-MM-yyyy hh:mm:ss'
	},
	DatePicker: {
		yearFormat: 'yyyy',
		monthFormat: 'MMM',
		dayFormat: 'eeeeee',
		clear: 'Limpar',
		now: 'Atual',
		confirm: 'Confirmar',
		selectTime: 'Selecione a hora',
		selectDate: 'Selecione a data',
		datePlaceholder: 'Selecione a data',
		datetimePlaceholder: 'Selecione a data e hora',
		startDatePlaceholder: 'Data inicial',
		endDatePlaceholder: 'Data final',
		startDatetimePlaceholder: 'Data e hora inicial',
		endDatetimePlaceholder: 'Data e hora final',
		monthBeforeYear: true,
		firstDayOfWeek: 6 as 0 | 1 | 2 | 3 | 4 | 5 | 6,
		today: 'Hoje'
	},
	DataTable: {
		checkTableAll: 'Marcar tudo na tabela',
		uncheckTableAll: 'Desmarcar tudo na tabela',
		confirm: 'Confirmar',
		clear: 'Limpar'
	},
	Transfer: {
		sourceTitle: 'Itens disponíveis',
		targetTitle: 'Para'
	},
	Empty: {
		description: 'Lista vazia'
	},
	Select: {
		placeholder: 'Por favor selecione'
	},
	TimePicker: {
		placeholder: 'Selecione a hora',
		positiveText: 'OK',
		negativeText: 'Cancelar',
		now: 'Atual'
	},
	Pagination: {
		goto: 'Ir para',
		selectionSuffix: 'página'
	},
	DynamicTags: {
		add: 'Adicionar'
	},
	Log: {
		loading: 'Carregando'
	},
	Input: {
		placeholder: 'Por favor informe'
	},
	InputNumber: {
		placeholder: 'Por favor informe'
	},
	DynamicInput: {
		create: 'Criar'
	},
	ThemeEditor: {
		title: 'Editor de tema',
		clearAllVars: 'Limpar todas as Variáveis',
		clearSearch: 'Limpar busca',
		filterCompName: 'Filtrar nome do componente',
		filterVarName: 'Filtrar nome da variável',
		import: 'Importar',
		export: 'Exportar',
		restore: 'Restaurar ao padrão'
	}
}

export type NLocale = typeof ptBR
export default ptBR
