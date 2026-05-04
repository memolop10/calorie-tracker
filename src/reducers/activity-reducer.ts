import type { ActivityInterface } from "../types"

export type ActivityActions = {
    type: 'SAVE_ACTIVITY', payload: { newActivity: ActivityInterface }
}

type ActivityState = {
  activities: ActivityInterface[]
}

export const initialState : ActivityState = {
  activities: []
}   

export  const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'SAVE_ACTIVITY') {
        return {
           ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    return state
}