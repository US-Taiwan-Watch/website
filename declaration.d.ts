/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
// @ts-expect-error just declaration of `react-slick`
/**
 * `Property 'refs' is missing in type 'Slider' but required in type 'Component<any, any, any>'.`
 * appears when building production in Next.js 14
 *
 * @see {@link https://github.com/akiran/react-slick/issues/2336#issuecomment-2589213857}
 */
declare module 'react-slick' {
  import { Component } from 'react'

  export interface ResponsiveSetting {
    breakpoint: number
    settings: Partial<Settings>
  }

  export interface Settings {
    infinite?: boolean
    speed?: number
    slidesToShow?: number
    slidesToScroll?: number
    initialSlide?: number
    arrows?: boolean
    prevArrow?: React.ReactNode
    nextArrow?: React.ReactNode
    responsive?: ResponsiveSetting[]
    afterChange?: (currentSlide?: number) => void
    asNavFor?: any
    [key: string]: any
  }

  export default class Slider extends Component<Settings> {
    slickNext(): void
    slickPrev(): void
    slickGoTo(slide: number, dontAnimate?: boolean): void
  }
}
