### 注册

```bash
curl -X POST http://localhost:3000/users -d '{"username": "xinxin", "password": "666"}' -H "Content-Type: application/json"
```

### 登陆

```bash
curl -X POST http://localhost:3000/auth/login -d '{"username": "xinxin", "password": "666"}' -H "Content-Type: application/json"
```

### 删除

```bash
curl -X POST http://localhost:3000/users/delete -d '{"id": 5}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ4aW54aW4iLCJ1c2VybmFtZSI6InhpbnhpbiIsInBhc3N3b3JkIjoiNjY2IiwiaWF0IjoxNzE0OTE1NTkzLCJleHAiOjE3MTQ5MjI3OTN9.vzFyszlVpDuoLY12cOcD-7-S8zPm3OqjXGWLhlpI4Xw"
```
