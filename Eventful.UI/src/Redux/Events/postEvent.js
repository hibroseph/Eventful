import { postEventError, postEventPending, postEventSuccess } from "./actions";

export const postEvent = (event) => {
  return (dispatch) => {
    dispatch(postEventPending(event));

    fetch("https://localhost:32768/api/event/postevent", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(postEventSuccess(res));
      })
      .catch((error) => {
        dispatch(postEventError());
      });
  };
};
