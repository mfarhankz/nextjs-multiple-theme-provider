const rebo = {
  primary: "#089ea8",
  secondary: "#00ff00",
  header: "yellow",
  routesPublic: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/public/about-us" },
    { label: "Contact Us", path: "/public/contact-us" },
  ],
  routesAdmin: [
    { label: "Property Search", path: "/admin/dashboard" },
    { label: "Farming", path: "/admin/dashboard", childern: [
        { label: "Radius Search", path: "/admin/dashboard" },
        { label: "Boundary Search", path: "/admin/dashboard" },
        { label: "Area Search", path: "/admin/dashboard" },
        { label: "Saved Farms", path: "/admin/dashboard" },
        { label: "Saved Net Sheets", path: "/admin/dashboard" },
        { label: "Saved Queries", path: "/admin/dashboard" },
        { label: "Upload Records", path: "/admin/dashboard" },
        { label: "Clear Search", path: "/admin/dashboard" },
    ]
    },
    { label: "Statistics", path: "/admin/dashboard", childern: [
        { label: "Radius Search", path: "/admin/dashboard" },
        { label: "Boundary Search", path: "/admin/dashboard" },
        { label: "Area Search", path: "/admin/dashboard" },
        { label: "Saved Farms", path: "/admin/dashboard" },
        
    ] },
    { label: "Saved Notes", path: "/admin/dashboard" },
    { label: "Buyer Cost Estimate", path: "/admin/dashboard" },
  ],
};
export default rebo;
