export default function payloadToQueryMapper(payload) {
  // Keyword
  const query = {
    q: payload.keyword,
  }

  // Sort
  if (payload.sort !== null) {
    query.sortBy = payload.sort.field
    query.sortDir = payload.sort.dir
  }

  // Filters
  if (payload.filters.freeShipping)
    query.freeShipping = payload.filters.freeShipping
  if (payload.filters.isExists) query.isExists = payload.filters.isExists
  if (payload.filters.isReady) query.isReady = payload.filters.isReady
  if (payload.filters.hasDiscount)
    query.hasDiscount = payload.filters.hasDiscount
  if (payload.filters.namedTags.length > 0)
    query.namedTags = payload.filters.namedTags.join(',')

  return query
}
