# build.ps1
# določi root skripte
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition

# absolutne poti do Markdown datotek
$files = @(
	"$scriptDir\pdf_cover.md",
    "$scriptDir\getting-started-pdf.md",
    "$scriptDir\estimation\basic-pdf.md",
    "$scriptDir\estimation\estimation-pdf.md",
    "$scriptDir\position\rotation-pdf.md",
    "$scriptDir\position\position-flat-pdf.md"
)

# PDF output
$output = "$scriptDir\quick_guide_1.pdf"

# resource path za slike (če so v docs/sl/images)
$resourcePath = "$scriptDir\pdf"

# build PDF
# prej naredi tole:
# $env:Path = "C:\Program Files\Pandoc;" + $env:Path

pandoc $files -o $output --pdf-engine=xelatex --toc --resource-path=$resourcePath
# pandoc $files -o $output --pdf-engine=xelatex --resource-path=$resourcePath

Write-Host "PDF build completed!"