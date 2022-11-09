import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const SidebarItem = ({ item, isOpen }) => {
    if (item.childrens) {
        return (
            <div className="center">{4}</div>
          )
    } else {
        return (
            <div>{4}</div>
          )
    }
  
}

export default SidebarItem