import axios from "axios"

let ACCESS_TOKEN = "" // Will be updated every 2 seconds

const REFRESH_TOKEN =
  "1//0gqbSKWpcMRlZCgYIARAAGBASNwF-L9IrAbLNnpo2TE4ibvj3e-zJHyseszVDnhOzICeFKh13EMgmV_PR6MqdqsUrQkkuIlFn8I4"
const CLIENT_ID = "764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com"
const CLIENT_SECRET = "d-FL95Q19q7MQmFpd7hHD0Ty"
const TOKEN_URI = "https://oauth2.googleapis.com/token"

async function refreshToken() {
  try {
    const res = await axios.post(TOKEN_URI, null, {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        grant_type: "refresh_token",
      },
    })

    ACCESS_TOKEN = res.data.access_token
    console.log("✅ Refreshed ACCESS_TOKEN:", ACCESS_TOKEN.substring(0, 20) + "...")
  } catch (err) {
    console.error("❌ Error refreshing token:", err.response?.data || err.message)
  }
}

// Start the refresh loop every 2 seconds
setInterval(refreshToken, 2000)

// Initial token fetch
refreshToken()

// Export accessor function (so other modules get latest token)
export function getAccessToken() {
  return ACCESS_TOKEN
}
