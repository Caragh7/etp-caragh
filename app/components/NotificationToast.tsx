"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { removeNotification } from "@/app/store/notificationsSlice";

export default function NotificationToast() {
  const notifications = useSelector(
    (state: RootState) => state.notifications.notifications
  );
  const dispatch = useDispatch();

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-3 rounded-lg shadow-md text-white ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          }`}
        >
          {notification.message}
          <button
            className="ml-3 text-white font-bold"
            onClick={() => dispatch(removeNotification(notification.id))}
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
}
