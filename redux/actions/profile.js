import { SET_PROFILE, SET_USER_PROFILE } from "./types";
import instance from "./instance";
import { fetchFeeds } from "./feeds";

export const fetchProfile = () => async (dispatch) => {
  try {
    const res = await instance.get("/profile/");
    const profile = res.data;
    // console.log("profile action", profile);
    dispatch({
      type: SET_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserProfile = (owner_id) => async (dispatch) => {
  try {
    const res = await instance.get("/user-profile/" + owner_id);
    const profile = res.data;
    //console.log("user profile action", profile);
    dispatch({
      type: SET_USER_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.error(error);
  }
};

export const followProfile = (profile_id) => async (dispatch) => {
  try {
    await instance.post(`/follow/`, profile_id);
    dispatch(fetchProfile());
    dispatch(fetchFeeds());
  } catch (error) {
    Alert.alert("Failed");
  }
};
