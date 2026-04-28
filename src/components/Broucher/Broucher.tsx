import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

// Setup PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfFlipBook: React.FC = () => {
  const [numPages, setNumPages] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <section style={{ background: "#f7f7f7", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          Browse PDF with Flip Animation
        </h2>

        {/* Load PDF file */}
        <Document
          file="/MOHFlipBook.pdf" // File should be in public/MOHFlipBook.pdf
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => console.error("PDF load error:", err)}
        />

        {/* Render Flipbook only if PDF is loaded */}
        {numPages > 0 && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <HTMLFlipBook
              width={400}
              height={600}
              size="stretch"
              minWidth={300}
              maxWidth={600}
              minHeight={400}
              maxHeight={800}
              startPage={0}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
              className="shadow-2xl"
              style={{ border: "1px solid #ddd" }}
            >
              {Array.from(new Array(numPages), (_, index) => (
                <div key={`page_${index + 1}`} style={{ background: "#fff" }}>
                  <Page
                    pageNumber={index + 1}
                    width={400}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        )}
      </div>
    </section>
  );
};

export default PdfFlipBook;
