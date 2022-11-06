export const analyticsPageview = (url) => {
  if (process.env.NODE_ENV !== 'production') return;

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const analyticsEvent = ({ action, category, label, value }) => {
  if (process.env.NODE_ENV !== 'production') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
