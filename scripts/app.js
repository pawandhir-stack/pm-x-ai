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
      id: "hollow-spec-crisis-ai-prds",
      title: "The Hollow Spec Crisis: Why AI-Generated PRDs Are Hurting PM Credibility",
      excerpt: "Generating a strategy doc or PRD now takes ten minutes instead of two days, but document quality has dropped sharply. Here is what is happening inside product teams right now, why readers are tuning out AI-generated specs, and how to use AI to sharpen your thinking without losing your voice or credibility.",
      pillar: "skills-tools",
      pillarLabel: "PM Skills × AI Tools",
      format: "article",
      formatLabel: "Essay + Playbook",
      date: "Nov 2026",
      readTime: "6 min read",
      featured: true,
      crossPosted: ["LinkedIn", "Substack"],
      tags: ["PRD", "Product Strategy", "Specification", "Workflow"],
      body: [
        "### The Bad Trade-Off: Optimizing for Typing Speed Over Thinking Quality",
        "Over the last year, generating a Product Requirements Document (PRD) or strategy memo has become incredibly fast. A Product Manager can feed a few rough notes into an LLM and produce a formatted, five-page specification in under ten minutes.",
        "On the surface, this looks like a massive productivity win. In practice, it has created a severe quality problem.",
        "Writing a PRD was never supposed to be a typing test. The value of writing a specification comes from the friction of thinking through hard trade-offs, edge cases, and system constraints. When you bypass that struggle by letting a model generate the document from a thin prompt, you trade quality for speed. In product management, where one blurry requirement can waste two sprints of engineering time, trading specification quality for drafting speed is a terrible bargain.",
        "Across product teams today, four specific failure modes are playing out on the ground.",
        "### 1. The Allergic Reaction to Hollow Verbosity",
        "Engineers, designers, and executives have developed an immediate allergic reaction to verbose, AI-generated documents.",
        "When a human PM writes a direct requirement, it usually takes two sentences. When an LLM expands a bullet point, it produces three paragraphs of polite, well-structured filler before stating the actual point. The document looks thorough from a distance, but when you read it closely, it feels hollow. Instead of stating clear decisions, it hides behind broad generalizations like \"ensuring a seamless user experience\" or \"optimizing cross-functional workflows.\"",
        "When team members open a six-page spec and realize the first page contains zero concrete decisions, they stop reading.",
        "### 2. Linguistic Tells That Instantly Tank Credibility",
        "Readers have become remarkably good at spotting the default stylistic habits of large language models within the first ten seconds of scanning a page:",
        "• Overuse of hyphens and dashes: Models constantly stitch clauses together with dashes to simulate conversational rhythm.",
        "• Unnecessary suspense building: Phrases like \"Here is the reality,\" \"But there is a catch,\" or \"This changes everything\" add theatrical fluff that belongs in a marketing thread, not an engineering spec.",
        "• Contrived contrast formulas: Sentences structured as \"This is not just about X; it is about Y\" appear in almost every unedited AI draft.",
        "• Superficial closing punchlines: Models love to wrap up every section with a neat, motivational one-liner that adds zero operational value.",
        "When colleagues spot these patterns in your PRD or strategy memo, your credibility takes an immediate hit. The issue is not that you used an AI tool. The issue is what those patterns signal: that the author outsourced the thinking and did not care enough to edit the argument into direct language.",
        "### 3. Sloppy Authorship and Unchecked Hallucinations",
        "Because LLM output looks clean, structured, and grammatically polished, many writers have stopped checking their documents word by word.",
        "This habit is dangerous. Left unchecked, models routinely hallucinate subtle details inside product specs. They invent API capabilities that do not exist in your stack, assume permissions models you have not built, or state directional metrics that were never verified.",
        "Nothing destroys a PM's trust faster than sitting in a live spec review, getting challenged by a Staff Engineer on a specific paragraph in the PRD, and realizing in real time that you did not actually read or verify that sentence before sharing the doc.",
        "### 4. Ambiguity Disguised as Completeness",
        "A one-shot AI spec fills in every section of a template, which creates a false sense of completion. It will happily generate twelve user stories and a risk mitigation table while completely dodging the two hardest questions the team actually needs answered: What are we explicitly choosing NOT to build in v1? And what happens when the happy path fails midway through a transaction?",
        "### How to Invert the Workflow: Human Writes, AI Interrogates",
        "You do not need to abandon AI tools to fix this. You simply need to flip the role the model plays in your workflow. Never use AI as a ghostwriter to turn five bullets into five pages. Use AI as a ruthless critic to turn messy notes into one dense, verified page.",
        "1. Draft the Core Spine Yourself: Before opening an AI tool, write the raw core of the document in your own blunt words. Cover five essentials: Problem Evidence (customer pain and funnel data), The Core Bet, Hard Non-Goals for v1, System Constraints (API limits, latency, permissions), and Success/Kill Metrics.",
        "2. Use AI to Interrogate, Not Expand: Once your raw draft is on paper, feed it to your AI tool and forbid it from rewriting your prose. Ask it to act as a skeptical Staff Engineer and Lead Designer, listing the top 7 logical gaps, unstated assumptions, missing error states, or vague requirements that would block implementation.",
        "3. Strip Out the AI Style Artifacts: If you use an LLM to help organize tables or tighten sections, enforce a strict style filter. Ban hyphens and dashes as sentence connectors. Ban rhetorical warm-ups, suspense builders, and closing summary punchlines. Replace vague adjectives (\"fast,\" \"intuitive,\" \"graceful\") with explicit numbers or state tables.",
        "4. The Word-by-Word Verification Pass: Treat your name at the top of a PRD or strategy doc as a personal signature. Before sharing a link with your team, read every single line word by word. Verify every number, every technical assumption, and every edge case. If a sentence does not add new information or state a clear decision, delete it.",
        "A one-page document where every sentence is true, direct, and battle-tested will align a team ten times faster than a five-page document that nobody trusts."
      ]
    },
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
      featured: false,
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
      id: "prompting-vs-rag-vs-finetuning-playbook",
      title: "Prompting vs. RAG vs. Fine-Tuning: A Product Manager's Architecture Playbook",
      excerpt: "How to avoid the #1 costly mistake in AI product development: fine-tuning a model when you actually needed Retrieval-Augmented Generation (or a better prompt + eval loop).",
      pillar: "best-practices",
      pillarLabel: "Best Practices",
      format: "article",
      formatLabel: "Interactive Guide + Playbook",
      date: "Nov 2026",
      readTime: "8 min read",
      featured: false,
      crossPosted: ["LinkedIn", "Substack", "GitHub"],
      tags: ["RAG", "Fine-Tuning", "Architecture", "Unit Economics"],
      body: [
        "One of the highest-leverage decisions an AI Product Manager makes with engineering is choosing the right adaptation pattern: In-Context Prompting, Retrieval-Augmented Generation (RAG), or Fine-Tuning.",
        "### The Golden Rule: RAG is for Facts, Fine-Tuning is for Form",
        "• Use Prompt Engineering + Context Caching first to establish your baseline quality and build your evaluation dataset.",
        "• Use RAG when your product relies on dynamic, proprietary, or permission-scoped facts that change frequently and require verifiable source citations.",
        "• Use Fine-Tuning (or distillation into a smaller model) when you need to teach a model a specialized output format, consistent brand voice, domain-specific syntax, or when you need to slash latency (<500ms) and per-token inference cost at scale.",
        "### Try the Interactive Decision Matrix",
        "Scroll down to the Interactive AI PM Workbench on this page to score your specific product constraints across 6 dimensions and export a ready-to-paste Markdown Architecture Brief for your PRD."
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

const DECISION_DIMENSIONS = [
  {
    id: "freshness",
    label: "Knowledge Freshness & Volatility",
    hint: "How often does the underlying domain data or product state change?",
    levels: {
      1: "Static / Rare updates",
      2: "Weekly / Monthly syncs",
      3: "Real-time / Hourly updates"
    }
  },
  {
    id: "grounding",
    label: "Citation & Provenance Requirement",
    hint: "Must outputs cite verifiable user/enterprise docs with strict access controls?",
    levels: {
      1: "Low (Creative / General)",
      2: "Moderate (Helpful context)",
      3: "Strict (Audit trail + ACLs)"
    }
  },
  {
    id: "specialization",
    label: "Output Style, Schema, or Domain Syntax",
    hint: "Do you need strict JSON schemas, brand voice, or proprietary domain taxonomy?",
    levels: {
      1: "Standard instruction following",
      2: "Consistent schema / rubric",
      3: "Deep domain syntax / behavior"
    }
  },
  {
    id: "latency",
    label: "Latency SLA (Time-to-Completion)",
    hint: "How tight is your UX latency budget for each user interaction?",
    levels: {
      1: "Relaxed (> 3s / Async)",
      2: "Interactive (1–2.5s)",
      3: "Real-Time (< 400ms)"
    }
  },
  {
    id: "volume",
    label: "Monthly Request Scale & Unit Cost Pressure",
    hint: "Higher scale increases the ROI of smaller fine-tuned models or aggressive caching.",
    levels: {
      1: "Early MVP (< 50k req/mo)",
      2: "Growth (50k–1M req/mo)",
      3: "High Scale (10M+ req/mo)"
    }
  },
  {
    id: "dataMaturity",
    label: "Curated Training Data & Eval Maturity",
    hint: "Do you have verified input/output golden pairs ready for supervised fine-tuning?",
    levels: {
      1: "None (0–25 examples)",
      2: "Golden Eval Set (100–500)",
      3: "Production Flywheel (5,000+)"
    }
  }
];

const DECISION_PRESETS = {
  "enterprise-copilot": {
    name: "Enterprise Docs Copilot",
    values: { freshness: 3, grounding: 3, specialization: 1, latency: 2, volume: 2, dataMaturity: 2 }
  },
  "json-classifier": {
    name: "High-Volume JSON / Tone Engine",
    values: { freshness: 1, grounding: 1, specialization: 3, latency: 3, volume: 3, dataMaturity: 3 }
  },
  "zero-to-one-mvp": {
    name: "0→1 AI Feature MVP",
    values: { freshness: 1, grounding: 1, specialization: 2, latency: 2, volume: 1, dataMaturity: 1 }
  },
  "vertical-specialist": {
    name: "Regulated Legal / Medical Analyst",
    values: { freshness: 3, grounding: 3, specialization: 3, latency: 2, volume: 2, dataMaturity: 3 }
  }
};

const state = {
  data: FALLBACK_DATA,
  activePillar: "all",
  activeFormat: "all",
  searchQuery: "",
  activePreset: "enterprise-copilot",
  dmValues: { ...DECISION_PRESETS["enterprise-copilot"].values }
};

async function loadData() {
  try {
    const res = await fetch("./data/content.json", { cache: "no-cache" });
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
  renderDecisionMatrix();
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

function evaluateArchitectures(v) {
  // v has { freshness, grounding, specialization, latency, volume, dataMaturity } each in 1..3
  // 1. Prompt Engineering + Context Caching
  const promptRaw =
    (4 - v.freshness) * 16 +
    (4 - v.grounding) * 14 +
    (4 - v.specialization) * 14 +
    (4 - v.volume) * 16 +
    (4 - v.dataMaturity) * 20 +
    (v.latency === 2 ? 15 : v.latency === 1 ? 18 : 8);

  // 2. RAG (Retrieval-Augmented Generation + Hybrid Search)
  const ragRaw =
    v.freshness * 24 +
    v.grounding * 26 +
    (4 - v.specialization) * 10 +
    (v.latency <= 2 ? 16 : 8) +
    (v.volume >= 2 ? 12 : 10);

  // 3. Fine-Tuned Small/Open Model (LoRA / Distillation)
  const ftRaw =
    (4 - v.freshness) * 12 +
    (4 - v.grounding) * 12 +
    v.specialization * 24 +
    v.latency * 20 +
    v.volume * 18 +
    v.dataMaturity * 22 -
    (v.dataMaturity === 1 ? 28 : 0);

  // 4. Hybrid: RAG + Fine-Tuned / Routed Model
  const hybridRaw =
    v.freshness * 17 +
    v.grounding * 17 +
    v.specialization * 19 +
    v.volume * 14 +
    v.dataMaturity * 18 +
    (v.freshness >= 2 && v.specialization >= 2 ? 18 : 0) -
    (v.dataMaturity === 1 ? 22 : 0);

  const clampPct = (val, maxPossible) => Math.max(18, Math.min(98, Math.round((val / maxPossible) * 100)));

  const results = [
    {
      id: "rag",
      name: "RAG (Hybrid Search + Frontier/Mid Model)",
      score: clampPct(ragRaw, 198),
      timeToMvp: "1–2 Sprints",
      unitCostProfile: "Moderate (Embedding + Retrieval + Context Tokens)",
      primaryEvalFocus: "Retrieval Recall@K & Hallucination / Faithfulness",
      roadmapPhase: "Start with chunking + hybrid BM25/vector search + reranker before touching model weights.",
      summary:
        "Best when your product depends on dynamic, proprietary, or permission-scoped knowledge and requires verifiable source citations."
    },
    {
      id: "prompt",
      name: "Prompt Engineering + Context Caching",
      score: clampPct(promptRaw, 225),
      timeToMvp: "1–3 Days",
      unitCostProfile: "Low upfront; scales linearly with token volume",
      primaryEvalFocus: "Instruction Adherence & Edge-Case Golden Dataset",
      roadmapPhase: "Ship with structured outputs + prompt caching first to collect real production traffic.",
      summary:
        "Fastest 0→1 validation path when training data is scarce and knowledge is either static or fits cleanly in cached system prompts."
    },
    {
      id: "finetune",
      name: "Fine-Tuned Small Model (LoRA / Distillation)",
      score: clampPct(ftRaw, 255),
      timeToMvp: "3–5 Sprints",
      unitCostProfile: "Lowest marginal cost at scale (5–15x cheaper per call)",
      primaryEvalFocus: "Schema Validity, Regression vs. Teacher Model, Drift",
      roadmapPhase: "Distill frontier model outputs from your golden eval set into an 8B/mini model for speed & margin.",
      summary:
        "Ideal when locking in specialized domain syntax, strict JSON schemas, brand tone, or sub-400ms latency at high request volume."
    },
    {
      id: "hybrid",
      name: "Hybrid Architecture (RAG + Fine-Tuned Generator)",
      score: clampPct(hybridRaw, 248),
      timeToMvp: "4–6+ Sprints",
      unitCostProfile: "High initial eng investment; optimized unit margin",
      primaryEvalFocus: "End-to-End Citation Accuracy + Domain Format Compliance",
      roadmapPhase: "Phase 1: Prompt+RAG → Phase 2: Harvest verified traces → Phase 3: Fine-tune reader/router.",
      summary:
        "Combines live retrieval for up-to-the-minute grounded facts with a domain-tuned model for specialized reasoning or output structure."
    }
  ];

  results.sort((a, b) => b.score - a.score);
  return results;
}

function renderDecisionMatrix() {
  const slidersContainer = document.getElementById("dm-sliders-list");
  if (!slidersContainer) return;

  slidersContainer.innerHTML = DECISION_DIMENSIONS.map((dim) => {
    const val = state.dmValues[dim.id] || 2;
    return `
      <div class="dm-control-group">
        <div class="dm-control-top">
          <label class="dm-control-label" for="dm-slider-${dim.id}">${dim.label}</label>
          <span class="dm-control-val" id="dm-val-${dim.id}">${dim.levels[val]}</span>
        </div>
        <p class="dm-control-hint">${dim.hint}</p>
        <input
          type="range"
          min="1"
          max="3"
          step="1"
          value="${val}"
          class="dm-range"
          id="dm-slider-${dim.id}"
          data-dm-dim="${dim.id}"
          aria-label="${dim.label}"
        />
        <div class="dm-scale-labels">
          <span>1 · ${dim.levels[1]}</span>
          <span>3 · ${dim.levels[3]}</span>
        </div>
      </div>
    `;
  }).join("");

  slidersContainer.querySelectorAll(".dm-range").forEach((input) => {
    input.addEventListener("input", (e) => {
      const dimId = e.target.dataset.dmDim;
      const newVal = Number(e.target.value);
      state.dmValues[dimId] = newVal;
      state.activePreset = "custom";
      document.querySelectorAll("[data-dm-preset]").forEach((btn) => btn.classList.remove("active"));

      const dimMeta = DECISION_DIMENSIONS.find((d) => d.id === dimId);
      const badge = document.getElementById(`dm-val-${dimId}`);
      if (badge && dimMeta) {
        badge.textContent = dimMeta.levels[newVal];
      }
      renderDecisionResults();
    });
  });

  renderDecisionResults();
}

function renderDecisionResults() {
  const winnerBanner = document.getElementById("dm-winner-banner");
  const scoresList = document.getElementById("dm-scores-list");
  const tradeoffsGrid = document.getElementById("dm-tradeoffs-grid");
  if (!winnerBanner || !scoresList || !tradeoffsGrid) return;

  const ranked = evaluateArchitectures(state.dmValues);
  const top = ranked[0];
  const runnerUp = ranked[1];

  winnerBanner.innerHTML = `
    <div class="dm-winner-kicker">
      <span>★ Recommended Architecture</span>
      <span>${top.score}% Fit Score</span>
    </div>
    <div class="dm-winner-title">${top.name}</div>
    <p class="dm-winner-summary">
      ${top.summary} <strong>Rollout strategy:</strong> ${top.roadmapPhase}
    </p>
  `;

  scoresList.innerHTML = ranked
    .map(
      (item, idx) => `
      <div class="dm-score-row ${idx === 0 ? "is-top" : ""}">
        <div class="dm-score-header">
          <span class="dm-score-name">
            ${idx === 0 ? "🏆" : `${idx + 1}.`} ${item.name}
          </span>
          <span class="dm-score-pct">${item.score}%</span>
        </div>
        <div class="dm-bar-track">
          <div class="dm-bar-fill" style="width: ${item.score}%;"></div>
        </div>
        <div class="dm-score-note">${item.summary}</div>
      </div>
    `
    )
    .join("");

  tradeoffsGrid.innerHTML = `
    <div class="dm-tradeoff-box">
      <div class="dm-tradeoff-label">Est. Time to MVP</div>
      <div class="dm-tradeoff-val">${top.timeToMvp}</div>
    </div>
    <div class="dm-tradeoff-box">
      <div class="dm-tradeoff-label">Unit Cost Trajectory</div>
      <div class="dm-tradeoff-val">${top.unitCostProfile}</div>
    </div>
    <div class="dm-tradeoff-box">
      <div class="dm-tradeoff-label">Primary Eval Metric</div>
      <div class="dm-tradeoff-val">${top.primaryEvalFocus}</div>
    </div>
    <div class="dm-tradeoff-box">
      <div class="dm-tradeoff-label">Runner-Up Alternative</div>
      <div class="dm-tradeoff-val">${runnerUp.name} (${runnerUp.score}%)</div>
    </div>
  `;
}

function generateMarkdownBrief() {
  const ranked = evaluateArchitectures(state.dmValues);
  const top = ranked[0];
  const lines = [
    `## AI Architecture Decision Brief: ${top.name} (${top.score}% Fit)`,
    ``,
    `### 1. Product Constraints Profile`,
    ...DECISION_DIMENSIONS.map((d) => `- **${d.label}:** ${d.levels[state.dmValues[d.id]]} (${state.dmValues[d.id]}/3)`),
    ``,
    `### 2. Recommended Architecture & Rollout`,
    `- **Primary Recommendation:** **${top.name}** (${top.score}% fit)`,
    `- **Why It Wins:** ${top.summary}`,
    `- **Recommended Phased Rollout:** ${top.roadmapPhase}`,
    `- **Estimated Time to MVP:** ${top.timeToMvp}`,
    `- **Unit Economics Profile:** ${top.unitCostProfile}`,
    `- **Primary Evaluation Focus:** ${top.primaryEvalFocus}`,
    ``,
    `### 3. Architecture Scorecard Comparison`,
    ...ranked.map((r, i) => `${i + 1}. **${r.name}** — ${r.score}% fit`),
    ``,
    `*Generated via the PM × AI Interactive Architecture Workbench (https://pawandhir-stack.github.io/pm-x-ai/)*`
  ];
  return lines.join("\n");
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
    featuredBtn.addEventListener("click", () => openPostModal("hollow-spec-crisis-ai-prds"));
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

  // Decision Matrix preset buttons
  document.querySelectorAll("[data-dm-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const presetKey = btn.dataset.dmPreset;
      const preset = DECISION_PRESETS[presetKey];
      if (!preset) return;
      state.activePreset = presetKey;
      state.dmValues = { ...preset.values };
      document.querySelectorAll("[data-dm-preset]").forEach((b) => {
        b.classList.toggle("active", b.dataset.dmPreset === presetKey);
      });
      renderDecisionMatrix();
    });
  });

  // Decision Matrix reset button
  const dmResetBtn = document.getElementById("dm-reset-btn");
  if (dmResetBtn) {
    dmResetBtn.addEventListener("click", () => {
      state.activePreset = "enterprise-copilot";
      state.dmValues = { ...DECISION_PRESETS["enterprise-copilot"].values };
      document.querySelectorAll("[data-dm-preset]").forEach((b) => {
        b.classList.toggle("active", b.dataset.dmPreset === "enterprise-copilot");
      });
      renderDecisionMatrix();
    });
  }

  // Decision Matrix copy Markdown brief button
  const dmCopyBtn = document.getElementById("dm-copy-prd-btn");
  if (dmCopyBtn) {
    dmCopyBtn.addEventListener("click", async () => {
      const markdown = generateMarkdownBrief();
      const statusEl = document.getElementById("dm-copy-status");
      try {
        await navigator.clipboard.writeText(markdown);
        if (statusEl) {
          statusEl.textContent = "✓ Copied Markdown Architecture Brief to clipboard!";
        }
      } catch (_) {
        if (statusEl) {
          statusEl.textContent = "✓ Brief generated (select & copy from console or HTTPS page).";
        }
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupInteractions();
  loadData();
});
