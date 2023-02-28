import React from 'react'
import { Price } from './formatPriceStyle'

export const FormatPrice = ( { price } ) => {
  return (
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2,
    }).format(price)
  )
}
