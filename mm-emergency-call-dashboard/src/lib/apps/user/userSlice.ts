import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType, FilterByRole, User } from "@/types/users";

let initialStateUsers: User[] = [
    { id: 1, name: "U San Lin Htun", emailAddress: "sanlinhtun@gmail.com", address: "Yangon, Hlaing, 122th street", role: UserType.SERVICE_PROVIDER },
    { id: 2, name: "U Wunna Aung", emailAddress: "wunnaaung@gmail.com", address: "Yangon, San Chaung, 122th street", role: UserType.SERVICE_PROVIDER },
    { id: 3, name: "U Min Thiha", emailAddress: "minthiha@gmail.com", address: "Yangon, Hlaing, 124th street", role: UserType.SERVICE_PROVIDER },
    { id: 4, name: "U Shin Thant Kyaw", emailAddress: "shinthantkyaw@gmail.com", address: "Yangon, Hlaing, 122th street", role: UserType.NORMAL_USER },
    { id: 5, name: "U Sitt Min Aung", emailAddress: "sittminaung@gmail.com", address: "Yangon, Hlaing, 122th street", role: UserType.NORMAL_USER}
];

const initialState = {
  users: initialStateUsers,
  isAllSelected: false,
  selectedUsers: [] as User[],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      /*   state.users.push(action.payload); */
      initialStateUsers = [...initialStateUsers, action.payload];
      state.users = initialStateUsers;
    },
    removeUser(state, action: PayloadAction<number>) {
      /*  state.users = state.users.filter((user) => user.id !== action.payload); */
      initialStateUsers = initialStateUsers.filter(
        (user) => user.id !== action.payload
      );

      state.selectedUsers = state.selectedUsers.filter(
        (user) => user.id !== action.payload
      );
      state.users = initialStateUsers;
    },
    editUser(state, action: PayloadAction<User>) {
      /*   state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      ); */

      initialStateUsers = initialStateUsers.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );

      state.users = initialStateUsers;
    },
    filterUserByRole(state, action: PayloadAction<FilterByRole>) {
      if (action.payload === "All") {
        state.users = initialStateUsers;
      } else {
        state.users = initialStateUsers.filter(
          (user) => user.role === action.payload
        );
      }
    },
    selectAllUser(state, action: PayloadAction<User[]>) {
      /*       state.isAllSelected = state.users.every((user)=>action.payload.includes(user));
       */ state.isAllSelected = action.payload.length ? true : false;
      state.selectedUsers = action.payload;
    },
    setIsAllSelected(state) {
      state.isAllSelected = state.users.every((user) =>
        state.selectedUsers.some((selectedUser) => selectedUser.id === user.id)
      );
    },
    toggleSelectUser(state, action: PayloadAction<User>) {
      const user = action.payload;
      const isSelected = state.selectedUsers.some((u) => u.id === user.id);
      state.selectedUsers = isSelected
        ? state.selectedUsers.filter((u) => u.id !== user.id)
        : [...state.selectedUsers, user];
    },
    searchUser(state, action: PayloadAction<string | null>) {
      if (!action.payload) {
        state.users = initialStateUsers;
      } else {
        state.users = initialStateUsers.filter((user) =>
          user.name.toLowerCase().includes(action.payload!.toLowerCase())
        );
      }
    },
  },
});

export const {
  addUser,
  removeUser,
  editUser,
  filterUserByRole,
  selectAllUser,
  setIsAllSelected,
  toggleSelectUser,
  searchUser,
} = userSlice.actions;
export default userSlice.reducer;
