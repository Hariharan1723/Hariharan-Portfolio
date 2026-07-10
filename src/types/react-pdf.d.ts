declare module 'react-pdf' {
  import * as React from 'react';

  export interface PdfJsGlobalWorkerOptions {
    workerSrc?: string;
  }

  export interface PdfJsApi {
    GlobalWorkerOptions: PdfJsGlobalWorkerOptions;
    version?: string;
  }

  export interface DocumentProps {
    file?: string;
    children?: React.ReactNode;
    loading?: React.ReactNode;
    className?: string;
    onLoadSuccess?: (payload: { numPages: number }) => void;
  }

  export interface PageProps {
    pageNumber?: number;
    width?: number;
    renderTextLayer?: boolean;
    renderAnnotationLayer?: boolean;
    onRenderSuccess?: () => void;
  }

  export const Document: React.ComponentType<DocumentProps>;
  export const Page: React.ComponentType<PageProps>;
  export const pdfjs: PdfJsApi;
}
