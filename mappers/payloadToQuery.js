export default function payloadToQueryMapper(payload) {
  const { keyword, sort, filters } = payload

  const query = {}

  query.q = keyword

  if (sort !== null) {
    query.sortBy = sort.field
    query.sortDir = sort.dir
  }

  if (filters.freeShipping) query.freeShipping = filters.freeShipping
  if (filters.isExists) query.isExists = filters.isExists
  if (filters.isReady) query.isReady = filters.isReady
  if (filters.hasDiscount) query.hasDiscount = filters.hasDiscount
  if (filters.namedTags.length > 0) {
    query.namedTags = filters.namedTags.join(',')
  }

  return query
}
