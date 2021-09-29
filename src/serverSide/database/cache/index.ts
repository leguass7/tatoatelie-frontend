import { Prisma, PrismaClient } from '@prisma/client'

// const actions = ['create', 'update', 'creatMany', 'delete', 'deleteMany', 'updateMany']
// const cacheKey = 'service'

const serviceUpdate: Prisma.Middleware = async (params, next) => {
  const before = Date.now()
  const {
    action,
    model
    // args
  } = params

  // console.log('CacheUtil', CacheUtil.getStats())

  const resolve = async (): Promise<any> => {
    const result = await next(params)
    const after = Date.now()
    console.info(`Query ${model}.${action} took ${after - before}ms`)
    return result
  }

  // if (model === 'Service') {
  //   if (action === 'findMany' && !args) {
  //     if (CacheUtil.hasKey(cacheKey)) {
  //       console.log(`GET Cache ${CacheUtil.id}: ${model}.${action}`)
  //       return CacheUtil.get(cacheKey)
  //     }
  //     const result = await resolve()
  //     console.log(`SET CACHE ${cacheKey} ${CacheUtil.id}: ${model}.${action}`)
  //     CacheUtil.set(cacheKey, result)
  //     return result
  //   }

  //   if (actions.includes(action)) {
  //     console.log(`CLEAR CACHE ${cacheKey} ${CacheUtil.id}:`, model)
  //     CacheUtil.delete(cacheKey)
  //   }
  // }

  const result = await resolve()
  return result
}

export default function withCache(prisma: PrismaClient): PrismaClient {
  prisma.$use(serviceUpdate)
  return prisma
}
