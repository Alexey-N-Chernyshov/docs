import React from 'react'
import OriginalSearchBar from '@theme-original/SearchBar'
import { TraceEvent } from '@uniswap/analytics'
import { BrowserEvent, EventName } from '@uniswap/analytics-events'

export default function SearchBar(props) {
  return (
    <>
      <TraceEvent events={[BrowserEvent.onClick]} name={EventName.NAVBAR_SEARCH_SELECTED}>
        <div>
          <OriginalSearchBar {...props} />
        </div>
      </TraceEvent>
    </>
  )
}