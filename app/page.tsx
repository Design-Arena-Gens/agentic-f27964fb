'use client'

import { useState } from 'react'
import styles from './page.module.css'

const aspirationalObjects = [
  {
    id: 1,
    name: 'Vintage Sports Car',
    emoji: '🏎️',
    description: 'Classic elegance & speed'
  },
  {
    id: 2,
    name: 'Private Yacht',
    emoji: '🛥️',
    description: 'Freedom on the open sea'
  },
  {
    id: 3,
    name: 'Luxury Watch',
    emoji: '⌚',
    description: 'Timeless sophistication'
  },
  {
    id: 4,
    name: 'Grand Piano',
    emoji: '🎹',
    description: 'Artistic excellence'
  }
]

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (id: number) => {
    if (!submitted) {
      setSelected(id)
    }
  }

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true)
    }
  }

  const handleReset = () => {
    setSelected(null)
    setSubmitted(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>✨ Aspirational Survey ✨</h1>
        <p className={styles.subtitle}>Which object speaks to your dreams?</p>

        {!submitted ? (
          <>
            <div className={styles.grid}>
              {aspirationalObjects.map((obj) => (
                <button
                  key={obj.id}
                  className={`${styles.option} ${selected === obj.id ? styles.selected : ''}`}
                  onClick={() => handleSelect(obj.id)}
                >
                  <div className={styles.emoji}>{obj.emoji}</div>
                  <h3 className={styles.objectName}>{obj.name}</h3>
                  <p className={styles.description}>{obj.description}</p>
                </button>
              ))}
            </div>

            <button
              className={styles.submitButton}
              onClick={handleSubmit}
              disabled={selected === null}
            >
              Submit Choice
            </button>
          </>
        ) : (
          <div className={styles.result}>
            <div className={styles.resultEmoji}>
              {aspirationalObjects.find(obj => obj.id === selected)?.emoji}
            </div>
            <h2 className={styles.resultTitle}>Wonderful Choice!</h2>
            <p className={styles.resultText}>
              You selected: <strong>{aspirationalObjects.find(obj => obj.id === selected)?.name}</strong>
            </p>
            <p className={styles.resultSubtext}>
              {aspirationalObjects.find(obj => obj.id === selected)?.description}
            </p>
            <button className={styles.resetButton} onClick={handleReset}>
              Take Survey Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
