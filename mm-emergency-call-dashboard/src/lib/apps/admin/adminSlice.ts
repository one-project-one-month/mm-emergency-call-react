import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Admin } from "@/types/admins";

// Define the unfiltered list of users
const initialStateAdmins: Admin[] = [
  {
    id: 1,
    name: "Mg San Lin Htun",
    emailAddress: "sanlinhtun@gmail.com",
  },
  {
    id: 2,
    name: "Mg Wunna Aung",
    emailAddress: "wunnaaung@gmail.com",
  },
  {
    id: 3,
    name: "Mg Min Thiha",
    emailAddress: "minthiha@gmail.com",
  },
  {
    id: 4,
    name: "Mg Shin Thant Kyaw",
    emailAddress: "shinthantkyaw@gmail.com",
  },
  {
    id: 5,
    name: "Mg Sitt Min Aung",
    emailAddress: "sittminaung@gmail.com",
  },
];

const initialState = {
  admins: initialStateAdmins,
  isAllSelected: false,
  selectedAdmins: [] as Admin[],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin(state, action: PayloadAction<Admin>) {
      state.admins.push(action.payload);
    },
    removeAdmin(state, action: PayloadAction<number>) {
      state.admins = state.admins.filter((user) => user.id !== action.payload);
    },
    editAdmin(state, action: PayloadAction<Admin>) {
      state.admins = state.admins.map((admin) =>
        admin.id === action.payload.id ? action.payload : admin
      );
    },

    selectAllAdmin(state, action: PayloadAction<boolean>) {
      state.isAllSelected = action.payload;
      state.selectedAdmins = action.payload ? [...state.admins] : [];
    },
    resetSelectAdmins(state) {
      state.selectedAdmins = [];
    },
    setIsAllSelected(state) {
      state.isAllSelected = state.admins.every((admin) =>
        state.selectedAdmins.some(
          (selectedAdmin) => selectedAdmin.id === admin.id
        )
      );
    },
    toggleSelectAdmin(state, action: PayloadAction<Admin>) {
      const user = action.payload;
      const isSelected = state.selectedAdmins.some((u) => u.id === user.id);
      state.selectedAdmins = isSelected
        ? state.selectedAdmins.filter((u) => u.id !== user.id)
        : [...state.selectedAdmins, user];
    },
    searchAdmin(state, action: PayloadAction<string | null>) {
      if (!action.payload) {
        state.admins = initialStateAdmins;
      } else {
        state.admins = initialStateAdmins.filter((user) =>
          user.name.toLowerCase().includes(action.payload!.toLowerCase())
        );
      }
    },
  },
});

export const {
  addAdmin,
  removeAdmin,
  editAdmin,
  selectAllAdmin,
  setIsAllSelected,
  toggleSelectAdmin,
  resetSelectAdmins,
  searchAdmin,
} = adminSlice.actions;
export default adminSlice.reducer;
