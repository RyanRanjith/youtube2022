import React from 'react'

const Search = () => {
  return (
    <div className='search'>
    <div className="searchForm">
      <input type="text" placeholder='find a user' />
    </div>
   <div className="userChat">
    <img src="https://images.pexels.com/photos/16577585/pexels-photo-16577585.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt=""/>
    <div className="userChatInfo">
      <span>Jane</span>
    </div>
   </div>
    </div>
  )
}

export default Search
