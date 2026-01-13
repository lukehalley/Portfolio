# Resume PDF Required

## Action Needed
Place your resume PDF file at this location:
```
/public/resume.pdf
```

## Current Reference
The Hero component references `personalInfo.resumeUrl` which points to `/resume.pdf`

## To Generate from LaTeX CV
If you have your CV in LaTeX format at `/resources/CV.tex`, you can generate the PDF:

```bash
cd resources
pdflatex CV.tex
mv CV.pdf ../public/resume.pdf
```

## Alternative
If you have an existing PDF resume, simply copy it:
```bash
cp /path/to/your/resume.pdf ./public/resume.pdf
```

## Filename Options
If you prefer a different filename:
1. Place file in `/public/` (e.g., `/public/luke-halley-resume.pdf`)
2. Update `personalInfo.resumeUrl` in `/data/content.ts` to match

## Recommended Resume Content
Ensure your resume includes:
- The 95 AWS accounts achievement
- 50% cost savings at Verizon
- Specific technologies with proficiency levels
- Quantified impacts from MinRes and Verizon roles
- AWS Solutions Architect certification

This will align with the updated portfolio messaging that emphasizes scale and business impact.
