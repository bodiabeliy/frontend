import { BtnProps } from '@/types'

export const ActionButton = (props: BtnProps) => {
  const {onClick, disabled} = props
  return (
    <button
      data-modal-target="popup-modal" data-modal-toggle="popup-modal"
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={` ${props.className} `}
    >
      {props.text}
    </button>
  )
}
