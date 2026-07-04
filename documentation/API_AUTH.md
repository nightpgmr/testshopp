# Authentication API — v1

Base URL: `/api/v1/auth`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new customer |
| POST | `/login` | Login & get token |
| POST | `/logout` | Revoke token |
| POST | `/forgot-password` | Send reset link |
| POST | `/reset-password` | Reset password |
| GET | `/email/verify/{id}/{hash}` | Verify email |
| POST | `/email/resend` | Resend verification |
| GET | `/profile` | Get profile |
| PUT | `/profile` | Update profile |
| PUT | `/change-password` | Change password |

Full request/response examples in `backend/README.md`.
