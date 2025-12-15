import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'

// サンプルデータ
const rows = [
  { id: 1, name: '田中 太郎', email: 'tanaka@example.com', role: '管理者' },
  { id: 2, name: '佐藤 花子', email: 'sato@example.com', role: 'ユーザー' },
  { id: 3, name: '鈴木 一郎', email: 'suzuki@example.com', role: 'ユーザー' },
]

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: '名前', width: 150 },
  { field: 'email', headerName: 'メール', width: 200 },
  { field: 'role', headerName: '役割', width: 100 },
]

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Vistra Executive Producer
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Vite + React + TypeScript + MUI + Connect-Query
      </Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        {/* 情報カード */}
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              技術スタック
            </Typography>
            <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
              <li>Vite - 爆速ビルドツール</li>
              <li>React + TypeScript</li>
              <li>MUI (Material UI) - Data Grid等</li>
              <li>React Router - ルーティング</li>
              <li>Connect-Query - 型安全な通信</li>
              <li>Vitest - テスト環境</li>
              <li>ESLint + Prettier</li>
            </Typography>
          </CardContent>
        </Card>

        {/* データグリッド */}
        <Box sx={{ flex: 2, height: 400 }}>
          <Typography variant="h6" gutterBottom>
            サンプル DataGrid
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            disableRowSelectionOnClick
          />
        </Box>
      </Stack>
    </Box>
  )
}
