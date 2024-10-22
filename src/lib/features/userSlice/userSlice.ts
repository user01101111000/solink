import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILinkInfo } from "../../../interfaces/lib/features/userSlice/userSlice";

const userInfo: ILinkInfo = {
  id: "",
  email: "",
  username: "",
  idToken: "",
  fullName: "",
  avatar: "",
  location: "",
  about: "",
  links: [{ label: "", url: "" }],
  generated: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInfo,
  reducers: {
    setUserInfo: (state, action: PayloadAction<ILinkInfo>) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.idToken = action.payload.idToken;
      state.fullName = action.payload.fullName;
      state.avatar = action.payload.avatar;
      state.location = action.payload.location;
      state.about = action.payload.about;
      state.links = action.payload.links;
      state.generated = action.payload.generated;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
