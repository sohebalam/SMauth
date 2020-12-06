import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getUserById } from "../actions/users.actions/getUserById"
import { getUserPostsById } from "../actions/users.actions/getUserPostsById"
import Spinner from "../Spinner"

import UserProfileData from "../components/userProfile/UserProfileData"

const UserProfile = ({ users, userProfile, match, getUserById }) => {
  useEffect(() => {
    getUserById(match.params.user_id)
  }, [])

  return (
    <>
      userProfile === null ||
      <div className='all-page-wrapper flex__center'>
        <Spinner />
      </div>
      <div className='account-page-wrapper'>
        <div className='data'>
          <img src={userProfile.avatar} alt='' />

          <UserProfileData userProfile={userProfile} />
          <div className='user-posts'>
            <header className='user-posts-header-wrapper app_color_background'>
              (
              <p className='user-posts-header font__p font__bold'>
                His/Her posts
              </p>
              ) : (
              <p className='user-posts-header font__p font__bold'>
                He/She hasn't added post
              </p>
              )
            </header>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.users,
  userProfile: state.users.userProfile,
})

export default connect(mapStateToProps, { getUserById, getUserPostsById })(
  UserProfile
)
