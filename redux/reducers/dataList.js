import * as actions from '../actions/actionTypes';
import { produce } from 'immer';

let lastId = 4;

const initialState = [
  {
    id: 0,
    description: 'Item 1',
    resolved: true,
  },
  {
    id: 1,
    description: 'Item 2',
    resolved: true,
  },
  {
    id: 2,
    description: 'Item 3',
    resolved: true,
  },
  {
    id: 3,
    description: 'Item 4',
    resolved: true,
  },
  {
    id: 4,
    description: 'Item 5',
    resolved: true,
  },
  {
    id: 5,
    description: 'Item 6',
    resolved: true,
  },
  {
    id: 6,
    description: 'Item 7',
    resolved: true,
  },
  {
    id: 7,
    description: 'Item 8',
    resolved: true,
  },
];

export default function dataList(state = initialState, action) {
  switch (action.type) {
    case actions.ROW_ADDED:
      return produce(state, (draftState) => {
        draftState.push({
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        });
      });

    case actions.ROW_REMOVED:
      return state.filter((row) => row.id !== action.payload.id);

    case actions.ALL_ROWS_REMOVED:
      return [];

    case actions.ROW_RESOLVED:
      return state.map((row) =>
        row.id !== action.payload.id
          ? row
          : produce(row, (draftrow) => {
              draftrow.resolved = !draftrow.resolved;
            })
      );

    default:
      return state;
  }
}
