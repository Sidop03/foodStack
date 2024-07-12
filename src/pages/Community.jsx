import React from 'react'
import { Message } from 'semantic-ui-react'

const Community = () => {
  return (
    <div className='community-message'>
    <Message>
      <Message.Header> <span  style={{fontSize:"1.5rem"}}> Hey Foodies excited for some chit-chats</span></Message.Header>
      <p style={{fontSize:"1.5rem"}}>
        Our chit-chat feature will be launched soon so that you can share your own recipes... till then enjoy the recipes available...
      </p>
    </Message>
    </div>
  )
}

export default Community