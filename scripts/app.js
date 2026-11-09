const FALLBACK_DATA = {
  pillars: [
    {
      id: "skills-tools",
      number: "01",
      title: "PM Skills × AI Tools",
      description: "How core product workflows—discovery, prototyping, PRDs, and analytics—transform with AI copilots and agents.",
      badge: "Core Craft"
    },
    {
      id: "best-practices",
      number: "02",
      title: "Best Practices & Playbooks",
      description: "Actionable guides on AI evals, non-deterministic UX, prompt engineering for PMs, and shipping with confidence.",
      badge: "Frameworks"
    },
    {
      id: "case-studies",
      number: "03",
      title: "AI Product Case Studies",
      description: "Teardowns and architectural deep dives into how leading product teams design, measure, and scale AI features.",
      badge: "Teardowns"
    },
    {
      id: "interviews",
      number: "04",
      title: "Guest Interviews",
      description: "Candid video and written conversations with AI PMs, founders, and researchers building the next wave of products.",
      badge: "Conversations"
    }
  ],
  posts: [
    {
      id: "evals-are-the-new-prd",
      title: "Why Evals Are the New PRD: Specifying Non-Deterministic Products",
      excerpt: "Traditional PRDs assume deterministic if-then logic. When building with LLMs, your evaluation dataset is your true product specification. Here is a practical framework for writing Eval-Driven PRDs.",
      pillar: "best-practices",
      pillarLabel: "Best Practices",
      format: "article",
      formatLabel: "Essay + Framework",
      date: "Nov 2026",
      readTime: "7 min read",
      featured: true,
      crossPosted: ["LinkedIn", "Substack"],
      tags: ["Evals", "PRD", "Product Strategy"],
      body: [
        "For the last fifteen years, Product Managers wrote specifications around deterministic states: Given state A, when the user clicks B, the system returns C. With foundation models and agentic workflows, that contract breaks.",
        "### The Shift from Rules to Distributions",
        "An AI feature doesn't pass or fail a single binary test—it performs across a probability distribution of user intents, edge cases, and latency constraints. If you only write prose user stories, engineering and product end up debating anecdotal prompt outputs instead of shipping systematically.",
        "### The 4-Part AI Product Spec",
        "1. Golden Dataset (25–50 real scenarios): Before writing code, curate examples of ideal inputs, messy real-world inputs, and adversarial inputs alongside the expected rubric.",
        "2. Scoring Rubric (Code + LLM-as-Judge): Define hard constraints (JSON schema validity, latency < 1.5s, zero PII leakage) and qualitative dimensions (tone, groundedness, actionability).",
        "3. Fallback & UX Guardrails: What happens when confidence is low? Design graceful degradation before launch.",
        "4. Unit Economics Ceiling: Token cost per successful task completion—not per API call."
      ]
    },
    {
      id: "from-wireframes-to-working-prototypes",
      title: "From Static PRDs to Live Code: The AI-Native PM Prototyping Stack",
      excerpt: "How product managers are using coding agents, Cursor/Antigravity, and synthetic data to validate product ideas with working software in 45 minutes instead of waiting two sprints.",
      pillar: "skills-tools",
      pillarLabel: "PM Skills × AI Tools",
      format: "video",
      formatLabel: "Video + Walkthrough",
      date: "Nov 2026",
      readTime: "14 min watch",
      featured: false,
      youtubeId: "M7lc1UVf-VE",
      crossPosted: ["YouTube", "LinkedIn"],
      tags: ["Prototyping", "AI Coding", "Workflow"],
      body: [
        "The bottleneck in product discovery used to be translating a 6-page document into something a customer could actually react to. Today, an AI-fluent PM can go from raw customer call transcripts to an interactive coded prototype in a single afternoon.",
        "### What We Cover in This Video Walkthrough",
        "1. Synthesizing Unstructured Discovery: Extracting friction points across 20 user interviews without losing nuance.",
        "2. Rapid Interactive Prototyping: Pairing with an AI coding agent to build a realistic front-end flow with real state.",
        "3. Live Customer Testing: Why users give 10x more honest feedback when clicking a working prototype vs. viewing static slides."
      ]
    },
    {
      id: "case-study-copilot-ux-patterns",
      title: "Case Study: Why Inline Diffs Beat Chat Sidebars in B2B Workflows",
      excerpt: "A visual teardown of 12 enterprise AI products showing why the 'slap a chatbot on the right side' era is ending—and the ambient UX patterns replacing it.",
      pillar: "case-studies",
      pillarLabel: "Case Studies",
      format: "visual",
      formatLabel: "Visual Teardown",
      date: "Oct 2026",
      readTime: "6 min read",
      featured: false,
      crossPosted: ["YouTube", "X", "LinkedIn"],
      tags: ["UX Patterns", "B2B AI", "Case Study"],
      body: [
        "When generative AI first entered SaaS products, nearly every team shipped the exact same interface: a collapsible right-hand chat drawer that forced users to become prompt engineers.",
        "### Key Findings from Our 12-Product Teardown",
        "• Blank-Canvas Paralysis: 68% of enterprise users abandon open-ended chat boxes after their second session because typing context takes longer than doing the task manually.",
        "• Ambient Next-Action Previews: High-retention AI products pre-compute the likely action in the background and present a one-click Tab-to-Accept or inline diff directly inside the user's canvas.",
        "• Trust Through Provenance: Showing why the model suggested an action (linking to the source ticket, doc, or metric) increased acceptance rates by 2.4x."
      ]
    },
    {
      id: "interview-hiring-ai-pms",
      title: "Guest Interview: What Hiring Managers Actually Look for in AI Product Managers",
      excerpt: "We sat down with VP of Product leaders to unpack the difference between 'AI theater' on a resume and genuine AI product sense—plus how aspiring PMs can build proof-of-work.",
      pillar: "interviews",
      pillarLabel: "Guest Interviews",
      format: "video",
      formatLabel: "Guest Interview (Video + Transcript)",
      date: "Oct 2026",
      readTime: "22 min watch",
      featured: false,
      youtubeId: "M7lc1UVf-VE",
      crossPosted: ["YouTube", "Spotify", "LinkedIn"],
      tags: ["Career", "Interviews", "Hiring"],
      body: [
        "In our inaugural guest interview, we explore the #1 question aspiring and transitioning Product Managers ask: How do I prove I can build AI products if my current company moves slowly?",
        "### Highlights from the Conversation",
        "Q: What separates a top 5% AI PM candidate right now?",
        "\"They don't just talk about models; they show me something they built or evaluated over a weekend. When a candidate shares a GitHub repo or a live tool they shipped—and can explain where the model failed and how they fixed the prompt or UX—that immediately puts them at the top of the stack.\"",
        "Q: Do PMs need to be machine learning engineers?",
        "\"No. You don't need to write custom CUDA kernels. You do need intuition for context windows, retrieval vs. fine-tuning trade-offs, latency budgets, and how to design an evaluation harness.\""
      ]
    }
  ],
  toolMatrix: [
    {
      stage: "01. Discovery & Synthesis",
      traditional: "Manual tagging in spreadsheets, static affinity maps",
      aiAugmented: "Automated theme clustering across transcripts + citation-backed insight search",
      pmSkillShift: "From summarizing notes → Asking sharper investigative questions & validating edge cases"
    },
    {
      stage: "02. Spec & Prototyping",
      traditional: "10-page narrative PRD + waiting weeks for design mocks",
      aiAugmented: "Working coded prototypes + Eval dataset + concise architectural constraints",
      pmSkillShift: "From describing screens → Designing interactive flows & failure-mode guardrails"
    },
    {
      stage: "03. Quality & Shipping",
      traditional: "Binary QA sign-off before launch",
      aiAugmented: "Automated LLM-as-judge evals, shadow deployments, & cost/latency telemetry",
      pmSkillShift: "From one-time UAT → Continuous quality calibration & unit-economics management"
    },
    {
      stage: "04. Growth & Iteration",
      traditional: "Funnel analytics only (clicks & pageviews)",
      aiAugmented: "Semantic conversation analytics, thumbs-up/down root-cause clustering, implicit acceptance rate",
      pmSkillShift: "From funnel optimization → Closing the data flywheel loop"
    }
  ]
};

