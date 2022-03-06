import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && <div>You must Login before getting your profile</div>}
      {currentUser && (
        <div>
          <h1>This is your profile page</h1>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.user.username}</strong>
            </h3>
          </header>
          <p>
            <strong>Token: {currentUser.token}</strong>
          </p>
          <p>
            <strong>Token: {currentUser.user._id}</strong>
          </p>
          <p>
            <strong>Token: {currentUser.user.email}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
