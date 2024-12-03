import { useEffect, useState } from 'react';
import { THEME } from '../../redux/features/themeSlice';
import './theme.scss';
import { getLocalStorage, setLocalStorage } from '../../utils/uitls';

const Theme = () => {
    const [theme, setTheme] = useState<string>(() => {
        return getLocalStorage('theme') || 'light'; // Default to 'light' if nothing is saved
    });

    useEffect(() => {
        document.querySelector('body')?.setAttribute('data-theme', theme);
        setLocalStorage('theme', theme);
    }, [theme]);

    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.checked ? THEME.dark : THEME.light);
    };

    return (
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                    checked={theme === THEME.dark}
                />
                <div className="slider round"></div>
            </label>
            <em>Enable Dark Mode!</em>
        </div>
    );
};

export default Theme;
