import uuidV4 from 'node-uuid';

export const ENQUEUE_NOTIFICATION = '@@notifications/ENQUEUE_NOTIFICATION';
/**
    TEXT
      - A string to be displayed inside the notifications
    DURATION
      - time in ms you want the notification to stay on screen
      (null for infinite time until dismissed)
    ICON
      - string name of the Font Awesome icon you want to use. Selection
      can be found here https://gorangajic.github.io/react-icons/fa.html
    COLOR
      - hex color for icon
    ONCLICK
     - function to be called if notification is clicked
*/
export const enqueueNotification = (
  text,
  duration = null,
  icon = 'FaInfo',
  color = '#333',
  onClick = () => null,
) => {
  const notification = { text, duration, color, icon, onClick, key: uuidV4() };
  return {
    type: ENQUEUE_NOTIFICATION,
    notification,
  };
};

export const DEQUEUE_NOTIFICATION = '@@notifications/DEQUEUE_NOTIFICATION';
export const dequeueNotification = key => ({
  type: DEQUEUE_NOTIFICATION,
  key,
});
