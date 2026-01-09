Prisma + PostgreSQL Backend Template

A scalable Node.js + Express + TypeScript + Prisma + PostgreSQL backend template with modular Prisma schema support.

🚀 Tech Stack

Node.js

Express.js

TypeScript

Prisma ORM

PostgreSQL

ts-node-dev


Zod (optional validation)

```md
## 📁 Project Structure


prisma-postgres-Templet
├── prisma/
│   ├── schema/                 # Modular Prisma schemas
│   │   ├── product.prisma
│   │   ├── category.prisma
│   │   ├── vendor.prisma
│   │   └── index.prisma
│   ├── schema.prisma           # Auto-generated (DO NOT EDIT)
│   └── merge-schema.js         # Schema merge script
│
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middlewares/
│   └── utils/
│
├── .env
├── package.json
├── tsconfig.json
└── README.md

```

✅ Prerequisites

Make sure you have installed:

Node.js (LTS)

PostgreSQL

Git

npm

Check versions:

```
node -v
npm -v
git --version
```

⚙️ Environment Setup

Create a .env file in the root directory:

```
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE"
PORT=5000
NODE_ENV=development
```


Example:

```
DATABASE_URL="postgresql://postgres:1234@localhost:5432/prisma_template"
PORT=5000
```

🛠 Installation Steps
1️⃣ Clone the repository

```
git clone https://github.com/ziam8415/prisma-postgres-Templet.git
cd prisma-postgres-Templet
```

2️⃣ Install dependencies
```
npm install
```

3️⃣ Create PostgreSQL database

Using pgAdmin or terminal:

```
CREATE DATABASE prisma_template;
```

🧬 Prisma Setup (IMPORTANT)

This project uses multiple Prisma schema files that are merged automatically.

Available Scripts

```
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "prisma:generate-schema": "node ./prisma/merge-schema.js",
  "prisma:migrate": "npm run prisma:generate-schema && prisma migrate dev",
  "prisma:generate": "npm run prisma:generate-schema && prisma generate"
}
```

4️⃣ Run Prisma Migration
```
npm run prisma:generate-schema
npm run prisma:generate
npm run prisma:migrate
```


✔ Merges all schema files

✔ Creates database tables

✔ Generates migration history


5️⃣ Start Development Server
```
npm run dev
```


Server should run on:
```
http://localhost:5000
```

🧪 Prisma Studio (Optional)

To visually inspect database tables:

```
npx prisma studio
```

🔄 Development Workflow
After changing Prisma models
```
npm run prisma:migrate
```

After pulling new code

```
npm install
npm run prisma:generate
npm run dev
```

Production build

```
npm install
npm run prisma:generate
npm run build
npm start
```

❗ Important Notes

❌ Do NOT edit prisma/schema.prisma directly

✅ Always edit files inside prisma/schema/

❌ Do NOT run npx prisma migrate dev

✅ Always use:

```
npm run prisma:migrate
```

➕ Adding a New Prisma Model

Create a new file:

prisma/schema/order.prisma


Add your model:

```
model Order {
  id        String   @id @default(uuid())
  total     Float
  createdAt DateTime @default(now())
}
```


Run migration:

```
npm run prisma:migrate
```

🧩 Common Errors & Fixes
❌ Prisma Client not found
```
npm run prisma:generate
```

❌ Database connection error

```
Check PostgreSQL is running

Verify .env credentials
```

📌 Future Enhancements


Authentication (JWT)

Role-based access control

Zod validation

API documentation

Logging & error handling

🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first.
