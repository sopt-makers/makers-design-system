import * as Switch from '@radix-ui/react-switch';

export interface ToggleProps {
    size?: 'small' | 'large';
    checked?: boolean;
}

export function Toggle({size, checked, ...restProps}: ToggleProps) {


return (
    <Switch.Root className={`SwitchRoot ${size}`} {...restProps}>
        <Switch.Thumb className="SwitchThumb" />
    </Switch.Root>
    )
}

