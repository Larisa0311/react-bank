import "./index.css";

import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext} from "../../App";

import Notification from "../../component/notification";
import Grid from "../../component/grid";
import { serverUrl } from "../../utils/serverUrl";

const NotificationList: React.FC<{}> = () => {
  const auth = useContext(AuthContext);
  const email = auth?.state.user.email;

  const formatteDate = (date: number) => {
    const currentDate = new Date().getTime();
    const result = currentDate - date;

    const minutesResult = Math.floor(result / 1000 / 60);
    const hoursResult = Math.floor(minutesResult / 60);
    const daysResult = Math.floor(hoursResult / 24);
    const monthsResult = Math.floor(daysResult / 30);

    if (minutesResult < 60) {
      return `${String(minutesResult)} min. ago`;
    } else if (hoursResult < 24) {
      return `${String(hoursResult)} hours. ago`;
    } else if (daysResult < 30) {
      return `${String(daysResult)} days. ago`;
    } else {
      return `${String(monthsResult)} month. ago`;
    }
  };

  // const navigate = useNavigate();

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    try {
      fetch(`${serverUrl}/notifications?email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
          }
        })
        .then((data) => {
          setNotifications(data.notifications);
        });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [email]);

  return (
    <Grid middle>
      {notifications?.length > 0 ? (
        notifications.reverse().map((notification: { [key: string]: any }) => {
          return (
            <Fragment key={notification.id}>
              <Notification
                type={notification.type}
                message={notification.message}
                date={formatteDate(notification.date)}
              />
            </Fragment>
          );
        })
      ) : (
        <div className="transaction__list--empty">
          There are no notifications
        </div>
      )}
    </Grid>
  );
};

export default NotificationList;