# 数据接口

## GET /data/list

获取数据列表，支持分页。

### 请求参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| page | int | 否 | 页码，默认 1 |
| page_size | int | 否 | 每页数量，默认 20，最大 100 |
| keyword | string | 否 | 搜索关键词 |

### 请求示例

```bash
curl -X GET "https://api.example.com/v1/data/list?page=1&page_size=10" \
  -H "Authorization: Bearer <your-token>"
```

### 响应示例

```json
{
  "code": 200,
  "data": {
    "total": 100,
    "page": 1,
    "items": [
      {
        "id": 1,
        "name": "示例数据",
        "created_at": "2026-01-01T00:00:00Z"
      }
    ]
  }
}
```

---

## GET /data/detail

获取单条数据详情。

### 请求参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | int | 是 | 数据 ID |

### 请求示例

```bash
curl -X GET "https://api.example.com/v1/data/detail?id=1" \
  -H "Authorization: Bearer <your-token>"
```
