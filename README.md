# Sticky Mark

> 个人网页书签管理

## dev logs

### init

```bash
npx create-next-app@latest --use-pnpm
```

### database

使用 [supabase](https://supabase.com/docs)

配置数据库权限
添加`policy`; `Policy Command` 选择 `ALL`; `Target Roles` 选择 `anon`; 表示开放所有的权限, 只需通过 api-key 即可操作数据库
