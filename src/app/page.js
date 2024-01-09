// 'use client'

// import { pdfjs } from 'react-pdf'
import Test from '@/component/Test'
import NewC from '@/component/NewC'

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// 	'pdfjs-dist/build/pdf.worker.min.js',
// 	import.meta.url
// ).toString()

// import { useState } from 'react'
// import { Document, Page } from 'react-pdf'

export default function Home() {
	// const [numPages, setNumPages] = useState()
	// const [pageNumber, setPageNumber] = useState(1)

	// function onDocumentLoadSuccess({ numPages }) {
	// 	setNumPages(numPages)
	// }
	const a = 'hello'
	return (
		<div>
			{/* <Document file="../../public/history-10.pdf" onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document> */}
			<p>{/* Page {pageNumber} of {numPages} */}</p>
			<Test value={a} />
			<NewC value={a} />
		</div>
	)
}
