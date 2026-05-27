<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vitepress'

const appRef = ref<HTMLElement>()
const time = ref('00:00:00')
const activeNav = ref(0)
const cursorOn = ref(true)

interface NavItem {
  label: string
  link: string
  external?: boolean
  key: string
}

const navItems: NavItem[] = [
  { label: '$ home',      link: '/',                                    key: 'h' },
  { label: '$ docs',      link: '/markdown-examples',                   key: 'd' },
  { label: '$ api',       link: '/api-examples',                        key: 'a' },
  { label: '↗ github',   link: 'https://github.com/Lo7ong/',           key: 'g', external: true },
]

const features = [
  { name: 'terminal-design/', dir: true },
  { name: 'fast-build/',      dir: true },
  { name: 'dev-focused/',     dir: true },
  { name: 'dark-theme*',      dir: false },
  { name: 'full-search*',     dir: false },
  { name: 'responsive*',      dir: false },
]

const router = useRouter()
let clockTimer: ReturnType<typeof setInterval>
let cursorTimer: ReturnType<typeof setInterval>

function tick() {
  time.value = new Date().toLocaleTimeString('en-US', { hour12: false })
}

function goTo(item: NavItem) {
  if (item.external) {
    window.open(item.link, '_blank')
  } else {
    router.go(item.link)
  }
}

function onKey(e: KeyboardEvent) {
  switch (e.key) {
    case 'ArrowUp':
    case 'k':
      e.preventDefault()
      activeNav.value = (activeNav.value - 1 + navItems.length) % navItems.length
      break
    case 'ArrowDown':
    case 'j':
      e.preventDefault()
      activeNav.value = (activeNav.value + 1) % navItems.length
      break
    case 'Tab':
      e.preventDefault()
      activeNav.value = (activeNav.value + 1) % navItems.length
      break
    case 'Enter':
      e.preventDefault()
      goTo(navItems[activeNav.value])
      break
    case 'd':
      if (!(e.target instanceof HTMLInputElement)) {
        e.preventDefault()
        router.go('/markdown-examples')
      }
      break
    case 'a':
      if (!(e.target instanceof HTMLInputElement)) {
        e.preventDefault()
        router.go('/api-examples')
      }
      break
    case 'g':
      if (!(e.target instanceof HTMLInputElement)) {
        e.preventDefault()
        window.open('https://github.com/Lo7ong/', '_blank')
      }
      break
  }
}

onMounted(() => {
  tick()
  clockTimer = setInterval(tick, 1000)
  cursorTimer = setInterval(() => { cursorOn.value = !cursorOn.value }, 530)
  appRef.value?.focus()
})

onUnmounted(() => {
  clearInterval(clockTimer)
  clearInterval(cursorTimer)
})
</script>

