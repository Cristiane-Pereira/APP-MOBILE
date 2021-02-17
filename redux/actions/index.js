import * as actions from './actionTypes';

export const rowAdded = (description) => ({
  type: actions.ROW_ADDED,
  payload: {
    description,
  },
});

export const rowResolved = (id) => ({
  type: actions.ROW_RESOLVED,
  payload: {
    id,
  },
});

export const rowRemoved = (id) => ({
  type: actions.ROW_REMOVED,
  payload: {
    id,
  },
});

export const allRowsRemoved = () => ({
  type: actions.ALL_ROWS_REMOVED,
  payload: {},
});
