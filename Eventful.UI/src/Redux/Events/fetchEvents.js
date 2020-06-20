import { fetchEventsPending, fetchEventsSuccess, fetchEventsError } from "./actions";

export const fetchEvents = () => {
  return (dispatch) => {
    console.log("dispatchinfg");
    dispatch(fetchEventsPending());

    fetch("https://localhost:32768/api/event/getevents")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
        dispatch(fetchEventsSuccess(res));
        return res.events;
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        dispatch(fetchEventsError(error));
      });
  };
};
