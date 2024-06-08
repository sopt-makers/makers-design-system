import * as Switch from '@radix-ui/react-switch';
import { toggleState, toggleThumb, toggleWrapper } from './style.css';

export interface ToggleProps {
    size?: 'small' | 'large';
    checked: boolean;
}

export default function Toggle({size = 'large', checked = true, ...restProps}: ToggleProps) {


return (
    <Switch.Root className={`${toggleWrapper[size]} ${toggleState[`${checked}`]}` } {...restProps}>
        <Switch.Thumb className={toggleThumb[size]} data-state={checked} />
    </Switch.Root>
    )
}

