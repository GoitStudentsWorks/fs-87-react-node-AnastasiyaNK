// export const selectSettingsModal = (state) =>
//   state.modals.modals.isSettingsModalOpen;

// export const selectDailyNormaModal = (state) =>
//   state.modals.modals.isDailyNormaModalOpen;

// export const selectAddWaterModal = (state) =>
//   state.modals.modals.isAddWaterModalOpen;

export const selectEditWaterModal = (state) =>
  state.modals.modals.isEditModalOpen;

export const selectSelectedWaterPortionId = (state) =>
  state.modals.selectedWaterPortionId;

export const selectDeletingWaterPortionId = (state) =>
  state.modals.deletingWaterPortionId;

export const selectDeleteWaterModal = (state) =>
  state.modals.modals.isDeleteModalOpen;
