import { postEventError, postEventPending, postEventSuccess } from "./actions";

export const postEvent = (event) => {
  return (dispatch) => {
    console.log("Posting event:");
    console.log(event);
    dispatch(postEventPending(event));

    fetch("https://localhost:32768/api/event/postevent", {
        method: "POST",
        body: JSON.stringify(event),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log("There was a respond from the post request:");
        console.log(res);

        dispatch(postEventSuccess());
      })
      .catch((error) => {
        console.log("Error:");
        console.log(error);
      });
  };
};
