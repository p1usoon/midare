import React from 'react'
import styled from 'styled-components'

import { rangeTimes } from './Time'
import { Area } from './Area'

const Hour = styled(Area)`
  margin: 4px 0;
  font-size: 1rem;
  min-width: 1rem;
  @media (max-width: 60rem) {
    font-size: 0.7rem;
    min-width: 0.7rem;
  }
  @media (max-width: 40rem) {
    font-size: 0.4rem;
    min-width: 0.4rem;
  }
`

export const Times = ({ row }: { row: string }) => {
  return (
    <>
      {rangeTimes().map((time, i) => (
        <Hour colStart={time.format('HHmm')} row={row} key={i.toString()}>
          {time.minute() === 0 ? time.hour() : ''}
        </Hour>
      ))}
    </>
  )
}
