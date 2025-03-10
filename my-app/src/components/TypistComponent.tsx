"use client"
import React from "react"
import { TypeAnimation } from "react-type-animation"

const things_I_like = [
  "React",
  500,
  "Next.js",
  500,
  "React Native",
  500,
  "TypeScript",
  500,
  "Java",
  500,
  "Node.js",
  500,
  "Python",
  500,
  "Testing",
  500,
]

const TypistComponent: React.FC = () => (
  <TypeAnimation
    sequence={things_I_like}
    style={{ fontSize: '2em' }}
    repeat={Infinity}
  />
)

export default TypistComponent
