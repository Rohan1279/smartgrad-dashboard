import Pusher from "pusher-js";

// const myPusher = ({ subscribe, event }) => {
//   const pusher = new Pusher("PUSHER_APP", {
//     cluster: "PUSHER_CLUSTER",
//   });

//   const channel = pusher.subscribe(subscribe);

//   channel.bind(event, function (data) {
//     return data;
//   });
// };

// export default myPusher;

export const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
  cluster: import.meta.env.VITE_PUSHER_CLUSTER,
});
