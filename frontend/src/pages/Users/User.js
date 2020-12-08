import React from "react"
import { Link } from "react-router-dom"

const User = ({ user }) => {
  return (
    <div className="topic-wrapper">
      <div className="topic-user">
        <img src={user.avatar} className="topic-avatar" alt="" />
        <p className="font__p p__size">{user.userName}</p>
      </div>

      <div className="topic-section">
        <div className="topic-section-links">{/* user profile */}</div>
      </div>
    </div>
  )
}

export default User
