import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import AuroraBackground from '../AuroraBackground';
import AuroraControls from '../AuroraBackground/AuroraControls';
import { useAurora } from '../AuroraBackground/AuroraContext';
import './index.scss';

const Layout: React.FC = () => {
    const { config } = useAurora();

    return (
        <div className="App">
            {/* Aurora Background - conditionally rendered based on context */}
            {config.enabled && (
                <AuroraBackground
                    intensity={config.intensity}
                    speed={config.speed}
                    overlay={true}
                />
            )}

            {/* Aurora Controls - floating panel */}
            <AuroraControls />

            <Sidebar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>

                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    );
};

export default Layout;

