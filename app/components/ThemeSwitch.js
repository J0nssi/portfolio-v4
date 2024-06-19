'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from './style.module.css'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <p onClick={toggleTheme} className={styles.name} style={{ cursor: 'pointer' }}>
      Joonas Vaija
    </p>
  )
}

export default ThemeSwitch