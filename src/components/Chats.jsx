import React from 'react'

const Chats = () => {
  return (
    <div className='chats'> 
      <div className="userChat">
    <img src="https://images.pexels.com/photos/16577585/pexels-photo-16577585.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
    alt=""

    />
    <div className="userChatInfo">
      <span>Jane</span>
      <p>Hello</p>
    </div>
   </div>
   <div className="userChat">
    <img src="https://images.pexels.com/photos/16577585/pexels-photo-16577585.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt=""/>
    <div className="userChatInfo">
      <span>Jane</span>
      <p>Hello</p>
    </div>
   </div>
   <div className="userChat">
    <img src="https://images.pexels.com/photos/16577585/pexels-photo-16577585.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt=""/>
    <div className="userChatInfo">
      <span>Jane</span>
      <p>Hello</p>
    </div>
   </div>
    </div>
  )
}

export default Chats