<template>
  <div
    class="tui"
    ref="appRef"
    tabindex="0"
    @keydown="onKey"
    role="application"
    aria-label="Lo7ong Hub"
  >
    <!-- ╔══ Title Bar ═══════════════════════════════════════════════════╗ -->
    <header class="tui-bar tui-bar--top">
      <span class="dim">╔═[</span>
      <span class="brand">&nbsp;Lo7ong<span class="dim">@hub</span>&nbsp;</span>
      <span class="dim">]</span>
      <span class="bar-title">&nbsp;─── Technical Documentation System ───&nbsp;</span>
      <span class="bar-grow" />
      <span class="dim">[&nbsp;</span>
      <span class="c-green">{{ time }}</span>
      <span class="dim">&nbsp;]═╗</span>
    </header>

    <!-- ╠══ Body ════════════════════════════════════════════════════════ -->
    <div class="tui-body">

      <!-- ── Sidebar ── -->
      <aside class="tui-sidebar" aria-label="Navigation">
        <div class="sec-hdr">┌──[ MENU ]───┐</div>

        <nav class="tui-nav" role="navigation">
          <button
            v-for="(item, i) in navItems"
            :key="i"
            class="nav-btn"
            :class="{ active: activeNav === i }"
            @mouseenter="activeNav = i"
            @click="goTo(item)"
            :aria-current="activeNav === i ? 'page' : undefined"
          >
            <span class="nav-arrow">{{ activeNav === i ? '▶' : '·' }}</span>
            <span>{{ item.label }}</span>
          </button>
        </nav>

        <div class="sep">│─────────────│</div>

        <div class="sec-hdr">├──[ STATUS ]──┤</div>
        <div class="status-list">
          <div><span class="c-green">●</span>&nbsp;online</div>
          <div><span class="c-blue">v</span>&nbsp;1.0.0</div>
          <div><span class="c-yellow">⬡</span>&nbsp;dark mode</div>
          <div><span class="c-purple">★</span>&nbsp;vitepress</div>
        </div>

        <div class="sep sidebar-bot">└─────────────┘</div>
      </aside>

      <!-- ── Main ── -->
      <main class="tui-main" aria-label="Welcome">
        <div class="panel-edge panel-top">
          ┌──[ WELCOME ]─────────────────────────────────────────────────────┐
        </div>

        <pre class="ascii-art" aria-hidden="true">
  ██╗      ██████╗ ███████╗ ██████╗ ███╗   ██╗ ██████╗
  ██║     ██╔═══██╗╚════██║██╔═══██╗████╗  ██║██╔════╝
  ██║     ██║   ██║    ██╔╝██║   ██║██╔██╗ ██║██║  ███╗
  ██║     ██║   ██║   ██╔╝ ██║   ██║██║╚██╗██║██║   ██║
  ███████╗╚██████╔╝   ██║  ╚██████╔╝██║ ╚████║╚██████╔╝
  ╚══════╝ ╚═════╝    ╚═╝   ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝</pre>

        <div class="term-block">
          <p class="prompt-line">
            <span class="c-green">lo7ong@hub</span><span class="dim">:</span><span class="c-blue">~</span><span class="dim">$</span>
            <span class="c-white">&nbsp;whoami</span>
          </p>
          <p class="out-line">Developer &amp; Tech Enthusiast — CLI-style technical blog</p>

          <p class="prompt-line">
            <span class="c-green">lo7ong@hub</span><span class="dim">:</span><span class="c-blue">~</span><span class="dim">$</span>
            <span class="c-white">&nbsp;ls features/</span>
          </p>
          <div class="out-line file-row">
            <span
              v-for="f in features"
              :key="f.name"
              :class="f.dir ? 'c-blue' : 'c-green'"
            >{{ f.name }}</span>
          </div>

          <p class="prompt-line">
            <span class="c-green">lo7ong@hub</span><span class="dim">:</span><span class="c-blue">~</span><span class="dim">$</span>
            <span class="tui-cursor" :class="{ 'cursor-off': !cursorOn }">█</span>
          </p>
        </div>

        <div class="action-row">
          <button class="act-btn" @click="router.go('/markdown-examples')">[ ./documentation ]</button>
          <button class="act-btn alt"  @click="router.go('/api-examples')">[ ./api-reference ]</button>
          <a
            class="act-btn muted"
            href="https://github.com/Lo7ong/"
            target="_blank"
            rel="noopener noreferrer"
          >[ github ↗ ]</a>
        </div>

        <div class="panel-edge panel-bot">
          └────────────────────────────────────────────────────────────────────┘
        </div>
      </main>
    </div>

    <!-- ╚══ Status Bar ══════════════════════════════════════════════════╝ -->
    <footer class="tui-bar tui-bar--bot">
      <span class="dim">╚═</span>
      <span class="bar-keys">&nbsp;[ ↑↓/jk: nav ][ Enter: open ][ d: docs ][ a: api ][ g: github ]&nbsp;</span>
      <span class="bar-grow" />
      <span class="c-green">●&nbsp;</span>
      <span class="c-text">System Ready&nbsp;</span>
      <span class="dim">═╝</span>
    </footer>
  </div>
</template>

<style scoped>
/* ── Reset / Base ────────────────────────────────────────────────────── */
.tui {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  background: #0d1117;
  color: #c9d1d9;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.6;
  overflow: hidden;
  outline: none;
}

/* ── Title / Status bars ─────────────────────────────────────────────── */
.tui-bar {
  display: flex;
  align-items: center;
  background: #161b22;
  padding: 3px 12px;
  white-space: nowrap;
  overflow: hidden;
  flex-shrink: 0;
}

