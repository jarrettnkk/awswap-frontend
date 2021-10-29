import React from 'react'
import { Svg, SvgProps } from '@pancakeswap/uikit'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M8.03756 3.47992H17.9103C18.0496 3.47992 18.187 3.51236 18.3117 3.57467C18.4363 3.63699 18.5447 3.72746 18.6283 3.83893L21.0516 7.07V20.5328C21.0516 20.7708 20.957 20.9991 20.7887 21.1674C20.6204 21.3358 20.3921 21.4303 20.1541 21.4303H5.79376C5.55572 21.4303 5.32744 21.3358 5.15912 21.1674C4.9908 20.9991 4.89624 20.7708 4.89624 20.5328V7.07L7.31954 3.83893C7.40314 3.72746 7.51155 3.63699 7.63618 3.57467C7.7608 3.51236 7.89822 3.47992 8.03756 3.47992ZM19.2565 8.86504H6.69128V19.6353H19.2565V8.86504ZM18.8078 7.07L17.4615 5.27496H8.48632L7.14004 7.07H18.8078ZM10.2814 10.6601V12.4551C10.2814 13.1692 10.565 13.8541 11.07 14.359C11.5749 14.864 12.2598 15.1477 12.9739 15.1477C13.688 15.1477 14.3729 14.864 14.8778 14.359C15.3828 13.8541 15.6665 13.1692 15.6665 12.4551V10.6601H17.4615V12.4551C17.4615 13.6453 16.9887 14.7867 16.1471 15.6283C15.3055 16.4699 14.1641 16.9427 12.9739 16.9427C11.7837 16.9427 10.6423 16.4699 9.8007 15.6283C8.95912 14.7867 8.48632 13.6453 8.48632 12.4551V10.6601H10.2814Z" />
    </Svg>
  )
}

export default Icon