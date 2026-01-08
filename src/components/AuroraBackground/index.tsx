import './index.scss';

interface AuroraBackgroundProps {
    /** Optional additional CSS classes */
    className?: string;
    /** Whether to show the aurora as an overlay (default: true) */
    overlay?: boolean;
    /** Intensity of the blur effect (default: 'medium') */
    intensity?: 'low' | 'medium' | 'high' | 'ultra';
    /** Animation speed (default: 'slow') */
    speed?: 'slow' | 'medium' | 'fast';
    /** Custom z-index for layering (default: -1) */
    zIndex?: number;
}

/**
 * Aurora Background Component
 * 
 * A mesmerizing animated aurora-style background with flowing neon gradients.
 * Features purple, blue, cyan, and pink colors with smooth wave-like motion.
 * 
 * Perfect for SaaS applications, dashboards, landing pages, and portfolios.
 * 
 * @example
 * // Basic usage - full screen background
 * <AuroraBackground />
 * 
 * @example
 * // As an overlay with custom settings
 * <AuroraBackground 
 *   overlay={true} 
 *   intensity="high" 
 *   speed="slow" 
 * />
 */
const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
    className = '',
    overlay = true,
    intensity = 'medium',
    speed = 'slow',
    zIndex = -1,
}) => {
    const intensityClass = `aurora-intensity-${intensity}`;
    const speedClass = `aurora-speed-${speed}`;
    const overlayClass = overlay ? 'aurora-overlay' : '';

    return (
        <div
            className={`aurora-background ${intensityClass} ${speedClass} ${overlayClass} ${className}`}
            style={{ zIndex }}
            aria-hidden="true"
        >
            {/* Primary Aurora Layer - Main flowing gradient */}
            <div className="aurora-layer aurora-primary">
                <div className="aurora-blob aurora-blob-1"></div>
                <div className="aurora-blob aurora-blob-2"></div>
                <div className="aurora-blob aurora-blob-3"></div>
            </div>

            {/* Secondary Aurora Layer - Subtle accents */}
            <div className="aurora-layer aurora-secondary">
                <div className="aurora-wave aurora-wave-1"></div>
                <div className="aurora-wave aurora-wave-2"></div>
                <div className="aurora-wave aurora-wave-3"></div>
            </div>

            {/* Tertiary Aurora Layer - Ambient glow */}
            <div className="aurora-layer aurora-tertiary">
                <div className="aurora-glow aurora-glow-1"></div>
                <div className="aurora-glow aurora-glow-2"></div>
            </div>

            {/* Noise texture overlay for natural feel */}
            <div className="aurora-noise"></div>

            {/* Subtle vignette for depth */}
            <div className="aurora-vignette"></div>
        </div>
    );
};

export default AuroraBackground;
