import type { ReactNode, CSSProperties } from 'react';

interface TimelineElementProps {
    className?: string;
    iconStyle?: CSSProperties;
    icon?: ReactNode;
    date?: string;
    children?: ReactNode;
}

interface TimelineProps {
    lineColor?: string;
    children?: ReactNode;
}

export const VerticalTimeline: React.FC<TimelineProps> = ({ lineColor = '#fff', children }) => {
    return (
        <div
            className="vertical-timeline"
            style={{
                position: 'relative',
                padding: '2rem 0',
                width: '100%',
                maxWidth: '1170px',
                margin: '0 auto',
            }}
        >
            {/* Timeline line */}
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '4px',
                    height: '100%',
                    background: lineColor,
                    top: 0,
                }}
                className="timeline-line"
            />
            {children}
            <style>{`
                @media (max-width: 1170px) {
                    .vertical-timeline {
                        padding: 2rem 1rem !important;
                    }
                }
                @media (max-width: 768px) {
                    .vertical-timeline .timeline-line {
                        left: 30px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export const VerticalTimelineElement: React.FC<TimelineElementProps> = ({
    className = '',
    iconStyle = {},
    icon,
    date,
    children,
}) => {
    return (
        <div
            className={`vertical-timeline-element ${className}`}
            style={{
                position: 'relative',
                margin: '2rem 0',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}
        >
            <style>{`
                .vertical-timeline-element {
                    width: 100%;
                }
                .timeline-content {
                    width: 45%;
                    padding: 1.5rem;
                    background: #f5f5f5;
                    border-radius: 8px;
                    box-shadow: 0 3px 0 #ddd;
                    position: relative;
                }
                .timeline-content::before {
                    content: '';
                    position: absolute;
                    top: 20px;
                    width: 0;
                    height: 0;
                    border: 10px solid transparent;
                }
                .vertical-timeline-element:nth-child(odd) {
                    flex-direction: row;
                }
                .vertical-timeline-element:nth-child(odd) .timeline-content {
                    margin-left: auto;
                    margin-right: calc(5% + 30px);
                }
                .vertical-timeline-element:nth-child(odd) .timeline-content::before {
                    right: -20px;
                    border-left-color: #f5f5f5;
                }
                .vertical-timeline-element:nth-child(even) {
                    flex-direction: row-reverse;
                }
                .vertical-timeline-element:nth-child(even) .timeline-content {
                    margin-right: auto;
                    margin-left: calc(5% + 30px);
                }
                .vertical-timeline-element:nth-child(even) .timeline-content::before {
                    left: -20px;
                    border-right-color: #f5f5f5;
                }
                .timeline-icon {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    z-index: 10;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
                .timeline-date {
                    position: absolute;
                    top: 20px;
                    color: #8d8d8d;
                    font-size: 14px;
                    font-weight: 500;
                }
                .vertical-timeline-element:nth-child(odd) .timeline-date {
                    left: calc(50% + 50px);
                }
                .vertical-timeline-element:nth-child(even) .timeline-date {
                    right: calc(50% + 50px);
                    text-align: right;
                }
                @media (max-width: 768px) {
                    .timeline-content {
                        width: calc(100% - 90px) !important;
                        margin-left: 80px !important;
                        margin-right: 0 !important;
                    }
                    .vertical-timeline-element:nth-child(odd) .timeline-content,
                    .vertical-timeline-element:nth-child(even) .timeline-content {
                        margin-left: 80px !important;
                        margin-right: 0 !important;
                    }
                    .timeline-content::before {
                        left: -20px !important;
                        right: auto !important;
                        border-left-color: transparent !important;
                        border-right-color: #f5f5f5 !important;
                    }
                    .timeline-icon {
                        left: 30px !important;
                        width: 50px !important;
                        height: 50px !important;
                    }
                    .timeline-date {
                        position: relative !important;
                        display: block !important;
                        left: auto !important;
                        right: auto !important;
                        top: auto !important;
                        margin-bottom: 10px;
                        text-align: left !important;
                    }
                    .vertical-timeline-element:nth-child(odd) .timeline-date,
                    .vertical-timeline-element:nth-child(even) .timeline-date {
                        left: auto !important;
                        right: auto !important;
                    }
                }
            `}</style>

            {/* Icon */}
            <div
                className="timeline-icon"
                style={{
                    background: '#000',
                    ...iconStyle,
                }}
            >
                {icon}
            </div>

            {/* Content */}
            <div className="timeline-content">
                {date && (
                    <span className="timeline-date mobile-date" style={{ display: 'none' }}>
                        {date}
                    </span>
                )}
                {children}
            </div>

            {/* Date for desktop */}
            {date && (
                <span className="timeline-date desktop-date">
                    {date}
                </span>
            )}
        </div>
    );
};
