import { useAurora } from './AuroraContext';
import type { AuroraMode, AuroraIntensity, AuroraSpeed } from './AuroraContext';
import './AuroraControls.scss';

/**
 * Aurora Controls Component
 * 
 * A floating control panel for adjusting the aurora background settings.
 * Features preset modes, fine-grained intensity/speed controls, and theme toggle.
 */
const AuroraControls: React.FC = () => {
    const {
        config,
        setIntensity,
        setSpeed,
        setMode,
        toggleEnabled,
        toggleTheme,
        isControlsVisible,
        toggleControls,
    } = useAurora();

    const modes: { key: AuroraMode; label: string; icon: string }[] = [
        { key: 'subtle', label: 'Subtle', icon: '🌙' },
        { key: 'balanced', label: 'Balanced', icon: '⚖️' },
        { key: 'vibrant', label: 'Vibrant', icon: '✨' },
        { key: 'intense', label: 'Intense', icon: '🔥' },
    ];

    const intensities: AuroraIntensity[] = ['low', 'medium', 'high', 'ultra'];
    const speeds: AuroraSpeed[] = ['slow', 'medium', 'fast'];

    return (
        <div className="aurora-controls-wrapper">
            {/* Toggle Button */}
            <button
                className={`aurora-toggle-btn ${isControlsVisible ? 'active' : ''}`}
                onClick={toggleControls}
                aria-label="Toggle Aurora Controls"
                title="Aurora Settings"
            >
                <span className="toggle-icon">🎨</span>
            </button>

            {/* Control Panel */}
            <div className={`aurora-controls-panel ${isControlsVisible ? 'visible' : ''}`}>
                <div className="aurora-controls-header">
                    <h3>Aurora Settings</h3>
                    <div className="header-buttons">
                        {/* Theme Toggle */}
                        <button
                            className={`aurora-theme-btn ${config.theme}`}
                            onClick={toggleTheme}
                            aria-label={config.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            title={config.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        >
                            {config.theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        {/* Power Toggle */}
                        <button
                            className={`aurora-power-btn ${config.enabled ? 'on' : 'off'}`}
                            onClick={toggleEnabled}
                            aria-label={config.enabled ? 'Disable Aurora' : 'Enable Aurora'}
                        >
                            {config.enabled ? '⚡' : '💤'}
                        </button>
                    </div>
                </div>

                {/* Theme Section */}
                <div className="aurora-control-section">
                    <label className="section-label">Theme</label>
                    <div className="theme-buttons">
                        <button
                            className={`theme-btn ${config.theme === 'dark' ? 'active' : ''}`}
                            onClick={() => toggleTheme()}
                            disabled={config.theme === 'dark'}
                        >
                            <span className="theme-icon">🌙</span>
                            <span className="theme-label">Dark</span>
                        </button>
                        <button
                            className={`theme-btn ${config.theme === 'light' ? 'active' : ''}`}
                            onClick={() => toggleTheme()}
                            disabled={config.theme === 'light'}
                        >
                            <span className="theme-icon">☀️</span>
                            <span className="theme-label">Light</span>
                        </button>
                    </div>
                </div>

                {/* Quick Mode Selection */}
                <div className="aurora-control-section">
                    <label className="section-label">Aurora Mode</label>
                    <div className="mode-buttons">
                        {modes.map(({ key, label, icon }) => (
                            <button
                                key={key}
                                className={`mode-btn ${config.mode === key ? 'active' : ''}`}
                                onClick={() => setMode(key)}
                                disabled={!config.enabled}
                            >
                                <span className="mode-icon">{icon}</span>
                                <span className="mode-label">{label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Fine Controls */}
                <div className="aurora-control-section">
                    <label className="section-label">
                        Intensity
                        {config.mode === 'custom' && <span className="custom-badge">Custom</span>}
                    </label>
                    <div className="slider-buttons">
                        {intensities.map((level) => (
                            <button
                                key={level}
                                className={`slider-btn ${config.intensity === level ? 'active' : ''}`}
                                onClick={() => setIntensity(level)}
                                disabled={!config.enabled}
                            >
                                {level.charAt(0).toUpperCase() + level.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="aurora-control-section">
                    <label className="section-label">Speed</label>
                    <div className="slider-buttons">
                        {speeds.map((level) => (
                            <button
                                key={level}
                                className={`slider-btn ${config.speed === level ? 'active' : ''}`}
                                onClick={() => setSpeed(level)}
                                disabled={!config.enabled}
                            >
                                {level.charAt(0).toUpperCase() + level.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Current Status */}
                <div className="aurora-status">
                    <span className={`status-indicator ${config.enabled ? 'active' : ''}`}></span>
                    <span className="status-text">
                        {config.theme === 'light' ? '☀️ ' : '🌙 '}
                        {config.enabled
                            ? `${config.mode === 'custom' ? 'Custom' : config.mode.charAt(0).toUpperCase() + config.mode.slice(1)} mode`
                            : 'Aurora disabled'
                        }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AuroraControls;
