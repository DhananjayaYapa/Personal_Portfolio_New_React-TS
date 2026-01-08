import { useState } from 'react';
import AuroraBackground from './index';
import './AuroraDemo.scss';

/**
 * Aurora Background Demo Page
 * 
 * A standalone demo page to showcase all aurora background configurations.
 * Useful for testing and previewing different settings.
 */
const AuroraDemo: React.FC = () => {
    const [intensity, setIntensity] = useState<'low' | 'medium' | 'high' | 'ultra'>('medium');
    const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('slow');

    return (
        <div className="aurora-demo">
            {/* Aurora Background with current settings */}
            <AuroraBackground
                intensity={intensity}
                speed={speed}
                overlay={true}
            />

            {/* Demo Content Overlay */}
            <div className="aurora-demo-content">
                <header className="aurora-demo-header">
                    <h1 className="aurora-demo-title">
                        <span className="gradient-text">Aurora Background</span>
                    </h1>
                    <p className="aurora-demo-subtitle">
                        Premium animated background with flowing neon gradients
                    </p>
                </header>

                {/* Controls Panel */}
                <div className="aurora-demo-controls">
                    <div className="control-group">
                        <label className="control-label">Intensity</label>
                        <div className="control-buttons">
                            {(['low', 'medium', 'high', 'ultra'] as const).map((level) => (
                                <button
                                    key={level}
                                    className={`control-btn ${intensity === level ? 'active' : ''}`}
                                    onClick={() => setIntensity(level)}
                                >
                                    {level.charAt(0).toUpperCase() + level.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">Speed</label>
                        <div className="control-buttons">
                            {(['slow', 'medium', 'fast'] as const).map((level) => (
                                <button
                                    key={level}
                                    className={`control-btn ${speed === level ? 'active' : ''}`}
                                    onClick={() => setSpeed(level)}
                                >
                                    {level.charAt(0).toUpperCase() + level.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="aurora-demo-features">
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3>Neon Gradients</h3>
                        <p>Purple, blue, cyan & pink flowing colors</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>GPU Accelerated</h3>
                        <p>60fps smooth animations using transform3d</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Responsive</h3>
                        <p>Adapts beautifully to any screen size</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">♿</div>
                        <h3>Accessible</h3>
                        <p>Respects reduced motion preferences</p>
                    </div>
                </div>

                {/* Usage Code Example */}
                <div className="aurora-demo-code">
                    <h2>Usage</h2>
                    <pre className="code-block">
                        <code>{`import AuroraBackground from './components/AuroraBackground';

// Basic usage
<AuroraBackground />

// With custom settings
<AuroraBackground 
    intensity="${intensity}" 
    speed="${speed}" 
    overlay={true} 
/>`}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default AuroraDemo;
