import fs from 'fs'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		let dataBuffer = fs.readFileSync('public/history-10.pdf')

		await pdf(dataBuffer).then(function (data) {
			// number of pages
			console.log(data.numpages)
			// number of rendered pages
			console.log(data.numrender)
			// PDF info
			console.log(data.info)
			// PDF metadata
			console.log(data.metadata)
			// PDF.js version
			// check https://mozilla.github.io/pdf.js/getting_started/
			console.log(data.version)
			// PDF text
			console.log(data.text)

			const pagesCount = data.numpages
			const renderedPages = data.numrender
			const info = data.info
			const metadata = data.metadata
			const version = data.version
			const text = data.text

			return {
				status: 200,
				body: {
					pagesCount,
					renderedPages,
					info,
					metadata,
					version,
					text,
				},
			}
		})

		return NextResponse.json({ message: 'hello' })
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}
