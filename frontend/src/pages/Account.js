import React, { useEffect } from "react"
import { connect } from "react-redux"

import AccountPageSection from "../components/AccountPage/AccountPageSection"

const Account = ({ auth: { name, lastName, userName, avatar, email } }) => {
  return (
    <div className="account-page-wrapper">
      <div className="data">
        <img src={avatar} alt="" />

        <AccountPageSection
          name={name}
          lastName={lastName}
          email={email}
          userName={userName}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
})

export default connect(mapStateToProps)(Account)
