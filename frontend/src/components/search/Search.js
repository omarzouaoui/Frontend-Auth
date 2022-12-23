import React from 'react'
import { BiSearch } from 'react-icons/bi'
import styles from"./Search.module.scss"

export const Search = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
        <BiSearch size={18} className={styles.icon} />
        <input type="text" placeholder="Search Users" value={value} oChange={onChange} />
    </div>
  )
}
