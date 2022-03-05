export default function queryToPayloadMapper(query) {
  const payload = {
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

  // Keyword
  payload.keyword = query.q

  // Sort
  if (query.sortBy && query.sortDir) {
    payload.sort = {
      field: query.sortBy,
      dir: query.sortDir,
    }
  }

  // Filters
  if (query.freeShipping) payload.filters.freeShipping = !!query.freeShipping
  if (query.isExists) payload.filters.isExists = !!query.isExists
  if (query.isReady) payload.filters.isReady = !!query.isReady
  if (query.hasDiscount) payload.filters.hasDiscount = !!query.hasDiscount
  if (query.namedTags)
    payload.filters.namedTags = query.namedTags
      .split(',')
      .map((item) => parseInt(item))

  return payload
}
