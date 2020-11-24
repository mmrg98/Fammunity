import React from "react";
import { Container, Text, View } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Components
import FeedList from "../Feed/FeedList";
import LogoutButton from "./LogoutButton";

const Profile = ({ logout, name, profile, navigation }) => {
  //console.log("profile.posts", profile.posts);
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text>{name?.username}'s Profile</Text>
      </View>
      <FeedList feeds={profile.posts} navigation={navigation} />
      <LogoutButton logout={logout} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    name: state.profileReducer.name,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
