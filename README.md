# PM × AI — How Product Management is Evolving with AI

An open-source editorial publication and interactive field guide exploring how Product Management is evolving in the age of Artificial Intelligence.

Built for **existing Product Managers**, **aspiring PMs**, and **builders** interested in the intersection of product craft and AI tooling.

---

## Product Thesis & Editorial Pillars

As foundation models and agentic workflows become core building blocks of software, traditional deterministic product management is shifting toward probabilistic specification, continuous evaluation, and rapid coded prototyping.

This publication is organized around four core pillars:

1. **01 · PM Skills × AI Tools:** How discovery, synthesis, PRDs, prototyping, and analytics change with AI copilots and coding agents.
2. **02 · Best Practices & Playbooks:** Practical frameworks for AI evals, non-deterministic UX guardrails, and unit economics.
3. **03 · AI Product Case Studies:** Visual teardowns and architectural deep dives into real-world AI products.
4. **04 · Guest Interviews:** Video and written conversations with AI PMs, founders, and hiring leaders.

---

## Architecture & Technical Highlights

This project is intentionally engineered with a **zero-dependency, fast, maintainable architecture** that deploys for **$0/month** via GitHub Pages:

- **Structured Data-Driven Content Engine (`data/content.json`):** Decouples editorial content (essays, YouTube video embeds, visual teardowns, and the PM Skill Evolution Matrix) from presentation logic.
- **Multi-Format Media Support:** Built-in filtering by **Pillar**, **Format** (`Text Essay`, `YouTube / Video`, `Visual Teardown`), and **Instant Keyword Search**, plus cross-syndication badges (`YouTube`, `LinkedIn`, `Substack`, `X`).
- **Modern Web Standards:**
  - Semantic HTML5 with native `<dialog>` modal reader and privacy-enhanced YouTube embeds (`youtube-nocookie.com`).
  - Editorial typography (`Newsreader` serif + `Inter` sans + `JetBrains Mono` metadata) with persistent Light/Dark theme support via CSS Custom Properties.
- **CLI Publishing Workflow (`scripts/new_post.py`):** Scaffold new articles, case studies, or YouTube interview entries in seconds via Python CLI.
- **Automated CI/CD (`.github/workflows/deploy.yml`):** Automated deployment to GitHub Pages on every push to `main`.

---

## Quick Start (Local Development)

No heavy build step or `node_modules` required.

```bash
# 1. Start a local web server using Python 3
python3 -m http.server 8080

# 2. Open in your browser
open http://localhost:8080
```

---

## Publishing a New Post / Video / Interview

You can either edit `data/content.json` directly or run the included CLI helper:

```bash
python3 scripts/new_post.py \
  --title "How We Built an LLM Evaluation Harness in 48 Hours" \
  --pillar best-practices \
  --format video \
  --youtube-id "M7lc1UVf-VE" \
  --excerpt "A step-by-step walkthrough of turning user failure modes into an automated eval rubric."
```

---

## Deploying Free on GitHub Pages

1. Push this repository to GitHub (`main` branch).
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Every push to `main` automatically deploys your live website in ~30 seconds.
