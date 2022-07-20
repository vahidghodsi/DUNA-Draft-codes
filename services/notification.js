// import { toast } from "react-toastify";

const notify = message => message && alert(message);
const notifies = messages => messages && messages.forEach(message => notify(message));

export const notificationService = {
  notify,
  notifies,
};
