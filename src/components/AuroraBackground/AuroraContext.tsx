import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Aurora intensity and speed types
export type AuroraIntensity = 'low' | 'medium' | 'high' | 'ultra';
export type AuroraSpeed = 'slow' | 'medium' | 'fast';

// Preset modes for quick selection
export type AuroraMode = 'subtle' | 'balanced' | 'vibrant' | 'intense' | 'custom';

// Theme type
export type ThemeMode = 'dark' | 'light';

// Aurora configuration interface
interface AuroraConfig {
    intensity: AuroraIntensity;
    speed: AuroraSpeed;
    mode: AuroraMode;
    enabled: boolean;
    theme: ThemeMode;
}

// Preset configurations for each mode
const AURORA_PRESETS: Record<Exclude<AuroraMode, 'custom'>, Omit<AuroraConfig, 'mode' | 'enabled' | 'theme'>> = {
    subtle: { intensity: 'low', speed: 'slow' },
    balanced: { intensity: 'medium', speed: 'slow' },
    vibrant: { intensity: 'high', speed: 'medium' },
    intense: { intensity: 'ultra', speed: 'medium' },
};

// Context value interface
interface AuroraContextValue {
    config: AuroraConfig;
    setIntensity: (intensity: AuroraIntensity) => void;
    setSpeed: (speed: AuroraSpeed) => void;
    setMode: (mode: AuroraMode) => void;
    setEnabled: (enabled: boolean) => void;
    toggleEnabled: () => void;
    setTheme: (theme: ThemeMode) => void;
    toggleTheme: () => void;
    isControlsVisible: boolean;
    setControlsVisible: (visible: boolean) => void;
    toggleControls: () => void;
}

// Default configuration
const DEFAULT_CONFIG: AuroraConfig = {
    intensity: 'medium',
    speed: 'slow',
    mode: 'balanced',
    enabled: true,
    theme: 'dark',
};

// Local storage key
const STORAGE_KEY = 'aurora-config';

// Create context
const AuroraContext = createContext<AuroraContextValue | undefined>(undefined);

// Load config from localStorage
const loadConfig = (): AuroraConfig => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            return { ...DEFAULT_CONFIG, ...parsed };
        }
    } catch (error) {
        console.warn('Failed to load aurora config from localStorage:', error);
    }
    return DEFAULT_CONFIG;
};

// Save config to localStorage
const saveConfig = (config: AuroraConfig): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (error) {
        console.warn('Failed to save aurora config to localStorage:', error);
    }
};

// Apply theme to document
const applyTheme = (theme: ThemeMode): void => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    // Also add/remove class for easier CSS targeting
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }
};

// Provider Props
interface AuroraProviderProps {
    children: ReactNode;
}

/**
 * Aurora Context Provider
 * 
 * Provides global aurora background configuration state
 * with persistence to localStorage.
 */
export const AuroraProvider: React.FC<AuroraProviderProps> = ({ children }) => {
    const [config, setConfig] = useState<AuroraConfig>(loadConfig);
    const [isControlsVisible, setControlsVisible] = useState(false);

    // Apply theme on mount and when it changes
    useEffect(() => {
        applyTheme(config.theme);
    }, [config.theme]);

    // Save to localStorage whenever config changes
    useEffect(() => {
        saveConfig(config);
    }, [config]);

    // Set intensity (switches to custom mode if not matching a preset)
    const setIntensity = (intensity: AuroraIntensity) => {
        setConfig(prev => {
            const newConfig = { ...prev, intensity };
            // Check if this matches a preset
            const matchingMode = Object.entries(AURORA_PRESETS).find(
                ([, preset]) => preset.intensity === intensity && preset.speed === prev.speed
            );
            return {
                ...newConfig,
                mode: matchingMode ? (matchingMode[0] as AuroraMode) : 'custom',
            };
        });
    };

    // Set speed (switches to custom mode if not matching a preset)
    const setSpeed = (speed: AuroraSpeed) => {
        setConfig(prev => {
            const newConfig = { ...prev, speed };
            // Check if this matches a preset
            const matchingMode = Object.entries(AURORA_PRESETS).find(
                ([, preset]) => preset.intensity === prev.intensity && preset.speed === speed
            );
            return {
                ...newConfig,
                mode: matchingMode ? (matchingMode[0] as AuroraMode) : 'custom',
            };
        });
    };

    // Set mode (applies preset configuration)
    const setMode = (mode: AuroraMode) => {
        if (mode === 'custom') {
            setConfig(prev => ({ ...prev, mode: 'custom' }));
        } else {
            const preset = AURORA_PRESETS[mode];
            setConfig(prev => ({
                ...prev,
                ...preset,
                mode,
            }));
        }
    };

    // Set enabled state
    const setEnabled = (enabled: boolean) => {
        setConfig(prev => ({ ...prev, enabled }));
    };

    // Toggle enabled state
    const toggleEnabled = () => {
        setConfig(prev => ({ ...prev, enabled: !prev.enabled }));
    };

    // Set theme
    const setTheme = (theme: ThemeMode) => {
        setConfig(prev => ({ ...prev, theme }));
    };

    // Toggle theme
    const toggleTheme = () => {
        setConfig(prev => ({
            ...prev,
            theme: prev.theme === 'dark' ? 'light' : 'dark'
        }));
    };

    // Toggle controls visibility
    const toggleControls = () => {
        setControlsVisible(prev => !prev);
    };

    const value: AuroraContextValue = {
        config,
        setIntensity,
        setSpeed,
        setMode,
        setEnabled,
        toggleEnabled,
        setTheme,
        toggleTheme,
        isControlsVisible,
        setControlsVisible,
        toggleControls,
    };

    return (
        <AuroraContext.Provider value={value}>
            {children}
        </AuroraContext.Provider>
    );
};

/**
 * Hook to access Aurora context
 * 
 * @throws Error if used outside of AuroraProvider
 */
export const useAurora = (): AuroraContextValue => {
    const context = useContext(AuroraContext);
    if (!context) {
        throw new Error('useAurora must be used within an AuroraProvider');
    }
    return context;
};

// Export presets for external use
export { AURORA_PRESETS };
