const ttb = {
  header: "#2BAFE7",
  primary: "#6366F1",
  secondary: "#64748B",
  success: "#22C55E",
  info: "#3B82F6",
  warning: "#F59E0B",
  help: "#A855F7",
  danger: "#EF4444",
  routesPublic: [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/public/about-us" },
    { label: "Contact Us", url: "/public/contact-us" },
  ],
  routesAdmin: [
    { label: "Property Search", url: "/dashboard" },
    { label: "Farming", items: [
        { label: "Radius Search", url: "/dashboard" },
        { label: "Boundary Search", url: "/dashboard" },
        { label: "Area Search", url: "/dashboard" },
        { label: "Clear Search", url: "/dashboard" },
        { label: "Saved Farms", url: "/dashboard" },
        { label: "Saved Searches", url: "/dashboard" },
        { label: "Saved Net Sheets", url: "/dashboard" },
        { label: "Upload", url: "/dashboard" },
    ]
    },
    { label: "Statistics", items: [
        { label: "Radius Search", url: "/dashboard" },
        { label: "Boundary Search", url: "/dashboard" },
        { label: "Area Search", url: "/dashboard" },
        { label: "Clear Search", url: "/dashboard" },
        
    ] },
    { label: "Buyer Cost Estimate", url: "/dashboard" },
  ],
};

export default ttb;