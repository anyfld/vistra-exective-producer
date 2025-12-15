import { createConnectTransport } from "@connectrpc/connect-web"

// Connect RPC Transport 設定
// バックエンドのURLは環境変数から取得
export const transport = createConnectTransport({
  baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
})
