import React from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { LOGIN, SIGNUP, PROFILE } from "../screenNames";
import Profile from "../../Components/Profile/Profile";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";

// Config
import { tabScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

function UserStack({ user }) {
  return (
    <Navigator
      initialRouteName={user ? PROFILE : LOGIN}
      screenOptions={tabScreenOptions}
    >
      {user ? (
        <Screen name={PROFILE} component={Profile} />
      ) : (
        <>
          <Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name={SIGNUP}
            component={Signup}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Navigator>
  );
}
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(UserStack);
