import React from 'react';
import styles from './SecurePdfViewer.module.css';

interface SecurePdfViewerProps {
    fileUrl: string;
}

export const SecurePdfViewer: React.FC<SecurePdfViewerProps> = ({ fileUrl }) => {
    return (
        <div className={styles.container}>
            <div className={styles.watermarkContainer}>
                {/* Watermarks removed as they obstruct native viewer */}
            </div>
            <iframe
                src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className={styles.document}
                title="PDF Viewer"
                width="100%"
                height="100%"
            />
        </div>
    );
};
