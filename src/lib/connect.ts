import { createConnectTransport } from "@connectrpc/connect-web"

// 開発環境ではViteのプロキシを使用（/v1でプロキシされる）
// 本番環境では環境変数から取得
const getBaseUrl = () => {
  if (import.meta.env.DEV) {
    // 開発環境: Viteのプロキシ経由でアクセス
    return ""
  }
  return import.meta.env.VITE_API_BASE_URL || "http://localhost:8080"
}

export const transport = createConnectTransport({
  baseUrl: getBaseUrl(),
})
