"use client"

import type React from "react"

import { useState } from "react"
import { Info } from "lucide-react"

interface FeatureScoreBarProps {
  label: string
  score: number
  description: string
  colorClass: string
  icon?: React.ReactNode
}

export default function FeatureScoreBar({ label, score, description, colorClass, icon }: FeatureScoreBarProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  // Determine the score label based on the score value
  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Exceptional"
    if (score >= 80) return "Excellent"
    if (score >= 70) return "Very Good"
    if (score >= 60) return "Good"
    if (score >= 50) return "Average"
    if (score >= 40) return "Below Average"
    if (score >= 30) return "Poor"
    return "Very Poor"
  }

  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
          <button
            className="ml-1.5 rounded-full p-0.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
          >
            <Info className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-xs font-medium text-gray-500 dark:text-gray-400">{getScoreLabel(score)}</span>
          <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-semibold dark:bg-gray-700">
            {score}/100
          </span>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="mb-2 rounded-md bg-gray-100 p-2 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          {description}
        </div>
      )}

      {/* Score bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${score}%`, transition: "width 1s ease-in-out" }}
        ></div>
      </div>
    </div>
  )
}
