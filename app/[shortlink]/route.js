// This is a placeholder page that won't actually be seen by users
// The route.js file handles all the redirects
export default function ShortlinkPage() {
  return null;
}

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  // Return an array of objects with the shortlink parameter
  return [
    { shortlink: 'github' },
    { shortlink: 'twitter' },
    // Add any other shortlinks you know you'll use
  ];
}