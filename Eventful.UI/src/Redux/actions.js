import { POST_EVENT } from "./actionTypes";

let nextEventId = 6;

export const postEvent = (content) => ({
  type: POST_EVENT,
  payload: {
    id: nextEventId++,
    title: content.title,
    description: content.description,
  },
});
