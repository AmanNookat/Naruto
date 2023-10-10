import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToLocalStorage = (user) => {
  user && localStorage.setItem("NarutoUser", JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem("NarutoUser");
};

export const checkUserLogin = () => {
  const user = localStorage.getItem("NarutoUser");
  if (!user) return false;
  return true;
};

export const getAuthUser = () => {
  const user = JSON.parse(localStorage.getItem("NarutoUser"));
  return user.name;
};

export const getCardRating = (cardObj) => {
  const rating =
    cardObj.comments.reduce((acc, commentObj) => {
      return acc + commentObj.rating;
    }, 0) / cardObj.comments.length;
  return rating.toFixed(1);
};

export const checkAdmin = () => {
  const user = JSON.parse(localStorage.getItem("NarutoUser"));
  if (!user) {
    return false;
  } else {
    if (user.isAdmin) return true;
    return false;
  }
};

export const getTotalPages = async (url) => {
  const { data } = await axios.get(url);
  const totalPages = Math.ceil(data.length / 4);
  return totalPages;
};

// -------------------------------- notify оставляйте в самом низу

export const NOTIFY_TYPES = {
  error: "error",
  warning: "warning",
  success: "success",
  info: "info",
};

export const notify = (message, type = NOTIFY_TYPES.success) => {
  switch (type) {
    case NOTIFY_TYPES.error:
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      break;
    case NOTIFY_TYPES.warning:
      toast.warning(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      break;
    case NOTIFY_TYPES.success:
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      break;
    case NOTIFY_TYPES.info:
      toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      break;
    default:
      toast(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
  }
};