const state = {
  data: FALLBACK_DATA,
  activePillar: "all",
  activeFormat: "all",
  searchQuery: ""
};

async function loadData() {
  try {
    const res = await fetch("./data/content.json");
    if (res.ok) {
      state.data = await res.json();
    }
  } catch (_) {
    // Fallback data is already loaded for file:// protocol compatibility
  }
  renderAll();
}

function renderAll() {
  renderPillars();
  renderPosts();
  renderMatrix();
}

function renderPillars() {
  const container = document.getElementById("pillars-grid");
  if (!container) return;

  container.innerHTML = state.data.pillars
    .map((pillar) => {
      const isActive = state.activePillar === pillar.id;
      return `
        <article class="pillar-card ${isActive ? "active" : ""}" data-pillar="${pillar.id}">
          <div>
            <div class="pillar-top">
              <span class="pillar-num">${pillar.number}</span>
              <span class="pillar-badge">${pillar.badge}</span>
            </div>
            <h3>${pillar.title}</h3>
            <p>${pillar.description}</p>
          </div>
          <div class="pillar-action">
            ${isActive ? "✓ Filtering feed (click to reset)" : "Explore pillar →"}
          </div>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll(".pillar-card").forEach((card) => {
    card.addEventListener("click", () => {
      const clicked = card.dataset.pillar;
      state.activePillar = state.activePillar === clicked ? "all" : clicked;
      syncFilterButtons();
      renderPillars();
      renderPosts();
      document.getElementById("content-feed")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

function getFormatIcon(format) {
  if (format === "video") return "▶";
  if (format === "visual") return "◈";
  return "✦";
}

function renderPosts() {
  const container = document.getElementById("posts-grid");
  if (!container) return;

  const filtered = state.data.posts.filter((post) => {
    const matchesPillar = state.activePillar === "all" || post.pillar === state.activePillar;
    const matchesFormat = state.activeFormat === "all" || post.format === state.activeFormat;
    const q = state.searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));
    return matchesPillar && matchesFormat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="post-card" style="grid-column: 1 / -1; text-align: center; padding: 2.5rem;">
        <h3>No matching entries found</h3>
        <p>Try clearing your search query or switching content filters.</p>
        <div>
          <button class="btn btn-outline" id="reset-filters-btn">Reset all filters</button>
        </div>
      </div>
    `;
    document.getElementById("reset-filters-btn")?.addEventListener("click", () => {
      state.activePillar = "all";
      state.activeFormat = "all";
      state.searchQuery = "";
      const searchEl = document.getElementById("search-input");
      if (searchEl) searchEl.value = "";
      syncFilterButtons();
      renderPillars();
      renderPosts();
    });
    return;
  }

  container.innerHTML = filtered
    .map(
      (post) => `
      <article class="post-card">
        <div>
          <div class="post-meta">
            <span class="post-format-badge">${getFormatIcon(post.format)} ${post.formatLabel}</span>
            <span>${post.date} · ${post.readTime}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
        </div>
        <div class="post-footer">
          <div class="crosspost-list" title="Cross-posted channels">
            ${(post.crossPosted || [])
              .map((platform) => `<span class="crosspost-chip">↗ ${platform}</span>`)
              .join("")}
          </div>
          <button class="btn btn-outline read-post-btn" data-post-id="${post.id}">
            ${post.format === "video" ? "Watch & Read →" : "Read Entry →"}
          </button>
        </div>
      </article>
    `
    )
    .join("");

  container.querySelectorAll(".read-post-btn").forEach((btn) => {
    btn.addEventListener("click", () => openPostModal(btn.dataset.postId));
  });
}

function renderMatrix() {
  const tbody = document.getElementById("matrix-tbody");
  if (!tbody) return;

  tbody.innerHTML = state.data.toolMatrix
    .map(
      (row) => `
      <tr>
        <td class="stage-col">${row.stage}</td>
        <td>${row.traditional}</td>
        <td>${row.aiAugmented}</td>
        <td><strong>${row.pmSkillShift}</strong></td>
      </tr>
    `
    )
    .join("");
}

function openPostModal(postId) {
  const post = state.data.posts.find((p) => p.id === postId);
  const dialog = document.getElementById("reader-modal");
  const content = document.getElementById("modal-content");
  if (!post || !dialog || !content) return;

  const videoMarkup = post.youtubeId
    ? `
      <div class="video-embed">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${post.youtubeId}"
          title="${post.title}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    `
    : "";

  const bodyHtml = (post.body || [])
    .map((block) => {
      if (block.startsWith("### ")) {
        return `<h3>${block.replace("### ", "")}</h3>`;
      }
      return `<p>${block}</p>`;
    })
    .join("");

  content.innerHTML = `
    <div class="post-meta" style="margin-bottom: 1rem;">
      <span class="post-format-badge">${getFormatIcon(post.format)} ${post.pillarLabel} · ${post.formatLabel}</span>
      <span>${post.date} · ${post.readTime}</span>
    </div>
    <h2>${post.title}</h2>
    ${videoMarkup}
    ${bodyHtml}
    <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
      <div class="crosspost-list">
        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">Syndicated on:</span>
        ${(post.crossPosted || []).map((p) => `<span class="crosspost-chip">↗ ${p}</span>`).join("")}
      </div>
      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
        Edit in <code>data/content.json</code>
      </span>
    </div>
  `;

  dialog.showModal();
}

function syncFilterButtons() {
  document.querySelectorAll("[data-filter-pillar]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filterPillar === state.activePillar);
  });
  document.querySelectorAll("[data-filter-format]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filterFormat === state.activeFormat);
  });
}

