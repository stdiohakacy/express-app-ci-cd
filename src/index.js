const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, ArgoCD + GitHub Actions + Minikube!!!@@@");
});

// Health check route
app.get("/health", (req, res) => {
    res.json({ status: "UP" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
