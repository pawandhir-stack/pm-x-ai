#!/usr/bin/env python3
"""
CLI utility to scaffold and append a new article, video walkthrough, visual teardown,
or guest interview into data/content.json.

Usage:
  python3 scripts/new_post.py --title "My New Post" --pillar skills-tools --format article
"""

import argparse
import datetime
import json
import re
from pathlib import Path

CONTENT_PATH = Path(__file__).resolve().parent.parent / "data" / "content.json"

PILLAR_LABELS = {
    "skills-tools": "PM Skills × AI Tools",
    "best-practices": "Best Practices",
    "case-studies": "Case Studies",
    "interviews": "Guest Interviews",
}

FORMAT_LABELS = {
    "article": "Essay + Framework",
    "video": "Video + Walkthrough",
    "visual": "Visual Teardown",
}


def slugify(text: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return slug or "untitled-post"


def main() -> None:
    parser = argparse.ArgumentParser(description="Add a new post to data/content.json")
    parser.add_argument("--title", required=True, help="Post headline")
    parser.add_argument(
        "--pillar",
        default="skills-tools",
        choices=list(PILLAR_LABELS.keys()),
        help="Editorial pillar ID",
    )
    parser.add_argument(
        "--format",
        default="article",
        choices=list(FORMAT_LABELS.keys()),
        help="Content format (article, video, visual)",
    )
    parser.add_argument("--excerpt", default="Summary of key takeaways for Product Managers.", help="Short summary")
    parser.add_argument("--youtube-id", default="", help="Optional YouTube video ID for video embeds")
    args = parser.parse_args()

    data = json.loads(CONTENT_PATH.read_text(encoding="utf-8"))
    now_str = datetime.date.today().strftime("%b %Y")

    new_entry = {
        "id": slugify(args.title),
        "title": args.title,
        "excerpt": args.excerpt,
        "pillar": args.pillar,
        "pillarLabel": PILLAR_LABELS[args.pillar],
        "format": args.format,
        "formatLabel": FORMAT_LABELS[args.format],
        "date": now_str,
        "readTime": "10 min watch" if args.format == "video" else "5 min read",
        "featured": False,
        "crossPosted": ["LinkedIn", "YouTube"] if args.format == "video" else ["LinkedIn"],
        "tags": ["AI PM", PILLAR_LABELS[args.pillar]],
        "body": [
            "Write your opening paragraph here...",
            "### Key Takeaways",
            "1. First insight on how PM craft is evolving with AI.",
            "2. Practical framework or takeaway for the reader.",
        ],
    }

    if args.youtube_id:
        new_entry["youtubeId"] = args.youtube_id

    data["posts"].insert(0, new_entry)
    CONTENT_PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Added new post '{args.title}' (id: {new_entry['id']}) to {CONTENT_PATH}")


if __name__ == "__main__":
    main()
