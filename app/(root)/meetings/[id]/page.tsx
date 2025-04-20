import React from 'react'

const Meetings = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      Meetings Room: #{params.id}
    </div>
  )
}

export default Meetings
