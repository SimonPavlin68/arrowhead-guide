# build.ps1
# določi root skripte
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition

# absolutne poti do Markdown datotek
$files = @(
	"$scriptDir\pdf_cover.md",
    "$scriptDir\getting-started-pdf.md",
    "$scriptDir\estimation\basic-pdf.md",
    "$scriptDir\estimation\estimation-pdf.md"
)

# PDF output
$output = "$scriptDir\quick_guide.pdf"

# resource path za slike (če so v docs/sl/images)
$resourcePath = "$scriptDir\pdf"

# build PDF
pandoc $files -o $output --pdf-engine=xelatex --toc --resource-path=$resourcePath
# pandoc $files -o $output --pdf-engine=xelatex --resource-path=$resourcePath

Write-Host "PDF build completed!"