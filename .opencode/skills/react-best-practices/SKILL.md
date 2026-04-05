---
name: react-best-practices
description: >
  React best practices from Vercel Engineering - performance optimization, re-renders, bundle size, async patterns.
  Triggers when writing React components, hooks, state management, or performance optimization.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# React Best Practices

> Comprehensive React performance guidelines from Vercel Engineering.

---

## 1. Eliminating Waterfalls (CRITICAL)

### Promise.all for Independent Operations

When async operations have no interdependencies, execute them concurrently.

```tsx
// BAD: Sequential (3 round trips)
const user = await fetchUser()
const posts = await fetchPosts()
const comments = await fetchComments()

// GOOD: Parallel (1 round trip)
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
])
```

### Defer Await to Branch

Move await into branches where it's actually used.

```tsx
// BAD: Await before checking condition
const data = await fetchData()
if (shouldShow) { return <DataDisplay data={data} /> }

// GOOD: Await inside the branch
if (shouldShow) {
  const data = await fetchData()
  return <DataDisplay data={data} />
}
```

### Suspense for Streaming

Use Suspense to stream content progressively.

```tsx
<Suspense fallback={<Skeleton />}>
  <UserProfile userId={id} />
</Suspense>
```

---

## 2. Bundle Size Optimization (CRITICAL)

### Dynamic Imports for Heavy Components

Use `next/dynamic` to lazy-load large components.

```tsx
// BAD: Monaco bundles with main chunk
import { MonacoEditor } from './monaco-editor'

// GOOD: Loads on demand
import dynamic from 'next/dynamic'
const MonacoEditor = dynamic(
  () => import('./monaco-editor').then(m => m.MonacoEditor),
  { ssr: false }
)
```

### Barrel Imports

Import directly, avoid barrel files.

```tsx
// BAD
import { Button, Input, Card } from '@/components'

// GOOD
import Button from '@/components/Button'
import Input from '@/components/Input'
import Card from '@/components/Card'
```

### Defer Third-Party Scripts

Load analytics/logging after hydration.

```tsx
<Script 
  src="analytics.js" 
  strategy="afterInteractive" 
/>
```

---

## 3. Client-Side Data Fetching (MEDIUM-HIGH)

### SWR for Deduplication

Use SWR for automatic request deduplication.

```tsx
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)
  // Automatic caching, dedup, revalidation
}
```

### Deduplicate Event Listeners

Avoid adding duplicate event listeners.

```tsx
// BAD: New listener on every render
useEffect(() => {
  window.addEventListener('resize', handleResize)
}, [handleResize])

// GOOD: Use ref or check before adding
useEffect(() => {
  if (!window.hasListener) {
    window.addEventListener('resize', handleResize)
    window.hasListener = true
  }
}, [])
```

---

## 4. Re-render Optimization (MEDIUM)

### Don't Subscribe to Unused State

Don't subscribe to state only used in callbacks.

```tsx
// BAD: Re-renders on every count change
function Counter() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    // count is read but only in callback
    setCount(c => c + 1)
    log(count) // This triggers re-render
  }
  return <button onClick={handleClick}>{count}</button>
}

// GOOD: Derive during render or use ref
function Counter() {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  
  const handleClick = () => {
    countRef.current++
    setCount(c => c + 1)
    log(countRef.current)
  }
  return <button onClick={handleClick}>{count}</button>
}
```

### Use startTransition

Use `startTransition` for non-urgent updates.

```tsx
import { startTransition } from 'react'

function SearchInput() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  
  function handleChange(e) {
    setQuery(e.target.value)
    startTransition(() => {
      setResults(search(e.target.value))
    })
  }
  return <input onChange={handleChange} />
}
```

### Use useDeferredValue

Defer expensive renders to keep input responsive.

```tsx
import { useDeferredValue } from 'react'

function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query)
  const matches = expensiveFilter(deferredQuery)
  return <List items={matches} />
}
```

### Avoid Inline Components

Don't define components inside components.

```tsx
// BAD: New component on every render
function Parent() {
  const Child = () => <div>child</div>  // Recreated!
  return <Child />
}

// GOOD: Define outside
function Child() { return <div>child</div> }

function Parent() {
  return <Child />
}
```

### Use Functional SetState

Use functional setState for stable callbacks.

```tsx
// BAD: Creates new function each render
<button onClick={() => setCount(count + 1)} />

// GOOD: Stable function reference
<button onClick={() => setCount(c => c + 1)} />
```

### Lazy State Initialization

Pass function to useState for expensive values.

```tsx
// BAD: Computed on every render
const [data] = useState(expensiveComputation())

// GOOD: Computed once
const [data] = useState(() => expensiveComputation())
```

---

## 5. Rendering Performance (MEDIUM)

### Content Visibility

Use content-visibility for long lists.

```tsx
<div style={{ contentVisibility: 'auto' }}>
  {items.map(item => <Item key={item.id} {...item} />)}
</div>
```

### Hoist Static JSX

Extract static JSX outside components.

```tsx
// BAD
function Card() {
  return (
    <div>
      <div className="static-header">
        <h1>Title</h1>
      </div>
      {/* ... */}
    </div>
  )
}

// GOOD - Extract static parts
const Header = () => <div className="static-header"><h1>Title</h1></div>

function Card() {
  return (
    <div>
      <Header />
      {/* ... */}
    </div>
  )
}
```

### Conditional Render

Use ternary, not && for conditionals.

```tsx
// BAD: 0 renders as "0" in React
{count && <Badge />}

// GOOD: Handles 0 correctly
{count > 0 && <Badge />}
{count ? <Badge /> : null}
```

---

## 6. JavaScript Performance (LOW-MEDIUM)

### Build Map for Repeated Lookups

```tsx
// BAD: O(n) lookup each time
items.find(i => i.id === targetId)

// GOOD: O(1) with Map
const map = new Map(items.map(i => [i.id, i]))
map.get(targetId)
```

### Cache Property Access in Loops

```tsx
// BAD: Property access in loop
for (const item of items) {
  doSomething(item.data.name)
}

// GOOD: Cache outside
const name = item.data.name
for (const item of items) {
  doSomething(name)
}
```

### Early Return

```tsx
function process(data) {
  if (!data) return null
  // ... rest of logic
}
```

### Use Set/Map for Lookups

```tsx
const lookupSet = new Set(['a', 'b', 'c'])
if (lookupSet.has(value)) { /* ... */ }
```

---

## 7. Advanced Patterns

### useEffectEvent (React 19+)

Don't put useEffectEvent results in effect deps.

```tsx
// For complex event handlers, consider refactoring
// to avoid unnecessary re-runs
```

---

## 8. Quick Reference

| Pattern | Use |
|---------|-----|
| Independent fetches | `Promise.all()` |
| Heavy components | `next/dynamic` |
| Non-urgent updates | `startTransition` |
| Expensive renders | `useDeferredValue` |
| Stable callbacks | functional setState |
| Expensive init | `useState(() => ...)` |
| Loop lookups | `Map`/`Set` |

---

> **Remember:** Optimize intentionally. Profile first, then optimize the critical paths.

(End of file - 222 lines)