function setupInteractions() {
  // Theme toggle
  const savedTheme = localStorage.getItem("pm_ai_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.textContent = savedTheme === "dark" ? "☀" : "☾";
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("pm_ai_theme", next);
      themeBtn.textContent = next === "dark" ? "☀" : "☾";
    });
  }

  // Pillar filter buttons
  document.querySelectorAll("[data-filter-pillar]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activePillar = btn.dataset.filterPillar;
      syncFilterButtons();
      renderPillars();
      renderPosts();
    });
  });

  // Format filter buttons
  document.querySelectorAll("[data-filter-format]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeFormat = btn.dataset.filterFormat;
      syncFilterButtons();
      renderPosts();
    });
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderPosts();
    });
  }

  // Featured hero button
  const featuredBtn = document.getElementById("hero-featured-btn");
  if (featuredBtn) {
    featuredBtn.addEventListener("click", () => openPostModal("evals-are-the-new-prd"));
  }

  // Modal close
  const dialog = document.getElementById("reader-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  if (closeBtn && dialog) {
    closeBtn.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  // Newsletter form demo handler
  const form = document.getElementById("newsletter-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.getElementById("newsletter-status");
      if (status) {
        status.textContent = "✓ Subscribed! You'll receive new essays, case studies, and YouTube drops.";
      }
      form.reset();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupInteractions();
  loadData();
});
