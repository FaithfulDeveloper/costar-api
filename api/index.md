# API 参考

本章节包含所有 API 接口的详细文档。

## 基础信息

- **Base URL**: `https://api.example.com/v1`
- **认证方式**: Bearer Token
- **响应格式**: JSON

## 接口列表

| 接口 | 方法 | 描述 |
|------|------|------|
| [/auth/login](./auth.md) | POST | 用户登录 |
| [/auth/register](./auth.md) | POST | 用户注册 |
| [/data/list](./data.md) | GET | 获取数据列表 |
| [/data/detail](./data.md) | GET | 获取数据详情 |

## 通用响应格式

```json
{
  "code": 200,
  "message": "success",
  "data": {}
}
```

## 错误码

| 错误码 | 描述 |
|--------|------|
| 400 | 请求参数错误 |
| 401 | 未认证 |
| 403 | 无权限 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |
