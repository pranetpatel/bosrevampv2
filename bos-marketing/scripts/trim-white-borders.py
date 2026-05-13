"""Trim near-white margins from chapter PNGs (embedded letterboxing in exports)."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

MEDIA = Path(__file__).resolve().parent.parent / "public" / "media"
FILES = [
    "chapter-velocity-momentum.png",
    "chapter-gap-fragmentation-unity.png",
    "chapter-system-coordination.png",
]


def trim_near_white(path: Path, tol: int = 10) -> None:
    im = Image.open(path)
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA")

    if im.mode == "RGBA":
        base = Image.new("RGB", im.size, (255, 255, 255))
        base.paste(im, mask=im.split()[3])
        rgb = base
        orig = im
    else:
        rgb = im
        orig = im

    w, h = rgb.size
    px = rgb.load()

    def edge_pixel(x: int, y: int) -> bool:
        p = px[x, y]
        return p[0] >= 255 - tol and p[1] >= 255 - tol and p[2] >= 255 - tol

    left, top, right, bottom = w, h, 0, 0
    found = False
    for y in range(h):
        for x in range(w):
            if edge_pixel(x, y):
                continue
            found = True
            if x < left:
                left = x
            if x > right:
                right = x
            if y < top:
                top = y
            if y > bottom:
                bottom = y

    if not found:
        print(f"skip (all edge?): {path}", file=sys.stderr)
        return

    cropped = orig.crop((left, top, right + 1, bottom + 1))
    cropped.save(path, optimize=True)
    print(f"{path.name}: {w}x{h} -> {cropped.size[0]}x{cropped.size[1]}")


def main() -> None:
    for name in FILES:
        p = MEDIA / name
        if not p.exists():
            print(f"missing: {p}", file=sys.stderr)
            continue
        trim_near_white(p)


if __name__ == "__main__":
    main()
