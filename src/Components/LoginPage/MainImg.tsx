import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const MainImg = ({image}: {image: any}) => {
    const pos = useSelector((state: RootState) => state.LoginPageSlice.mousePos);
  return (
    <img style={{transform: `translate(-${pos.x * 20}px, -${pos.y * 20}px)`}} src={image} alt="" />
  )
}

export default MainImg
