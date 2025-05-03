import { NextMiddlewareResult } from 'next/dist/server/web/types'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export type CustomNextMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response?: NextResponse
) => NextMiddlewareResult | Promise<NextMiddlewareResult>

type MiddlewareFactory = (
  middleware: CustomNextMiddleware
) => CustomNextMiddleware

/**
 * Chain middlewares using recursion.
 *
 * @see {@link https://medium.com/@tanzimhossain2/28d5435d3187}
 * @see {@link https://stackoverflow.com/a/77230182}
 *
 * @param {MiddlewareFactory[]} middlewares middleware array, the order of the array is the order of the middleware execution
 * @param {number} index current index of the middleware array
 * @returns {NextMiddleware} Next.js middleware
 */
export function chainMiddlewares(
  middlewares: MiddlewareFactory[],
  index: number = 0
): CustomNextMiddleware {
  const currentMiddleware = middlewares[index]

  // If no more middleware, return response directly
  if (!currentMiddleware) return (_request, _event, response) => response

  // Recursively chain the middlewares
  const next = chainMiddlewares(middlewares, index + 1)
  return currentMiddleware(next)
}
