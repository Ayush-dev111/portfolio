const envvars = {
    BASE_URL: (import.meta.env?.VITE_BASE_URL || "https://www.linkedin.com/in/ayush-negi").replace(/\/$/, ""),
};

export default envvars;
