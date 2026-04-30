# Certifications Content Guide

## How to add a new certification

1. Create a new file in this folder.
   Example: `aws-saa.yaml`
2. Add the certification fields in YAML or JSON format.
3. If you want an image/badge preview, place it under `public/images/certs/`.

## Recommended YAML template

```yaml
name: "AWS Solutions Architect Associate"
issuer: "Amazon Web Services"
date: "2025-03-10"
order: 1
tags: ["AWS", "Architecture", "Cloud"]
verifyUrl: "https://www.credly.com/badges/your-badge-id"
badge: "/images/certs/aws-saa.png"
description: "Short summary shown on the card."
detailedDescription: "Longer explanation shown in the popup along with the larger certificate preview."
```

## Field reference

### `name`
- Required
- Full certification name

### `issuer`
- Required
- Organization or platform that issued the certification

### `date`
- Required
- Format: `YYYY-MM-DD`
- Used for sorting

### `order`
- Optional
- Lower numbers appear earlier
- Useful when you want manual control over certification placement
- Example: `1`, `2`, `3`
- If omitted, the site falls back to date-based ordering

### `tags`
- Optional
- Array of short labels shown in the popup
- Useful for skills, domains, or technologies
- Example: `["AWS", "Architecture", "Cloud"]`

### `verifyUrl`
- Optional
- Link to the public verification page

### `badge`
- Optional
- Image of the certificate or badge
- Recommended location: `public/images/certs/...`
- Example: `"/images/certs/aws-saa.png"`

### `description`
- Optional
- Short description shown on the small card
- On the card, it is visually limited to 2 lines

### `detailedDescription`
- Optional
- Longer description shown inside the popup
- If omitted, the popup falls back to `description`

## Popup behavior

When a user clicks a certification card:
- a popup opens
- the title appears at the top
- the certificate image appears below it, if provided
- tags appear as a small list if provided
- the longer description and meta appear below that

If `badge` is missing, the popup still works and just shows the text content.

## Sorting behavior

- lower `order` values appear first
- certifications without `order` fall back to newer `date` values first