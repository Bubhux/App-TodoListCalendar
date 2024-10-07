// components/ThemeSwitcher.jsx


const ThemeSwitcher = ({
    isDark,
    onChange,
    invertedIconLogic = false }) => (
        <label className={`theme__container ${isDark ? "IsDark" : "IsLight"}`}>
            <input
                type="checkbox"
                defaultChecked={invertedIconLogic ? !isDark : isDark}
                onChange={onChange}
            />
            <div />
        </label>
)

export default ThemeSwitcher;
