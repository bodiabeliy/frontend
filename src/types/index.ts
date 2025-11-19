import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface TypeIconProps {
  className?: string
  fill?: string
  width?: number
  height?: number
}

export interface BtnProps {
  className: string
  text:string,
  onClick?:() => void;
  disabled:boolean,
}

export interface BtnDropDownProps {
  type:"button"|"input",
  className: string
  sendData?:(data:any) =>void
  text?:string|ReactNode,
  onClick?:() => void;
  disabled:boolean,
  isDropDownOpen:boolean
  closeDropDown?:any
  selectedValue?: string
}

export type ComponentProps = BtnProps
