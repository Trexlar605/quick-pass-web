import Pusher from "pusher-js";

const pusher = new Pusher("YOUR_APP_KEY", {
  cluster: "YOUR_CLUSTER",
});

export default pusher;
