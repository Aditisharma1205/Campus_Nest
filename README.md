neophyte/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx                → Landing page
│
│   ├── dashboard/
│   │   ├── page.tsx            → Dashboard home
│   │   ├── add-pg/
│   │   │   └── page.tsx
│   │   ├── add-ride/
│   │   │   └── page.tsx
│   │
│   ├── pg/
│   │   ├── page.tsx            → All PG listings
│   │   └── [id]/
│   │       └── page.tsx        → Single PG page
│   │
│   ├── rides/
│   │   └── page.tsx            → Ride listing page
│   │
│   ├── profile/
│   │   └── page.tsx
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts
│   │   │
│   │   ├── pg/
│   │   │   ├── route.ts        → GET, POST PG
│   │   │   └── [id]/
│   │   │       └── route.ts    → GET single PG
│   │   │
│   │   ├── rides/
│   │   │   ├── route.ts        → GET, POST rides
│   │   │   └── book/
│   │   │       └── route.ts    → POST book ride
│   │   │
│   │   ├── reviews/
│   │   │   └── route.ts
│   │
│   └── globals.css
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │
│   ├── pg/
│   │   ├── PGCard.tsx
│   │   ├── PGFilter.tsx
│   │
│   ├── rides/
│   │   ├── RideCard.tsx
│   │
│   └── common/
│       ├── Loader.tsx
│       ├── EmptyState.tsx
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── utils.ts
│
├── prisma/
│   └── schema.prisma
│
├── middleware.ts
├── .env
├── package.json