"use client"

import { GitHubCalendar } from "react-github-calendar";

export default function GithubHeatmap() {
  return (
    <div className="w-full overflow-x-auto">
      <GitHubCalendar
        username="hitoriiiiiiii"
        blockSize={14}
        blockMargin={4}
        fontSize={14}
      />
    </div>
  )
}