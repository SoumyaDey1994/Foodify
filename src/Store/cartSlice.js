import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const incomingItemId = action.payload?.id;
      const targetItemIndex = state.items.findIndex(
        (item) => item.id === incomingItemId
      );
      if (targetItemIndex > -1) {
        state.items[targetItemIndex].selectedCount =
          state.items[targetItemIndex].selectedCount + 1;
      } else {
        state.items.push({ ...action.payload, selectedCount: 1 });
      }
    },
    removeItem: (state, action) => {
      const incomingItemId = action.payload?.id;
      const targetItemIndex = state.items.findIndex(
        (item) => item.id === incomingItemId
      );
      if (targetItemIndex > -1) {
        const selectedCount = state.items[targetItemIndex].selectedCount;
        if (selectedCount === 1) {
          state.items.splice(targetItemIndex, 1);
        } else {
          state.items[targetItemIndex].selectedCount =
            state.items[targetItemIndex].selectedCount - 1;
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