.tui-bar--top { border-bottom: 2px solid #3fb950; }
.tui-bar--bot { border-top:    1px solid #30363d; }

.brand        { color: #3fb950; font-weight: 700; }
.bar-title    { color: #8b949e; font-size: 0.82em; }
.bar-grow     { flex: 1; min-width: 0; }
.bar-keys     { color: #8b949e; font-size: 0.82em; }

/* ── Body ────────────────────────────────────────────────────────────── */
.tui-body {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

/* ── Sidebar ─────────────────────────────────────────────────────────── */
.tui-sidebar {
  width: 190px;
  flex-shrink: 0;
  background: #0f1318;
  border-right: 1px solid #30363d;
  padding: 10px 6px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sec-hdr {
  color: #6e7681;
  font-size: 0.78em;
  padding: 4px 2px;
  user-select: none;
}

/* ── Navigation ──────────────────────────────────────────────────────── */
.tui-nav { display: flex; flex-direction: column; gap: 2px; }

.nav-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  background: none;
  border: 1px solid transparent;
  color: #c9d1d9;
  font-family: inherit;
  font-size: 0.88em;
  padding: 5px 8px;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.12s, color 0.12s, border-color 0.12s;
  text-align: left;
}

.nav-btn:hover {
  background: rgba(63, 185, 80, 0.08);
  color: #58a6ff;
  border-color: #30363d;
}

.nav-btn.active {
  background: rgba(63, 185, 80, 0.12);
  color: #3fb950;
  border-color: rgba(63, 185, 80, 0.3);
}

.nav-arrow {
  width: 14px;
  flex-shrink: 0;
  color: #3fb950;
  font-size: 0.8em;
}

/* ── Sidebar extras ──────────────────────────────────────────────────── */
.sep {
  color: #30363d;
  font-size: 0.72em;
  padding: 6px 2px;
  user-select: none;
}

.sidebar-bot { margin-top: auto; }

.status-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px 10px;
  font-size: 0.84em;
  color: #8b949e;
}

.status-list > div { display: flex; align-items: center; gap: 6px; }

/* ── Main panel ──────────────────────────────────────────────────────── */
.tui-main {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  padding: 12px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 0;
  scrollbar-width: thin;
  scrollbar-color: #30363d #0d1117;
}

.panel-edge {
  color: #30363d;
  font-size: 0.78em;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
}

/* ── ASCII art ───────────────────────────────────────────────────────── */
.ascii-art {
  color: #3fb950;
  font-size: 0.72em;
  line-height: 1.2;
  margin: 6px 0 10px;
  text-shadow: 0 0 12px rgba(63, 185, 80, 0.35);
  overflow-x: auto;
}

/* ── Terminal output block ───────────────────────────────────────────── */
.term-block {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 4px 0 10px;
  padding-left: 2px;
}

.prompt-line {
  display: flex;
  align-items: center;
  font-size: 0.9em;
  margin-top: 10px;
  margin-bottom: 1px;
}

.out-line {
  color: #8b949e;
  font-size: 0.85em;
  padding-left: 20px;
}

.file-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.tui-cursor {
  color: #3fb950;
  transition: opacity 0.08s;
}

.tui-cursor.cursor-off { opacity: 0; }

/* ── Action row ──────────────────────────────────────────────────────── */
.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 14px 0 10px;
}

.act-btn {
  background: none;
  border: 1px solid #3fb950;
  color: #3fb950;
  font-family: inherit;
  font-size: 0.88em;
  padding: 6px 16px;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  text-decoration: none;
  display: inline-block;
  user-select: none;
}

.act-btn:hover {
  background: #3fb950;
  color: #0d1117;
  box-shadow: 0 0 14px rgba(63, 185, 80, 0.45);
}

.act-btn.alt { border-color: #58a6ff; color: #58a6ff; }
.act-btn.alt:hover { background: #58a6ff; color: #0d1117; box-shadow: 0 0 14px rgba(88, 166, 255, 0.4); }

.act-btn.muted { border-color: #6e7681; color: #8b949e; }
.act-btn.muted:hover { border-color: #c9d1d9; color: #c9d1d9; background: none; box-shadow: none; }

/* ── Colour utilities ────────────────────────────────────────────────── */
.c-green  { color: #3fb950; }
.c-blue   { color: #58a6ff; }
.c-yellow { color: #d29922; }
.c-purple { color: #bc8cff; }
.c-white  { color: #e6edf3; }
.c-text   { color: #c9d1d9; }
.dim      { color: #6e7681; }

/* ── Scrollbar ───────────────────────────────────────────────────────── */
.tui-main::-webkit-scrollbar { width: 6px; }
.tui-main::-webkit-scrollbar-track { background: #0d1117; }
.tui-main::-webkit-scrollbar-thumb { background: #30363d; border-radius: 3px; }
.tui-main::-webkit-scrollbar-thumb:hover { background: #3fb950; }

/* ── Responsive ──────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .tui-sidebar { display: none; }
  .ascii-art   { font-size: 0.52em; }
  .tui         { font-size: 13px; }
  .bar-title   { display: none; }
}

@media (max-width: 480px) {
  .ascii-art  { display: none; }
  .bar-keys   { display: none; }
  .tui-main   { padding: 8px 14px 14px; }
}
</style>
