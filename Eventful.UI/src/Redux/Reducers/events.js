import { reducer } from "redux";
import { GET_EVENT, POST_EVENT } from "../actionTypes";

const initialState = {
  events: [
    {
      id: 1,
      title: "Porter Park Frisbee",
      description: "Come and play some ultimate frisbee. We are hoping to have atleast 5 people.",
    },
    {
      title: "Hackathon @ LabStats",
      description: "Make sure you come and bring a laptop. There will be some good prizes provided by Daniel",
    },
    {
      id: 2,
      title: "Sleepover w/ sexy ladies",
      description: "There will be a sleep over with some sexy ladies at 461 N Water in Idaho Falls. Make sure you come modest",
    },
    {
      id: 3,
      title: "Hello Mate",
      description: "Hopefully this shows up lol",
    },
    {
      id: 4,
      title: "Rock Climbing",
      description: "Come meet up at the edge at 6. It is college night so it is only $9 to get in. Bring your student ID card",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENT:
      return state;
    default:
      return state;
  }
}
