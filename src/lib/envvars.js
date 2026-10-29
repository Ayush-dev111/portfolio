const envvars = {
    BASE_URL: (import.meta.env?.VITE_BASE_URL || "https://www.linkedin.com/in/ayush-negi11").replace(/\/$/, ""),
};

export default envvars;
