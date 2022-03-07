import { clone } from '@/utils/utilities'

export default function queryToPayloadMapper(query) {
  const payload = clone(defaultPayload)

  let { keyword, sort } = payload
  const { filters } = payload

  keyword = query.q || ''

  if (query.sortBy && query.sortDir) {
    sort = {
      field: query.sortBy,
      dir: query.sortDir,
    }
  }

  if (query.freeShipping) filters.freeShipping = !!query.freeShipping
  if (query.isExists) filters.isExists = !!query.isExists
  if (query.isReady) filters.isReady = !!query.isReady
  if (query.hasDiscount) filters.hasDiscount = !!query.hasDiscount
  if (query.namedTags) {
    filters.namedTags = query.namedTags.split(',').map((item) => parseInt(item))
  }

  return {
    keyword,
    sort,
    filters,
  }
}

export const defaultPayload = {
  keyword: '',
  sort: null,
  filters: {
    freeShipping: false,
    isExists: false,
    isReady: false,
    hasDiscount: false,
    namedTags: [],
  },
}
