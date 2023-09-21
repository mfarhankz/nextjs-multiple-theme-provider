const ttb = {
  primary: "#089ea8",
  secondary: "#00ff00",
  header: "#6366F1",
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