---
name: nextjs-best-practices
description: >
  Next.js best practices from Vercel Engineering - file conventions, RSC boundaries, data patterns, async APIs, metadata, error handling, route handlers.
  Triggers when working with Next.js App Router, Server Components, data fetching, routing, or performance optimization.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Next.js Best Practices

> Comprehensive Next.js guidelines from Vercel Engineering, adapted for this project.

---

## 1. File Conventions

### Project Structure

```
app/
├── layout.tsx          # Root layout (required)
├── page.tsx            # Home page (/)
├── loading.tsx         # Loading UI
├── error.tsx           # Error UI
├── not-found.tsx       # 404 UI
├── global-error.tsx    # Global error UI
├── route.ts            # API endpoint
├── template.tsx        # Re-rendered layout
├── default.tsx         # Parallel route fallback
├── blog/
│   ├── page.tsx        # /blog
│   └── [slug]/
│       └── page.tsx    # /blog/:slug
└── (group)/            # Route group (no URL impact)
    └── page.tsx
```

### Special Files

| File | Purpose |
|------|---------|
| `page.tsx` | UI for a route segment |
| `layout.tsx` | Shared UI for segment and children |
| `loading.tsx` | Loading UI (Suspense boundary) |
| `error.tsx` | Error UI (Error boundary) |
| `not-found.tsx` | 404 UI |
| `route.ts` | API endpoint |
| `template.tsx` | Like layout but re-renders on navigation |
| `default.tsx` | Fallback for parallel routes |

### Route Segments

```
app/
├── blog/               # Static segment: /blog
├── [slug]/             # Dynamic segment: /:slug
├── [...slug]/          # Catch-all: /a/b/c
├── [[...slug]]/        # Optional catch-all: / or /a/b/c
└── (marketing)/       # Route group (ignored in URL)
```

---

## 2. RSC Boundaries (Critical)

### Rule: No Async Client Components

Client components **cannot** be async. Only Server Components can be async.

```tsx
// BAD: async client component
'use client'
export default async function UserProfile() {
  const user = await getUser() // Cannot await in client!
  return <div>{user.name}</div>
}

// GOOD: Fetch in server component, pass data down
// page.tsx (server)
export default async function Page() {
  const user = await getUser()
  return <UserProfile user={user} />
}

// UserProfile.tsx (client)
'use client'
export function UserProfile({ user }: { user: User }) {
  return <div>{user.name}</div>
}
```

### Rule: Serializable Props

Props passed from Server → Client must be JSON-serializable.

```tsx
// BAD: Date object
<ClientCard date={new Date()} /> // Crashes!

// GOOD: Serialize to string
<ClientCard date={date.toISOString()} />

// BAD: Functions (except Server Actions)
<Button onClick={() => handleClick()} /> // Invalid!

// GOOD: Define in client or use Server Action
```

| Pattern | Valid? |
|---------|--------|
| `'use client'` + `async function` | NO |
| Pass `() => {}` to client | NO |
| Pass `new Date()` to client | NO |
| Pass server action to client | YES |
| Pass `string/number/boolean` | YES |
| Pass plain object/array | YES |

---

## 3. Data Patterns

### Decision Tree

```
Need data?
├── From Server Component?
│   └── Fetch directly (no API needed)
├── From Client Component?
│   ├── Mutation (POST/PUT/DELETE)? → Server Action
│   └── Read (GET)? → Pass from Server Component
└── External API (webhooks)? → Route Handler
```

### Server Components (Preferred for Reads)

```tsx
// Fetch directly - no API layer needed
async function Page() {
  const users = await db.user.findMany()
  return <UserList users={users} />
}
```

### Server Actions (Mutations)

```tsx
'use server'
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  await db.post.create({ title: formData.get('title') })
  revalidatePath('/posts')
}
```

### Avoiding Waterfalls

```tsx
// BAD: Sequential fetches
const user = await getUser()
const posts = await getPosts() // waits for user!

// GOOD: Parallel fetching
const [user, posts] = await Promise.all([getUser(), getPosts()])

// GOOD: Streaming with Suspense
<Suspense fallback={<Skeleton />}>
  <UserSection />
</Suspense>
```

---

## 4. Async Patterns (Next.js 15+)

### Async params

```tsx
// Next.js 15+: params is a Promise
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // ...
}
```

### Async cookies/headers

```tsx
import { cookies, headers } from 'next/headers'

export async function GET() {
  const cookieStore = await cookies()
  const headerList = await headers()
  // ...
}
```

---

## 5. Directives

| Directive | Use |
|-----------|-----|
| `'use client'` | Interactive components (useState, useEffect, event handlers) |
| `'use server'` | Server Actions, functions called from client |
| `'use cache'` | Next.js cache control |

```tsx
// Use client for interactivity
'use client'
export function LikeButton() {
  const [liked, setLiked] = useState(false)
  return <button onClick={() => setLiked(!liked)}>Like</button>
}
```

---

## 6. Navigation & Functions

### Hooks (Client Components)

```tsx
import { useRouter, usePathname, useSearchParams, useParams } from 'next/navigation'

const router = useRouter()
const pathname = usePathname()
const searchParams = useSearchParams()
const params = useParams()
```

### Generate Functions

```tsx
// Static params for SSG
export async function generateStaticParams() {
  return [{ slug: '1' }, { slug: '2' }]
}

// Dynamic metadata
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)
  return { title: post.title }
}
```

---

## 7. Error Handling

```tsx
// error.tsx - Error boundary
'use client'
export default function Error({ error, reset }) {
  return <button onClick={reset}>Retry</button>
}

// not-found.tsx
export default function NotFound() {
  return <div>Not found</div>
}

// In code
import { notFound } from 'next/navigation'
notFound()
```

---

## 8. Metadata & SEO

```tsx
// Static
export const metadata = { title: 'Home' }

// Dynamic
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] }
  }
}
```

---

## 9. Image Optimization

```tsx
import Image from 'next/image'

// Always use next/image
<Image
  src="/hero.jpg"
  alt="Hero"
  width={800}
  height={600}
  priority     // LCP - above fold
  placeholder="blur"
  blurDataURL="data:..."  // or "blur"
/>
```

### Best Practices

- Always use `next/image` over `<img>`
- Set `priority` for above-fold images
- Use responsive `sizes` for responsive images
- Configure `domains` in next.config for remote images

---

## 10. Scripts

```tsx
import Script from 'next/script'

<Script
  src="https://example.com/script.js"
  strategy="afterInteractive"  // afterInteractive, lazyOnload, beforeInteractive
  onLoad={() => console.log('loaded')}
/>
```

---

## 11. Self-Hosting

```ts
// next.config.ts
export default {
  output: 'standalone',  // Docker-ready
}
```

---

## 12. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| `'use client'` everywhere | Server Components by default |
| Fetch in client components | Fetch in Server Components |
| Sequential fetches | `Promise.all` or Suspense |
| Pass functions to client | Use Server Actions |
| Pass Date/Map/Set to client | Serialize to string/array |
| Skip error.tsx | Always add error boundaries |

---

> **Remember:** Server Components are the default. Add `'use client'` only when needed for interactivity.

(End of file - 235 lines)