                    🌐 Frontend (React / Next.js)
                                   ↓
                        API Gateway (Nginx)
                                   ↓
                 ┌────────────────────────────┐
                 │        Backend API         │
                 │   (NestJS / Node.js)      │
                 └────────────────────────────┘
                    ↓            ↓           ↓
        PostgreSQL (主数据库)  Redis     Message Queue
           (多租户隔离)      (缓存)        (任务系统)
                    ↓
          Billing / Logs / Analytics / AI
