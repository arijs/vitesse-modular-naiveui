import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

export interface UseOtherApiQueryType {
  totalCount: number
  nodes: {
    nome: string
    sigla: string
  }[]
}

export function useOtherApiQuery(limit: number) {
  const { result, loading, error } = useQuery<UseOtherApiQueryType>(gql`
query MyQuery($limit: Int) {
  allLocais(filter: {relTipo: {nome: {eq: "Estado"}}}, limit: $limit) {
    totalCount
    nodes {
      nome
      sigla
    }
  }
}
`, {
  limit,
}, {
  clientId: `otherApi`,
})

  return { result, loading, error }
}
