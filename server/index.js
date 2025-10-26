import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ABUSE_API = "https://api.abuseipdb.com/api/v2/check";
const IPQUALITY_API = "https://ipqualityscore.com/api/json/ip";

const validateIP = (ip) => /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);

app.get("/api/intel", async (req, res) => {
  const { ip } = req.query;
  if (!validateIP(ip)) {
    return res.status(400).json({ error: "Invalid IP address" });
  }

  try {
    const [abuseRes, iqRes] = await Promise.all([
      axios.get(ABUSE_API, {
        headers: {
          Key: process.env.ABUSEIPDB_KEY,
          Accept: "application/json",
        },
        params: { ipAddress: ip, maxAgeInDays: 90 },
      }),
      axios.get(`${IPQUALITY_API}/${process.env.IPQUALITY_KEY}/${ip}`)
    ]);

    const abuseData = abuseRes.data.data;
    const iqData = iqRes.data;

    const result = {
      ip,
      hostname: iqData.hostname || null,
      isp: iqData.ISP || iqData.organization || null,
      country: iqData.country_name || abuseData.countryCode,
      abuseScore: abuseData.abuseConfidenceScore,
      recentReports: abuseData.totalReports,
      vpn: iqData.proxy || iqData.vpn || false,
      threatScore: iqData.fraud_score,
    };

    res.json(result);
  } catch (error) {
    if (error.response?.status === 429)
      return res.status(429).json({ error: "Rate limit reached" });
    res.status(500).json({ error: "Failed to fetch data", details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
